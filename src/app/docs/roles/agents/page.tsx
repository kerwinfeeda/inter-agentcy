import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function ForAgents() {
  const { prev, next } = getPrevNext("/docs/roles/agents");

  return (
    <DocsContent>
      <h1>For Licensed Agents</h1>
      <p className="subtitle">
        Enterprise-grade tools, compliance automation, and a global network — everything an independent licensed agent needs to compete with the mega-agencies.
      </p>

      <Callout type="highlight" title="Your Business, Supercharged">
        Inter Agentcy gives you the infrastructure of a top agency while you maintain complete independence. Think of it as having a full back-office team, legal department, and global scout network — without the overhead.
      </Callout>

      <h2>Your Workflow on Inter Agentcy</h2>
      <ol>
        <li><strong>Morning Brief</strong> — Dashboard shows overnight market movements, contract expiry alerts, incoming scout reports, and scheduled meetings for the day.</li>
        <li><strong>Client Management</strong> — Review your CRM pipeline. Check which players have active negotiations, update interaction logs from yesterday&apos;s meetings, follow up on pending proposals.</li>
        <li><strong>Deal Room</strong> — Browse new club requirements that match your portfolio. A Belgian club needs a left-back — your client fits perfectly. Submit the dossier with one click.</li>
        <li><strong>Scouting Review</strong> — A scout in Nigeria flagged a promising 17-year-old striker. Review the full report with video clips, compare with similar players, and decide whether to pursue representation.</li>
        <li><strong>Contract Work</strong> — Generate a representation agreement from the FIFA-standard template. The system auto-checks commission caps. Send for digital signature.</li>
        <li><strong>Negotiation</strong> — Use the scenario modeler to prepare three different deal structures for tomorrow&apos;s meeting with a Spanish club. Calculate commission implications for each.</li>
        <li><strong>Compliance</strong> — Automated Clearing House integration processes a payment from last month&apos;s completed transfer. Audit trail updated automatically.</li>
      </ol>

      <h2>What You Get by Tier</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Basic (Free)</th>
            <th>Pro (€99/mo)</th>
            <th>Enterprise (Custom)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>CRM contacts</td><td>Up to 25</td><td>Unlimited</td><td>Unlimited</td></tr>
          <tr><td>Contract templates</td><td>Basic FIFA forms</td><td>Full library + custom</td><td>Custom firm templates</td></tr>
          <tr><td>Commission split</td><td>70:30</td><td>85:15</td><td>90-100:0-10</td></tr>
          <tr><td>Deal Room access</td><td>View only</td><td>Full access</td><td>Priority placement</td></tr>
          <tr><td>Scouting data</td><td>Basic stats</td><td>Full integrations</td><td>Full + API access</td></tr>
          <tr><td>Analytics</td><td>Basic dashboard</td><td>Full suite + AI predictions</td><td>Custom dashboards</td></tr>
          <tr><td>Legal support</td><td>Self-service</td><td>Helpdesk access</td><td>Dedicated legal counsel</td></tr>
          <tr><td>Compliance tools</td><td>Basic checks</td><td>Full automation</td><td>Firm-wide controls</td></tr>
          <tr><td>Community</td><td>Forums</td><td>Forums + mentorship</td><td>VIP events + advisory</td></tr>
        </tbody>
      </table>

      <h2>Why Agents Choose Inter Agentcy</h2>
      <ul>
        <li><strong>Save 10+ hours per week</strong> — Automated compliance, integrated tools, and streamlined workflows eliminate manual busywork.</li>
        <li><strong>Close more deals</strong> — The Deal Room and network connections surface opportunities you&apos;d never find on your own.</li>
        <li><strong>Stay compliant effortlessly</strong> — FIFA regulation changes are automatically reflected in templates, cap checks, and Clearing House processes.</li>
        <li><strong>Compete with anyone</strong> — The same caliber of tools and data that CAA Stellar and Gestifute use, at a fraction of the cost.</li>
        <li><strong>Grow your network</strong> — Scouts bring you talent, introducers bring you clubs, representatives handle the commercial side. Focus on what you do best: closing deals.</li>
      </ul>

      <Callout type="tip" title="Free to Start">
        The Basic tier is completely free. Start using the platform today, and upgrade to Pro when you&apos;re ready for the full suite. The 85:15 commission split alone pays for the subscription on your first deal.
      </Callout>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
