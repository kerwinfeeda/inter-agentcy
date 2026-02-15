import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function CareerTracking() {
  const { prev, next } = getPrevNext("/docs/features/career-tracking");

  return (
    <DocsContent>
      <h1>Player Career Tracking</h1>
      <p className="subtitle">
        A holistic career timeline dashboard with milestone alerts, performance tracking, and long-term development insights for every player in your portfolio.
      </p>

      <h2>Career Timeline Dashboard</h2>
      <p>
        Every player gets a visual career timeline showing their complete professional history: clubs, transfers, contract milestones, international caps, injuries, awards, and key performance moments. This gives agents a comprehensive narrative view of their client&apos;s career arc.
      </p>

      <h2>Milestone Alerts</h2>
      <p>
        Automated notifications keep you informed about important career events:
      </p>
      <ul>
        <li><strong>Contract milestones</strong> — Approaching expiry dates, option trigger dates, performance bonus thresholds</li>
        <li><strong>Performance milestones</strong> — Appearance benchmarks (50th, 100th cap), goal tallies, statistical achievements</li>
        <li><strong>Market triggers</strong> — Significant market value changes (up or down), comparable player transfers that affect valuation</li>
        <li><strong>International duty</strong> — National team call-ups, tournament selections, eligibility changes</li>
        <li><strong>Development markers</strong> — Age-based career stage transitions, recommended career moves based on analytics</li>
      </ul>

      <Callout type="info" title="Stay Proactive">
        Milestone alerts turn reactive agents into proactive ones. Know about contract opportunities, performance achievements, and market movements before your competitors — and before your clients have to ask.
      </Callout>

      <h2>Performance Tracking</h2>
      <p>
        Integrated performance data provides season-by-season and match-by-match analytics for every player:
      </p>
      <table>
        <thead>
          <tr>
            <th>Metric Category</th>
            <th>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Offensive</strong></td>
            <td>Goals, assists, xG, xA, shots per 90, conversion rate, progressive carries</td>
          </tr>
          <tr>
            <td><strong>Defensive</strong></td>
            <td>Tackles, interceptions, blocks, aerial duels won, pressures per 90</td>
          </tr>
          <tr>
            <td><strong>Passing</strong></td>
            <td>Pass completion %, progressive passes, key passes, through balls, cross accuracy</td>
          </tr>
          <tr>
            <td><strong>Physical</strong></td>
            <td>Distance covered, sprint count, top speed, minutes played, availability rate</td>
          </tr>
          <tr>
            <td><strong>Market</strong></td>
            <td>Current value, value trend, comparable sales, contract value relative to market</td>
          </tr>
        </tbody>
      </table>

      <h2>Holistic Career View</h2>
      <p>
        Beyond statistics, the career tracking system provides a complete picture of each player&apos;s professional life:
      </p>
      <ul>
        <li><strong>Media profile</strong> — Social media following, media mentions, public perception tracking</li>
        <li><strong>Commercial portfolio</strong> — Active sponsorships, brand partnerships, licensing deals</li>
        <li><strong>Medical history</strong> — Injury records, recovery timelines, fitness assessments (privacy-controlled)</li>
        <li><strong>Education &amp; development</strong> — Coaching badges, language skills, post-career preparation</li>
        <li><strong>Financial overview</strong> — Earnings history, projected future earnings, investment and pension planning</li>
      </ul>

      <h2>Development Recommendations</h2>
      <p>
        The platform&apos;s analytics engine generates career development recommendations based on player age, position, performance trends, and market dynamics. These AI-powered suggestions might include optimal timing for a transfer, leagues and clubs that would best suit the player&apos;s development stage, or areas of the game to improve for maximum market value impact.
      </p>

      <Callout type="tip" title="Representatives Love This">
        Career tracking isn&apos;t just for agents — representatives use these tools extensively for brand development, sponsorship pitches, and long-term career planning. The holistic view makes it easy to tell compelling player stories to commercial partners.
      </Callout>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
