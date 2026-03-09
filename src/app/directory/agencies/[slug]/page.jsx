import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  TrendingUp,
  Calendar,
  Globe,
  Users,
  Award,
  Briefcase,
  ExternalLink,
  ChevronRight,
  Mail,
  Phone,
  Building2,
} from "lucide-react";
import {
  getAllAgencies,
  getAgencyBySlug,
  getSimilarAgencies,
  getProfileCompleteness,
} from "@/lib/agency-data";
import VerifiedBadge from "@/components/directory/VerifiedBadge";
import AgencyCard from "@/components/directory/AgencyCard";
import { Fetch } from "@/helpers/fetchWrapper";

// This runs on the server during build
export async function generateStaticParams() {
  const agencies = getAllAgencies();
  return agencies.map((a) => ({
    slug: a.slug,
  }));
}

function SocialIcon({ type }) {
  const icons = {
    website: "🌐",
    instagram: "📸",
    twitter: "𝕏",
    linkedin: "in",
  };
  return <span className="text-xs">{icons[type] || "🔗"}</span>;
}

function StatPill({ icon: Icon, label, value }) {
  return (
    <div className="flex flex-col items-center gap-1 px-4 py-3">
      <Icon className="w-4 h-4 text-accent-steel" />
      <span className="text-lg font-bold text-white">{value}</span>
      <span className="text-xs text-foreground-dim">{label}</span>
    </div>
  );
}

