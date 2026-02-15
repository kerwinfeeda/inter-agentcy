import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function CRM() {
  const { prev, next } = getPrevNext("/docs/features/crm");

  return (
    <DocsContent>
      <h1>CRM &amp; Client Management</h1>
      <p className="subtitle">
        A centralized player and contact database purpose-built for football representation, with interaction logging, contract expiry reminders, and relationship mapping.
      </p>

      <Callout type="highlight" title="Purpose-Built for Football">
        Unlike generic CRMs like Salesforce or HubSpot, Inter Agentcy&apos;s CRM is designed from the ground up for football agents. Every field, workflow, and automation is tailored to the specific needs of player representation.
      </Callout>

      <h2>Core Capabilities</h2>

      <h3>Centralized Player Database</h3>
      <p>
        Store every detail about your clients in one place: personal information, career history, contract details, medical records, performance statistics, market valuation, and representation agreements. Each player profile automatically enriches itself with data from integrated sources like Transfermarkt, Wyscout, and league databases.
      </p>

      <h3>Contact Management</h3>
      <p>
        Beyond players, the CRM manages your entire professional network: club officials, sporting directors, coaches, scouts, fellow agents, lawyers, journalists, and brand partners. Every contact is categorized, tagged, and searchable, with full interaction history attached.
      </p>

      <h3>Interaction Logging</h3>
      <p>
        Every call, meeting, email, and message is logged with timestamps, participants, and notes. This creates an auditable trail of your professional activities — critical for FIFA compliance and invaluable for maintaining relationship continuity.
      </p>

      <h3>Contract Expiry Reminders</h3>
      <p>
        Automated alerts notify you when player contracts are approaching expiry — at 18 months, 12 months, 6 months, and 3 months before expiration. These alerts also highlight representation agreement renewal dates and registration window deadlines.
      </p>

      <h2>Key Features</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Description</th>
            <th>Benefit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Smart Search</strong></td>
            <td>Full-text search across all contacts and players with filters for position, age, nationality, contract status</td>
            <td>Find any player or contact in seconds</td>
          </tr>
          <tr>
            <td><strong>Pipeline View</strong></td>
            <td>Kanban-style board showing players across deal stages: prospecting, in discussion, negotiating, closing, signed</td>
            <td>Visual deal management at a glance</td>
          </tr>
          <tr>
            <td><strong>Auto-Enrichment</strong></td>
            <td>Player profiles automatically update with latest stats, market values, and transfer news from integrated data sources</td>
            <td>Always-current information without manual updates</td>
          </tr>
          <tr>
            <td><strong>Document Storage</strong></td>
            <td>Attach contracts, passports, medical reports, and any document to player or contact profiles</td>
            <td>All paperwork in one secure location</td>
          </tr>
          <tr>
            <td><strong>Relationship Mapping</strong></td>
            <td>Visual graph showing connections between players, clubs, agents, and contacts</td>
            <td>Identify hidden opportunities through your network</td>
          </tr>
          <tr>
            <td><strong>Activity Timeline</strong></td>
            <td>Chronological feed of all interactions, status changes, and events per player</td>
            <td>Complete history at your fingertips</td>
          </tr>
        </tbody>
      </table>

      <h2>Use Cases</h2>
      <ul>
        <li><strong>New client onboarding</strong> — Create a complete player profile in minutes, auto-populate from data sources, attach representation agreement, and set up contract reminders.</li>
        <li><strong>Transfer window preparation</strong> — Filter your roster by contract status, identify players open to moves, and create targeted shortlists for club contacts.</li>
        <li><strong>Relationship maintenance</strong> — Set recurring check-in reminders for key contacts, track when you last spoke with a sporting director, and never let important relationships go cold.</li>
        <li><strong>Team collaboration</strong> — Enterprise accounts can share CRM access across multiple agents, with role-based permissions ensuring data security.</li>
      </ul>

      <Callout type="tip" title="Import Your Data">
        Migrating from spreadsheets or another CRM? Inter Agentcy supports CSV import and has dedicated migration tools for common CRM platforms. Our onboarding team can assist with data migration for Pro and Enterprise customers.
      </Callout>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
