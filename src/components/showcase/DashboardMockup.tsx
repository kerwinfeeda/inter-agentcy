"use client";

const navItems = ["Dashboard", "Players", "Deals", "Network", "Compliance"];

const stats = [
  { label: "Active Players", value: "24" },
  { label: "Pending Deals", value: "7" },
  { label: "Network", value: "1,250+" },
  { label: "Compliance", value: "100%" },
];

const deals = [
  { player: "M. Santos", from: "SC Braga", to: "West Ham", status: "Negotiating", value: "€8.5M" },
  { player: "K. Diallo", from: "RC Lens", to: "Napoli", status: "Medical", value: "€12M" },
  { player: "T. Okafor", from: "Salzburg", to: "AC Milan", status: "Completed", value: "€15M" },
];

export default function DashboardMockup() {
  return (
    <div className="flex h-full w-full bg-[#0b0b0d] text-white text-[10px]">
      {/* Sidebar */}
      <div className="w-[22%] bg-[#0d0d0f] border-r border-[#1a1a1e] p-3 flex flex-col gap-1">
        <div className="text-[9px] font-bold text-[#C0C7CE] mb-3 tracking-wide">INTER AGENTCY</div>
        {navItems.map((item) => (
          <div
            key={item}
            className={`px-2 py-1.5 rounded-md ${item === "Dashboard" ? "bg-[#7B8794]/15 text-[#C0C7CE]" : "text-[#5a5a6a]"}`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main */}
      <div className="flex-1 p-3 overflow-hidden">
        <div className="text-[11px] font-semibold text-white mb-3">Dashboard</div>

        {/* Stat cards */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#131419] border border-[#1a1a1e] rounded-lg p-2">
              <div className="text-[8px] text-[#5a5a6a] mb-0.5">{s.label}</div>
              <div className="text-sm font-bold text-white">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Recent deals table */}
        <div className="bg-[#131419] border border-[#1a1a1e] rounded-lg overflow-hidden">
          <div className="px-2 py-1.5 border-b border-[#1a1a1e] text-[8px] text-[#5a5a6a] font-semibold">
            Recent Deals
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-[7px] text-[#5a5a6a] uppercase">
                <th className="text-left px-2 py-1">Player</th>
                <th className="text-left px-2 py-1">From</th>
                <th className="text-left px-2 py-1">To</th>
                <th className="text-left px-2 py-1">Status</th>
                <th className="text-right px-2 py-1">Value</th>
              </tr>
            </thead>
            <tbody>
              {deals.map((d) => (
                <tr key={d.player} className="border-t border-[#1a1a1e]">
                  <td className="px-2 py-1.5 text-white font-medium">{d.player}</td>
                  <td className="px-2 py-1.5 text-[#5a5a6a]">{d.from}</td>
                  <td className="px-2 py-1.5 text-[#5a5a6a]">{d.to}</td>
                  <td className="px-2 py-1.5">
                    <span className={`px-1.5 py-0.5 rounded text-[7px] ${
                      d.status === "Completed" ? "bg-[#9AAAB8]/20 text-[#C0C7CE]" :
                      d.status === "Medical" ? "bg-[#7B8794]/20 text-[#9AAAB8]" :
                      "bg-[#4A5568]/20 text-[#7B8794]"
                    }`}>{d.status}</span>
                  </td>
                  <td className="px-2 py-1.5 text-right text-white">{d.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
