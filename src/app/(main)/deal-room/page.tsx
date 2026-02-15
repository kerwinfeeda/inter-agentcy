import Link from "next/link";
import {
  Search,
  MessageSquare,
  Handshake,
  ShieldCheck,
  FileText,
  CheckCircle,
  Users,
  Building2,
  Briefcase,
  Target,
  DollarSign,
  Brain,
  Network,
  BarChart3,
  Scale,
  FileSearch,
  Route,
  Globe,
  ArrowRight,
  ClipboardList,
  UserCheck,
  Clock,
  Eye,
  Calculator,
  TrendingUp,
  Receipt,
  PieChart,
  Check,
  X,
} from "lucide-react";
import MacBookFrame from "@/components/devices/MacBookFrame";
import DealRoomMockup from "@/components/dealroom/DealRoomMockup";

export const metadata = {
  title: "Inter DealRoom™ — Football's Transfer Marketplace | Inter Agentcy",
  description:
    "The only platform where agents, clubs, scouts, reps, and introducers discover opportunities, negotiate transfers, and close deals — with FIFA compliance built in.",
};

/* ─── Data ─── */

const stats = [
  { label: "800+ Clubs", value: "800+" },
  { label: "2,400+ Agents", value: "2,400+" },
  { label: "€1.37B Market", value: "€1.37B" },
  { label: "100% Compliant", value: "100%" },
];

const lifecycle = [
  { step: 1, icon: Search, title: "Discovery", desc: "Agent lists player / Club posts requirement" },
  { step: 2, icon: Target, title: "Pitch", desc: "Agent pitches to interested clubs" },
  { step: 3, icon: Handshake, title: "Negotiation", desc: "Deal Room created, structured offers" },
  { step: 4, icon: ShieldCheck, title: "Agreement", desc: "Terms agreed, compliance verified" },
  { step: 5, icon: FileText, title: "Execution", desc: "Medical, contracts, FIFA TMS" },
  { step: 6, icon: CheckCircle, title: "Completion", desc: "Deal closed, commissions distributed" },
];

const dealRoomFeatures = [
  { icon: Users, title: "Parties Management", desc: "Buying club, selling club, agents, scouts, reps — all in one workspace." },
  { icon: Handshake, title: "Structured Offers", desc: "Submit, counter, and track offers with full version history." },
  { icon: FileText, title: "Document Management", desc: "Upload, share, and version-control contracts and documents." },
  { icon: MessageSquare, title: "Threaded Messaging", desc: "Contextual conversations with complete audit trail." },
  { icon: ClipboardList, title: "Task & Approvals", desc: "Assign tasks, request sign-offs, and track progress." },
  { icon: Clock, title: "Deal Timeline", desc: "Milestone tracking from first contact to completion." },
];

const aiFeatures = [
  { icon: BarChart3, title: "Deal Analyst", quote: "This offer is 15% below market rate. Consider countering at €X." },
  { icon: Target, title: "Smart Matching", quote: "Club X just sold their starting CB. They need a replacement matching your player's profile." },
  { icon: Scale, title: "Compliance Copilot", quote: "This fee structure exceeds FFAR caps. Here's a compliant alternative." },
  { icon: FileSearch, title: "Contract Review", quote: "Upload a contract → AI highlights key clauses, risks, and omissions." },
  { icon: TrendingUp, title: "Market Intel", quote: "Transfer window analytics, regional demand reports, fee trends." },
  { icon: Route, title: "Network Navigator", quote: "You're 2 connections away from Club X's sporting director." },
];

const complianceFeatures = [
  { icon: Scale, title: "FIFA FFAR Auto-Enforcement", desc: "3% salary cap, 10% transfer fee cap — automatically applied." },
  { icon: UserCheck, title: "Licence Verification", desc: "Every participant verified before deal room access." },
  { icon: Eye, title: "Full Audit Trail", desc: "Every action logged, timestamped, and exportable." },
  { icon: ShieldCheck, title: "Minor Protections", desc: "Dual representation checks and minor safeguards built in." },
  { icon: BarChart3, title: "Compliance Dashboard", desc: "Real-time deal health and regulatory status." },
];

