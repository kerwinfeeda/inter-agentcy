"use client";

import { MessageCircle, Eye } from "lucide-react";

type InterestLevel = "Watching" | "Interested" | "Offer";

interface Opportunity {
  club: string;
  league: string;
  interest: InterestLevel;
  position: string;
  agentNotes: string;
  lastUpdate: string;
}

const opportunities: Opportunity[] = [
  {
    club: "Sporting CP",
    league: "Liga Portugal",
    interest: "Interested",
    position: "Central Midfielder",
    agentNotes: "Sporting director has requested full profile and video reel. They&apos;re looking for a creative CM after Ugarte&apos;s departure. Good fit for their possession style.",
    lastUpdate: "Feb 11, 2026",
  },
  {
    club: "Vitória SC",
    league: "Liga Portugal",
    interest: "Offer",
    position: "Central Midfielder",
    agentNotes: "Formal loan offer received — 18-month loan with option to buy at €1.2M. Negotiating improved personal terms. Decision needed by Feb 20.",
    lastUpdate: "Feb 13, 2026",
  },
  {
    club: "KRC Genk",
    league: "Belgian Pro League",
    interest: "Watching",
    position: "CM / AM",
    agentNotes: "Scout attended last 2 matches. Positive initial feedback but no formal contact yet. Belgian league could be a good stepping stone.",
    lastUpdate: "Feb 9, 2026",
  },
  {
    club: "Toulouse FC",
    league: "Ligue 1",
    interest: "Interested",
    position: "Central Midfielder",
    agentNotes: "Technical director expressed interest via intermediary. Keen on Portuguese-speaking players for squad integration. Summer window target.",
    lastUpdate: "Feb 7, 2026",
  },
];

const interestConfig: Record<InterestLevel, { color: string; bg: string }> = {
  Watching: { color: "text-foreground-muted", bg: "bg-foreground-muted/10" },
  Interested: { color: "text-accent-light", bg: "bg-accent-light/10" },
  Offer: { color: "text-success", bg: "bg-success/10" },
};

export default function OpportunitiesPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Opportunities</h1>
        <p className="text-sm text-foreground-muted mt-1">Clubs showing interest in your profile</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {opportunities.map((opp, i) => {
          const config = interestConfig[opp.interest];
          return (
            <div key={i} className="card rounded-xl p-6 card-hover">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-base">{opp.club}</h3>
                  <p className="text-xs text-foreground-dim">{opp.league} · {opp.position}</p>
                </div>
                <span className={`px-2.5 py-1 rounded text-xs font-medium ${config.color} ${config.bg}`}>
                  {opp.interest}
                </span>
              </div>

              <div className="p-3 bg-background-elevated rounded-lg mb-4">
                <p className="text-xs text-foreground-muted leading-relaxed">{opp.agentNotes}</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xs text-foreground-dim">Updated {opp.lastUpdate}</p>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background-elevated text-xs text-foreground-muted hover:text-white transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                    Details
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg gradient-steel-btn text-xs font-medium text-white transition-all">
                    <MessageCircle className="w-3.5 h-3.5" />
                    Ask Agent
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
