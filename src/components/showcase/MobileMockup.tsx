"use client";

export default function MobileMockup() {
  return (
    <div className="h-full w-full bg-[#0b0b0d] text-white p-4 pt-10 text-[11px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-[9px] text-[#5a5a6a]">Good morning</div>
          <div className="text-sm font-bold text-white">Agent Portal</div>
        </div>
        <div className="w-7 h-7 rounded-full bg-[#7B8794]/20 flex items-center justify-center">
          <span className="text-[9px] text-[#C0C7CE]">🔔</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {[
          { label: "Players", value: "24" },
          { label: "Deals", value: "7" },
          { label: "Network", value: "1.2K" },
          { label: "Compliance", value: "100%" },
        ].map((s) => (
          <div key={s.label} className="bg-[#131419] border border-[#1a1a1e] rounded-xl p-3">
            <div className="text-[8px] text-[#5a5a6a] mb-0.5">{s.label}</div>
            <div className="text-base font-bold text-white">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Player Card */}
      <div className="bg-[#131419] border border-[#1a1a1e] rounded-xl p-3 mb-3">
        <div className="text-[8px] text-[#5a5a6a] mb-2 font-semibold uppercase">Featured Player</div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4A5568] to-[#7B8794] flex items-center justify-center text-[10px] font-bold">MS</div>
          <div>
            <div className="text-[11px] font-semibold text-white">Marcus Santos</div>
            <div className="text-[9px] text-[#5a5a6a]">SC Braga · Forward · 23</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-[#131419] border border-[#1a1a1e] rounded-xl p-3">
        <div className="text-[8px] text-[#5a5a6a] mb-2 font-semibold uppercase">Activity</div>
        {[
          "New offer for K. Diallo — €12M",
          "M. Santos medical scheduled",
          "Contract review pending",
        ].map((a) => (
          <div key={a} className="py-1.5 border-b border-[#1a1a1e] last:border-0 text-[10px] text-[#9AAAB8]">
            {a}
          </div>
        ))}
      </div>
    </div>
  );
}
