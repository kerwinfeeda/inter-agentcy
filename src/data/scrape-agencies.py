#!/usr/bin/env python3
"""Scrape enriched data for all football agencies using web_fetch via subprocess."""

import json
import re
import subprocess
import sys
import time
import urllib.request
import urllib.error
from pathlib import Path

AGENCIES_PATH = Path(__file__).parent / "agencies.json"
OUTPUT_PATH = Path(__file__).parent / "agencies-enriched.json"
BASE_URL = "https://www.footballagencies.com"

def fetch_page(url, max_chars=15000):
    """Fetch a page and return text content."""
    try:
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        })
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode('utf-8', errors='replace')
        return html
    except Exception as e:
        return None

def extract_section(text, header, next_headers=None):
    """Extract text between a markdown header and the next one."""
    pattern = rf'###\s*{re.escape(header)}\s*\n(.*?)(?=###|\Z)'
    m = re.search(pattern, text, re.DOTALL)
    return m.group(1).strip() if m else ""

def parse_key_facts(section):
    """Parse key facts section into a dict."""
    facts = {}
    lines = section.split('\n')
    for line in lines:
        line = line.strip()
        if ':' in line:
            key, _, val = line.partition(':')
            key = key.strip().lower()
            val = val.strip()
            if not val:
                continue
            if 'also known' in key:
                facts['alsoKnownAs'] = val
            elif 'founded' in key:
                facts['founded'] = val
            elif 'headquarter' in key:
                facts['headquarters'] = val
            elif 'fifa' in key or 'registration' in key:
                facts['fifaRegistration'] = val
            elif 'player' in key:
                facts['playerCount'] = val
            elif 'language' in key:
                facts['languages'] = val
            elif 'region' in key:
                facts['regions'] = val
            elif 'email' in key:
                # Extract email from markdown link
                em = re.search(r'[\w.+-]+@[\w.-]+', val)
                facts['email'] = em.group(0) if em else val
            elif 'website' in key:
                url_m = re.search(r'https?://[^\s\)]+', val)
                facts['website'] = url_m.group(0) if url_m else val
            elif 'instagram' in key:
                url_m = re.search(r'https?://[^\s\)]+', val)
                facts.setdefault('socials', {})['instagram'] = url_m.group(0) if url_m else val
            elif 'linkedin' in key:
                url_m = re.search(r'https?://[^\s\)]+', val)
                facts.setdefault('socials', {})['linkedin'] = url_m.group(0) if url_m else val
            elif 'facebook' in key:
                url_m = re.search(r'https?://[^\s\)]+', val)
                facts.setdefault('socials', {})['facebook'] = url_m.group(0) if url_m else val
            elif key in ('x', 'twitter') or 'x:' in key.lower():
                url_m = re.search(r'https?://[^\s\)]+', val)
                facts.setdefault('socials', {})['twitter'] = url_m.group(0) if url_m else val
    return facts

def parse_list_items(section):
    """Parse bullet list items from a section."""
    items = []
    for line in section.split('\n'):
        line = line.strip()
        if line.startswith('- ') or line.startswith('* '):
            item = line[2:].strip()
            # Remove markdown links but keep text
            item = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', item)
            if item and item != '-':
                items.append(item)
    return items

def parse_key_people(section):
    """Parse key people into list of {name, role}."""
    people = []
    for line in section.split('\n'):
        line = line.strip()
        if line.startswith('- ') or line.startswith('* '):
            item = line[2:].strip()
            item = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', item)
            # Try to split on — or -
            for sep in [' — ', ' – ', ' - ']:
                if sep in item:
                    name, role = item.split(sep, 1)
                    people.append({"name": name.strip(), "role": role.strip()})
                    break
            else:
                if item and item != '-':
                    people.append({"name": item, "role": ""})
    return people

