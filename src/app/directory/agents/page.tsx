"use client";

import { useState, useMemo } from "react";
import { Users, Shield, Baby, Search } from "lucide-react";
import agents from "@/data/agents.json";
import AgentCard from "@/components/directory/AgentCard";
import DirectorySearch from "@/components/directory/DirectorySearch";

type Agent = (typeof agents)[number];

type FilterMode = "all" | "fa" | "minors";

export default function AgentsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterMode>("all");

  const faCount = useMemo(
    () => agents.filter((a: Agent) => "registrationNumber" in a && a.registrationNumber).length,
    []
  );
  const minorsCount = useMemo(
    () => agents.filter((a: Agent) => "authorisedMinors" in a && (a as any).authorisedMinors).length,
    []
  );

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return (agents as Agent[]).filter((a) => {
      // Search filter
      const matchesSearch =
        !q ||
        a.name.toLowerCase().includes(q) ||
        (a.country && a.country.toLowerCase().includes(q)) ||
        ("tagline" in a && (a as any).tagline?.toLowerCase().includes(q)) ||
        ("registrationNumber" in a && (a as any).registrationNumber?.toLowerCase().includes(q));

      // Category filter
      if (filter === "fa") return matchesSearch && "registrationNumber" in a && (a as any).registrationNumber;
      if (filter === "minors") return matchesSearch && "authorisedMinors" in a && (a as any).authorisedMinors;
      return matchesSearch;
    });
  }, [search, filter]);

  const filterButtons: { key: FilterMode; label: string; icon: React.ReactNode; count: number }[] = [
    { key: "all", label: "All Agents", icon: <Users className="w-4 h-4" />, count: agents.length },
    { key: "fa", label: "FA Registered", icon: <Shield className="w-4 h-4" />, count: faCount },
    { key: "minors", label: "Authorised for Minors", icon: <Baby className="w-4 h-4" />, count: minorsCount },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Users className="w-6 h-6 text-accent-steel" />
          <h1 className="text-3xl font-bold text-white">Football Agents</h1>
        </div>
        <p className="text-foreground-muted mb-8">
          {agents.length} verified football agents · {faCount} FA registered · {minorsCount} authorised for minors
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filterButtons.map((fb) => (
            <button
              key={fb.key}
              onClick={() => setFilter(fb.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === fb.key
                  ? "bg-[#4A9EDB]/20 text-[#4A9EDB] border border-[#4A9EDB]/30"
                  : "bg-[#131419] text-foreground-muted border border-transparent hover:border-[#7B8794]/30"
              }`}
            >
              {fb.icon}
              {fb.label}
              <span className="text-xs opacity-70">({fb.count})</span>
            </button>
          ))}
        </div>

        <div className="mb-8">
          <DirectorySearch
            placeholder="Search by name, country, or registration number..."
            value={search}
            onChange={setSearch}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((agent) => (
            <AgentCard key={agent.slug} {...(agent as any)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-foreground-dim">
            No agents found matching &quot;{search}&quot;
          </div>
        )}

        <div className="mt-12 card p-6 text-center">
          <p className="text-sm text-foreground-dim">
            Agent data sourced from The FA Registered Football Agents List and public records.
            Inter Agentcy verifies all listings.
          </p>
        </div>
      </div>
    </main>
  );
}
