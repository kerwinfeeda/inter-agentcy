import Link from "next/link";
import {
  Shield, ArrowRight, Briefcase, Network, FileCheck, TrendingUp,
  Search, Users, Link2
} from "lucide-react";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FeatureCard from "@/components/FeatureCard";

const valueProps = [
  { icon: Briefcase, title: "Enterprise Tools", description: "CRM, scouting integrations, deal tracking, and career management — tailored for every role in the ecosystem." },
  { icon: Network, title: "Global Network", description: "Connect scouts, agents, representatives, and clubs across 200+ countries in one trusted platform." },
  { icon: FileCheck, title: "Built-in Compliance", description: "FIFA regulations baked into every workflow. Unlicensed participants operate through licensed agents automatically." },
  { icon: TrendingUp, title: "Revenue for Everyone", description: "Transparent commission splits, finder's fees, and referral tracking. Every role earns their share." },
];

const roles = [
  {
    icon: Shield,
    title: "Licensed Agents",
    description: "Execute transfers, negotiate contracts, and manage player careers with enterprise-grade tools and full FIFA compliance.",
    color: "from-accent to-accent-light",
    href: "/agents#agents",
    tag: "Licensed",
  },
  {
    icon: Search,
    title: "Scouts",
    description: "Discover talent, create reports, upload video — and earn finder's fees by connecting players with agents.",
    color: "from-success to-emerald-500",
    href: "/agents#scouts",
    tag: "Licensed or Unlicensed",
  },
  {
    icon: Users,
    title: "Representatives",
    description: "Manage player careers, build brands, and collaborate with licensed agents for deal execution.",
    color: "from-purple-400 to-violet-500",
    href: "/agents#reps",
    tag: "Unlicensed OK",
  },
  {
    icon: Link2,
    title: "Introducers",
    description: "Connect players, agents, and clubs. Earn referral commissions on every successful introduction.",
    color: "from-accent to-amber-400",
    href: "/agents#introducers",
    tag: "Unlicensed OK",
  },
];

const steps = [
  { num: "01", title: "Join", description: "Pick your role — agent, scout, rep, or introducer. Get verified and onboarded with your personalized toolkit." },
  { num: "02", title: "Build", description: "Use tools tailored to your role. Scouts find talent, reps manage careers, agents execute deals, introducers connect parties." },
  { num: "03", title: "Earn", description: "Transparent commission splits for every role. Unlicensed participants work through licensed agents — everyone earns, everyone stays compliant." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full card text-sm text-foreground-muted mb-8">
              <Shield className="w-4 h-4 text-accent" />
              FIFA Compliant Ecosystem
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              The Complete{" "}
              <span className="gradient-text">Football Ecosystem</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-10 max-w-2xl">
              Whether you&apos;re a licensed agent, scout, representative, or introducer — Inter Agentcy
              gives you the tools, network, and compliance to operate at the highest level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/join"
                className="px-8 py-4 gradient-steel-btn text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/ecosystem"
                className="px-8 py-4 card card-hover text-white font-semibold rounded-xl flex items-center justify-center gap-2"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Choose Your Role */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="gradient-text">Role</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Four roles, one ecosystem. Find where you fit and start building your career in football representation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((r) => (
              <Link key={r.title} href={r.href} className="card rounded-2xl p-6 group card-hover block">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${r.color}`}>
                  <r.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">{r.title}</h3>
                </div>
                <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-foreground-muted mb-3">{r.tag}</span>
                <p className="text-foreground-muted text-sm leading-relaxed">{r.description}</p>
                <div className="mt-4 flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View Plans <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to <span className="gradient-text">Compete</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              We provide the infrastructure so every participant can focus on what they do best.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((p) => (
              <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.description} gradient />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto">
              Three simple steps — no matter your role.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="relative card rounded-2xl p-8 group card-hover">
                <span className="text-6xl font-black text-accent/10 absolute top-4 right-6 group-hover:text-accent/20 transition-colors">
                  {s.num}
                </span>
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-foreground-muted leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/ecosystem" className="inline-flex items-center gap-2 text-accent hover:underline text-sm font-medium">
              See the full ecosystem diagram <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Join the Ecosystem?
              </h2>
              <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
                Agents, scouts, representatives, and introducers — there&apos;s a place for everyone.
                Be first to access the platform that&apos;s changing football representation.
              </p>
              <Link
                href="/join"
                className="inline-flex items-center gap-2 px-8 py-4 gradient-steel-btn text-white font-semibold rounded-xl transition-all"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
