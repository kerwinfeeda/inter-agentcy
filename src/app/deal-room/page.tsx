import { ArrowRight, FileText, FolderLock, Users, Bell, PenTool, LayoutDashboard } from "lucide-react";

const features = [
  { icon: LayoutDashboard, title: "Deal Pipeline", desc: "Visual Kanban board tracking every deal from identification through to completion. Never lose track of where a deal stands." },
  { icon: FileText, title: "Contract Builder", desc: "FIFA-compliant contract templates with auto-populated clauses. Draft professional contracts in minutes, not hours." },
  { icon: FolderLock, title: "Document Vault", desc: "Secure, encrypted storage for contracts, medical records, work permits, and due diligence documents." },
  { icon: Users, title: "Multi-Party Tracking", desc: "See every stakeholder in a deal — players, agents, buying clubs, selling clubs, lawyers — all in one view." },
  { icon: Bell, title: "Deadline Alerts", desc: "Transfer window countdowns, contract expiry warnings, and registration deadlines. Never miss a critical date." },
  { icon: PenTool, title: "E-Signatures", desc: "Sign deals digitally with legally binding electronic signatures. Close deals from anywhere in the world." },
];

const stages = ["Identification", "First Contact", "Negotiation", "Due Diligence", "Medical", "Completion"];

export default function DealRoomPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background-elevated text-accent text-sm mb-6">
            Coming Soon
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Transfer <br /><span className="gradient-text">Command Center</span>
          </h1>
          <p className="text-foreground-muted text-lg mb-8 max-w-2xl mx-auto">
            Manage every deal from first contact to signature. The Deal Room gives you enterprise-grade tools to execute transfers professionally.
          </p>
        </div>
      </section>

      {/* Pipeline Preview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="card p-8 overflow-x-auto">
            <h3 className="text-sm font-semibold text-foreground-muted mb-6">DEAL PIPELINE PREVIEW</h3>
            <div className="flex gap-4 min-w-[800px]">
              {stages.map((s, i) => (
                <div key={s} className="flex-1">
                  <div className="text-xs font-medium text-foreground-dim mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-background-elevated flex items-center justify-center text-[10px]">{i + 1}</span>
                    {s}
                  </div>
                  <div className="space-y-2">
                    {i < 3 && (
                      <div className="p-3 rounded-lg bg-background-elevated border border-border">
                        <div className="w-8 h-1.5 rounded bg-accent/30 mb-2" />
                        <div className="w-16 h-1.5 rounded bg-foreground-dim/20" />
                      </div>
                    )}
                    {i === 0 && (
                      <div className="p-3 rounded-lg bg-background-elevated border border-border">
                        <div className="w-12 h-1.5 rounded bg-accent/30 mb-2" />
                        <div className="w-20 h-1.5 rounded bg-foreground-dim/20" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Everything you need to close deals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card p-6 card-hover">
                <div className="w-10 h-10 rounded-xl bg-background-elevated flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-foreground-muted text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="py-24 px-4">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Be first in line</h2>
          <p className="text-foreground-muted mb-8">The Deal Room is launching soon. Join the waitlist to get early access.</p>
          <div className="flex gap-3">
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" />
            <button className="px-6 py-3 gradient-steel-btn text-white font-semibold rounded-xl transition-all flex items-center gap-2">
              Join <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
