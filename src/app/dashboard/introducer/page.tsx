"use client";

import { Link2, CheckCircle, DollarSign, TrendingUp, Plus, Users, BarChart3 } from "lucide-react";
import KPICard from "@/components/dashboard/KPICard";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import Link from "next/link";

const recentIntros = [
  { text: "Connected SC Braga with agent Marcus Webb — re: midfielder transfer", time: "3h ago" },
  { text: "Intro between Fenerbahçe sporting director and Kerwin Alabi — completed", time: "8h ago" },
  { text: "Facilitated meeting: Ghana FA talent ID × Belgian scouting network", time: "1d ago" },
  { text: "Connected João Mendes (player) with sports psychologist Dr. Alves", time: "2d ago" },
  { text: "Intro between Wolves academy and Lagos Football Academy — pending", time: "3d ago" },
];

export default function IntroducerOverview() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Introducer Dashboard</h1>
        <p className="text-sm text-foreground-muted mt-1">Your introductions and network at a glance</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard icon={Link2} label="Active Intros" value="8" trend="3 this week" trendUp iconColor="text-accent" />
        <KPICard icon={CheckCircle} label="Successful" value="23" trend="All time" iconColor="text-success" />
        <KPICard icon={DollarSign} label="Commission Earned" value="€7,200" trend="This year" iconColor="text-accent-light" />
        <KPICard icon={TrendingUp} label="Conversion Rate" value="34%" trend="↑2% vs last quarter" trendUp iconColor="text-accent-steel" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityFeed items={recentIntros} title="Recent Introductions" />
        </div>

        <div className="card rounded-xl p-6">
          <h2 className="font-semibold text-sm mb-4">Quick Actions</h2>
          <div className="space-y-2">
            {[
              { label: "New Introduction", icon: Plus, href: "/dashboard/introducer/introductions" },
              { label: "Browse Network", icon: Users, href: "/dashboard/introducer/network" },
              { label: "View Stats", icon: BarChart3, href: "/dashboard/introducer/introductions" },
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
  );
}
