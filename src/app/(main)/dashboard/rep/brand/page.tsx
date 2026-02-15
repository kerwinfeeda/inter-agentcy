"use client";

import { Instagram, Star } from "lucide-react";

const players = [
  {
    name: "Emmanuel Osei",
    score: 8.1,
    followers: "42K",
    sponsors: ["Nike", "Hublot"],
    recentPosts: 12,
    engagement: "4.2%",
    mediaAppearances: 3,
    highlights: ["ESPN Africa interview", "Club Brugge matchday promo"],
  },
  {
    name: "Lucas Ferreira",
    score: 6.8,
    followers: "28K",
    sponsors: ["Adidas"],
    recentPosts: 8,
    engagement: "3.1%",
    mediaAppearances: 1,
    highlights: ["Liga Portugal podcast guest"],
  },
  {
    name: "Youssef El-Hadj",
    score: 7.9,
    followers: "95K",
    sponsors: ["Puma", "Beats"],
    recentPosts: 18,
    engagement: "5.6%",
    mediaAppearances: 4,
    highlights: ["Brighton YouTube feature", "Morocco NT promo"],
  },
  {
    name: "André Santos",
    score: 5.4,
    followers: "11K",
    sponsors: [],
    recentPosts: 4,
    engagement: "2.8%",
    mediaAppearances: 0,
    highlights: [],
  },
  {
    name: "João Silva",
    score: 5.0,
    followers: "8K",
    sponsors: [],
    recentPosts: 3,
    engagement: "2.1%",
    mediaAppearances: 0,
    highlights: [],
  },
  {
    name: "Kwame Mensah",
    score: 6.2,
    followers: "19K",
    sponsors: ["Under Armour"],
    recentPosts: 6,
    engagement: "3.5%",
    mediaAppearances: 1,
    highlights: ["Ghana Sports Weekly feature"],
  },
];

function scoreColor(score: number) {
  if (score >= 7.5) return "text-success";
  if (score >= 5.5) return "text-accent-light";
  return "text-foreground-dim";
}

export default function BrandManagementPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Brand Management</h1>
        <p className="text-sm text-foreground-muted mt-1">Monitor and grow your players&apos; personal brands</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {players.map((p, i) => (
          <div key={i} className="card rounded-xl p-5 card-hover">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-sm">{p.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Instagram className="w-3.5 h-3.5 text-foreground-dim" />
                  <span className="text-xs text-foreground-muted">{p.followers} followers</span>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-lg font-bold ${scoreColor(p.score)}`}>{p.score}</p>
                <p className="text-[10px] text-foreground-dim">Brand Score</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="p-2 bg-background-elevated rounded-lg text-center">
                <p className="text-sm font-bold">{p.recentPosts}</p>
                <p className="text-[10px] text-foreground-dim">Posts (30d)</p>
              </div>
              <div className="p-2 bg-background-elevated rounded-lg text-center">
                <p className="text-sm font-bold">{p.engagement}</p>
                <p className="text-[10px] text-foreground-dim">Engagement</p>
              </div>
              <div className="p-2 bg-background-elevated rounded-lg text-center">
                <p className="text-sm font-bold">{p.mediaAppearances}</p>
                <p className="text-[10px] text-foreground-dim">Media</p>
              </div>
            </div>

            {p.sponsors.length > 0 && (
              <div className="mb-3">
                <p className="text-xs text-foreground-muted mb-1.5">Sponsors</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.sponsors.map((s) => (
                    <span key={s} className="px-2 py-1 bg-accent/10 text-accent-light rounded text-xs">{s}</span>
                  ))}
                </div>
              </div>
            )}

            {p.highlights.length > 0 && (
              <div>
                <p className="text-xs text-foreground-muted mb-1.5">Recent Highlights</p>
                {p.highlights.map((h, j) => (
                  <div key={j} className="flex items-center gap-1.5 text-xs text-foreground-dim mb-1">
                    <Star className="w-3 h-3 text-accent" />
                    {h}
                  </div>
                ))}
              </div>
            )}

            {p.sponsors.length === 0 && p.highlights.length === 0 && (
              <p className="text-xs text-foreground-dim italic">No active sponsors or media highlights — growth opportunity</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
