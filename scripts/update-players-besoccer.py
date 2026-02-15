#!/usr/bin/env python3
"""
Update players.json with data from BeSoccer.
Run: python3 scripts/update-players-besoccer.py
"""

import json
import re
import time
import urllib.request
from html.parser import HTMLParser

# BeSoccer search URL
SEARCH_URL = "https://www.besoccer.com/search?q={}"

def fetch(url, max_retries=2):
    """Fetch a URL and return text content."""
    for attempt in range(max_retries + 1):
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
                'Accept': 'text/html,application/xhtml+xml',
                'Accept-Language': 'en-US,en;q=0.9',
            })
            with urllib.request.urlopen(req, timeout=10) as resp:
                return resp.read().decode('utf-8', errors='replace')
        except Exception as e:
            if attempt < max_retries:
                time.sleep(1)
            else:
                print(f"  Failed to fetch {url}: {e}")
                return None

def extract_player_data(html):
    """Extract player data from BeSoccer player page HTML."""
    data = {}
    
    # Rating/ELO
    m = re.search(r'<div[^>]*class="[^"]*rating[^"]*"[^>]*>\s*(\d+)\s*</div>', html)
    if not m:
        m = re.search(r'"elo"\s*:\s*"?(\d+)"?', html)
    if m:
        data['rating'] = int(m.group(1))
    
    # Market value
    m = re.search(r'([\d.]+)\s*M\.?€', html)
    if m:
        val = float(m.group(1))
        data['marketValue'] = f"€{val:.0f}M" if val >= 1 else f"€{val*1000:.0f}K"
    
    # Height
    m = re.search(r'(\d{3})\s*cms?', html)
    if m:
        data['height'] = f"{m.group(1)}cm"
    
    # Age
    m = re.search(r'(\d{2})\s*years', html)
    if m:
        data['age'] = int(m.group(1))
    
    # Preferred foot
    m = re.search(r'Preferred foot\s*</[^>]+>\s*<[^>]+>\s*(\w+ foot)', html, re.I)
    if m:
        foot = m.group(1).replace(' foot', '')
        data['preferredFoot'] = foot.capitalize()
    
    # Season stats - matches
    m = re.search(r'Official matches\s*</[^>]+>\s*<[^>]+>\s*(\d+)\s*</[^>]+>\s*<[^>]+>\s*Matches', html)
    if not m:
        m = re.search(r'(\d+)\s*</[^>]+>\s*<[^>]+>\s*Matches', html)
    if m:
        data['appearances'] = int(m.group(1))
    
    # Goals
    m = re.search(r'(\d+)\s*\n\s*[\d.]+\s*[▲▼]?\s*\n\s*Goals/90', html)
    if not m:
        m = re.search(r'Current season\s*(\d+)\s*\n\s*(\d+)', html)
    if m:
        if 'appearances' not in data:
            data['appearances'] = int(m.group(1))
        data['goals'] = int(m.group(2)) if m.lastindex >= 2 else int(m.group(1))
    
    # Position
    m = re.search(r'Main position\s*</[^>]+>\s*<[^>]+>\s*(Forward|Midfielder|Defender|Goalkeeper)', html, re.I)
    if m:
        data['position'] = m.group(1).capitalize()
    
    # Shirt number  
    m = re.search(r'(\d{1,2})\s*shirt number', html)
    if m:
        data['shirtNumber'] = int(m.group(1))
    
    # Current club
    m = re.search(r'<title>[^<]*,\s*([^:<]+?):', html)
    if m:
        club = m.group(1).strip().replace('Man. City', 'Manchester City').replace('Man. United', 'Manchester United')
        data['currentClub'] = club
    
    # Nationality from page
    m = re.search(r'Born on[^<]*in\s+(\w[\w\s]*)', html)
    if m:
        data['birthplace'] = m.group(1).strip()
    
    return data

