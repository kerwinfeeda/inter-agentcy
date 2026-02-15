import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function Roles() {
  const { prev, next } = getPrevNext("/docs/platform/roles");

  return (
    <DocsContent>
      <h1>Roles</h1>
      <p className="subtitle">
        Agents, Scouts, Representatives, and Introducers — four distinct roles with unique responsibilities, permissions, and earning models, all working together within FIFA&apos;s regulatory framework.
      </p>

      <h2>Licensed Agents</h2>
      <p>
        Licensed Football Agents are the cornerstone of the Inter Agentcy platform. They are the only role authorized under FIFA&apos;s Football Agent Regulations (FFAR 2023) to negotiate player contracts and transfers on behalf of clients.
      </p>
      <h3>Responsibilities</h3>
      <ul>
        <li>Negotiate employment contracts between players and clubs</li>
        <li>Facilitate and negotiate transfer agreements</li>
        <li>Advise players on career decisions and market positioning</li>
        <li>Ensure all transactions comply with FIFA regulations</li>
        <li>Manage client relationships and representation agreements</li>
        <li>Process payments through the FIFA Clearing House</li>
      </ul>
      <h3>What They Can Do on Inter Agentcy</h3>
      <ul>
        <li>Full access to CRM, contract tools, and Deal Room</li>
        <li>Create and manage representation agreements using FIFA standard forms</li>
        <li>Submit player profiles to clubs and respond to club requests</li>
        <li>Access scouting intelligence and analytics dashboards</li>
        <li>Receive scout reports and introducer referrals</li>
        <li>Collaborate with representatives on holistic player management</li>
      </ul>
      <h3>FIFA Compliance Requirements</h3>
      <ul>
        <li>Must hold a valid FIFA Football Agent License</li>
        <li>Commission capped at 3% of player gross salary or 10% of transfer fee</li>
        <li>Must use FIFA standard representation contracts</li>
        <li>All payments processed through the FIFA Clearing House</li>
        <li>Annual continuing education requirements</li>
      </ul>

      <Callout type="warning" title="License Verification">
        All agents must verify their FIFA license during onboarding. Unverified accounts cannot access contract negotiation tools, the Deal Room, or commission processing features. Verification typically takes 24-48 hours.
      </Callout>

      <h2>Scouts</h2>
      <p>
        Scouts are the eyes and ears of the football ecosystem. They identify promising talent across the globe, from grassroots academies in West Africa to lower league clubs in South America, creating the pipeline that feeds the entire representation industry.
      </p>
      <h3>Responsibilities</h3>
      <ul>
        <li>Identify and evaluate promising football talent</li>
        <li>Create detailed scouting reports with video and statistical analysis</li>
        <li>Monitor player development and career trajectories</li>
        <li>Build relationships with local clubs, academies, and coaches</li>
        <li>Provide regional market intelligence to agents</li>
      </ul>
      <h3>What They Can Do</h3>
      <ul>
        <li>Access player databases and scouting tools</li>
        <li>Submit structured scouting reports visible to licensed agents</li>
        <li>Track finder&apos;s fees for discovered players</li>
        <li>Connect with agents seeking talent in their region</li>
        <li>Access data integrations (Wyscout, Opta, StatsBomb)</li>
      </ul>
      <h3>What They Cannot Do</h3>
      <ul>
        <li>Negotiate contracts or transfers (requires FIFA agent license)</li>
        <li>Directly represent players in official capacity</li>
        <li>Access contract management tools</li>
        <li>Process transactions through the Clearing House</li>
      </ul>

      <h2>Representatives</h2>
      <p>
        Representatives manage the non-transfer aspects of player careers: brand building, media relations, sponsorship negotiations, commercial partnerships, and career planning. They complement licensed agents by handling everything outside the pitch-side negotiations.
      </p>
      <h3>Responsibilities</h3>
      <ul>
        <li>Manage player brand identity and public image</li>
        <li>Negotiate and manage sponsorship and endorsement deals</li>
        <li>Coordinate media appearances and interview requests</li>
        <li>Develop long-term career and post-career planning</li>
        <li>Handle commercial partnerships and licensing</li>
      </ul>
      <h3>What They Can Do</h3>
      <ul>
        <li>Access career management and planning tools</li>
        <li>Manage player profiles, media kits, and brand assets</li>
        <li>Track sponsorship deals and commercial revenue</li>
        <li>Connect with agents for transfer-related collaboration</li>
        <li>Use analytics for brand value assessment</li>
      </ul>
      <h3>What They Cannot Do</h3>
      <ul>
        <li>Negotiate employment contracts or transfers</li>
        <li>Use the Deal Room for transfer negotiations</li>
        <li>Represent players in FIFA-regulated transactions</li>
      </ul>

      <h2>Introducers</h2>
      <p>
        Introducers are the connective tissue of the football network. They leverage their relationships across geographies and cultures to bridge gaps between players, agents, clubs, and other stakeholders. Their value lies in who they know and their ability to create meaningful connections.
      </p>
      <h3>Responsibilities</h3>
      <ul>
        <li>Identify opportunities for connections between stakeholders</li>
        <li>Facilitate introductions between players and agents</li>
        <li>Connect agents with club decision-makers</li>
        <li>Bridge cultural and geographic gaps in the market</li>
        <li>Maintain and expand professional network</li>
      </ul>
      <h3>What They Can Do</h3>
      <ul>
        <li>Browse the network and identify connection opportunities</li>
        <li>Create and log introductions with auditable trails</li>
        <li>Track referral commissions from successful introductions</li>
        <li>Build a verified profile showcasing network reach</li>
        <li>Access network analytics and relationship mapping</li>
      </ul>
      <h3>What They Cannot Do</h3>
      <ul>
        <li>Negotiate any contracts or transfers</li>
        <li>Directly represent players</li>
        <li>Access contract or compliance tools</li>
        <li>Claim involvement in transactions they didn&apos;t introduce</li>
      </ul>

      <h2>Role Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Capability</th>
            <th>Agent</th>
            <th>Scout</th>
            <th>Rep</th>
            <th>Introducer</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Negotiate contracts</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
          <tr><td>CRM access</td><td>✅</td><td>Limited</td><td>✅</td><td>Limited</td></tr>
          <tr><td>Deal Room</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
          <tr><td>Scouting tools</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td></tr>
          <tr><td>Career management</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td></tr>
          <tr><td>Referral tracking</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td></tr>
          <tr><td>Clearing House</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
          <tr><td>FIFA license required</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
        </tbody>
      </table>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
