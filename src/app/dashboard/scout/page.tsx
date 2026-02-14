"use client";

import { FileText, Users, DollarSign, Eye, Plus, Search, List } from "lucide-react";
import KPICard from "@/components/dashboard/KPICard";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import Link from "next/link";

const recentReports = [
  { text: "Ibrahima Konaté — Ligue 2, Rating: 8.2/10", time: "2h ago" },
  { text: "Matteo Rossi — Serie B, Rating: 7.5/10", time: "5h ago" },
  { text: "Ayo Adebayo — NPFL, Rating: 7.8/10", time: "1d ago" },
  { text: "Carlos Mendes — Liga Portugal 2, Rating: 6.9/10", time: "1d ago" },
  { text: "Kwesi Appiah — Ghana Premier League, Rating: 8.0/10", time: "2d ago" },
];

const upcomingMatches = [
  { teams: "Le Havre vs Auxerre", league: "Ligue 2", date: "Feb 16, 2026", venue: "Stade Océane" },
  { teams: "Catanzaro vs Palermo", league: "Serie B", date: "Feb 17, 2026", venue: "Stadio Ceravolo" },
  { teams: "Enyimba vs Kano Pillars", league: "NPFL", date: "Feb 18, 2026", venue: "Enyimba Stadium" },
  { teams: "Leixões vs Penafiel", league: "Liga Portugal 2", date: "Feb 20, 2026", venue: "Estádio do Mar" },
  { teams: "Hearts of Oak vs Kotoko", league: "GPL", date: "Feb 22, 2026", venue: "Accra Sports Stadium" },
];

export default function ScoutOverview() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Scout Dashboard</h1>
        <p className="text-sm text-foreground-muted mt-1">Your scouting activity at a glance</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard icon={FileText} label="Reports Submitted" value="47" trend="↑5 this month" trendUp iconColor="text-accent" />
        <KPICard icon={Users} label="Players Discovered" value="12" trend="3 signed" iconColor="text-success" />
        <KPICard icon={DollarSign} label="Finder&apos;s Fees Earned" value="€18,500" trend="This year" iconColor="text-accent-light" />
        <KPICard icon={Eye} label="Active Watchlist" value="23" trend="4 new this week" iconColor="text-accent-steel" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityFeed items={recentReports} title="Recent Reports" />
        </div>
        <div className="card rounded-xl p-6">
          <h2 className="font-semibold text-sm mb-4">Upcoming Matches to Scout</h2>
          <div className="space-y-3">
            {upcomingMatches.map((m, i) => (
              <div key={i} className="p-3 bg-background-elevated rounded-lg">
                <p className="text-sm font-medium">{m.teams}</p>
                <p className="text-xs text-foreground-dim mt-1">{m.league} · {m.date}</p>
                <p className="text-xs text-foreground-dim">{m.venue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card rounded-xl p-6">
        <h2 className="font-semibold text-sm mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "New Report", icon: Plus, href: "/dashboard/scout/reports" },
            { label: "Search Players", icon: Search, href: "/dashboard/scout/watchlist" },
            { label: "View Watchlist", icon: List, href: "/dashboard/scout/watchlist" },
          ].map((a) => (
            <Link key={a.label} href={a.href} className="flex items-center gap-2 px-4 py-2.5 rounded-lg gradient-steel-btn text-sm font-medium text-white transition-all">
              <a.icon className="w-4 h-4" />
              {a.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
