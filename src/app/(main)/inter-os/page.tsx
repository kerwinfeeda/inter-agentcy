import Link from "next/link";
import {
  Smartphone,
  Brain,
  Network,
  Users,
  Search,
  Shield,
  BarChart3,
  FileText,
  DollarSign,
  Globe,
  Handshake,
  Building2,
  UserCheck,
  MessageSquare,
  Calendar,
  Video,
  Database,
  Bell,
  Layers,
  Briefcase,
  Target,
  ArrowRight,
  Check,
  X,
  Bot,
  Compass,
  Scale,
  LineChart,
  FileSearch,
  Route,
} from "lucide-react";
import MacBookFrame from "@/components/devices/MacBookFrame";
import PhoneFrame from "@/components/devices/PhoneFrame";
import DashboardMockup from "@/components/showcase/DashboardMockup";
import MobileMockup from "@/components/showcase/MobileMockup";

export const metadata = {
  title: "Inter OS — The Operating System for Football | Inter Agentcy",
  description:
    "One platform. Every tool. All stakeholders. The complete technology stack for agents, scouts, reps, introducers, clubs, and players.",
};

/* ─── Data ─── */

const pillars = [
  {
    icon: Smartphone,
    title: "Mobile-First",
    desc: "Built for professionals on the move. Scout at matches, negotiate on the go, manage your portfolio from anywhere.",
  },
  {
    icon: Brain,
    title: "AI-Powered",
    desc: "Jose AI, your copilot for scouting, compliance, deal analysis, and market intelligence.",
  },
  {
    icon: Network,
    title: "Fully Connected",
    desc: "Every stakeholder, every tool, one ecosystem. No more fragmented workflows.",
  },
];

const roles = [
  {
    role: "For Licensed Agents",
    icon: Briefcase,
    features: [
      { name: "Agent CRM", desc: "Player pipeline, contract tracking, deal flow" },
      { name: "Deal Room", desc: "Structured negotiations, document sharing, compliance" },
      { name: "Compliance Dashboard", desc: "FIFA FFAR tracking, licence renewal, audit logs" },
      { name: "Financial Suite", desc: "Commission tracking, invoicing, fee management" },
      { name: "Network Hub", desc: "Connect with scouts, clubs, reps, other agents" },
    ],
  },
  {
    role: "For Scouts",
    icon: Search,
    features: [
      { name: "Scouting Dashboard", desc: "Report builder, player tracking, video tagging" },
      { name: "Talent Pipeline", desc: "From identification to recommendation to agent handoff" },
      { name: "Match Analysis", desc: "Live scouting at matches with mobile tools" },
      { name: "Earnings Tracker", desc: "Finder's fee tracking and commission attribution" },
      { name: "Data Integrations", desc: "Wyscout, StatsBomb, performance analytics" },
    ],
  },
  {
    role: "For Reps & Introducers",
    icon: Handshake,
    features: [
      { name: "Client Management", desc: "Player branding, media, career planning" },
      { name: "Referral Engine", desc: "Track introductions, earn commissions automatically" },
      { name: "Network Mapping", desc: "Visualise your connections and reach" },
      { name: "Opportunity Feed", desc: "Deals seeking collaborators, clubs seeking talent" },
    ],
  },
  {
    role: "For Clubs",
    icon: Building2,
    features: [
      { name: "Recruitment Dashboard", desc: "Inbound player submissions from verified agents" },
      { name: "Agent Directory", desc: "Find verified agents for specific markets/positions" },
      { name: "Transfer Hub", desc: "Manage all intermediary relationships in one place" },
      { name: "Compliance Ledger", desc: "Full audit trail of agent interactions" },
    ],
  },
  {
    role: "For Players",
    icon: Users,
    features: [
      { name: "Agent Finder", desc: "Search verified agents by specialisation and track record" },
      { name: "Career Dashboard", desc: "Contracts, earnings, representation timeline" },
      { name: "Market Value Tracker", desc: "Understand your value in the market" },
      { name: "Transparency", desc: "See exactly what your agent earns and why" },
    ],
  },
];

