"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, Shield, Star, TrendingUp, Globe, FileText,
  Users, Target, Heart, Scale, CheckCircle,
  MessageCircle, BarChart3, Briefcase, Lock
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Verified, Licensed Representation",
    desc: "Every agent on our platform is FIFA-licensed and vetted. No more guessing who you can trust — we&apos;ve done the due diligence so you don&apos;t have to.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    desc: "Your profile reaches clubs in 50+ leagues across 30+ countries. Our network of scouts, agents, and club contacts work together to find the right opportunity for you.",
  },
  {
    icon: Scale,
    title: "Fair & Transparent Deals",
    desc: "Every contract is built using FIFA-compliant templates. You see every clause, every fee, every commission. No hidden costs, no surprises.",
  },
  {
    icon: TrendingUp,
    title: "Career Planning",
    desc: "Your representative works with you on a long-term career plan — not just the next transfer. We map out your development pathway from where you are to where you want to be.",
  },
  {
    icon: FileText,
    title: "Contract Protection",
    desc: "Our compliance suite ensures every deal meets FIFA regulations. Commission caps are enforced automatically. Your interests are protected by the system, not just promises.",
  },
  {
    icon: Heart,
    title: "Wellbeing & Support",
    desc: "Relocating to a new country? Need help with housing, language, or settling in? Your representative coordinates off-pitch support so you can focus on football.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Get Discovered",
    desc: "Our scouts and representatives are active across Africa, South America, Europe, and beyond. Whether you&apos;re playing in a local league or an academy, talent gets noticed.",
    detail: "Scouts submit detailed reports with video analysis. Your performances are tracked and profiled in our system.",
  },
  {
    step: "02",
    title: "Get Matched",
    desc: "Based on your profile, playing style, and ambitions, we match you with a licensed agent and representative who specialize in your region and career stage.",
    detail: "You choose who represents you. We provide the options and the transparency — the decision is always yours.",
  },
  {
    step: "03",
    title: "Build Your Profile",
    desc: "Your agent and representative build a professional profile: match highlights, performance data, career history, and development plan. This is what clubs see.",
    detail: "Think of it as your professional portfolio — always up to date, always ready when opportunity knocks.",
  },
  {
    step: "04",
    title: "Connect With Clubs",
    desc: "When the right opportunity arises, your agent leverages our club network to make warm introductions. No cold emails — clubs already trust our platform.",
    detail: "Our network spans 200+ clubs. Your agent knows which clubs are looking for players like you, and when their transfer windows open.",
  },
  {
    step: "05",
    title: "Negotiate & Sign",
    desc: "Your agent handles negotiations using our Deal Room — FIFA-compliant contracts, transparent terms, and fair commissions. You see everything before you sign.",
    detail: "Commission caps are enforced: max 3% of your salary goes to agent fees (FIFA regulation). We make sure that&apos;s respected.",
  },
  {
    step: "06",
    title: "Grow Your Career",
    desc: "Representation doesn&apos;t end at signing. Your team continues to manage your career — performance tracking, contract renewals, brand opportunities, and planning your next move.",
    detail: "The best careers are built over years, not single transfers. We&apos;re with you for the journey.",
  },
];

const protections = [
  { icon: Lock, title: "FIFA Compliance", desc: "All transactions comply with FIFA Football Agent Regulations 2023" },
  { icon: Scale, title: "Commission Caps", desc: "Agent fees capped at 3% of your salary — enforced by the platform" },
  { icon: FileText, title: "Contract Transparency", desc: "Every clause reviewed and explained before you sign anything" },
  { icon: Shield, title: "Verified Agents Only", desc: "Only licensed, vetted agents can represent players on our platform" },
  { icon: MessageCircle, title: "Dispute Resolution", desc: "Built-in mediation process if any issues arise with your representation" },
  { icon: CheckCircle, title: "No Exclusivity Pressure", desc: "We believe in earning your loyalty through results, not lock-in contracts" },
];

const faqs = [
  {
    q: "Is Inter Agentcy an agency?",
    a: "Inter Agentcy is a platform that connects players with verified, FIFA-licensed agents, scouts, and representatives. We provide the infrastructure, tools, and network — your agent works for you.",
  },
  {
    q: "Do I have to pay anything?",
    a: "Players never pay to join or be represented. Agent commissions are paid from transfer fees or contract values, capped at FIFA-regulated rates (max 3% of your salary).",
  },
  {
    q: "How do I know the agents are legitimate?",
    a: "Every agent on our platform holds a valid FIFA agent license. We verify credentials, track record, and conduct due diligence before any agent can represent players through our system.",
  },
  {
    q: "Can I choose my own agent?",
    a: "Absolutely. We match you with agents based on your profile and preferences, but the decision is always yours. You can review profiles, track records, and speak with agents before committing.",
  },
  {
    q: "What if I already have an agent?",
    a: "If your current agent is FIFA-licensed, they can join our platform to access better tools and a wider network. If you&apos;re looking to switch, we can help you understand your options.",
  },
  {
    q: "What regions do you cover?",
    a: "Our network spans 30+ countries across Africa, Europe, South America, the Middle East, and Asia. We&apos;re strongest in West Africa and European football but growing globally.",
  },
  {
    q: "I play in a lower league — is this for me?",
    a: "Yes. Great careers start at every level. Our scouts work across all tiers, and our representatives specialize in building pathways from grassroots to professional football.",
  },
];

