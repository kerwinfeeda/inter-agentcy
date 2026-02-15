"use client";

import { useState, useMemo } from "react";
import { Building2, ArrowUpDown } from "lucide-react";
import agencies from "@/data/agencies.json";
import AgencyCard from "@/components/directory/AgencyCard";
import DirectorySearch from "@/components/directory/DirectorySearch";

function parseValue(v: string): number {
  if (!v) return 0;
  const num = parseFloat(v.replace(/[€,]/g, ""));
  if (isNaN(num)) return 0;
  if (v.includes("bn")) return num * 1000;
  if (v.includes("mm")) return num;
  return num;
}

type SortKey = "value" | "name" | "country";

export default function AgenciesPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortKey>("value");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    const list = agencies.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.country.toLowerCase().includes(q) ||
        a.tagline.toLowerCase().includes(q)
    );
    list.sort((a, b) => {
      if (sortBy === "value") return parseValue(b.value) - parseValue(a.value);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return a.country.localeCompare(b.country);
    });
    return list;
  }, [search, sortBy]);

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Building2 className="w-6 h-6 text-accent-steel" />
          <h1 className="text-3xl font-bold text-white">All Agencies</h1>
        </div>
        <p className="text-foreground-muted mb-8">{agencies.length} verified football agencies worldwide</p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <DirectorySearch
            placeholder="Search agencies by name, country..."
            value={search}
            onChange={setSearch}
          />
          <div className="flex gap-2">
            {(["value", "name", "country"] as SortKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setSortBy(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  sortBy === key
                    ? "bg-accent-steel/20 text-accent-light border border-accent-steel/30"
                    : "bg-background-card border border-border text-foreground-muted hover:text-foreground"
                }`}
              >
                <ArrowUpDown className="w-3.5 h-3.5" />
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((agency) => (
            <AgencyCard key={agency.slug} {...agency} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-foreground-dim">
            No agencies found matching &quot;{search}&quot;
          </div>
        )}
      </div>
    </main>
  );
}
