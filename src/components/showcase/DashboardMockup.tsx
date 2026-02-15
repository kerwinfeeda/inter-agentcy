"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "Dashboard", icon: "◻" },
  { label: "Players", icon: "⚽" },
  { label: "Deals", icon: "📋" },
  { label: "Network", icon: "🌐" },
  { label: "Scouting", icon: "🔍" },
  { label: "Compliance", icon: "✓" },
];

// ─── Dashboard View ───
function DashboardView({ animStep }: { animStep: number }) {
  const stats = [
    { label: "Active Players", value: "24", change: "+3", up: true },
    { label: "Pending Deals", value: "7", change: "+2", up: true },
    { label: "Network Reach", value: "1,250+", change: "+48", up: true },
    { label: "Compliance Score", value: "100%", change: "—", up: true },
  ];

  const revenueData = [35, 42, 38, 55, 48, 62, 58, 72, 68, 85, 78, 92];
  const maxRev = Math.max(...revenueData);

  return (
    <div className="p-3 overflow-hidden h-full">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[11px] font-semibold text-white">Dashboard</div>
        <div className="flex items-center gap-2">
          <div className="text-[8px] text-[#5a5a6a] bg-[#131419] border border-[#1a1a1e] rounded px-2 py-0.5">Last 30 days</div>
          <div className="w-5 h-5 rounded bg-[#131419] border border-[#1a1a1e] flex items-center justify-center text-[8px] text-[#5a5a6a]">⋮</div>
        </div>
      </div>

      {/* Stat cards with staggered animation */}
      <div className="grid grid-cols-4 gap-2 mb-3">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="bg-[#131419] border border-[#1a1a1e] rounded-lg p-2 transition-all duration-500"
            style={{
              opacity: animStep > i ? 1 : 0,
              transform: animStep > i ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <div className="text-[7px] text-[#5a5a6a] mb-0.5">{s.label}</div>
            <div className="text-[13px] font-bold text-white">{s.value}</div>
            <div className="text-[7px] text-[#9AAAB8] mt-0.5">{s.change} this month</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {/* Revenue chart */}
        <div className="col-span-2 bg-[#131419] border border-[#1a1a1e] rounded-lg p-2">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[8px] font-semibold text-[#5a5a6a]">COMMISSION REVENUE</div>
            <div className="text-[10px] font-bold text-white">€1.2M</div>
          </div>
          <div className="flex items-end gap-[3px] h-[50px]">
            {revenueData.map((v, i) => (
              <div
                key={i}
                className="flex-1 rounded-t transition-all duration-700 ease-out"
                style={{
                  height: animStep > 4 ? `${(v / maxRev) * 100}%` : "4%",
                  background: i === revenueData.length - 1
                    ? "linear-gradient(to top, #7B8794, #C0C7CE)"
                    : "linear-gradient(to top, #4A5568, #7B8794)",
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1 text-[6px] text-[#5a5a6a]">
            <span>Jan</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dec</span>
          </div>
        </div>

        {/* Activity feed */}
        <div className="bg-[#131419] border border-[#1a1a1e] rounded-lg p-2">
          <div className="text-[8px] font-semibold text-[#5a5a6a] mb-2">ACTIVITY</div>
          {[
            { text: "K. Diallo offer received", time: "2m ago", dot: "#C0C7CE" },
            { text: "M. Santos medical passed", time: "1h ago", dot: "#9AAAB8" },
            { text: "New scout report filed", time: "3h ago", dot: "#7B8794" },
            { text: "Compliance check cleared", time: "5h ago", dot: "#4A5568" },
          ].map((a, i) => (
            <div
              key={a.text}
              className="flex items-start gap-1.5 py-1 border-b border-[#1a1a1e] last:border-0 transition-all duration-500"
              style={{
                opacity: animStep > i + 5 ? 1 : 0,
                transform: animStep > i + 5 ? "translateX(0)" : "translateX(10px)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full mt-1 shrink-0" style={{ background: a.dot }} />
              <div>
                <div className="text-[8px] text-white leading-tight">{a.text}</div>
                <div className="text-[6px] text-[#5a5a6a]">{a.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Players View ───
function PlayersView({ animStep }: { animStep: number }) {
  const players = [
    { name: "Marcus Santos", club: "SC Braga", pos: "Forward", age: 23, value: "€8.5M", flag: "🇧🇷", rating: 82 },
    { name: "Kofi Diallo", club: "RC Lens", pos: "Midfielder", age: 21, value: "€12M", flag: "🇫🇷", rating: 85 },
    { name: "Tunde Okafor", club: "RB Salzburg", pos: "Winger", age: 20, value: "€15M", flag: "🇳🇬", rating: 79 },
    { name: "Luka Petrović", club: "Dinamo Zagreb", pos: "Centre-Back", age: 24, value: "€6M", flag: "🇭🇷", rating: 77 },
    { name: "Youssef El-Amin", club: "Al Ahly", pos: "Striker", age: 22, value: "€4.5M", flag: "🇪🇬", rating: 74 },
  ];

  return (
    <div className="p-3 overflow-hidden h-full">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[11px] font-semibold text-white">Player Portfolio</div>
        <div className="flex items-center gap-1.5">
          <div className="text-[8px] text-[#0b0b0d] bg-[#9AAAB8] rounded px-2 py-0.5 font-semibold">+ Add Player</div>
          <div className="text-[8px] text-[#5a5a6a] bg-[#131419] border border-[#1a1a1e] rounded px-2 py-0.5">Filter</div>
        </div>
      </div>

      {/* Player grid */}
      <div className="grid grid-cols-5 gap-2 mb-3">
        {players.map((p, i) => (
          <div
            key={p.name}
            className="bg-[#131419] border border-[#1a1a1e] rounded-lg p-2 transition-all duration-500"
            style={{
              opacity: animStep > i ? 1 : 0,
              transform: animStep > i ? "translateY(0) scale(1)" : "translateY(12px) scale(0.95)",
            }}
          >
            <div className="flex items-center gap-1 mb-1.5">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4A5568] to-[#7B8794] flex items-center justify-center text-[7px] font-bold">
                {p.name.split(" ").map(n => n[0]).join("")}
              </div>
              <span className="text-[10px]">{p.flag}</span>
            </div>
            <div className="text-[9px] font-semibold text-white truncate">{p.name}</div>
            <div className="text-[7px] text-[#5a5a6a]">{p.club} · {p.pos}</div>
            <div className="flex items-center justify-between mt-1.5">
              <span className="text-[8px] font-bold text-[#C0C7CE]">{p.value}</span>
              <span className="text-[7px] px-1 py-0.5 rounded bg-[#7B8794]/20 text-[#9AAAB8]">{p.rating}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Player detail card */}
      <div
        className="bg-[#131419] border border-[#1a1a1e] rounded-lg p-3 transition-all duration-700"
        style={{
          opacity: animStep > 5 ? 1 : 0,
          transform: animStep > 5 ? "translateY(0)" : "translateY(16px)",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A5568] to-[#9AAAB8] flex items-center justify-center text-[11px] font-bold">KD</div>
          <div className="flex-1">
            <div className="text-[10px] font-bold text-white">Kofi Diallo</div>
            <div className="text-[8px] text-[#5a5a6a]">RC Lens · Midfielder · 21 · 🇫🇷</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold text-white">€12M</div>
            <div className="text-[7px] text-[#9AAAB8]">Market Value</div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-2">
          {[
            { label: "Goals", value: "12" },
            { label: "Assists", value: "8" },
            { label: "Matches", value: "34" },
            { label: "Rating", value: "8.5" },
          ].map((s) => (
            <div key={s.label} className="text-center bg-[#0b0b0d] rounded p-1.5">
              <div className="text-[10px] font-bold text-white">{s.value}</div>
              <div className="text-[6px] text-[#5a5a6a]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Deals View ───
function DealsView({ animStep }: { animStep: number }) {
  const deals = [
    { player: "K. Diallo", from: "RC Lens", to: "Napoli", value: "€12M", commission: "€360K", status: "Negotiating", progress: 65 },
    { player: "M. Santos", from: "SC Braga", to: "West Ham", value: "€8.5M", commission: "€255K", status: "Medical", progress: 85 },
    { player: "T. Okafor", from: "RB Salzburg", to: "AC Milan", value: "€15M", commission: "€450K", status: "Completed", progress: 100 },
    { player: "L. Petrović", from: "Dinamo Zagreb", to: "Brighton", value: "€6M", commission: "€180K", status: "Offer Sent", progress: 30 },
  ];

  return (
    <div className="p-3 overflow-hidden h-full">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[11px] font-semibold text-white">Deal Room</div>
        <div className="flex items-center gap-1.5">
          <div className="text-[8px] text-[#0b0b0d] bg-[#9AAAB8] rounded px-2 py-0.5 font-semibold">+ New Deal</div>
        </div>
      </div>

      {/* Pipeline summary */}
      <div className="grid grid-cols-4 gap-2 mb-3">
        {[
          { label: "Pipeline Value", value: "€41.5M" },
          { label: "Expected Commission", value: "€1.24M" },
          { label: "Active Deals", value: "4" },
          { label: "Avg. Close Time", value: "23 days" },
        ].map((s, i) => (
          <div
            key={s.label}
            className="bg-[#131419] border border-[#1a1a1e] rounded-lg p-2 transition-all duration-500"
            style={{
              opacity: animStep > i ? 1 : 0,
              transform: animStep > i ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <div className="text-[7px] text-[#5a5a6a] mb-0.5">{s.label}</div>
            <div className="text-[12px] font-bold text-white">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Deal rows */}
      <div className="bg-[#131419] border border-[#1a1a1e] rounded-lg overflow-hidden">
        <div className="grid grid-cols-7 gap-1 px-2 py-1.5 border-b border-[#1a1a1e] text-[7px] text-[#5a5a6a] font-semibold uppercase">
          <span>Player</span><span>From</span><span>To</span><span>Value</span><span>Commission</span><span>Status</span><span>Progress</span>
        </div>
        {deals.map((d, i) => (
          <div
            key={d.player}
            className="grid grid-cols-7 gap-1 px-2 py-1.5 border-b border-[#1a1a1e] last:border-0 items-center transition-all duration-500"
            style={{
              opacity: animStep > i + 4 ? 1 : 0,
              transform: animStep > i + 4 ? "translateX(0)" : "translateX(-10px)",
            }}
          >
            <span className="text-[8px] font-semibold text-white">{d.player}</span>
            <span className="text-[8px] text-[#5a5a6a]">{d.from}</span>
            <span className="text-[8px] text-[#5a5a6a]">{d.to}</span>
            <span className="text-[8px] font-semibold text-white">{d.value}</span>
            <span className="text-[8px] text-[#9AAAB8]">{d.commission}</span>
            <span className={`text-[7px] px-1.5 py-0.5 rounded font-medium ${
              d.status === "Completed" ? "bg-[#9AAAB8]/20 text-[#C0C7CE]" :
              d.status === "Medical" ? "bg-[#7B8794]/20 text-[#9AAAB8]" :
              d.status === "Negotiating" ? "bg-[#4A5568]/20 text-[#7B8794]" :
              "bg-[#4A5568]/10 text-[#5a5a6a]"
            }`}>{d.status}</span>
            <div className="flex items-center gap-1">
              <div className="flex-1 h-1.5 bg-[#1a1a1e] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: animStep > i + 4 ? `${d.progress}%` : "0%",
                    background: "linear-gradient(to right, #4A5568, #9AAAB8)",
                  }}
                />
              </div>
              <span className="text-[6px] text-[#5a5a6a] w-6 text-right">{d.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Dashboard with View Cycling ───
const views = ["Dashboard", "Players", "Deals"];

export default function DashboardMockup() {
  const [mounted, setMounted] = useState(false);
  const [activeView, setActiveView] = useState(0);
  const [animStep, setAnimStep] = useState(0);

  // Ensure client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Cycle views
  useEffect(() => {
    if (!mounted) return;
    const viewInterval = setInterval(() => {
      setActiveView((prev) => (prev + 1) % views.length);
    }, 6000);
    return () => clearInterval(viewInterval);
  }, [mounted]);

  // Stagger animations within each view
  useEffect(() => {
    if (!mounted) return;
    setAnimStep(0);
    const steps = [100, 250, 400, 600, 800, 1000, 1200, 1400, 1600];
    const timers = steps.map((ms, i) =>
      setTimeout(() => setAnimStep(i + 1), ms)
    );
    return () => timers.forEach(clearTimeout);
  }, [activeView, mounted]);

  return (
    <div className="flex h-full w-full bg-[#0b0b0d] text-white text-[10px]">
      {/* Sidebar */}
      <div className="w-[20%] bg-[#0d0d0f] border-r border-[#1a1a1e] p-3 flex flex-col">
        <div className="text-[8px] font-bold text-[#C0C7CE] mb-1 tracking-widest">INTER</div>
        <div className="text-[8px] font-bold text-[#7B8794] mb-4 tracking-widest">AGENTCY</div>

        <div className="flex flex-col gap-0.5 flex-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md transition-all duration-300 cursor-default ${
                views[activeView] === item.label
                  ? "bg-[#7B8794]/15 text-[#C0C7CE]"
                  : "text-[#5a5a6a] hover:text-[#7B8794]"
              }`}
            >
              <span className="text-[9px]">{item.icon}</span>
              <span className="text-[9px]">{item.label}</span>
            </div>
          ))}
        </div>

        {/* User section */}
        <div className="mt-auto pt-3 border-t border-[#1a1a1e]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#4A5568] to-[#9AAAB8] flex items-center justify-center text-[6px] font-bold">JR</div>
            <div>
              <div className="text-[8px] font-semibold text-white">James Reed</div>
              <div className="text-[6px] text-[#5a5a6a]">Licensed Agent</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-hidden relative">
        {/* Top bar */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-[#1a1a1e]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-[#131419] border border-[#1a1a1e] rounded-md px-2 py-1 w-[140px]">
              <svg className="w-2.5 h-2.5 text-[#5a5a6a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              <span className="text-[8px] text-[#5a5a6a]">Search...</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#131419] border border-[#1a1a1e] flex items-center justify-center text-[9px] text-[#5a5a6a]">🔔</div>
            <div className="w-5 h-5 rounded bg-[#131419] border border-[#1a1a1e] flex items-center justify-center text-[9px] text-[#5a5a6a]">⚙</div>
          </div>
        </div>

        {/* View content */}
        <div className="h-full">
          {activeView === 0 && <DashboardView animStep={animStep} />}
          {activeView === 1 && <PlayersView animStep={animStep} />}
          {activeView === 2 && <DealsView animStep={animStep} />}
        </div>
      </div>
    </div>
  );
}
