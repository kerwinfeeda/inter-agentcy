"use client";

import { Users, ClipboardList, TrendingUp, DollarSign, FileText, Calendar, BarChart3 } from "lucide-react";
import KPICard from "@/components/dashboard/KPICard";
import Link from "next/link";

const rosterQuick = [
  { name: "Emmanuel Osei", club: "Club Brugge", status: "Active" },
  { name: "Lucas Ferreira", club: "SC Braga", status: "Contract Expiring" },
  { name: "Youssef El-Hadj", club: "Brighton (loan)", status: "On Loan" },
  { name: "André Santos", club: "Vitória SC", status: "Active" },
  { name: "João Silva", club: "Gil Vicente", status: "Active" },
  { name: "Kwame Mensah", club: "KV Mechelen", status: "Transfer Listed" },
];

const statusColor: Record<string, string> = {
  Active: "text-success",
  "Contract Expiring": "text-danger",
  "On Loan": "text-accent-light",
  "Transfer Listed": "text-accent",
};

const upcomingActions = [
  { title: "Contract review: Lucas Ferreira renewal", date: "Feb 16, 2026", type: "contract" },
  { title: "Media appearance: Emmanuel Osei interview", date: "Feb 18, 2026", type: "media" },
  { title: "Brand meeting: Nike sponsorship for Youssef", date: "Feb 20, 2026", type: "brand" },
  { title: "Career plan update: André Santos", date: "Feb 22, 2026", type: "career" },
];

export default function RepOverview() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Representative Dashboard</h1>
        <p className="text-sm text-foreground-muted mt-1">Manage your players&apos; careers and brands</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard icon={Users} label="Active Players" value="6" trend="2 in negotiation" iconColor="text-accent" />
        <KPICard icon={ClipboardList} label="Career Plans Active" value="5" trend="1 needs update" iconColor="text-success" />
        <KPICard icon={TrendingUp} label="Brand Score Avg" value="7.2/10" trend="↑0.4 this quarter" trendUp iconColor="text-accent-light" />
        <KPICard icon={DollarSign} label="Monthly Mgmt Fees" value="€4,800" trend="Stable" iconColor="text-accent-steel" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-sm">Player Roster</h2>
            <Link href="/dashboard/rep/roster" className="text-xs text-accent hover:text-accent-light transition-colors">View all →</Link>
          </div>
          <div className="space-y-3">
            {rosterQuick.map((p, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-background-elevated rounded-lg">
                <div>
                  <p className="text-sm font-medium">{p.name}</p>
                  <p className="text-xs text-foreground-dim">{p.club}</p>
                </div>
                <span className={`text-xs font-medium ${statusColor[p.status]}`}>{p.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card rounded-xl p-6">
          <h2 className="font-semibold text-sm mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent" /> Upcoming Actions
          </h2>
          <div className="space-y-3">
            {upcomingActions.map((a, i) => (
              <div key={i} className="p-3 bg-background-elevated rounded-lg">
                <p className="text-sm font-medium">{a.title}</p>
                <p className="text-xs text-foreground-dim mt-1">{a.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card rounded-xl p-6">
        <h2 className="font-semibold text-sm mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Update Career Plan", icon: FileText, href: "/dashboard/rep/career" },
            { label: "Schedule Meeting", icon: Calendar, href: "/dashboard/rep/roster" },
            { label: "Brand Report", icon: BarChart3, href: "/dashboard/rep/brand" },
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