const joseFeatures = [
  { icon: Compass, title: "Scouting Copilot", desc: "\"Find me left-backs under 23 from West Africa with Ligue 1 experience\"" },
  { icon: Scale, title: "Deal Analyst", desc: "Analyse offer terms, compare market rates, flag compliance issues" },
  { icon: Shield, title: "Compliance Assistant", desc: "Auto-check FIFA FFAR rules, flag risks, prepare documentation" },
  { icon: LineChart, title: "Market Intelligence", desc: "Transfer trends, fee benchmarks, window analysis" },
  { icon: FileSearch, title: "Contract Reviewer", desc: "Parse and summarise contract terms, highlight key clauses" },
  { icon: Route, title: "Network Navigator", desc: "Suggest connections, identify introduction paths, map relationships" },
];

const stackItems = [
  { icon: Users, label: "Agent CRM" },
  { icon: Search, label: "Scouting Tools" },
  { icon: Handshake, label: "Deal Rooms" },
  { icon: Shield, label: "Compliance Engine" },
  { icon: DollarSign, label: "Financial Suite" },
  { icon: Globe, label: "Agent Directory" },
  { icon: Building2, label: "Club Portal" },
  { icon: UserCheck, label: "Player Profiles" },
  { icon: Network, label: "Network Graph" },
  { icon: MessageSquare, label: "Messaging" },
  { icon: BarChart3, label: "Analytics" },
  { icon: FileText, label: "Documents" },
  { icon: Calendar, label: "Calendar" },
  { icon: Video, label: "Video Analysis" },
  { icon: Database, label: "Market Data" },
  { icon: Brain, label: "AI Copilot" },
  { icon: Smartphone, label: "Mobile App" },
  { icon: Bell, label: "Notifications" },
  { icon: Target, label: "Search" },
  { icon: Layers, label: "Integrations" },
];

const mobileCapabilities = [
  "Scout at matches — tag players, record notes, capture video",
  "Deal alerts — real-time notifications when offers come in",
  "Quick compliance checks — verify agent credentials on the spot",
  "Network messaging — reach any stakeholder instantly",
  "Full dashboard — everything from desktop, optimised for phone",
];

const comparison = [
  { without: "WhatsApp groups for deals", with: "Structured deal rooms with audit trails" },
  { without: "Excel for player tracking", with: "AI-powered CRM with analytics" },
  { without: "Manual compliance checks", with: "Automated FIFA FFAR monitoring" },
  { without: "Fragmented contacts", with: "Unified stakeholder network" },
  { without: "No data insights", with: "Market intelligence + AI copilot" },
  { without: "Phone calls and emails", with: "Integrated messaging + notifications" },
];

/* ─── Page ─── */

