import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function ForScouts() {
  const { prev, next } = getPrevNext("/docs/roles/scouts");

  return (
    <DocsContent>
      <h1>For Scouts</h1>
      <p className="subtitle">
        Turn your talent-spotting expertise into a sustainable career. Submit scouting reports, earn finder&apos;s fees, and connect directly with licensed agents who need your eyes on the ground.
      </p>

      <h2>Your Workflow on Inter Agentcy</h2>
      <ol>
        <li><strong>Attend matches</strong> — Watch games in your region, from top-flight to grassroots academies. Use the mobile app to take notes in real-time.</li>
        <li><strong>Create reports</strong> — Submit structured scouting reports using the standardized template. Attach video clips, statistical analysis, and your professional assessment.</li>
        <li><strong>Get discovered</strong> — Your reports are visible to licensed agents on the platform. When agents search for talent in your region, your work surfaces automatically.</li>
        <li><strong>Build relationships</strong> — Connect with agents who appreciate your eye for talent. Repeat business comes from trust built over multiple accurate reports.</li>
        <li><strong>Earn fees</strong> — When a player you scouted gets signed through the platform, you earn a finder&apos;s fee. Pro tier automates tracking; Elite tier gives you a preferred 5% share.</li>
      </ol>

      <h2>What You Get by Tier</h2>
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
          <tr><td>Reports per month</td><td>2</td><td>10</td><td>Unlimited</td></tr>
          <tr><td>Database access</td><td>Basic</td><td>Full</td><td>Full + priority</td></tr>
          <tr><td>Fee tracking</td><td>Manual</td><td>Automated (10% share)</td><td>Automated (5% share)</td></tr>
          <tr><td>Agent introductions</td><td>Organic</td><td>Suggested matches</td><td>Priority intros</td></tr>
          <tr><td>Video tools</td><td>Upload only</td><td>Clip &amp; annotate</td><td>Full editing suite</td></tr>
          <tr><td>Data integrations</td><td>Basic stats</td><td>Wyscout + Opta</td><td>All integrations</td></tr>
          <tr><td>Coaching</td><td>—</td><td>Community forums</td><td>1-on-1 coaching</td></tr>
          <tr><td>Profile visibility</td><td>Standard</td><td>Enhanced</td><td>Featured</td></tr>
        </tbody>
      </table>

      <Callout type="info" title="Fee Share Explained">
        The fee share percentage refers to the scout&apos;s cut of the platform&apos;s transaction processing fee. Elite scouts get a better rate (5%) because the lower platform share is offset by higher volume and subscription revenue. This means you keep more of the finder&apos;s fee on each successful discovery.
      </Callout>

      <h2>Building Your Scouting Brand</h2>
      <ul>
        <li><strong>Specialize</strong> — Focus on specific positions, age groups, or regions. Agents want specialists they can trust for targeted searches.</li>
        <li><strong>Be consistent</strong> — Regular, high-quality reports build your reputation faster than occasional brilliant ones.</li>
        <li><strong>Use data</strong> — Combine your eye test with statistical backing. Reports that blend observation with data are taken most seriously.</li>
        <li><strong>Document outcomes</strong> — Track players you&apos;ve scouted and their career progression. A portfolio of accurate assessments is your best calling card.</li>
        <li><strong>Earn certifications</strong> — Complete the Scouting Methodology training module and earn the Scouting Analyst badge for your profile.</li>
      </ul>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
