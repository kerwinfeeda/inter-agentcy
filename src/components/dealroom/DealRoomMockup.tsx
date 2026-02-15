"use client";

import { useState, useEffect } from "react";

const deals = [
  { name: "M. Fernandez → AC Milan", status: "Negotiating", color: "#9AAAB8" },
  { name: "K. Osei → Wolves", status: "New Offer", color: "#7B8794" },
  { name: "L. Costa → Porto", status: "Agreed", color: "#5A6B7A" },
  { name: "R. Diallo → Lyon", status: "Due Diligence", color: "#4A5568" },
];

const phases = ["New Offer", "Negotiating", "Agreed"] as const;

const milestones = [
  { label: "Offer Sent", done: true },
  { label: "Counter-offer", done: true },
  { label: "Terms Agreed", done: false },
  { label: "Medical", done: false },
  { label: "Contract Signed", done: false },
];

const messages = [
  { from: "Club Rep", text: "We can go to €8.5M + add-ons.", time: "10:32" },
  { from: "You", text: "Client needs €9M base minimum.", time: "10:45" },
  { from: "Jose AI", text: "Market comp suggests €8.8M is fair.", time: "10:46" },
];

export default function DealRoomMockup() {
  const [phase, setPhase] = useState(0);
  const [animStep, setAnimStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setAnimStep(1), 300);
    const t2 = setTimeout(() => setAnimStep(2), 600);
    const t3 = setTimeout(() => setAnimStep(3), 900);
    const t4 = setTimeout(() => setAnimStep(4), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((p) => (p + 1) % phases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentPhase = phases[phase];

  return (
    <div className="w-full h-full bg-[#0d0d0f] text-white flex text-[9px] overflow-hidden">
      {/* Left sidebar — deal list */}
      <div
        className="w-[22%] border-r border-[#1a1a1e] bg-[#101014] p-2 flex flex-col gap-1 transition-all duration-500"
        style={{ opacity: animStep >= 1 ? 1 : 0, transform: animStep >= 1 ? "translateX(0)" : "translateX(-12px)" }}
      >
        <div className="text-[8px] font-semibold text-[#5a5a6a] uppercase tracking-wider mb-1">Active Deals</div>
        {deals.map((d, i) => (
          <div
            key={d.name}
            className={`rounded-md p-1.5 border transition-colors cursor-pointer ${
              i === 0 ? "bg-[#131419] border-[#9AAAB8]/30" : "border-transparent hover:bg-[#131419]"
            }`}
          >
            <div className="text-[8px] font-medium text-white truncate">{d.name}</div>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: d.color }} />
              <span className="text-[7px] text-[#5a5a6a]">{d.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main area */}
      <div
        className="flex-1 p-2 flex flex-col transition-all duration-500"
        style={{ opacity: animStep >= 2 ? 1 : 0 }}
      >
        {/* Deal header */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-[10px] font-semibold">M. Fernandez → AC Milan</div>
            <div className="text-[7px] text-[#5a5a6a]">Transfer Fee Negotiation</div>
          </div>
          <div
            className="px-2 py-0.5 rounded-full text-[7px] font-medium transition-all duration-700"
            style={{
              backgroundColor: currentPhase === "Agreed" ? "rgba(90,107,122,0.3)" : "rgba(154,170,184,0.15)",
              color: currentPhase === "Agreed" ? "#C0C7CE" : "#9AAAB8",
            }}
          >
            {currentPhase}
          </div>
        </div>

        {/* Offer cards */}
        <div className="grid grid-cols-2 gap-1.5 mb-2">
          <div className="bg-[#131419] border border-[#1a1a1e] rounded-md p-1.5">
            <div className="text-[7px] text-[#5a5a6a] mb-0.5">Current Offer</div>
            <div className="text-[11px] font-bold text-white">€8.5M</div>
            <div className="text-[7px] text-[#7B8794]">+ €1.5M add-ons</div>
          </div>
          <div className="bg-[#131419] border border-[#1a1a1e] rounded-md p-1.5">
            <div className="text-[7px] text-[#5a5a6a] mb-0.5">Asking Price</div>
            <div className="text-[11px] font-bold text-white">€9.0M</div>
            <div className="text-[7px] text-[#7B8794]">+ €1M add-ons</div>
          </div>
        </div>

        {/* Messages */}
        <div
          className="flex-1 bg-[#131419] border border-[#1a1a1e] rounded-md p-1.5 flex flex-col gap-1 overflow-hidden transition-all duration-500"
          style={{ opacity: animStep >= 3 ? 1 : 0 }}
        >
          <div className="text-[7px] text-[#5a5a6a] font-semibold uppercase tracking-wider mb-0.5">Messages</div>
          {messages.map((m, i) => (
            <div key={i} className="flex gap-1.5">
              <div className="text-[7px] text-[#9AAAB8] font-medium w-10 shrink-0">{m.from}</div>
              <div className="text-[7px] text-[#C0C7CE] flex-1">{m.text}</div>
              <div className="text-[6px] text-[#4A5568] shrink-0">{m.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel — timeline */}
      <div
        className="w-[20%] border-l border-[#1a1a1e] bg-[#101014] p-2 transition-all duration-500"
        style={{ opacity: animStep >= 4 ? 1 : 0, transform: animStep >= 4 ? "translateX(0)" : "translateX(12px)" }}
      >
        <div className="text-[8px] font-semibold text-[#5a5a6a] uppercase tracking-wider mb-2">Timeline</div>
        <div className="flex flex-col gap-2">
          {milestones.map((m, i) => (
            <div key={m.label} className="flex items-start gap-1.5">
              <div className="flex flex-col items-center">
                <div
                  className="w-2 h-2 rounded-full border"
                  style={{
                    backgroundColor: m.done ? "#9AAAB8" : "transparent",
                    borderColor: m.done ? "#9AAAB8" : "#4A5568",
                  }}
                />
                {i < milestones.length - 1 && (
                  <div className="w-px h-3 mt-0.5" style={{ backgroundColor: m.done ? "#5A6B7A" : "#1a1a1e" }} />
                )}
              </div>
              <span className={`text-[7px] ${m.done ? "text-[#C0C7CE]" : "text-[#4A5568]"}`}>{m.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-3 bg-[#131419] border border-[#1a1a1e] rounded-md p-1.5">
          <div className="text-[7px] text-[#5a5a6a] mb-0.5">Compliance</div>
          <div className="text-[8px] font-medium text-[#9AAAB8]">✓ FFAR Compliant</div>
          <div className="text-[7px] text-[#5a5a6a] mt-0.5">Agent fee: 4.8%</div>
        </div>
      </div>
    </div>
  );
}
