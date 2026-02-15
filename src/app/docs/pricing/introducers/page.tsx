import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function IntroducerPlans() {
  const { prev, next } = getPrevNext("/docs/pricing/introducers");

  return (
    <DocsContent>
      <h1>Introducer Plans</h1>
      <p className="subtitle">
        Leverage your football network to earn referral commissions by connecting players, agents, and clubs. Two simple tiers — start free and upgrade when your network activity grows.
      </p>

      <Callout type="highlight" title="Everyone Knows Someone">
        Coaches, youth academy staff, former players, football journalists — if you know talent and know people, you can earn as an Introducer. No license required.
      </Callout>

      <h2>Plan Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Basic (Free)</th>
            <th>Network ($39/mo)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Referral Submissions</strong></td>
            <td>Up to 5/month</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td><strong>Referral Commission Tracking</strong></td>
            <td>Manual logging</td>
            <td>Automated tracking &amp; dashboard</td>
          </tr>
          <tr>
            <td><strong>Payout Processing</strong></td>
            <td>Manual request</td>
            <td>Automated payouts (monthly)</td>
          </tr>
          <tr>
            <td><strong>Profile Visibility</strong></td>
            <td>Listed in directory</td>
            <td>Featured profile with badge</td>
          </tr>
          <tr>
            <td><strong>Agent &amp; Scout Network</strong></td>
            <td>Browse directory</td>
            <td>Direct messaging + priority matching</td>
          </tr>
          <tr>
            <td><strong>Referral Analytics</strong></td>
            <td>Basic (total count)</td>
            <td>Advanced (conversion rates, earnings trends)</td>
          </tr>
          <tr>
            <td><strong>Referral Link &amp; QR Code</strong></td>
            <td>—</td>
            <td>Custom referral link + printable QR</td>
          </tr>
          <tr>
            <td><strong>Notification Alerts</strong></td>
            <td>Email only</td>
            <td>Email, SMS &amp; push notifications</td>
          </tr>
          <tr>
            <td><strong>Support</strong></td>
            <td>Community</td>
            <td>Email support</td>
          </tr>
          <tr>
            <td><strong>Annual Billing</strong></td>
            <td>—</td>
            <td>$420/yr ($35/mo effective)</td>
          </tr>
        </tbody>
      </table>

      <h2>How Introducer Earnings Work</h2>
      <p>
        When you introduce a player to an agent (or an agent to a club) and that introduction results in a signed deal, you earn a referral commission. Typical referral fees range from 1-5% of the deal value, funded from the transaction processing fees — not from the agent&apos;s commission.
      </p>
      <ul>
        <li><strong>Player → Agent introduction:</strong> You earn a fee when the agent signs the player as a client</li>
        <li><strong>Agent → Club introduction:</strong> You earn a fee when a transfer or contract is completed</li>
        <li><strong>Scout → Agent connection:</strong> You earn a fee when a scouting report leads to a signing</li>
      </ul>

      <Callout type="tip" title="Network Plan ROI">
        If you make just 2-3 successful introductions per year, the automated tracking, featured profile, and priority matching of the Network plan easily justify the $39/month investment. One successful introduction can earn hundreds to thousands of dollars.
      </Callout>

      <h2>Who Should Choose What?</h2>

      <h3>Basic — Occasional Connectors</h3>
      <p>
        You know a few talented players or have contacts at a club or two. You make introductions occasionally and want to be compensated when they lead to deals. The free tier lets you participate with no risk.
      </p>

      <h3>Network — Active Networkers</h3>
      <p>
        You&apos;re well-connected in football — maybe a coach, journalist, former player, or academy director. You regularly come across opportunities and want to maximize your referral income with automated tracking, a featured profile, and direct access to agents and scouts.
      </p>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
