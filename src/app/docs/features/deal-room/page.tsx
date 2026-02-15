import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function DealRoom() {
  const { prev, next } = getPrevNext("/docs/features/deal-room");

  return (
    <DocsContent>
      <h1>Club &amp; Transfer Market Hub</h1>
      <p className="subtitle">
        A marketplace connecting agents with verified club officials, featuring virtual pitch meetings, matchmaking events, and real-time transfer intelligence.
      </p>

      <Callout type="highlight" title="The Deal Room Advantage">
        The Deal Room gives independent agents the same access to clubs and transfer opportunities that was previously exclusive to mega-agencies with decades of relationship building. Level the playing field from day one.
      </Callout>

      <h2>How It Works</h2>
      <p>
        The Club &amp; Transfer Market Hub — known as the Deal Room — is a secure, verified marketplace where agents and club officials can discover opportunities, share player profiles, and initiate transfer discussions. Only verified licensed agents and authenticated club representatives can access the Deal Room.
      </p>

      <h2>Key Features</h2>

      <h3>Club Opportunity Board</h3>
      <p>
        Clubs post their transfer requirements: positions needed, budget ranges, preferred player profiles, and timeline. Agents can browse and filter these opportunities, then submit relevant players from their portfolio with full dossier packages.
      </p>

      <h3>Player Showcase</h3>
      <p>
        Agents create showcase profiles for players available for transfer. These include statistical highlights, video reels, contract situation, salary expectations, and any specific requirements. Clubs can browse the showcase and express interest directly.
      </p>

      <h3>Virtual Pitch Meetings</h3>
      <p>
        Integrated video conferencing allows agents and club officials to hold structured pitch meetings within the platform. All meetings are logged for compliance purposes, with shared document viewing, screen presentation capabilities, and meeting summaries.
      </p>

      <h3>Matchmaking Engine</h3>
      <p>
        The platform&apos;s AI-powered matchmaking engine suggests potential fits between available players and club requirements. The algorithm considers playing style, statistical profile, budget compatibility, league level, and historical transfer patterns.
      </p>

      <h3>Transfer Intelligence</h3>
      <p>
        Real-time market intelligence within the Deal Room includes:
      </p>
      <ul>
        <li>Active transfer window timelines by league and country</li>
        <li>Recent comparable transfers with fees and terms</li>
        <li>Club transfer budget estimates and spending patterns</li>
        <li>Market trend analysis and valuation benchmarks</li>
        <li>Regulatory requirements for cross-border transfers</li>
      </ul>

      <h2>Deal Pipeline</h2>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Discovery</strong></td>
            <td>Browse opportunities, receive matchmaking suggestions, search club needs</td>
          </tr>
          <tr>
            <td><strong>Introduction</strong></td>
            <td>Submit player profile, express interest, request information</td>
          </tr>
          <tr>
            <td><strong>Discussion</strong></td>
            <td>Secure messaging, document sharing, virtual meetings</td>
          </tr>
          <tr>
            <td><strong>Negotiation</strong></td>
            <td>Term sheet builder, scenario modeling, compliance checks</td>
          </tr>
          <tr>
            <td><strong>Closing</strong></td>
            <td>Contract generation, digital signatures, Clearing House payment setup</td>
          </tr>
        </tbody>
      </table>

      <h2>Matchmaking Events</h2>
      <p>
        Inter Agentcy hosts periodic virtual matchmaking events — focused sessions where multiple clubs and agents connect around specific themes: January window preparation, summer window planning, specific position focuses, or regional talent showcases. These events are exclusive to verified platform members.
      </p>

      <Callout type="info" title="Verification Required">
        The Deal Room is restricted to FIFA-licensed agents with verified credentials and authenticated club officials. This ensures every interaction is legitimate and every participant is authorized to conduct business.
      </Callout>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