def main():
    # Load existing players
    with open('src/data/players.json', 'r') as f:
        players = json.load(f)
    
    print(f"Loaded {len(players)} players")
    
    # Known BeSoccer slugs for major players
    known_slugs = {
        "Erling Haaland": "e-haaland-326208",
        "Kylian Mbappe": "k-mbappe-lottin-234474",
        "Jude Bellingham": "j-bellingham-585498",
        "Vinicius Junior": "vinicius-jose-de-oliveira-junior-415847",
        "Cole Palmer": "c-palmer-686498",
        "Bukayo Saka": "b-saka-677979",
        "Florian Wirtz": "f-wirtz-653498",
        "Lamine Yamal": "l-nasraoui-3189487",
        "Julian Alvarez": "j-alvarez-772644",
        "Bruno Fernandes": "bruno-miguel-borges-fernandes-193339",
        "Jamal Musiala": "j-musiala-716730",
        "Alexander Isak": "a-isak-341589",
        "Ruben Dias": "r-dias-340079",
        "Jack Grealish": "j-grealish-134989",
        "James Maddison": "j-maddison-232591",
        "Harvey Elliott": "h-elliott-700784",
        "Thibaut Courtois": "t-courtois-69337",
        "David de Gea": "d-de-gea-76540",
        "Gianluigi Donnarumma": "g-donnarumma-328188",
        "Marc Guehi": "m-guehi-666788",
        "Kai Havertz": "k-havertz-338855",
        "Anthony Gordon": "a-gordon-660756",
        "Federico Dimarco": "f-dimarco-324832",
        "John Stones": "j-stones-164570",
        "Ben White": "b-white-429992",
        "Mohammed Kudus": "m-kudus-614968",
        "Ademola Lookman": "a-lookman-349027",
        "Leon Goretzka": "l-goretzka-263614",
        "Serge Gnabry": "s-gnabry-226706",
        "Virgil van Dijk": "v-van-dijk-124609",
        "Brennan Johnson": "b-johnson-670612",
        "Emile Smith Rowe": "e-smith-rowe-635706",
        "Samu Aghehowa": "s-omorodion-1046780",
        "David Neres": "david-neres-322076",
        "Galeno": "galeno-397660",
        "Jeremie Frimpong": "j-frimpong-685244",
        "Breel Embolo": "b-embolo-261502",
        "Archie Gray": "a-gray-1074026",
        "Tyler Dibling": "t-dibling-1461800",
        "Ethan Nwaneri": "e-nwaneri-3040878",
        "Geovany Quenda": "g-quenda-2102164",
        "Malik Tillman": "m-tillman-616706",
        "Tyrick Mitchell": "t-mitchell-662376",
        "Konrad Laimer": "k-laimer-349291",
        "Malick Thiaw": "m-thiaw-680360",
        "Rodrigo Mora": "r-mora-2203506",
    }
    
    updated = 0
    for i, player in enumerate(players):
        name = player['name']
        slug = known_slugs.get(name)
        
        if not slug:
            continue
            
        url = f"https://www.besoccer.com/player/{slug}"
        print(f"[{i+1}/{len(players)}] Fetching {name}...")
        
        html = fetch(url)
        if not html:
            continue
        
        data = extract_player_data(html)
        
        if data.get('rating'):
            player['rating'] = data['rating']
        if data.get('marketValue'):
            player['marketValue'] = data['marketValue']
        if data.get('height'):
            player['height'] = data['height']
        if data.get('age'):
            player['age'] = data['age']
        if data.get('preferredFoot'):
            player['preferredFoot'] = data['preferredFoot']
        if data.get('shirtNumber'):
            player['shirtNumber'] = data['shirtNumber']
        if data.get('appearances'):
            player['stats']['appearances'] = data['appearances']
        if data.get('goals'):
            player['stats']['goals'] = data['goals']
        if data.get('currentClub'):
            player['currentClub'] = data['currentClub']
            
        updated += 1
        time.sleep(0.5)  # Be polite
    
    # Save updated data
    with open('src/data/players.json', 'w') as f:
        json.dump(players, f, indent=2, ensure_ascii=False)
    
    print(f"\nDone! Updated {updated}/{len(players)} players.")

if __name__ == '__main__':
    main()
