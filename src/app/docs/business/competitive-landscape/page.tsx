import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function CompetitiveLandscape() {
  const { prev, next } = getPrevNext("/docs/business/competitive-landscape");

  return (
    <DocsContent>
      <h1>Competitive Landscape</h1>
      <p className="subtitle">
        Inter Agentcy occupies a unique position in the market — combining high-technology tools with a deep industry network. No existing solution offers both.
      </p>

      <h2>Feature Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Capability</th>
            <th>Inter Agentcy</th>
            <th>Traditional Agencies</th>
            <th>Generic CRM (Salesforce, HubSpot)</th>
            <th>Scouting Apps (Wyscout, InStat)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Football-Specific CRM</strong></td>
            <td>✅ Purpose-built</td>
            <td>❌ Spreadsheets/paper</td>
            <td>⚠️ Requires customization</td>
            <td>❌</td>
          </tr>
          <tr>
            <td><strong>Contract &amp; Compliance Tools</strong></td>
            <td>✅ FIFA templates + auto checks</td>
            <td>⚠️ Manual/legal counsel</td>
            <td>❌</td>
            <td>❌</td>
          </tr>
          <tr>
            <td><strong>FFAR Commission Cap Enforcement</strong></td>
            <td>✅ Automated</td>
            <td>⚠️ Manual</td>
            <td>❌</td>
            <td>❌</td>
          </tr>
          <tr>
            <td><strong>FIFA Clearing House Integration</strong></td>
            <td>✅ Built-in</td>
            <td>⚠️ Manual submission</td>
            <td>❌</td>
            <td>❌</td>
          </tr>
          <tr>
            <td><strong>Scouting &amp; Player Data</strong></td>
            <td>✅ Integrated feeds</td>
            <td>⚠️ Separate subscriptions</td>
            <td>❌</td>
            <td>✅ Core feature</td>
          </tr>
          <tr>
            <td><strong>Transfer Market / Deal Room</strong></td>
            <td>✅ Multi-sided marketplace</td>
            <td>⚠️ Informal networks</td>
            <td>❌</td>
            <td>❌</td>
          </tr>
          <tr>
            <td><strong>Agent Network &amp; Collaboration</strong></td>
            <td>✅ Built-in community</td>
            <td>✅ Personal networks</td>
            <td>❌</td>
            <td>❌</td>
          </tr>
          <tr>
            <td><strong>Analytics &amp; Valuations</strong></td>
            <td>✅ AI-powered</td>
            <td>❌</td>
            <td>⚠️ Generic analytics</td>
            <td>✅ Player stats only</td>
          </tr>
          <tr>
            <td><strong>Multi-Role Support</strong></td>
            <td>✅ Agents, Scouts, Reps, Introducers</td>
            <td>❌ Agents only</td>
            <td>❌</td>
            <td>⚠️ Scouts only</td>
          </tr>
          <tr>
            <td><strong>Cost for Independent Agent</strong></td>
            <td>Free to €99/mo</td>
            <td>30–50% commission share</td>
            <td>$75–300/mo + customization</td>
            <td>€100–500/mo (data only)</td>
          </tr>
        </tbody>
      </table>

      <h2>Market Positioning</h2>
      <p>
        The competitive landscape can be understood along two axes: <strong>Technology Sophistication</strong> and <strong>Network/Industry Depth</strong>.
      </p>

      <h3>The Quadrant</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Low Network</th>
            <th>High Network</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>High Tech</strong></td>
            <td>Generic CRM &amp; Scouting Apps</td>
            <td><strong>Inter Agentcy ✦</strong></td>
          </tr>
          <tr>
            <td><strong>Low Tech</strong></td>
            <td>Spreadsheets &amp; email</td>
            <td>Traditional Agencies</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li><strong>Generic CRMs</strong> (Salesforce, HubSpot) offer powerful technology but zero football industry context, no compliance features, and no network</li>
        <li><strong>Scouting platforms</strong> (Wyscout, InStat) provide excellent data but only cover one slice of the agent&apos;s needs — no CRM, no contracts, no deal marketplace</li>
        <li><strong>Traditional agencies</strong> (CAA, Stellar, Gestifute) have deep networks and relationships but operate on outdated technology and charge heavy commission shares (30–50%)</li>
        <li><strong>Inter Agentcy</strong> uniquely combines high technology with high network depth — a full tech stack plus a multi-sided marketplace</li>
      </ul>

      <Callout type="highlight" title="The Only End-to-End Solution">
        No competitor offers CRM + compliance + contracts + scouting + marketplace + analytics in a single platform purpose-built for football agents. This is Inter Agentcy&apos;s core differentiation.
      </Callout>

      <h2>Competitive Moat</h2>
      <p>
        Inter Agentcy builds defensibility through three reinforcing moats:
      </p>

      <h3>1. Network Effects</h3>
      <p>
        As a multi-sided marketplace, each new participant increases value for all others. More agents attract more scouts and clubs. More scouts bring better player discovery. More clubs create more deal opportunities. This flywheel effect compounds over time, making the platform exponentially more valuable and harder for competitors to replicate.
      </p>

      <h3>2. Switching Costs</h3>
      <p>
        Once an agent builds their business on Inter Agentcy — client database, deal history, compliance records, network connections, reputation score — moving to a competitor means leaving all of that behind. The longer a user stays, the higher the switching cost.
      </p>
      <ul>
        <li>CRM data and client relationships</li>
        <li>Transaction history and audit trails</li>
        <li>Verified reputation and profile</li>
        <li>Network connections across roles</li>
        <li>Customized workflows and templates</li>
      </ul>

      <h3>3. Compliance-First Design</h3>
      <p>
        Being built around FIFA regulations from day one — not bolted on as an afterthought — means Inter Agentcy&apos;s compliance features are deeply integrated into every workflow. Any competitor entering this space would need to build the same regulatory expertise and integration, which takes years and significant domain knowledge.
      </p>

      <Callout type="info" title="Why Not Just Use Salesforce?">
        A football agent could technically customize Salesforce for their needs — but it would cost thousands in setup, lack FIFA compliance features, have no football data integrations, no marketplace, and no community. Inter Agentcy provides all of this out of the box, purpose-built, at a fraction of the cost.
      </Callout>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
