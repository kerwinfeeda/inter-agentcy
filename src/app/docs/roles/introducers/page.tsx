import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function ForIntroducers() {
  const { prev, next } = getPrevNext("/docs/roles/introducers");

  return (
    <DocsContent>
      <h1>For Introducers</h1>
      <p className="subtitle">
        Monetize your football network. Connect players with agents, agents with clubs, and earn referral commissions for every successful introduction — all tracked and automated on the platform.
      </p>

      <h2>Your Workflow on Inter Agentcy</h2>
      <ol>
        <li><strong>Spot opportunities</strong> — Browse the network to identify potential connections. A player in your region needs representation. An agent you know is looking for talent in that market.</li>
        <li><strong>Make the introduction</strong> — Use the platform&apos;s introduction system to formally connect the parties. This creates a timestamped, auditable record of your role.</li>
        <li><strong>Facilitate the connection</strong> — Provide context, background, and warm introductions. Your value is in who you know and the trust you bring.</li>
        <li><strong>Track outcomes</strong> — Monitor whether your introductions lead to representation agreements or deals. The platform tracks the chain of introductions automatically.</li>
        <li><strong>Earn commissions</strong> — When a transaction results from your introduction, your referral commission is calculated and paid through the platform.</li>
      </ol>

      <h2>What You Get by Tier</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Basic (Free)</th>
            <th>Network ($39/mo)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Referral logging</td><td>Manual</td><td>Automated</td></tr>
          <tr><td>Profile listing</td><td>Standard</td><td>Featured</td></tr>
          <tr><td>Network analytics</td><td>Basic</td><td>Advanced</td></tr>
          <tr><td>Payout tracking</td><td>Manual</td><td>Automated</td></tr>
          <tr><td>Introduction tools</td><td>Basic messaging</td><td>Formal intro system</td></tr>
          <tr><td>Connection suggestions</td><td>—</td><td>AI-powered matches</td></tr>
          <tr><td>Profile badge</td><td>—</td><td>Verified Introducer</td></tr>
          <tr><td>Community access</td><td>Forums</td><td>Full + events</td></tr>
        </tbody>
      </table>

      <Callout type="info" title="How Referral Commissions Work">
        Introducer commissions are funded from the platform&apos;s transaction processing fees — not from the agent&apos;s or player&apos;s share. When a deal closes that originated from your introduction, you receive a percentage of the platform&apos;s fee. This means your earnings don&apos;t reduce anyone else&apos;s — everyone wins.
      </Callout>

      <h2>Who Becomes an Introducer?</h2>
      <p>
        Introducers come from diverse backgrounds — the common thread is a strong network in the football world:
      </p>
      <ul>
        <li><strong>Former players</strong> — Retired professionals with extensive club and agent contacts</li>
        <li><strong>Academy staff</strong> — Youth coaches and academy directors who discover talent early</li>
        <li><strong>Local club officials</strong> — Board members, secretaries, and administrators at grassroots and lower-league clubs</li>
        <li><strong>Community leaders</strong> — Respected figures in football-rich communities who are the first point of contact for emerging talent</li>
        <li><strong>Journalists</strong> — Football reporters with deep industry contacts and early access to transfer information</li>
        <li><strong>Regional connectors</strong> — Professionals based in talent-rich regions (West Africa, South America, Eastern Europe) who bridge geographic and cultural gaps</li>
      </ul>

      <h2>Building Your Introducer Profile</h2>
      <ul>
        <li><strong>Highlight your network</strong> — Clearly showcase the regions, leagues, and stakeholder types you can connect</li>
        <li><strong>Document your track record</strong> — Successful introductions build your reputation on the platform</li>
        <li><strong>Be selective</strong> — Quality introductions that lead to deals are worth far more than volume. Only connect parties when there&apos;s a genuine fit.</li>
        <li><strong>Stay active</strong> — Regular engagement keeps you visible in the network and surfaces more matching opportunities</li>
      </ul>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
