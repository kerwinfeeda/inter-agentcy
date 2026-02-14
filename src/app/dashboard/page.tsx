"use client";

import { useState } from "react";
import {
  Users, TrendingUp, Clock, DollarSign, FileText, Activity,
  Circle, Shield, Search, Link2,
  Eye, Star, Share2, Megaphone, BarChart3
} from "lucide-react";

type DashRole = "agent" | "scout" | "rep" | "introducer";

const roleTabs: { key: DashRole; label: string; icon: typeof Shield }[] = [
  { key: "agent", label: "Agent", icon: Shield },
  { key: "scout", label: "Scout", icon: Search },
  { key: "rep", label: "Representative", icon: Users },
  { key: "introducer", label: "Introducer", icon: Link2 },
];

/* ──────── AGENT DASHBOARD ──────── */
function AgentDashboard() {
  const players = [
    { name: "Marcus Obi", age: 22, pos: "ST", club: "FC Porto B", contract: "Jun 2025", value: "€2.5M", status: "active" },
    { name: "João Silva", age: 19, pos: "LW", club: "Sporting CP U23", contract: "Dec 2026", value: "€800K", status: "active" },
    { name: "Ahmed Hassan", age: 24, pos: "CM", club: "Al Ahly", contract: "Mar 2025", value: "€3.1M", status: "expiring" },
    { name: "Kwame Mensah", age: 21, pos: "CB", club: "Free Agent", contract: "—", value: "€1.2M", status: "free" },
  ];
  const pipeline = [
    { stage: "Initial Contact", color: "bg-text-dim", deals: [{ player: "Youssef El-Hadj", club: "Standard Liège", type: "Transfer", value: "€4M" }] },
    { stage: "Negotiation", color: "bg-accent", deals: [{ player: "Marcus Obi", club: "Club Brugge", type: "Transfer", value: "€3.2M" }, { player: "Ahmed Hassan", club: "Galatasaray", type: "Transfer", value: "€5M" }] },
    { stage: "Due Diligence", color: "bg-accent-light", deals: [{ player: "João Silva", club: "Brighton", type: "Loan", value: "€500K" }] },
    { stage: "Closing", color: "bg-success", deals: [{ player: "Kwame Mensah", club: "FC Nantes", type: "Free", value: "Signing bonus" }] },
  ];
  const activity = [
    { text: "Club Brugge viewed Marcus Obi's profile", time: "2h ago" },
    { text: "New scouting report from scout network", time: "4h ago" },
    { text: "Contract reminder: Ahmed Hassan expires in 45 days", time: "6h ago" },
    { text: "Commission payment received: €12,500", time: "2d ago" },
  ];

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Users, label: "Active Players", value: "4", change: "+1 this month", color: "text-accent" },
          { icon: TrendingUp, label: "Active Deals", value: "5", change: "€12.7M pipeline", color: "text-success" },
          { icon: Clock, label: "Expiring Contracts", value: "2", change: "Next 90 days", color: "text-accent-light" },
          { icon: DollarSign, label: "YTD Commission", value: "€47.2K", change: "+23% vs last year", color: "text-accent" },
        ].map((kpi) => (
          <div key={kpi.label} className="card rounded-xl p-5">
            <kpi.icon className={`w-5 h-5 ${kpi.color} mb-3`} />
            <p className="text-2xl font-bold">{kpi.value}</p>
            <p className="text-xs text-foreground-muted mt-1">{kpi.label}</p>
            <p className="text-xs text-foreground-dim">{kpi.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card rounded-xl p-6">
          <h2 className="font-semibold flex items-center gap-2 mb-5">
            <Users className="w-4 h-4 text-accent" /> Player Portfolio
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="text-foreground-dim text-xs border-b border-border">
                <th className="text-left py-2 font-medium">Player</th><th className="text-left py-2 font-medium">Pos</th><th className="text-left py-2 font-medium">Club</th><th className="text-left py-2 font-medium">Contract</th><th className="text-left py-2 font-medium">Value</th><th className="text-left py-2 font-medium">Status</th>
              </tr></thead>
              <tbody>
                {players.map((p) => (
                  <tr key={p.name} className="border-b border-border hover:bg-background-elevated">
                    <td className="py-3"><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent">{p.name.split(" ").map(n=>n[0]).join("")}</div><div><p className="font-medium">{p.name}</p><p className="text-xs text-foreground-dim">Age {p.age}</p></div></div></td>
                    <td className="py-3 text-foreground-muted">{p.pos}</td><td className="py-3 text-foreground-muted">{p.club}</td><td className="py-3 text-foreground-muted">{p.contract}</td><td className="py-3 font-medium">{p.value}</td>
                    <td className="py-3"><span className={`text-xs px-2 py-0.5 rounded-full ${p.status==="active"?"bg-success/10 text-success":p.status==="expiring"?"bg-accent/10 text-accent":"bg-text-dim/10 text-foreground-muted"}`}>{p.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card rounded-xl p-6">
          <h2 className="font-semibold flex items-center gap-2 mb-5"><Activity className="w-4 h-4 text-accent" /> Activity</h2>
          <div className="space-y-4">{activity.map((a,i)=>(<div key={i} className="flex gap-3"><div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"/><div><p className="text-sm text-foreground-muted">{a.text}</p><p className="text-xs text-foreground-dim">{a.time}</p></div></div>))}</div>
        </div>
      </div>

      <div className="card rounded-xl p-6 mt-6">
        <h2 className="font-semibold flex items-center gap-2 mb-5"><TrendingUp className="w-4 h-4 text-accent" /> Deal Pipeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {pipeline.map((stage)=>(<div key={stage.stage}><div className="flex items-center gap-2 mb-3"><div className={`w-3 h-3 rounded-full ${stage.color}`}/><span className="text-sm font-medium">{stage.stage}</span><span className="text-xs text-foreground-dim">({stage.deals.length})</span></div><div className="space-y-2">{stage.deals.map((d)=>(<div key={d.player} className="bg-background-elevated rounded-lg p-3 hover:bg-background-elevated/80 transition-colors"><p className="text-sm font-medium">{d.player}</p><p className="text-xs text-foreground-muted">{d.club}</p><div className="flex justify-between mt-2"><span className="text-xs text-foreground-dim">{d.type}</span><span className="text-xs font-medium text-accent">{d.value}</span></div></div>))}</div></div>))}
        </div>
      </div>
    </>
  );
}

/* ──────── SCOUT DASHBOARD ──────── */
function ScoutDashboard() {
  const reports = [
    { player: "Enzo Martínez", age: 18, club: "River Plate", rating: 8.5, status: "Sent to 3 agents", date: "2 days ago" },
    { player: "Samuel Adeyemi", age: 20, club: "Enyimba FC", rating: 7.8, status: "1 agent interested", date: "3 days ago" },
    { player: "Lucas Pereira", age: 17, club: "São Paulo FC", rating: 9.1, status: "Deal in progress", date: "5 days ago" },
    { player: "Ibrahim Touré", age: 19, club: "ASEC Mimosas", rating: 7.5, status: "Under review", date: "1 week ago" },
  ];
  const activity = [
    { text: "Agent Carlos Mendes opened your report on Enzo Martínez", time: "1h ago" },
    { text: "Finder's fee confirmed: €3,200 for Lucas Pereira deal", time: "3h ago" },
    { text: "New agent match: Your West Africa reports → 2 agents looking", time: "1d ago" },
  ];

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: FileText, label: "Reports This Month", value: "12", change: "4 sent to agents", color: "text-success" },
          { icon: Eye, label: "Agent Views", value: "47", change: "+18 this week", color: "text-accent" },
          { icon: Star, label: "Avg Rating", value: "8.1", change: "Top 15% of scouts", color: "text-accent-light" },
          { icon: DollarSign, label: "Finder's Fees", value: "€6.4K", change: "1 pending (€3.2K)", color: "text-accent" },
        ].map((kpi) => (
          <div key={kpi.label} className="card rounded-xl p-5">
            <kpi.icon className={`w-5 h-5 ${kpi.color} mb-3`} />
            <p className="text-2xl font-bold">{kpi.value}</p>
            <p className="text-xs text-foreground-muted mt-1">{kpi.label}</p>
            <p className="text-xs text-foreground-dim">{kpi.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card rounded-xl p-6">
          <h2 className="font-semibold flex items-center gap-2 mb-5"><FileText className="w-4 h-4 text-success" /> Recent Reports</h2>
          <div className="space-y-3">
            {reports.map((r) => (
              <div key={r.player} className="flex items-center justify-between p-3 bg-background-elevated rounded-lg hover:bg-background-elevated/80 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center"><FileText className="w-5 h-5 text-success" /></div>
                  <div><p className="text-sm font-medium">{r.player} ({r.age})</p><p className="text-xs text-foreground-muted">{r.club}</p></div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-success">{r.rating}</p>
                  <p className="text-xs text-foreground-dim">{r.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card rounded-xl p-6">
          <h2 className="font-semibold flex items-center gap-2 mb-5"><Activity className="w-4 h-4 text-success" /> Activity</h2>
          <div className="space-y-4">{activity.map((a,i)=>(<div key={i} className="flex gap-3"><div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0"/><div><p className="text-sm text-foreground-muted">{a.text}</p><p className="text-xs text-foreground-dim">{a.time}</p></div></div>))}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="card rounded-xl p-6">
          <h2 className="font-semibold flex items-center gap-2 mb-5"><Users className="w-4 h-4 text-success" /> Agent Connections</h2>
          {["Carlos Mendes — Brazil, Portugal focus", "Amina Okafor — West Africa focus", "Thomas Eriksson — Scandinavia focus"].map((a, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-background-elevated rounded-lg mb-2">
              <span className="text-sm">{a}</span>
              <span className="text-xs text-success">Connected</span>
            </div>
          ))}
        </div>
        <div className="card rounded-xl p-6">
          <h2 className="font-semibold flex items-center gap-2 mb-5"><DollarSign className="w-4 h-4 text-accent" /> Finder&apos;s Fees</h2>
          {[
            { label: "Earned (Paid)", amount: "€6,400", color: "text-success" },
            { label: "Pending (In Escrow)", amount: "€3,200", color: "text-accent-light" },
            { label: "Projected", amount: "€8,500", color: "text-accent" },
          ].map((f) => (
            <div key={f.label} className="flex justify-between p-3 bg-background-elevated rounded-lg mb-2">
              <span className="text-sm text-foreground-muted">{f.label}</span>
              <span className={`text-sm font-bold ${f.color}`}>{f.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ──────── REP DASHBOARD ──────── */
function RepDashboard() {
  const players = [
    { name: "Daniel Kofi", age: 20, pos: "RW", followers: "45K", brand: "Growing", agent: "Linked" },
    { name: "Sofia Reyes", age: 22, pos: "GK", followers: "12K", brand: "Building", agent: "Pending" },
    { name: "Moussa Diallo", age: 18, pos: "CM", followers: "8K", brand: "New", agent: "Searching" },
  ];

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Users, label: "Players Managed", value: "3", change: "1 new this month", color: "text-purple-400" },
          { icon: Megaphone, label: "Social Reach", value: "65K", change: "+12K this quarter", color: "text-accent" },
          { icon: Shield, label: "Agent Partners", value: "2", change: "1 pending match", color: "text-success" },
          { icon: DollarSign, label: "Revenue Share", value: "€8.1K", change: "65/35 split", color: "text-accent-light" },
        ].map((kpi) => (
          <div key={kpi.label} className="card rounded-xl p-5">
            <kpi.icon className={`w-5 h-5 ${kpi.color} mb-3`} />
            <p className="text-2xl font-bold">{kpi.value}</p>
            <p className="text-xs text-foreground-muted mt-1">{kpi.label}</p>
            <p className="text-xs text-foreground-dim">{kpi.change}</p>
          </div>
        ))}
      </div>

      <div className="card rounded-xl p-6 mb-6">
        <h2 className="font-semibold flex items-center gap-2 mb-5"><Users className="w-4 h-4 text-purple-400" /> Player Roster</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {players.map((p) => (
            <div key={p.name} className="bg-background-elevated rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-purple-400/10 flex items-center justify-center text-xs font-bold text-purple-400">{p.name.split(" ").map(n=>n[0]).join("")}</div>
                <div><p className="font-medium text-sm">{p.name}</p><p className="text-xs text-foreground-dim">{p.pos} • Age {p.age}</p></div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-foreground-muted">Social Following</span><span>{p.followers}</span></div>
                <div className="flex justify-between"><span className="text-foreground-muted">Brand Status</span><span className="text-purple-400">{p.brand}</span></div>
                <div className="flex justify-between"><span className="text-foreground-muted">Agent Link</span><span className={p.agent==="Linked"?"text-success":p.agent==="Pending"?"text-accent-light":"text-foreground-dim"}>{p.agent}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card rounded-xl p-6">
          <h2 className="font-semibold flex items-center gap-2 mb-5"><BarChart3 className="w-4 h-4 text-purple-400" /> Career Timelines</h2>
          {["Daniel Kofi — Target: Top 5 league move by 2026", "Sofia Reyes — Target: National team call-up Q3 2025", "Moussa Diallo — Target: Academy → First team promotion"].map((t, i) => (
            <div key={i} className="p-3 bg-background-elevated rounded-lg mb-2 text-sm text-foreground-muted">{t}</div>
          ))}
        </div>
        <div className="card rounded-xl p-6">
          <h2 className="font-semibold flex items-center gap-2 mb-5"><Megaphone className="w-4 h-4 text-purple-400" /> Brand Metrics</h2>
          {[
            { label: "Total Engagement Rate", value: "4.2%", color: "text-success" },
            { label: "Content Published (This Month)", value: "23 posts", color: "text-accent" },
            { label: "Sponsorship Inquiries", value: "2 pending", color: "text-accent-light" },
          ].map((m) => (
            <div key={m.label} className="flex justify-between p-3 bg-background-elevated rounded-lg mb-2">
              <span className="text-sm text-foreground-muted">{m.label}</span>
              <span className={`text-sm font-bold ${m.color}`}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ──────── INTRODUCER DASHBOARD ──────── */
function IntroducerDashboard() {
  const connections = [
    { from: "Player: Enzo Martínez", to: "Agent: Carlos Mendes", status: "Deal Closed", commission: "€1,200" },
    { from: "Scout: James Obi", to: "Agent: Amina Okafor", status: "In Progress", commission: "Pending" },
    { from: "Club: FC Nantes", to: "Agent: Thomas Eriksson", status: "Negotiating", commission: "Est. €800" },
  ];

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Link2, label: "Introductions Made", value: "24", change: "6 this month", color: "text-accent" },
          { icon: TrendingUp, label: "Conversion Rate", value: "33%", change: "Above average", color: "text-success" },
          { icon: DollarSign, label: "Commissions Earned", value: "€4.8K", change: "+€1.2K this month", color: "text-accent" },
          { icon: Share2, label: "Network Size", value: "156", change: "Agents, scouts, clubs", color: "text-accent-light" },
        ].map((kpi) => (
          <div key={kpi.label} className="card rounded-xl p-5">
            <kpi.icon className={`w-5 h-5 ${kpi.color} mb-3`} />
            <p className="text-2xl font-bold">{kpi.value}</p>
            <p className="text-xs text-foreground-muted mt-1">{kpi.label}</p>
            <p className="text-xs text-foreground-dim">{kpi.change}</p>
          </div>
        ))}
      </div>

      <div className="card rounded-xl p-6 mb-6">
        <h2 className="font-semibold flex items-center gap-2 mb-5"><Link2 className="w-4 h-4 text-accent" /> Recent Introductions</h2>
        <div className="space-y-3">
          {connections.map((c, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-background-elevated rounded-lg gap-3">
              <div className="flex-1">
                <p className="text-sm font-medium">{c.from} → {c.to}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-xs px-2 py-0.5 rounded-full ${c.status==="Deal Closed"?"bg-success/10 text-success":c.status==="In Progress"?"bg-accent/10 text-accent":"bg-accent-light/10 text-accent-light"}`}>{c.status}</span>
                <span className="text-sm font-bold text-accent">{c.commission}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card rounded-xl p-6">
          <h2 className="font-semibold flex items-center gap-2 mb-5"><Share2 className="w-4 h-4 text-accent" /> Network Breakdown</h2>
          {[
            { label: "Licensed Agents", count: "34" },
            { label: "Scouts", count: "28" },
            { label: "Club Contacts", count: "52" },
            { label: "Players", count: "42" },
          ].map((n) => (
            <div key={n.label} className="flex justify-between p-3 bg-background-elevated rounded-lg mb-2">
              <span className="text-sm text-foreground-muted">{n.label}</span>
              <span className="text-sm font-bold">{n.count}</span>
            </div>
          ))}
        </div>
        <div className="card rounded-xl p-6">
          <h2 className="font-semibold flex items-center gap-2 mb-5"><DollarSign className="w-4 h-4 text-accent" /> Commission History</h2>
          {[
            { label: "Total Earned", amount: "€4,800", color: "text-success" },
            { label: "Pending", amount: "€2,000", color: "text-accent-light" },
            { label: "Volume Bonus Progress", amount: "8/10 deals", color: "text-accent" },
          ].map((c) => (
            <div key={c.label} className="flex justify-between p-3 bg-background-elevated rounded-lg mb-2">
              <span className="text-sm text-foreground-muted">{c.label}</span>
              <span className={`text-sm font-bold ${c.color}`}>{c.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ──────── MAIN PAGE ──────── */
export default function DashboardPage() {
  const [role, setRole] = useState<DashRole>("agent");

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full card text-sm text-foreground-muted mb-4">
            <Circle className="w-2 h-2 fill-success text-success" />
            Dashboard Preview
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your <span className="gradient-text">Command Center</span>
          </h1>
          <p className="text-foreground-muted max-w-xl mx-auto">
            Every role gets a dashboard tailored to their workflow. Switch views below.
          </p>
        </div>

        {/* Role Switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {roleTabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setRole(t.key)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                role === t.key
                  ? "bg-background-elevated border-2 border-accent text-white"
                  : "card text-foreground-muted hover:text-white hover:bg-background-elevated"
              }`}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </div>

        {role === "agent" && <AgentDashboard />}
        {role === "scout" && <ScoutDashboard />}
        {role === "rep" && <RepDashboard />}
        {role === "introducer" && <IntroducerDashboard />}
      </div>
    </div>
  );
}
