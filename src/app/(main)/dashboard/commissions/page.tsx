"use client";

import { DollarSign, TrendingUp, Clock, Target } from "lucide-react";
import KPICard from "@/components/dashboard/KPICard";

const commissions = [
  { deal: "Emmanuel Osei → Club Brugge", player: "Emmanuel Osei", club: "Club Brugge", dealValue: "€4.2M", pct: "5%", amount: "€210,000", status: "Pending", date: "Feb 2026" },
  { deal: "Kwame Mensah → FC Nantes", player: "Kwame Mensah", club: "FC Nantes", dealValue: "€500K", pct: "10%", amount: "€50,000", status: "Processing", date: "Jan 2026" },
  { deal: "André Santos → Braga (renewal)", player: "André Santos", club: "Braga", dealValue: "€2.2M", pct: "3%", amount: "€66,000", status: "Paid", date: "Dec 2025" },
  { deal: "Lucas Ferreira → Feyenoord", player: "Lucas Ferreira", club: "Feyenoord", dealValue: "€3.8M", pct: "5%", amount: "€190,000", status: "Pending", date: "Feb 2026" },
  { deal: "João Silva → Brighton (loan)", player: "João Silva", club: "Brighton", dealValue: "€800K", pct: "8%", amount: "€64,000", status: "Paid", date: "Nov 2025" },
  { deal: "Carlos Mendes → Vitória (renewal)", player: "Carlos Mendes", club: "Vitória SC", dealValue: "€1.8M", pct: "4%", amount: "€72,000", status: "Paid", date: "Oct 2025" },
  { deal: "Ahmed Hassan → Galatasaray", player: "Ahmed Hassan", club: "Galatasaray", dealValue: "€5.5M", pct: "5%", amount: "€275,000", status: "Pending", date: "Mar 2026" },
  { deal: "Youssef El-Hadj → Brighton", player: "Youssef El-Hadj", club: "Brighton", dealValue: "€2.8M", pct: "5%", amount: "€140,000", status: "Processing", date: "Feb 2026" },
];

const monthlyData = [
  { month: "Sep", amount: 8500 },
  { month: "Oct", amount: 72000 },
  { month: "Nov", amount: 64000 },
  { month: "Dec", amount: 66000 },
  { month: "Jan", amount: 12000 },
  { month: "Feb", amount: 18500 },
];

export default function CommissionsPage() {
  const maxAmount = Math.max(...monthlyData.map((d) => d.amount));

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Commissions</h1>
        <p className="text-sm text-foreground-muted mt-1">Track your earnings and pending payments</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard icon={DollarSign} label="Total Earned" value="€142,500" trend="This year" iconColor="text-success" />
        <KPICard icon={Clock} label="Pending" value="€45,000" trend="3 deals awaiting" iconColor="text-accent-light" />
        <KPICard icon={TrendingUp} label="This Month" value="€12,000" trend="↑ from last month" trendUp iconColor="text-accent" />
        <KPICard icon={Target} label="Projected Annual" value="€210,000" trend="Based on pipeline" iconColor="text-accent" />
      </div>

      {/* Monthly Chart */}
      <div className="card rounded-xl p-6">
        <h2 className="font-semibold text-sm mb-4">Monthly Earnings</h2>
        <div className="flex items-end gap-3 h-40">
          {monthlyData.map((d) => (
            <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-[10px] text-foreground-dim">€{(d.amount / 1000).toFixed(0)}K</span>
              <div
                className="w-full rounded-t-md gradient-steel-btn transition-all"
                style={{ height: `${(d.amount / maxAmount) * 100}%`, minHeight: 4 }}
              />
              <span className="text-xs text-foreground-muted">{d.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Commission Table */}
      <div className="card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-foreground-dim text-xs border-b border-border">
                <th className="text-left py-3 px-4 font-medium">Deal</th>
                <th className="text-left py-3 px-4 font-medium">Club</th>
                <th className="text-left py-3 px-4 font-medium">Deal Value</th>
                <th className="text-left py-3 px-4 font-medium">%</th>
                <th className="text-left py-3 px-4 font-medium">Commission</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
                <th className="text-left py-3 px-4 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {commissions.map((c, i) => (
                <tr key={i} className="border-b border-border hover:bg-background-elevated transition-colors">
                  <td className="py-3 px-4 font-medium">{c.deal}</td>
                  <td className="py-3 px-4 text-foreground-muted">{c.club}</td>
                  <td className="py-3 px-4 text-foreground-muted">{c.dealValue}</td>
                  <td className="py-3 px-4 text-foreground-muted">{c.pct}</td>
                  <td className="py-3 px-4 font-medium text-accent-light">{c.amount}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full ${
                      c.status === "Paid" ? "bg-success/10 text-success" :
                      c.status === "Processing" ? "bg-accent/10 text-accent" :
                      "bg-accent-light/10 text-accent-light"
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-foreground-dim">{c.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
