import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function AgentPlans() {
  const { prev, next } = getPrevNext("/docs/pricing/agents");

  return (
    <DocsContent>
      <h1>Agent Plans</h1>
      <p className="subtitle">
        Three tiers designed to match every stage of your career — from newly licensed agents to established multi-agent firms. Every tier includes core platform access; paid tiers unlock better commission splits and advanced tools.
      </p>

      <Callout type="highlight" title="The Commission Split Advantage">
        Unlike traditional host agencies that lock you into fixed splits, Inter Agentcy lets you choose your tier. Upgrading from Basic (70:30) to Pro (85:15) saves you 15% on every commission — the subscription pays for itself on a single deal above ~€8,000 in commission.
      </Callout>

      <h2>Plan Comparison</h2>
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
          <tr>
            <td><strong>Commission Split (Agent:Platform)</strong></td>
            <td>70:30</td>
            <td>85:15</td>
            <td>90-100 : 0-10</td>
          </tr>
          <tr>
            <td><strong>CRM Contacts</strong></td>
            <td>Up to 50</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td><strong>Active Player Clients</strong></td>
            <td>Up to 5</td>
            <td>Up to 50</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td><strong>Contract Templates</strong></td>
            <td>FIFA standard only</td>
            <td>Full library + custom</td>
            <td>Full library + bespoke</td>
          </tr>
          <tr>
            <td><strong>Compliance Checks</strong></td>
            <td>Basic (commission caps)</td>
            <td>Full (audit trails, alerts)</td>
            <td>Full + dedicated compliance officer</td>
          </tr>
          <tr>
            <td><strong>Scouting Data Access</strong></td>
            <td>Limited (basic stats)</td>
            <td>Full (Wyscout, Opta, StatsBomb)</td>
            <td>Full + custom data feeds</td>
          </tr>
          <tr>
            <td><strong>Deal Room Access</strong></td>
            <td>Browse only</td>
            <td>Full participation</td>
            <td>Priority matching + private rooms</td>
          </tr>
          <tr>
            <td><strong>Analytics &amp; Valuations</strong></td>
            <td>Basic market trends</td>
            <td>Advanced (AI predictions, scenarios)</td>
            <td>Advanced + custom reports</td>
          </tr>
          <tr>
            <td><strong>Community &amp; Mentorship</strong></td>
            <td>Forum access</td>
            <td>Forum + group mentorship</td>
            <td>Forum + 1-on-1 mentorship</td>
          </tr>
          <tr>
            <td><strong>FIFA Clearing House</strong></td>
            <td>Manual submission</td>
            <td>Automated integration</td>
            <td>Automated + priority processing</td>
          </tr>
          <tr>
            <td><strong>Support</strong></td>
            <td>Community &amp; docs</td>
            <td>Priority email &amp; chat</td>
            <td>Dedicated account manager</td>
          </tr>
          <tr>
            <td><strong>Legal Support</strong></td>
            <td>—</td>
            <td>Quarterly consultation</td>
            <td>Retained legal counsel access</td>
          </tr>
          <tr>
            <td><strong>Annual Billing</strong></td>
            <td>—</td>
            <td>€1,080/yr (€90/mo effective)</td>
            <td>Custom annual agreement</td>
          </tr>
        </tbody>
      </table>

      <h2>Value Calculation Examples</h2>

      <h3>Example 1: Single Transfer — €500K Fee</h3>
      <p>
        Suppose you negotiate a transfer with a €500,000 fee. Under FIFA regulations, the agent commission is capped at 10% of the transfer fee = <strong>€50,000</strong>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Split</th>
            <th>Agent Keeps</th>
            <th>Platform Fee</th>
            <th>Subscription Cost</th>
            <th>Net to Agent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Basic</strong></td>
            <td>70:30</td>
            <td>€35,000</td>
            <td>€15,000</td>
            <td>€0</td>
            <td><strong>€35,000</strong></td>
          </tr>
          <tr>
            <td><strong>Pro</strong></td>
            <td>85:15</td>
            <td>€42,500</td>
            <td>€7,500</td>
            <td>€99</td>
            <td><strong>€42,401</strong></td>
          </tr>
          <tr>
            <td><strong>Enterprise</strong></td>
            <td>95:5</td>
            <td>€47,500</td>
            <td>€2,500</td>
            <td>~€500</td>
            <td><strong>€47,000</strong></td>
          </tr>
        </tbody>
      </table>
      <p>
        Upgrading from Basic to Pro on this single deal saves you <strong>€7,401</strong> — a 75x return on the monthly subscription fee.
      </p>

      <h3>Example 2: Player Salary Negotiation — €200K/yr</h3>
      <p>
        You negotiate a new contract with an annual salary of €200,000. Commission is capped at 3% of salary = <strong>€6,000</strong>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Split</th>
            <th>Agent Keeps</th>
            <th>Platform Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Basic</strong></td>
            <td>70:30</td>
            <td>€4,200</td>
            <td>€1,800</td>
          </tr>
          <tr>
            <td><strong>Pro</strong></td>
            <td>85:15</td>
            <td>€5,100</td>
            <td>€900</td>
          </tr>
        </tbody>
      </table>
      <p>
        Even on smaller salary-based commissions, Pro saves you <strong>€900</strong> per deal — the subscription pays for itself in a single month.
      </p>

      <Callout type="tip" title="Break-Even Point">
        The Pro plan pays for itself on any single commission above approximately €660. If you close at least one deal per year of any meaningful size, Pro is the better choice.
      </Callout>

      <h3>Example 3: Annual Portfolio — 10 Deals</h3>
      <p>
        An active agent closing 10 deals per year with an average commission of €15,000 per deal:
      </p>
      <ul>
        <li><strong>Basic:</strong> 10 × €15,000 × 70% = €105,000 net (platform takes €45,000)</li>
        <li><strong>Pro:</strong> 10 × €15,000 × 85% = €127,500 − €1,188 subscription = <strong>€126,312 net</strong> (platform takes €23,688)</li>
        <li><strong>Difference:</strong> Pro earns you <strong>€21,312 more</strong> per year</li>
      </ul>

      <h2>Enterprise — For Agencies &amp; Firms</h2>
      <p>
        Enterprise plans are designed for multi-agent firms and established agencies. Pricing is customized based on team size, deal volume, and required services. Enterprise includes:
      </p>
      <ul>
        <li>Negotiable commission splits from 90:10 up to 100:0</li>
        <li>Multi-seat licenses with role-based permissions</li>
        <li>White-label options for agency branding</li>
        <li>Custom API integrations with existing agency tools</li>
        <li>Dedicated account manager and onboarding</li>
        <li>SLA-backed uptime and support guarantees</li>
        <li>Custom compliance and reporting workflows</li>
      </ul>

      <Callout type="info" title="Get in Touch">
        Enterprise pricing starts from approximately €500/month depending on configuration. Contact our partnerships team for a tailored proposal.
      </Callout>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
