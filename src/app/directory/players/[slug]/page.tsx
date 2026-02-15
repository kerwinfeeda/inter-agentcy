import Link from "next/link";
import { ArrowLeft, User, Calendar, Ruler, Footprints, Building2, Trophy, Star, TrendingUp, ShieldCheck } from "lucide-react";
import players from "@/data/players.json";
import PlayerBadge from "@/components/directory/PlayerBadge";

type Player = (typeof players)[number];

export function generateStaticParams() {
  return players.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const player = players.find((p) => p.slug === params.slug);
  return {
    title: player ? `${player.name} — Inter Agentcy` : "Player Not Found",
    description: player?.about?.slice(0, 160) || "",
  };
}

export default function PlayerProfilePage({ params }: { params: { slug: string } }) {
  const player = players.find((p) => p.slug === params.slug) as Player | undefined;

  if (!player) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Player Not Found</h1>
          <Link href="/directory/players" className="text-accent-steel hover:underline">
            ← Back to Player Directory
          </Link>
        </div>
      </main>
    );
  }

  const stats = player.stats;
  const statCards = [
    { label: "Appearances", value: stats.appearances },
    { label: "Goals", value: stats.goals },
    { label: "Assists", value: stats.assists },
    { label: "Minutes", value: stats.minutesPlayed.toLocaleString() },
    { label: "Yellow Cards", value: stats.yellowCards },
    { label: "Red Cards", value: stats.redCards },
  ];

  const infoItems = [
    { icon: User, label: "Full Name", value: player.fullName },
    { icon: Calendar, label: "Date of Birth", value: `${player.dateOfBirth} (Age ${player.age})` },
    { icon: Ruler, label: "Height", value: player.height },
    { icon: Footprints, label: "Preferred Foot", value: player.preferredFoot },
    { icon: Building2, label: "Previous Club", value: player.previousClub },
    { icon: Trophy, label: "League", value: player.league },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/directory/players" className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-accent-steel transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Player Directory
        </Link>

        {/* Hero */}
        <div className="card p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4A5568] to-[#7B8794] flex items-center justify-center text-white text-xl font-bold shrink-0">
              {player.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-bold text-white">{player.name}</h1>
                <PlayerBadge verification={player.verification as "none" | "blue" | "gold"} size="lg" />
              </div>
              <p className="text-foreground-muted text-lg mb-2">{player.position}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-dim">
                <span>{player.flag} {player.nationality}</span>
                <span>{player.currentClub}</span>
                {player.shirtNumber && <span>#{player.shirtNumber}</span>}
                <span>Age {player.age}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {statCards.map((s) => (
            <div key={s.label} className="card p-4 text-center">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-foreground-dim mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Market Value & Rating */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="card p-6 flex items-center gap-4">
            <TrendingUp className="w-8 h-8 text-accent-steel" />
            <div>
              <div className="text-xs text-foreground-dim">Market Value</div>
              <div className="text-2xl font-bold text-white">{player.marketValue}</div>
            </div>
          </div>
          <div className="card p-6 flex items-center gap-4">
            <Star className="w-8 h-8 text-[#D4A843]" />
            <div>
              <div className="text-xs text-foreground-dim">Rating</div>
              <div className="text-2xl font-bold text-white">{player.rating}/100</div>
            </div>
          </div>
        </div>

        {/* Player Info */}
        <div className="card p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Player Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <item.icon className="w-4 h-4 text-foreground-dim shrink-0" />
                <div>
                  <div className="text-xs text-foreground-dim">{item.label}</div>
                  <div className="text-sm text-foreground">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        {player.about && (
          <div className="card p-6 mb-8">
            <h2 className="text-lg font-semibold text-white mb-3">About</h2>
            <p className="text-sm text-foreground-dim leading-relaxed">{player.about}</p>
          </div>
        )}

        {/* Verification */}
        <div className="card p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-accent-steel mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">Verification Status</h3>
              <p className="text-xs text-foreground-dim leading-relaxed">
                {player.verification === "gold"
                  ? "This player is Agency Signed — verified as represented by a registered football agency."
                  : player.verification === "blue"
                    ? "This player is Verified — their identity and career data have been confirmed through public records."
                    : "This player has not yet been verified. Data is sourced from public records and may be updated."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
