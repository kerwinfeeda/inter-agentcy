import { Shield, FileText, Scale, AlertTriangle, CheckCircle, BookOpen } from "lucide-react";
import CommissionCalculator from "@/components/CommissionCalculator";
import Link from "next/link";

const regulations = [
  {
    title: "Agent Licensing",
    description: "All agents must pass the FIFA Football Agent Examination and be licensed by their national association.",
    icon: Shield,
  },
  {
    title: "Commission Caps",
    description: "FIFA sets maximum commission rates: 3% of player salary for player agents, up to 10% of transfer fee for selling club agents.",
    icon: Scale,
  },
  {
    title: "Disclosure Requirements",
    description: "Full transparency on all fees, dual representation agreements, and conflicts of interest is mandatory.",
    icon: FileText,
  },
  {
    title: "Representation Agreements",
    description: "Written agreements required for all agent-player and agent-club relationships, with specific mandatory terms.",
    icon: BookOpen,
  },
];

const complianceFeatures = [
  "Automatic commission cap enforcement on every deal",
  "Pre-approved contract templates meeting FIFA standards",
  "Conflict of interest detection and flagging",
  "Dual representation disclosure workflows",
  "Audit-ready documentation for every transaction",
  "Real-time regulation updates as FIFA amends rules",
  "National association compliance variations built in",
  "Secure document storage with tamper-proof records",
];

const templates = [
  { name: "Player Representation Agreement", desc: "Standard FIFA-compliant agreement between agent and player." },
  { name: "Club Mandate Agreement", desc: "Authorization for agent to act on behalf of a club in transfers." },
  { name: "Transfer Commission Agreement", desc: "Commission terms between all parties in a transfer deal." },
  { name: "Dual Representation Disclosure", desc: "Required disclosure when representing multiple parties." },
];

export default function CompliancePage() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            FIFA <span className="gradient-text">Compliance</span>
          </h1>
          <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
            Stay compliant with FIFA Football Agent Regulations. Automatically.
          </p>
        </div>

        {/* Key Regulations */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-8">Key FIFA Regulations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regulations.map((r) => (
              <div key={r.title} className="card rounded-2xl p-6 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <r.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{r.title}</h3>
                  <p className="text-sm text-foreground-muted">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How We Ensure Compliance */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-8">How Inter Agentcy Ensures Compliance</h2>
          <div className="card rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {complianceFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Commission Calculator */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-4">Commission Cap Calculator</h2>
            <p className="text-foreground-muted mb-6">
              Calculate the maximum commission allowed under FIFA Football Agent Regulations for any deal structure.
            </p>
            <div className="card rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm text-foreground-muted">
                  <p className="font-medium text-accent mb-1">Important Note</p>
                  <p>Commission caps are set by FIFA and enforced across all member associations. Exceeding these caps can result in sanctions, license suspension, or revocation. Inter Agentcy automatically enforces these limits on all platform transactions.</p>
                </div>
              </div>
            </div>
          </div>
          <CommissionCalculator />
        </div>

        {/* Contract Templates */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-8">Contract Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {templates.map((t) => (
              <div key={t.name} className="card rounded-xl p-6 flex items-start gap-4 card-hover cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t.name}</h3>
                  <p className="text-sm text-foreground-muted">{t.desc}</p>
                  <p className="text-xs text-accent mt-2">Available with Pro & Elite plans →</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/join"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-steel-btn text-white font-semibold rounded-xl transition-all"
          >
            Get Compliant Today
          </Link>
        </div>
      </div>
    </div>
  );
}
