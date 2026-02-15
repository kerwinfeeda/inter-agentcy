import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function Ecosystem() {
  const { prev, next } = getPrevNext("/docs/platform/ecosystem");

  return (
    <DocsContent>
      <h1>The Ecosystem</h1>
      <p className="subtitle">
        Inter Agentcy is a multi-sided marketplace where four distinct roles — Licensed Agents, Scouts, Representatives, and Introducers — work together in a self-reinforcing flywheel that creates exponential value.
      </p>

      <h2>How It Works</h2>
      <p>
        Unlike traditional platforms that serve a single user type, Inter Agentcy brings together every stakeholder in the football representation value chain. Each participant type creates value for the others, generating powerful network effects that make the platform more valuable with every new member.
      </p>

      {/* Flywheel Diagram */}
      <div className="my-10 relative">
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-wider text-foreground-dim font-semibold">The Inter Agentcy Flywheel</span>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          {[
            { role: "Scouts", action: "Find Players", color: "#4EBE96", arrow: "→" },
            { role: "Representatives", action: "Develop Careers", color: "#9AAAB8", arrow: "↓" },
            { role: "Agents", action: "Close Deals", color: "#7B8794", arrow: "←" },
            { role: "Introducers", action: "Link Networks", color: "#C0C7CE", arrow: "↑" },
          ].map((item) => (
            <div
              key={item.role}
              className="relative p-5 rounded-xl bg-background-card border border-border text-center"
            >
              <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ background: `${item.color}20` }}>
                <span className="text-lg font-bold" style={{ color: item.color }}>{item.arrow}</span>
              </div>
              <p className="font-semibold text-foreground text-sm">{item.role}</p>
              <p className="text-xs text-foreground-muted mt-1">{item.action}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <p className="text-xs text-foreground-dim">Everyone earns → Attracts more participants → Cycle accelerates</p>
        </div>
      </div>

      <h2>The Flywheel in Action</h2>
      <p>Here&apos;s how a typical cycle works on Inter Agentcy:</p>
      <ol>
        <li><strong>Scouts identify talent</strong> — A scout in West Africa discovers a promising 18-year-old midfielder and submits a detailed scouting report with video analysis and statistical profile.</li>
        <li><strong>Representatives develop the player</strong> — A representative begins managing the player&apos;s brand, social media presence, and local sponsorship opportunities, building their market value.</li>
        <li><strong>Agents negotiate deals</strong> — A licensed agent reviews the scouting report, connects with the player through the introducer network, and negotiates a transfer to a European club.</li>
        <li><strong>Introducers facilitate connections</strong> — An introducer with club contacts in Belgium and Portugal facilitates the initial meetings between the agent and sporting directors.</li>
        <li><strong>Everyone earns</strong> — The agent earns their commission (within FIFA caps), the scout receives a finder&apos;s fee, the representative earns from brand deals, and the introducer gets a referral commission.</li>
        <li><strong>Success attracts more participants</strong> — Word spreads, more professionals join the platform, and the cycle accelerates with more talent, more connections, and more deals.</li>
      </ol>

      <Callout type="highlight" title="Network Effects">
        Each new participant makes the platform more valuable for everyone else. More scouts mean more talent discovery. More agents mean more deals closed. More introducers mean more connections. This self-reinforcing dynamic is Inter Agentcy&apos;s core competitive moat.
      </Callout>

      <h2>Value Creation Per Role</h2>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Value They Create</th>
            <th>Value They Receive</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Licensed Agents</strong></td>
            <td>Close deals, generate commissions, provide legal negotiation expertise</td>
            <td>Client pipeline from scouts/introducers, compliance tools, scouting data, career management support</td>
          </tr>
          <tr>
            <td><strong>Scouts</strong></td>
            <td>Discover talent, create detailed reports, expand geographic coverage</td>
            <td>Finder&apos;s fees, agent connections, scouting tools, professional development</td>
          </tr>
          <tr>
            <td><strong>Representatives</strong></td>
            <td>Develop player brands, manage careers, create sponsorship value</td>
            <td>Player pipeline, brand deal opportunities, legal consultation, career planning tools</td>
          </tr>
          <tr>
            <td><strong>Introducers</strong></td>
            <td>Connect stakeholders, bridge geographic/cultural gaps, expand network reach</td>
            <td>Referral commissions, platform visibility, network analytics</td>
          </tr>
        </tbody>
      </table>

      <h2>Platform Architecture</h2>
      <p>
        The ecosystem is powered by a unified web platform with a companion mobile app, all built on enterprise-grade encryption. The platform is designed to be user-friendly for non-technical professionals who are constantly on the go — at matches, in meetings, or traveling between countries.
      </p>
      <p>
        Every role has a customized dashboard showing relevant information, tools, and opportunities. Cross-role interactions happen seamlessly through the shared Deal Room, messaging system, and notification engine.
      </p>

      <h2>Governance & Trust</h2>
      <p>
        Trust is the currency of football representation. Inter Agentcy builds trust through:
      </p>
      <ul>
        <li><strong>Verified credentials</strong> — FIFA license verification for agents, identity verification for all users</li>
        <li><strong>Transparent reputation</strong> — Track records, successful deals, and peer ratings visible on profiles</li>
        <li><strong>Audit trails</strong> — Every interaction, introduction, and transaction is logged and auditable</li>
        <li><strong>FIFA compliance</strong> — Platform-enforced compliance with FFAR 2023 regulations</li>
        <li><strong>Dispute resolution</strong> — Built-in mechanisms aligned with CAS arbitration standards</li>
      </ul>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
