"use client";

import { Users, GitBranch, DollarSign, TrendingUp, Plus, MessageCircle, BarChart3, Calendar } from "lucide-react";
import KPICard from "@/components/dashboard/KPICard";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import Link from "next/link";

const pipelineStages = [
  { label: "Prospect", count: 2, color: "bg-foreground-dim" },
  { label: "First Contact", count: 2, color: "bg-accent" },
  { label: "Negotiation", count: 3, color: "bg-accent-light" },
  { label: "Due Diligence", count: 1, color: "bg-accent-steel" },
  { label: "Medical", count: 1, color: "bg-success/70" },
  { label: "Complete", count: 1, color: "bg-success" },
];

const activityItems = [
  { text: "New offer received for Emmanuel Osei from Club Brugge — €4.2M", time: "25 min ago" },
  { text: "Contract expiring: Lucas Ferreira in 45 days", time: "1h ago" },
  { text: "Medical scheduled for Youssef El-Hadj at Brighton", time: "2h ago" },
  { text: "Due diligence documents submitted for Kwame Mensah", time: "3h ago" },
  { text: "Commission payment received: €18,500 (André Santos deal)", time: "5h ago" },
  { text: "Club Brugge viewed Emmanuel Osei&apos;s profile 3 times today", time: "6h ago" },
  { text: "New scouting report received: Ibrahim Touré (ASEC Mimosas)", time: "8h ago" },
  { text: "Galatasaray increased offer for Ahmed Hassan to €5.5M", time: "12h ago" },
  { text: "Transfer window deadline reminder: 18 days remaining", time: "1d ago" },
  { text: "Compliance documents approved for João Silva loan", time: "1d ago" },
];

const upcomingEvents = [
  { title: "Meeting with Club Brugge sporting director", date: "Feb 15, 2026 — 10:00", type: "meeting" },
  { title: "Transfer window deadline", date: "Mar 4, 2026", type: "deadline" },
  { title: "Contract expiry: Lucas Ferreira", date: "Mar 31, 2026", type: "expiry" },
  { title: "Medical — Youssef El-Hadj at Brighton", date: "Feb 18, 2026 — 09:00", type: "medical" },
  { title: "FIFA Agent Compliance renewal due", date: "Apr 1, 2026", type: "compliance" },
];

export default function DashboardOverview() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Good evening, Kerwin</h1>
        <p className="text-sm text-foreground-muted mt-1">Here&apos;s what&apos;s happening across your portfolio</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard icon={Users} label="Active Players" value="8" trend="↑2 this month" trendUp iconColor="text-accent" />
        <KPICard icon={GitBranch} label="Pending Deals" value="3" trend="€8.2M total value" iconColor="text-success" />
        <KPICard icon={DollarSign} label="Commission Earned" value="€142,500" trend="This year" iconColor="text-accent-light" />
        <KPICard icon={TrendingUp} label="Pipeline Value" value="€12.4M" trend="10 active deals" iconColor="text-accent" />
      </div>

      {/* Deal Pipeline Mini */}
      <div className="card rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-sm">Deal Pipeline</h2>
          <Link href="/dashboard/deals" className="text-xs text-accent hover:text-accent-light transition-colors">View all →</Link>
        </div>
        <div className="flex gap-1 h-8 rounded-lg overflow-hidden mb-3">
          {pipelineStages.map((s) => (
            <div
              key={s.label}
              className={`${s.color} flex items-center justify-center text-[10px] font-bold text-white/90`}
              style={{ flex: s.count }}
              title={`${s.label}: ${s.count}`}
            >
              {s.count}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {pipelineStages.map((s) => (
            <div key={s.label} className="flex items-center gap-1.5 text-xs text-foreground-dim">
              <div className={`w-2 h-2 rounded-full ${s.color}`} />
              {s.label} ({s.count})
            </div>
          ))}
        </div>
      </div>

      {/* Activity + Events */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityFeed items={activityItems} title="Recent Activity" />
        </div>
        <div className="card rounded-xl p-6">
          <h2 className="font-semibold text-sm mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent" /> Upcoming Events
          </h2>
          <div className="space-y-3">
            {upcomingEvents.map((e, i) => (
              <div key={i} className="p-3 bg-background-elevated rounded-lg">
                <p className="text-sm font-medium">{e.title}</p>
                <p className="text-xs text-foreground-dim mt-1">{e.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card rounded-xl p-6">
        <h2 className="font-semibold text-sm mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Add Player", icon: Plus, href: "/dashboard/players" },
            { label: "Start New Deal", icon: GitBranch, href: "/dashboard/deals" },
            { label: "Send Message", icon: MessageCircle, href: "/dashboard/messages" },
            { label: "View Reports", icon: BarChart3, href: "/dashboard/commissions" },
          ].map((a) => (
            <Link
              key={a.label}
              href={a.href}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg gradient-steel-btn text-sm font-medium text-white transition-all"
            >
              <a.icon className="w-4 h-4" />
              {a.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
