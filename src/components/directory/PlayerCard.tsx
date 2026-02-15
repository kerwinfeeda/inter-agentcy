import Link from "next/link";
import { TrendingUp } from "lucide-react";
import PlayerBadge from "./PlayerBadge";

interface PlayerCardProps {
  name: string;
  slug: string;
  position: string;
  currentClub: string;
  flag: string;
  marketValue: string;
  verification: "none" | "blue" | "gold";
}

export default function PlayerCard({ name, slug, position, currentClub, flag, marketValue, verification }: PlayerCardProps) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

  return (
    <Link href={`/directory/players/${slug}`}>
      <div className="card card-hover p-6 flex flex-col gap-3 h-full">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A5568] to-[#7B8794] flex items-center justify-center text-white text-sm font-bold shrink-0">
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-foreground font-semibold text-base leading-tight truncate">{name}</h3>
              <PlayerBadge verification={verification} size="sm" />
            </div>
            <p className="text-foreground-dim text-sm">{position}</p>
          </div>
        </div>

        <div className="mt-auto flex items-center flex-wrap gap-3 text-xs text-foreground-muted pt-2">
          <span>{flag} {currentClub}</span>
          {marketValue && (
            <span className="flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              {marketValue}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
