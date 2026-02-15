"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import { Users, Shield, Baby } from "lucide-react";
import agents from "@/data/agents.json";
import AgentCard from "@/components/directory/AgentCard";
import DirectorySearch from "@/components/directory/DirectorySearch";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Agent = (typeof agents)[number] & Record<string, any>;
type FilterMode = "all" | "fa" | "minors";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function AgentsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterMode>("all");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const faCount = useMemo(
    () => agents.filter((a: Agent) => "registrationNumber" in a && a.registrationNumber).length,
    []
  );
  const minorsCount = useMemo(
    () => agents.filter((a: Agent) => "authorisedMinors" in a && a.authorisedMinors).length,
    []
  );

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return (agents as Agent[]).filter((a) => {
      const matchesSearch =
        !q ||
        a.name.toLowerCase().includes(q) ||
        (a.country && a.country.toLowerCase().includes(q)) ||
        ("tagline" in a && a.tagline?.toLowerCase().includes(q)) ||
        ("registrationNumber" in a && a.registrationNumber?.toLowerCase().includes(q));

      if (filter === "fa") return matchesSearch && "registrationNumber" in a && a.registrationNumber;
      if (filter === "minors") return matchesSearch && "authorisedMinors" in a && a.authorisedMinors;
      return matchesSearch;
    });
  }, [search, filter]);

  // Group filtered agents by first letter
  const grouped = useMemo(() => {
    const groups: Record<string, Agent[]> = {};
    for (const agent of filtered) {
      const letter = agent.name.charAt(0).toUpperCase();
      const key = ALPHABET.includes(letter) ? letter : "#";
      if (!groups[key]) groups[key] = [];
      groups[key].push(agent);
    }
    return groups;
  }, [filtered]);

  // Letters that have agents
  const activeLetters = useMemo(() => new Set(Object.keys(grouped)), [grouped]);

  const scrollToLetter = useCallback((letter: string) => {
    setActiveLetter(letter);
    const el = sectionRefs.current[letter];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const sortedLetters = useMemo(() => {
    const letters = Object.keys(grouped).sort((a, b) => {
      if (a === "#") return 1;
      if (b === "#") return -1;
      return a.localeCompare(b);
    });
    return letters;
  }, [grouped]);

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
            onChange={(v) => { setSearch(v); setActiveLetter(null); }}
          />
        </div>

        {/* A-Z Navigation Bar */}
        <div className="sticky top-20 z-30 bg-background/80 backdrop-blur-md border-b border-border -mx-6 px-6 py-3 mb-8">
          <div className="flex flex-wrap justify-center gap-1">
            {ALPHABET.map((letter) => {
              const hasAgents = activeLetters.has(letter);
              const isActive = activeLetter === letter;
              return (
                <button
                  key={letter}
                  onClick={() => hasAgents && scrollToLetter(letter)}
                  disabled={!hasAgents}
                  className={`w-9 h-9 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#4A9EDB] text-white"
                      : hasAgents
                        ? "text-foreground hover:bg-[#4A9EDB]/20 hover:text-[#4A9EDB]"
                        : "text-foreground-dim/30 cursor-default"
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grouped Agent Listings */}
        {sortedLetters.map((letter) => (
          <div
            key={letter}
            ref={(el) => { sectionRefs.current[letter] = el; }}
            className="mb-10 scroll-mt-36"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-[#4A9EDB]">{letter}</span>
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-foreground-muted">{grouped[letter].length} agent{grouped[letter].length !== 1 ? "s" : ""}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {grouped[letter].map((agent) => (
                <AgentCard key={agent.slug} {...(agent as Agent)} />
              ))}
            </div>
          </div>
        ))}

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
