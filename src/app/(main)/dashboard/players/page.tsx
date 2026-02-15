"use client";

import { useState } from "react";
import { Plus, Search, Filter } from "lucide-react";
import Link from "next/link";

const players = [
  { id: 1, name: "Emmanuel Osei", position: "ST", age: 23, club: "FC Porto", contractExpiry: "Jun 2027", marketValue: "€4.5M", status: "Active" },
  { id: 2, name: "Lucas Ferreira", position: "LW", age: 25, club: "Sporting CP", contractExpiry: "Mar 2026", marketValue: "€3.8M", status: "Active" },
  { id: 3, name: "Ahmed Hassan", position: "CM", age: 24, club: "Al Ahly", contractExpiry: "Dec 2025", marketValue: "€3.1M", status: "Active" },
  { id: 4, name: "Youssef El-Hadj", position: "AM", age: 21, club: "Standard Liège", contractExpiry: "Jun 2026", marketValue: "€2.8M", status: "Active" },
  { id: 5, name: "Kwame Mensah", position: "CB", age: 22, club: "Free Agent", contractExpiry: "—", marketValue: "€1.5M", status: "Free Agent" },
  { id: 6, name: "João Silva", position: "RB", age: 20, club: "Benfica B", contractExpiry: "Jun 2028", marketValue: "€1.2M", status: "Active" },
  { id: 7, name: "Ibrahim Touré", position: "CDM", age: 19, club: "ASEC Mimosas", contractExpiry: "Dec 2026", marketValue: "€900K", status: "Prospect" },
  { id: 8, name: "André Santos", position: "GK", age: 27, club: "Braga", contractExpiry: "Jun 2025", marketValue: "€2.2M", status: "Active" },
  { id: 9, name: "Moussa Diallo", position: "LB", age: 18, club: "FC Metz U19", contractExpiry: "Jun 2027", marketValue: "€600K", status: "Prospect" },
  { id: 10, name: "Carlos Mendes", position: "RW", age: 26, club: "Vitória SC", contractExpiry: "Jan 2026", marketValue: "€1.8M", status: "Active" },
];

const positions = ["All", "ST", "LW", "RW", "AM", "CM", "CDM", "CB", "LB", "RB", "GK"];
const statuses = ["All", "Active", "Prospect", "Free Agent"];

export default function PlayersPage() {
  const [search, setSearch] = useState("");
  const [posFilter, setPosFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = players.filter((p) => {
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (posFilter !== "All" && p.position !== posFilter) return false;
    if (statusFilter !== "All" && p.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Players</h1>
          <p className="text-sm text-foreground-muted mt-1">{players.length} players in your portfolio</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg gradient-steel-btn text-sm font-medium text-white">
          <Plus className="w-4 h-4" /> Add Player
        </button>
      </div>

      {/* Filters */}
      <div className="card rounded-xl p-4">
        <div className="flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-dim" />
            <input
              type="text"
              placeholder="Search players..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-background-elevated border border-border rounded-lg text-sm text-foreground placeholder:text-foreground-dim focus:outline-none focus:border-border-light"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-foreground-dim" />
            <select
              value={posFilter}
              onChange={(e) => setPosFilter(e.target.value)}
              className="bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground-muted focus:outline-none"
            >
              {positions.map((p) => <option key={p} value={p}>{p === "All" ? "All Positions" : p}</option>)}
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground-muted focus:outline-none"
            >
              {statuses.map((s) => <option key={s} value={s}>{s === "All" ? "All Statuses" : s}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Player Table */}
      <div className="card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-foreground-dim text-xs border-b border-border">
                <th className="text-left py-3 px-4 font-medium">Player</th>
                <th className="text-left py-3 px-4 font-medium">Position</th>
                <th className="text-left py-3 px-4 font-medium">Age</th>
                <th className="text-left py-3 px-4 font-medium">Club</th>
                <th className="text-left py-3 px-4 font-medium">Contract Expiry</th>
                <th className="text-left py-3 px-4 font-medium">Market Value</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-b border-border hover:bg-background-elevated transition-colors">
                  <td className="py-3 px-4">
                    <Link href={`/dashboard/players/${p.id}`} className="flex items-center gap-3 hover:text-accent-light transition-colors">
                      <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent">
                        {p.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <span className="font-medium">{p.name}</span>
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-foreground-muted">{p.position}</td>
                  <td className="py-3 px-4 text-foreground-muted">{p.age}</td>
                  <td className="py-3 px-4 text-foreground-muted">{p.club}</td>
                  <td className="py-3 px-4 text-foreground-muted">{p.contractExpiry}</td>
                  <td className="py-3 px-4 font-medium">{p.marketValue}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full ${
                      p.status === "Active" ? "bg-success/10 text-success" :
                      p.status === "Prospect" ? "bg-accent/10 text-accent" :
                      "bg-foreground-dim/10 text-foreground-muted"
                    }`}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
