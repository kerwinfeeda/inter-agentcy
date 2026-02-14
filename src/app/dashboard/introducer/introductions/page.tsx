"use client";

import { useState } from "react";
import { Filter } from "lucide-react";

type Status = "All" | "Completed" | "In Progress" | "Pending" | "Failed";

const introductions = [
  { date: "Feb 12, 2026", partyA: "SC Braga", partyB: "Marcus Webb (Agent)", status: "In Progress", commission: "€400" },
  { date: "Feb 10, 2026", partyA: "Fenerbahçe SD", partyB: "Kerwin Alabi (Agent)", status: "Completed", commission: "€600" },
  { date: "Feb 8, 2026", partyA: "Ghana FA Talent ID", partyB: "Belgian Scout Network", status: "Completed", commission: "€350" },
  { date: "Feb 5, 2026", partyA: "João Mendes (Player)", partyB: "Dr. Alves (Psychologist)", status: "Completed", commission: "€150" },
  { date: "Feb 3, 2026", partyA: "Wolves Academy", partyB: "Lagos Football Academy", status: "Pending", commission: "€500" },
  { date: "Jan 28, 2026", partyA: "Sporting CP", partyB: "Tiago Reis (Agent)", status: "Completed", commission: "€800" },
  { date: "Jan 22, 2026", partyA: "RSC Anderlecht", partyB: "West Africa Scouting Ltd", status: "Failed", commission: "—" },
  { date: "Jan 18, 2026", partyA: "Emmanuel Osei (Player)", partyB: "Nike Partnerships", status: "Completed", commission: "€1,200" },
  { date: "Jan 10, 2026", partyA: "KV Mechelen", partyB: "Kwame Mensah&apos;s Rep", status: "In Progress", commission: "€300" },
  { date: "Jan 5, 2026", partyA: "Benfica Academy", partyB: "Accra Hearts of Oak", status: "Completed", commission: "€900" },
];

const statusColor: Record<string, string> = {
  Completed: "text-success bg-success/10",
  "In Progress": "text-accent-light bg-accent-light/10",
  Pending: "text-foreground-muted bg-foreground-muted/10",
  Failed: "text-danger bg-danger/10",
};

export default function IntroductionsPage() {
  const [filter, setFilter] = useState<Status>("All");
  const filtered = filter === "All" ? introductions : introductions.filter((i) => i.status === filter);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Introductions</h1>
        <p className="text-sm text-foreground-muted mt-1">Track all your introductions and commissions</p>
      </div>

      <div className="flex items-center gap-2">
        <Filter className="w-4 h-4 text-foreground-dim" />
        {(["All", "Completed", "In Progress", "Pending", "Failed"] as Status[]).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
              filter === s ? "bg-accent/20 text-white" : "text-foreground-muted hover:text-white hover:bg-background-elevated"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-foreground-muted text-xs">
                <th className="text-left px-5 py-3 font-medium">Date</th>
                <th className="text-left px-5 py-3 font-medium">Party A</th>
                <th className="text-left px-5 py-3 font-medium">Party B</th>
                <th className="text-left px-5 py-3 font-medium">Status</th>
                <th className="text-right px-5 py-3 font-medium">Commission</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((intro, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-background-elevated transition-colors">
                  <td className="px-5 py-3.5 text-foreground-dim">{intro.date}</td>
                  <td className="px-5 py-3.5">{intro.partyA}</td>
                  <td className="px-5 py-3.5">{intro.partyB}</td>
                  <td className="px-5 py-3.5">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor[intro.status]}`}>
                      {intro.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right font-medium">{intro.commission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
