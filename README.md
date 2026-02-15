# Inter Agentcy

**The Representation Network Of The Future** — A global, tech-powered platform uniting licensed agents, scouts, reps, and introducers. FIFA-compliant. Fully connected. Built for the modern game.

## Overview

Inter Agentcy is a multi-sided marketplace and operating system for the football intermediary industry. It combines a verified agent directory, transfer marketplace (Inter DealRoom™), AI copilot (Jose AI), and complete agent operating system (Inter OS) into one platform.

**Discover. Represent. Close. Together.**

## Platform Products

### 🔷 Inter OS
The complete operating system for football — mobile-first dashboard providing all stakeholders the full suite of technology, data tools, networking, directory, and AI capabilities. Think Uber's driver app, but for the football intermediary ecosystem.

### 📋 Inter DealRoom™
Football's transfer marketplace reimagined. Structured deal rooms where agents, clubs, scouts, reps, and introducers discover opportunities, negotiate transfers, and close deals — with FIFA FFAR compliance automation and Jose AI intelligence at every step.

### 🤖 Jose AI
AI copilot for football — scouting queries, deal analysis, compliance checks, contract review, market intelligence, and network navigation. Embedded across the entire platform.

### 📂 Agent Directory
2,400+ verified FA-registered football agents with A-Z navigation, search, and filtering. Every agent verified against FA/FIFA registries — registration numbers, licence status, and minor authorisation confirmed.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** + custom design system (steel grey gradient palette)
- **Lucide React** for iconography
- **CSS-only device mockups** (MacBook, iPhone) with animated dashboard showcases
- Dark theme with steel grey palette (#4A5568, #7B8794, #9AAAB8, #C0C7CE)

## Key Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, device mockups, two-cohort structure, mobile showcase, stats |
| `/inter-os` | Inter OS — the complete operating system for football |
| `/deal-room` | Inter DealRoom™ — transfer marketplace & deal execution |
| `/directory/agents` | Agent directory — 2,400+ verified agents with A-Z navigation |
| `/directory/agencies` | Agency directory with detail pages |
| `/features` | Platform features by role (agents, scouts, reps, introducers) |
| `/ecosystem` | How the platform connects all stakeholders |
| `/join` | Multi-step onboarding with role selection (deep-linkable via `?role=`) |
| `/agents` | Agent tiers and pricing |
| `/clubs` | Club benefits and partnership |
| `/players` | Player portal — find agents, understand fees |
| `/about` | Mission, values, compliance |
| `/compliance` | FIFA FFAR regulations, commission calculator |
| `/dashboard/*` | Dashboard mockups (overview, players, deals, network, compliance, scouting, finance) |
| `/academy` | Educational content for aspiring agents |
| `/docs` | Documentation and API reference |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/cookies` | Cookie policy |
| `/contact` | Contact and support |

**85+ total pages** including agent profiles, agency details, and dashboard sub-pages.

## Features

- **Animated Device Mockups** — CSS-only MacBook & iPhone frames with cycling dashboard animations (Dashboard → Players → Deals)
- **Interactive Mobile Showcase** — 4 cycling screens: Agent Directory, Deal Room, Jose AI chat, Live Scouting
- **Animated Stats Counter** — $1.37B, 10,000+, 200+, 50,000+ with staggered count-up
- **Agent Directory** — 2,416 verified FA agents parsed from official registry data, A-Z alphabetical navigation
- **Role-Specific Onboarding** — CTAs deep-link to `/join?role=agent` or `/join?role=scout` for pre-selected onboarding
- **Steel Grey Design System** — Consistent gradient palette across all pages
- **FIFA FFAR Compliance** — Fee cap references (3% salary / 10% transfer) throughout
- **Responsive Design** — Mobile-first, all pages work on all screen sizes
- **Custom 404 Page** — Branded error page

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

## Project Structure

```
src/
├── app/
│   ├── (main)/           # Route group with Navbar + Footer
│   │   ├── page.tsx      # Homepage
│   │   ├── inter-os/     # Inter OS page
│   │   ├── deal-room/    # Inter DealRoom™ page
│   │   ├── join/         # Onboarding flow
│   │   ├── agents/       # Pricing & tiers
│   │   ├── clubs/        # Club portal
│   │   ├── players/      # Player portal
│   │   ├── ecosystem/    # Platform ecosystem
│   │   ├── features/     # Feature breakdown
│   │   ├── dashboard/    # Dashboard mockups
│   │   └── ...           # Other pages
│   ├── directory/        # Agent & agency directories
│   ├── docs/             # Documentation
│   └── not-found.tsx     # Custom 404
├── components/
│   ├── devices/          # MacBookFrame, PhoneFrame
│   ├── showcase/         # DashboardMockup, MobileShowcase, MobileMockup
│   ├── dealroom/         # DealRoomMockup
│   ├── directory/        # AgentCard, AgencyCard, VerifiedBadge
│   ├── Navbar.tsx        # Main navigation
│   ├── Footer.tsx        # Site footer
│   └── StatsCounter.tsx  # Animated number counter
├── data/
│   └── agents.json       # 2,416 verified agent records
├── lib/
│   └── agency-data.ts    # Agency data utilities
└── scripts/
    └── parse-fa-agents*.py  # FA agent data parsers
```

## Documentation

- **[Inter DealRoom™ PRD](docs/PRD-InterDealRoom.md)** — Full product requirements document
- **[Production Roadmap](PRODUCTION-ROADMAP.md)** — Prioritised task list for launch

## Part of Platform TL

Inter Agentcy is part of the **Platform TL** intelligence ecosystem, alongside Feeda (AI OS), Union (Music Intelligence), Lyve (Live Events), Plates (Restaurants), Abode (Real Estate), and KnowHow (Knowledge Commerce).

## Licence

Proprietary. All rights reserved. © 2025 Platform TL.
