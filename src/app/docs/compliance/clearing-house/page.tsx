import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function ClearingHouse() {
  const { prev, next } = getPrevNext("/docs/compliance/clearing-house");

  return (
    <DocsContent>
      <h1>FIFA Clearing House</h1>
      <p className="subtitle">
        The FIFA Clearing House is a centralized payment system for international transfers. Inter Agentcy integrates directly with it, automating payment processing and ensuring full transparency on every transaction.
      </p>

      <h2>What Is the FIFA Clearing House?</h2>
      <p>
        Established as part of FIFA&apos;s broader reform agenda, the Clearing House acts as a central financial intermediary for international football transfers. Instead of clubs paying agents directly (which historically led to opacity and disputes), all agent payments for international transfers are routed through the Clearing House.
      </p>
      <p>
        The Clearing House verifies that payments comply with FFAR commission caps, ensures training compensation and solidarity contributions are paid, and creates an auditable record of every transaction.
      </p>

      <Callout type="info" title="Mandatory for International Transfers">
        For all international transfers, agent commission payments must be processed through the FIFA Clearing House. Domestic transfers may follow national association rules. Inter Agentcy handles both workflows.
      </Callout>

      <h2>Integration Workflow</h2>
      <p>
        Here&apos;s how a deal flows through Inter Agentcy and the FIFA Clearing House:
      </p>
      <ol>
        <li><strong>Deal Creation:</strong> You create or accept a deal in the Inter Agentcy Deal Room, specifying terms, commission, and parties involved</li>
        <li><strong>Compliance Check:</strong> The platform automatically verifies commission caps, representation agreement validity, and conflict of interest rules</li>
        <li><strong>Document Generation:</strong> FIFA-standard agreements and payment instructions are generated and signed digitally</li>
        <li><strong>Clearing House Submission:</strong> Inter Agentcy submits the payment request to the FIFA Clearing House with all required documentation</li>
        <li><strong>Payment Processing:</strong> The Clearing House verifies the transaction and processes the payment from the club to the agent</li>
        <li><strong>Commission Split:</strong> The platform&apos;s commission share is automatically deducted, and the agent&apos;s net payment is disbursed</li>
        <li><strong>Confirmation &amp; Records:</strong> Both parties receive confirmation, and the full transaction is logged in your audit trail</li>
      </ol>

      <h2>Automated Payments</h2>
      <p>
        Without Inter Agentcy, agents must manually prepare documentation, submit payment requests, and track processing — a tedious process prone to delays and errors. Our integration automates the entire flow:
      </p>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Without Inter Agentcy</th>
            <th>With Inter Agentcy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Document preparation</td>
            <td>Manual (hours)</td>
            <td>Auto-generated (minutes)</td>
          </tr>
          <tr>
            <td>Compliance verification</td>
            <td>Self-check or legal counsel</td>
            <td>Automated with alerts</td>
          </tr>
          <tr>
            <td>Clearing House submission</td>
            <td>Manual upload</td>
            <td>One-click submission</td>
          </tr>
          <tr>
            <td>Payment tracking</td>
            <td>Email follow-ups</td>
            <td>Real-time dashboard</td>
          </tr>
          <tr>
            <td>Record keeping</td>
            <td>Spreadsheets/folders</td>
            <td>Automatic audit trail</td>
          </tr>
        </tbody>
      </table>

      <h2>Commission Routing</h2>
      <p>
        When a payment is processed through the Clearing House, Inter Agentcy automatically handles commission routing:
      </p>
      <ul>
        <li>The full agent commission is received from the Clearing House</li>
        <li>The platform&apos;s share (based on your subscription tier) is deducted</li>
        <li>Your net commission is transferred to your registered bank account</li>
        <li>If multiple agents are involved (co-agent deals), the split is calculated and each agent receives their share</li>
        <li>All deductions and distributions are visible in your transaction dashboard</li>
      </ul>

      <Callout type="tip" title="Faster Payments">
        Pro and Enterprise agents benefit from priority processing. While standard Clearing House timelines apply to FIFA&apos;s side, Inter Agentcy&apos;s automated submission means your documentation is always ready — reducing delays caused by incomplete or incorrect paperwork.
      </Callout>

      <h2>Transparency Benefits</h2>
      <p>
        The combination of the FIFA Clearing House and Inter Agentcy&apos;s platform creates unprecedented transparency in football agent transactions:
      </p>
      <ul>
        <li><strong>Full audit trail:</strong> Every step from deal creation to payment receipt is logged and timestamped</li>
        <li><strong>Regulatory compliance proof:</strong> Downloadable compliance certificates for each transaction</li>
        <li><strong>Dispute resolution:</strong> Complete documentation available if any party raises a dispute</li>
        <li><strong>Tax reporting:</strong> Automated annual summaries of all commissions received, formatted for tax filing</li>
        <li><strong>Client reporting:</strong> Share transaction summaries with players to maintain trust and transparency</li>
      </ul>

      <Callout type="highlight" title="Building Trust">
        In an industry historically plagued by opacity in financial dealings, full Clearing House integration positions you as a transparent, professional, and trustworthy agent — a significant competitive advantage.
      </Callout>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
