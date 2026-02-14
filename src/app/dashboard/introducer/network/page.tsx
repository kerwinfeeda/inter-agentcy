"use client";

import { useState } from "react";
import { Filter, Globe } from "lucide-react";

const contacts = [
  { name: "Marcus Webb", role: "Agent", region: "England", strength: 5, lastContact: "Feb 10, 2026" },
  { name: "Tiago Reis", role: "Agent", region: "Portugal", strength: 4, lastContact: "Jan 28, 2026" },
  { name: "Dr. Sofia Alves", role: "Service Provider", region: "Portugal", strength: 3, lastContact: "Feb 5, 2026" },
  { name: "Ibrahim Diallo", role: "Scout", region: "West Africa", strength: 5, lastContact: "Feb 12, 2026" },
  { name: "Pieter van Dijk", role: "Club Director", region: "Belgium", strength: 4, lastContact: "Jan 22, 2026" },
  { name: "Emeka Nwosu", role: "Agent", region: "West Africa", strength: 4, lastContact: "Feb 8, 2026" },
  { name: "Laura Martínez", role: "Club Director", region: "Spain", strength: 3, lastContact: "Jan 15, 2026" },
  { name: "Jean-Pierre Mbeki", role: "Scout", region: "Central Africa", strength: 2, lastContact: "Dec 20, 2025" },
  { name: "Hans Müller", role: "Club Director", region: "Germany", strength: 3, lastContact: "Jan 8, 2026" },
  { name: "Fatima El-Amin", role: "Agent", region: "North Africa", strength: 4, lastContact: "Feb 1, 2026" },
  { name: "David Okonkwo", role: "Academy Director", region: "West Africa", strength: 5, lastContact: "Feb 11, 2026" },
  { name: "Ricardo Lopes", role: "Agent", region: "Portugal", strength: 3, lastContact: "Jan 18, 2026" },
  { name: "Sarah Jennings", role: "Service Provider", region: "England", strength: 2, lastContact: "Dec 30, 2025" },
  { name: "Adem Yılmaz", role: "Club Director", region: "Turkey", strength: 4, lastContact: "Feb 10, 2026" },
  { name: "Kofi Asante", role: "Scout", region: "West Africa", strength: 4, lastContact: "Feb 6, 2026" },
];

const roles = ["All", "Agent", "Scout", "Club Director", "Academy Director", "Service Provider"];
const regions = ["All", "England", "Portugal", "Belgium", "Spain", "Germany", "Turkey", "West Africa", "North Africa", "Central Africa"];

export default function NetworkPage() {
  const [roleFilter, setRoleFilter] = useState("All");
  const [regionFilter, setRegionFilter] = useState("All");

  const filtered = contacts.filter((c) => {
    if (roleFilter !== "All" && c.role !== roleFilter) return false;
    if (regionFilter !== "All" && c.region !== regionFilter) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Network</h1>
        <p className="text-sm text-foreground-muted mt-1">Your professional contacts across the football industry</p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-foreground-dim" />
          <span className="text-xs text-foreground-muted">Role:</span>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="bg-background-elevated border border-border rounded-lg px-3 py-1.5 text-xs text-foreground"
          >
            {roles.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-foreground-dim" />
          <span className="text-xs text-foreground-muted">Region:</span>
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="bg-background-elevated border border-border rounded-lg px-3 py-1.5 text-xs text-foreground"
          >
            {regions.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((c, i) => (
          <div key={i} className="card rounded-xl p-5 card-hover">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-sm">{c.name}</h3>
                <p className="text-xs text-foreground-dim">{c.role}</p>
              </div>
              <span className="text-xs text-foreground-muted bg-background-elevated px-2 py-1 rounded">{c.region}</span>
            </div>

            <div className="flex items-center gap-1 mb-3">
              <span className="text-xs text-foreground-muted mr-1">Strength</span>
              {[1, 2, 3, 4, 5].map((d) => (
                <span
                  key={d}
                  className={`w-2 h-2 rounded-full ${d <= c.strength ? "bg-accent-light" : "bg-background-elevated"}`}
                />
              ))}
            </div>

            <p className="text-xs text-foreground-dim">Last contact: {c.lastContact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
