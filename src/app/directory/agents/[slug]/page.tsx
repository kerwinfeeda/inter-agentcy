import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Shield, Baby, ExternalLink, ArrowLeft, Calendar, Hash, Building2 } from "lucide-react";
import agents from "@/data/agents.json";
import VerifiedBadge from "@/components/directory/VerifiedBadge";

type Agent = (typeof agents)[number] & {
  registrationNumber?: string;
  federation?: string;
  authorisedMinors?: boolean;
  authorisedMinorsUntil?: string | null;
  verifiedDate?: string;
  source?: string;
  tagline?: string;
  value?: string;
  href?: string;
};

export function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const agent = agents.find((a) => a.slug === params.slug) as Agent | undefined;
  if (!agent) return { title: "Agent Not Found" };
  return {
    title: `${agent.name} — Football Agent | Inter Agentcy`,
    description: agent.registrationNumber
      ? `${agent.name} is an FA registered football agent (${agent.registrationNumber}).`
      : `${agent.name} — verified football agent.`,
  };
}

export default function AgentProfilePage({ params }: { params: { slug: string } }) {
  const agent = agents.find((a) => a.slug === params.slug) as Agent | undefined;
  if (!agent) notFound();

  const isFA = !!agent.registrationNumber;

  // Similar agents: same first letter or FA status, limit 6
  const similar = (agents as Agent[])
    .filter(
      (a) =>
        a.slug !== agent.slug &&
        (a.name[0].toLowerCase() === agent.name[0].toLowerCase() ||
          (isFA && "registrationNumber" in a))
    )
    .slice(0, 6);

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <Link
          href="/directory/agents"
          className="inline-flex items-center gap-2 text-foreground-muted hover:text-foreground text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Agents Directory
        </Link>

        {/* Profile Card */}
        <div className="card p-8 mb-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-[#1a1b23] flex items-center justify-center text-2xl font-bold text-[#4A9EDB] shrink-0">
              {agent.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl font-bold text-white">{agent.name}</h1>
                <VerifiedBadge variant="blue" size="lg" showLabel />
              </div>
              {agent.tagline && (
                <p className="text-foreground-dim mt-1">{agent.tagline}</p>
              )}
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            {isFA && (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-[#4A9EDB]/10 text-[#4A9EDB] border border-[#4A9EDB]/20">
                <Shield className="w-4 h-4" />
                FA Registered Agent
              </span>
            )}
            {agent.authorisedMinors ? (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Baby className="w-4 h-4" />
                Authorised to Represent Minors
                {agent.authorisedMinorsUntil && (
                  <span className="opacity-70">until {agent.authorisedMinorsUntil}</span>
                )}
              </span>
            ) : isFA ? (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-red-500/10 text-red-400/70 border border-red-500/10">
                <Baby className="w-4 h-4" />
                Not Authorised for Minors
              </span>
            ) : null}
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {agent.registrationNumber && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-[#0b0b0b]">
                <Hash className="w-5 h-5 text-foreground-muted shrink-0" />
                <div>
                  <p className="text-xs text-foreground-muted">Registration Number</p>
                  <p className="text-foreground font-mono font-medium">{agent.registrationNumber}</p>
                </div>
              </div>
            )}
            {agent.federation && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-[#0b0b0b]">
                <Building2 className="w-5 h-5 text-foreground-muted shrink-0" />
                <div>
                  <p className="text-xs text-foreground-muted">Federation</p>
                  <p className="text-foreground font-medium">{agent.federation}</p>
                </div>
              </div>
            )}
            {agent.country && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-[#0b0b0b]">
                <MapPin className="w-5 h-5 text-foreground-muted shrink-0" />
                <div>
                  <p className="text-xs text-foreground-muted">Country</p>
                  <p className="text-foreground font-medium">{agent.country}</p>
                </div>
              </div>
            )}
            {agent.verifiedDate && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-[#0b0b0b]">
                <Calendar className="w-5 h-5 text-foreground-muted shrink-0" />
                <div>
                  <p className="text-xs text-foreground-muted">Verified Date</p>
                  <p className="text-foreground font-medium">{agent.verifiedDate}</p>
                </div>
              </div>
            )}
            {agent.value && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-[#0b0b0b]">
                <div className="w-5 h-5 text-foreground-muted shrink-0 text-center font-bold">€</div>
                <div>
                  <p className="text-xs text-foreground-muted">Portfolio Value</p>
                  <p className="text-foreground font-medium">{agent.value}</p>
                </div>
              </div>
            )}
          </div>

          {/* Source */}
          <div className="mt-6 pt-6 border-t border-[#1a1b23]">
            <p className="text-xs text-foreground-muted">
              Source: {agent.source || "footballagencies.com"} · Data verified by Inter Agentcy
            </p>
            {agent.href && (
              <Link
                href={`https://www.footballagencies.com${agent.href}`}
                target="_blank"
                className="inline-flex items-center gap-1 text-xs text-[#4A9EDB] hover:underline mt-1"
              >
                View on footballagencies.com <ExternalLink className="w-3 h-3" />
              </Link>
            )}
          </div>
        </div>

        {/* Similar Agents */}
        {similar.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Similar Agents</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {similar.map((s) => (
                <Link key={s.slug} href={`/directory/agents/${s.slug}`}>
                  <div className="card card-hover p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1a1b23] flex items-center justify-center text-sm font-bold text-[#4A9EDB] shrink-0">
                      {s.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="text-foreground font-medium text-sm truncate">{s.name}</p>
                        <VerifiedBadge variant="blue" size="sm" />
                      </div>
                      <p className="text-foreground-muted text-xs truncate">
                        {(s as Agent).registrationNumber || (s as Agent).tagline || s.country}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
