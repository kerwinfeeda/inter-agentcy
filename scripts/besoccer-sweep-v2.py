#!/usr/bin/env python3
"""
Sweep BeSoccer using URL pattern guessing.
BeSoccer URLs follow: /player/first-initial-lastname-ID
We try fetching the players page listing to find URLs.
"""
import json, re, sys, time, urllib.request

def fetch(url):
    try:
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
            'Accept': 'text/html', 'Accept-Language': 'en-US,en;q=0.9',
        })
        with urllib.request.urlopen(req, timeout=10) as r:
            return r.read().decode('utf-8', errors='replace')
    except:
        return None

def extract(html):
    d = {}
    # Age
    m = re.search(r'(\d{2})\s*\n\s*years', html)
    if m: d['age'] = int(m.group(1))
    # Height
    m = re.search(r'(\d{3})\s*\n\s*cms', html)
    if m: d['height'] = f"{m.group(1)}cm"
    # Shirt
    m = re.search(r'(\d{1,2})\s*\n\s*shirt number', html)
    if m: d['shirtNumber'] = int(m.group(1))
    # Market value
    m = re.search(r'([\d.]+)\s*\n\s*M\.€', html)
    if m:
        val = float(m.group(1))
        d['marketValue'] = f"€{val:.0f}M" if val >= 1 else f"€{val*1000:.0f}K"
    # ELO
    m = re.search(r'(\d{2})\s*\n\s*ELO', html)
    if m: d['rating'] = int(m.group(1))
    # Preferred foot
    m = re.search(r'Preferred foot\s*\n\s*(\w+)\s+foot', html)
    if m: d['preferredFoot'] = m.group(1).capitalize()
    # Season stats
    m = re.search(r'Official matches\s*\n\s*(\d+)\s*\n\s*Matches\s*\n\s*([\d,]+)\'\s*\n\s*Minutes\s*\n\s*(\d+)', html)
    if m:
        d['appearances'] = int(m.group(1))
        d['minutesPlayed'] = int(m.group(2).replace(',',''))
        d['goals'] = int(m.group(3))
    # Assists
    m = re.search(r'(\d+)\s*\n\s*[\d.]+\s*[▲▼]?\s*\n\s*Assists/90', html)
    if m: d['assists'] = int(m.group(1))
    # Cards
    m = re.search(r'(\d+)/(\d+)\s*\n\s*[\d.]+\s*[▲▼]?\s*\n\s*Cards/90', html)
    if m: d['yellowCards'] = int(m.group(1)); d['redCards'] = int(m.group(2))
    # Club from title
    title = re.search(r'Profile\s+[^,]+,\s*([^:]+):', html)
    if title:
        club = title.group(1).strip()
        replacements = {
            'Man. City': 'Manchester City', 'Man. United': 'Manchester United',
            'Atl Madrid': 'Atletico Madrid', 'B. Dortmund': 'Borussia Dortmund',
            'Leverkusen': 'Bayer Leverkusen', 'Villarreal CF': 'Villarreal',
        }
        for old, new in replacements.items():
            club = club.replace(old, new)
        d['currentClub'] = club
    # Position from page
    m = re.search(r'(For|Mid|Def|Goa)\s*\n\s*position', html)
    if m:
        pos_map = {'For': 'Forward', 'Mid': 'Midfielder', 'Def': 'Defender', 'Goa': 'Goalkeeper'}
        d['position'] = pos_map.get(m.group(1), m.group(1))
    # Full name
    lines = html.split('\n')
    for j, line in enumerate(lines):
        if 'years' in line and j > 2:
            # Full name is usually a few lines above
            for k in range(max(0, j-10), j):
                candidate = lines[k].strip()
                if len(candidate) > 10 and ' ' in candidate and not candidate.startswith('<') and not candidate.startswith('#'):
                    d['fullName'] = candidate
                    break
            break
    return d

