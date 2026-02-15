"use client";

import { useState } from "react";
import { FileText, Upload, FolderOpen } from "lucide-react";

const categories = ["All", "Contracts", "Templates", "Player Docs", "Compliance"];

const documents = [
  { name: "Emmanuel Osei — Transfer Agreement Draft", type: "Contracts", related: "Emmanuel Osei", date: "Feb 12, 2026", size: "245 KB" },
  { name: "Standard Representation Contract", type: "Templates", related: "—", date: "Jan 5, 2026", size: "128 KB" },
  { name: "Lucas Ferreira — Medical Report", type: "Player Docs", related: "Lucas Ferreira", date: "Feb 8, 2026", size: "1.2 MB" },
  { name: "FIFA Agent License — Kerwin Alabi", type: "Compliance", related: "—", date: "Apr 1, 2025", size: "340 KB" },
  { name: "Youssef El-Hadj — Scouting Dossier", type: "Player Docs", related: "Youssef El-Hadj", date: "Jan 28, 2026", size: "890 KB" },
  { name: "Commission Fee Structure Template", type: "Templates", related: "—", date: "Dec 15, 2025", size: "95 KB" },
  { name: "Ahmed Hassan — Work Permit Application", type: "Compliance", related: "Ahmed Hassan", date: "Feb 5, 2026", size: "520 KB" },
  { name: "Club Brugge — NDA Agreement", type: "Contracts", related: "Club Brugge Deal", date: "Feb 10, 2026", size: "180 KB" },
  { name: "Kwame Mensah — Player CV", type: "Player Docs", related: "Kwame Mensah", date: "Jan 18, 2026", size: "650 KB" },
  { name: "Anti-Money Laundering Compliance Cert", type: "Compliance", related: "—", date: "Mar 1, 2025", size: "210 KB" },
  { name: "Loan Agreement Template (FIFA Standard)", type: "Templates", related: "—", date: "Nov 20, 2025", size: "155 KB" },
  { name: "João Silva — Passport Copy", type: "Player Docs", related: "João Silva", date: "Oct 12, 2025", size: "420 KB" },
];

export default function DocumentsPage() {
  const [category, setCategory] = useState("All");

  const filtered = category === "All" ? documents : documents.filter((d) => d.type === category);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Documents</h1>
          <p className="text-sm text-foreground-muted mt-1">{documents.length} documents in your library</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg gradient-steel-btn text-sm font-medium text-white">
          <Upload className="w-4 h-4" /> Upload
        </button>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              category === c
                ? "bg-background-elevated border border-border-light text-white"
                : "text-foreground-muted hover:text-white hover:bg-background-elevated"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Template Quick Access */}
      <div className="card rounded-xl p-5">
        <h2 className="font-semibold text-sm mb-3 flex items-center gap-2">
          <FolderOpen className="w-4 h-4 text-accent" /> Quick Access — Templates
        </h2>
        <div className="flex flex-wrap gap-3">
          {documents.filter((d) => d.type === "Templates").map((d) => (
            <div key={d.name} className="flex items-center gap-2 px-3 py-2 bg-background-elevated rounded-lg text-xs text-foreground-muted hover:text-foreground cursor-pointer transition-colors">
              <FileText className="w-3.5 h-3.5" />
              {d.name}
            </div>
          ))}
        </div>
      </div>

      {/* File List */}
      <div className="card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-foreground-dim text-xs border-b border-border">
                <th className="text-left py-3 px-4 font-medium">Name</th>
                <th className="text-left py-3 px-4 font-medium">Type</th>
                <th className="text-left py-3 px-4 font-medium">Related To</th>
                <th className="text-left py-3 px-4 font-medium">Date</th>
                <th className="text-left py-3 px-4 font-medium">Size</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((d, i) => (
                <tr key={i} className="border-b border-border hover:bg-background-elevated transition-colors cursor-pointer">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="font-medium">{d.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-background-elevated text-foreground-muted">{d.type}</span>
                  </td>
                  <td className="py-3 px-4 text-foreground-muted">{d.related}</td>
                  <td className="py-3 px-4 text-foreground-dim">{d.date}</td>
                  <td className="py-3 px-4 text-foreground-dim">{d.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
