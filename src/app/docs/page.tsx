import DocsContent from "@/components/docs/DocsContent";
import DocsNav from "@/components/docs/DocsNav";
import Callout from "@/components/docs/Callout";
import { getPrevNext } from "@/lib/docs-nav";
import { Shield, Users, BarChart3, Globe } from "lucide-react";

export default function DocsIntroduction() {
  const { prev, next } = getPrevNext("/docs");

  return (
    <DocsContent>
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
          <Shield className="w-3.5 h-3.5" />
          Documentation
        </div>
        <h1>Welcome to Inter Agentcy</h1>
        <p className="subtitle">
          The comprehensive football representation platform — a &ldquo;business-in-a-box&rdquo; for agents, scouts, representatives, and introducers worldwide. Uniting contract management, compliance, CRM, scouting intelligence, and analytics into one seamless ecosystem.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {[
          { icon: Shield, title: "Compliance-First", desc: "Built around FIFA FFAR 2023 regulations with automated commission caps, standard forms, and Clearing House integration." },
          { icon: Users, title: "Multi-Sided Marketplace", desc: "Four interconnected roles — Agents, Scouts, Representatives, and Introducers — creating a powerful network flywheel." },
          { icon: BarChart3, title: "Data-Driven", desc: "Integrations with Wyscout, Opta, StatsBomb, and Transfermarkt for comprehensive scouting and analytics." },
          { icon: Globe, title: "Global Network", desc: "200+ clubs across all continents, federation links, and scouting networks in talent-rich regions worldwide." },
        ].map((item) => (
          <div key={item.title} className="p-5 rounded-lg bg-background-card border border-border">
            <item.icon className="w-8 h-8 text-accent mb-3" />
            <h3 className="text-base font-semibold text-foreground mb-1.5 !mt-0">{item.title}</h3>
            <p className="text-sm text-foreground-muted !mb-0">{item.desc}</p>
          </div>
        ))}
      </div>

      <Callout type="highlight" title="Record Market Growth">
        Agent fees hit a record <strong>$1.37 billion in 2024</strong> — a 90% increase year-over-year. With 10,383 candidates registered for FIFA&apos;s second licensing exam, the industry is experiencing unprecedented growth. Inter Agentcy is positioned to be the infrastructure layer for this expanding market.
      </Callout>

      <h2>What is Inter Agentcy?</h2>
      <p>
        Inter Agentcy is a cutting-edge football representation platform inspired by Fora Travel&apos;s successful host-agency model, translated to the world of football. It provides independent football agents with enterprise-grade tools previously available only to large agencies, while creating a collaborative ecosystem where scouts, representatives, and introducers all contribute to and benefit from the network.
      </p>
      <p>
        The platform combines a comprehensive technology stack — CRM, contract management, compliance automation, scouting intelligence, and analytics — with an expansive industry network connecting agents with clubs, federations, players, and fellow professionals across all 211 FIFA member nations.
      </p>

      <h2>Who Is This For?</h2>
      <ul>
        <li><strong>Licensed Football Agents</strong> — Primary users seeking advanced tools for contract negotiation, compliance, and client management. The only role authorized to negotiate transfers under FIFA regulations.</li>
        <li><strong>Scouts</strong> — Talent identifiers who discover promising players, create detailed scouting reports, and earn finder&apos;s fees when their discoveries lead to signings.</li>
        <li><strong>Representatives</strong> — Career managers handling brand deals, media relations, sponsorships, and non-transfer aspects of player careers.</li>
        <li><strong>Introducers</strong> — Network connectors who bridge relationships between players, agents, and clubs, earning referral commissions for successful introductions.</li>
      </ul>

      <h2>What These Docs Cover</h2>
      <p>This documentation provides a complete guide to the Inter Agentcy platform:</p>
      <ul>
        <li><strong>Getting Started</strong> — Understand why Inter Agentcy exists and how to begin using the platform for your role.</li>
        <li><strong>Platform Overview</strong> — Explore the ecosystem, understand each role, and discover the Football Intelligence Network.</li>
        <li><strong>Features</strong> — Deep dives into every platform capability from CRM to analytics.</li>
        <li><strong>Role Guides</strong> — Specific workflows and benefits tailored to agents, scouts, representatives, and introducers.</li>
        <li><strong>Pricing</strong> — Detailed tier comparisons and the commission structure explained.</li>
        <li><strong>Compliance</strong> — FIFA regulations, licensing requirements, data protection, and Clearing House integration.</li>
        <li><strong>Business & Strategy</strong> — Market opportunity, growth strategy, projections, and competitive positioning.</li>
      </ul>

      <h2>The Vision</h2>
      <p>
        Inter Agentcy aims to become the <strong>&ldquo;Bloomberg of football representation&rdquo;</strong> — the essential infrastructure layer that every football professional relies on. By combining world-class technology with a thriving professional network, we&apos;re building a platform where the best tools meet the strongest connections, all within a FIFA-compliant framework designed for the modern era of football.
      </p>

      <DocsNav prev={prev} next={next} />
    </DocsContent>
  );
}
