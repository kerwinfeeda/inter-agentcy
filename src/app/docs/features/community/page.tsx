import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function Community() {
  const { prev, next } = getPrevNext("/docs/features/community");

  return (
    <DocsContent>
      <h1>Community &amp; Mentorship</h1>
      <p className="subtitle">
        Forums, mentorship programs, training modules, and collaborative spaces that transform isolated practitioners into a connected professional community.
      </p>

      <h2>Professional Forums</h2>
      <p>
        Moderated discussion forums organized by topic: transfer market analysis, regulatory updates, negotiation strategies, regional market insights, and industry news. Forums are role-gated where appropriate — agents-only discussions exist alongside open community spaces.
      </p>

      <h2>Mentorship Program</h2>
      <p>
        Inter Agentcy pairs experienced professionals with newcomers through a structured mentorship program:
      </p>
      <ul>
        <li><strong>For new agents</strong> — Matched with veteran agents who guide them through their first deals, compliance setup, and client acquisition</li>
        <li><strong>For scouts</strong> — Paired with established scouts who share regional expertise, report writing techniques, and network-building strategies</li>
        <li><strong>For representatives</strong> — Connected with experienced managers who share best practices for brand development and commercial deal-making</li>
        <li><strong>Cross-role mentorship</strong> — Agents mentor scouts on what makes a great report; scouts teach agents about emerging talent markets</li>
      </ul>

      <Callout type="highlight" title="Elite Tier Exclusive">
        One-on-one coaching sessions with industry veterans are available exclusively to Elite tier subscribers. These monthly sessions cover personalized strategy, deal review, and career planning.
      </Callout>

      <h2>Training Modules</h2>
      <p>
        Comprehensive educational content available on the platform:
      </p>
      <table>
        <thead>
          <tr>
            <th>Module</th>
            <th>Content</th>
            <th>Access</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>FIFA Exam Preparation</strong></td>
            <td>Study materials, practice exams, regulatory deep dives</td>
            <td>All tiers</td>
          </tr>
          <tr>
            <td><strong>Negotiation Masterclass</strong></td>
            <td>Contract negotiation strategies, BATNA analysis, communication techniques</td>
            <td>Pro+</td>
          </tr>
          <tr>
            <td><strong>Career Planning</strong></td>
            <td>Player career management, post-career planning, brand development</td>
            <td>Pro+</td>
          </tr>
          <tr>
            <td><strong>Compliance Deep Dive</strong></td>
            <td>FFAR 2023 analysis, Clearing House operations, cross-border regulations</td>
            <td>All tiers</td>
          </tr>
          <tr>
            <td><strong>Scouting Methodology</strong></td>
            <td>Report writing, video analysis, data interpretation, talent identification</td>
            <td>Scout tiers</td>
          </tr>
          <tr>
            <td><strong>Business Development</strong></td>
            <td>Client acquisition, networking, personal branding, social media strategy</td>
            <td>All tiers</td>
          </tr>
        </tbody>
      </table>

      <h2>Certification Badges</h2>
      <p>
        Complete training modules and earn verified badges displayed on your profile. Badges signal expertise to potential collaborators, clients, and clubs. Available certifications include FIFA Compliance Specialist, Advanced Negotiator, Scouting Analyst, and Career Management Professional.
      </p>

      <h2>Annual Conference</h2>
      <p>
        Inter Agentcy hosts an annual in-person conference bringing together the community for networking, keynote presentations from industry leaders, workshop sessions, and exclusive deal-making opportunities. The conference is the flagship event for building trust and deepening relationships within the network.
      </p>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
