"use client";

import { User } from "lucide-react";

const players = [
  { name: "Emmanuel Osei", position: "ST", age: 24, club: "Club Brugge", contractStatus: "Until Jun 2028", stage: "Prime", satisfaction: 8.5 },
  { name: "Lucas Ferreira", position: "CM", age: 27, club: "SC Braga", contractStatus: "Expiring Mar 2026", stage: "Prime", satisfaction: 6.2 },
  { name: "Youssef El-Hadj", position: "CAM", age: 21, club: "Brighton (loan)", contractStatus: "Loan until Jun 2026", stage: "Development", satisfaction: 7.8 },
  { name: "André Santos", position: "RB", age: 25, club: "Vitória SC", contractStatus: "Until Jun 2027", stage: "Prime", satisfaction: 7.5 },
  { name: "João Silva", position: "LW", age: 20, club: "Gil Vicente", contractStatus: "Until Jun 2028", stage: "Development", satisfaction: 8.0 },
  { name: "Kwame Mensah", position: "CB", age: 30, club: "KV Mechelen", contractStatus: "Until Dec 2026", stage: "Veteran", satisfaction: 6.8 },
];

const stageColor: Record<string, string> = {
  Development: "bg-accent/20 text-accent-light",
  Prime: "bg-success/20 text-success",
  Veteran: "bg-foreground-dim/20 text-foreground-muted",
};

export default function RepRoster() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Player Roster</h1>
        <p className="text-sm text-foreground-muted mt-1">Manage your represented players</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((p, i) => (
          <div key={i} className="card rounded-xl p-5 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <User className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{p.name}</h3>
                <p className="text-xs text-foreground-muted">{p.position} · {p.age} yrs</p>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-foreground-dim">Club</span>
                <span className="text-foreground-muted">{p.club}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground-dim">Contract</span>
                <span className="text-foreground-muted">{p.contractStatus}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground-dim">Career Stage</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${stageColor[p.stage]}`}>{p.stage}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground-dim">Satisfaction</span>
                <div className="flex items-center gap-1">
                  <div className="w-16 h-1.5 bg-background-elevated rounded-full overflow-hidden">
                    <div className="h-full bg-success rounded-full" style={{ width: `${p.satisfaction * 10}%` }} />
                  </div>
                  <span className="text-foreground-muted">{p.satisfaction}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
