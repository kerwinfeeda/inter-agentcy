"use client";

import { useState } from "react";
import { Plus, Eye } from "lucide-react";

const players = [
  { name: "Ibrahima Konaté", position: "CB", age: 21, club: "Le Havre AC", league: "Ligue 2", region: "Europe", note: "Strong aerial presence, composure on the ball", added: "Feb 10, 2026" },
  { name: "Ayo Adebayo", position: "ST", age: 19, club: "Enyimba FC", league: "NPFL", region: "Africa", note: "Explosive pace, clinical finisher", added: "Feb 8, 2026" },
  { name: "Kwesi Appiah", position: "RW", age: 20, club: "Hearts of Oak", league: "GPL", region: "Africa", note: "Quick feet, excellent 1v1 ability", added: "Feb 6, 2026" },
  { name: "Felix Adjei", position: "CAM", age: 22, club: "Asante Kotoko", league: "GPL", region: "Africa", note: "Creative vision, set piece specialist", added: "Feb 4, 2026" },
  { name: "Matteo Rossi", position: "CM", age: 23, club: "Catanzaro", league: "Serie B", region: "Europe", note: "Box-to-box engine, good passing range", added: "Feb 2, 2026" },
  { name: "Ousmane Traoré", position: "CB", age: 20, club: "ASEC Mimosas", league: "Ligue 1 (CIV)", region: "Africa", note: "Athletic, reads the game well", added: "Jan 30, 2026" },
  { name: "Diego Vargas", position: "ST", age: 22, club: "Deportivo Cali", league: "Liga BetPlay", region: "South America", note: "Target man with good link-up play", added: "Jan 28, 2026" },
  { name: "Samba Diallo", position: "CDM", age: 21, club: "Jaraaf", league: "Ligue 1 (SEN)", region: "Africa", note: "Anchor midfielder, strong tackler", added: "Jan 25, 2026" },
  { name: "Tomáš Horák", position: "GK", age: 24, club: "Zbrojovka Brno", league: "Czech First League", region: "Europe", note: "Shot-stopper, commanding presence", added: "Jan 22, 2026" },
  { name: "Carlos Mendes", position: "LB", age: 22, club: "Leixões SC", league: "Liga Portugal 2", region: "Europe", note: "Attacking full-back, good crosses", added: "Jan 20, 2026" },
  { name: "Yaya Touré Jr.", position: "CM", age: 18, club: "Stellenbosch FC", league: "PSL", region: "Africa", note: "Technically gifted, great composure for age", added: "Jan 18, 2026" },
  { name: "Rafael Santos", position: "RW", age: 20, club: "Vitória Guimarães B", league: "Liga Portugal 2", region: "Europe", note: "Electric pace, direct runner", added: "Jan 15, 2026" },
];

export default function ScoutWatchlist() {
  const [filterPosition, setFilterPosition] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  const positions = Array.from(new Set(players.map((p) => p.position)));
  const regions = Array.from(new Set(players.map((p) => p.region)));

  const filtered = players.filter((p) => {
    if (filterPosition && p.position !== filterPosition) return false;
    if (filterRegion && p.region !== filterRegion) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Player Watchlist</h1>
          <p className="text-sm text-foreground-muted mt-1">{players.length} players being tracked</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg gradient-steel-btn text-sm font-medium text-white">
          <Plus className="w-4 h-4" /> Add to Watchlist
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        <select value={filterPosition} onChange={(e) => setFilterPosition(e.target.value)} className="px-3 py-2 rounded-lg bg-background-elevated border border-border text-sm text-foreground-muted focus:outline-none">
          <option value="">All Positions</option>
          {positions.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
        <select value={filterRegion} onChange={(e) => setFilterRegion(e.target.value)} className="px-3 py-2 rounded-lg bg-background-elevated border border-border text-sm text-foreground-muted focus:outline-none">
          <option value="">All Regions</option>
          {regions.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p, i) => (
          <div key={i} className="card rounded-xl p-5 card-hover">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-sm">{p.name}</h3>
                <p className="text-xs text-foreground-muted">{p.position} · {p.age} yrs · {p.club}</p>
              </div>
              <Eye className="w-4 h-4 text-accent flex-shrink-0" />
            </div>
            <p className="text-xs text-foreground-dim mb-2">{p.league} · {p.region}</p>
            <p className="text-xs text-foreground-muted italic">&quot;{p.note}&quot;</p>
            <p className="text-xs text-foreground-dim mt-3">Added {p.added}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
