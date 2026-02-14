"use client";

import { useState } from "react";
import { Plus, Target } from "lucide-react";

type Priority = "Critical" | "High" | "Medium" | "Low";

interface WishlistEntry {
  position: string;
  ageRange: string;
  budget: string;
  regions: string[];
  priority: Priority;
  status: string;
}

const entries: WishlistEntry[] = [
  { position: "Central Midfielder", ageRange: "20–25", budget: "€1–2M", regions: ["Portugal", "West Africa"], priority: "Critical", status: "3 candidates shortlisted" },
  { position: "Centre-Back", ageRange: "22–28", budget: "€800K–1.5M", regions: ["Belgium", "Serbia", "West Africa"], priority: "High", status: "5 submissions received" },
  { position: "Right Winger", ageRange: "19–24", budget: "€500K–1M", regions: ["France", "West Africa", "South America"], priority: "Medium", status: "Scouting brief sent" },
  { position: "Goalkeeper", ageRange: "25–30", budget: "€400K–800K", regions: ["Portugal", "Spain"], priority: "Low", status: "No active search" },
];

const priorityColor: Record<Priority, string> = {
  Critical: "text-danger bg-danger/10",
  High: "text-accent-light bg-accent-light/10",
  Medium: "text-foreground-muted bg-foreground-muted/10",
  Low: "text-foreground-dim bg-foreground-dim/10",
};

export default function WishlistPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Wish List</h1>
          <p className="text-sm text-foreground-muted mt-1">Open positions and recruitment priorities</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg gradient-steel-btn text-sm font-medium text-white transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Position
        </button>
      </div>

      {showForm && (
        <div className="card rounded-xl p-6">
          <h2 className="font-semibold text-sm mb-4">New Position</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Position", placeholder: "e.g. Central Midfielder" },
              { label: "Age Range", placeholder: "e.g. 20–25" },
              { label: "Budget", placeholder: "e.g. €1–2M" },
              { label: "Preferred Regions", placeholder: "e.g. Portugal, West Africa" },
            ].map((field) => (
              <div key={field.label}>
                <label className="text-xs text-foreground-muted mb-1 block">{field.label}</label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full bg-background-elevated border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-foreground-dim outline-none focus:border-accent/40"
                />
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <button className="px-4 py-2 rounded-lg gradient-steel-btn text-sm font-medium text-white">Save Position</button>
            <button onClick={() => setShowForm(false)} className="px-4 py-2 rounded-lg bg-background-elevated text-sm text-foreground-muted hover:text-white transition-colors">Cancel</button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {entries.map((e, i) => (
          <div key={i} className="card rounded-xl p-6 card-hover">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-background-elevated flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{e.position}</h3>
                  <p className="text-xs text-foreground-dim">Age {e.ageRange} · Budget {e.budget}</p>
                </div>
              </div>
              <span className={`px-2.5 py-1 rounded text-xs font-medium ${priorityColor[e.priority]}`}>{e.priority}</span>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {e.regions.map((r) => (
                <span key={r} className="px-2 py-1 bg-background-elevated rounded text-xs text-foreground-muted">{r}</span>
              ))}
            </div>

            <p className="text-xs text-foreground-dim">{e.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
