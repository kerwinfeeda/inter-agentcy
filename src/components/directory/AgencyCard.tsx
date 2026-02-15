import Link from "next/link";
import { Shield, MapPin, TrendingUp } from "lucide-react";

interface AgencyCardProps {
  name: string;
  tagline: string;
  slug: string;
  country: string;
  value: string;
}

export default function AgencyCard({ name, tagline, slug, country, value }: AgencyCardProps) {
  return (
    <Link
      href={`/directory/agencies/${slug}`}
      className="card card-hover p-6 flex flex-col gap-3 group"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-foreground font-semibold text-base group-hover:text-white transition-colors leading-tight">
          {name}
        </h3>
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
    </Link>
  );
}