# Known BeSoccer URLs (manually verified)
known = {
    "Jerry Afriyie": None,
    "Samu Aghehowa": "s-omorodion-1046780",
    "Salvador Agra": "salvador-agra-95225",
    "Honest Ahanor": None,
    "Julian Alvarez": "j-alvarez-772644",
    "Jacob Ambaek": None,
    "Miguel Angel Morro": None,
    "Ossama Ashley": None,
    "Paul Ayongo": None,
    "Esmir Bajraktarevic": "e-bajraktarevic-1164764",
    "Ellery Balcombe": "e-balcombe-586536",
    "Rafael Barbosa": None,
    "Thierno Barry": "t-barry-1261942",
    "Jude Bellingham": "j-bellingham-585498",
    "Jobe Bellingham": "j-bellingham-1131204",
    "Mads Bidstrup": "m-bidstrup-616458",
    "Mika Biereth": "m-biereth-980564",
    "Ciaron Brown": "c-brown-595604",
    "Mohamed Camara": "m-camara-614838",
    "Jeff Chabot": "j-chabot-395822",
    "Matheus Costa": None,
    "Thibaut Courtois": "t-courtois-69337",
    "Benjamin Cremaschi": "b-cremaschi-2075264",
    "David de Gea": "d-de-gea-76540",
    "Bobby De Cordova-Reid": "b-de-cordova-reid-214693",
    "Nathan De Cat": None,
    "Zeno Debast": "z-debast-1048456",
    "Ermedin Demirovic": "e-demirovic-353505",
    "Ruben Dias": "r-dias-340079",
    "Leonardo Diaz": None,
    "Tyler Dibling": "t-dibling-1461800",
    "Federico Dimarco": "f-dimarco-324832",
    "Ousmane Diomande": "o-diomande-1247066",
    "Gianluigi Donnarumma": "g-donnarumma-328188",
    "Joshua Duffus": None,
    "Demir Ege Tiknaz": "d-tiknaz-2208426",
    "Kennet Eichhorn": None,
    "Harvey Elliott": "h-elliott-700784",
    "Breel Embolo": "b-embolo-261502",
    "Bruno Fernandes": "bruno-miguel-borges-fernandes-193339",
    "Seko Fofana": "s-fofana-298163",
    "Fernando Fonseca": None,
    "Jeremie Frimpong": "j-frimpong-685244",
    "Ibrahim Fullah": None,
    "Thierry Gale": None,
    "Galeno": "galeno-397660",
    "Serge Gnabry": "s-gnabry-226706",
    "Angel Gomes": "a-gomes-543756",
    "Anthony Gordon": "a-gordon-660756",
    "Leon Goretzka": "l-goretzka-263614",
    "Archie Gray": "a-gray-1074026",
    "Jack Grealish": "j-grealish-134989",
    "Marc Guehi": "m-guehi-666788",
    "Pape Gueye": "p-gueye-472124",
    "Erling Haaland": "e-haaland-326208",
    "Kai Havertz": "k-havertz-338855",
    "Lourenco Henriques": None,
    "Hamza Igamane": "h-igamane-1260994",
    "Zeidane Inoussa": "z-inoussa-1005108",
    "Nestory Irankunda": "n-irankunda-1392714",
    "Alexander Isak": "a-isak-341589",
    "Brennan Johnson": "b-johnson-670612",
    "Vinicius Junior": "vinicius-junior-415847",
    "Benjamin Kanuric": "b-kanuric-913398",
    "Konstantinos Karetsas": "k-karetsas-3150753",
    "Lennart Karl": None,
    "Caoimhin Kelleher": "c-kelleher-543752",
    "Mohammed Kudus": "m-kudus-614968",
    "Konrad Laimer": "k-laimer-349291",
    "Esteban Lepaul": None,
    "James Maddison": "j-maddison-232591",
    "Ademola Lookman": "a-lookman-301865",
    "Rudy Matondo": "r-matondo-604308",
    "Emmanuel Maviram": None,
    "Ibrahim Maza": "i-maza-1378074",
    "Kylian Mbappe": "k-mbappe-lottin-234474",
    "Ibrahim Mbaye": "i-mbaye-1463262",
    "Oisin McEntee": "o-mcentee-702528",
    "Quentin Merlin": "q-merlin-669076",
    "Tyrick Mitchell": "t-mitchell-662376",
    "Rene Mitongo": None,
    "Jamal Mohammed": None,
    "Rodrigo Mora": "r-mora-2203506",
    "Paulo Mota": None,
    "Jamal Musiala": "j-musiala-716730",
    "Kingstone Mutandwa": "k-mutandwa-1385612",
    "Naldo": None,
    "Noah Nartey": "n-nartey-610926",
    "Cher Ndour": "c-ndour-1172048",
    "David Neres": "david-neres-322076",
    "Neto": None,
    "Rio Ngumoha": "r-ngumoha-2182690",
    "Serif Nhaga": None,
    "Ethan Nwaneri": "e-nwaneri-3040878",
    "Nico O'Reilly": "n-oreilly-1148290",
    "Prosper Obah": None,
    "Diego Ochoa": None,
    "Toyosi Olusanya": "t-olusanya-488816",
    "Cole Palmer": "c-palmer-686498",
    "Luccas Paraizo": None,
    "Paulite": None,
    "Aleksandar Pavlovic": "a-pavlovic-1059458",
    "Ruben Pina": None,
    "Alex Pritchard": "a-pritchard-199233",
    "Geovany Quenda": "g-quenda-2102164",
    "Leopold Querfeld": "l-querfeld-1048454",
    "David Raum": "d-raum-425000",
    "Vitor Reis": "v-reis-1510024",
    "Julian Rijkhoff": "j-rijkhoff-1110640",
    "Bryan Rochez": "b-rochez-183753",
    "Agustin Ruberto": "a-ruberto-1526264",
    "Hakim Sahabo": None,
    "Bukayo Saka": "b-saka-677979",
    "Brice Samba": "b-samba-265519",
    "Rafael Santos": None,
    "Marcos Senesi": "m-senesi-362293",
    "Onyekachi Silas": None,
    "Simaozinho": None,
    "Emile Smith Rowe": "e-smith-rowe-635706",
    "Matthew Sorinola": "m-sorinola-663000",
    "Yegor Sorokin": None,
    "Anton Stach": "a-stach-501590",
    "Igor Stefanovic": None,
    "John Stones": "j-stones-164570",
    "Goncalo Tabuaco": None,
    "Matt Targett": "m-targett-194477",
    "Malick Thiaw": "m-thiaw-680360",
    "Malik Tillman": "m-tillman-616706",
    "Ricardo Valente": None,
    "Virgil van Dijk": "v-van-dijk-124609",
    "Giacomo Vrioni": "g-vrioni-378942",
    "Luka Vuskovic": "l-vuskovic-1505808",
    "Werton": "werton-1382524",
    "Ben White": "b-white-429992",
    "Florian Wirtz": "f-wirtz-653498",
    "Aziz Yakubu": None,
    "Lamine Yamal": "l-nasraoui-3189487",
    "Andy Yiadom": "a-yiadom-193201",
    "Evrard Zag": None,
}

