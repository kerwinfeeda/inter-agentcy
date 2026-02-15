import Link from "next/link";
import { MapPin, TrendingUp, Calendar, Users, ArrowRight } from "lucide-react";
import VerifiedBadge from "./VerifiedBadge";

interface AgencyCardProps {
  name: string;
  tagline: string;
  slug: string;
  country: string;
  value: string;
  founded?: string;
  hq?: string;
  playerCount?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function AgencyCard({ name, tagline, slug, country, value, founded, hq, playerCount }: AgencyCardProps) {
  return (
    <Link
      href={`/directory/agencies/${slug}`}
      className="card card-hover p-6 flex flex-col gap-3 group"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <h3 className="text-foreground font-semibold text-base group-hover:text-white transition-colors leading-tight truncate">
            {name}
          </h3>
          <VerifiedBadge variant="gold" size="sm" />
        </div>
      </div>
      <p className="text-foreground-dim text-sm leading-relaxed line-clamp-2">{tagline}</p>
      <div className="mt-auto flex flex-wrap items-center gap-3 text-xs text-foreground-muted pt-2">
        {country && (
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {country}
          </span>
        )}
        {value && (
          <span className="flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            {value}
          </span>
        )}
        {founded && (
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {founded}
          </span>
        )}
        {playerCount && (
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            {playerCount}
          </span>
        )}
      </div>
      <div className="flex items-center gap-1 text-xs text-accent-steel group-hover:text-accent-light transition-colors pt-1">
        View Profile <ArrowRight className="w-3 h-3" />
      </div>
    </Link>
  );
}
