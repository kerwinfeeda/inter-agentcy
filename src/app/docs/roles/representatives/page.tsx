import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function ForRepresentatives() {
  const { prev, next } = getPrevNext("/docs/roles/representatives");

  return (
    <DocsContent>
      <h1>For Representatives</h1>
      <p className="subtitle">
        Manage player brands, careers, and commercial partnerships with purpose-built tools. Handle everything outside the transfer negotiation — and collaborate seamlessly with licensed agents for the rest.
      </p>

      <h2>Your Workflow on Inter Agentcy</h2>
      <ol>
        <li><strong>Player brand management</strong> — Maintain comprehensive player profiles including media kits, brand guidelines, social media analytics, and commercial history.</li>
        <li><strong>Career planning</strong> — Use career timeline tools to map out development milestones, post-career preparation, and long-term brand strategy.</li>
        <li><strong>Commercial deal tracking</strong> — Log and manage sponsorship agreements, endorsement deals, image rights contracts, and appearance fees.</li>
        <li><strong>Media coordination</strong> — Schedule interviews, manage media requests, and track press coverage across outlets and languages.</li>
        <li><strong>Agent collaboration</strong> — Partner with licensed agents on the platform who handle transfer negotiations while you manage everything else. Seamless communication and shared player profiles.</li>
      </ol>

      <h2>What You Get by Tier</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Starter (Free)</th>
            <th>Pro ($79/mo)</th>
            <th>Elite ($199/mo)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Players managed</td><td>Up to 5</td><td>Up to 20</td><td>Unlimited</td></tr>
          <tr><td>Career planning tools</td><td>Basic planner</td><td>Advanced analytics</td><td>Full suite + AI</td></tr>
          <tr><td>Templates</td><td>Basic</td><td>Full library</td><td>Custom branded</td></tr>
          <tr><td>Legal consultation</td><td>—</td><td>Included</td><td>Full legal access</td></tr>
          <tr><td>Agent introductions</td><td>Organic</td><td>Suggested matches</td><td>Direct intros</td></tr>
          <tr><td>Brand analytics</td><td>Basic</td><td>Social + media tracking</td><td>Full commercial intel</td></tr>
          <tr><td>Sponsorship marketplace</td><td>Browse only</td><td>Apply + track</td><td>Priority + featured</td></tr>
          <tr><td>Community</td><td>Forums</td><td>Forums + mentorship</td><td>1-on-1 coaching</td></tr>
        </tbody>
      </table>

      <h2>The Agent-Representative Partnership</h2>
      <p>
        The most powerful dynamic on Inter Agentcy is the collaboration between agents and representatives. While FIFA regulations restrict contract negotiation to licensed agents, the vast majority of a player&apos;s career management falls outside transfer negotiations:
      </p>
      <ul>
        <li><strong>Agents handle</strong> — Contract negotiations, transfer deals, FIFA Clearing House payments, club relationships</li>
        <li><strong>Representatives handle</strong> — Brand development, sponsorship deals, media management, career planning, commercial partnerships, post-career preparation</li>
      </ul>

      <Callout type="tip" title="Better Together">
        Players who have both a dedicated agent and a dedicated representative typically earn 30-50% more in total career earnings than those with only an agent. The commercial side of modern football is too important to leave unmanaged.
      </Callout>

      <h2>Key Use Cases</h2>
      <ul>
        <li><strong>Emerging talent management</strong> — Build the brand of young players before they hit the transfer market, maximizing their value from day one.</li>
        <li><strong>Post-career transition</strong> — Help retiring players transition into coaching, media, business, or ambassadorial roles with structured planning tools.</li>
        <li><strong>Family representation</strong> — Many player family members serve as informal representatives. Inter Agentcy formalizes this role with proper tools and structure.</li>
        <li><strong>Lawyer-representatives</strong> — Sports lawyers who manage player affairs outside of transfer negotiations use the platform for career and commercial management.</li>
      </ul>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
