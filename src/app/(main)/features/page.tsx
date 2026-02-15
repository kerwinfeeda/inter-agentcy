"use client";

import { useState } from "react";
import {
  Users, Search, Shield, Globe, GraduationCap, DollarSign,
  BarChart3, FileText, Video, Building2, Handshake, BookOpen,
  CreditCard, PieChart, Receipt, Link2, Megaphone, Brain,
  Camera, Trophy, UserCheck, TrendingUp, Share2, Palette
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import Link from "next/link";

type RoleFilter = "all" | "agents" | "scouts" | "reps" | "introducers";

const roleFilters: { key: RoleFilter; label: string; icon: typeof Shield }[] = [
  { key: "all", label: "All Features", icon: Globe },
  { key: "agents", label: "Agents", icon: Shield },
  { key: "scouts", label: "Scouts", icon: Search },
  { key: "reps", label: "Representatives", icon: Users },
  { key: "introducers", label: "Introducers", icon: Link2 },
];

const features = [
  {
    category: "Agent CRM",
    icon: Users,
    roles: ["agents", "reps"],
    tiers: "Free (basic) • Pro (full) • Elite (advanced)",
    description: "Complete player pipeline management.",
    items: [
      { icon: Users, title: "Player Pipeline", description: "Track prospects, clients, and former players with detailed profiles and contract history." },
      { icon: FileText, title: "Contract Tracking", description: "Monitor active contracts, expiration dates, and renewal windows automatically." },
      { icon: BarChart3, title: "Deal Flow Management", description: "Kanban-style pipeline from initial contact to signed deal. Never lose track." },
    ],
  },
  {
    category: "Scouting Tools",
    icon: Search,
    roles: ["agents", "scouts"],
    tiers: "Scout Free (basic) • Scout Pro (full) • Scout/Agent Elite (integrations)",
    description: "Data-driven scouting built into your workflow.",
    items: [
      { icon: Search, title: "Wyscout & StatsBomb Feeds", description: "Access professional scouting data. Available at Elite tier for scouts and agents." },
      { icon: Video, title: "Video Analysis & Storage", description: "Upload, tag, clip, and share match footage. Up to 50GB on Elite plans." },
      { icon: PieChart, title: "Performance Analytics", description: "Advanced metrics, comparison tools, and scouting report templates." },
    ],
  },
  {
    category: "Compliance Suite",
    icon: Shield,
    roles: ["agents", "scouts", "reps", "introducers"],
    tiers: "Available on all plans (depth varies by tier)",
    description: "FIFA Football Agent Regulations compliance for everyone.",
    items: [
      { icon: Shield, title: "Regulation Engine", description: "Automatic compliance checks. Ensures unlicensed participants work through licensed agents." },
      { icon: FileText, title: "Contract Templates", description: "Pre-approved templates for representation, scouting, introduction, and transfer agreements." },
      { icon: DollarSign, title: "Commission Calculator", description: "Real-time commission and finder's fee calculations based on deal structure." },
    ],
  },
  {
    category: "Network Hub",
    icon: Globe,
    roles: ["agents", "scouts", "reps", "introducers"],
    tiers: "Free (limited) • Pro (full) • Elite (priority)",
    description: "Connect with the global football ecosystem.",
    items: [
      { icon: Building2, title: "Club Directory", description: "Verified database of clubs worldwide with contact channels. Priority access on Elite." },
      { icon: Handshake, title: "Role Matching", description: "Scouts matched with agents, reps paired with licensed partners, introducers connected to all." },
      { icon: Globe, title: "Transfer Marketplace", description: "List players, browse opportunities, and facilitate deals in a trusted environment." },
    ],
  },
  {
    category: "Career & Brand Management",
    icon: Megaphone,
    roles: ["reps"],
    tiers: "Rep Starter (basic) • Rep Pro (AI-powered) • Rep Elite (full suite)",
    description: "Tools for player career and brand development.",
    items: [
      { icon: Brain, title: "AI Career Planning", description: "AI-powered career trajectory analysis and development recommendations for players." },
      { icon: Palette, title: "Brand & Social Media Suite", description: "Social media management, content templates, and personal brand development tools." },
      { icon: Trophy, title: "Sponsorship Matching", description: "Connect players with brand sponsorship opportunities. Available on Elite tier." },
    ],
  },
  {
    category: "Discovery & Reporting",
    icon: Camera,
    roles: ["scouts"],
    tiers: "Scout Free (5/mo) • Scout Pro (unlimited) • Scout Elite (full integrations)",
    description: "Professional scouting report creation and distribution.",
    items: [
      { icon: FileText, title: "Report Builder", description: "Professional scouting report templates with stats integration and video clips." },
      { icon: UserCheck, title: "Agent Matching", description: "Your reports are automatically surfaced to relevant agents. Priority matching on Elite." },
      { icon: DollarSign, title: "Finder's Fee Tracking", description: "Track and manage finder's fees with escrow protection on Elite plans." },
    ],
  },
  {
    category: "Referral & Introduction Tools",
    icon: Link2,
    roles: ["introducers"],
    tiers: "Basic (free) • Network ($39/mo)",
    description: "Track introductions, earn commissions.",
    items: [
      { icon: Share2, title: "Referral Tracking", description: "Full visibility on every introduction — who you connected, deal status, and your commission." },
      { icon: TrendingUp, title: "Analytics Dashboard", description: "Track your network effectiveness, conversion rates, and volume bonuses." },
      { icon: UserCheck, title: "Verified Badge", description: "Stand out with a verified introducer badge. Available on Network plan." },
    ],
  },
  {
    category: "Financial Tools",
    icon: DollarSign,
    roles: ["agents", "scouts", "reps", "introducers"],
    tiers: "Available on all paid plans",
    description: "Track your money. Grow your business.",
    items: [
      { icon: DollarSign, title: "Commission & Fee Tracking", description: "Real-time dashboard of earned, pending, and projected commissions or finder's fees." },
      { icon: Receipt, title: "Invoicing", description: "Generate professional invoices and track payments automatically." },
      { icon: CreditCard, title: "Payment Processing", description: "Secure payment rails with multi-currency support and escrow for international deals." },
    ],
  },
  {
    category: "Career Development",
    icon: GraduationCap,
    roles: ["agents", "scouts", "reps"],
    tiers: "Free (basic) • Pro/Elite (full access)",
    description: "Grow your skills and credentials.",
    items: [
      { icon: BookOpen, title: "Training Modules", description: "Self-paced courses on negotiations, regulations, scouting, and business development." },
      { icon: GraduationCap, title: "FIFA Exam Prep", description: "Comprehensive study materials and practice tests for the FIFA Agent Examination." },
      { icon: Users, title: "Mentorship Matching", description: "Connect with experienced professionals in your role for guidance." },
    ],
  },
];

export default function FeaturesPage() {
  const [filter, setFilter] = useState<RoleFilter>("all");

  const filtered = filter === "all"
    ? features
    : features.filter((f) => f.roles.includes(filter));

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Platform <span className="gradient-text">Features</span>
          </h1>
          <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
            Tools for every role in the football representation ecosystem.
          </p>
        </div>

        {/* Role Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {roleFilters.map((r) => (
            <button
              key={r.key}
              onClick={() => setFilter(r.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === r.key
                  ? "bg-accent text-white"
                  : "card text-foreground-muted hover:text-white hover:bg-background-elevated"
              }`}
            >
              <r.icon className="w-4 h-4" />
              {r.label}
            </button>
          ))}
        </div>

        <div className="space-y-20">
          {filtered.map((section) => (
            <div key={section.category}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{section.category}</h2>
                    <p className="text-foreground-muted text-sm">{section.description}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {section.roles.map((r) => (
                  <span key={r} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-foreground-muted capitalize">{r === "reps" ? "Representatives" : r}</span>
                ))}
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent">{section.tiers}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            href="/join"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-steel-btn text-white font-semibold rounded-xl transition-all"
          >
            Get Early Access
          </Link>
        </div>
      </div>
    </div>
  );
}
