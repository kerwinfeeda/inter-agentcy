import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function Scouting() {
  const { prev, next } = getPrevNext("/docs/features/scouting");

  return (
    <DocsContent>
      <h1>Scouting Intelligence</h1>
      <p className="subtitle">
        Integrated data from Wyscout, Opta, and StatsBomb combined with our scout network to deliver comprehensive player intelligence, comparison tools, and data-rich dossiers.
      </p>

      <h2>Data Integrations</h2>
      <p>
        Inter Agentcy aggregates data from the industry&apos;s leading providers into a single unified interface, eliminating the need for multiple expensive subscriptions:
      </p>
      <table>
        <thead>
          <tr>
            <th>Provider</th>
            <th>Data Type</th>
            <th>Coverage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Wyscout</strong></td>
            <td>Video footage, match analysis, tactical data</td>
            <td>200+ leagues worldwide</td>
          </tr>
          <tr>
            <td><strong>Opta</strong></td>
            <td>Event-level match data, detailed statistics</td>
            <td>Top 20 leagues, major tournaments</td>
          </tr>
          <tr>
            <td><strong>StatsBomb</strong></td>
            <td>Advanced metrics (xG, xA, progressive carries), pressure data</td>
            <td>50+ competitions</td>
          </tr>
          <tr>
            <td><strong>Transfermarkt</strong></td>
            <td>Market values, transfer history, contract data</td>
            <td>Global coverage</td>
          </tr>
          <tr>
            <td><strong>Inter Agentcy Scouts</strong></td>
            <td>On-ground reports, video clips, personal assessments</td>
            <td>Africa, South America, Eastern Europe, Asia</td>
          </tr>
        </tbody>
      </table>

      <h2>Player Comparison Tool</h2>
      <p>
        Compare any two or more players across dozens of metrics. The comparison engine normalizes data across leagues and positions, providing apples-to-apples assessments even when comparing a Brazilian Serie A striker with a Bundesliga forward.
      </p>
      <ul>
        <li>Side-by-side statistical comparison with radar charts</li>
        <li>Position-adjusted percentile rankings</li>
        <li>Historical performance trends over multiple seasons</li>
        <li>Market value trajectories and projected development curves</li>
        <li>Exportable comparison reports for club presentations</li>
      </ul>

      <h2>Data-Rich Dossiers</h2>
      <p>
        Generate comprehensive player dossiers with a single click. Each dossier combines statistical analysis, video highlights, scouting reports, market context, and personal details into a professional presentation-ready document that you can share with clubs.
      </p>

      <Callout type="tip" title="Club Presentations">
        Use the dossier generator to create polished player presentations for sporting directors. Pro and Elite tier users get branded dossiers with their agency logo and custom formatting.
      </Callout>

      <h2>Scout Report Workflow</h2>
      <p>
        Scouts on the platform submit structured reports following a standardized template:
      </p>
      <ol>
        <li><strong>Player identification</strong> — Basic info, current club, position, age, physical attributes</li>
        <li><strong>Technical assessment</strong> — Passing, shooting, dribbling, first touch, weak foot rating</li>
        <li><strong>Tactical assessment</strong> — Positioning, movement off the ball, pressing intensity, defensive contribution</li>
        <li><strong>Physical assessment</strong> — Speed, stamina, strength, aerial ability, injury history</li>
        <li><strong>Mental assessment</strong> — Leadership, composure, work rate, attitude, adaptability</li>
        <li><strong>Video evidence</strong> — Linked clips demonstrating key observations</li>
        <li><strong>Recommendation</strong> — Overall rating, suggested level, development potential, comparable players</li>
      </ol>

      <h2>Search &amp; Filtering</h2>
      <p>
        The scouting intelligence engine supports advanced search with filters including position, age range, nationality, contract status, market value range, specific statistical thresholds (e.g., xG per 90 above 0.5), preferred foot, height, and available leagues.
      </p>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
