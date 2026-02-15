import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function CommissionStructure() {
  const { prev, next } = getPrevNext("/docs/pricing/commissions");

  return (
    <DocsContent>
      <h1>Commission Structure</h1>
      <p className="subtitle">
        Inter Agentcy operates a host-agency model inspired by the travel industry — you do the deals, we provide the infrastructure, and we split commissions transparently. Here&apos;s exactly how it works.
      </p>

      <h2>The Host-Agency Model</h2>
      <p>
        Traditional football agencies require agents to build their own infrastructure: CRM systems, legal support, compliance frameworks, scouting networks, and club relationships. This means high overhead before earning a single euro.
      </p>
      <p>
        Inter Agentcy flips this model. We provide the complete infrastructure — technology, compliance, network, and support — and in return, we take a percentage of commissions processed through the platform. The more you invest in your subscription, the less we take.
      </p>

      <Callout type="info" title="You&apos;re Always in Control">
        Commission splits only apply to deals processed through the Inter Agentcy platform. You choose which deals to run through the platform. The platform adds value through compliance automation, Clearing House integration, and secure deal processing.
      </Callout>

      <h2>Commission Splits by Tier</h2>
      <table>
        <thead>
          <tr>
            <th>Agent Plan</th>
            <th>Agent Keeps</th>
            <th>Platform Takes</th>
            <th>Monthly Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Basic (Free)</strong></td>
            <td>70%</td>
            <td>30%</td>
            <td>€0</td>
          </tr>
          <tr>
            <td><strong>Pro</strong></td>
            <td>85%</td>
            <td>15%</td>
            <td>€99</td>
          </tr>
          <tr>
            <td><strong>Enterprise</strong></td>
            <td>90–100%</td>
            <td>0–10%</td>
            <td>Custom (€500+)</td>
          </tr>
        </tbody>
      </table>

      <h2>Worked Examples</h2>

      <h3>Example 1: $100,000 Transfer Fee</h3>
      <p>
        A player transfers for $100,000. Under FFAR 2023, the agent&apos;s commission is capped at 10% of the transfer fee = <strong>$10,000</strong>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Agent Commission</th>
            <th>Agent Keeps</th>
            <th>Platform Takes</th>
            <th>Subscription</th>
            <th>Agent Net</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Basic</strong></td>
            <td>$10,000</td>
            <td>$7,000</td>
            <td>$3,000</td>
            <td>$0</td>
            <td><strong>$7,000</strong></td>
          </tr>
          <tr>
            <td><strong>Pro</strong></td>
            <td>$10,000</td>
            <td>$8,500</td>
            <td>$1,500</td>
            <td>~$107</td>
            <td><strong>$8,393</strong></td>
          </tr>
          <tr>
            <td><strong>Enterprise (95:5)</strong></td>
            <td>$10,000</td>
            <td>$9,500</td>
            <td>$500</td>
            <td>~$540</td>
            <td><strong>$8,960</strong></td>
          </tr>
        </tbody>
      </table>

      <h3>Example 2: $2M Transfer Fee</h3>
      <p>
        A more significant transfer at $2,000,000. Agent commission at 10% = <strong>$200,000</strong>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Agent Keeps</th>
            <th>Platform Takes</th>
            <th>Agent Net (after sub)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Basic</strong></td>
            <td>$140,000</td>
            <td>$60,000</td>
            <td><strong>$140,000</strong></td>
          </tr>
          <tr>
            <td><strong>Pro</strong></td>
            <td>$170,000</td>
            <td>$30,000</td>
            <td><strong>$169,893</strong></td>
          </tr>
          <tr>
            <td><strong>Enterprise (95:5)</strong></td>
            <td>$190,000</td>
            <td>$10,000</td>
            <td><strong>$189,460</strong></td>
          </tr>
        </tbody>
      </table>
      <p>
        On a $2M transfer, the difference between Basic and Pro is nearly <strong>$30,000</strong>. Enterprise saves almost <strong>$50,000</strong> compared to Basic.
      </p>

      <Callout type="warning" title="FIFA Commission Caps Apply">
        All commissions are subject to FFAR 2023 caps: 3% of gross annual remuneration (salary deals) or 10% of the transfer fee (transfers). Inter Agentcy&apos;s compliance engine automatically enforces these limits.
      </Callout>

      <h3>Example 3: Salary Negotiation — $500K Annual Salary</h3>
      <p>
        Agent negotiates a new contract at $500,000/year. Commission capped at 3% = <strong>$15,000</strong>.
      </p>
      <ul>
        <li><strong>Basic (70:30):</strong> Agent keeps $10,500 — Platform takes $4,500</li>
        <li><strong>Pro (85:15):</strong> Agent keeps $12,750 — Platform takes $2,250 — Net after sub: $12,643</li>
        <li><strong>Pro advantage:</strong> $2,143 more per deal</li>
      </ul>

      <h2>Other Role Commissions</h2>

      <h3>Scout Finder&apos;s Fees</h3>
      <p>
        When a scout&apos;s report leads to a signed player, the scout earns a finder&apos;s fee. The platform takes 5-15% depending on the scout&apos;s subscription tier:
      </p>
      <ul>
        <li><strong>Free:</strong> Scout keeps 85%, platform takes 15%</li>
        <li><strong>Pro:</strong> Scout keeps 90%, platform takes 10%</li>
        <li><strong>Elite:</strong> Scout keeps 95%, platform takes 5%</li>
      </ul>

      <h3>Representative Deal Fees</h3>
      <p>
        Representatives earn fees from brand deals, sponsorships, and appearance contracts. The platform takes approximately 5-15% depending on tier:
      </p>
      <ul>
        <li><strong>Starter:</strong> Rep keeps 85%, platform takes 15%</li>
        <li><strong>Pro:</strong> Rep keeps 90%, platform takes 10%</li>
        <li><strong>Elite:</strong> Rep keeps 95%, platform takes 5%</li>
      </ul>

      <h3>Introducer Referral Commissions</h3>
      <p>
        Introducers earn referral fees from successful connections. These are funded from transaction processing fees, not from other participants&apos; commissions. Typical referral fees range from 1-5% of the deal value.
      </p>

      <Callout type="tip" title="Transparent by Design">
        Every commission, fee, and split is visible in your dashboard in real time. No hidden charges, no surprise deductions. You always know exactly what you&apos;re earning and what the platform is taking.
      </Callout>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
