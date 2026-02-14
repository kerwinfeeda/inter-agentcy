import { Shield, MapPin, Star, CheckCircle, ArrowRight, Users, TrendingUp, Award } from "lucide-react";
import Link from "next/link";

const players = [
  { name: "Emmanuel Osei", pos: "ST", age: 22, club: "KAA Gent" },
  { name: "Lucas Ferreira", pos: "CM", age: 24, club: "Vitória SC" },
  { name: "Yusuf Kamara", pos: "LW", age: 20, club: "FC Nordsjaelland" },
  { name: "James Mensah", pos: "CB", age: 26, club: "Hatayspor" },
];

const deals = [
  { year: "2025", desc: "Emmanuel Osei → KAA Gent (Transfer, €1.8M)" },
  { year: "2024", desc: "Lucas Ferreira → Vitória SC (Loan with option)" },
  { year: "2024", desc: "Yusuf Kamara → FC Nordsjaelland (Transfer, €800K)" },
  { year: "2023", desc: "James Mensah → Hatayspor (Free transfer)" },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Banner */}
          <div className="card p-8 mb-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-24 h-24 rounded-full bg-background-elevated flex items-center justify-center flex-shrink-0">
                <Users className="w-10 h-10 text-foreground-dim" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold">Alex Thompson</h1>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    <CheckCircle className="w-3 h-3" /> Verified Agent
                  </span>
                </div>
                <p className="text-foreground-muted text-sm mb-3">Licensed FIFA Agent specializing in West African and European transfers. 8+ years of experience connecting talent with opportunity across 15+ leagues.</p>
                <div className="flex flex-wrap gap-4 text-xs text-foreground-dim">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> London, UK</span>
                  <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> FIFA Licensed</span>
                  <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-accent" /> 4.9 rating</span>
                </div>
              </div>
              <button className="px-6 py-2.5 gradient-steel-btn text-white text-sm font-semibold rounded-xl">Contact</button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { icon: TrendingUp, value: "12", label: "Deals Closed" },
              { icon: Users, value: "8", label: "Active Players" },
              { icon: Award, value: "€4.2M", label: "Total Value" },
            ].map((s) => (
              <div key={s.label} className="card p-5 text-center">
                <s.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold mb-1">{s.value}</div>
                <p className="text-foreground-dim text-xs">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Regions & Specializations */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="card p-5">
              <h3 className="text-xs font-semibold text-foreground-dim mb-3">REGIONS</h3>
              <div className="flex flex-wrap gap-2">
                {["West Africa", "Western Europe", "Scandinavia"].map((r) => (
                  <span key={r} className="px-3 py-1 rounded-lg bg-background-elevated text-foreground-muted text-xs">{r}</span>
                ))}
              </div>
            </div>
            <div className="card p-5">
              <h3 className="text-xs font-semibold text-foreground-dim mb-3">SPECIALIZATIONS</h3>
              <div className="flex flex-wrap gap-2">
                {["Transfers", "Youth Development", "Free Agents"].map((s) => (
                  <span key={s} className="px-3 py-1 rounded-lg bg-background-elevated text-foreground-muted text-xs">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Players */}
          <div className="card p-5 mb-6">
            <h3 className="text-xs font-semibold text-foreground-dim mb-4">PLAYER PORTFOLIO</h3>
            <div className="space-y-3">
              {players.map((p) => (
                <div key={p.name} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-background-elevated flex items-center justify-center text-xs font-bold text-foreground-dim">{p.pos}</div>
                    <div>
                      <p className="text-sm font-medium">{p.name}</p>
                      <p className="text-xs text-foreground-dim">{p.club} · Age {p.age}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deal History */}
          <div className="card p-5 mb-6">
            <h3 className="text-xs font-semibold text-foreground-dim mb-4">DEAL HISTORY</h3>
            <div className="space-y-3">
              {deals.map((d, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-xs text-accent font-mono mt-0.5">{d.year}</span>
                  <p className="text-sm text-foreground-muted">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="card p-5 mb-12">
            <h3 className="text-xs font-semibold text-foreground-dim mb-4">TESTIMONIALS</h3>
            <div className="space-y-4">
              {[
                { quote: "Alex helped me secure a move that changed my career. Professional and always available.", author: "Emmanuel Osei, Player" },
                { quote: "Reliable agent who understands the market. Easy to work with on negotiations.", author: "Sporting Director, Belgian Pro League" },
              ].map((t, i) => (
                <div key={i} className="p-4 rounded-lg bg-background-elevated">
                  <p className="text-sm text-foreground-muted italic mb-2">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-xs text-foreground-dim">— {t.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="card p-8 text-center bg-background-elevated">
            <h2 className="text-2xl font-bold mb-3">This could be your profile</h2>
            <p className="text-foreground-muted text-sm mb-6">Join Inter Agentcy and build your professional football representation profile</p>
            <Link href="/register" className="inline-flex items-center gap-2 px-8 py-3 gradient-steel-btn text-white font-semibold rounded-xl transition-all">
              Create Your Profile <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
