#!/usr/bin/env python3
"""Full BeSoccer sweep — search each player, fetch profile, extract data."""
import json, re, sys, time, urllib.request, urllib.parse

def fetch(url):
    try:
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
            'Accept': 'text/html', 'Accept-Language': 'en-US,en;q=0.9',
        })
        with urllib.request.urlopen(req, timeout=10) as r:
            return r.read().decode('utf-8', errors='replace')
    except Exception as e:
        return None

def search_player(name):
    """Search BeSoccer for a player, return first player URL."""
    q = urllib.parse.quote(name)
    html = fetch(f"https://www.besoccer.com/search?q={q}")
    if not html:
        return None
    # Find player links
    matches = re.findall(r'href="(https://www\.besoccer\.com/player/[^"]+)"', html)
    if matches:
        return matches[0]
    return None

def extract(html):
    """Extract key data from BeSoccer player page."""
    d = {}
    
    # Full name from page
    m = re.search(r'<h2[^>]*class="[^"]*title[^"]*"[^>]*>([^<]+)</h2>', html)
    if not m:
        m = re.search(r'##\s+\w\.\s+\w+\s*\n\s*([^\n]+)', html)
    
    # Age
    m = re.search(r'(\d{2})\s*\n\s*years', html)
    if m: d['age'] = int(m.group(1))
    
    # Height
    m = re.search(r'(\d{3})\s*\n\s*cms', html)
    if m: d['height'] = f"{m.group(1)}cm"
    
    # Weight
    m = re.search(r'(\d{2,3})\s*\n\s*kgs', html)
    
    # Shirt number
    m = re.search(r'(\d{1,2})\s*\n\s*shirt number', html)
    if m: d['shirtNumber'] = int(m.group(1))
    
    # Market value
    m = re.search(r'([\d.]+)\s*\n\s*M\.€', html)
    if m:
        val = float(m.group(1))
        d['marketValue'] = f"€{val:.0f}M" if val >= 1 else f"€{val*1000:.0f}K"
    
    # ELO/Rating
    m = re.search(r'(\d{2})\s*\n\s*ELO', html)
    if m: d['rating'] = int(m.group(1))
    
    # Preferred foot
    m = re.search(r'Preferred foot\s*\n\s*(\w+)\s+foot', html)
    if m: d['preferredFoot'] = m.group(1).capitalize()
    
    # Season stats
    m = re.search(r'Official matches\s*\n\s*(\d+)\s*\n\s*Matches\s*\n\s*([\d,]+)\'\s*\n\s*Minutes\s*\n\s*(\d+)', html)
    if m:
        d['appearances'] = int(m.group(1))
        d['minutesPlayed'] = int(m.group(2).replace(',', ''))
        d['goals'] = int(m.group(3))
    
    # Assists
    m = re.search(r'(\d+)\s*\n\s*[\d.]+\s*[▲▼]?\s*\n\s*Assists/90', html)
    if m: d['assists'] = int(m.group(1))
    
    # Cards
    m = re.search(r'(\d+)/(\d+)\s*\n\s*[\d.]+\s*[▲▼]?\s*\n\s*Cards/90', html)
    if m:
        d['yellowCards'] = int(m.group(1))
        d['redCards'] = int(m.group(2))
    
    # Position from title
    title = re.search(r'<title>([^<]+)</title>', html)
    if title:
        t = title.group(1)
        # Club from title "Profile Name, Club:"
        cm = re.search(r',\s*([^:]+):', t)
        if cm:
            club = cm.group(1).strip()
            # Normalize common names
            club = club.replace('Man. City', 'Manchester City').replace('Man. United', 'Manchester United')
            club = club.replace('Atl Madrid', 'Atletico Madrid').replace('B. Dortmund', 'Borussia Dortmund')
            d['currentClub'] = club
    
    # Nationality
    countries = re.findall(r'(?:Nigeria|England|Spain|France|Germany|Brazil|Portugal|Netherlands|Belgium|Argentina|'
                          r'Italy|Norway|Wales|Scotland|Ireland|Ghana|Senegal|Morocco|USA|Turkey|Denmark|'
                          r'Austria|Switzerland|Australia|Croatia|Serbia|Mali|Guinea|Bosnia|Jamaica|'
                          r'Ivory Coast|DR Congo|Cameroon|Honduras|Albania|Mexico|Russia|Zambia|'
                          r'Sierra Leone|Guinea-Bissau|Cape Verde|Northern Ireland|Colombia|Algeria)', html)
    if countries:
        d['nationality'] = countries[0]
    
    return d

with open('src/data/players.json') as f:
    players = json.load(f)

updated = 0
failed = []

for i, player in enumerate(players):
    name = player['name']
    sys.stdout.write(f"[{i+1}/{len(players)}] {name}... ")
    sys.stdout.flush()
    
    url = search_player(name)
    if not url:
        print("NOT FOUND")
        failed.append(name)
        time.sleep(0.3)
        continue
    
    html = fetch(url)
    if not html:
        print("FETCH FAILED")
        failed.append(name)
        time.sleep(0.3)
        continue
    
    data = extract(html)
    
    if not data:
        print("NO DATA")
        failed.append(name)
        time.sleep(0.3)
        continue
    
    changes = []
    if 'age' in data and data['age'] != player.get('age'):
        player['age'] = data['age']; changes.append(f"age={data['age']}")
    if 'height' in data and data['height'] != player.get('height'):
        player['height'] = data['height']; changes.append(f"h={data['height']}")
    if 'shirtNumber' in data and data['shirtNumber'] != player.get('shirtNumber'):
        player['shirtNumber'] = data['shirtNumber']; changes.append(f"#{data['shirtNumber']}")
    if 'marketValue' in data:
        player['marketValue'] = data['marketValue']; changes.append(f"val={data['marketValue']}")
    if 'rating' in data:
        player['rating'] = data['rating']; changes.append(f"rat={data['rating']}")
    if 'preferredFoot' in data:
        player['preferredFoot'] = data['preferredFoot']
    if 'currentClub' in data and data['currentClub'] != player.get('currentClub'):
        player['currentClub'] = data['currentClub']; changes.append(f"club={data['currentClub']}")
    if 'appearances' in data:
        player['stats']['appearances'] = data['appearances']; changes.append(f"app={data['appearances']}")
    if 'goals' in data:
        player['stats']['goals'] = data['goals']
    if 'assists' in data:
        player['stats']['assists'] = data['assists']
    if 'minutesPlayed' in data:
        player['stats']['minutesPlayed'] = data['minutesPlayed']
    if 'yellowCards' in data:
        player['stats']['yellowCards'] = data['yellowCards']
    if 'redCards' in data:
        player['stats']['redCards'] = data['redCards']
    
    if changes:
        print(", ".join(changes))
        updated += 1
    else:
        print("no changes")
    
    time.sleep(0.4)

with open('src/data/players.json', 'w') as f:
    json.dump(players, f, indent=2, ensure_ascii=False)

print(f"\nDone! Updated {updated}/{len(players)}. Failed: {len(failed)}")
if failed:
    print("Failed players:", ", ".join(failed))
