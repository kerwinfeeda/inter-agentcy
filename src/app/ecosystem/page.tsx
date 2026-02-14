import Link from "next/link";
import { Shield, Search, Users, Link2, ArrowRight, ArrowDown, Building2, CheckCircle, DollarSign, RefreshCw } from "lucide-react";

const flowSteps = [
  {
    icon: Search,
    title: "Scouts",
    color: "from-success to-emerald-500",
    borderColor: "border-success/30",
    description: "Discover talent across the globe. Create scouting reports, upload video, track player development.",
    action: "Find talent →",
  },
  {
    icon: Users,
    title: "Representatives",
    color: "from-purple-400 to-violet-500",
    borderColor: "border-purple-400/30",
    description: "Manage player careers, build personal brands, develop social media presence, plan career trajectories.",
    action: "Manage careers →",
  },
  {
    icon: Shield,
    title: "Licensed Agents",
    color: "from-accent to-accent-light",
    borderColor: "border-accent/30",
    description: "Execute transfers, negotiate contracts, handle FIFA-regulated transactions. The licensed backbone of every deal.",
    action: "Execute deals →",
  },
  {
    icon: Building2,
    title: "Clubs",
    color: "from-accent to-amber-400",
    borderColor: "border-accent/30",
    description: "Access verified talent pipelines, work with compliant agents, streamline recruitment and transfers.",
    action: "Sign players",
  },
];

const compliancePoints = [
  { title: "Scouts feed agents", description: "Scouts discover talent and earn finder's fees. When a deal materializes, the licensed agent handles all regulated activities." },
  { title: "Reps work through agents", description: "Representatives manage player careers and brands, but all contract negotiations and transfers flow through a licensed agent on the platform." },
  { title: "Introducers earn referrals", description: "Introducers connect parties and earn referral commissions. The licensed agent always executes the regulated transaction." },
  { title: "Agents stay compliant", description: "Every deal on the platform is automatically checked against FIFA Football Agent Regulations. Commission caps, disclosure requirements, and documentation are enforced." },
];

const revenueFlows = [
  { role: "Scout", example: "Discovers a player in Nigeria", earns: "Finder's fee (% of agent commission)", split: "Up to 75/25" },
  { role: "Representative", example: "Manages player brand & career", earns: "Management fee + deal split", split: "Up to 80/20" },
  { role: "Licensed Agent", example: "Executes €5M transfer", earns: "Agent commission (FIFA-capped)", split: "Up to 85/15" },
  { role: "Introducer", example: "Connects player with club", earns: "Referral commission", split: "Up to 15% of deal commission" },
];

export default function EcosystemPage() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="gradient-text">Ecosystem</span>
          </h1>
          <p className="text-lg text-foreground-muted leading-relaxed">
            Football representation isn&apos;t just agents. It&apos;s scouts who discover talent, representatives who
            manage careers, introducers who connect parties, and agents who execute deals. Inter Agentcy brings
            them all together — compliantly.
          </p>
        </div>

        {/* Ecosystem Flow */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-center mb-4">How the Ecosystem Flows</h2>
          <p className="text-foreground-muted text-center mb-12 max-w-xl mx-auto">Every role feeds into the next. Everyone adds value. Everyone earns.</p>

          <div className="relative max-w-4xl mx-auto">
            {/* Connector line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-success/30 via-accent/30 to-accent/30" />

            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-1 md:gap-0">
              {flowSteps.map((step, i) => (
                <div key={step.title}>
                  <div className={`relative flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className={`card rounded-2xl p-6 border ${step.borderColor} inline-block max-w-md`}>
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-3 ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                          <step.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-sm text-foreground-muted leading-relaxed">{step.description}</p>
                        <p className="text-sm text-accent font-medium mt-3">{step.action}</p>
                      </div>
                    </div>
                    <div className="relative z-10 w-12 h-12 rounded-full bg-background border-2 border-border-light flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-white">{i + 1}</span>
                    </div>
                    <div className="flex-1" />
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="flex justify-center my-2 md:my-0">
                      <ArrowDown className="w-5 h-5 text-white/20 md:hidden" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Introducer overlay */}
            <div className="mt-8 card rounded-2xl p-6 border border-accent/20 max-w-md mx-auto text-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-amber-400 flex items-center justify-center mx-auto mb-3">
                <Link2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Introducers</h3>
              <p className="text-sm text-foreground-muted">Connect any parties at any stage. Earn referral commissions on every successful introduction that leads to a deal.</p>
            </div>
          </div>
        </div>

        {/* Compliance Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Everyone Gets Paid. <span className="gradient-text">Everyone Stays Compliant.</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              FIFA regulations require licensed agents for certain activities. Our platform ensures unlicensed
              participants always work through licensed agents — automatically and transparently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {compliancePoints.map((p) => (
              <div key={p.title} className="card rounded-xl p-6 flex gap-4">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm text-foreground-muted">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Flywheel */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              The Revenue <span className="gradient-text">Flywheel</span>
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto">
              More participants → better talent discovery → more deals → more revenue for everyone.
            </p>
          </div>

          {/* Flywheel visual */}
          <div className="card rounded-2xl p-8 mb-10 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              {[
                { label: "Scouts Find", icon: Search, color: "text-success" },
                { label: "Reps Manage", icon: Users, color: "text-purple-400" },
                { label: "Agents Deal", icon: Shield, color: "text-accent" },
                { label: "Everyone Earns", icon: DollarSign, color: "text-accent-light" },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <item.icon className={`w-8 h-8 ${item.color} mb-2`} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  {i < 3 && <ArrowRight className="w-5 h-5 text-white/20 hidden md:block" />}
                  {i < 3 && <ArrowDown className="w-5 h-5 text-white/20 md:hidden" />}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2 text-sm text-foreground-muted">
                <RefreshCw className="w-4 h-4 text-accent" />
                <span>Growth compounds — more deals attract more participants</span>
              </div>
            </div>
          </div>

          {/* Revenue table */}
          <div className="card rounded-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="px-6 py-4 font-medium text-foreground-muted">Role</th>
                    <th className="px-6 py-4 font-medium text-foreground-muted">Example</th>
                    <th className="px-6 py-4 font-medium text-foreground-muted">Earns</th>
                    <th className="px-6 py-4 font-medium text-foreground-muted">Best Split</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueFlows.map((r) => (
                    <tr key={r.role} className="border-b border-border hover:bg-background-elevated">
                      <td className="px-6 py-4 font-semibold">{r.role}</td>
                      <td className="px-6 py-4 text-foreground-muted">{r.example}</td>
                      <td className="px-6 py-4 text-foreground">{r.earns}</td>
                      <td className="px-6 py-4 text-accent font-medium">{r.split}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Find Your Place in the Ecosystem</h2>
              <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
                Agent, scout, representative, or introducer — there&apos;s a plan built for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/agents"
                  className="inline-flex items-center gap-2 px-8 py-4 gradient-steel-btn text-white font-semibold rounded-xl transition-all"
                >
                  View All Plans <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 px-8 py-4 card card-hover text-white font-semibold rounded-xl"
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
