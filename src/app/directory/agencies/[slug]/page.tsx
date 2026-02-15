import { notFound } from "next/navigation";
import Link from "next/link";
import { Shield, MapPin, TrendingUp, ArrowLeft, CheckCircle } from "lucide-react";
import agencies from "@/data/agencies.json";

export function generateStaticParams() {
  return agencies.map((a) => ({ slug: a.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function AgencyDetailPage({ params }: Props) {
  const { slug } = await params;
  const agency = agencies.find((a) => a.slug === slug);
  if (!agency) return notFound();

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/directory/agencies"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to agencies
        </Link>

        <div className="card p-8">
          {/* Verified Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-steel/10 border border-accent-steel/20">
              <CheckCircle className="w-4 h-4 text-accent-steel" />
              <span className="text-xs font-medium text-accent-light">Verified by Inter Agentcy</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">{agency.name}</h1>
          <p className="text-lg text-foreground-dim mb-6">{agency.tagline}</p>

          <div className="flex flex-wrap gap-4 mb-8">
            {agency.country && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border">
                <MapPin className="w-4 h-4 text-accent-steel" />
                <span className="text-sm text-foreground">{agency.country}</span>
              </div>
            )}
            {agency.value && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border">
                <TrendingUp className="w-4 h-4 text-accent-steel" />
                <span className="text-sm text-foreground">Portfolio: {agency.value}</span>
              </div>
            )}
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-accent-steel mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">About this listing</h3>
                <p className="text-sm text-foreground-dim">
                  Agency information sourced from public records. Inter Agentcy verifies all listings.
                  This agency is part of our verified directory of {agencies.length} football agencies worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
