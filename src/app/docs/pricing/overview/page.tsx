import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function PricingOverview() {
  const { prev, next } = getPrevNext("/docs/pricing/overview");

  return (
    <DocsContent>
      <h1>Pricing Overview</h1>
      <p className="subtitle">
        Transparent, role-based pricing designed to grow with you. Every role starts with a free tier. Revenue comes from subscriptions, commission splits, and premium add-ons.
      </p>

      <Callout type="highlight" title="Free to Start, Always">
        Every role on Inter Agentcy has a free tier. Start using the platform at no cost, and upgrade only when the value is clear. No credit card required to get started.
      </Callout>

      <h2>Revenue Model</h2>
      <p>
        Inter Agentcy generates revenue through multiple complementary streams, ensuring sustainability while keeping costs manageable for users:
      </p>
      <ol>
        <li><strong>Subscriptions</strong> — Recurring SaaS fees across all roles, tiered by feature access and usage limits</li>
        <li><strong>Commission splits</strong> — Platform takes a percentage of agent commissions (10-30% depending on tier)</li>
        <li><strong>Scout fee cuts</strong> — 5-10% of finder&apos;s fees processed through the platform</li>
        <li><strong>Representative fee share</strong> — ~10% of branding and management deal fees</li>
        <li><strong>Introducer bonuses</strong> — Funded from transaction processing fees</li>
        <li><strong>Premium add-ons</strong> — Data analytics packages, consulting services, legal review</li>
        <li><strong>Education &amp; certification</strong> — Paid courses, masterclasses, and certification programs</li>
      </ol>

      <h2>Pricing at a Glance</h2>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Free Tier</th>
            <th>Mid Tier</th>
            <th>Top Tier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Agents</strong></td>
            <td>Basic (€0, 70:30 split)</td>
            <td>Pro (€99/mo, 85:15 split)</td>
            <td>Enterprise (Custom, 90-100:0-10)</td>
          </tr>
          <tr>
            <td><strong>Scouts</strong></td>
            <td>Free (2 reports/mo)</td>
            <td>Pro ($49/mo, 10 reports)</td>
            <td>Elite ($149/mo, unlimited)</td>
          </tr>
          <tr>
            <td><strong>Representatives</strong></td>
            <td>Starter (5 players)</td>
            <td>Pro ($79/mo, 20 players)</td>
            <td>Elite ($199/mo, unlimited)</td>
          </tr>
          <tr>
            <td><strong>Introducers</strong></td>
            <td>Basic (manual tracking)</td>
            <td>Network ($39/mo)</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>

      <h2>Upgrade Philosophy</h2>
      <p>
        Our pricing follows a simple principle: you should only pay when the platform is already generating value for you. The free tiers are genuinely useful — not crippled demos. You&apos;ll naturally want to upgrade when you hit the limits of your current tier, and the upgrade cost should be easily justified by the additional value.
      </p>
      <p>
        For agents specifically, the commission split reduction from Basic (70:30) to Pro (85:15) means the subscription pays for itself on any deal generating more than approximately €8,000 in commission. Most transfers far exceed this threshold.
      </p>

      <Callout type="tip" title="Annual Savings">
        All paid plans offer a discount when paid annually. Agent Pro is €1,080/year (€90/mo effective) vs €99/mo when paid monthly — saving €108 per year.
      </Callout>

      <h2>Detailed Pricing by Role</h2>
      <p>
        Explore the detailed pricing pages for each role to see the full feature comparison:
      </p>
      <ul>
        <li><strong>Agent Plans</strong> — Full breakdown of Basic, Pro, and Enterprise tiers</li>
        <li><strong>Scout Plans</strong> — Free, Pro, and Elite scout tiers</li>
        <li><strong>Representative Plans</strong> — Starter, Pro, and Elite representative tiers</li>
        <li><strong>Introducer Plans</strong> — Basic and Network introducer tiers</li>
        <li><strong>Commission Structure</strong> — Detailed explanation of the host-agency commission model</li>
      </ul>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
