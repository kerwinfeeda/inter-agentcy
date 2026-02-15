import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function Network() {
  const { prev, next } = getPrevNext("/docs/platform/network");

  return (
    <DocsContent>
      <h1>Football Intelligence Network</h1>
      <p className="subtitle">
        A comprehensive intelligence layer connecting agents with clubs, federations, player databases, scouting networks, and partner agencies across all 211 FIFA member nations.
      </p>

      <Callout type="highlight" title="Global Reach">
        The Football Intelligence Network spans 211 FIFA member nations, hundreds of top clubs, dozens of federations, and thousands of data points — giving every Inter Agentcy user access to a global operation from day one.
      </Callout>

      <h2>Global Clubs Database</h2>
      <p>
        At the heart of the network is a comprehensive database of football clubs worldwide. Each club profile includes key decision-maker contacts, squad composition, strategic transfer needs, budget indicators, playing style analysis, and historical transfer patterns. Agents can filter by league, country, budget range, positional needs, and preferred player profiles.
      </p>
      <p>
        The database is continuously updated through a combination of automated data feeds, partner contributions, and our in-house football operations team. Club profiles include sporting director contacts, head of recruitment information, and verified communication channels.
      </p>

      <h2>Federations &amp; Regulatory Bodies</h2>
      <p>
        Inter Agentcy maintains direct relationships with FIFA and national football associations to provide real-time regulatory guidance. The platform includes:
      </p>
      <ul>
        <li><strong>License verification systems</strong> — Direct integration with FIFA&apos;s agent licensing database for real-time verification</li>
        <li><strong>Regulatory updates</strong> — Automated alerts when FFAR rules change or new compliance requirements are introduced</li>
        <li><strong>Procedural guidance</strong> — Step-by-step guides for registration procedures, transfer windows, and cross-border requirements by country</li>
        <li><strong>Federation contacts</strong> — Directory of national FA contacts for dispute resolution, registration queries, and work permit processes</li>
      </ul>

      <h2>Player Databases &amp; Marketplaces</h2>
      <p>
        Inter Agentcy aggregates player data from multiple authoritative sources to create the most comprehensive player intelligence system available to agents:
      </p>
      <ul>
        <li><strong>Transfermarkt integration</strong> — Market values, transfer history, contract expiry dates, and career statistics</li>
        <li><strong>Wyscout access</strong> — Advanced video analysis, match footage, and detailed performance metrics</li>
        <li><strong>Opta/StatsBomb data</strong> — Expected goals (xG), progressive passing, defensive actions, and hundreds of advanced metrics</li>
        <li><strong>League data feeds</strong> — Official statistics from major leagues across Europe, South America, and emerging markets</li>
        <li><strong>Internal scouting reports</strong> — Reports submitted by Inter Agentcy scouts, enriched with video clips and personal assessments</li>
      </ul>

      <h2>Scouting Network &amp; Affiliate Agents</h2>
      <p>
        Inter Agentcy is building the world&apos;s largest independent scouting network, with particular focus on talent-rich regions that are traditionally underserved:
      </p>
      <table>
        <thead>
          <tr>
            <th>Region</th>
            <th>Focus Areas</th>
            <th>Key Markets</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>West Africa</strong></td>
            <td>Youth academies, grassroots talent</td>
            <td>Nigeria, Ghana, Ivory Coast, Senegal, Cameroon</td>
          </tr>
          <tr>
            <td><strong>South America</strong></td>
            <td>Club academies, lower divisions</td>
            <td>Brazil, Argentina, Colombia, Uruguay, Ecuador</td>
          </tr>
          <tr>
            <td><strong>Eastern Europe</strong></td>
            <td>Emerging leagues, value transfers</td>
            <td>Serbia, Croatia, Ukraine, Poland, Czech Republic</td>
          </tr>
          <tr>
            <td><strong>North Africa</strong></td>
            <td>Established leagues, dual-national talent</td>
            <td>Morocco, Egypt, Algeria, Tunisia</td>
          </tr>
          <tr>
            <td><strong>Southeast Asia</strong></td>
            <td>Growing markets, commercial value</td>
            <td>Japan, South Korea, Australia, Thailand</td>
          </tr>
        </tbody>
      </table>

      <h2>Partner Agencies</h2>
      <p>
        For established agencies seeking to expand their operational capabilities, Inter Agentcy offers partnership and white-label options:
      </p>
      <ul>
        <li><strong>Enterprise integration</strong> — API access to platform tools for agencies with existing systems</li>
        <li><strong>White-label solutions</strong> — Branded versions of Inter Agentcy tools for large agency groups</li>
        <li><strong>Co-representation agreements</strong> — Structured frameworks for multi-agent deals across jurisdictions</li>
        <li><strong>Network depth sharing</strong> — Partner agencies contribute to and benefit from the collective intelligence network</li>
      </ul>

      <h2>Education &amp; Institutional Partnerships</h2>
      <p>
        The network extends beyond active market participants to include educational institutions and governing bodies:
      </p>
      <ul>
        <li><strong>FIFA collaboration</strong> — Alignment with FIFA&apos;s agent professionalization agenda</li>
        <li><strong>Players&apos; unions</strong> — Partnerships with FIFPro and national players&apos; associations for player protection initiatives</li>
        <li><strong>Sports management academia</strong> — University partnerships for internship programs, research collaboration, and talent pipeline development</li>
        <li><strong>Exam preparation providers</strong> — Integration with FIFA licensing exam preparation courses and study materials</li>
      </ul>

      <Callout type="info" title="Growing Every Day">
        The Football Intelligence Network grows organically as every new user brings their own connections, knowledge, and data. Our goal is to make this the single most comprehensive source of football industry intelligence available anywhere.
      </Callout>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
