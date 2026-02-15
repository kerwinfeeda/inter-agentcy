import { Shield, MapPin, TrendingUp } from "lucide-react";

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
        <h3 className="text-foreground font-semibold text-base leading-tight">{name}</h3>
        <Shield className="w-4 h-4 text-accent-steel flex-shrink-0 mt-0.5" />
      </div>
      <p className="text-foreground-dim text-sm leading-relaxed">{tagline}</p>
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
