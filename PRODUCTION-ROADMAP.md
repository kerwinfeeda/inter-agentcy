# Inter Agentcy — Production Roadmap

Last updated: 2025-02-15

## ✅ Done (This Sprint)
- [x] Homepage redesign — two-cohort structure, device mockups, animations
- [x] Hero: "The Representation Network Of The Future"
- [x] Agent directory with 2,416 verified FA agents + A-Z navigation
- [x] Agency directory with detail pages
- [x] Fey-inspired MacBook & iPhone mockups with animated dashboard
- [x] Stats counter animation ($1.37B, 10K+, 200+, 50K+)
- [x] Steel grey palette unified across homepage
- [x] Role-specific onboarding CTAs (?role=agent, ?role=scout)
- [x] Multi-step join page with role selection
- [x] 85 pages, clean build, all routes valid
- [x] Fix double Navbar/Footer
- [x] Fix padding inconsistencies
- [x] Footer updates (copyright, dead links)
- [x] Old brand colour sweep (emerald/purple/blue → steel grey)
- [x] Custom 404 page
- [x] Placeholder legal pages (privacy, terms, cookies, contact)

---

## 🔴 P0 — Pre-Launch Essentials

### Infrastructure
- [ ] **Deploy to Vercel** — Connect GitHub repo, configure domain
- [ ] **Custom domain** — interagentcy.com (or similar)
- [ ] **SSL certificate** — Auto via Vercel
- [ ] **Environment variables** — Set up for production
- [ ] **CI/CD pipeline** — Auto-deploy on push to main

### SEO & Discoverability
- [ ] **Per-page metadata** — Unique `<title>` and `<meta description>` for all key pages (homepage, directory, agents, clubs, players, join, about)
- [ ] **Open Graph tags** — `og:title`, `og:description`, `og:image` for social sharing
- [ ] **Twitter Card tags** — `twitter:card`, `twitter:image`
- [ ] **Structured data (JSON-LD)** — Organization, WebSite, BreadcrumbList schemas
- [ ] **robots.txt** — Allow crawling, point to sitemap
- [ ] **sitemap.xml** — Dynamic sitemap including all 2,416 agent pages
- [ ] **Canonical URLs** — Prevent duplicate content issues

### Legal & Compliance
- [ ] **Privacy Policy** — Full GDPR/CCPA compliant policy (replace placeholder)
- [ ] **Terms of Service** — Full legal terms (replace placeholder)
- [ ] **Cookie Policy** — Full policy with cookie categories
- [ ] **Cookie consent banner** — GDPR-compliant opt-in mechanism
- [ ] **FIFA compliance disclosures** — Ensure all fee references match current FIFA FFAR

### Analytics & Monitoring
- [ ] **Google Analytics 4** (or Plausible/Fathom for privacy-first)
- [ ] **Error tracking** — Sentry or similar for runtime errors
- [ ] **Uptime monitoring** — Pingdom, UptimeRobot, or Vercel Analytics
- [ ] **Performance monitoring** — Core Web Vitals tracking

---

## 🟡 P1 — Post-Launch (Week 1-2)

### Authentication & User Accounts
- [ ] **Auth provider** — NextAuth.js or Clerk integration
- [ ] **User registration flow** — Email verification, role assignment
- [ ] **Agent profile claiming** — Allow agents in directory to claim and manage their profiles
- [ ] **OAuth** — Google, LinkedIn sign-in options
- [ ] **Role-based access control** — Agent vs Scout vs Rep vs Club vs Player permissions

### Data & Backend
- [ ] **Database** — PostgreSQL via Supabase or PlanetScale
- [ ] **Agent data migration** — Move 2,416 agents from JSON to database
- [ ] **API routes** — RESTful endpoints for agents, deals, network
- [ ] **Search backend** — Full-text search with filters (Algolia or Meilisearch)
- [ ] **File uploads** — Profile photos, documents, contracts

### Email System
- [ ] **Transactional emails** — Welcome, verification, password reset (Resend or SendGrid)
- [ ] **Onboarding sequence** — Drip emails for new registrants
- [ ] **Notification emails** — Deal updates, new connections, compliance alerts

---

## 🟠 P2 — Growth Features (Week 3-8)