function Section({ title, icon: Icon, children }) {
  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-5 h-5 text-accent-steel" />
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default async function AgencyDetailPage({ params }) {
  const { slug } = await params;

  // If using local data:

  const fetchAgency = async (id) => {
    const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/agency/get-single-agency/${id}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        next: { revalidate: 3600 },
      });

      if (!response.ok) return null;
      return response.json();
    } catch (error) {
      console.error("Fetch error:", error);
      return null;
    }
  };

  const res = await fetchAgency(slug);

  const agency = res?.data[0];

  if (!agency) return notFound();

  const similar = getSimilarAgencies(agency, 3);
  const completeness = getProfileCompleteness(agency);

  const socials = agency?.socialLinks
    ? Object.entries(agency.socialLinks)
        .filter(([_, url]) => url && url !== "")
        .map(([type, url]) => ({ type, url }))
    : [];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-foreground-dim mb-6">
          <Link
            href="/directory"
            className="hover:text-foreground transition-colors"
          >
            Directory
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            href="/directory/agencies"
            className="hover:text-foreground transition-colors"
          >
            Agencies
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground-muted">{agency?.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <div className="card p-6 sm:p-8">
              {/* Profile completeness */}
              {completeness < 100 && (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs text-foreground-dim mb-1">
                    <span>Profile completeness</span>
                    <span>{completeness}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${completeness}%`,
                        background: "linear-gradient(90deg, #D4A843, #C0C7CE)",
                      }}
                    />
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3 mb-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                  {agency?.name}
                </h1>
                <VerifiedBadge variant="gold" size="lg" />
              </div>
              <p className="text-lg text-foreground-dim mb-5">
                {agency?.slogan}
              </p>

              {/* Pill badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {agency?.location?.country && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background border border-border text-sm text-foreground">
                    <MapPin className="w-3.5 h-3.5 text-accent-steel" />{" "}
                    {agency?.location?.country}
                  </span>
                )}
                {agency?.realValue && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background border border-border text-sm text-foreground">
                    <TrendingUp className="w-3.5 h-3.5 text-accent-steel" /> €
                    {agency?.realValue}
                  </span>
                )}
                {agency?.foundationYear && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background border border-border text-sm text-foreground">
                    <Calendar className="w-3.5 h-3.5 text-accent-steel" /> Est.{" "}
                    {agency?.foundationYear}
                  </span>
                )}
              </div>

              {/* Social links */}
              {socials.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.type}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background-elevated border border-border text-xs text-foreground-muted hover:text-white hover:border-accent-steel transition-all"
                    >
                      <SocialIcon type={s.type} />
                      <span className="capitalize">
                        {s.type === "linkedIn" ? "LinkedIn" : s.type}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Stats Bar */}
            <div className="card p-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
                {agency.playerCount && (
                  <StatPill
                    icon={Users}
                    label="Players"
                    value={String(agency.playerCount)}
                  />
                )}
                {agency?.realValue && (
                  <StatPill
                    icon={TrendingUp}
                    label="Portfolio"
                    value={agency?.realValue}
                  />
                )}
                {agency.regions?.length && (
                  <StatPill
                    icon={Globe}
                    label="Regions"
                    value={String(agency.regions.length)}
                  />
                )}
                {agency?.foundationYear && (
                  <StatPill
                    icon={Calendar}
                    label="Founded"
                    value={agency?.foundationYear}
                  />
                )}
                {/* Fallbacks if no enriched data */}
                {!agency.playerCount && !agency.regions && agency.country && (
                  <StatPill icon={MapPin} label="HQ" value={agency.country} />
                )}
              </div>
            </div>

            {/* About */}
            {agency.description && (
              <Section title="About" icon={Building2}>
                <p className="text-sm text-foreground-muted leading-relaxed whitespace-pre-line">
                  {agency.description}
                </p>
              </Section>
            )}

            {/* Key People */}
            {agency.keyPeople?.length ? (
              <Section title="Key People" icon={Users}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {agency.keyPeople.map((p, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-background border border-border"
                    >
                      <div className="w-9 h-9 rounded-full bg-background-elevated flex items-center justify-center text-sm font-bold text-accent-steel">
                        {p.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {p.name}
                        </div>
                        <div className="text-xs text-foreground-dim">
                          {p.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            ) : null}

            {/* Rising Talents */}
            {/* {hasRisingTalents ? (
              <Section title="Rising Talents" icon={Users}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {agency?.risingTalents!.map((name, i) => (
                    <div key={i} className="px-3 py-2 rounded-lg bg-background border border-border text-sm text-foreground">
                      🌱 {name}
                    </div>
                  ))}
                </div>
              </Section>
            ) : null} */}

            {/* Notable Deals */}
            <Section title="Notable Deals" icon={TrendingUp}>
              <div className="space-y-3">
                <p className="text-sm text-foreground-muted">
                  {agency?.notableDeals}
                </p>
              </div>
            </Section>
            {/* {agency.notableDeals?.length ? (
              <Section title="Notable Deals" icon={TrendingUp}>
                <div className="space-y-3">
                  {agency.notableDeals?.map((d, i) => {
                    const desc = typeof d === "string" ? d : d.description;
                    const year = typeof d === "string" ? undefined : d.year;
                    return (
                      <div key={i} className="flex gap-4 items-start">
                        {year && (
                          <span className="text-xs font-mono text-accent-steel bg-background px-2 py-1 rounded shrink-0">
                            {year}
                          </span>
                        )}
                       
                      </div>
                    );
                  })}
                </div>
              </Section>
            ) : null} */}

            {/* Services */}
            {agency.services?.length ? (
              <Section title="Services" icon={Briefcase}>
                <div className="flex flex-wrap gap-2">
                  {agency.services.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-background border border-border text-sm text-foreground-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Section>
            ) : null}

            {Array.isArray(agency.trackRecord) && agency.trackRecord.length ? (
              <Section title="Track Record" icon={TrendingUp}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {agency.trackRecord.map((t, i) => (
                    <div
                      key={i}
                      className="text-center px-3 py-3 rounded-lg bg-background border border-border"
                    >
                      <div className="text-lg font-bold text-white">
                        {t.value}
                      </div>
                      <div className="text-xs text-foreground-dim">
                        {t.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            ) : null}

            {/* Awards */}
            {agency.awards?.length ? (
              <Section title="Awards & Recognition" icon={Award}>
                <div className="space-y-2">
                  {agency.awards.map((a, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-foreground-muted"
                    >
                      <Award className="w-4 h-4 text-verified-gold shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </Section>
            ) : null}

            {similar.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">
                  Similar Agencies
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {similar.map((a) => (
                    <AgencyCard key={a.slug} {...a} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="card p-6">
              <h3 className="text-sm font-semibold text-white mb-4">
                Quick Facts
              </h3>
              <div className="space-y-3 text-sm">
                {agency.foundationYear && (
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-dim">Founded</span>
                    <span className="text-foreground">
                      {agency.foundationYear}
                    </span>
                  </div>
                )}
                {agency.location && (
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-dim">Country</span>
                    <span className="text-foreground">
                      {agency?.location?.country}
                    </span>
                  </div>
                )}
                {agency.languages?.length ? (
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-dim">Languages</span>
                    <span className="text-foreground text-right">
                      {agency.languages.join(", ")}
                    </span>
                  </div>
                ) : null}
                {agency?.realValue && (
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-dim">Portfolio</span>
                    <span className="text-foreground">
                      €{agency?.realValue}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Contact */}
            <div className="card p-6">
              <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-3">
                {agency.email && (
                  <a
                    href={`mailto:${agency.email}`}
                    className="flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4" /> {agency.email}
                  </a>
                )}
                {agency.phone && (
                  <a
                    href={`tel:${agency.phone}`}
                    className="flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors"
                  >
                    <Phone className="w-4 h-4" /> {agency.phone}
                  </a>
                )}
                {agency.website && (
                  <a
                    href={agency.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Website
                  </a>
                )}
              </div>
              {agency.email && (
                <a
                  href={`mailto:${agency.email}`}
                  className="gradient-steel-btn mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-medium"
                >
                  Contact Agency
                </a>
              )}
            </div>

            {/* Verified Info */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-3">
                <VerifiedBadge variant="gold" size="sm" showLabel />
              </div>
              <p className="text-xs text-foreground-dim leading-relaxed">
                This agency has been verified by Inter Agentcy. Information
                sourced from public records and verified sources.
              </p>
              {agency.lastVerified && (
                <p className="text-xs text-foreground-dim mt-2">
                  Last verified: {agency.lastVerified}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