def parse_page_content(text, agency):
    """Parse the fetched markdown content into enriched agency data."""
    enriched = {**agency, "verified": True}
    
    # Parse Key Facts
    facts_section = extract_section(text, "Key Facts")
    if facts_section:
        facts = parse_key_facts(facts_section)
        enriched.update({k: v for k, v in facts.items() if k != 'socials'})
        if 'socials' in facts:
            enriched['socials'] = facts['socials']
    
    # About
    about = extract_section(text, "About")
    if about:
        enriched['about'] = about
    
    # Key People
    kp_section = extract_section(text, "Key People")
    if kp_section:
        people = parse_key_people(kp_section)
        if people:
            enriched['keyPeople'] = people
    
    # Client Roster - parse subsections
    roster = extract_section(text, "Client Roster")
    if roster:
        # Notable/top players
        players = []
        rising = []
        former = []
        coaches = []
        
        current_cat = 'players'
        for line in roster.split('\n'):
            line_clean = line.strip()
            line_lower = line_clean.lower()
            
            if 'rising' in line_lower or 'u23' in line_lower or 'u-23' in line_lower:
                current_cat = 'rising'
                # Sometimes players are on same line after –
                after = line_clean.split('–')[-1] if '–' in line_clean else ''
                if after.strip():
                    rising.extend([p.strip() for p in after.split(',') if p.strip()])
                continue
            elif 'former' in line_lower:
                current_cat = 'former'
                after = line_clean.split('–')[-1] if '–' in line_clean else ''
                if after.strip():
                    former.extend([p.strip() for p in after.split(',') if p.strip()])
                continue
            elif 'coach' in line_lower or 'staff' in line_lower:
                current_cat = 'coaches'
                continue
            elif 'top player' in line_lower or 'current' in line_lower:
                current_cat = 'players'
                continue
            
            if line_clean.startswith('- ') or line_clean.startswith('* '):
                item = line_clean[2:].strip()
                item = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', item)
                if item and item != '-':
                    if current_cat == 'players':
                        players.append(item)
                    elif current_cat == 'rising':
                        rising.append(item)
                    elif current_cat == 'former':
                        former.append(item)
                    elif current_cat == 'coaches':
                        coaches.append(item)
        
        if players:
            enriched['notablePlayers'] = players
        if rising:
            enriched['risingTalents'] = rising
        if former:
            enriched['formerClients'] = former
        if coaches:
            enriched['coaches'] = coaches
    
    # Notable Deals
    deals_section = extract_section(text, "Notable Deals")
    if deals_section:
        deals = parse_list_items(deals_section)
        if deals:
            enriched['notableDeals'] = deals
    
    # Services
    services = extract_section(text, "Services")
    if services:
        enriched['services'] = services
    
    # Partner Network
    partner = extract_section(text, "Partner Network")
    if partner:
        enriched['partnerNetwork'] = partner
    
    # Track Record
    track = extract_section(text, "Track Record")
    if track:
        enriched['trackRecord'] = track
    
    # Philosophy
    philosophy = extract_section(text, "Philosophy")
    if philosophy:
        enriched['philosophy'] = philosophy
    
    # Fees
    fees = extract_section(text, "Fees")
    if fees:
        enriched['fees'] = fees
    
    # Compliance
    compliance = extract_section(text, "Compliance")
    if compliance:
        enriched['compliance'] = compliance
    
    # Awards
    awards_section = extract_section(text, "Awards")
    if awards_section:
        awards = parse_list_items(awards_section)
        if awards:
            enriched['awards'] = awards
    
    return enriched

def main():
    with open(AGENCIES_PATH) as f:
        agencies = json.load(f)
    
    print(f"Processing {len(agencies)} agencies...")
    
    # Load existing progress if any
    enriched = []
    if OUTPUT_PATH.exists():
        try:
            with open(OUTPUT_PATH) as f:
                enriched = json.load(f)
            print(f"Resuming from {len(enriched)} already processed")
        except:
            enriched = []
    
    processed_slugs = {a['slug'] for a in enriched}
    
    for i, agency in enumerate(agencies):
        if agency['slug'] in processed_slugs:
            continue
        
        url = f"{BASE_URL}{agency['href']}"
        print(f"[{i+1}/{len(agencies)}] {agency['name']}...", end=' ', flush=True)
        
        # Use urllib to fetch
        html = fetch_page(url)
        if html:
            # Convert HTML to rough markdown-like text
            # Remove scripts and styles
            html_clean = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
            html_clean = re.sub(r'<style[^>]*>.*?</style>', '', html_clean, flags=re.DOTALL)
            # Convert headers
            html_clean = re.sub(r'<h[1-6][^>]*>(.*?)</h[1-6]>', r'\n### \1\n', html_clean)
            # Convert links
            html_clean = re.sub(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', r'[\2](\1)', html_clean)
            # Convert list items
            html_clean = re.sub(r'<li[^>]*>(.*?)</li>', r'- \1', html_clean, flags=re.DOTALL)
            # Remove remaining tags
            html_clean = re.sub(r'<[^>]+>', ' ', html_clean)
            # Clean up whitespace
            html_clean = re.sub(r'[ \t]+', ' ', html_clean)
            html_clean = re.sub(r'\n{3,}', '\n\n', html_clean)
            # Decode entities
            html_clean = html_clean.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace('&#8211;', '–').replace('&#8212;', '—').replace('&nbsp;', ' ').replace('&#8217;', "'").replace('&#8220;', '"').replace('&#8221;', '"').replace('&euro;', '€').replace('&#8364;', '€')
            
            result = parse_page_content(html_clean, agency)
            print(f"OK ({len(result)} fields)")
        else:
            print("FAILED - keeping basic")
            result = {**agency, "verified": True}
        
        enriched.append(result)
        
        # Save every 10
        if len(enriched) % 10 == 0:
            with open(OUTPUT_PATH, 'w') as f:
                json.dump(enriched, f, indent=2, ensure_ascii=False)
            print(f"  [saved {len(enriched)} agencies]")
        
        # Small delay to be polite
        time.sleep(0.3)
    
    # Final save
    with open(OUTPUT_PATH, 'w') as f:
        json.dump(enriched, f, indent=2, ensure_ascii=False)
    
    print(f"\nDone! {len(enriched)} agencies saved to {OUTPUT_PATH}")

if __name__ == '__main__':
    main()