### Agent Dashboard (Live)
- [ ] **Real CRM** — Replace mock data with actual player/deal management
- [ ] **Deal room** — Real-time negotiation workspace with document sharing
- [ ] **Compliance tracker** — Auto-check FIFA FFAR requirements
- [ ] **Calendar integration** — Meetings, medical appointments, contract deadlines
- [ ] **Financial tracking** — Commission calculations, invoice generation

### Directory Enhancements
- [ ] **Agent profile pages** — Rich profiles with bio, track record, specialisations
- [ ] **Verified badges** — FA/FIFA licence verification with visual indicators
- [ ] **Agent ratings/reviews** — Reputation system (post-MVP)
- [ ] **Advanced filters** — By country, specialisation, language, player type
- [ ] **Map view** — Geographic distribution of agents

### Club Portal
- [ ] **Club registration** — Verified club accounts
- [ ] **Player submission inbox** — Receive submissions from verified agents
- [ ] **Recruitment briefs** — Post requirements, get matched with agents
- [ ] **Transfer history** — Track past dealings with agents

### Player Portal
- [ ] **Player profiles** — Career stats, media, representation history
- [ ] **Representation requests** — Apply and get matched with agents
- [ ] **Contract transparency** — View agent fee structures before signing
- [ ] **Career timeline** — Visual representation of career progression

### Scout/Rep/Introducer Tools
- [ ] **Scouting reports** — Structured report templates
- [ ] **Talent pipeline** — Track discovered players from identification to signing
- [ ] **Referral tracking** — Commission attribution for introductions
- [ ] **Network graph** — Visualise connections and reach

---

## 🔵 P3 — Platform Scale (Month 2-6)

### Content & Community
- [ ] **Blog** — Industry news, regulation updates, agent insights
- [ ] **Academy** — Educational content for aspiring agents (FIFA exam prep)
- [ ] **Knowledge base** — FAQs, guides, best practices
- [ ] **Community forum** — Agent-to-agent networking

### Integrations
- [ ] **Wyscout / StatsBomb** — Player data and scouting analytics
- [ ] **TransferMarkt** — Market value reference data
- [ ] **FIFA Connect** — Agent registration verification API (when available)
- [ ] **Payment processing** — Stripe for SaaS subscriptions and commission payments
- [ ] **DocuSign / PandaDoc** — Digital contract signing

### Mobile
- [ ] **PWA** — Progressive Web App with offline capabilities
- [ ] **Push notifications** — Deal alerts, messages, compliance reminders
- [ ] **Native app** (if demand warrants) — React Native or Flutter

### Revenue
- [ ] **Subscription tiers** — Free directory listing, Pro agent tools, Enterprise agency
- [ ] **Commission processing** — Platform-facilitated payments (take rate)
- [ ] **Premium listings** — Featured agent/agency placements
- [ ] **Recruitment marketplace** — Club posting fees

### Data & Intelligence
- [ ] **Agent analytics** — Deal velocity, network reach, conversion rates
- [ ] **Market intelligence** — Transfer trends, fee benchmarks, hot markets
- [ ] **AI matching** — Smart agent-player-club matching algorithms
- [ ] **Compliance scoring** — Automated risk assessment for agents

---

## 📊 Key Metrics to Track

| Metric | Target (3 months) | Target (6 months) |
|--------|-------------------|-------------------|
| Registered agents | 500 | 2,000 |
| Directory profiles claimed | 200 | 1,000 |
| Monthly active users | 1,000 | 5,000 |
| Deals facilitated | 10 | 50 |
| Club registrations | 20 | 100 |
| MRR (subscription) | €5K | €25K |

---

## 🏗️ Technical Debt

- [ ] Replace all `as any` TypeScript casts with proper types
- [ ] Add unit tests (Jest + React Testing Library)
- [ ] Add E2E tests (Playwright)
- [ ] Set up staging environment
- [ ] Database migrations strategy
- [ ] API rate limiting
- [ ] Image optimisation pipeline (next/image with CDN)
- [ ] Caching strategy (ISR for directory pages)
- [ ] Bundle size optimisation
- [ ] Accessibility audit (WCAG 2.1 AA)
