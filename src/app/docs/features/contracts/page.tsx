import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function Contracts() {
  const { prev, next } = getPrevNext("/docs/features/contracts");

  return (
    <DocsContent>
      <h1>Contracts &amp; Compliance</h1>
      <p className="subtitle">
        FIFA-compliant contract tools with standard templates, automatic commission cap checks, digital signatures, and comprehensive audit trails.
      </p>

      <h2>FIFA Standard Templates</h2>
      <p>
        Inter Agentcy provides pre-built contract templates that comply with FIFA&apos;s Football Agent Regulations (FFAR 2023). These include representation agreements, transfer mandates, and service contracts — all updated automatically when FIFA issues regulatory changes.
      </p>
      <ul>
        <li><strong>Representation Agreement</strong> — FIFA-standard form for agent-player representation, with all required disclosures and terms pre-populated</li>
        <li><strong>Transfer Mandate</strong> — Authorized engagement letter for specific transfer negotiations</li>
        <li><strong>Club Service Agreement</strong> — Template for when agents are engaged by clubs to identify or negotiate for players</li>
        <li><strong>Dual Representation Disclosure</strong> — Required forms when an agent represents both parties in a transaction</li>
      </ul>

      <Callout type="warning" title="Commission Caps">
        FFAR 2023 mandates strict commission caps: <strong>3% of player gross remuneration</strong> for player-side representation and <strong>10% of the transfer fee</strong> for club-side services. Inter Agentcy automatically validates these limits before any contract can be finalized.
      </Callout>

      <h2>Automated Commission Checks</h2>
      <p>
        The platform automatically calculates and validates commission amounts against FIFA regulatory limits. When you enter deal parameters — player salary, transfer fee, representation type — the system instantly flags any potential compliance issues before the contract is generated.
      </p>
      <p>
        This prevents costly errors that could result in FIFA sanctions, license suspension, or payment clawbacks through the Clearing House.
      </p>

      <h2>Digital Signatures</h2>
      <p>
        All contracts support legally binding digital signatures compliant with eIDAS (EU), ESIGN (US), and equivalent standards worldwide. The signing workflow includes identity verification, timestamp certification, and tamper-proof document sealing.
      </p>

      <h2>Audit Trails</h2>
      <p>
        Every contract action is logged: creation, editing, sharing, signing, amendments, and archival. These immutable audit trails satisfy FIFA disclosure requirements and provide bulletproof documentation for any disputes or regulatory inquiries.
      </p>

      <h2>Contract Lifecycle Management</h2>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Features</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Drafting</strong></td>
            <td>Template selection, auto-populated fields from CRM, commission calculator, compliance pre-check</td>
          </tr>
          <tr>
            <td><strong>Review</strong></td>
            <td>Version control, tracked changes, commenting, legal review request (Pro+ tiers)</td>
          </tr>
          <tr>
            <td><strong>Signing</strong></td>
            <td>Multi-party digital signatures, identity verification, timestamp certification</td>
          </tr>
          <tr>
            <td><strong>Active</strong></td>
            <td>Expiry tracking, milestone alerts, amendment management, compliance monitoring</td>
          </tr>
          <tr>
            <td><strong>Renewal/Expiry</strong></td>
            <td>Automated reminders, renewal template generation, historical comparison</td>
          </tr>
          <tr>
            <td><strong>Archive</strong></td>
            <td>Secure storage, search, export, regulatory retention compliance</td>
          </tr>
        </tbody>
      </table>

      <h2>Legal Support</h2>
      <p>
        Pro and Enterprise tier agents get access to additional legal support:
      </p>
      <ul>
        <li><strong>Regulatory alerts</strong> — Real-time notifications when FIFA or national FAs update regulations that affect your contracts</li>
        <li><strong>Legal helpdesk</strong> — Access to sports law professionals for contract review and compliance questions</li>
        <li><strong>Dispute preparation</strong> — Tools to compile documentation for FIFA or CAS proceedings</li>
        <li><strong>Cross-border guidance</strong> — Jurisdiction-specific advice for international transfers</li>
      </ul>

      <Callout type="tip" title="Enterprise Feature">
        Enterprise accounts can create custom contract templates approved by their legal team, enforcing firm-wide standards across all agents in the organization.
      </Callout>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
