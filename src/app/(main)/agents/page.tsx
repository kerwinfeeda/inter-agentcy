"use client";

import { useState } from "react";
import { Check, Star, Zap, Crown, Shield, Search, Users, Link2, ArrowRight } from "lucide-react";
import Link from "next/link";

type RoleKey = "agents" | "scouts" | "reps" | "introducers";

const roleInfo: Record<RoleKey, { icon: typeof Shield; label: string; color: string; description: string }> = {
  agents: { icon: Shield, label: "Licensed Agents", color: "from-accent to-accent-light", description: "Execute transfers, negotiate contracts, and manage players with full FIFA compliance." },
  scouts: { icon: Search, label: "Scouts", color: "from-success to-emerald-500", description: "Discover talent, create reports, and earn finder's fees by connecting players with agents." },
  reps: { icon: Users, label: "Representatives", color: "from-purple-400 to-violet-500", description: "Manage player careers, build brands, and collaborate with licensed agents for deal execution." },
  introducers: { icon: Link2, label: "Introducers", color: "from-accent to-amber-400", description: "Connect players, agents, and clubs. Earn referral commissions on every introduction." },
};

interface Tier {
  name: string;
  price: string;
  period: string;
  icon: typeof Zap;
  description: string;
  split: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

const tiers: Record<RoleKey, Tier[]> = {
  agents: [
    {
      name: "Starter", price: "Free", period: "", icon: Zap,
      description: "Perfect for newly licensed agents getting started.",
      split: "70/30",
      features: ["Basic CRM (up to 10 players)", "Limited scouting reports (5/month)", "Community forum access", "FIFA regulation reference", "Basic contract templates", "Email support"],
      cta: "Start Free", highlighted: false,
    },
    {
      name: "Pro", price: "$99", period: "/month", icon: Star,
      description: "For growing agents building their client portfolio.",
      split: "75/25",
      features: ["Full CRM (unlimited players)", "Scouting integrations (Wyscout)", "Compliance suite", "Commission calculator", "Advanced contract templates", "Club directory access", "Agent collaboration tools", "Priority email & chat support"],
      cta: "Go Pro", highlighted: true,
    },
    {
      name: "Elite", price: "$249", period: "/month", icon: Crown,
      description: "For established agents who want every advantage.",
      split: "85/15",
      features: ["Everything in Pro", "Priority club introductions", "StatsBomb advanced analytics", "Video analysis suite", "Dedicated account manager", "Mentorship matching", "Transfer marketplace priority", "Custom branding", "Phone support"],
      cta: "Go Elite", highlighted: false,
    },
  ],
  scouts: [
    {
      name: "Scout Free", price: "Free", period: "", icon: Zap,
      description: "Start scouting and building your reputation.",
      split: "—",
      features: ["5 scouting reports/month", "1GB video storage", "Basic player search", "Community access", "Basic profile"],
      cta: "Start Free", highlighted: false,
    },
    {
      name: "Scout Pro", price: "$49", period: "/month", icon: Star,
      description: "For active scouts building a talent pipeline.",
      split: "60/40",
      features: ["Unlimited scouting reports", "10GB video storage", "Agent matching system", "Finder's fee tracking", "Advanced player search", "Report templates", "Priority in agent feeds", "Email & chat support"],
      cta: "Go Pro", highlighted: true,
    },
    {
      name: "Scout Elite", price: "$149", period: "/month", icon: Crown,
      description: "Professional scouts with data-driven workflows.",
      split: "75/25",
      features: ["Everything in Scout Pro", "Wyscout & StatsBomb access", "Priority agent matching", "Escrow protection on finder's fees", "Video analysis tools", "Mentorship from senior scouts", "50GB video storage", "Dedicated support"],
      cta: "Go Elite", highlighted: false,
    },
  ],
  reps: [
    {
      name: "Rep Starter", price: "$29", period: "/month", icon: Zap,
      description: "Start managing players and building careers.",
      split: "50/50",
      features: ["Up to 3 players", "Basic career management tools", "Marketplace agent access", "Community access", "Basic social media templates"],
      cta: "Get Started", highlighted: false,
    },
    {
      name: "Rep Pro", price: "$79", period: "/month", icon: Star,
      description: "For growing representatives managing multiple players.",
      split: "65/35",
      features: ["Up to 15 players", "AI career planning tools", "Social media management toolkit", "Priority agent matching", "Contract templates library", "Brand development tools", "Performance dashboards", "Email & chat support"],
      cta: "Go Pro", highlighted: true,
    },
    {
      name: "Rep Elite", price: "$199", period: "/month", icon: Crown,
      description: "Full-service player management and brand building.",
      split: "80/20",
      features: ["Unlimited players", "Full brand suite + PR tools", "Dedicated licensed agent partner", "Legal review credits (2/month)", "Content creation tools", "Sponsorship matching", "Player website builder", "Phone support"],
      cta: "Go Elite", highlighted: false,
    },
  ],
  introducers: [
    {
      name: "Introducer Basic", price: "Free", period: "", icon: Zap,
      description: "Start connecting parties and earning referral commissions.",
      split: "10% of deal commission",
      features: ["Referral tracking dashboard", "Basic network tools", "Community access", "Standard referral rate: 10%", "Email notifications"],
      cta: "Start Free", highlighted: false,
    },
    {
      name: "Introducer Network", price: "$39", period: "/month", icon: Star,
      description: "For connected individuals with strong football networks.",
      split: "15% + volume bonuses",
      features: ["Everything in Basic", "Advanced analytics dashboard", "15% referral rate", "Volume bonuses (up to 20%)", "Verified Introducer badge", "Priority connection requests", "Network visualization tools", "Email & chat support"],
      cta: "Upgrade", highlighted: true,
    },
  ],
};

export default function AgentsPage() {
  const [activeRole, setActiveRole] = useState<RoleKey>("agents");

  // Check URL hash on mount
  if (typeof window !== "undefined") {
    const hash = window.location.hash.replace("#", "") as RoleKey;
    if (hash && hash !== activeRole && tiers[hash]) {
      // defer to avoid render-during-render
      setTimeout(() => setActiveRole(hash), 0);
    }
  }

  const info = roleInfo[activeRole];
  const currentTiers = tiers[activeRole];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Plans & <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
            Choose your role in the ecosystem. Every plan includes platform access, compliance tools, and our global network.
          </p>
        </div>

        {/* Role Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(Object.keys(roleInfo) as RoleKey[]).map((key) => {
            const r = roleInfo[key];
            const active = activeRole === key;
            return (
              <button
                key={key}
                onClick={() => setActiveRole(key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? "bg-background-elevated border-2 border-accent text-white"
                    : "card text-foreground-muted hover:text-white hover:bg-background-elevated"
                }`}
              >
                <r.icon className="w-4 h-4" />
                {r.label}
              </button>
            );
          })}
        </div>

        {/* Role Description */}
        <div className="text-center mb-12">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-4`}>
            <info.icon className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">{info.label}</h2>
          <p className="text-foreground-muted max-w-lg mx-auto">{info.description}</p>
        </div>

        {/* Pricing Cards */}
        <div className={`grid grid-cols-1 gap-8 mb-24 ${currentTiers.length === 2 ? "md:grid-cols-2 max-w-3xl mx-auto" : "md:grid-cols-3"}`}>
          {currentTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 relative ${
                tier.highlighted
                  ? "bg-gradient-to-b from-accent/10 to-accent/5 border-2 border-accent"
                  : "card"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tier.highlighted ? "bg-accent" : "bg-white/5"}`}>
                  <tier.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">{tier.name}</h3>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-foreground-muted">{tier.period}</span>
              </div>
              <p className="text-sm text-foreground-muted mb-2">{tier.description}</p>
              <p className="text-sm text-accent font-medium mb-6">
                {activeRole === "introducers" ? `Referral rate: ${tier.split}` : `Commission split: ${tier.split}`}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/join"
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
                  tier.highlighted
                    ? "bg-accent hover:bg-accent-dark text-white"
                    : "card card-hover text-white"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Compare All Roles CTA */}
        <div className="text-center">
          <div className="card rounded-2xl p-8 inline-block">
            <p className="text-foreground-muted mb-4">Not sure which role fits you?</p>
            <Link
              href="/ecosystem"
              className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
            >
              See how the ecosystem works <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
