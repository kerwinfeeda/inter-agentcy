import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function Analytics() {
  const { prev, next } = getPrevNext("/docs/features/analytics");

  return (
    <DocsContent>
      <h1>Analytics &amp; Deal Support</h1>
      <p className="subtitle">
        Transfer fee trends, salary benchmarks, AI-powered predictions, and negotiation scenario modeling to give you a data-driven edge in every deal.
      </p>

      <h2>Transfer Fee Analytics</h2>
      <p>
        Access comprehensive transfer fee data across leagues, positions, age groups, and nationalities. The analytics engine provides historical trend analysis showing how fees have evolved, seasonal patterns across transfer windows, and projections for upcoming windows based on market conditions.
      </p>

      <h2>Salary Benchmarking</h2>
      <p>
        Compare player salary expectations against market benchmarks. The system aggregates anonymized salary data by league, position, age, and performance level to provide evidence-based guidance for contract negotiations.
      </p>
      <ul>
        <li>League-by-league salary ranges for every position</li>
        <li>Performance-adjusted compensation analysis</li>
        <li>Bonus structure benchmarks (signing, performance, loyalty)</li>
        <li>Cost-of-living adjustments for cross-border moves</li>
        <li>Image rights and commercial income benchmarking</li>
      </ul>

      <h2>AI-Powered Predictions</h2>
      <p>
        Machine learning models analyze historical transfer data, player performance trends, market conditions, and club spending patterns to generate predictions:
      </p>
      <table>
        <thead>
          <tr>
            <th>Prediction Type</th>
            <th>Description</th>
            <th>Accuracy Target</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Market Value Forecast</strong></td>
            <td>Projected market value at 6, 12, and 24 months based on performance trajectory</td>
            <td>±15%</td>
          </tr>
          <tr>
            <td><strong>Transfer Probability</strong></td>
            <td>Likelihood of a player moving in the next transfer window</td>
            <td>70%+</td>
          </tr>
          <tr>
            <td><strong>Fee Estimation</strong></td>
            <td>Expected transfer fee range based on comparable transactions</td>
            <td>±20%</td>
          </tr>
          <tr>
            <td><strong>Fit Score</strong></td>
            <td>How well a player matches a specific club&apos;s style, needs, and budget</td>
            <td>Relative ranking</td>
          </tr>
        </tbody>
      </table>

      <Callout type="tip" title="Negotiation Leverage">
        Walk into every negotiation armed with data. When a club offers below market rate, show comparable transfers. When a player demands above benchmark, present salary data. Data turns subjective discussions into objective negotiations.
      </Callout>

      <h2>Negotiation Scenario Modeling</h2>
      <p>
        Model different deal structures and see their financial implications for all parties:
      </p>
      <ul>
        <li><strong>Fee structure scenarios</strong> — Compare upfront fees vs. installments vs. performance-based add-ons</li>
        <li><strong>Commission calculations</strong> — Automatic FIFA-compliant commission modeling for different deal structures</li>
        <li><strong>Multi-year contract modeling</strong> — Project total value of contracts with escalating salaries and bonuses</li>
        <li><strong>Tax implications</strong> — High-level tax impact by jurisdiction for cross-border transfers</li>
        <li><strong>Sell-on clause analysis</strong> — Model future returns from sell-on percentages</li>
      </ul>

      <h2>Dashboard &amp; Reporting</h2>
      <p>
        Customizable analytics dashboards give you an at-a-glance view of your business performance:
      </p>
      <ul>
        <li>Total portfolio value and growth trends</li>
        <li>Commission earnings by period, client, and deal type</li>
        <li>Deal pipeline conversion rates and average deal cycle time</li>
        <li>Network activity metrics (introductions, meetings, proposals)</li>
        <li>Exportable reports for financial planning and investor presentations</li>
      </ul>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