const financialFeatures = [
  { icon: DollarSign, title: "Commission Tracking", desc: "Track commissions across multi-party deals." },
  { icon: Calculator, title: "Contingency Management", desc: "Sell-on clauses, performance bonuses, all tracked." },
  { icon: Receipt, title: "Auto-Generated Invoices", desc: "Generate compliant invoices from deal data." },
  { icon: PieChart, title: "Financial Analytics", desc: "Projections, summaries, and insights at a glance." },
];

const roles = [
  { icon: Briefcase, title: "Agents", desc: "List players, pitch to clubs, manage deals, track commissions." },
  { icon: Building2, title: "Clubs", desc: "Post requirements, receive pitches, manage negotiations." },
  { icon: Search, title: "Scouts", desc: "Submit reports into pipeline, earn finder's fees." },
  { icon: Network, title: "Reps & Introducers", desc: "Collaborate on deals, earn referral commissions." },
  { icon: Users, title: "Players", desc: "Track deal progress, understand agent fees." },
];

const comparison = [
  { old: "WhatsApp groups", new: "Structured deal rooms" },
  { old: "Excel tracking", new: "AI-powered CRM" },
  { old: "Manual compliance", new: "Automated FFAR checks" },
  { old: "Fragmented contacts", new: "Unified network" },
  { old: "No data", new: "Market intelligence + AI" },
  { old: "Phone / email", new: "Integrated messaging" },
];

const pricing = [
  {
    tier: "Starter",
    price: "Free",
    desc: "Get started on the marketplace",
    features: ["View marketplace", "3 pitches/month", "Basic profile"],
  },
  {
    tier: "Pro Agent",
    price: "€99",
    period: "/mo",
    desc: "For active licensed agents",
    features: ["Unlimited pitches", "Deal rooms", "Compliance tools", "Basic Jose AI"],
    popular: true,
  },
  {
    tier: "Elite Agent",
    price: "€249",
    period: "/mo",
    desc: "Full power for top agents",
    features: ["Everything in Pro", "Financial suite", "Advanced AI", "Priority matching", "API access"],
  },
  {
    tier: "Club",
    price: "€499",
    period: "/mo",
    desc: "For clubs and sporting directors",
    features: ["Full marketplace", "Requirements posting", "Inbound management", "Compliance ledger"],
  },
];

/* ─── Page ─── */

