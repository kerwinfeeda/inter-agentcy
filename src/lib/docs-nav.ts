export interface DocPage {
  href: string;
  title: string;
}

export interface DocSection {
  title: string;
  pages: DocPage[];
}

export const docsNav: DocSection[] = [
  {
    title: "Getting Started",
    pages: [
      { href: "/docs", title: "Introduction" },
      { href: "/docs/why-inter-agentcy", title: "Why Inter Agentcy" },
      { href: "/docs/quick-start", title: "Quick Start Guide" },
    ],
  },
  {
    title: "Platform Overview",
    pages: [
      { href: "/docs/platform/ecosystem", title: "The Ecosystem" },
      { href: "/docs/platform/roles", title: "Roles (Agents, Scouts, Reps, Introducers)" },
      { href: "/docs/platform/network", title: "Football Intelligence Network" },
    ],
  },
  {
    title: "Features",
    pages: [
      { href: "/docs/features/crm", title: "CRM & Client Management" },
      { href: "/docs/features/contracts", title: "Contracts & Compliance" },
      { href: "/docs/features/scouting", title: "Scouting Intelligence" },
      { href: "/docs/features/career-tracking", title: "Player Career Tracking" },
      { href: "/docs/features/deal-room", title: "Club & Transfer Market Hub" },
      { href: "/docs/features/analytics", title: "Analytics & Deal Support" },
      { href: "/docs/features/community", title: "Community & Mentorship" },
    ],
  },
  {
    title: "For Each Role",
    pages: [
      { href: "/docs/roles/agents", title: "For Licensed Agents" },
      { href: "/docs/roles/scouts", title: "For Scouts" },
      { href: "/docs/roles/representatives", title: "For Representatives" },
      { href: "/docs/roles/introducers", title: "For Introducers" },
    ],
  },
  {
    title: "Pricing & Plans",
    pages: [
      { href: "/docs/pricing/overview", title: "Pricing Overview" },
      { href: "/docs/pricing/agents", title: "Agent Plans" },
      { href: "/docs/pricing/scouts", title: "Scout Plans" },
      { href: "/docs/pricing/representatives", title: "Representative Plans" },
      { href: "/docs/pricing/introducers", title: "Introducer Plans" },
      { href: "/docs/pricing/commissions", title: "Commission Structure" },
    ],
  },
  {
    title: "Compliance & Legal",
    pages: [
      { href: "/docs/compliance/fifa-regulations", title: "FIFA Regulations" },
      { href: "/docs/compliance/licensing", title: "Agent Licensing" },
      { href: "/docs/compliance/data-protection", title: "Data Protection" },
      { href: "/docs/compliance/clearing-house", title: "FIFA Clearing House" },
    ],
  },
  {
    title: "Business & Strategy",
    pages: [
      { href: "/docs/business/market-opportunity", title: "Market Opportunity" },
      { href: "/docs/business/growth-strategy", title: "Growth Strategy" },
      { href: "/docs/business/financial-projections", title: "Financial Projections" },
      { href: "/docs/business/competitive-landscape", title: "Competitive Landscape" },
    ],
  },
];

export function getAllPages(): DocPage[] {
  return docsNav.flatMap((s) => s.pages);
}

export function getPrevNext(currentPath: string): { prev: DocPage | null; next: DocPage | null } {
  const all = getAllPages();
  const idx = all.findIndex((p) => p.href === currentPath);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
}
