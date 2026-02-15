#!/usr/bin/env python3
import json
import re
import unicodedata

RAW_FILE = "/Users/kerwinalabi/.openclaw/workspace/inter-agentcy/src/data/fa-agents-raw.txt"
EXISTING_FILE = "/Users/kerwinalabi/.openclaw/workspace/inter-agentcy/src/data/agents.json"
OUTPUT_FILE = EXISTING_FILE

def slugify(name):
    # Normalize unicode, lowercase, replace non-alphanumeric with hyphens
    s = unicodedata.normalize('NFKD', name).encode('ascii', 'ignore').decode('ascii')
    s = s.lower().strip()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    s = s.strip('-')
    return s

def parse_line(line):
    line = line.strip()
    if not line:
        return None
    
    # Match: FARA#### ... (Yes DD/MM/YYYY | No)
    m = re.match(r'^(FARA\d+)\s+(.+?)\s+(Yes\s+(\d{2}/\d{2}/\d{4})|No)\s*$', line)
    if not m:
        print(f"WARN: Could not parse: {line}")
        return None
    
    reg = m.group(1)
    name = m.group(2).strip()
    auth_str = m.group(3)
    date_str = m.group(4)  # None if "No"
    
    authorised = auth_str.startswith("Yes")
    auth_until = None
    if date_str:
        d, mo, y = date_str.split('/')
        auth_until = f"{y}-{mo}-{d}"
    
    # Title-case the name nicely
    # Keep original casing but title-case if ALL CAPS or all lower
    words = name.split()
    processed = []
    for w in words:
        if w.isupper() or w.islower():
            # Title case, but handle hyphenated names
            processed.append('-'.join(part.capitalize() for part in w.split('-')))
        else:
            processed.append(w)
    name = ' '.join(processed)
    
    return {
        "name": name,
        "registrationNumber": reg,
        "country": "England",
        "federation": "The FA",
        "verified": True,
        "verifiedDate": "2026-02-13",
        "authorisedMinors": authorised,
        "authorisedMinorsUntil": auth_until,
        "slug": slugify(name),
        "source": "FA Registered Football Agents List"
    }

# Parse raw file
fa_agents = []
with open(RAW_FILE) as f:
    for line in f:
        agent = parse_line(line)
        if agent:
            fa_agents.append(agent)

print(f"Parsed {len(fa_agents)} FA agents")
auth_count = sum(1 for a in fa_agents if a["authorisedMinors"])
print(f"Authorised for minors: {auth_count}")

# Load existing agents
with open(EXISTING_FILE) as f:
    existing = json.load(f)

print(f"Existing agents: {len(existing)}")

# Build lookup by lowercase name
existing_by_name = {}
for a in existing:
    existing_by_name[a["name"].lower()] = a

# Merge
merged = []
fa_names_matched = set()

for fa in fa_agents:
    key = fa["name"].lower()
    if key in existing_by_name:
        # Merge: keep existing fields + add FA fields
        ex = dict(existing_by_name[key])
        ex.update({
            "registrationNumber": fa["registrationNumber"],
            "federation": fa["federation"],
            "verified": True,
            "verifiedDate": fa["verifiedDate"],
            "authorisedMinors": fa["authorisedMinors"],
            "authorisedMinorsUntil": fa["authorisedMinorsUntil"],
            "source": fa["source"],
        })
        if "country" not in ex or not ex["country"]:
            ex["country"] = fa["country"]
        merged.append(ex)
        fa_names_matched.add(key)
        print(f"  MERGED: {fa['name']}")
    else:
        merged.append(fa)

# Add existing agents that weren't matched
for a in existing:
    if a["name"].lower() not in fa_names_matched:
        merged.append(a)

# Sort by name
merged.sort(key=lambda a: a["name"].lower())

print(f"Total merged: {len(merged)}")

with open(OUTPUT_FILE, 'w') as f:
    json.dump(merged, f, indent=2, ensure_ascii=False)

print("Done!")
