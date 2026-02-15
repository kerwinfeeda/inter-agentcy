"use client";

import { Briefcase, Inbox, GitBranch, FileText, Clock, Search, List } from "lucide-react";
import KPICard from "@/components/dashboard/KPICard";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import Link from "next/link";

const recentSubmissions = [
  { text: "Rafael Domingues (CM, 22) — submitted by Kerwin Alabi, match score 87%", time: "2h ago" },
  { text: "Emmanuel Osei (CB, 24) — submitted by Marcus Webb, match score 82%", time: "6h ago" },
  { text: "Youssef El-Hadj (AM, 21) — submitted by Kerwin Alabi, match score 79%", time: "1d ago" },
  { text: "Kwame Mensah (RW, 25) — submitted by Emeka Nwosu, match score 71%", time: "1d ago" },
  { text: "Lucas Ferreira (CM, 26) — submitted by Tiago Reis, match score 68%", time: "2d ago" },
];

export default function ClubOverview() {
  const transferWindowEnd = new Date("2026-02-28");
  const now = new Date("2026-02-14");
  const daysLeft = Math.ceil((transferWindowEnd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Club Dashboard</h1>
        <p className="text-sm text-foreground-muted mt-1">Recruitment overview and transfer activity</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard icon={Briefcase} label="Open Positions" value="4" trend="2 urgent" iconColor="text-accent" />
        <KPICard icon={Inbox} label="Submissions" value="18" trend="5 this week" trendUp iconColor="text-success" />
        <KPICard icon={GitBranch} label="Active Negotiations" value="2" trend="1 near completion" iconColor="text-accent-light" />
        <KPICard icon={FileText} label="Scouting Briefs" value="3" trend="Updated this week" iconColor="text-accent-steel" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityFeed items={recentSubmissions} title="Recent Submissions" />
        </div>

        <div className="space-y-6">
          <div className="card rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-danger" />
              <h2 className="font-semibold text-sm">Transfer Window</h2>
            </div>
            <div className="text-center py-4">
              <p className="text-4xl font-bold text-danger">{daysLeft}</p>
              <p className="text-xs text-foreground-dim mt-1">days until window closes</p>
              <p className="text-xs text-foreground-muted mt-0.5">Winter window ends Feb 28, 2026</p>
            </div>
          </div>

          <div className="card rounded-xl p-6">
            <h2 className="font-semibold text-sm mb-4">Quick Actions</h2>
            <div className="space-y-2">
              {[
                { label: "Search Players", icon: Search, href: "/dashboard/club/search" },
                { label: "Review Submissions", icon: Inbox, href: "/dashboard/club/submissions" },
                { label: "Manage Wish List", icon: List, href: "/dashboard/club/wishlist" },
              ].map((a) => (
                <Link key={a.label} href={a.href} className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg gradient-steel-btn text-sm font-medium text-white transition-all">
                  <a.icon className="w-4 h-4" />
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
