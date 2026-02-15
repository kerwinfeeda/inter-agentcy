"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import PhoneFrame from "@/components/devices/PhoneFrame";

// ─── Screen 1: Agent Directory ───
function DirectoryScreen({ animStep }: { animStep: number }) {
  const agents = [
    { name: "Aaron Briggs", reg: "FA2847", country: "🇬🇧" },
    { name: "Adama Touré", reg: "FA1923", country: "🇫🇷" },
    { name: "Benson Okafor", reg: "FA3312", country: "🇳🇬" },
    { name: "Carlos Mendes", reg: "FA0871", country: "🇵🇹" },
    { name: "David Okoro", reg: "FA2201", country: "🇬🇧" },
    { name: "Elena Kowalski", reg: "FA1547", country: "🇩🇪" },
    { name: "Felipe Rojas", reg: "FA4102", country: "🇪🇸" },
    { name: "George Asante", reg: "FA0654", country: "🇬🇭" },
  ];

  return (
    <div className="h-full w-full bg-[#0b0b0d] text-white flex flex-col">
      <div className="px-4 pt-10 pb-2">
        <div className="text-[13px] font-bold text-white mb-1">Agent Directory</div>
        <div className="text-[9px] text-[#9AAAB8] mb-2">2,416 verified agents</div>
        <div className="flex items-center gap-2 bg-[#131419] border border-[#1a1a1e] rounded-lg px-2.5 py-1.5 mb-2">
          <svg className="w-3 h-3 text-[#5a5a6a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-[9px] text-[#5a5a6a]">Search agents...</span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden px-2">
        {agents.map((agent, i) => (
          <div
            key={agent.reg}
            className="flex items-center gap-2 px-2 py-2 border-b border-[#1a1a1e]/50 transition-all duration-500"
            style={{
              opacity: animStep > i ? 1 : 0,
              transform: animStep > i ? "translateX(0)" : "translateX(12px)",
            }}
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4A5568] to-[#7B8794] flex items-center justify-center text-[7px] font-bold shrink-0">
              {agent.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-semibold text-white truncate">{agent.name}</div>
              <div className="text-[7px] text-[#5a5a6a]">{agent.reg} · {agent.country}</div>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#9AAAB8] shrink-0" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-around py-2 border-t border-[#1a1a1e] shrink-0">
        {["Home", "Directory", "Deals", "Profile"].map((tab) => (
          <div key={tab} className="flex flex-col items-center gap-0.5">
            <div className={`w-4 h-4 rounded-md ${tab === "Directory" ? "bg-[#9AAAB8]" : "bg-[#1a1a1e]"}`} />
            <span className={`text-[6px] ${tab === "Directory" ? "text-[#C0C7CE] font-semibold" : "text-[#5a5a6a]"}`}>{tab}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Screen 2: Deal Alerts ───
function DealScreen({ animStep }: { animStep: number }) {
  const deals = [
    { player: "K. Diallo", type: "New Offer", detail: "Napoli — €12M", time: "Just now", urgent: true },
    { player: "M. Santos", type: "Medical Passed", detail: "West Ham — €8.5M", time: "2h ago", urgent: false },
    { player: "T. Okafor", type: "Counter Offer", detail: "AC Milan — €15M → €13.5M", time: "4h ago", urgent: true },
    { player: "L. Petrović", type: "Contract Sent", detail: "Brighton — €6M", time: "Yesterday", urgent: false },
  ];

  return (
    <div className="h-full w-full bg-[#0b0b0d] text-white flex flex-col">
      <div className="px-4 pt-10 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[13px] font-bold text-white">Deal Room</div>
          <div className="w-6 h-6 rounded-full bg-[#9AAAB8]/20 flex items-center justify-center">
            <span className="text-[8px] text-[#C0C7CE] font-bold">4</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-[#131419] border border-[#1a1a1e] rounded-lg p-2 text-center">
            <div className="text-[12px] font-bold text-white">€41.5M</div>
            <div className="text-[7px] text-[#5a5a6a]">Pipeline</div>
          </div>
          <div className="bg-[#131419] border border-[#1a1a1e] rounded-lg p-2 text-center">
            <div className="text-[12px] font-bold text-white">€1.24M</div>
            <div className="text-[7px] text-[#5a5a6a]">Commission</div>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-hidden px-3">
        <div className="text-[8px] text-[#5a5a6a] font-semibold uppercase mb-2">Active Deals</div>
        {deals.map((deal, i) => (
          <div
            key={deal.player}
            className="bg-[#131419] border border-[#1a1a1e] rounded-xl p-3 mb-2 transition-all duration-500"
            style={{
              opacity: animStep > i + 1 ? 1 : 0,
              transform: animStep > i + 1 ? "translateY(0)" : "translateY(10px)",
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-white">{deal.player}</span>
              {deal.urgent && <span className="text-[6px] px-1.5 py-0.5 rounded-full bg-[#C0C7CE]/20 text-[#C0C7CE] font-semibold">URGENT</span>}
            </div>
            <div className="text-[9px] text-[#9AAAB8] font-medium">{deal.type}</div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-[8px] text-[#5a5a6a]">{deal.detail}</span>
              <span className="text-[7px] text-[#5a5a6a]">{deal.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-around py-2 border-t border-[#1a1a1e] shrink-0">
        {["Home", "Directory", "Deals", "Profile"].map((tab) => (
          <div key={tab} className="flex flex-col items-center gap-0.5">
            <div className={`w-4 h-4 rounded-md ${tab === "Deals" ? "bg-[#9AAAB8]" : "bg-[#1a1a1e]"}`} />
            <span className={`text-[6px] ${tab === "Deals" ? "text-[#C0C7CE] font-semibold" : "text-[#5a5a6a]"}`}>{tab}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Screen 3: Jose AI ───
function JoseAIScreen({ animStep }: { animStep: number }) {
  const messages = [
    { from: "user", text: "Find left-backs under 23 from West Africa" },
    { from: "jose", text: "Found 12 matches. Top 3:" },
    { from: "jose", text: "1. Amadou Sidibé — 21, LB, AS Kaloum → Ligue 2. Pace 88, crossing 82." },
    { from: "jose", text: "2. Kwame Mensah — 22, LB, Asante Kotoko → GPL. Versatile, can play LM." },
    { from: "jose", text: "3. Issouf Traoré — 20, LB, Stade Malien → free agent. High upside." },
  ];

  return (
    <div className="h-full w-full bg-[#0b0b0d] text-white flex flex-col">
      <div className="px-4 pt-10 pb-2 border-b border-[#1a1a1e]">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#7B8794] to-[#C0C7CE] flex items-center justify-center text-[8px] font-bold">JA</div>
          <div>
            <div className="text-[11px] font-bold text-white">Jose AI</div>
            <div className="text-[7px] text-[#9AAAB8]">Your football copilot</div>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-hidden px-3 py-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 flex ${msg.from === "user" ? "justify-end" : "justify-start"} transition-all duration-500`}
            style={{
              opacity: animStep > i + 1 ? 1 : 0,
              transform: animStep > i + 1 ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <div className={`max-w-[85%] rounded-2xl px-3 py-2 ${
              msg.from === "user"
                ? "bg-[#7B8794]/30 text-white"
                : "bg-[#131419] border border-[#1a1a1e] text-[#C0C7CE]"
            }`}>
              <p className="text-[9px] leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="px-3 pb-3">
        <div className="flex items-center gap-2 bg-[#131419] border border-[#1a1a1e] rounded-full px-3 py-2">
          <span className="text-[8px] text-[#5a5a6a] flex-1">Ask Jose AI anything...</span>
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#7B8794] to-[#9AAAB8] flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around py-2 border-t border-[#1a1a1e] shrink-0">
        {["Home", "Directory", "Jose AI", "Profile"].map((tab) => (
          <div key={tab} className="flex flex-col items-center gap-0.5">
            <div className={`w-4 h-4 rounded-md ${tab === "Jose AI" ? "bg-[#9AAAB8]" : "bg-[#1a1a1e]"}`} />
            <span className={`text-[6px] ${tab === "Jose AI" ? "text-[#C0C7CE] font-semibold" : "text-[#5a5a6a]"}`}>{tab}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Screen 4: Scouting ───
function ScoutingScreen({ animStep }: { animStep: number }) {
  return (
    <div className="h-full w-full bg-[#0b0b0d] text-white flex flex-col">
      <div className="px-4 pt-10 pb-2">
        <div className="text-[13px] font-bold text-white mb-1">Live Scouting</div>
        <div className="text-[9px] text-[#9AAAB8]">SC Braga vs Sporting CP</div>
      </div>
      <div className="flex-1 overflow-hidden px-3">
        <div
          className="bg-[#131419] border border-[#1a1a1e] rounded-xl p-3 mb-2 transition-all duration-500"
          style={{ opacity: animStep > 1 ? 1 : 0, transform: animStep > 1 ? "translateY(0)" : "translateY(10px)" }}
        >
          <div className="text-[8px] text-[#5a5a6a] font-semibold uppercase mb-2">Tagged Player</div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4A5568] to-[#9AAAB8] flex items-center justify-center text-[8px] font-bold">MS</div>
            <div>
              <div className="text-[10px] font-bold">Marcus Santos</div>
              <div className="text-[7px] text-[#5a5a6a]">#10 · Forward · SC Braga</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {[{ l: "Pace", v: "88" }, { l: "Dribble", v: "85" }, { l: "Finish", v: "82" }].map(s => (
              <div key={s.l} className="bg-[#0b0b0d] rounded p-1.5 text-center">
                <div className="text-[9px] font-bold text-white">{s.v}</div>
                <div className="text-[6px] text-[#5a5a6a]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="bg-[#131419] border border-[#1a1a1e] rounded-xl p-3 mb-2 transition-all duration-500"
          style={{ opacity: animStep > 3 ? 1 : 0, transform: animStep > 3 ? "translateY(0)" : "translateY(10px)" }}
        >
          <div className="text-[8px] text-[#5a5a6a] font-semibold uppercase mb-1">Match Notes</div>
          <div className="text-[9px] text-[#9AAAB8] leading-relaxed">
            Strong on the ball. Dropped deep to link play 3x in first half. Good pressing trigger — won possession twice in final third.
          </div>
        </div>

        <div
          className="bg-[#131419] border border-[#1a1a1e] rounded-xl p-3 transition-all duration-500"
          style={{ opacity: animStep > 5 ? 1 : 0, transform: animStep > 5 ? "translateY(0)" : "translateY(10px)" }}
        >
          <div className="text-[8px] text-[#5a5a6a] font-semibold uppercase mb-1">Quick Actions</div>
          <div className="flex gap-2">
            {["📹 Clip", "📝 Report", "📤 Share"].map(a => (
              <div key={a} className="flex-1 bg-[#0b0b0d] rounded-lg py-1.5 text-center text-[8px] text-[#9AAAB8] font-medium">{a}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around py-2 border-t border-[#1a1a1e] shrink-0">
        {["Home", "Scouting", "Deals", "Profile"].map((tab) => (
          <div key={tab} className="flex flex-col items-center gap-0.5">
            <div className={`w-4 h-4 rounded-md ${tab === "Scouting" ? "bg-[#9AAAB8]" : "bg-[#1a1a1e]"}`} />
            <span className={`text-[6px] ${tab === "Scouting" ? "text-[#C0C7CE] font-semibold" : "text-[#5a5a6a]"}`}>{tab}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── View definitions ───
const views = [
  {
    label: "📱 Agent Directory",
    title: "Agent Directory",
    subtitle: "In Your Pocket.",
    description: "Browse 2,400+ verified football agents from anywhere. Search by name, filter by country, navigate A-Z.",
    features: [
      "Search and filter agents on the go",
      "A-Z alphabetical navigation",
      "Verified credentials at a glance",
      "Tap to view full agent profiles",
    ],
  },
  {
    label: "📋 Deal Room",
    title: "Deal Alerts",
    subtitle: "In Real Time.",
    description: "Never miss an offer. Get instant notifications on new bids, counter-offers, and deal milestones — straight to your phone.",
    features: [
      "Real-time deal notifications",
      "Pipeline value at a glance",
      "Commission tracking per deal",
      "One-tap responses to offers",
    ],
  },
  {
    label: "🤖 Jose AI",
    title: "Jose AI",
    subtitle: "Your Copilot.",
    description: "Ask Jose anything — find players, analyse deals, check compliance, get market intelligence. AI built for football.",
    features: [
      "Natural language player search",
      "Deal analysis and comparisons",
      "Compliance checks on demand",
      "Market intelligence briefs",
    ],
  },
  {
    label: "🔍 Live Scouting",
    title: "Live Scouting",
    subtitle: "At The Match.",
    description: "Scout at matches with purpose-built mobile tools. Tag players, record notes, capture clips, and share reports instantly.",
    features: [
      "Tag and rate players in real time",
      "Quick match notes with timestamps",
      "Video clip capture and tagging",
      "One-tap report sharing to agents",
    ],
  },
];

const screens = [DirectoryScreen, DealScreen, JoseAIScreen, ScoutingScreen];

// ─── Main Component ───
export default function MobileShowcase() {
  const [activeView, setActiveView] = useState(0);
  const [animStep, setAnimStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-cycle views
  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setActiveView((prev) => (prev + 1) % views.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [mounted]);

  // Stagger animations per view
  useEffect(() => {
    if (!mounted) return;
    setAnimStep(0);
    const steps = [200, 400, 700, 1000, 1300, 1600, 1900];
    const timers = steps.map((ms, i) =>
      setTimeout(() => setAnimStep(i + 1), ms)
    );
    return () => timers.forEach(clearTimeout);
  }, [activeView, mounted]);

  const view = views[activeView];
  const Screen = screens[activeView];

  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Phone */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                <div className="w-[300px] h-[400px] bg-[#9AAAB8]/5 rounded-full blur-3xl" />
              </div>
              <PhoneFrame>
                <Screen animStep={animStep} />
              </PhoneFrame>
            </div>
          </div>

          {/* Text */}
          <div>
            {/* View selector pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {views.map((v, i) => (
                <button
                  key={v.label}
                  onClick={() => setActiveView(i)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    i === activeView
                      ? "bg-[#9AAAB8]/20 text-[#C0C7CE] border border-[#9AAAB8]/30"
                      : "bg-[#131419] text-[#5a5a6a] border border-transparent hover:text-[#7B8794]"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-all duration-500">
              {view.title}<br />
              <span className="gradient-text">{view.subtitle}</span>
            </h2>
            <p className="text-foreground-muted mb-6 leading-relaxed transition-all duration-500">
              {view.description}
            </p>
            <div className="space-y-3 mb-8">
              {view.features.map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-3 transition-all duration-500"
                  style={{
                    opacity: animStep > i + 1 ? 1 : 0,
                    transform: animStep > i + 1 ? "translateX(0)" : "translateX(10px)",
                  }}
                >
                  <CheckCircle2 className="w-5 h-5 text-[#9AAAB8] mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <Link
              href="/inter-os"
              className="inline-flex items-center gap-2 px-6 py-3 gradient-steel-btn text-white font-semibold rounded-xl transition-all text-sm"
            >
              Explore Inter OS
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
