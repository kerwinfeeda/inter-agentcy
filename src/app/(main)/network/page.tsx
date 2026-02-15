import { ArrowRight, MessageCircle, Search, Building2, TrendingUp, CheckCircle } from "lucide-react";
import Link from "next/link";

const leagues = ["Premier League", "La Liga", "Serie A", "Bundesliga", "Ligue 1", "Eredivisie", "Liga Portugal", "MLS", "Championship", "Brasileirão", "Saudi Pro League", "Turkish Süper Lig"];

const stats = [
  { value: "200+", label: "Partner Clubs" },
  { value: "50+", label: "Leagues Covered" },
  { value: "30+", label: "Countries" },
  { value: "500+", label: "Active Members" },
];

export default function NetworkPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Access Clubs <br /><span className="gradient-text">Worldwide</span>
          </h1>
          <p className="text-foreground-muted text-lg mb-8 max-w-2xl mx-auto">
            Pre-established relationships with clubs across the globe. No more cold outreach — get warm introductions to sporting directors and decision-makers.
          </p>
          <Link href="/register" className="inline-flex items-center gap-2 px-8 py-4 gradient-steel-btn text-white font-semibold rounded-xl transition-all">
            Join the Network <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="card p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
              <p className="text-foreground-muted text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-background-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How the Network Works</h2>
          <div className="space-y-6">
            {[
              { icon: Building2, title: "Platform maintains club relationships", desc: "We invest in building and maintaining relationships with clubs globally so you don\u0027t have to start from zero." },
              { icon: MessageCircle, title: "Warm introductions, not cold outreach", desc: "When you have a player for a club, we facilitate the introduction. Your pitch lands on a warm desk." },
              { icon: Search, title: "Club wish lists", desc: "See what clubs are actively looking for — positions, budgets, player profiles — and match your talent accordingly." },
              { icon: TrendingUp, title: "Direct access at higher tiers", desc: "Pro and Elite members get direct messaging to sporting directors and priority placement for their players." },
            ].map((f) => (
              <div key={f.title} className="card p-6 flex gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-background-elevated flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{f.title}</h3>
                  <p className="text-foreground-muted text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leagues */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Leagues We Cover</h2>
          <p className="text-foreground-muted mb-12">And growing every month</p>
          <div className="flex flex-wrap justify-center gap-3">
            {leagues.map((l) => (
              <span key={l} className="px-4 py-2 card text-sm text-foreground-muted">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* For Clubs */}
      <section className="py-20 px-4 bg-background-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">For Clubs</h2>
          <p className="text-foreground-muted mb-8 max-w-xl mx-auto">Work with verified, compliant professionals through a single platform</p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { title: "Verified Agents", desc: "Every agent on the platform is verified and FIFA-compliant" },
              { title: "Streamlined Deals", desc: "One platform for negotiations, contracts, and documentation" },
              { title: "Quality Pipeline", desc: "Access pre-vetted talent from scouts and agents worldwide" },
            ].map((b) => (
              <div key={b.title} className="card p-6">
                <CheckCircle className="w-5 h-5 text-success mb-3" />
                <h3 className="font-semibold mb-2 text-sm">{b.title}</h3>
                <p className="text-foreground-muted text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to access the network?</h2>
          <p className="text-foreground-muted mb-8">Join Inter Agentcy and connect with clubs worldwide</p>
          <Link href="/register" className="inline-flex items-center gap-2 px-8 py-4 gradient-steel-btn text-white font-semibold rounded-xl transition-all">
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
