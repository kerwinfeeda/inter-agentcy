"use client";

import { useState, useMemo } from "react";
import { Users } from "lucide-react";
import agents from "@/data/agents.json";
import AgentCard from "@/components/directory/AgentCard";
import DirectorySearch from "@/components/directory/DirectorySearch";

export default function AgentsPage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return agents.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.country.toLowerCase().includes(q) ||
        a.tagline.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Users className="w-6 h-6 text-accent-steel" />
          <h1 className="text-3xl font-bold text-white">Football Agents</h1>
        </div>
        <p className="text-foreground-muted mb-8">{agents.length} verified football agents worldwide</p>

        <div className="mb-8">
          <DirectorySearch
            placeholder="Search agents by name, country..."
            value={search}
            onChange={setSearch}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((agent) => (
            <AgentCard key={agent.slug} {...agent} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-foreground-dim">
            No agents found matching &quot;{search}&quot;
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-12 card p-6 text-center">
          <p className="text-sm text-foreground-dim">
            Agency information sourced from public records. Inter Agentcy verifies all listings.
          </p>
        </div>
      </div>
    </main>
  );
}
