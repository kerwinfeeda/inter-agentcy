import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function AgentLicensing() {
  const { prev, next } = getPrevNext("/docs/compliance/licensing");

  return (
    <DocsContent>
      <h1>Agent Licensing</h1>
      <p className="subtitle">
        Understanding the FIFA Football Agent Exam, platform verification, and how Inter Agentcy supports both licensed and unlicensed users in the football ecosystem.
      </p>

      <h2>The FIFA Football Agent Exam</h2>
      <p>
        Since 2023, FIFA requires all football agents to pass an official examination administered by FIFA in coordination with national associations. The exam tests knowledge of FIFA regulations, national football laws, contract law, and ethical standards.
      </p>

      <h3>Exam Details</h3>
      <table>
        <thead>
          <tr>
            <th>Detail</th>
            <th>First Exam (2023)</th>
            <th>Second Exam (2024)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Registered Candidates</strong></td>
            <td>~1,950</td>
            <td>~10,383</td>
          </tr>
          <tr>
            <td><strong>Format</strong></td>
            <td>Multiple choice, 20 questions</td>
            <td>Multiple choice, 20 questions</td>
          </tr>
          <tr>
            <td><strong>Pass Rate</strong></td>
            <td>~54%</td>
            <td>TBD</td>
          </tr>
          <tr>
            <td><strong>Languages</strong></td>
            <td>English, French, Spanish, German</td>
            <td>English, French, Spanish, German</td>
          </tr>
          <tr>
            <td><strong>Exam Fee</strong></td>
            <td>Varies by national association</td>
            <td>Varies by national association</td>
          </tr>
          <tr>
            <td><strong>Administered By</strong></td>
            <td>National associations under FIFA oversight</td>
            <td>National associations under FIFA oversight</td>
          </tr>
        </tbody>
      </table>

      <Callout type="highlight" title="Massive Demand">
        The jump from 1,950 candidates in the first exam to over 10,383 in the second exam demonstrates the enormous demand for professional football agent licensing — and the growing market Inter Agentcy serves.
      </Callout>

      <h3>Exam Topics</h3>
      <ul>
        <li>FIFA Football Agent Regulations (FFAR)</li>
        <li>FIFA Statutes and governance</li>
        <li>FIFA Regulations on the Status and Transfer of Players (RSTP)</li>
        <li>National association regulations</li>
        <li>Contract law fundamentals</li>
        <li>Ethical conduct and conflict of interest rules</li>
        <li>Anti-corruption and integrity standards</li>
      </ul>

      <Callout type="tip" title="Exam Prep on Inter Agentcy">
        Our Academy section offers study materials, practice questions, and exam preparation resources. Community forums connect you with agents who&apos;ve already passed the exam for tips and guidance.
      </Callout>

      <h2>Verification on the Platform</h2>
      <p>
        When you register on Inter Agentcy as a licensed agent, we verify your credentials through a multi-step process:
      </p>
      <ol>
        <li><strong>License Number Submission:</strong> Enter your FIFA agent license number during registration</li>
        <li><strong>Cross-Reference Check:</strong> We verify against the FIFA agent registry and your national association&apos;s records</li>
        <li><strong>Identity Verification:</strong> Government-issued ID check to confirm you are the license holder</li>
        <li><strong>Verified Badge:</strong> Once confirmed, your profile displays a verified agent badge visible to all platform users</li>
      </ol>
      <p>
        Verification typically completes within 24-48 hours. During peak periods (immediately after exam results), it may take up to 5 business days.
      </p>

      <h2>Unlicensed User Restrictions</h2>
      <p>
        Inter Agentcy welcomes unlicensed users in roles that don&apos;t require a FIFA license. However, certain activities are restricted to licensed agents only:
      </p>
      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Licensed Agents</th>
            <th>Unlicensed Users</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Negotiate transfers</td>
            <td>✅</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Negotiate player contracts</td>
            <td>✅</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Sign representation agreements</td>
            <td>✅</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Receive agent commissions</td>
            <td>✅</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Submit scouting reports</td>
            <td>✅</td>
            <td>✅ (as Scout)</td>
          </tr>
          <tr>
            <td>Manage player brand/career</td>
            <td>✅</td>
            <td>✅ (as Representative)</td>
          </tr>
          <tr>
            <td>Make introductions/referrals</td>
            <td>✅</td>
            <td>✅ (as Introducer)</td>
          </tr>
          <tr>
            <td>Access Deal Room</td>
            <td>✅</td>
            <td>Browse only</td>
          </tr>
        </tbody>
      </table>

      <h2>Co-Agent Facilitation</h2>
      <p>
        Unlicensed users who identify transfer or contract opportunities can collaborate with licensed agents through Inter Agentcy&apos;s co-agent facilitation feature:
      </p>
      <ul>
        <li><strong>Scouts</strong> can discover talent and connect them with licensed agents who handle the transfer negotiation</li>
        <li><strong>Representatives</strong> managing a player&apos;s career can bring in a licensed agent when transfer discussions arise</li>
        <li><strong>Introducers</strong> can bridge connections between players/clubs and licensed agents, earning referral commissions</li>
      </ul>
      <p>
        This system ensures FIFA compliance while allowing everyone in the football ecosystem to participate and earn through their expertise and networks.
      </p>

      <Callout type="info" title="Path to Licensing">
        Inter Agentcy actively supports aspiring agents on their path to licensing. Start as a Scout, Representative, or Introducer, learn the industry, build your network, and when you&apos;re ready to take the FIFA exam, you&apos;ll already have the knowledge and connections to succeed.
      </Callout>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
