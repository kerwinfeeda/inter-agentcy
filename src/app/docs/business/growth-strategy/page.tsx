import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function GrowthStrategy() {
  const { prev, next } = getPrevNext("/docs/business/growth-strategy");

  return (
    <DocsContent>
      <h1>Growth Strategy</h1>
      <p className="subtitle">
        A phased approach to building the world&apos;s leading football agent platform — starting with newly licensed agents, expanding through network effects, and scaling globally.
      </p>

      <h2>1. Agent Acquisition</h2>

      <h3>FIFA Exam Partnership</h3>
      <p>
        The FIFA Football Agent Exam is the single largest funnel of new agents entering the market. With 10,000+ candidates per exam cycle, this is our primary acquisition channel:
      </p>
      <ul>
        <li><strong>Exam prep resources:</strong> Free study materials and practice tests drive awareness before candidates even pass the exam</li>
        <li><strong>Post-exam onboarding:</strong> Targeted outreach to newly licensed agents offering a free starter pack — CRM, compliance tools, and network access at zero cost</li>
        <li><strong>Content partnerships:</strong> Collaborate with national associations and exam preparation providers to position Inter Agentcy as the recommended platform for new agents</li>
      </ul>

      <Callout type="tip" title="Capture Them Early">
        Newly licensed agents have no existing infrastructure. By being their first platform, we become the default — creating switching costs and long-term retention as they build their careers on Inter Agentcy.
      </Callout>

      <h3>Free Starter Tier</h3>
      <p>
        The free Basic plan removes all barriers to entry. New agents get genuine value — CRM, FIFA templates, compliance checks, and marketplace access — without paying anything. This drives adoption and creates a natural upsell path as agents close deals and hit tier limits.
      </p>

      <h3>Content Marketing &amp; Thought Leadership</h3>
      <ul>
        <li>Industry reports on transfer trends, commission data, and market analysis</li>
        <li>LinkedIn and Twitter presence targeting football industry professionals</li>
        <li>Blog content on FIFA regulations, negotiation strategies, and career development</li>
        <li>Podcast featuring established agents, club executives, and industry experts</li>
      </ul>

      <h2>2. Club Engagement</h2>

      <h3>Pilot Programs</h3>
      <p>
        Partner with 5–10 clubs across different leagues and tiers to pilot the Deal Room and marketplace features. Clubs benefit from:
      </p>
      <ul>
        <li>Verified agent directory — know who you&apos;re dealing with</li>
        <li>Streamlined deal processing — less paperwork, faster completion</li>
        <li>Compliance assurance — automatic FFAR checks on every transaction</li>
      </ul>

      <h3>Case Studies</h3>
      <p>
        Document successful pilot outcomes — time saved, deals completed, compliance incidents avoided — and use these as sales tools for broader club adoption. A single high-profile club partnership validates the platform for the entire market.
      </p>

      <h2>3. Network Effects</h2>
      <p>
        Inter Agentcy is a multi-sided marketplace. Each new participant increases value for all others:
      </p>
      <ul>
        <li><strong>More agents</strong> → more deal opportunities → attracts more scouts and introducers</li>
        <li><strong>More scouts</strong> → better player discovery → attracts more agents</li>
        <li><strong>More clubs</strong> → more deals to be done → attracts more agents and scouts</li>
        <li><strong>More introducers</strong> → more connections → accelerates all deal flow</li>
      </ul>

      <Callout type="highlight" title="The Flywheel">
        Once the flywheel starts spinning, growth becomes self-reinforcing. Each new user makes the platform more valuable, which attracts more users. This is the core defensibility of Inter Agentcy.
      </Callout>

      <h3>Referral Programs</h3>
      <ul>
        <li>Agent-to-agent referrals: 1 month free Pro for each referred agent who subscribes</li>
        <li>Cross-role referrals: Scouts and introducers earn credits for bringing agents onto the platform</li>
        <li>Club referral incentives: Reduced platform fees for clubs that bring their agent network</li>
      </ul>

      <h2>4. Phased Regional Expansion</h2>
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Timeline</th>
            <th>Markets</th>
            <th>Focus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Phase 1</strong></td>
            <td>Year 1–2</td>
            <td>Europe (Big 5 leagues + Portugal, Netherlands, Belgium)</td>
            <td>Product-market fit, agent acquisition, club pilots</td>
          </tr>
          <tr>
            <td><strong>Phase 2</strong></td>
            <td>Year 2–3</td>
            <td>South America (Brazil, Argentina) &amp; West Africa (Nigeria, Ghana, Senegal)</td>
            <td>Talent source markets, scout network expansion</td>
          </tr>
          <tr>
            <td><strong>Phase 3</strong></td>
            <td>Year 3–4</td>
            <td>Middle East (Saudi, UAE) &amp; North America (MLS, Liga MX)</td>
            <td>Emerging spending markets, cross-border deals</td>
          </tr>
          <tr>
            <td><strong>Phase 4</strong></td>
            <td>Year 4–5</td>
            <td>Asia (Japan, South Korea, Australia) &amp; Eastern Europe</td>
            <td>Global coverage, full marketplace depth</td>
          </tr>
        </tbody>
      </table>

      <h2>5. Brand Building</h2>
      <ul>
        <li><strong>Annual conference:</strong> &quot;Inter Agentcy Summit&quot; — a flagship event bringing together agents, clubs, federations, and industry leaders</li>
        <li><strong>Verified membership badge:</strong> A mark of professionalism that agents display on LinkedIn, websites, and business cards</li>
        <li><strong>Industry awards:</strong> Annual recognition for top agents, scouts, and deals facilitated through the platform</li>
        <li><strong>Media partnerships:</strong> Collaborate with football media outlets for visibility and credibility</li>
      </ul>

      <Callout type="info" title="Long-Term Vision">
        Inter Agentcy aims to become the &quot;Bloomberg of football representation&quot; — the indispensable platform where every serious football professional operates. Just as Bloomberg Terminal became essential for finance, Inter Agentcy becomes essential for football agents.
      </Callout>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
