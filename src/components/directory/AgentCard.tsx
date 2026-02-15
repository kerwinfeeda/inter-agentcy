import Link from "next/link";
import { MapPin, TrendingUp, Shield, Baby } from "lucide-react";
import VerifiedBadge from "./VerifiedBadge";

interface AgentCardProps {
  name: string;
  tagline?: string;
  country?: string;
  value?: string;
  slug: string;
  registrationNumber?: string;
  federation?: string;
  authorisedMinors?: boolean;
  authorisedMinorsUntil?: string | null;
  source?: string;
}

export default function AgentCard({
  name,
  tagline,
  country,
  value,
  slug,
  registrationNumber,
  authorisedMinors,
}: AgentCardProps) {
  const isFA = !!registrationNumber;

  return (
    <Link href={`/directory/agents/${slug}`}>
      <div className="card card-hover p-6 flex flex-col gap-3 h-full">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <h3 className="text-foreground font-semibold text-base leading-tight truncate">
              {name}
            </h3>
            <VerifiedBadge variant="blue" size="sm" />
          </div>
        </div>

        {tagline && (
          <p className="text-foreground-dim text-sm leading-relaxed line-clamp-2">{tagline}</p>
        )}

        {isFA && !tagline && (
          <p className="text-foreground-dim text-sm font-mono">{registrationNumber}</p>
        )}

        <div className="mt-auto flex items-center flex-wrap gap-3 text-xs text-foreground-muted pt-2">
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
          {isFA && (
            <span className="flex items-center gap-1 text-[#9AAAB8]">
              <Shield className="w-3.5 h-3.5" />
              FA Registered
            </span>
          )}
          {authorisedMinors && (
            <span className="flex items-center gap-1 text-[#9AAAB8]">
              <Baby className="w-3.5 h-3.5" />
              Minors
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