const testimonials = [
  {
    quote: "Before Inter Agentcy, I had no idea who to trust. Three different people claimed to be agents. Now I have a verified, licensed agent who actually delivers.",
    name: "Emmanuel O.",
    detail: "Striker, 22 · Moved from Ghana Premier League to Belgian Pro League",
  },
  {
    quote: "The transparency changed everything. I could see exactly what was in my contract, what commissions were being charged, and what my options were.",
    name: "Lucas F.",
    detail: "Midfielder, 24 · Secured loan move to Portuguese Primeira Liga",
  },
  {
    quote: "My representative helped me with everything — not just the transfer, but finding housing, language lessons, and connecting with other players in the city.",
    name: "Yusuf K.",
    detail: "Winger, 20 · Transferred to Danish Superliga",
  },
];

export default function PlayersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background-elevated text-accent text-sm mb-6">
            <Star className="w-4 h-4" /> For Players
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Career. <br /><span className="gradient-text">Your Terms.</span>
          </h1>
          <p className="text-foreground-muted text-lg mb-4 max-w-2xl mx-auto">
            Inter Agentcy connects you with verified, FIFA-licensed professionals who put your interests first. Transparent deals, global exposure, and career support — the way football representation should work.
          </p>
          <p className="text-foreground-dim text-sm mb-8 max-w-xl mx-auto">
            Players never pay to join. Agent commissions are regulated and transparent.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register" className="inline-flex items-center gap-2 px-8 py-4 gradient-steel-btn text-white font-semibold rounded-xl transition-all">
              Get Represented <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#how-it-works" className="inline-flex items-center gap-2 px-8 py-4 text-foreground-muted hover:text-white transition-colors text-sm font-medium">
              See how it works <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4 bg-background-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Football representation is broken</h2>
          <p className="text-foreground-muted text-center mb-12 max-w-2xl mx-auto">
            Unlicensed intermediaries. Hidden fees. Broken promises. Too many players — especially from emerging markets — get exploited by people who claim to be agents but have no license, no accountability, and no real network.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stat: "70%", desc: "of international transfers involve intermediaries with no FIFA license" },
              { stat: "$1.37B", desc: "paid in agent fees in 2024 — but how much actually reached players fairly?" },
              { stat: "10,000+", desc: "candidates took the FIFA agent exam — the industry is being regulated for a reason" },
            ].map((s) => (
              <div key={s.desc} className="card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-3">{s.stat}</div>
                <p className="text-foreground-muted text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What you get with Inter Agentcy</h2>
          <p className="text-foreground-muted text-center mb-12 max-w-xl mx-auto">A complete support system built around your career</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="card p-6 card-hover">
                <div className="w-10 h-10 rounded-xl bg-background-elevated flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{b.title}</h3>
                <p className="text-foreground-muted text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-background-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How it works for players</h2>
          <p className="text-foreground-muted text-center mb-16 max-w-xl mx-auto">From discovery to your next contract — here&apos;s the journey</p>
          <div className="space-y-8">
            {howItWorks.map((step) => (
              <div key={step.step} className="card p-8">
                <div className="flex gap-6">
                  <div className="text-3xl font-bold gradient-text flex-shrink-0 w-12">{step.step}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-foreground-muted mb-3">{step.desc}</p>
                    <p className="text-foreground-dim text-sm">{step.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Protection */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Your protection is built in</h2>
          <p className="text-foreground-muted text-center mb-12 max-w-xl mx-auto">Not just promises — these protections are enforced by the platform</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {protections.map((p) => (
              <div key={p.title} className="card p-5 flex gap-4 items-start">
                <div className="w-9 h-9 rounded-lg bg-background-elevated flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
                  <p className="text-foreground-muted text-xs">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-background-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Players who made the move</h2>
          <div className="space-y-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-8">
                <p className="text-lg text-foreground mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-foreground-dim text-xs">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team Around You */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">The team around you</h2>
          <p className="text-foreground-muted text-center mb-12 max-w-xl mx-auto">Multiple professionals working together for your career</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Briefcase, role: "Licensed Agent", desc: "Negotiates your contracts, handles transfers, ensures legal compliance" },
              { icon: Target, role: "Scout", desc: "Identifies opportunities, submits your profile to clubs, tracks your performances" },
              { icon: Users, role: "Representative", desc: "Manages your day-to-day career, brand, and off-pitch wellbeing" },
              { icon: BarChart3, role: "Data Analyst", desc: "Tracks your performance data, creates comparison reports for clubs" },
            ].map((r) => (
              <div key={r.role} className="card p-5 text-center">
                <div className="w-10 h-10 rounded-xl bg-background-elevated flex items-center justify-center mx-auto mb-3">
                  <r.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{r.role}</h3>
                <p className="text-foreground-dim text-xs">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-background-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <button
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left card p-5 transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm pr-4">{faq.q}</h3>
                  <span className="text-foreground-dim text-lg flex-shrink-0">{openFaq === i ? "−" : "+"}</span>
                </div>
                {openFaq === i && (
                  <p className="text-foreground-muted text-sm mt-3 pt-3 border-t border-border">{faq.a}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to take control of your career?</h2>
          <p className="text-foreground-muted mb-3">Join Inter Agentcy and get connected with verified professionals who will fight for your future.</p>
          <p className="text-foreground-dim text-sm mb-8">Free for players. Always.</p>
          <Link href="/register" className="inline-flex items-center gap-2 px-8 py-4 gradient-steel-btn text-white font-semibold rounded-xl transition-all">
            Get Represented <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