export default function InterOSPage() {
  return (
    <main className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-steel opacity-10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Inter OS</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-[#9AAAB8] font-medium">
            The Operating System for Football
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-[#7B8794] text-lg leading-relaxed">
            One platform. Every tool. All stakeholders. The complete technology
            stack for agents, scouts, reps, introducers, clubs, and players.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/join"
              className="px-8 py-3.5 gradient-steel-btn text-white font-semibold rounded-lg text-lg transition-all"
            >
              Get Early Access
            </Link>
            <Link
              href="#demo"
              className="px-8 py-3.5 border border-[#4A5568] text-[#C0C7CE] font-semibold rounded-lg text-lg hover:bg-white/5 transition-all"
            >
              Watch Demo
            </Link>
          </div>

          {/* Device frames */}
          <div className="mt-20 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            <MacBookFrame className="w-full max-w-2xl">
              <DashboardMockup />
            </MacBookFrame>
            <PhoneFrame className="hidden sm:block">
              <MobileMockup />
            </PhoneFrame>
          </div>
        </div>
      </section>

      {/* ─── What Is Inter OS? ─── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
            What Is Inter OS?
          </h2>
          <p className="mt-6 text-[#9AAAB8] text-lg leading-relaxed max-w-3xl mx-auto">
            Inter OS is the technology enablement layer for the entire football
            intermediary industry. Like how Uber built an app that turned anyone
            with a car into a driver, Inter OS turns licensed agents, scouts,
            reps, and introducers into a connected, data-driven, compliant
            network.
          </p>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="card card-hover p-8 text-center">
                <div className="w-14 h-14 mx-auto rounded-xl gradient-steel flex items-center justify-center mb-6">
                  <p.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-[#7B8794] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Built For Every Role ─── */}
      <section className="py-24 px-4 border-t border-[#4A5568]/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-16">
            Built For Every Role
          </h2>
          <div className="space-y-8">
            {roles.map((r) => (
              <div key={r.role} className="card card-hover p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-steel flex items-center justify-center">
                    <r.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{r.role}</h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {r.features.map((f) => (
                    <div
                      key={f.name}
                      className="p-4 rounded-lg bg-white/[0.02] border border-[#4A5568]/30"
                    >
                      <p className="font-medium text-[#C0C7CE]">{f.name}</p>
                      <p className="text-sm text-[#7B8794] mt-1">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Jose AI ─── */}
      <section className="py-24 px-4 border-t border-[#4A5568]/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 mx-auto rounded-2xl gradient-steel flex items-center justify-center mb-6">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
              Jose AI
            </h2>
            <p className="mt-4 text-xl text-[#9AAAB8]">The AI Copilot</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {joseFeatures.map((f) => (
              <div key={f.title} className="card card-hover p-6">
                <div className="w-10 h-10 rounded-lg gradient-steel flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-[#7B8794] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-[#5A6B7A] text-sm">
            Jose AI is trained on football industry data, FIFA regulations, and
            market intelligence. Available on desktop and mobile.
          </p>
        </div>
      </section>

      {/* ─── The Complete Stack ─── */}
      <section className="py-24 px-4 border-t border-[#4A5568]/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-16">
            The Complete Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
            {stackItems.map((s) => (
              <div
                key={s.label}
                className="card card-hover p-5 flex flex-col items-center gap-3"
              >
                <s.icon className="w-6 h-6 text-[#9AAAB8]" />
                <span className="text-sm font-medium text-[#C0C7CE]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mobile First ─── */}
      <section className="py-24 px-4 border-t border-[#4A5568]/20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8">
              Mobile First
            </h2>
            <ul className="space-y-4">
              {mobileCapabilities.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#9AAAB8] mt-0.5 flex-shrink-0" />
                  <span className="text-[#C0C7CE] leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-shrink-0">
            <PhoneFrame>
              <MobileMockup />
            </PhoneFrame>
          </div>
        </div>
      </section>

      {/* ─── Platform Comparison ─── */}
      <section className="py-24 px-4 border-t border-[#4A5568]/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-16">
            Platform Comparison
          </h2>
          <div className="card overflow-hidden">
            <div className="grid grid-cols-2 text-center text-sm font-semibold text-[#9AAAB8] border-b border-[#4A5568]/30">
              <div className="p-4">Without Inter OS</div>
              <div className="p-4">With Inter OS</div>
            </div>
            {comparison.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 border-b border-[#4A5568]/20 last:border-0"
              >
                <div className="p-4 flex items-start gap-2 text-sm text-[#7B8794]">
                  <X className="w-4 h-4 text-[#5A6B7A] mt-0.5 flex-shrink-0" />
                  {row.without}
                </div>
                <div className="p-4 flex items-start gap-2 text-sm text-[#C0C7CE]">
                  <Check className="w-4 h-4 text-[#9AAAB8] mt-0.5 flex-shrink-0" />
                  {row.with}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-4 border-t border-[#4A5568]/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to run your career on Inter OS?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/join"
              className="px-8 py-3.5 gradient-steel-btn text-white font-semibold rounded-lg text-lg transition-all inline-flex items-center gap-2"
            >
              Join the Network <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/features"
              className="px-8 py-3.5 border border-[#4A5568] text-[#C0C7CE] font-semibold rounded-lg text-lg hover:bg-white/5 transition-all"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