with open('src/data/players.json') as f:
    players = json.load(f)

updated = 0
for i, player in enumerate(players):
    name = player['name']
    slug = known.get(name)
    if not slug:
        continue
    
    url = f"https://www.besoccer.com/player/{slug}"
    sys.stdout.write(f"[{i+1}/{len(players)}] {name}... ")
    sys.stdout.flush()
    
    html = fetch(url)
    if not html or '404' in html[:500]:
        print("FAILED")
        time.sleep(0.3)
        continue
    
    # Convert to text for easier parsing
    import io
    from html.parser import HTMLParser
    class S(HTMLParser):
        def __init__(self):
            super().__init__()
            self.text = []
        def handle_data(self, d):
            self.text.append(d)
    s = S()
    s.feed(html)
    text = '\n'.join(s.text)
    
    data = extract(text)
    
    changes = []
    if 'age' in data: player['age'] = data['age']; changes.append(f"age={data['age']}")
    if 'height' in data: player['height'] = data['height']; changes.append(f"h={data['height']}")
    if 'shirtNumber' in data: player['shirtNumber'] = data['shirtNumber']; changes.append(f"#{data['shirtNumber']}")
    if 'marketValue' in data: player['marketValue'] = data['marketValue']; changes.append(f"val={data['marketValue']}")
    if 'rating' in data: player['rating'] = data['rating']; changes.append(f"rat={data['rating']}")
    if 'preferredFoot' in data: player['preferredFoot'] = data['preferredFoot']
    if 'currentClub' in data: player['currentClub'] = data['currentClub']; changes.append(f"club={data['currentClub']}")
    if 'position' in data: player['position'] = data['position']
    if 'appearances' in data: player['stats']['appearances'] = data['appearances']
    if 'goals' in data: player['stats']['goals'] = data['goals']
    if 'assists' in data: player['stats']['assists'] = data['assists']
    if 'minutesPlayed' in data: player['stats']['minutesPlayed'] = data['minutesPlayed']
    if 'yellowCards' in data: player['stats']['yellowCards'] = data['yellowCards']
    if 'redCards' in data: player['stats']['redCards'] = data['redCards']
    
    print(", ".join(changes) if changes else "parsed ok")
    updated += 1
    time.sleep(0.4)

with open('src/data/players.json', 'w') as f:
    json.dump(players, f, indent=2, ensure_ascii=False)

print(f"\nDone! Fetched {updated}/{len(players)} from BeSoccer.")
