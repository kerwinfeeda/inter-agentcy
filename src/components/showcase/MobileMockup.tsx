"use client";

import { useState, useEffect } from "react";

const agents = [
  { name: "Aaron Briggs", reg: "FA2847", country: "🇬🇧" },
  { name: "Adama Touré", reg: "FA1923", country: "🇫🇷" },
  { name: "Benson Okafor", reg: "FA3312", country: "🇳🇬" },
  { name: "Carlos Mendes", reg: "FA0871", country: "🇵🇹" },
  { name: "David Okoro", reg: "FA2201", country: "🇬🇧" },
  { name: "Elena Kowalski", reg: "FA1547", country: "🇩🇪" },
  { name: "Felipe Rojas", reg: "FA4102", country: "🇪🇸" },
  { name: "George Asante", reg: "FA0654", country: "🇬🇭" },
  { name: "Hassan El-Amin", reg: "FA3890", country: "🇪🇬" },
  { name: "Isaac Mensah", reg: "FA2745", country: "🇬🇧" },
  { name: "James O'Brien", reg: "FA1183", country: "🇮🇪" },
  { name: "Kofi Asamoah", reg: "FA0392", country: "🇬🇭" },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function MobileMockup() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollY((prev) => {
        if (prev >= 180) return 0;
        return prev + 0.5;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Group agents by first letter
  const grouped: Record<string, typeof agents> = {};
  agents.forEach((a) => {
    const letter = a.name[0];
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(a);
  });

  return (
    <div className="h-full w-full bg-[#0b0b0d] text-white flex flex-col">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-8 pb-2">
        <span className="text-[9px] text-[#5a5a6a] font-medium">9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-3 h-1.5 rounded-sm bg-[#5a5a6a]" />
          <div className="w-3 h-1.5 rounded-sm bg-[#5a5a6a]" />
          <div className="w-4 h-2 rounded-sm border border-[#5a5a6a] relative">
            <div className="absolute inset-0.5 rounded-[1px] bg-[#9AAAB8]" style={{ width: "60%" }} />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="px-4 pb-2">
        <div className="text-[13px] font-bold text-white mb-2">Agent Directory</div>
        <div className="text-[10px] text-[#9AAAB8] mb-2">2,416 verified agents</div>
        {/* Search bar */}
        <div className="flex items-center gap-2 bg-[#131419] border border-[#1a1a1e] rounded-lg px-2.5 py-1.5 mb-2">
          <svg className="w-3 h-3 text-[#5a5a6a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-[9px] text-[#5a5a6a]">Search agents...</span>
        </div>
      </div>

      {/* Alphabet sidebar + agent list */}
      <div className="flex flex-1 min-h-0 relative">
        {/* A-Z rail */}
        <div className="flex flex-col items-center justify-start gap-[1px] py-1 px-1 text-[5px] text-[#5a5a6a] font-medium shrink-0">
          {alphabet.map((l) => (
            <span key={l} className={grouped[l] ? "text-[#9AAAB8]" : ""}>{l}</span>
          ))}
        </div>

        {/* Scrolling agent list */}
        <div className="flex-1 overflow-hidden relative">
          <div
            className="transition-transform duration-300 ease-linear"
            style={{ transform: `translateY(-${scrollY}px)` }}
          >
            {Object.entries(grouped).map(([letter, list]) => (
              <div key={letter}>
                <div className="sticky top-0 px-2 py-1 bg-[#0b0b0d]/90 backdrop-blur-sm">
                  <span className="text-[9px] font-bold text-[#9AAAB8]">{letter}</span>
                  <span className="text-[7px] text-[#5a5a6a] ml-1">({list.length})</span>
                </div>
                {list.map((agent) => (
                  <div key={agent.reg} className="flex items-center gap-2 px-2 py-1.5 border-b border-[#1a1a1e]/50">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4A5568] to-[#7B8794] flex items-center justify-center text-[7px] font-bold shrink-0">
                      {agent.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[9px] font-semibold text-white truncate">{agent.name}</div>
                      <div className="text-[7px] text-[#5a5a6a]">{agent.reg} · {agent.country}</div>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9AAAB8] shrink-0" />
                  </div>
                ))}
              </div>
            ))}
            {/* Repeat for seamless scroll */}
            {Object.entries(grouped).map(([letter, list]) => (
              <div key={`${letter}-2`}>
                <div className="px-2 py-1 bg-[#0b0b0d]/90">
                  <span className="text-[9px] font-bold text-[#9AAAB8]">{letter}</span>
                  <span className="text-[7px] text-[#5a5a6a] ml-1">({list.length})</span>
                </div>
                {list.map((agent) => (
                  <div key={`${agent.reg}-2`} className="flex items-center gap-2 px-2 py-1.5 border-b border-[#1a1a1e]/50">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4A5568] to-[#7B8794] flex items-center justify-center text-[7px] font-bold shrink-0">
                      {agent.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[9px] font-semibold text-white truncate">{agent.name}</div>
                      <div className="text-[7px] text-[#5a5a6a]">{agent.reg} · {agent.country}</div>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9AAAB8] shrink-0" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav bar */}
      <div className="flex items-center justify-around py-2 border-t border-[#1a1a1e] bg-[#0b0b0d] shrink-0">
        {[
          { label: "Home", active: false },
          { label: "Directory", active: true },
          { label: "Deals", active: false },
          { label: "Profile", active: false },
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-0.5">
            <div className={`w-4 h-4 rounded-md ${tab.active ? "bg-[#9AAAB8]" : "bg-[#1a1a1e]"}`} />
            <span className={`text-[6px] ${tab.active ? "text-[#C0C7CE] font-semibold" : "text-[#5a5a6a]"}`}>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
