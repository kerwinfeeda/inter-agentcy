"use client";

import { useState } from "react";
import { Search, Filter, User } from "lucide-react";

const allPlayers = [
  { name: "Rafael Domingues", position: "CM", age: 22, nationality: "Portuguese", value: "€800K", club: "Gil Vicente", rating: 7.2 },
  { name: "Emmanuel Osei", position: "CB", age: 24, nationality: "Ghanaian", value: "€1.2M", club: "Club Brugge", rating: 7.5 },
  { name: "Youssef El-Hadj", position: "AM", age: 21, nationality: "Moroccan", value: "€2.5M", club: "Brighton (loan)", rating: 7.8 },
  { name: "Lucas Ferreira", position: "CM", age: 26, nationality: "Brazilian", value: "€1.8M", club: "SC Braga", rating: 7.4 },
  { name: "Kwame Mensah", position: "RW", age: 25, nationality: "Ghanaian", value: "€600K", club: "KV Mechelen", rating: 6.8 },
  { name: "André Santos", position: "LB", age: 23, nationality: "Portuguese", value: "€900K", club: "Vitória SC", rating: 7.0 },
  { name: "Moussa Diaby", position: "ST", age: 20, nationality: "Senegalese", value: "€1.5M", club: "Metz", rating: 7.1 },
  { name: "Tomás Ribeiro", position: "GK", age: 27, nationality: "Portuguese", value: "€700K", club: "Moreirense", rating: 7.3 },
  { name: "Ibrahim Kanté", position: "DM", age: 23, nationality: "Ivorian", value: "€1.1M", club: "Cercle Brugge", rating: 7.0 },
  { name: "Aleksa Petrović", position: "CB", age: 22, nationality: "Serbian", value: "€950K", club: "Vojvodina", rating: 6.9 },
  { name: "João Silva", position: "RB", age: 24, nationality: "Portuguese", value: "€500K", club: "Gil Vicente", rating: 6.7 },
  { name: "Ousmane Traoré", position: "LW", age: 19, nationality: "Malian", value: "€1.3M", club: "Stade Malien", rating: 7.6 },
];

const positions = ["All", "GK", "CB", "LB", "RB", "DM", "CM", "AM", "LW", "RW", "ST"];
const nationalities = ["All", "Portuguese", "Ghanaian", "Moroccan", "Brazilian", "Senegalese", "Ivorian", "Serbian", "Malian"];

export default function ClubSearchPage() {
  const [query, setQuery] = useState("");
  const [posFilter, setPosFilter] = useState("All");
  const [natFilter, setNatFilter] = useState("All");

  const filtered = allPlayers.filter((p) => {
    if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false;
    if (posFilter !== "All" && p.position !== posFilter) return false;
    if (natFilter !== "All" && p.nationality !== natFilter) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Player Search</h1>
        <p className="text-sm text-foreground-muted mt-1">Find players matching your recruitment needs</p>
      </div>

      <div className="card rounded-xl p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 flex-1 min-w-[200px] bg-background-elevated rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-foreground-dim" />
            <input
              type="text"
              placeholder="Search by name..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent text-sm outline-none flex-1 text-foreground placeholder:text-foreground-dim"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-foreground-dim" />
            <select value={posFilter} onChange={(e) => setPosFilter(e.target.value)} className="bg-background-elevated border border-border rounded-lg px-3 py-2 text-xs text-foreground">
              {positions.map((p) => <option key={p} value={p}>{p === "All" ? "All Positions" : p}</option>)}
            </select>
            <select value={natFilter} onChange={(e) => setNatFilter(e.target.value)} className="bg-background-elevated border border-border rounded-lg px-3 py-2 text-xs text-foreground">
              {nationalities.map((n) => <option key={n} value={n}>{n === "All" ? "All Nationalities" : n}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((p, i) => (
          <div key={i} className="card rounded-xl p-5 card-hover">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-background-elevated flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-foreground-dim" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm">{p.name}</h3>
                <p className="text-xs text-foreground-dim">{p.club} · {p.nationality}</p>
              </div>
              <span className="text-xs font-bold text-accent-light bg-accent-light/10 px-2 py-1 rounded">{p.rating}</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2 py-1 bg-background-elevated rounded text-xs text-foreground-muted">{p.position}</span>
              <span className="px-2 py-1 bg-background-elevated rounded text-xs text-foreground-muted">Age {p.age}</span>
              <span className="px-2 py-1 bg-background-elevated rounded text-xs text-foreground-muted">{p.value}</span>
            </div>
            <button className="mt-3 w-full py-2 rounded-lg gradient-steel-btn text-xs font-medium text-white transition-all">
              View Full Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
