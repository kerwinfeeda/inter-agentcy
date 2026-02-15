import Link from "next/link";
import {
  Shield, ArrowRight, Briefcase, Network, FileCheck, TrendingUp,
  Search, Users, Link2, CheckCircle2, Globe, Handshake, Scale,
  Building2, UserCheck, Verified, ArrowDownRight, Zap
} from "lucide-react";
import StatsCounter from "@/components/StatsCounter";
import FeatureCard from "@/components/FeatureCard";

/* Steel grey palette tokens */
const steel = {
  light: "#C0C7CE",
  mid: "#9AAAB8",
  base: "#7B8794",
  dark: "#5A6B7A",
  darker: "#4A5568",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7B8794]/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#7B8794]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-[#9AAAB8]/3 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full card text-sm text-foreground-muted mb-8">
              <Globe className="w-4 h-4 text-[#9AAAB8]" />
              The Global Football Intermediary Ecosystem
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Where Football&apos;s{" "}
              <span className="gradient-text">Professionals</span>{" "}
              Connect
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-10 max-w-2xl">
              Two worlds, one platform. Licensed agents and agencies get enterprise tools to scale.
              Scouts, representatives, and introducers get a path into the industry. Together, they form
              the most complete football intermediary network on the planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/join"
                className="px-8 py-4 gradient-steel-btn text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Join the Ecosystem
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#how-it-connects"
                className="px-8 py-4 card card-hover text-white font-semibold rounded-xl flex items-center justify-center gap-2"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Two Cohorts Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Two Sides of the <span className="gradient-text">Same Game</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              The football intermediary world has two distinct cohorts — and both need each other.
              Inter Agentcy serves them separately and connects them together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cohort 1: Licensed Agents & Agencies */}
            <div className="relative rounded-3xl border-2 border-[#C0C7CE]/30 bg-gradient-to-b from-[#C0C7CE]/5 to-transparent p-8 md:p-10">
              <div className="absolute -top-4 left-8 px-4 py-1 gradient-steel-btn text-white text-sm font-semibold rounded-full">
                Licensed Professionals
              </div>

              <div className="flex items-center gap-4 mb-6 mt-2">
                <div className="w-14 h-14 rounded-2xl gradient-steel flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Agents & Agencies</h3>
                  <p className="text-[#C0C7CE] text-sm font-medium">FIFA-Licensed · Regulated · Authorised</p>
                </div>
              </div>

              <p className="text-foreground-muted mb-6 leading-relaxed">
                You hold the licence. You execute transfers, negotiate contracts, and represent players at the highest level.
                Inter Agentcy gives you the infrastructure to do it better, faster, and at scale.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { icon: Briefcase, text: "Enterprise CRM — manage players, clubs, and deals in one place" },
                  { icon: FileCheck, text: "Compliance suite — FIFA regulation checks, commission caps, audit trails" },
                  { icon: Building2, text: "Agency management — multi-agent firms, team dashboards, deal rooms" },
                  { icon: TrendingUp, text: "Scouting integrations — Wyscout, StatsBomb, player analytics" },
                  { icon: Verified, text: "Verified directory listing — build trust and visibility globally" },
                  { icon: Network, text: "Inbound deal flow — scouts, reps, and introducers bring you opportunities" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-[#C0C7CE] mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/join"
                  className="px-6 py-3 gradient-steel-btn text-white font-semibold rounded-xl transition-all text-center text-sm"
                >
                  Register as an Agent
                </Link>
                <Link
                  href="/directory/agents"
                  className="px-6 py-3 card card-hover text-white font-medium rounded-xl text-center text-sm"
                >
                  Browse Agent Directory
                </Link>
              </div>
            </div>

            {/* Cohort 2: Scouts, Reps, Introducers */}
            <div className="relative rounded-3xl border-2 border-[#9AAAB8]/30 bg-gradient-to-b from-[#9AAAB8]/5 to-transparent p-8 md:p-10">
              <div className="absolute -top-4 left-8 px-4 py-1 bg-[#9AAAB8] text-white text-sm font-semibold rounded-full">
                Open to Everyone
              </div>

              <div className="flex items-center gap-4 mb-6 mt-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7B8794] to-[#5A6B7A] flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Scouts, Reps & Introducers</h3>
                  <p className="text-[#9AAAB8] text-sm font-medium">No Licence Required · Training Provided</p>
                </div>
              </div>

              <p className="text-foreground-muted mb-6 leading-relaxed">
                You don&apos;t need a licence to play a vital role in football. Scouts discover talent, representatives
                manage careers, and introducers connect the right people. Inter Agentcy gives you the path in.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { icon: Search, text: "Scouts — find players, write reports, earn finder's fees" },
                  { icon: Users, text: "Representatives — manage careers, build brands, handle off-pitch life" },
                  { icon: Link2, text: "Introducers — connect players, clubs, and agents for referral commissions" },
                  { icon: UserCheck, text: "Get matched with licensed agents who execute the deals you source" },
                  { icon: Scale, text: "Work compliantly — all transactions route through licensed intermediaries" },
                  { icon: Zap, text: "Earn from day one — transparent fee splits, tracked and paid automatically" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-[#9AAAB8] mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/join"
                  className="px-6 py-3 bg-[#7B8794] hover:bg-[#5A6B7A] text-white font-semibold rounded-xl transition-all text-center text-sm"
                >
                  Join as Scout, Rep or Introducer
                </Link>
                <Link
                  href="/ecosystem"
                  className="px-6 py-3 card card-hover text-white font-medium rounded-xl text-center text-sm"
                >
                  Explore Roles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Convergence — How It All Connects */}
      <section id="how-it-connects" className="py-24 bg-white/[0.02] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full card text-sm text-foreground-muted mb-4">
              <Handshake className="w-4 h-4 text-[#9AAAB8]" />
              The Ecosystem Effect
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Separate Paths, <span className="gradient-text">One Ecosystem</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Each cohort is powerful on its own. Together, they create the first truly complete
              global football intermediary, representation, verification, and networking ecosystem.
            </p>
          </div>

          {/* Flywheel Visual */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "Discover",
                  icon: Search,
                  borderColor: "border-[#7B8794]/30",
                  bgColor: "bg-[#7B8794]/10",
                  textColor: "text-[#9AAAB8]",
                  desc: "Scouts and introducers identify talent and opportunities worldwide — feeding the pipeline.",
                  who: "Scouts · Introducers",
                },
                {
                  step: "Develop",
                  icon: Users,
                  borderColor: "border-[#9AAAB8]/30",
                  bgColor: "bg-[#9AAAB8]/10",
                  textColor: "text-[#C0C7CE]",
                  desc: "Representatives manage player careers, build brands, and prepare clients for the next step.",
                  who: "Representatives",
                },
                {
                  step: "Execute",
                  icon: Shield,
                  borderColor: "border-[#C0C7CE]/30",
                  bgColor: "bg-[#C0C7CE]/10",
                  textColor: "text-white",
                  desc: "Licensed agents negotiate, close transfers, and ensure every deal is FIFA-compliant.",
                  who: "Licensed Agents · Agencies",
                },
              ].map((item, i) => (
                <div key={item.step} className="relative">
                  <div className={`card rounded-2xl p-6 border ${item.borderColor} h-full`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.bgColor}`}>
                      <item.icon className={`w-6 h-6 ${item.textColor}`} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.step}</h3>
                    <p className="text-foreground-muted text-sm leading-relaxed mb-4">{item.desc}</p>
                    <span className="text-xs text-foreground-dim">{item.who}</span>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-foreground-dim" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Network Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: "Global Coverage",
                desc: "Scouts in Africa, agents in London, clubs in Spain — the network spans every football market.",
              },
              {
                icon: Verified,
                title: "Verified Trust",
                desc: "Every agent is licence-verified. Every participant is identity-checked. Trust is built into the infrastructure.",
              },
              {
                icon: Scale,
                title: "Full Compliance",
                desc: "FIFA FFAR 2023 baked in. Commission caps, clearing house integration, and audit trails by default.",
              },
              {
                icon: TrendingUp,
                title: "Everyone Earns",
                desc: "Transparent fee splits at every stage. Scouts, reps, and introducers earn alongside licensed agents.",
              },
            ].map((p) => (
              <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.desc} gradient />
            ))}
          </div>
        </div>
      </section>

      {/* The Flywheel */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Flywheel <span className="gradient-text">Effect</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              More participants means more deals, more data, and more value for everyone.
              This is how the ecosystem compounds.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                { from: "Scouts find talent", to: "Agents get inbound deal flow" },
                { from: "Reps build player brands", to: "Players become more marketable" },
                { from: "Introducers make connections", to: "Clubs discover new agents and players" },
                { from: "Agents close deals", to: "Everyone earns — attracting more participants", highlight: true },
              ].map((flow) => (
                <div key={flow.from} className="flex items-center gap-4">
                  <div className="flex-1 card rounded-xl p-4 text-right">
                    <p className="text-sm font-medium text-foreground">{flow.from}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full gradient-steel flex items-center justify-center shrink-0">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 card rounded-xl p-4">
                    <p className={`text-sm font-medium ${flow.highlight ? "text-[#C0C7CE]" : "text-foreground"}`}>{flow.to}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agent Directory */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9AAAB8]/10 text-[#C0C7CE] text-sm font-medium mb-4">
                <Search className="w-4 h-4" />
                The Inter Agentcy Directory
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Find the Right Agent.<br />
                <span className="gradient-text">Verified & Searchable.</span>
              </h2>
              <p className="text-foreground-muted mb-6 leading-relaxed">
                The largest verified directory of football agents in the world. Every agent is checked against
                FA and FIFA registries — registration numbers, licence status, and minor authorisation confirmed.
                Search by name, country, or registration number. Navigate A-Z. Filter by specialisation.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "2,400+ verified football agents and growing",
                  "FA registration numbers and licence status confirmed",
                  "Filter by authorisation to represent minors",
                  "Individual agent profiles with full credentials",
                  "Agencies listed with team rosters and track records",
                  "Free to search — no account required",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#9AAAB8] mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/directory/agents"
                  className="inline-flex items-center gap-2 px-6 py-3 gradient-steel-btn text-white font-semibold rounded-xl transition-all text-sm"
                >
                  Browse Agent Directory
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/directory/agencies"
                  className="inline-flex items-center gap-2 px-6 py-3 card card-hover text-white font-medium rounded-xl text-sm"
                >
                  Browse Agencies
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="card rounded-2xl p-6 border border-[#9AAAB8]/10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-white">For Players & Families</h4>
                  <UserCheck className="w-5 h-5 text-[#9AAAB8]" />
                </div>
                <p className="text-sm text-foreground-muted">
                  Looking for representation? Search verified agents by country and specialisation.
                  Every agent in our directory is licence-confirmed — so you know who you&apos;re dealing with.
                </p>
              </div>
              <div className="card rounded-2xl p-6 border border-[#9AAAB8]/10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-white">For Clubs & Sporting Directors</h4>
                  <Building2 className="w-5 h-5 text-[#9AAAB8]" />
                </div>
                <p className="text-sm text-foreground-muted">
                  Find agents with access to the players you need. Filter by authorisation, federation,
                  and network reach. Skip the guesswork — deal with verified professionals.
                </p>
              </div>
              <div className="card rounded-2xl p-6 border border-[#9AAAB8]/10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-white">For Agents</h4>
                  <Shield className="w-5 h-5 text-[#9AAAB8]" />
                </div>
                <p className="text-sm text-foreground-muted">
                  Claim your profile and make yourself visible. Players, clubs, and collaborators find you
                  through the directory — it&apos;s your public-facing credential in the ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Clubs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Search, title: "Player Discovery", desc: "Access scout-sourced talent from emerging markets worldwide" },
                  { icon: Verified, title: "Agent Verification", desc: "Only deal with licence-verified, FIFA-compliant intermediaries" },
                  { icon: FileCheck, title: "Deal Rooms", desc: "Structured negotiations with audit trails and compliance checks" },
                  { icon: Network, title: "Network Access", desc: "Connect with agents, scouts, and reps across 200+ countries" },
                ].map((item) => (
                  <div key={item.title} className="card rounded-2xl p-5">
                    <item.icon className="w-6 h-6 text-[#9AAAB8] mb-3" />
                    <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-foreground-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B8794]/10 text-[#9AAAB8] text-sm font-medium mb-4">
                <Building2 className="w-4 h-4" />
                For Clubs
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Smarter Recruitment.<br />
                <span className="gradient-text">Trusted Partners.</span>
              </h2>
              <p className="text-foreground-muted mb-6 leading-relaxed">
                Clubs waste time dealing with unverified intermediaries and fragmented scouting pipelines.
                Inter Agentcy gives sporting directors a single platform to discover players, verify agents,
                and manage inbound approaches — all with FIFA compliance built in.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Receive player submissions from verified agents and scouts only",
                  "Search the directory to find agents with access to specific markets",
                  "Use deal rooms for structured, auditable transfer negotiations",
                  "Post recruitment needs and let the network bring opportunities to you",
                  "Track all intermediary interactions in one compliance-ready dashboard",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#9AAAB8] mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/clubs"
                className="inline-flex items-center gap-2 text-[#C0C7CE] hover:underline text-sm font-medium"
              >
                Learn more for clubs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Players */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B8794]/10 text-[#9AAAB8] text-sm font-medium mb-4">
                <Users className="w-4 h-4" />
                For Players
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Career.<br />
                <span className="gradient-text">Your Team. Your Terms.</span>
              </h2>
              <p className="text-foreground-muted mb-6 leading-relaxed">
                Finding the right representation can change everything. Inter Agentcy helps players
                connect with verified agents, build a team around their career, and understand
                exactly who&apos;s working for them — and how much it costs.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Search verified agents by country, specialisation, and track record",
                  "Know your agent is FIFA-licensed before signing anything",
                  "Understand commission structures — transparent and capped by FIFA rules",
                  "Connect with representatives for brand building, media, and career management",
                  "Access the ecosystem without paying upfront — agents compete for your business",
                  "Apply to be represented and let qualified agents come to you",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#9AAAB8] mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/directory/agents"
                  className="inline-flex items-center gap-2 px-6 py-3 gradient-steel-btn text-white font-semibold rounded-xl transition-all text-sm"
                >
                  Find an Agent
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/players/apply"
                  className="inline-flex items-center gap-2 px-6 py-3 card card-hover text-white font-medium rounded-xl text-sm"
                >
                  Apply for Representation
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full gradient-steel flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-white text-lg mb-2">FIFA Protection</h4>
                <p className="text-sm text-foreground-muted max-w-xs mx-auto">
                  FIFA&apos;s 2023 regulations cap agent fees at 3% of player salary and 10% of transfer fees.
                  Every agent on Inter Agentcy operates within these rules — automatically enforced.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="card rounded-2xl p-5 text-center">
                  <p className="text-2xl font-bold text-white mb-1">3%</p>
                  <p className="text-xs text-foreground-muted">Max agent fee on player salary</p>
                </div>
                <div className="card rounded-2xl p-5 text-center">
                  <p className="text-2xl font-bold text-white mb-1">10%</p>
                  <p className="text-xs text-foreground-muted">Max agent fee on transfer fees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Agents — Detailed Offering */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9AAAB8]/10 text-[#C0C7CE] text-sm font-medium mb-4">
                <Shield className="w-4 h-4" />
                For Licensed Agents & Agencies
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stop Juggling Tools.<br />
                <span className="gradient-text">Scale Your Practice.</span>
              </h2>
              <p className="text-foreground-muted mb-8 leading-relaxed">
                Most agents run on spreadsheets, WhatsApp, and gut feeling. Inter Agentcy replaces the chaos
                with a unified platform — CRM, compliance, scouting data, deal rooms, and a verified directory
                that brings opportunities to you.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Manage your entire client portfolio in one dashboard",
                  "Automated FIFA compliance checks on every transaction",
                  "Deal room with e-signatures and commission tracking",
                  "Verified public profile in our global agents directory",
                  "Receive pre-qualified leads from scouts and introducers",
                  "Multi-agent agency management with role-based access",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#9AAAB8] mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-[#C0C7CE] hover:underline text-sm font-medium"
              >
                See all agent features <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { metric: "2,400+", label: "Verified agents in directory", icon: UserCheck },
                { metric: "200+", label: "Countries covered", icon: Globe },
                { metric: "100%", label: "FIFA FFAR 2023 compliant", icon: FileCheck },
                { metric: "24/7", label: "Deal room & document access", icon: Briefcase },
              ].map((stat) => (
                <div key={stat.label} className="card rounded-2xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#7B8794]/10 flex items-center justify-center shrink-0">
                    <stat.icon className="w-6 h-6 text-[#9AAAB8]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.metric}</p>
                    <p className="text-sm text-foreground-muted">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Scouts, Reps, Introducers — Detailed Offering */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-4">
              <div className="card rounded-2xl p-6 border border-[#C0C7CE]/20">
                <div className="flex items-center gap-3 mb-3">
                  <Search className="w-5 h-5 text-[#C0C7CE]" />
                  <h4 className="font-semibold text-white">Scouts</h4>
                </div>
                <p className="text-sm text-foreground-muted mb-3">
                  Discover players, write scouting reports, upload match footage. When your finds get signed,
                  you earn a finder&apos;s fee — tracked and paid through the platform.
                </p>
                <div className="flex items-center gap-2 text-xs text-[#9AAAB8]">
                  <ArrowDownRight className="w-3.5 h-3.5" />
                  Earn 5-10% finder&apos;s fees on every deal sourced
                </div>
              </div>

              <div className="card rounded-2xl p-6 border border-[#9AAAB8]/20">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-[#9AAAB8]" />
                  <h4 className="font-semibold text-white">Representatives</h4>
                </div>
                <p className="text-sm text-foreground-muted mb-3">
                  Manage player careers end-to-end — brand deals, media, sponsorships, career planning.
                  Partner with licensed agents when transfer negotiations begin.
                </p>
                <div className="flex items-center gap-2 text-xs text-[#9AAAB8]">
                  <ArrowDownRight className="w-3.5 h-3.5" />
                  Earn management fees + deal commission splits
                </div>
              </div>

              <div className="card rounded-2xl p-6 border border-[#7B8794]/20">
                <div className="flex items-center gap-3 mb-3">
                  <Link2 className="w-5 h-5 text-[#7B8794]" />
                  <h4 className="font-semibold text-white">Introducers</h4>
                </div>
                <p className="text-sm text-foreground-muted mb-3">
                  You know people. Connect players with agents, agents with clubs, scouts with agencies.
                  Every successful introduction earns you a referral commission.
                </p>
                <div className="flex items-center gap-2 text-xs text-[#9AAAB8]">
                  <ArrowDownRight className="w-3.5 h-3.5" />
                  Earn 10-15% referral commissions on introductions
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B8794]/10 text-[#9AAAB8] text-sm font-medium mb-4">
                <Users className="w-4 h-4" />
                For Scouts, Reps & Introducers
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Way Into<br />
                <span className="gradient-text">Football&apos;s Inner Circle.</span>
              </h2>
              <p className="text-foreground-muted mb-8 leading-relaxed">
                The football industry has always been hard to break into. Inter Agentcy changes that.
                No licence required. No connections needed. We provide the tools, training, and network —
                you build your career from the ground up.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Start for free — no upfront cost, no licence required",
                  "Get matched with licensed agents who close your deals",
                  "Every transaction is compliant — routed through authorised intermediaries",
                  "Build a verified reputation with tracked performance metrics",
                  "Access training through the Inter Academy",
                  "Transparent earnings — see exactly what you've earned and why",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#9AAAB8] mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/ecosystem"
                className="inline-flex items-center gap-2 text-[#C0C7CE] hover:underline text-sm font-medium"
              >
                See all roles and how they connect <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Verification */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built on <span className="gradient-text">Trust</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              In an industry where trust is everything, verification isn&apos;t optional — it&apos;s the foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Verified,
                title: "Agent Verification",
                desc: "Every licensed agent is verified against FIFA and national federation registries. Registration numbers, licence status, and minor authorisation — all checked.",
              },
              {
                icon: UserCheck,
                title: "Identity Verification",
                desc: "All participants undergo identity checks. Scouts, reps, and introducers are verified before they can transact on the platform.",
              },
              {
                icon: Scale,
                title: "Compliance by Default",
                desc: "FIFA FFAR 2023 regulations are built into every workflow. Commission caps, standard forms, clearing house integration — automatic and auditable.",
              },
            ].map((item) => (
              <div key={item.title} className="card rounded-2xl p-8 card-hover">
                <div className="w-12 h-12 rounded-xl bg-[#7B8794]/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#9AAAB8]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7B8794]/10 to-[#9AAAB8]/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Ecosystem Is Growing.
              </h2>
              <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
                Whether you&apos;re a FIFA-licensed agent looking for better tools, or someone
                who wants to build a career in football — there&apos;s a seat at the table.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 px-8 py-4 gradient-steel-btn text-white font-semibold rounded-xl transition-all"
                >
                  Join as an Agent
                  <Shield className="w-5 h-5" />
                </Link>
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 px-8 py-4 card card-hover text-white font-semibold rounded-xl transition-all"
                >
                  Join as Scout, Rep or Introducer
                  <Users className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
