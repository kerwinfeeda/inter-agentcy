# Inter Agentcy

**The Future of Football Representation** — A tech-powered global platform for independent football agents.

## What Is This?

Inter Agentcy is a host platform (think Fora Travel for football) that empowers independent football agents with enterprise-grade tools, compliance, network, and infrastructure. Agents keep their independence but get the backing of a global platform.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** + custom design system
- **Lucide React** for icons
- Dark theme with navy (#0A1628), electric blue (#3B82F6), and gold (#F59E0B)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, stats, value props, testimonials, CTA |
| `/features` | Full platform feature breakdown (CRM, Scouting, Compliance, Network, Career, Finance) |
| `/agents` | Agent tiers (Starter/Pro/Elite), pricing, application form |
| `/clubs` | Club benefits, partnership tiers, contact form |
| `/dashboard` | Static dashboard mockup (player portfolio, deal pipeline, commissions) |
| `/about` | Mission, values, team, advisory board |
| `/compliance` | FIFA regulations overview, interactive commission calculator, contract templates |
| `/join` | Multi-step waitlist form with confirmation |

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Key Features

- **Interactive Commission Calculator** — Calculate FIFA-compliant commission caps by deal type and agent role
- **Dashboard Mockup** — Realistic agent dashboard with player portfolio, deal pipeline, scouting reports, and commission tracker
- **Multi-step Waitlist Form** — Validated form with role selection, experience levels, and region focus
- **Responsive Design** — Mobile-first, works on all screen sizes
- **Animated Stats Counter** — Intersection Observer-based count-up animation
- **Testimonial Carousel** — Auto-rotating with manual controls

## License

Proprietary. All rights reserved.
