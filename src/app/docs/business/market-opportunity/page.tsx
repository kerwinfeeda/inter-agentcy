import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function MarketOpportunity() {
  const { prev, next } = getPrevNext("/docs/business/market-opportunity");

  return (
    <DocsContent>
      <h1>Market Opportunity</h1>
      <p className="subtitle">
        The football agent industry is experiencing explosive growth. Record-breaking fees, a surge in licensed agents, and new FIFA regulations create a once-in-a-generation opportunity for a platform like Inter Agentcy.
      </p>

      <h2>The Numbers</h2>

      <Callout type="highlight" title="$1.37 Billion">
        Football agent fees hit a record <strong>$1.37 billion in 2024</strong> — a staggering 90% increase year-over-year. The market is not just growing; it&apos;s accelerating.
      </Callout>

      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Agent Fees (2024)</strong></td>
            <td>$1.37B (~€1.17B)</td>
          </tr>
          <tr>
            <td><strong>YoY Growth</strong></td>
            <td>~90%</td>
          </tr>
          <tr>
            <td><strong>FIFA Member Nations</strong></td>
            <td>211</td>
          </tr>
          <tr>
            <td><strong>First FIFA Exam Candidates (2023)</strong></td>
            <td>~1,950</td>
          </tr>
          <tr>
            <td><strong>Second FIFA Exam Candidates (2024)</strong></td>
            <td>~10,383</td>
          </tr>
          <tr>
            <td><strong>Exam Candidate Growth</strong></td>
            <td>~430%</td>
          </tr>
        </tbody>
      </table>

      <h2>TAM / SAM / SOM Analysis</h2>

      <h3>Total Addressable Market (TAM)</h3>
      <p>
        The global football agent commission pool of <strong>$1.37B+</strong> represents the total value at stake. Adding adjacent revenue from scouting fees, brand management, and referral commissions, the broader football intermediary market exceeds <strong>$2B annually</strong>. With 211 FIFA member nations, the market spans every continent.
      </p>

      <h3>Serviceable Addressable Market (SAM)</h3>
      <p>
        Our initial focus on licensed agents in Europe, plus scouts and representatives globally, targets approximately <strong>$500M–$800M</strong> in addressable commission and subscription revenue. This includes:
      </p>
      <ul>
        <li>~5,000–10,000 active licensed agents in European markets</li>
        <li>Tens of thousands of scouts, representatives, and intermediaries worldwide</li>
        <li>SaaS subscription revenue from all platform roles</li>
        <li>Commission splits on deals processed through the platform</li>
      </ul>

      <h3>Serviceable Obtainable Market (SOM)</h3>
      <p>
        In Year 1–3, targeting a realistic <strong>1–3% market penetration</strong> among licensed agents and early adoption by scouts and introducers, Inter Agentcy targets <strong>$5M–$15M</strong> in annual revenue by Year 3–4. At scale (Year 5+), capturing 5–10% of the agent commission pool alone represents <strong>$70M–$137M</strong>.
      </p>

      <h2>Why Now?</h2>
      <p>
        Several converging trends make this the perfect moment for Inter Agentcy:
      </p>
      <ul>
        <li><strong>New FIFA regulations (FFAR 2023):</strong> Mandatory licensing, commission caps, and Clearing House requirements create demand for compliance tools — exactly what Inter Agentcy provides</li>
        <li><strong>Surge in new agents:</strong> The 430% increase in exam candidates means thousands of newly licensed agents entering the market, all needing infrastructure and network access</li>
        <li><strong>Record transfer spending:</strong> Global transfer spending continues to set records, increasing the total commission pool</li>
        <li><strong>Professionalization trend:</strong> FIFA&apos;s reforms signal a long-term push toward professionalism, transparency, and accountability — aligning perfectly with Inter Agentcy&apos;s mission</li>
        <li><strong>No incumbent platform:</strong> There is no established end-to-end platform serving football agents with integrated technology + network. The market is fragmented across generic CRMs, spreadsheets, and informal networks</li>
      </ul>

      <Callout type="info" title="First-Mover Advantage">
        Inter Agentcy is the first platform to combine a full technology stack (CRM, compliance, contracts, analytics) with a multi-sided marketplace (agents, scouts, representatives, introducers). Network effects create a compounding moat — the earlier we start, the harder it is to replicate.
      </Callout>

      <h2>Global Reach</h2>
      <p>
        With 211 FIFA member nations, football is truly global. Key markets include:
      </p>
      <ul>
        <li><strong>Europe:</strong> The Big 5 leagues (England, Spain, Germany, Italy, France) account for the majority of transfer spending and agent fees</li>
        <li><strong>South America:</strong> Brazil and Argentina are the world&apos;s largest talent exporters, with a growing agent ecosystem</li>
        <li><strong>Africa:</strong> Rapidly developing football markets in West and North Africa produce increasing numbers of professional players</li>
        <li><strong>Asia &amp; Middle East:</strong> Saudi Pro League and other emerging leagues are driving new demand for agent services</li>
        <li><strong>North America:</strong> MLS continues to grow, attracting international talent and creating demand for cross-border agent expertise</li>
      </ul>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
