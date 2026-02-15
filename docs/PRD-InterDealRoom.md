# Inter DealRoom™ — Product Requirements Document

**Version:** 1.0
**Date:** 2025-02-15
**Author:** Poly (Platform Intelligence) / Platform TL
**Status:** Draft
**Parent Product:** Inter Agentcy (Inter OS)

---

## 1. Executive Summary

**Inter DealRoom™** is a dedicated transfer marketplace and deal execution platform within the Inter Agentcy ecosystem. It is the transactional backbone of Inter OS — where agents, clubs, scouts, reps, and introducers come together to discover opportunities, negotiate transfers, manage loans, and close deals with full FIFA FFAR compliance built in.

Think of it as the evolution of TransferRoom — but built natively into a complete agent operating system, with AI-powered intelligence (Jose AI), multi-role access (not just agents and clubs), and end-to-end deal lifecycle management from first pitch to signed contract.

**Key differentiators vs TransferRoom:**
- Built into Inter OS (not a standalone SaaS — it's one module in a complete agent operating system)
- Multi-role marketplace (scouts, reps, and introducers participate — not just agents and clubs)
- Jose AI copilot embedded in every deal workflow
- FIFA FFAR compliance automation (not just a suggestion — it's enforced)
- Commission tracking and automated fee distribution across multi-party deals
- Mobile-first deal management (negotiate from anywhere)

---

## 2. Problem Statement

### The Current State of Football Transfers

The football transfer market is a **$1.37B+** industry (agent fees alone, 2024) operating on:
- **WhatsApp groups** for deal communication
- **Excel spreadsheets** for player tracking
- **Email chains** for contract negotiations
- **Phone calls** for agent-club introductions
- **Manual compliance** checks against FIFA regulations
- **No audit trail** for regulatory inspections
- **Fragmented commissions** with no transparent tracking

### What TransferRoom Solved
TransferRoom pioneered the concept of a digital transfer marketplace — connecting 800+ clubs with 550+ trusted agencies, facilitating 9,500+ deals. Their core offering:
- Market intelligence (what clubs want, budgets, available players)
- Real-time access (pitch players, get notifications)
- Global network (direct access to decision-makers)
- Player protection (prevent unauthorized agent pitching)
- Events (in-person networking summits)

### What TransferRoom Doesn't Solve
- **No agent operating system** — it's a marketplace, not a workspace
- **No multi-role participation** — scouts, reps, introducers are excluded
- **No AI intelligence** — no copilot, no automated analysis
- **No compliance automation** — doesn't enforce FIFA FFAR
- **No commission management** — doesn't track or distribute fees
- **No mobile-first design** — limited mobile experience
- **No deal room workflow** — no structured negotiation workspace with documents, timelines, approvals
- **Agents only see club demand** — they can't see the full ecosystem of scouts, reps, players seeking representation

### Inter DealRoom Opportunity
Inter DealRoom fills the gap between TransferRoom's marketplace and the complete deal lifecycle — from player discovery through scouting, to agent representation, to club negotiation, to contract execution, to commission distribution.

---

## 3. Product Vision

> **Inter DealRoom™ is the transfer marketplace where every deal in football begins, progresses, and closes — with every stakeholder connected, every step compliant, and every commission transparent.**

### Vision Principles
1. **Marketplace + Workspace** — not just a listing board; a full deal execution environment
2. **Every Role, One Table** — agents, clubs, scouts, reps, introducers all participate
3. **Compliance by Default** — FIFA FFAR rules enforced automatically, not manually
4. **AI-Native** — Jose AI embedded in every workflow
5. **Mobile-First** — close deals from the touchline
6. **Transparent Economics** — every fee, commission, and party visible

---

## 4. Target Users & Personas

### 4.1 Licensed Agents (Primary)
**"I need to find clubs for my players and players for my clubs — fast, globally, and compliantly."**
- Find buying/selling clubs with matching requirements
- Pitch players directly to decision-makers
- Protect their players from unauthorized agent interference
- Manage deal pipelines from first contact to signed contract
- Track commissions across multi-party deals
- Maintain FIFA FFAR compliance documentation

### 4.2 Clubs — Sporting Directors / Heads of Recruitment
**"I need to see every available player that matches our profile, from verified agents only."**
- Post transfer requirements (position, budget, profile)
- Receive targeted pitches from verified agents
- Access player data, scouting reports, and analytics
- Manage inbound approaches in one dashboard
- Track all intermediary interactions for compliance
- Manage loan portfolio (in/out)

### 4.3 Clubs — CEOs / CFOs
**"I need to understand the financial exposure of our transfer pipeline and ensure compliance."**
- View aggregate pipeline value and fee obligations
- Contingency tracking (sell-on clauses, performance bonuses, solidarity contributions)
- Agent fee compliance vs FIFA FFAR caps
- Financial forecasting for transfer windows

### 4.4 Scouts
**"I found a talent — I need to get them in front of the right agent and the right club."**
- Submit scouting reports into the deal pipeline
- Connect discovered talent with verified agents
- Earn finder's fees when deals complete
- Track attribution from discovery to deal

### 4.5 Representatives
**"My player needs a move — I need to work with an agent to make it happen."**
- Collaborate with licensed agents on transfers
- Provide player branding, media, and career context
- Participate in deal rooms (read access, not signing authority)
- Track their commission share

### 4.6 Introducers
**"I know a club looking for a striker and an agent with the perfect player."**
- Submit introductions (agent → club, player → agent)
- Earn referral commissions when deals close
- Track all introductions and outcomes
- No deal execution authority (introduction only)

### 4.7 Players
**"I want to see what's happening with my transfer and know my agent is getting the best deal."**
- View deal progress (where permitted by their agent)
- Understand agent fee structures
- See market value estimates
- Transparency on who's involved in their deal

---

## 5. Core Features

### 5.1 The Marketplace

#### 5.1.1 Player Availability Board
- Agents list players as **Available** (permanent transfer), **Loan Available**, **Seeking Club**, or **Open to Offers**
- Each listing includes: player profile, key stats, contract status, asking price/fee range, preferred destinations, video highlights
- Listings are protected — only the authorized agent can list a player (verified via FIFA/FA licence link)
- **Jose AI Enhancement:** Auto-generate player pitch summaries from data (stats, scouting reports, career trajectory)

#### 5.1.2 Club Requirements Board
- Clubs post what they're looking for: position, age range, budget, preferred league/nationality, timeline
- Requirements can be **Public** (visible to all verified agents) or **Private** (invited agents only)
- Agents receive automated match notifications when their players fit a club's criteria
- **Jose AI Enhancement:** Smart matching — score player-requirement fit, surface non-obvious matches

#### 5.1.3 Loan Marketplace
- Dedicated loan board for temporary transfers
- Clubs list players available for loan (with conditions: fee, salary share, buy option)
- Clubs post loan requirements
- Full loan deal tracking: start date, end date, recall clauses, buy options, salary split

#### 5.1.4 Agent Protection
- Each player has ONE verified authorized agent on the platform
- Prevents unauthorized agents from pitching represented players
- Club-side visibility: "This player is exclusively represented by [Agent Name]"
- Conflict resolution workflow if multiple agents claim representation

#### 5.1.5 Free Agent Pool
- Dedicated section for unattached players seeking representation and clubs
- Agents can claim free agents (with player consent verification)
- Clubs can browse free agents directly (with agent introduction where applicable)

### 5.2 Deal Rooms

#### 5.2.1 Structured Deal Workspace
When a pitch leads to interest, a **Deal Room** is created — a private, structured workspace for all parties involved in a specific transfer.

**Deal Room contains:**
- **Parties:** Buying club, selling club, agent(s), player rep (if applicable), introducer (if applicable)
- **Deal Summary:** Player, position, proposed fee, proposed salary, proposed agent commission
- **Timeline:** Key milestones (pitch → interest → negotiation → offer → acceptance → medical → contract → registration)
- **Documents:** Term sheets, contract drafts, medical reports, compliance certifications
- **Communication:** Threaded messaging between all parties (with audit trail)
- **Tasks:** Action items assigned to parties (e.g., "Submit medical report by Friday")
- **Approvals:** Multi-party sign-off workflow (agent approves terms → club board approves fee → player accepts personal terms)

#### 5.2.2 Offer Management
- Structured offer submission (not just free-text)
- Fields: Transfer fee, payment structure (installments), salary, contract length, performance bonuses, sell-on clause, agent commission
- Counter-offer workflow with tracked changes
- Offer comparison tool (side-by-side offers from multiple clubs)
- **Jose AI Enhancement:** "Based on market data, this offer is 15% below market rate for players of this profile. Consider countering at €X."

#### 5.2.3 Document Management
- Upload and share: contracts, term sheets, medical reports, FIFA TMS documents, power of attorney
- Version control on documents
- Digital signature integration (DocuSign/PandaDoc)
- Secure document vault per deal (encrypted, access-controlled)

#### 5.2.4 Deal Timeline & Milestones
- Visual deal progress tracker (pipeline view)
- Automated milestone transitions (offer accepted → trigger medical scheduling)
- Deadline management with alerts (registration window closing, medical deadline)
- Window countdown timer (days remaining in transfer window)

### 5.3 Compliance Engine

#### 5.3.1 FIFA FFAR Auto-Compliance
- **Agent fee cap enforcement:** Automatically flag if proposed commission exceeds:
  - 3% of player's gross annual salary (when engaged by player)
  - 10% of transfer fee (when engaged by buying/selling club)
  - Combined 10% cap on total agent service fees per transaction
- **Dual representation checks:** Flag when agent represents multiple parties in same deal
- **Licence verification:** Auto-verify agent's FIFA licence status before deal room creation
- **Minor protections:** Enhanced checks when player is under 18 (no agent fees permitted)
- **Cooling-off periods:** Track and enforce mandatory waiting periods

#### 5.3.2 Audit Trail
- Every action in a deal room is logged: messages, document uploads, offer changes, approvals
- Exportable audit report for FIFA/federation inspection
- Immutable records (cannot be edited after the fact)
- Timestamped with user identity

#### 5.3.3 Compliance Dashboard
- Agent-level: "You have 4 active deals. 3 are fully compliant. 1 has a fee cap warning."
- Club-level: "You've engaged 12 agents this window. Total agent fees: €X (within FFAR limits)."
- League-level reporting (aggregate compliance data)

#### 5.3.4 Regulatory Alerts
- Push notifications for regulation changes (FIFA circulars, federation updates)
- Automatic rule updates when FFAR provisions change
- Country-specific regulation overlays (e.g., UK FA additional requirements)

### 5.4 Financial Suite

#### 5.4.1 Commission Tracking
- Per-deal commission calculator based on FIFA FFAR rules
- Multi-party commission split (agent + scout finder's fee + introducer referral + rep share)
- Commission timeline: when each party gets paid, based on deal payment structure
- Running total: YTD commission earned, pending, projected

#### 5.4.2 Contingency Management
- Track sell-on clauses across all past deals
- Performance bonus triggers (appearances, goals, international caps)
- Solidarity contribution calculations (FIFA training compensation)
- **Jose AI Enhancement:** "Player X just hit 20 league appearances — this triggers a €500K bonus payment from Club Y. Notify all parties."

#### 5.4.3 Invoice Generation
- Auto-generate agent fee invoices based on deal terms
- Compliant invoice templates (meeting FIFA/federation requirements)
- Payment status tracking (invoiced → paid → overdue)
- Integration with accounting systems (Xero, QuickBooks)

#### 5.4.4 Financial Analytics
- Revenue by deal type (permanent, loan, free agent)
- Revenue by market/region
- Commission trends over time
- Pipeline value and projected earnings

### 5.5 Intelligence Layer (Jose AI)

#### 5.5.1 Deal Analyst
- Analyse offer terms against market data
- Compare proposed fees with recent comparable transfers
- Flag under/over-valued offers with evidence
- Scenario modeling: "If you accept €10M with a 20% sell-on vs €12M clean, the expected value is..."

#### 5.5.2 Player-Club Matching
- Natural language search: "Find me clubs looking for a left-back under 24 with Bundesliga budget"
- Score player-club fit based on playing style, league level, financial capability
- Surface non-obvious matches (e.g., "Club X just sold their starting CB — they'll need a replacement")
- Predictive demand: "Based on historical patterns, expect increased demand for wingers in January"

#### 5.5.3 Market Intelligence
- Transfer window analytics: activity levels, fee trends, most active clubs
- Regional market reports: "West African talent demand up 23% vs last window"
- Agent ranking: deal volume, speed, compliance score
- Club intelligence: buying patterns, budget indicators, recruitment philosophy

#### 5.5.4 Compliance Copilot
- "Is this deal structure FFAR-compliant?" → instant assessment
- Auto-draft compliance documentation for submissions
- Pre-deal compliance check: verify all parties, licences, and fee structures before deal room creation
- "What are the regulatory requirements for transferring a 17-year-old from Brazil to England?"

#### 5.5.5 Contract Review
- Upload draft contracts → Jose AI highlights key clauses, risks, and omissions
- Compare against market standard terms
- Flag unusual provisions (e.g., excessive agent exclusivity periods)
- Suggest negotiation points based on player leverage

### 5.6 Network & Discovery

#### 5.6.1 Verified Network
- 2,400+ verified agents (FA/FIFA registered)
- Club directory with key decision-maker contacts
- Scout network with track records and specialisations
- Trust scores based on deal history, compliance record, and platform activity

#### 5.6.2 Network Graph
- Visual map of connections: who knows who, who's dealt with whom
- Introduction pathways: "You're 2 connections away from Club X's sporting director"
- Network analytics: reach, influence, activity

#### 5.6.3 Events & Summits
- Virtual transfer events (TransferRoom-style summits, but digital-first)
- Speed-meeting format: 15-minute video calls between pre-matched agents and clubs
- Event-driven deal rooms (connections made at events auto-create deal conversations)

### 5.7 Mobile Experience

#### 5.7.1 Full Mobile Deal Management
- View and respond to pitches from your phone
- Deal room participation: messaging, document review, approvals
- Push notifications: new pitch, offer received, document uploaded, deadline approaching
- Quick actions: accept/reject/counter offers with one tap

#### 5.7.2 Match-Day Tools
- Live scouting during matches → tag players → submit to deal pipeline
- Quick player check: scan agent credentials, verify representation
- Instant pitch: see a player at a match → create pitch to interested clubs

#### 5.7.3 Offline Mode
- Download deal room data for offline access (flights, poor connectivity)
- Queue actions when offline → sync when reconnected

---

## 6. Deal Lifecycle

```
┌──────────────────────────────────────────────────────────────┐
│                    INTER DEALROOM™ LIFECYCLE                  │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  1. DISCOVERY                                                │
│     ├─ Agent lists player as available                       │
│     ├─ Club posts requirement                                │
│     ├─ Jose AI matches player ↔ requirement                  │
│     └─ Scout submits report → agent receives                 │
│                                                              │
│  2. PITCH                                                    │
│     ├─ Agent pitches player to interested club               │
│     ├─ Pitch includes: stats, video, fee range, terms        │
│     ├─ Club reviews and responds (interested / pass)         │
│     └─ Introducer connects agent ↔ club                      │
│                                                              │
│  3. NEGOTIATION (Deal Room Created)                          │
│     ├─ All parties invited to deal room                      │
│     ├─ Terms discussed: fee, salary, bonuses, agent comm     │
│     ├─ Offers / counter-offers submitted (structured)        │
│     ├─ Jose AI: market analysis, compliance check            │
│     └─ Documents uploaded and shared                         │
│                                                              │
│  4. AGREEMENT                                                │
│     ├─ Terms agreed by all parties                           │
│     ├─ Compliance check: FFAR fee caps, licence verify       │
│     ├─ Digital signatures on deal memorandum                 │
│     └─ Medical scheduled                                     │
│                                                              │
│  5. EXECUTION                                                │
│     ├─ Medical completed and uploaded                        │
│     ├─ Contracts signed (player + club)                      │
│     ├─ Agent representation agreement confirmed              │
│     ├─ FIFA TMS registration submitted                       │
│     └─ ITC (International Transfer Certificate) processed    │
│                                                              │
│  6. COMPLETION                                               │
│     ├─ Deal marked as completed                              │
│     ├─ Commission invoices auto-generated                    │
│     ├─ Finder's fees / referral fees distributed             │
│     ├─ Audit trail exported and archived                     │
│     ├─ Contingencies tracked (sell-on, bonuses)              │
│     └─ Deal statistics added to platform analytics           │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## 7. Data Model (Key Entities)

### Deal
- `dealId`, `status` (discovery → pitch → negotiation → agreed → executing → completed → collapsed)
- `playerIds[]`, `buyingClubId`, `sellingClubId`, `agentIds[]`, `scoutIds[]`, `introducerIds[]`
- `dealType` (permanent, loan, loan-to-buy, free agent)
- `financials` { transferFee, salary, agentCommission, scoutFee, introducerFee, sellOnClause, performanceBonuses }
- `timeline` { createdAt, pitchedAt, dealRoomCreatedAt, agreedAt, signedAt, completedAt }
- `complianceStatus` { ffarCompliant, agentLicenceVerified, minorCheck, dualRepCheck }

### Pitch
- `pitchId`, `agentId`, `playerId`, `targetClubId`
- `content` { summary, stats, videoUrl, feeRange, preferredTerms }
- `status` (sent → viewed → interested → passed → dealRoomCreated)
- `aiGeneratedSummary`

### Requirement
- `requirementId`, `clubId`, `visibility` (public/private)
- `criteria` { position, ageRange, budget, preferredNationality, preferredLeague, timeline }
- `status` (open → partially filled → closed)
- `matchedPlayers[]` (auto-populated by Jose AI)

### DealRoom
- `roomId`, `dealId`, `parties[]` (with roles and permissions)
- `messages[]`, `documents[]`, `offers[]`, `tasks[]`, `approvals[]`
- `auditLog[]` (immutable event stream)

### Player Listing
- `listingId`, `playerId`, `agentId`, `type` (available/loan/seeking/open)
- `askingPrice`, `salary`, `contractExpiry`, `highlights`
- `protectedBy` (authorized agent — prevents unauthorized pitching)

### Commission
- `commissionId`, `dealId`, `recipientId`, `recipientRole` (agent/scout/rep/introducer)
- `amount`, `percentage`, `basisType` (transferFee/salary)
- `status` (pending → invoiced → paid)
- `ffarCompliant` (boolean)

---

## 8. Technical Architecture

### 8.1 Platform Stack
- **Frontend:** Next.js (React), integrated into Inter OS
- **Backend:** Node.js / tRPC or REST API
- **Database:** PostgreSQL (via Supabase or PlanetScale)
- **Real-time:** WebSockets for deal room messaging and live updates
- **Search:** Meilisearch or Algolia for player/club/agent discovery
- **AI:** Jose AI (LLM layer — OpenAI/Anthropic with football-specific fine-tuning and RAG)
- **Documents:** S3-compatible object storage with encryption at rest
- **Signatures:** DocuSign or PandaDoc API integration
- **Payments:** Stripe for commission processing
- **Mobile:** React Native or PWA (Progressive Web App)

### 8.2 Security & Privacy
- End-to-end encryption on deal room messages
- SOC 2 Type II compliance target
- GDPR compliant (EU data residency options)
- Role-based access control (RBAC) — agents see their deals, clubs see their deals, no cross-visibility
- Document encryption at rest and in transit
- IP-based access restrictions for enterprise clients

### 8.3 Integrations
- **FIFA TMS** — Transfer Matching System (when API available)
- **FIFA Clearing House** — Agent payment processing
- **Wyscout / StatsBomb / Opta** — Player data and analytics
- **TransferMarkt** — Market value reference
- **Scouting platforms** — Import scouting reports
- **Calendar** — Google Calendar, Outlook for meeting scheduling
- **Communication** — Email notifications, SMS alerts, WhatsApp Business API

---

## 9. Monetisation

### 9.1 Subscription Tiers

| Tier | Price | Target | Features |
|------|-------|--------|----------|
| **Starter** | Free | Individual agents, scouts | View marketplace, 3 pitches/month, basic profile |
| **Pro Agent** | €99/month | Active agents | Unlimited pitches, deal rooms, compliance tools, Jose AI (basic) |
| **Elite Agent** | €249/month | Top agents/agencies | Everything in Pro + financial suite, advanced AI, priority matching, API access |
| **Club** | €499/month | Clubs (per seat) | Full marketplace access, requirement posting, inbound management, compliance ledger |
| **Enterprise** | Custom | Large agencies, top clubs | White-label, API, dedicated support, custom integrations, multi-seat |

### 9.2 Transaction Fees
- **Deal completion fee:** 0.5% of transfer fee (capped at €5,000) — charged to the agent when a deal closes through the platform
- **Commission processing:** 2.5% processing fee when commissions are distributed through the platform (optional — agents can handle externally)

### 9.3 Premium Features
- **Featured listings:** €50/player/week — boost visibility in marketplace
- **Event access:** €500/event — virtual transfer summits
- **Advanced analytics:** €49/month add-on — market intelligence reports, predictive models
- **Jose AI Premium:** Included in Elite, otherwise €79/month — unlimited AI queries, contract review, deal analysis

---

## 10. Success Metrics

### Launch (0-3 months)
| Metric | Target |
|--------|--------|
| Registered agents | 500 |
| Active deal rooms | 50 |
| Player listings | 1,000 |
| Club registrations | 50 |
| Completed deals | 10 |
| MRR | €15K |

### Growth (3-12 months)
| Metric | Target |
|--------|--------|
| Registered agents | 2,000 |
| Active deal rooms | 500 |
| Player listings | 5,000 |
| Club registrations | 200 |
| Completed deals | 200 |
| MRR | €100K |
| Total deal value facilitated | €500M |

### Scale (12-24 months)
| Metric | Target |
|--------|--------|
| Registered agents | 5,000+ |
| Club registrations | 500+ |
| Completed deals | 1,000+ |
| MRR | €500K |
| Total deal value facilitated | €2B+ |
| Jose AI queries/month | 100K+ |

---

## 11. Competitive Landscape

| Feature | TransferRoom | Inter DealRoom™ | SciSports | Wyscout |
|---------|-------------|-----------------|-----------|---------|
| Transfer marketplace | ✅ Core | ✅ Core | ❌ | ❌ |
| Deal room workspace | ❌ | ✅ | ❌ | ❌ |
| Agent CRM | ❌ | ✅ (via Inter OS) | ❌ | ❌ |
| AI copilot | ❌ (new Contingency AI) | ✅ Jose AI | Partial | ❌ |
| Multi-role access | Agents + Clubs | All roles | Clubs | Scouts |
| FIFA compliance automation | ❌ | ✅ | ❌ | ❌ |
| Commission management | ❌ | ✅ | ❌ | ❌ |
| Scouting integration | ❌ | ✅ | ✅ Core | ✅ Core |
| Mobile-first | ❌ | ✅ | ❌ | Partial |
| Player data/analytics | Basic | ✅ (integrations) | ✅ Core | ✅ Core |
| Events/summits | ✅ | ✅ (virtual-first) | ❌ | ❌ |
| Loan management | Partial | ✅ | ❌ | ❌ |
| Free agent pool | ❌ | ✅ | ❌ | ❌ |
| Network graph | ❌ | ✅ | ❌ | ❌ |
| Document management | ❌ | ✅ | ❌ | ❌ |

### Moat Analysis
1. **Network effects** — More agents → more listings → more clubs → more deals → more agents
2. **Compliance lock-in** — Once audit trails are on Inter DealRoom, switching costs are high
3. **AI advantage** — Jose AI improves with every deal (learning from market patterns)
4. **Ecosystem lock-in** — DealRoom is part of Inter OS (agents use CRM, compliance, scouting tools daily — DealRoom is where those tools converge)
5. **Data moat** — Every deal generates proprietary market intelligence

---

## 12. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| TransferRoom dominance (800+ clubs, 9,500 deals) | High | Differentiate via OS integration, AI, multi-role access. Don't compete on marketplace alone — compete on workflow. |
| Agent resistance to digital platforms | Medium | Free tier lowers barrier. Mobile-first meets agents where they are. Compliance tools create immediate value. |
| FIFA regulatory changes | Medium | Modular compliance engine — rules can be updated without platform overhaul. Jose AI trained on latest regulations. |
| Data privacy (GDPR, player data) | High | SOC 2, GDPR compliance, encryption, access controls from day one. |
| AI hallucination in deal advice | High | Jose AI provides suggestions, not decisions. Human approval required for all actions. Clear disclaimers. |
| Multi-party commission disputes | Medium | Smart contracts / escrow model for commission distribution. Clear terms agreed in deal room before execution. |
| Platform manipulation (fake listings, ghost clubs) | Medium | Verification layer: agent licence check, club entity verification, player representation proof. |

---

## 13. Roadmap

### Phase 1: MVP (Month 1-3)
- Player availability board (list/search/filter)
- Club requirements board
- Basic deal rooms (messaging + document upload)
- Agent protection (one agent per player)
- FIFA FFAR fee cap checks
- Mobile-responsive web app

### Phase 2: Intelligence (Month 3-6)
- Jose AI: player-club matching, deal analysis, market intelligence
- Structured offer/counter-offer workflow
- Commission tracking and calculation
- Compliance dashboard
- Loan marketplace
- Push notifications

### Phase 3: Execution (Month 6-12)
- Digital signature integration
- Full audit trail and export
- Invoice generation
- Contingency management (sell-on, bonuses)
- Financial analytics
- Virtual events/summits
- Network graph
- API for enterprise integrations

### Phase 4: Scale (Month 12-24)
- FIFA TMS integration
- Clearing House integration
- Advanced AI (contract review, predictive demand)
- White-label for large agencies
- Women's football marketplace
- Youth/academy marketplace
- Regional marketplaces (Africa, South America, Asia focus)

---

## 14. Open Questions

1. **Pricing validation** — Should Pro Agent be €99 or lower (€49) to drive adoption vs TransferRoom's enterprise pricing?
2. **Transaction fee model** — Will agents accept a 0.5% deal completion fee, or is this a barrier?
3. **Club acquisition strategy** — TransferRoom has 800+ clubs. What's our wedge? (Suggest: emerging markets where TransferRoom has less penetration — Africa, South America, Middle East, Southeast Asia)
4. **FIFA/federation partnerships** — Can we get official endorsement or integration with national FAs?
5. **Data sourcing** — How do we populate initial player data? (Wyscout API? Manual from agents? Public data?)
6. **Events strategy** — Virtual-first or hybrid with in-person summits?
7. **Legal structure** — Does processing commissions through the platform require financial services licensing?

---

## 15. Appendix

### A. TransferRoom Feature Reference
- Football's Only Transfer Marketplace
- 800+ clubs, 550+ trusted agencies, 9,500+ successful deals
- Roles: Clubs (CEO, SD, HoR, Loan Manager, CFO), Agents (Trusted Agent), Players
- Products: Market Intelligence, Real-time Access, Global Network, Agent Protection
- New: Contingency AI, Women's Marketplace
- Resources: Player xTV, GBE Calculator, Transfer Window Tracker, API
- Events: TransferRoom Events, Webinars
- Revenue model: SaaS subscription (enterprise pricing, not public)

### B. FIFA FFAR Key Provisions (2023)
- Agent fee cap: 3% of player salary (player-engaged), 10% of transfer fee (club-engaged)
- Combined cap: 10% total agent service fees per transaction
- No agent fees for minors (under 18)
- Agent licensing exam required
- Transparency: all fees must be declared
- Clearing House: centralized payment processing (phased rollout)

### C. Market Data Points
- Agent fees 2024: $1.37B (record, +90% YoY)
- FIFA agent exam: 10,383 candidates registered for second exam
- ~1,950 licensed agents from first exam
- 211 FIFA member nations
- Transfer window activity: ~18,000 international transfers annually
