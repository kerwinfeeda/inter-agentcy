#!/usr/bin/env python3
import json
import re
import unicodedata

RAW_FILE = "/Users/kerwinalabi/.openclaw/workspace/inter-agentcy/src/data/fa-agents-batch3.txt"
EXISTING_FILE = "/Users/kerwinalabi/.openclaw/workspace/inter-agentcy/src/data/agents.json"
OUTPUT_FILE = EXISTING_FILE

def slugify(name):
    s = unicodedata.normalize('NFKD', name).encode('ascii', 'ignore').decode('ascii')
    s = s.lower().strip()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    s = s.strip('-')
    return s

def parse_line(line):
    line = line.strip()
    if not line:
        return None
    # Skip header lines
    if line.startswith("Registration Number") or line.startswith("*") or line.startswith("✝"):
        return None
    m = re.match(r'^(FARA\d+)\s+(.+?)\s+(Yes\s+(\d{2}/\d{2}/\d{4})|No)\s*$', line)
    if not m:
        # Try stripping trailing symbols like ✝ or *
        cleaned = re.sub(r'[✝*]+\s*$', '', line).strip()
        m = re.match(r'^(FARA\d+)\s+(.+?)\s+(Yes\s+(\d{2}/\d{2}/\d{4})|No)\s*$', cleaned)
        if not m:
            print(f"WARN: Could not parse: {line}")
            return None
    reg = m.group(1)
    name = m.group(2).strip()
    auth_str = m.group(3)
    date_str = m.group(4)
    authorised = auth_str.startswith("Yes")
    auth_until = None
    if date_str:
        auth_until = date_str
    words = name.split()
    processed = []
    for w in words:
        if w.isupper() or w.islower():
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
        "verifiedDate": "2026-02-15",
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

print(f"Parsed {len(fa_agents)} FA agents from batch 3")

# Load existing agents
with open(EXISTING_FILE) as f:
    existing = json.load(f)
print(f"Existing agents: {len(existing)}")

# Build lookups
existing_by_name = {a["name"].lower(): i for i, a in enumerate(existing)}
existing_by_reg = {a.get("registrationNumber", ""): i for i, a in enumerate(existing) if a.get("registrationNumber")}

duplicates = 0
new_count = 0

for fa in fa_agents:
    key_name = fa["name"].lower()
    key_reg = fa["registrationNumber"]
    
    idx = None
    if key_reg in existing_by_reg:
        idx = existing_by_reg[key_reg]
    elif key_name in existing_by_name:
        idx = existing_by_name[key_name]
    
    if idx is not None:
        ex = existing[idx]
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
        if "slug" not in ex or not ex["slug"]:
            ex["slug"] = fa["slug"]
        duplicates += 1
        print(f"  MERGED: {fa['name']} ({fa['registrationNumber']})")
    else:
        existing.append(fa)
        # Update lookups for subsequent dedup
        existing_by_name[key_name] = len(existing) - 1
        existing_by_reg[key_reg] = len(existing) - 1
        new_count += 1

# Sort by name
existing.sort(key=lambda a: a["name"].lower())

print(f"\nNew agents added: {new_count}")
print(f"Duplicates merged: {duplicates}")
print(f"New total: {len(existing)}")

with open(OUTPUT_FILE, 'w') as f:
    json.dump(existing, f, indent=2, ensure_ascii=False)

print("Done!")
