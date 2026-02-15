"use client";

import { Calendar, TrendingUp, Eye, Users, CheckSquare } from "lucide-react";
import KPICard from "@/components/dashboard/KPICard";
import ActivityFeed from "@/components/dashboard/ActivityFeed";

const recentActivity = [
  { text: "Profile viewed by Sporting CP sporting director", time: "1h ago" },
  { text: "Agent Kerwin Alabi updated your market valuation", time: "5h ago" },
  { text: "New opportunity: Vitória SC interested in loan deal", time: "1d ago" },
  { text: "Training performance report uploaded by coaching staff", time: "2d ago" },
  { text: "Video highlights reel updated — 3 new clips added", time: "3d ago" },
];

const nextSteps = [
  { label: "Review updated contract terms from agent", done: false },
  { label: "Complete fitness assessment report", done: false },
  { label: "Record video message for social media campaign", done: true },
  { label: "Attend brand partnership meeting (Feb 18)", done: false },
  { label: "Update profile bio and stats", done: true },
];

export default function PlayerOverview() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Player Dashboard</h1>
        <p className="text-sm text-foreground-muted mt-1">Your career overview and next steps</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard icon={Calendar} label="Contract Expires" value="Jun 2026" trend="485 days remaining" iconColor="text-accent" />
        <KPICard icon={TrendingUp} label="Market Value" value="€800K" trend="↑€50K this quarter" trendUp iconColor="text-success" />
        <KPICard icon={Users} label="Club Interest" value="3" trend="1 new this week" trendUp iconColor="text-accent-light" />
        <KPICard icon={Eye} label="Profile Views" value="142" trend="Last 30 days" iconColor="text-accent-steel" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityFeed items={recentActivity} title="Recent Activity" />
        </div>

        <div className="space-y-6">
          <div className="card rounded-xl p-6">
            <h2 className="font-semibold text-sm mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" /> My Team
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-background-elevated rounded-lg">
                <p className="text-sm font-medium">Kerwin Alabi</p>
                <p className="text-xs text-foreground-dim">Licensed Agent</p>
              </div>
              <div className="p-3 bg-background-elevated rounded-lg">
                <p className="text-sm font-medium">Sofia Carvalho</p>
                <p className="text-xs text-foreground-dim">Player Representative</p>
              </div>
            </div>
          </div>

          <div className="card rounded-xl p-6">
            <h2 className="font-semibold text-sm mb-4 flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-accent" /> Next Steps
            </h2>
            <div className="space-y-2">
              {nextSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-background-elevated transition-colors">
                  <div className={`w-4 h-4 rounded border flex-shrink-0 mt-0.5 flex items-center justify-center ${
                    step.done ? "bg-success/20 border-success" : "border-foreground-dim"
                  }`}>
                    {step.done && <span className="text-success text-[10px]">✓</span>}
                  </div>
                  <p className={`text-xs ${step.done ? "text-foreground-dim line-through" : "text-foreground-muted"}`}>{step.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
