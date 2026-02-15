"use client";

import { useState } from "react";
import { Filter, CheckCircle, X } from "lucide-react";

type Status = "All" | "New" | "Under Review" | "Shortlisted" | "Rejected";

const submissions = [
  { player: "Rafael Domingues", position: "CM", agent: "Kerwin Alabi", date: "Feb 13, 2026", matchScore: 87, status: "New" },
  { player: "Emmanuel Osei", position: "CB", agent: "Marcus Webb", date: "Feb 12, 2026", matchScore: 82, status: "Under Review" },
  { player: "Youssef El-Hadj", position: "AM", agent: "Kerwin Alabi", date: "Feb 11, 2026", matchScore: 79, status: "Shortlisted" },
  { player: "Kwame Mensah", position: "RW", agent: "Emeka Nwosu", date: "Feb 10, 2026", matchScore: 71, status: "Under Review" },
  { player: "Lucas Ferreira", position: "CM", agent: "Tiago Reis", date: "Feb 8, 2026", matchScore: 68, status: "Rejected" },
  { player: "Ibrahim Kanté", position: "DM", agent: "Fatima El-Amin", date: "Feb 7, 2026", matchScore: 74, status: "New" },
  { player: "Moussa Diaby", position: "ST", agent: "Ibrahim Diallo", date: "Feb 5, 2026", matchScore: 76, status: "Under Review" },
  { player: "Aleksa Petrović", position: "CB", agent: "Hans Müller", date: "Feb 3, 2026", matchScore: 65, status: "Rejected" },
];

const statusColor: Record<string, string> = {
  New: "text-accent-light bg-accent-light/10",
  "Under Review": "text-foreground-muted bg-foreground-muted/10",
  Shortlisted: "text-success bg-success/10",
  Rejected: "text-danger bg-danger/10",
};

function scoreColor(score: number) {
  if (score >= 80) return "text-success";
  if (score >= 70) return "text-accent-light";
  return "text-foreground-muted";
}

export default function SubmissionsPage() {
  const [filter, setFilter] = useState<Status>("All");
  const filtered = filter === "All" ? submissions : submissions.filter((s) => s.status === filter);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Submissions</h1>
        <p className="text-sm text-foreground-muted mt-1">Player submissions from agents and scouts</p>
      </div>

      <div className="flex items-center gap-2">
        <Filter className="w-4 h-4 text-foreground-dim" />
        {(["All", "New", "Under Review", "Shortlisted", "Rejected"] as Status[]).map((s) => (
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
                <th className="text-left px-5 py-3 font-medium">Player</th>
                <th className="text-left px-5 py-3 font-medium">Position</th>
                <th className="text-left px-5 py-3 font-medium">Submitted By</th>
                <th className="text-left px-5 py-3 font-medium">Date</th>
                <th className="text-center px-5 py-3 font-medium">Match</th>
                <th className="text-left px-5 py-3 font-medium">Status</th>
                <th className="text-right px-5 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((sub, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-background-elevated transition-colors">
                  <td className="px-5 py-3.5 font-medium">{sub.player}</td>
                  <td className="px-5 py-3.5 text-foreground-muted">{sub.position}</td>
                  <td className="px-5 py-3.5 text-foreground-muted">{sub.agent}</td>
                  <td className="px-5 py-3.5 text-foreground-dim">{sub.date}</td>
                  <td className="px-5 py-3.5 text-center">
                    <span className={`font-bold ${scoreColor(sub.matchScore)}`}>{sub.matchScore}%</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor[sub.status]}`}>{sub.status}</span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button className="p-1.5 rounded-lg bg-success/10 text-success hover:bg-success/20 transition-colors" title="Shortlist">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded-lg bg-danger/10 text-danger hover:bg-danger/20 transition-colors" title="Reject">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
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
