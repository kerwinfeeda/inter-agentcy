import Link from "next/link";
import { Shield, Building2, Users, Globe, ArrowRight, ShieldCheck } from "lucide-react";
import agencies from "@/data/agencies.json";
import agents from "@/data/agents.json";
import AgencyCard from "@/components/directory/AgencyCard";
import VerifiedBadge from "@/components/directory/VerifiedBadge";

function parseValue(v: string): number {
  if (!v) return 0;
  const num = parseFloat(v.replace(/[€,]/g, ""));
  if (isNaN(num)) return 0;
  if (v.includes("bn")) return num * 1000;
  if (v.includes("mm")) return num;
  return num;
}

export default function DirectoryPage() {
  const sortedAgencies = [...agencies].sort((a, b) => parseValue(b.value) - parseValue(a.value));
  const featured = sortedAgencies.slice(0, 15);
  const countries = new Set(agencies.map((a) => a.country).filter(Boolean));
  const totalValue = sortedAgencies.reduce((sum, a) => sum + parseValue(a.value), 0);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-card border border-border text-sm text-foreground-muted mb-6">
            <Shield className="w-4 h-4 text-accent-steel" />
            Verified Football Directory
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Global Football{" "}
            <span className="gradient-text">Agency Directory</span>
          </h1>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto mb-10">
            The most comprehensive database of verified football agencies and agents worldwide.
            Trusted source for player representation intelligence.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Building2 className="w-5 h-5 text-accent-steel" />
                <span className="text-2xl font-bold text-white">{agencies.length}</span>
              </div>
              <p className="text-xs text-foreground-dim">Verified Agencies</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-5 h-5 text-accent-steel" />
                <span className="text-2xl font-bold text-white">{agents.length}</span>
              </div>
              <p className="text-xs text-foreground-dim">Verified Agents</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Globe className="w-5 h-5 text-accent-steel" />
                <span className="text-2xl font-bold text-white">{countries.size}</span>
              </div>
              <p className="text-xs text-foreground-dim">Countries</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Shield className="w-5 h-5 text-accent-steel" />
                <span className="text-2xl font-bold text-white">€{Math.round(totalValue / 1000)}bn+</span>
              </div>
              <p className="text-xs text-foreground-dim">Total Portfolio</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/directory/agencies"
              className="gradient-steel-btn px-6 py-3 rounded-xl text-white font-medium flex items-center gap-2 transition-all"
            >
              Browse Agencies <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/directory/agents"
              className="px-6 py-3 rounded-xl border border-border text-foreground hover:bg-background-card transition-colors font-medium flex items-center gap-2"
            >
              Browse Agents <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Verified Badge Explainer */}
      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white mb-4 text-center">Verified Badge System</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <VerifiedBadge variant="gold" size="lg" />
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Gold Verified — Agencies</h3>
                  <p className="text-xs text-foreground-dim leading-relaxed">
                    Awarded to agencies verified through public records, regulatory filings, and industry sources. Confirms legitimacy and active status.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <VerifiedBadge variant="blue" size="lg" />
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Blue Verified — Agents</h3>
                  <p className="text-xs text-foreground-dim leading-relaxed">
                    Awarded to individual agents verified through licensing records and professional activity. Confirms identity and credentials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Agencies */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Featured Agencies</h2>
            <Link href="/directory/agencies" className="text-sm text-accent-steel hover:text-accent-light transition-colors flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((agency) => (
              <AgencyCard key={agency.slug} {...agency} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 text-center">
            <ShieldCheck className="w-8 h-8 text-verified-gold mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Trusted Source for Football Intelligence</h2>
            <p className="text-sm text-foreground-dim max-w-xl mx-auto">
              All listings are sourced from public records, regulatory databases, and verified industry contacts.
              Inter Agentcy is the definitive directory for football agency intelligence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
