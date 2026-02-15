import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function RepresentativePlans() {
  const { prev, next } = getPrevNext("/docs/pricing/representatives");

  return (
    <DocsContent>
      <h1>Representative Plans</h1>
      <p className="subtitle">
        Manage player careers, brand deals, and sponsorships with purpose-built tools. Scale from a handful of players to an unlimited roster as your business grows.
      </p>

      <Callout type="info" title="Representatives vs Agents">
        Representatives handle the non-transfer side of player careers: brand partnerships, media appearances, sponsorship deals, and career planning. Transfer negotiations require a licensed agent — and Inter Agentcy makes it easy to connect with one.
      </Callout>

      <h2>Plan Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Starter (Free)</th>
            <th>Pro ($79/mo)</th>
            <th>Elite ($199/mo)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Player Clients</strong></td>
            <td>Up to 5</td>
            <td>Up to 20</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td><strong>Deal Fee Share (Rep:Platform)</strong></td>
            <td>85:15</td>
            <td>90:10</td>
            <td>95:5</td>
          </tr>
          <tr>
            <td><strong>Career Planning Tools</strong></td>
            <td>Basic planner</td>
            <td>Advanced timeline &amp; milestones</td>
            <td>Full suite + AI recommendations</td>
          </tr>
          <tr>
            <td><strong>Brand Deal Templates</strong></td>
            <td>3 basic templates</td>
            <td>Full library (20+ templates)</td>
            <td>Full library + custom drafting</td>
          </tr>
          <tr>
            <td><strong>Sponsorship Marketplace</strong></td>
            <td>Browse only</td>
            <td>Full access + proposals</td>
            <td>Priority listing + direct intros</td>
          </tr>
          <tr>
            <td><strong>Media Kit Builder</strong></td>
            <td>Basic template</td>
            <td>Custom branding</td>
            <td>Professional design support</td>
          </tr>
          <tr>
            <td><strong>Analytics</strong></td>
            <td>Basic player stats</td>
            <td>Advanced analytics &amp; market value</td>
            <td>Full analytics + brand valuation</td>
          </tr>
          <tr>
            <td><strong>Agent Network Access</strong></td>
            <td>Directory listing</td>
            <td>Direct messaging</td>
            <td>Priority introductions</td>
          </tr>
          <tr>
            <td><strong>Legal Support</strong></td>
            <td>—</td>
            <td>Quarterly legal consultation</td>
            <td>Full legal review on all deals</td>
          </tr>
          <tr>
            <td><strong>Support</strong></td>
            <td>Community</td>
            <td>Email support</td>
            <td>Priority email, chat &amp; phone</td>
          </tr>
          <tr>
            <td><strong>Annual Billing</strong></td>
            <td>—</td>
            <td>$852/yr ($71/mo effective)</td>
            <td>$2,148/yr ($179/mo effective)</td>
          </tr>
        </tbody>
      </table>

      <h2>Who Should Choose What?</h2>

      <h3>Starter — Getting Started in Representation</h3>
      <p>
        Perfect for family members managing a player&apos;s off-pitch career, or professionals exploring the representation space. Manage up to 5 players with basic planning tools and templates at no cost.
      </p>

      <h3>Pro — Established Representatives</h3>
      <p>
        For professionals managing multiple players and actively pursuing brand deals and sponsorships. Advanced analytics help you identify opportunities, and the improved fee split keeps more revenue in your pocket. Legal consultations provide peace of mind on complex deals.
      </p>

      <h3>Elite — Full-Service Representation Firms</h3>
      <p>
        For agencies and individuals managing large rosters. Unlimited players, the best fee split (95:5), priority introductions to licensed agents for transfers, AI-powered career recommendations, and full legal review on every deal. The professional design support for media kits helps your players stand out to sponsors.
      </p>

      <Callout type="tip" title="Brand Deal Example">
        A mid-tier sponsorship deal worth $50,000 earns you $47,500 on Elite (95:5) vs $42,500 on Starter (85:15). The $199/mo subscription saves you $5,000 on a single deal.
      </Callout>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
