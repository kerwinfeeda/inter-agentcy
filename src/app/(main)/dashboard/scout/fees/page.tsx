"use client";

import { DollarSign, Clock, TrendingUp } from "lucide-react";
import KPICard from "@/components/dashboard/KPICard";

const fees = [
  { player: "Emmanuel Osei", club: "Club Brugge", agent: "Kerwin Alabi", amount: "€4,500", status: "Paid", date: "Jan 15, 2026" },
  { player: "Ahmed Hassan", club: "Galatasaray", agent: "Kerwin Alabi", amount: "€5,200", status: "Pending", date: "Feb 2, 2026" },
  { player: "Felix Adjei", club: "KAA Gent", agent: "Marcus Thompson", amount: "€3,800", status: "Paid", date: "Dec 10, 2025" },
  { player: "Kwesi Appiah", club: "Standard Liège", agent: "Kerwin Alabi", amount: "€2,500", status: "Paid", date: "Nov 22, 2025" },
  { player: "Ousmane Traoré", club: "FC Lorient", agent: "Pierre Dubois", amount: "€1,700", status: "Paid", date: "Oct 5, 2025" },
  { player: "Diego Vargas", club: "Real Valladolid", agent: "Carlos Ruiz", amount: "€5,000", status: "Pending", date: "Feb 10, 2026" },
];

const statusColor: Record<string, string> = {
  Paid: "bg-success/20 text-success",
  Pending: "bg-accent/20 text-accent-light",
};

export default function ScoutFees() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Finder&apos;s Fees</h1>
        <p className="text-sm text-foreground-muted mt-1">Track your scouting earnings</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <KPICard icon={DollarSign} label="Total Earned" value="€18,500" trend="All time" iconColor="text-success" />
        <KPICard icon={Clock} label="Pending" value="€5,200" trend="2 awaiting payment" iconColor="text-accent" />
        <KPICard icon={TrendingUp} label="This Year" value="€12,300" trend="↑32% vs last year" trendUp iconColor="text-accent-light" />
      </div>

      <div className="card rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-foreground-muted text-left">
              <th className="px-4 py-3 font-medium">Player Discovered</th>
              <th className="px-4 py-3 font-medium">Signing Club</th>
              <th className="px-4 py-3 font-medium">Agent Involved</th>
              <th className="px-4 py-3 font-medium">Fee</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((f, i) => (
              <tr key={i} className="border-b border-border last:border-0 hover:bg-background-elevated transition-colors">
                <td className="px-4 py-3 font-medium">{f.player}</td>
                <td className="px-4 py-3 text-foreground-muted">{f.club}</td>
                <td className="px-4 py-3 text-foreground-muted">{f.agent}</td>
                <td className="px-4 py-3 font-semibold">{f.amount}</td>
                <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[f.status]}`}>{f.status}</span></td>
                <td className="px-4 py-3 text-foreground-muted">{f.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
