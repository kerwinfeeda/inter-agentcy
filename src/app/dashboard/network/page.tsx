"use client";

import { useState } from "react";
import { Globe, Users, TrendingUp, Search } from "lucide-react";
import KPICard from "@/components/dashboard/KPICard";

const clubs = [
  { name: "Club Brugge", league: "Pro League", country: "Belgium", status: "Active", lastContact: "Feb 12, 2026", contact: "Marc Degryse" },
  { name: "Brighton & Hove Albion", league: "Premier League", country: "England", status: "Active", lastContact: "Feb 10, 2026", contact: "David Weir" },
  { name: "Galatasaray", league: "Süper Lig", country: "Turkey", status: "Active", lastContact: "Feb 8, 2026", contact: "Cenk Ergün" },
  { name: "Feyenoord", league: "Eredivisie", country: "Netherlands", status: "Active", lastContact: "Feb 5, 2026", contact: "Dennis te Kloese" },
  { name: "FC Nantes", league: "Ligue 1", country: "France", status: "Active", lastContact: "Jan 28, 2026", contact: "Antoine Kombouaré" },
  { name: "RSC Anderlecht", league: "Pro League", country: "Belgium", status: "New", lastContact: "Feb 1, 2026", contact: "Jesper Fredberg" },
  { name: "AEK Athens", league: "Super League", country: "Greece", status: "New", lastContact: "Jan 20, 2026", contact: "Nikos Ioannidis" },
  { name: "Wolves", league: "Premier League", country: "England", status: "Active", lastContact: "Feb 11, 2026", contact: "Matt Hobbs" },
  { name: "Vitória SC", league: "Liga Portugal", country: "Portugal", status: "Active", lastContact: "Jan 15, 2026", contact: "António Miguel Cardoso" },
  { name: "Braga", league: "Liga Portugal", country: "Portugal", status: "Active", lastContact: "Dec 20, 2025", contact: "António Salvador" },
  { name: "Al Ahly", league: "Egyptian Premier", country: "Egypt", status: "Dormant", lastContact: "Nov 5, 2025", contact: "Khaled Mortagy" },
  { name: "ASEC Mimosas", league: "Ligue 1 Ivoirienne", country: "Ivory Coast", status: "New", lastContact: "Jan 10, 2026", contact: "Yao Paul" },
];

const regions = ["All", "Europe", "Africa", "Middle East"];

export default function NetworkPage() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  const regionMap: Record<string, string[]> = {
    Europe: ["Belgium", "England", "Turkey", "Netherlands", "France", "Greece", "Portugal"],
    Africa: ["Egypt", "Ivory Coast"],
    "Middle East": [],
  };

  const filtered = clubs.filter((c) => {
    if (search && !c.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (region !== "All" && !(regionMap[region] || []).includes(c.country)) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Club Network</h1>
        <p className="text-sm text-foreground-muted mt-1">Manage your club relationships and contacts</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <KPICard icon={Globe} label="Clubs in Network" value="45" iconColor="text-accent" />
        <KPICard icon={Users} label="Active Relationships" value="28" iconColor="text-success" />
        <KPICard icon={TrendingUp} label="Deals Completed With" value="12" iconColor="text-accent-light" />
      </div>

      <div className="card rounded-xl p-4">
        <div className="flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-dim" />
            <input
              type="text"
              placeholder="Search clubs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-background-elevated border border-border rounded-lg text-sm text-foreground placeholder:text-foreground-dim focus:outline-none focus:border-border-light"
            />
          </div>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="bg-background-elevated border border-border rounded-lg px-3 py-2.5 text-sm text-foreground-muted focus:outline-none"
          >
            {regions.map((r) => <option key={r} value={r}>{r === "All" ? "All Regions" : r}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((club) => (
          <div key={club.name} className="card rounded-xl p-5 card-hover">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-medium">{club.name}</h3>
                <p className="text-xs text-foreground-muted">{club.league} • {club.country}</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                club.status === "Active" ? "bg-success/10 text-success" :
                club.status === "New" ? "bg-accent/10 text-accent" :
                "bg-foreground-dim/10 text-foreground-muted"
              }`}>
                {club.status}
              </span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-foreground-dim">Contact</span>
                <span className="text-foreground-muted">{club.contact}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground-dim">Last Contact</span>
                <span className="text-foreground-muted">{club.lastContact}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
