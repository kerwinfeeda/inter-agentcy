import { MapPin, TrendingUp } from "lucide-react";
import VerifiedBadge from "./VerifiedBadge";

interface AgentCardProps {
  name: string;
  tagline: string;
  country: string;
  value: string;
  slug: string;
}

export default function AgentCard({ name, tagline, country, value }: AgentCardProps) {
  return (
    <div className="card card-hover p-6 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <h3 className="text-foreground font-semibold text-base leading-tight truncate">{name}</h3>
          <VerifiedBadge variant="blue" size="sm" />
        </div>
      </div>
      <p className="text-foreground-dim text-sm leading-relaxed line-clamp-2">{tagline}</p>
      <div className="mt-auto flex items-center gap-4 text-xs text-foreground-muted pt-2">
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
      </div>
    </div>
  );
}
