"use client";

import { TrendingUp, Target, Clock, CheckCircle } from "lucide-react";

const players = [
  {
    name: "Emmanuel Osei",
    club: "Club Brugge",
    position: "CB",
    age: 24,
    shortTerm: "Secure starting spot, improve aerial stats",
    midTerm: "Move to top-5 league by 2027",
    longTerm: "National team regular, €10M+ valuation",
    progress: 72,
    milestones: [
      { label: "First team regular", done: true },
      { label: "10+ league appearances", done: true },
      { label: "National team call-up", done: false },
      { label: "Top-5 league transfer", done: false },
    ],
  },
  {
    name: "Lucas Ferreira",
    club: "SC Braga",
    position: "CM",
    age: 26,
    shortTerm: "Negotiate contract renewal with improved terms",
    midTerm: "Captain candidacy, Europa League exposure",
    longTerm: "Move to La Liga or Premier League",
    progress: 58,
    milestones: [
      { label: "25+ appearances this season", done: true },
      { label: "Contract renewal signed", done: false },
      { label: "Europa League group stage", done: true },
      { label: "International cap", done: false },
    ],
  },
  {
    name: "Youssef El-Hadj",
    club: "Brighton (loan)",
    position: "AM",
    age: 21,
    shortTerm: "Impress on loan, 5+ goal contributions",
    midTerm: "Permanent deal or top-tier loan",
    longTerm: "Champions League level by 27",
    progress: 45,
    milestones: [
      { label: "Regular matchday squad", done: true },
      { label: "5 goal contributions", done: false },
      { label: "Loan made permanent", done: false },
      { label: "Morocco call-up", done: false },
    ],
  },
  {
    name: "André Santos",
    club: "Vitória SC",
    position: "LB",
    age: 23,
    shortTerm: "Consistent performances, avoid injury",
    midTerm: "Transfer to Liga Portugal top-4",
    longTerm: "Establish as top Portuguese LB",
    progress: 40,
    milestones: [
      { label: "20+ league starts", done: true },
      { label: "2+ assists from LB", done: false },
      { label: "U23 Portugal squad", done: false },
      { label: "Top-4 club interest", done: false },
    ],
  },
  {
    name: "Kwame Mensah",
    club: "KV Mechelen",
    position: "RW",
    age: 25,
    shortTerm: "Find new club — transfer listed",
    midTerm: "Rebuild at mid-table Eredivisie/Belgian Pro League",
    longTerm: "Return to top-level form",
    progress: 25,
    milestones: [
      { label: "Secure new club", done: false },
      { label: "10+ appearances", done: false },
      { label: "Regain Ghana squad spot", done: false },
      { label: "Consistent match ratings 7+", done: false },
    ],
  },
];

export default function CareerPlannerPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Career Planner</h1>
        <p className="text-sm text-foreground-muted mt-1">Long-term career strategies for each player</p>
      </div>

      <div className="space-y-4">
        {players.map((p, i) => (
          <div key={i} className="card rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="font-semibold text-base">{p.name}</h2>
                <p className="text-xs text-foreground-dim">{p.club} · {p.position} · Age {p.age}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-accent-light">{p.progress}%</p>
                <p className="text-xs text-foreground-dim">Plan progress</p>
              </div>
            </div>

            <div className="w-full bg-background-elevated rounded-full h-1.5 mb-5">
              <div className="h-1.5 rounded-full gradient-steel" style={{ width: `${p.progress}%` }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              {[
                { label: "Short-term", value: p.shortTerm, icon: Clock },
                { label: "Mid-term", value: p.midTerm, icon: Target },
                { label: "Long-term", value: p.longTerm, icon: TrendingUp },
              ].map((goal) => (
                <div key={goal.label} className="p-3 bg-background-elevated rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <goal.icon className="w-3.5 h-3.5 text-accent" />
                    <p className="text-xs font-medium text-foreground-muted">{goal.label}</p>
                  </div>
                  <p className="text-sm">{goal.value}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs font-medium text-foreground-muted mb-2">Milestones</p>
              <div className="flex flex-wrap gap-2">
                {p.milestones.map((m, j) => (
                  <span
                    key={j}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs ${
                      m.done
                        ? "bg-success/10 text-success"
                        : "bg-background-elevated text-foreground-dim"
                    }`}
                  >
                    <CheckCircle className="w-3 h-3" />
                    {m.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
