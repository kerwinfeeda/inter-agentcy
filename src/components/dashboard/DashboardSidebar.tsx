"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Users, GitBranch, DollarSign, Globe, FileText,
  Calendar, Shield, MessageCircle, Settings, ChevronLeft, ChevronDown,
  Search, Share2, User, Megaphone,
  Link2, TrendingUp, ClipboardList
} from "lucide-react";

type Role = "agent" | "scout" | "representative" | "introducer" | "player" | "club";

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

const roleNavItems: Record<Role, NavItem[]> = {
  agent: [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/players", label: "Players", icon: Users },
    { href: "/dashboard/deals", label: "Deal Pipeline", icon: GitBranch },
    { href: "/dashboard/commissions", label: "Commissions", icon: DollarSign },
    { href: "/dashboard/network", label: "Club Network", icon: Globe },
    { href: "/dashboard/documents", label: "Documents", icon: FileText },
    { href: "/dashboard/calendar", label: "Calendar", icon: Calendar },
    { href: "/dashboard/compliance", label: "Compliance", icon: Shield },
    { href: "/dashboard/messages", label: "Messages", icon: MessageCircle },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ],
  scout: [
    { href: "/dashboard/scout", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/scout/reports", label: "Scouting Reports", icon: FileText },
    { href: "/dashboard/scout/watchlist", label: "Watchlist", icon: Search },
    { href: "/dashboard/scout/fees", label: "Finder\u0027s Fees", icon: DollarSign },
    { href: "/dashboard/messages", label: "Messages", icon: MessageCircle },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ],
  representative: [
    { href: "/dashboard/rep", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/rep/roster", label: "Player Roster", icon: Users },
    { href: "/dashboard/rep/career", label: "Career Planner", icon: TrendingUp },
    { href: "/dashboard/rep/brand", label: "Brand Management", icon: Megaphone },
    { href: "/dashboard/messages", label: "Messages", icon: MessageCircle },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ],
  introducer: [
    { href: "/dashboard/introducer", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/introducer/introductions", label: "Introductions", icon: Link2 },
    { href: "/dashboard/introducer/network", label: "Network", icon: Globe },
    { href: "/dashboard/messages", label: "Messages", icon: MessageCircle },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ],
  player: [
    { href: "/dashboard/player", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/player/profile", label: "My Profile", icon: User },
    { href: "/dashboard/player/opportunities", label: "Opportunities", icon: TrendingUp },
    { href: "/dashboard/player/contracts", label: "My Contracts", icon: FileText },
    { href: "/dashboard/messages", label: "Messages", icon: MessageCircle },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ],
  club: [
    { href: "/dashboard/club", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/club/search", label: "Player Search", icon: Search },
    { href: "/dashboard/club/submissions", label: "Submissions", icon: ClipboardList },
    { href: "/dashboard/club/wishlist", label: "Wish List", icon: Share2 },
    { href: "/dashboard/messages", label: "Messages", icon: MessageCircle },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ],
};

const roleLabels: Record<Role, string> = {
  agent: "Agent",
  scout: "Scout",
  representative: "Representative",
  introducer: "Introducer",
  player: "Player",
  club: "Club",
};

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [role, setRole] = useState<Role>("agent");
  const [roleOpen, setRoleOpen] = useState(false);
  const pathname = usePathname();

  const navItems = roleNavItems[role];

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-background-card border-r border-border z-40 flex flex-col transition-all duration-300 ${
        collapsed ? "w-16" : "w-60"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center h-14 px-4 border-b border-border flex-shrink-0">
        <Shield className="w-6 h-6 text-accent flex-shrink-0" />
        {!collapsed && (
          <span className="ml-2 text-sm font-semibold tracking-tight whitespace-nowrap">
            Inter <span className="text-accent">Agentcy</span>
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto text-foreground-dim hover:text-foreground transition-colors"
        >
          <ChevronLeft className={`w-4 h-4 transition-transform ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Role Switcher */}
      {!collapsed && (
        <div className="px-3 py-3 border-b border-border relative">
          <button
            onClick={() => setRoleOpen(!roleOpen)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-background-elevated text-sm text-foreground-muted hover:text-foreground transition-colors"
          >
            <span>{roleLabels[role]}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${roleOpen ? "rotate-180" : ""}`} />
          </button>
          {roleOpen && (
            <div className="absolute left-3 right-3 top-full mt-1 bg-background-elevated border border-border rounded-lg shadow-xl z-50 py-1">
              {(Object.keys(roleLabels) as Role[]).map((r) => (
                <button
                  key={r}
                  onClick={() => { setRole(r); setRoleOpen(false); }}
                  className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                    r === role ? "text-white bg-white/5" : "text-foreground-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  {roleLabels[r]}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                isActive
                  ? "bg-background-elevated text-white border border-border-light"
                  : "text-foreground-muted hover:text-white hover:bg-background-elevated"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <Icon className="w-4.5 h-4.5 flex-shrink-0" />
              {!collapsed && <span className="whitespace-nowrap">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="border-t border-border p-3">
        <div className={`flex items-center gap-3 ${collapsed ? "justify-center" : ""}`}>
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent flex-shrink-0">
            KA
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">Kerwin Alabi</p>
              <p className="text-xs text-foreground-dim truncate">Licensed Agent</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
