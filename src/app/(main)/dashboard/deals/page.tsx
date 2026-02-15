"use client";

import { GitBranch, TrendingUp, Clock } from "lucide-react";

interface Deal {
  player: string;
  club: string;
  type: "Transfer" | "Loan" | "Free";
  value: string;
  daysInStage: number;
}

const stages: { label: string; color: string; deals: Deal[] }[] = [
  {
    label: "Prospect",
    color: "bg-foreground-dim",
    deals: [
      { player: "Ibrahim Touré", club: "RSC Anderlecht", type: "Transfer", value: "€1.2M", daysInStage: 5 },
      { player: "Moussa Diallo", club: "FC Nantes", type: "Loan", value: "€200K", daysInStage: 3 },
    ],
  },
  {
    label: "First Contact",
    color: "bg-accent",
    deals: [
      { player: "Carlos Mendes", club: "AEK Athens", type: "Transfer", value: "€2.1M", daysInStage: 8 },
      { player: "André Santos", club: "Wolves", type: "Transfer", value: "€3.5M", daysInStage: 12 },
    ],
  },
  {
    label: "Negotiation",
    color: "bg-accent-light",
    deals: [
      { player: "Emmanuel Osei", club: "Club Brugge", type: "Transfer", value: "€4.2M", daysInStage: 15 },
      { player: "Ahmed Hassan", club: "Galatasaray", type: "Transfer", value: "€5.5M", daysInStage: 22 },
    ],
  },
  {
    label: "Due Diligence",
    color: "bg-accent-steel",
    deals: [
      { player: "Lucas Ferreira", club: "Feyenoord", type: "Transfer", value: "€3.8M", daysInStage: 7 },
    ],
  },
  {
    label: "Medical",
    color: "bg-success/70",
    deals: [
      { player: "Youssef El-Hadj", club: "Brighton", type: "Transfer", value: "€2.8M", daysInStage: 2 },
    ],
  },
  {
    label: "Complete",
    color: "bg-success",
    deals: [
      { player: "Kwame Mensah", club: "FC Nantes", type: "Free", value: "Signing bonus", daysInStage: 0 },
    ],
  },
];

export default function DealsPage() {
  const totalDeals = stages.reduce((sum, s) => sum + s.deals.length, 0);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Deal Pipeline</h1>
        <p className="text-sm text-foreground-muted mt-1">Track and manage all active deals</p>
      </div>

      {/* Pipeline Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="card rounded-xl p-5 flex items-center gap-4">
          <GitBranch className="w-5 h-5 text-accent" />
          <div>
            <p className="text-xl font-bold">{totalDeals}</p>
            <p className="text-xs text-foreground-muted">Total Deals</p>
          </div>
        </div>
        <div className="card rounded-xl p-5 flex items-center gap-4">
          <TrendingUp className="w-5 h-5 text-success" />
          <div>
            <p className="text-xl font-bold">€15.2M</p>
            <p className="text-xs text-foreground-muted">Total Value</p>
          </div>
        </div>
        <div className="card rounded-xl p-5 flex items-center gap-4">
          <Clock className="w-5 h-5 text-accent-light" />
          <div>
            <p className="text-xl font-bold">34 days</p>
            <p className="text-xs text-foreground-muted">Avg Time to Close</p>
          </div>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-max">
          {stages.map((stage) => (
            <div key={stage.label} className="w-64 flex-shrink-0">
              <div className="flex items-center gap-2 mb-3 px-1">
                <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                <span className="text-sm font-medium">{stage.label}</span>
                <span className="text-xs text-foreground-dim ml-auto">{stage.deals.length}</span>
              </div>
              <div className="space-y-3">
                {stage.deals.map((deal) => (
                  <div
                    key={deal.player}
                    className="card rounded-xl p-4 card-hover cursor-grab active:cursor-grabbing"
                  >
                    <p className="text-sm font-medium">{deal.player}</p>
                    <p className="text-xs text-foreground-muted mt-1">{deal.club}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        deal.type === "Transfer" ? "bg-accent/10 text-accent" :
                        deal.type === "Loan" ? "bg-accent-light/10 text-accent-light" :
                        "bg-foreground-dim/10 text-foreground-muted"
                      }`}>
                        {deal.type}
                      </span>
                      <span className="text-xs font-medium text-accent">{deal.value}</span>
                    </div>
                    {deal.daysInStage > 0 && (
                      <p className="text-[10px] text-foreground-dim mt-2">{deal.daysInStage}d in stage</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
