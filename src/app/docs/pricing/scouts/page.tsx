import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function ScoutPlans() {
  const { prev, next } = getPrevNext("/docs/pricing/scouts");

  return (
    <DocsContent>
      <h1>Scout Plans</h1>
      <p className="subtitle">
        From grassroots talent spotters to full-time professional scouts — choose the tier that matches your scouting activity and earn finder&apos;s fees through the platform.
      </p>

      <Callout type="highlight" title="Earn While You Scout">
        Every verified scouting report that leads to a signed player earns you a finder&apos;s fee. Higher tiers reduce the platform&apos;s cut, putting more money in your pocket.
      </Callout>

      <h2>Plan Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Free</th>
            <th>Pro ($49/mo)</th>
            <th>Elite ($149/mo)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Scouting Reports / Month</strong></td>
            <td>2</td>
            <td>10</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td><strong>Player Database Access</strong></td>
            <td>Basic (limited filters)</td>
            <td>Full (advanced search &amp; filters)</td>
            <td>Full + early access to new data</td>
          </tr>
          <tr>
            <td><strong>Finder&apos;s Fee Share (Scout:Platform)</strong></td>
            <td>85:15</td>
            <td>90:10</td>
            <td>95:5</td>
          </tr>
          <tr>
            <td><strong>Report Templates</strong></td>
            <td>Basic template</td>
            <td>Full library (10+ templates)</td>
            <td>Full library + custom branding</td>
          </tr>
          <tr>
            <td><strong>Data Integrations</strong></td>
            <td>—</td>
            <td>Wyscout, Opta basic stats</td>
            <td>Wyscout, Opta, StatsBomb full</td>
          </tr>
          <tr>
            <td><strong>Video Clip Attachments</strong></td>
            <td>Up to 3 per report</td>
            <td>Up to 10 per report</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td><strong>Agent Network Visibility</strong></td>
            <td>Listed in directory</td>
            <td>Featured in directory</td>
            <td>Priority introductions to agents</td>
          </tr>
          <tr>
            <td><strong>Automated Fee Tracking</strong></td>
            <td>Manual logging</td>
            <td>Automated tracking &amp; alerts</td>
            <td>Automated + payout dashboard</td>
          </tr>
          <tr>
            <td><strong>Coaching &amp; Development</strong></td>
            <td>Community forum</td>
            <td>Group webinars (monthly)</td>
            <td>1-on-1 coaching sessions</td>
          </tr>
          <tr>
            <td><strong>Support</strong></td>
            <td>Community</td>
            <td>Email support</td>
            <td>Priority email &amp; chat</td>
          </tr>
          <tr>
            <td><strong>Annual Billing</strong></td>
            <td>—</td>
            <td>$528/yr ($44/mo effective)</td>
            <td>$1,608/yr ($134/mo effective)</td>
          </tr>
        </tbody>
      </table>

      <h2>Who Should Choose What?</h2>

      <h3>Free — Part-Time &amp; Aspiring Scouts</h3>
      <p>
        Ideal if you&apos;re scouting on weekends or just starting out. Submit up to 2 reports per month, build your reputation on the platform, and earn finder&apos;s fees when your discoveries lead to signings. No cost, no commitment.
      </p>

      <h3>Pro — Active Scouts</h3>
      <p>
        For scouts covering leagues regularly and producing multiple reports per month. Full database access, data integrations, and automated fee tracking mean you spend less time on admin and more time watching players. The improved 90:10 fee split means more earnings per successful referral.
      </p>

      <h3>Elite — Professional &amp; Full-Time Scouts</h3>
      <p>
        For scouts who make scouting their career. Unlimited reports, the best fee split (95:5), priority introductions to licensed agents, and 1-on-1 coaching to develop your scouting methodology. Custom-branded reports help you build your professional identity.
      </p>

      <Callout type="tip" title="Finder&apos;s Fee Example">
        A typical finder&apos;s fee for discovering a player who signs a professional contract ranges from $2,000 to $20,000+. On a $10,000 fee, Elite scouts keep $9,500 vs $8,500 on the Free plan — the $149/mo subscription pays for itself quickly.
      </Callout>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
