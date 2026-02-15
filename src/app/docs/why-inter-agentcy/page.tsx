import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";

export default function WhyInterAgentcy() {
  const { prev, next } = getPrevNext("/docs/why-inter-agentcy");

  return (
    <DocsContent>
      <h1>Why Inter Agentcy</h1>
      <p className="subtitle">
        The football representation industry is broken. Fragmented tools, zero support for independents, and overwhelming compliance requirements leave agents struggling. Inter Agentcy fixes all of it.
      </p>

      <h2>The Problem</h2>
      <p>
        Today&apos;s football agents face a perfect storm of challenges that make it incredibly difficult to build and sustain a successful practice, especially as an independent professional.
      </p>

      <h3>Fragmented Tools</h3>
      <p>
        Independent agents currently juggle a patchwork of disconnected tools — spreadsheets for client tracking, separate platforms for scouting data, email chains for contract negotiations, manual compliance checklists, and generic CRMs not designed for football. There is no single platform that brings contract management, CRM, compliance, scouting intelligence, and analytics together in one place.
      </p>

      <h3>No Support for Independents</h3>
      <p>
        Large agencies like CAA Stellar, Gestifute, and Wasserman have entire teams dedicated to compliance, scouting, analytics, and operations. Independent agents — who make up the vast majority of the market — have none of these resources. They&apos;re expected to compete on talent acquisition and deal-making while simultaneously handling every back-office function themselves.
      </p>

      <h3>Compliance Overload</h3>
      <p>
        FIFA&apos;s 2023 Football Agent Regulations (FFAR) introduced sweeping new requirements: mandatory licensing exams, commission caps (3% of player salary, 10% of transfer fees), standard representation contracts, mandatory disclosure, and Clearing House payment processing. Staying compliant is now a full-time job in itself.
      </p>

      <Callout type="warning" title="The Compliance Burden">
        With FFAR 2023, agents must navigate commission caps, standard forms, Clearing House payments, licensing verification, and continuous regulatory monitoring. A single compliance failure can result in license suspension or FIFA sanctions.
      </Callout>

      <h3>Industry Barriers</h3>
      <p>
        New entrants face enormous barriers: the FIFA licensing exam has a significant failure rate, building a network of club contacts takes years, accessing quality scouting data requires expensive subscriptions, and there&apos;s no structured mentorship system. The 10,383 candidates who registered for FIFA&apos;s second licensing exam represent massive demand for professional support that currently doesn&apos;t exist.
      </p>

      <h2>The Solution</h2>
      <p>
        Inter Agentcy is an all-in-one platform that gives every football professional — from newly licensed agents to established independents — the same enterprise-grade tools and network access that were previously exclusive to mega-agencies.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-8">
        {[
          { title: "Unified Platform", desc: "CRM, contracts, compliance, scouting, analytics, and community — all in one place. No more juggling 10 different tools." },
          { title: "Host-Agency Model", desc: "Like Fora Travel did for travel advisors, we provide the infrastructure, brand, and support while agents maintain their independence." },
          { title: "Compliance Automation", desc: "Built-in FIFA FFAR compliance: auto commission cap checks, standard templates, audit trails, and Clearing House integration." },
          { title: "Network Effects", desc: "A multi-sided marketplace where scouts, reps, agents, and introducers all create value for each other, growing the pie for everyone." },
        ].map((item) => (
          <div key={item.title} className="p-5 rounded-lg bg-background-card border border-border">
            <h3 className="text-base font-semibold text-foreground mb-1.5 !mt-0">{item.title}</h3>
            <p className="text-sm text-foreground-muted !mb-0">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>The Fora Travel Inspiration</h2>
      <p>
        Inter Agentcy draws direct inspiration from Fora Travel, a platform that revolutionized the travel advisory industry by giving independent travel advisors access to enterprise-level tools, preferred supplier relationships, and a supportive community — all while letting them maintain their independence and personal brand.
      </p>
      <p>
        Fora Travel proved that the host-agency model works: provide world-class infrastructure, handle compliance and operations, create network value, and let independent professionals focus on what they do best — serving their clients. We&apos;re applying the exact same model to football representation, an industry with remarkably similar dynamics:
      </p>
      <ul>
        <li>Fragmented market of independent practitioners</li>
        <li>Complex regulatory environment</li>
        <li>High value placed on relationships and network</li>
        <li>Enterprise tools previously accessible only to large firms</li>
        <li>Growing demand from new entrants needing support</li>
      </ul>

      <Callout type="tip" title="First-Mover Advantage">
        No one else has applied the host-agency model to football representation. Inter Agentcy is the first platform to combine end-to-end technology with a collaborative network in this space, giving us a significant first-mover advantage in a billion-dollar market.
      </Callout>

      <h2>Why Now?</h2>
      <p>The timing for Inter Agentcy is perfect due to a convergence of industry forces:</p>
      <ul>
        <li><strong>New FIFA regulations (FFAR 2023)</strong> — Creating massive demand for compliance tools and support infrastructure.</li>
        <li><strong>Surge in licensed agents</strong> — 1,950 licensed in the first exam, 10,383 registered for the second. Thousands of new professionals need support.</li>
        <li><strong>Record market size</strong> — $1.37B in agent fees in 2024, growing rapidly. The pie is getting bigger.</li>
        <li><strong>Digital transformation</strong> — Football is finally embracing technology, from VAR to data analytics. Agent services are next.</li>
        <li><strong>Push for professionalism</strong> — FIFA, clubs, and players all want more professional, transparent agent practices. Inter Agentcy enables exactly that.</li>
      </ul>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
