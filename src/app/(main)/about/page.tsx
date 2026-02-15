import { Target, Users, Globe, Award, Lightbulb, Heart } from "lucide-react";
import Link from "next/link";

const team = [
  { name: "Kerwin Alabi", role: "Founder & CEO", bio: "Football industry veteran with a vision to democratize player representation globally." },
  { name: "Coming Soon", role: "CTO", bio: "We're building our leadership team. Interested? Get in touch." },
  { name: "Coming Soon", role: "Head of Compliance", bio: "FIFA regulatory expert joining to lead our compliance suite." },
];

const advisors = [
  { name: "Advisory Position Open", role: "Former FIFA Official" },
  { name: "Advisory Position Open", role: "Premier League Agent" },
  { name: "Advisory Position Open", role: "Sports Tech Investor" },
  { name: "Advisory Position Open", role: "African Football Expert" },
];

const values = [
  { icon: Target, title: "Democratize Access", description: "Every aspiring agent deserves enterprise-grade tools, regardless of where they're based." },
  { icon: Heart, title: "Player First", description: "Better-equipped agents means better outcomes for players. That's our north star." },
  { icon: Globe, title: "Global by Design", description: "Football is the world's game. Our platform serves agents in every market." },
  { icon: Award, title: "Integrity Always", description: "Full compliance with FIFA regulations isn't optional — it's foundational." },
  { icon: Lightbulb, title: "Innovation", description: "We bring tech-forward thinking to an industry still running on handshakes and spreadsheets." },
  { icon: Users, title: "Community", description: "Independent doesn't mean alone. We're building the strongest agent network in football." },
];

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Democratizing Football{" "}
            <span className="gradient-text">Representation</span>
          </h1>
          <p className="text-lg text-foreground-muted leading-relaxed">
            The football agent industry is a $1.37B market dominated by a handful of super-agencies.
            We believe independent agents — especially those in emerging markets — deserve the same tools,
            network, and infrastructure. Inter Agentcy levels the playing field.
          </p>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="gradient-text">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card rounded-2xl p-6 card-hover">
                <v.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-foreground-muted text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Leadership <span className="gradient-text">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((t) => (
              <div key={t.name} className="card rounded-2xl p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent-light mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  {t.name === "Coming Soon" ? "?" : t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-lg font-bold">{t.name}</h3>
                <p className="text-accent text-sm mb-3">{t.role}</p>
                <p className="text-foreground-muted text-sm">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Advisory <span className="gradient-text">Board</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((a, i) => (
              <div key={i} className="card rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-background-elevated mx-auto mb-3 flex items-center justify-center">
                  <Users className="w-6 h-6 text-foreground-dim" />
                </div>
                <p className="font-medium text-foreground">{a.name}</p>
                <p className="text-sm text-foreground-dim">{a.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
                Whether you&apos;re an agent, a club, or someone who believes in democratizing football — there&apos;s a place for you.
              </p>
              <Link
                href="/join"
                className="inline-flex items-center gap-2 px-8 py-4 gradient-steel-btn text-white font-semibold rounded-xl transition-all"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
