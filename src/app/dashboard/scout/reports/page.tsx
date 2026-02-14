"use client";

import { useState } from "react";
import { Plus, Search } from "lucide-react";

const reports = [
  { player: "Ibrahima Konaté", position: "CB", club: "Le Havre AC", league: "Ligue 2", date: "Feb 14, 2026", rating: 8.2, status: "Submitted" },
  { player: "Matteo Rossi", position: "CM", club: "Catanzaro", league: "Serie B", date: "Feb 12, 2026", rating: 7.5, status: "Reviewed" },
  { player: "Ayo Adebayo", position: "ST", club: "Enyimba FC", league: "NPFL", date: "Feb 10, 2026", rating: 7.8, status: "Submitted" },
  { player: "Carlos Mendes", position: "LB", club: "Leixões SC", league: "Liga Portugal 2", date: "Feb 8, 2026", rating: 6.9, status: "Draft" },
  { player: "Kwesi Appiah", position: "RW", club: "Hearts of Oak", league: "GPL", date: "Feb 6, 2026", rating: 8.0, status: "Submitted" },
  { player: "Samba Diallo", position: "CDM", club: "Jaraaf", league: "Ligue 1 (SEN)", date: "Feb 4, 2026", rating: 7.2, status: "Reviewed" },
  { player: "Tomáš Horák", position: "GK", club: "Zbrojovka Brno", league: "Czech First League", date: "Feb 2, 2026", rating: 7.0, status: "Draft" },
  { player: "Felix Adjei", position: "CAM", club: "Asante Kotoko", league: "GPL", date: "Jan 30, 2026", rating: 8.5, status: "Reviewed" },
  { player: "Ousmane Traoré", position: "CB", club: "ASEC Mimosas", league: "Ligue 1 (CIV)", date: "Jan 28, 2026", rating: 7.6, status: "Submitted" },
  { player: "Diego Vargas", position: "ST", club: "Deportivo Cali", league: "Liga BetPlay", date: "Jan 25, 2026", rating: 7.9, status: "Submitted" },
];

const statusColor: Record<string, string> = {
  Draft: "bg-foreground-dim/20 text-foreground-dim",
  Submitted: "bg-accent/20 text-accent-light",
  Reviewed: "bg-success/20 text-success",
};

export default function ScoutReports() {
  const [search, setSearch] = useState("");
  const [filterLeague, setFilterLeague] = useState("");
  const [filterPosition, setFilterPosition] = useState("");

  const leagues = Array.from(new Set(reports.map((r) => r.league)));
  const positions = Array.from(new Set(reports.map((r) => r.position)));

  const filtered = reports.filter((r) => {
    if (search && !r.player.toLowerCase().includes(search.toLowerCase())) return false;
    if (filterLeague && r.league !== filterLeague) return false;
    if (filterPosition && r.position !== filterPosition) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Scouting Reports</h1>
          <p className="text-sm text-foreground-muted mt-1">{reports.length} reports total</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg gradient-steel-btn text-sm font-medium text-white">
          <Plus className="w-4 h-4" /> New Report
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-dim" />
          <input
            type="text"
            placeholder="Search player..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-background-elevated border border-border text-sm text-foreground placeholder:text-foreground-dim focus:outline-none focus:border-accent"
          />
        </div>
        <select value={filterLeague} onChange={(e) => setFilterLeague(e.target.value)} className="px-3 py-2 rounded-lg bg-background-elevated border border-border text-sm text-foreground-muted focus:outline-none">
          <option value="">All Leagues</option>
          {leagues.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
        <select value={filterPosition} onChange={(e) => setFilterPosition(e.target.value)} className="px-3 py-2 rounded-lg bg-background-elevated border border-border text-sm text-foreground-muted focus:outline-none">
          <option value="">All Positions</option>
          {positions.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div className="card rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-foreground-muted text-left">
              <th className="px-4 py-3 font-medium">Player</th>
              <th className="px-4 py-3 font-medium">Position</th>
              <th className="px-4 py-3 font-medium">Club</th>
              <th className="px-4 py-3 font-medium">League</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Rating</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r, i) => (
              <tr key={i} className="border-b border-border last:border-0 hover:bg-background-elevated transition-colors">
                <td className="px-4 py-3 font-medium">{r.player}</td>
                <td className="px-4 py-3 text-foreground-muted">{r.position}</td>
                <td className="px-4 py-3 text-foreground-muted">{r.club}</td>
                <td className="px-4 py-3 text-foreground-muted">{r.league}</td>
                <td className="px-4 py-3 text-foreground-muted">{r.date}</td>
                <td className="px-4 py-3 font-semibold">{r.rating}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[r.status]}`}>{r.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
