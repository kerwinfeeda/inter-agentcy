"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import { Users } from "lucide-react";
import players from "@/data/players.json";
import PlayerCard from "@/components/directory/PlayerCard";
import DirectorySearch from "@/components/directory/DirectorySearch";

type Player = (typeof players)[number];
type PositionFilter = "All" | "Forward" | "Midfielder" | "Defender" | "Goalkeeper";

const POSITIONS: PositionFilter[] = ["All", "Forward", "Midfielder", "Defender", "Goalkeeper"];
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function PlayersPage() {
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState<PositionFilter>("All");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const positionCounts = useMemo(() => {
    const counts: Record<string, number> = { All: players.length };
    for (const p of players) {
      counts[p.position] = (counts[p.position] || 0) + 1;
    }
    return counts;
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return (players as Player[]).filter((p) => {
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.currentClub.toLowerCase().includes(q) ||
        p.nationality.toLowerCase().includes(q) ||
        p.position.toLowerCase().includes(q);
      const matchesPosition = position === "All" || p.position === position;
      return matchesSearch && matchesPosition;
    });
  }, [search, position]);

  const grouped = useMemo(() => {
    const groups: Record<string, Player[]> = {};
    for (const player of filtered) {
      const letter = player.name.charAt(0).toUpperCase();
      const key = ALPHABET.includes(letter) ? letter : "#";
      if (!groups[key]) groups[key] = [];
      groups[key].push(player);
    }
    return groups;
  }, [filtered]);

  const activeLetters = useMemo(() => new Set(Object.keys(grouped)), [grouped]);

  const scrollToLetter = useCallback((letter: string) => {
    setActiveLetter(letter);
    const el = sectionRefs.current[letter];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const sortedLetters = useMemo(() => {
    return Object.keys(grouped).sort((a, b) => {
      if (a === "#") return 1;
      if (b === "#") return -1;
      return a.localeCompare(b);
    });
  }, [grouped]);

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Users className="w-6 h-6 text-accent-steel" />
          <h1 className="text-3xl font-bold text-white">Player Directory</h1>
        </div>
        <p className="text-foreground-muted mb-8">
          {players.length} players in the database · Search by name, club, nationality, or position
        </p>

        {/* Position Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {POSITIONS.map((pos) => (
            <button
              key={pos}
              onClick={() => setPosition(pos)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                position === pos
                  ? "bg-[#9AAAB8]/20 text-[#9AAAB8] border border-[#9AAAB8]/30"
                  : "bg-[#131419] text-foreground-muted border border-transparent hover:border-[#7B8794]/30"
              }`}
            >
              {pos}
              <span className="text-xs opacity-70">({positionCounts[pos] || 0})</span>
            </button>
          ))}
        </div>

        <div className="mb-8">
          <DirectorySearch
            placeholder="Search by name, club, nationality, or position..."
            value={search}
            onChange={(v) => { setSearch(v); setActiveLetter(null); }}
          />
        </div>

        {/* A-Z Navigation */}
        <div className="sticky top-20 z-30 bg-background/80 backdrop-blur-md border-b border-border -mx-6 px-6 py-3 mb-8">
          <div className="flex flex-wrap justify-center gap-1">
            {ALPHABET.map((letter) => {
              const has = activeLetters.has(letter);
              const isActive = activeLetter === letter;
              return (
                <button
                  key={letter}
                  onClick={() => has && scrollToLetter(letter)}
                  disabled={!has}
                  className={`w-9 h-9 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#9AAAB8] text-white"
                      : has
                        ? "text-foreground hover:bg-[#9AAAB8]/20 hover:text-[#9AAAB8]"
                        : "text-foreground-dim/30 cursor-default"
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grouped Player Listings */}
        {sortedLetters.map((letter) => (
          <div
            key={letter}
            ref={(el) => { sectionRefs.current[letter] = el; }}
            className="mb-10 scroll-mt-36"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-[#9AAAB8]">{letter}</span>
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-foreground-muted">{grouped[letter].length} player{grouped[letter].length !== 1 ? "s" : ""}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {grouped[letter].map((player) => (
                <PlayerCard
                  key={player.slug}
                  name={player.name}
                  slug={player.slug}
                  position={player.position}
                  currentClub={player.currentClub}
                  flag={player.flag}
                  marketValue={player.marketValue}
                  verification={player.verification as "none" | "blue" | "gold"}
                />
              ))}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-foreground-dim">
            No players found matching your search.
          </div>
        )}

        <div className="mt-12 card p-6 text-center">
          <p className="text-sm text-foreground-dim">
            Player data sourced from public records and verified industry sources.
            Inter Agentcy verifies all listings.
          </p>
        </div>
      </div>
    </main>
  );
}
