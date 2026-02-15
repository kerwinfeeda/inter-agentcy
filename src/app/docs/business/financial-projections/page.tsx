import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function FinancialProjections() {
  const { prev, next } = getPrevNext("/docs/business/financial-projections");

  return (
    <DocsContent>
      <h1>Financial Projections</h1>
      <p className="subtitle">
        A conservative five-year outlook showing the path from launch to profitability — driven by subscription revenue, commission splits, and compounding network effects.
      </p>

      <Callout type="info" title="Conservative Estimates">
        These projections assume modest market penetration (1–3% of licensed agents) and conservative conversion rates. The upside case — capturing 5–10% of the $1.37B agent commission pool — is significantly higher.
      </Callout>

      <h2>Five-Year Overview</h2>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Year 1</th>
            <th>Year 2</th>
            <th>Year 3</th>
            <th>Year 4</th>
            <th>Year 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Registered Agents</strong></td>
            <td>500</td>
            <td>2,000</td>
            <td>5,000</td>
            <td>8,000</td>
            <td>10,000+</td>
          </tr>
          <tr>
            <td><strong>Pro Conversion Rate</strong></td>
            <td>10%</td>
            <td>25%</td>
            <td>30%</td>
            <td>35%</td>
            <td>35%</td>
          </tr>
          <tr>
            <td><strong>Paying Agents (Pro+Enterprise)</strong></td>
            <td>50</td>
            <td>500</td>
            <td>1,500</td>
            <td>2,800</td>
            <td>3,500+</td>
          </tr>
          <tr>
            <td><strong>Other Roles (Scouts, Reps, Introducers)</strong></td>
            <td>200</td>
            <td>1,000</td>
            <td>3,000</td>
            <td>6,000</td>
            <td>10,000+</td>
          </tr>
          <tr>
            <td><strong>Subscription Revenue</strong></td>
            <td>~€60K</td>
            <td>~€500K</td>
            <td>~€2M</td>
            <td>~€4M</td>
            <td>€5–10M</td>
          </tr>
          <tr>
            <td><strong>Commission Revenue</strong></td>
            <td>~€20K</td>
            <td>€250–500K</td>
            <td>€1–2M</td>
            <td>€2–4M</td>
            <td>€3–6M</td>
          </tr>
          <tr>
            <td><strong>Total Revenue</strong></td>
            <td>~€80K</td>
            <td>~€750K–1M</td>
            <td>~€3–4M</td>
            <td>~€6–8M</td>
            <td>€8–16M</td>
          </tr>
          <tr>
            <td><strong>Status</strong></td>
            <td>Pre-revenue / validation</td>
            <td>Early traction</td>
            <td>Approaching breakeven</td>
            <td>Profitable</td>
            <td>Scaling</td>
          </tr>
        </tbody>
      </table>

      <h2>Year-by-Year Breakdown</h2>

      <h3>Year 1 — Validate &amp; Launch</h3>
      <ul>
        <li><strong>Target:</strong> 500 registered agents, 200 other role users</li>
        <li><strong>Focus:</strong> Product-market fit, first club pilots, FIFA exam partnership</li>
        <li><strong>Revenue:</strong> ~€80K (mostly from early Pro subscribers and small commission flows)</li>
        <li><strong>Milestones:</strong> Platform launch, first 50 paying users, first deal processed through Clearing House integration, 3–5 club pilots initiated</li>
        <li><strong>Key cost:</strong> Engineering team, cloud infrastructure, initial marketing</li>
      </ul>

      <h3>Year 2 — Early Traction</h3>
      <ul>
        <li><strong>Target:</strong> 2,000 agents, 1,000 other roles</li>
        <li><strong>Focus:</strong> Scaling agent acquisition, proving commission model, expanding to 2–3 European markets</li>
        <li><strong>Revenue:</strong> ~€500K subscriptions + €250–500K commissions = ~€750K–1M total</li>
        <li><strong>Milestones:</strong> 500 paying users, first Enterprise client, expansion to South America scouting network, seed/Series A fundraise</li>
      </ul>

      <h3>Year 3 — Approaching Breakeven</h3>
      <ul>
        <li><strong>Target:</strong> 5,000 agents, 3,000 other roles</li>
        <li><strong>Focus:</strong> Network effects kicking in, club adoption growing, regional expansion (Africa, South America)</li>
        <li><strong>Revenue:</strong> €3–4M total</li>
        <li><strong>Milestones:</strong> Breakeven in sight, 20+ club partnerships, scouting network across 3 continents, community features driving retention</li>
      </ul>

      <h3>Year 4 — Profitable</h3>
      <ul>
        <li><strong>Target:</strong> 8,000 agents, 6,000 other roles</li>
        <li><strong>Focus:</strong> Profitability, Middle East and North American expansion, premium add-ons (analytics packages, education)</li>
        <li><strong>Revenue:</strong> €6–8M total</li>
        <li><strong>Milestones:</strong> Cash flow positive, 50+ club partnerships, industry conference launch, brand recognition as the default agent platform</li>
      </ul>

      <h3>Year 5 — Scaling</h3>
      <ul>
        <li><strong>Target:</strong> 10,000+ agents, 10,000+ other roles</li>
        <li><strong>Focus:</strong> Global coverage, Asia-Pacific expansion, white-label enterprise offerings, potential acquisition opportunities</li>
        <li><strong>Revenue:</strong> €8–16M total</li>
        <li><strong>Milestones:</strong> Market leader position, presence in 50+ countries, 100+ club partnerships, Series B or profitability-funded growth</li>
      </ul>

      <Callout type="highlight" title="The Upside Case">
        Capturing just 1% of the $1.37B+ agent commission pool equals ~$13.7M in commission revenue alone. Combined with subscriptions from 10,000+ users across all roles, the ceiling is significantly higher than our base projections.
      </Callout>

      <h2>Revenue Mix Evolution</h2>
      <table>
        <thead>
          <tr>
            <th>Revenue Stream</th>
            <th>Year 1</th>
            <th>Year 3</th>
            <th>Year 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Subscriptions</strong></td>
            <td>75%</td>
            <td>55%</td>
            <td>45%</td>
          </tr>
          <tr>
            <td><strong>Commission Splits</strong></td>
            <td>20%</td>
            <td>35%</td>
            <td>40%</td>
          </tr>
          <tr>
            <td><strong>Add-ons &amp; Education</strong></td>
            <td>5%</td>
            <td>10%</td>
            <td>15%</td>
          </tr>
        </tbody>
      </table>
      <p>
        Over time, commission revenue grows as a share of total revenue — reflecting increasing deal volume through the platform and the compounding effect of network growth.
      </p>

      <h2>Breakeven Analysis</h2>
      <p>
        With estimated annual operating costs of €2–3M (engineering, operations, marketing, infrastructure), breakeven is projected at <strong>Year 3–4</strong>. Key assumptions:
      </p>
      <ul>
        <li>~1,500 paying agent subscribers at an average of €90/month</li>
        <li>~500 paying users across other roles at an average of €60/month</li>
        <li>Commission revenue from deals processed through the platform</li>
        <li>Operating leverage: marginal cost per new user is low once the platform is built</li>
      </ul>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