export default function DealRoomPage() {
  return (
    <main className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A5568]/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Inter DealRoom™</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#C0C7CE] font-medium mb-4">
            Football&apos;s Transfer Marketplace. Reimagined.
          </p>
          <p className="text-base sm:text-lg text-[#7B8794] max-w-3xl mx-auto mb-8">
            The only platform where agents, clubs, scouts, reps, and introducers discover opportunities,
            negotiate transfers, and close deals — with FIFA compliance built in and AI intelligence at every step.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-[#7B8794] mt-1">{s.label.replace(s.value, "").trim() || s.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link href="/join" className="gradient-steel-btn px-8 py-3 rounded-full text-white font-semibold inline-flex items-center gap-2">
              Get Early Access <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/docs" className="px-8 py-3 rounded-full border border-[#4A5568] text-[#C0C7CE] font-semibold hover:bg-white/5 transition-colors">
              View PRD
            </Link>
          </div>

          {/* MacBook Mockup */}
          <div className="max-w-4xl mx-auto">
            <MacBookFrame>
              <DealRoomMockup />
            </MacBookFrame>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-[#7B8794] text-center max-w-2xl mx-auto mb-12">
            From discovery to deal completion — a structured lifecycle for every transfer.
          </p>

          {/* Desktop: horizontal stepper */}
          <div className="hidden md:grid grid-cols-6 gap-4">
            {lifecycle.map((step, i) => (
              <div key={step.step} className="text-center relative">
                <div className="w-12 h-12 rounded-xl gradient-steel mx-auto flex items-center justify-center mb-3">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                {i < lifecycle.length - 1 && (
                  <div className="absolute top-6 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-px bg-[#4A5568]/40" />
                )}
                <div className="text-xs text-[#9AAAB8] font-semibold mb-1">Step {step.step}</div>
                <div className="text-sm font-semibold text-white mb-1">{step.title}</div>
                <div className="text-xs text-[#7B8794]">{step.desc}</div>
              </div>
            ))}
          </div>

          {/* Mobile: vertical stepper */}
          <div className="md:hidden flex flex-col gap-6">
            {lifecycle.map((step, i) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-lg gradient-steel flex items-center justify-center shrink-0">
                    <step.icon className="w-4 h-4 text-white" />
                  </div>
                  {i < lifecycle.length - 1 && <div className="w-px flex-1 bg-[#4A5568]/40 mt-2" />}
                </div>
                <div className="pb-4">
                  <div className="text-xs text-[#9AAAB8] font-semibold">Step {step.step}</div>
                  <div className="text-sm font-semibold text-white">{step.title}</div>
                  <div className="text-xs text-[#7B8794]">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Marketplace ─── */}
      <section className="py-20 px-4 border-t border-[#4A5568]/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">The Marketplace</span>
          </h2>
          <p className="text-[#7B8794] text-center max-w-2xl mx-auto mb-12">
            Two sides of the transfer market, connected by intelligence.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Player Availability Board */}
            <div className="card p-6">
              <div className="w-10 h-10 rounded-lg gradient-steel flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Player Availability Board</h3>
              <p className="text-sm text-[#7B8794] mb-4">
                Agents list players as Available, Loan, or Seeking Club. Protected listings ensure one agent per player.
                Jose AI auto-generates pitch summaries from player data.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Available", "Loan", "Seeking Club"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-[#4A5568]/20 text-[#9AAAB8] border border-[#4A5568]/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Club Requirements Board */}
            <div className="card p-6">
              <div className="w-10 h-10 rounded-lg gradient-steel flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Club Requirements Board</h3>
              <p className="text-sm text-[#7B8794] mb-4">
                Clubs post exactly what they need — position, budget, timeline. Public or private listings.
                Auto-matching sends notifications when a player fits.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Position", "Budget", "Timeline"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-[#4A5568]/20 text-[#9AAAB8] border border-[#4A5568]/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Additional marketplace features */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card card-hover p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#5A6B7A]/20 flex items-center justify-center shrink-0">
                <Handshake className="w-5 h-5 text-[#9AAAB8]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Loan Marketplace</div>
                <div className="text-xs text-[#7B8794]">Dedicated marketplace for loan deals with option-to-buy tracking.</div>
              </div>
            </div>
            <div className="card card-hover p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#5A6B7A]/20 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-[#9AAAB8]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Free Agent Pool</div>
                <div className="text-xs text-[#7B8794]">Browse and pitch free agents with contract-expired status.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Deal Rooms ─── */}
      <section className="py-20 px-4 border-t border-[#4A5568]/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Deal Rooms</span>
          </h2>
          <p className="text-[#7B8794] text-center max-w-2xl mx-auto mb-12">
            The structured workspace where transfers happen. Every party, every document, every decision — in one place.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dealRoomFeatures.map((f) => (
              <div key={f.title} className="card card-hover p-6">
                <div className="w-10 h-10 rounded-lg gradient-steel flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{f.title}</h3>
                <p className="text-xs text-[#7B8794]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Jose AI in DealRoom ─── */}
      <section className="py-20 px-4 border-t border-[#4A5568]/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Jose AI in DealRoom</span>
          </h2>
          <p className="text-[#7B8794] text-center max-w-2xl mx-auto mb-12">
            Your AI copilot analyses every deal, flags risks, and surfaces opportunities you&apos;d miss.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((f) => (
              <div key={f.title} className="card card-hover p-6">
                <div className="w-10 h-10 rounded-lg gradient-steel flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{f.title}</h3>
                <div className="bg-[#4A5568]/10 border border-[#4A5568]/20 rounded-lg p-3 mt-2">
                  <div className="flex items-start gap-2">
                    <Brain className="w-3.5 h-3.5 text-[#9AAAB8] mt-0.5 shrink-0" />
                    <p className="text-xs text-[#C0C7CE] italic">&ldquo;{f.quote}&rdquo;</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Compliance Engine ─── */}
      <section className="py-20 px-4 border-t border-[#4A5568]/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Compliance Engine</span>
          </h2>
          <p className="text-[#7B8794] text-center max-w-2xl mx-auto mb-12">
            FIFA regulations enforced automatically. Every deal compliant by default.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {complianceFeatures.map((f) => (
              <div key={f.title} className="card card-hover p-6">
                <div className="w-10 h-10 rounded-lg gradient-steel flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{f.title}</h3>
                <p className="text-xs text-[#7B8794]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Financial Suite ─── */}
      <section className="py-20 px-4 border-t border-[#4A5568]/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Financial Suite</span>
          </h2>
          <p className="text-[#7B8794] text-center max-w-2xl mx-auto mb-12">
            Track every euro. From commissions to contingencies.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialFeatures.map((f) => (
              <div key={f.title} className="card card-hover p-6 text-center">
                <div className="w-10 h-10 rounded-lg gradient-steel flex items-center justify-center mb-4 mx-auto">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{f.title}</h3>
                <p className="text-xs text-[#7B8794]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Built For Every Role ─── */}
      <section className="py-20 px-4 border-t border-[#4A5568]/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Built For Every Role</span>
          </h2>
          <p className="text-[#7B8794] text-center max-w-2xl mx-auto mb-12">
            Whether you represent, recruit, scout, or play — DealRoom works for you.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {roles.map((r) => (
              <div key={r.title} className="card card-hover p-6">
                <div className="w-10 h-10 rounded-lg gradient-steel flex items-center justify-center mb-4">
                  <r.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{r.title}</h3>
                <p className="text-xs text-[#7B8794]">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── vs The Old Way ─── */}
      <section className="py-20 px-4 border-t border-[#4A5568]/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">vs The Old Way</span>
          </h2>
          <p className="text-[#7B8794] text-center max-w-2xl mx-auto mb-12">
            The industry has been stuck in the past. Until now.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {comparison.map((c) => (
              <div key={c.old} className="card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <X className="w-4 h-4 text-[#7B8794]" />
                  <span className="text-sm text-[#7B8794] line-through">{c.old}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#9AAAB8]" />
                  <span className="text-sm text-white font-medium">{c.new}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section className="py-20 px-4 border-t border-[#4A5568]/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-[#7B8794] text-center max-w-2xl mx-auto mb-12">
            Start free. Scale when you&apos;re ready.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((p) => (
              <div key={p.tier} className={`card p-6 relative ${p.popular ? "border-[#9AAAB8]/40" : ""}`}>
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-semibold gradient-steel text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold text-white mb-1">{p.tier}</h3>
                <div className="mb-2">
                  <span className="text-2xl font-bold text-white">{p.price}</span>
                  {p.period && <span className="text-sm text-[#7B8794]">{p.period}</span>}
                </div>
                <p className="text-xs text-[#7B8794] mb-4">{p.desc}</p>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[#C0C7CE]">
                      <Check className="w-3.5 h-3.5 text-[#9AAAB8] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-20 px-4 border-t border-[#4A5568]/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Ready to close your next deal?</span>
          </h2>
          <p className="text-[#7B8794] mb-8">
            Join the platform that&apos;s redefining how football transfers happen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/join?role=agent" className="gradient-steel-btn px-8 py-3 rounded-full text-white font-semibold inline-flex items-center gap-2">
              Get Early Access <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/inter-os" className="px-8 py-3 rounded-full border border-[#4A5568] text-[#C0C7CE] font-semibold hover:bg-white/5 transition-colors">
              Explore Inter OS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
