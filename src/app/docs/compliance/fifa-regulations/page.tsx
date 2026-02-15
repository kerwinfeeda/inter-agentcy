import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function FIFARegulations() {
  const { prev, next } = getPrevNext("/docs/compliance/fifa-regulations");

  return (
    <DocsContent>
      <h1>FIFA Regulations</h1>
      <p className="subtitle">
        Inter Agentcy is built from the ground up to comply with the FIFA Football Agent Regulations (FFAR) 2023. Every feature, template, and workflow aligns with the current regulatory framework.
      </p>

      <h2>FFAR 2023 Overview</h2>
      <p>
        The FIFA Football Agent Regulations (FFAR), effective October 2023, represent the most significant overhaul of football agent regulation in decades. Key changes include mandatory licensing via a FIFA-administered exam, strict commission caps, standardized representation agreements, and the introduction of the FIFA Clearing House for payment processing.
      </p>
      <p>
        These regulations affect every participant in the football transfer market — agents, players, and clubs. Inter Agentcy ensures you stay compliant without needing to become a regulatory expert yourself.
      </p>

      <Callout type="warning" title="Non-Compliance Risks">
        Violating FFAR can result in fines, suspension or revocation of your license, bans from representing players, and sanctions against clubs involved. Inter Agentcy&apos;s compliance engine helps you avoid these risks automatically.
      </Callout>

      <h2>Commission Caps</h2>
      <p>
        FFAR 2023 introduces strict caps on agent commissions, ending the era of unregulated fee arrangements:
      </p>
      <table>
        <thead>
          <tr>
            <th>Transaction Type</th>
            <th>Commission Cap</th>
            <th>Basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Player Representation (Salary)</strong></td>
            <td>3%</td>
            <td>Gross annual remuneration</td>
          </tr>
          <tr>
            <td><strong>Club Engagement (Transfer)</strong></td>
            <td>10%</td>
            <td>Transfer fee paid</td>
          </tr>
          <tr>
            <td><strong>Dual Representation</strong></td>
            <td>Combined max applies</td>
            <td>Cannot exceed individual caps combined</td>
          </tr>
        </tbody>
      </table>

      <Callout type="info" title="Automatic Cap Enforcement">
        When you create a deal in Inter Agentcy, the platform automatically calculates the maximum allowable commission based on the transaction type and value. You&apos;ll receive a warning if any proposed fee exceeds the regulatory cap.
      </Callout>

      <h2>Standard Representation Agreements</h2>
      <p>
        FFAR requires all representation agreements to follow FIFA-prescribed standard forms. These include:
      </p>
      <ul>
        <li><strong>Standard Representation Agreement (Player):</strong> Governs the agent-player relationship, including scope of services, duration (max 2 years, renewable), exclusivity terms, and commission structure</li>
        <li><strong>Standard Representation Agreement (Club):</strong> Governs club engagement of an agent for a specific transaction</li>
        <li><strong>Disclosure Requirements:</strong> All representation agreements must be deposited with the relevant national association and disclosed to FIFA</li>
      </ul>
      <p>
        Inter Agentcy provides pre-filled FIFA standard templates that you can customize within regulatory bounds. Digital signatures and automated filing streamline the process.
      </p>

      <h2>Key FFAR Requirements</h2>
      <ul>
        <li><strong>Licensing:</strong> Only FIFA-licensed agents may negotiate transfers and contracts on behalf of players or clubs</li>
        <li><strong>Exam:</strong> Agents must pass the FIFA Football Agent Exam to obtain a license</li>
        <li><strong>Continuing Education:</strong> Licensed agents must maintain compliance through ongoing professional development</li>
        <li><strong>Conflict of Interest:</strong> Agents cannot represent multiple parties in the same transaction without written consent and disclosure</li>
        <li><strong>Payment via Clearing House:</strong> All agent payments for international transfers must be processed through the FIFA Clearing House</li>
        <li><strong>Record Keeping:</strong> Agents must maintain detailed records of all transactions and agreements for a minimum period</li>
        <li><strong>Fit and Proper:</strong> Agents must meet character and integrity requirements, with no disqualifying criminal convictions or disciplinary sanctions</li>
      </ul>

      <h2>How Inter Agentcy Ensures Compliance</h2>
      <table>
        <thead>
          <tr>
            <th>Requirement</th>
            <th>Platform Feature</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Commission caps</td>
            <td>Automatic calculation and warnings on every deal</td>
          </tr>
          <tr>
            <td>Standard agreements</td>
            <td>Pre-loaded FIFA templates with guided completion</td>
          </tr>
          <tr>
            <td>License verification</td>
            <td>Verified badge system linked to FIFA database</td>
          </tr>
          <tr>
            <td>Clearing House payments</td>
            <td>Integrated submission and tracking</td>
          </tr>
          <tr>
            <td>Conflict of interest</td>
            <td>Automated detection and disclosure prompts</td>
          </tr>
          <tr>
            <td>Record keeping</td>
            <td>Full audit trail on all transactions</td>
          </tr>
          <tr>
            <td>Regulatory updates</td>
            <td>Real-time alerts when regulations change</td>
          </tr>
        </tbody>
      </table>

      <Callout type="tip" title="Stay Ahead of Changes">
        FIFA regulations continue to evolve. Inter Agentcy monitors regulatory developments and updates templates, workflows, and compliance checks automatically — so you don&apos;t have to.
      </Callout>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
