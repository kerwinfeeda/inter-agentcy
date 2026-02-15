"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowLeft, Building2, Users, Shield,
  CheckCircle, Target
} from "lucide-react";

const clubTypes = ["Professional Club (Top Division)", "Professional Club (Lower Division)", "Academy / Youth Club", "Semi-Professional Club", "National Association"];
const regions = ["Western Europe", "Eastern Europe", "Scandinavia", "West Africa", "East Africa", "Southern Africa", "North Africa", "South America", "Central America", "Asia", "Middle East", "Oceania", "North America"];
const needs = [
  "Access to verified agents for transfers",
  "Scout network for talent identification",
  "Compliance tools for FIFA regulations",
  "Loan player management",
  "Youth talent pipeline from emerging markets",
  "Contract and negotiation support",
  "Player data and analytics",
  "Sell-on facilitation for existing players",
];

const steps = [
  { num: 1, label: "Club Info", icon: Building2 },
  { num: 2, label: "Needs", icon: Target },
  { num: 3, label: "Contact", icon: Users },
  { num: 4, label: "Verify", icon: Shield },
  { num: 5, label: "Submit", icon: CheckCircle },
];

const tiers = [
  {
    name: "Standard",
    price: "Free",
    desc: "Browse verified agents and receive talent submissions",
    features: ["Access agent directory", "Receive player submissions", "Basic compliance tools", "Platform messaging"],
  },
  {
    name: "Professional",
    price: "$299/mo",
    desc: "Full access to the Inter Agentcy network and tools",
    features: ["Everything in Standard", "Priority talent matching", "Advanced player search", "Deal Room access", "Dedicated account manager", "Transfer window planning"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Tailored solutions for large clubs and groups",
    features: ["Everything in Professional", "API integrations", "Custom scouting briefs", "Multi-club management", "Exclusive talent pipeline", "On-site support"],
  },
];

export default function ClubPartnerPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    clubName: "", league: "", country: "", city: "", website: "",
    clubType: "", founded: "", stadiumCapacity: "",
    selectedNeeds: [] as string[], preferredRegions: [] as string[],
    positionsNeeded: "", budgetRange: "", transferWindows: "",
    contactName: "", contactRole: "", contactEmail: "", contactPhone: "",
    selectedTier: "",
  });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));
  const toggleList = (field: "selectedNeeds" | "preferredRegions", value: string) => {
    setForm((f) => ({
      ...f,
      [field]: f[field].includes(value) ? f[field].filter((v) => v !== value) : [...f[field], value],
    }));
  };

  const next = () => setStep((s) => Math.min(4, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/clubs" className="inline-flex items-center gap-2 text-foreground-dim text-sm hover:text-foreground-muted transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to For Clubs
          </Link>
          <h1 className="text-3xl font-bold mb-2">Club Partnership Application</h1>
          <p className="text-foreground-muted text-sm">Join our network of 200+ clubs and access verified football professionals worldwide</p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between mb-10 px-4">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${i <= step ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-dim"}`}>
                  <s.icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-foreground-dim mt-1.5 hidden sm:block">{s.label}</span>
              </div>
              {i < steps.length - 1 && <div className={`w-6 sm:w-10 h-0.5 mx-1 ${i < step ? "gradient-steel" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        {/* Step 0: Club Info */}
        {step === 0 && (
          <div className="card p-8 space-y-5">
            <div>
              <h2 className="text-lg font-semibold mb-1">Club Information</h2>
              <p className="text-foreground-dim text-sm mb-6">Tell us about your club</p>
            </div>
            <div>
              <label className="block text-xs text-foreground-muted mb-1.5">Club name *</label>
              <input type="text" value={form.clubName} onChange={(e) => update("clubName", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="e.g. FC Nordsjaelland" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">League / Competition *</label>
                <input type="text" value={form.league} onChange={(e) => update("league", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="Danish Superliga" />
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Country *</label>
                <input type="text" value={form.country} onChange={(e) => update("country", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="Denmark" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-foreground-muted mb-2">Club type *</label>
              <div className="space-y-2">
                {clubTypes.map((t) => (
                  <button key={t} onClick={() => update("clubType", t)} className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all ${form.clubType === t ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-muted border border-border hover:border-accent/20"}`}>{t}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs text-foreground-muted mb-1.5">Website</label>
              <input type="url" value={form.website} onChange={(e) => update("website", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="https://..." />
            </div>
          </div>
        )}

        {/* Step 1: Needs */}
        {step === 1 && (
          <div className="card p-8 space-y-5">
            <div>
              <h2 className="text-lg font-semibold mb-1">What are you looking for?</h2>
              <p className="text-foreground-dim text-sm mb-6">Select all that apply</p>
            </div>
            <div className="space-y-2">
              {needs.map((n) => (
                <button key={n} onClick={() => toggleList("selectedNeeds", n)} className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all flex items-center gap-3 ${form.selectedNeeds.includes(n) ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-muted border border-border hover:border-accent/20"}`}>
                  <CheckCircle className={`w-4 h-4 flex-shrink-0 ${form.selectedNeeds.includes(n) ? "text-white" : "text-foreground-dim"}`} />
                  {n}
                </button>
              ))}
            </div>
            <div>
              <label className="block text-xs text-foreground-muted mb-3">Regions of interest for player recruitment</label>
              <div className="flex flex-wrap gap-2">
                {regions.map((r) => (
                  <button key={r} onClick={() => toggleList("preferredRegions", r)} className={`px-3 py-1.5 rounded-lg text-xs transition-all ${form.preferredRegions.includes(r) ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-muted border border-border hover:text-white"}`}>{r}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs text-foreground-muted mb-1.5">Positions you&apos;re currently looking to fill</label>
              <textarea value={form.positionsNeeded} onChange={(e) => update("positionsNeeded", e.target.value)} rows={2} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors resize-none" placeholder="e.g. Centre-back (U23), Striker (experienced), Left-back..." />
            </div>
          </div>
        )}

        {/* Step 2: Contact */}
        {step === 2 && (
          <div className="card p-8 space-y-5">
            <div>
              <h2 className="text-lg font-semibold mb-1">Primary Contact</h2>
              <p className="text-foreground-dim text-sm mb-6">Who should we work with at the club?</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Contact name *</label>
                <input type="text" value={form.contactName} onChange={(e) => update("contactName", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="Full name" />
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Role at club *</label>
                <input type="text" value={form.contactRole} onChange={(e) => update("contactRole", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="Sporting Director" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-foreground-muted mb-1.5">Email *</label>
              <input type="email" value={form.contactEmail} onChange={(e) => update("contactEmail", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="contact@club.com" />
            </div>
            <div>
              <label className="block text-xs text-foreground-muted mb-1.5">Phone</label>
              <input type="tel" value={form.contactPhone} onChange={(e) => update("contactPhone", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="+45 00 00 00 00" />
            </div>
          </div>
        )}

        {/* Step 3: Verify & Choose Tier */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-2">
              <h2 className="text-lg font-semibold mb-1">Choose your partnership tier</h2>
              <p className="text-foreground-dim text-sm">You can upgrade or downgrade at any time</p>
            </div>
            {tiers.map((tier) => (
              <button
                key={tier.name}
                onClick={() => update("selectedTier", tier.name)}
                className={`w-full text-left card p-6 transition-all ${form.selectedTier === tier.name ? "border-accent/40" : ""} ${tier.highlighted ? "ring-1 ring-accent/20" : ""}`}
              >
                {tier.highlighted && <span className="text-xs gradient-steel-btn text-white px-3 py-0.5 rounded-full mb-3 inline-block">Recommended</span>}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{tier.name}</h3>
                    <p className="text-foreground-muted text-sm mt-1">{tier.desc}</p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <span className="text-xl font-bold">{tier.price}</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground-dim">
                      <CheckCircle className="w-3.5 h-3.5 text-success flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        )}

        {/* Step 4: Submit */}
        {step === 4 && (
          <div className="card p-8 text-center">
            <div className="w-16 h-16 rounded-full gradient-steel-btn flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Partnership application ready</h2>
            <p className="text-foreground-muted text-sm mb-4 max-w-md mx-auto">
              We&apos;ll review your application and get back to you within 48 hours. Once approved, you&apos;ll get immediate access to the platform.
            </p>

            {/* Summary */}
            <div className="text-left space-y-3 mb-8">
              {[
                { label: "Club", value: `${form.clubName} — ${form.league}` },
                { label: "Type", value: form.clubType },
                { label: "Contact", value: `${form.contactName} (${form.contactRole})` },
                { label: "Tier", value: form.selectedTier || "Not selected" },
                { label: "Needs", value: form.selectedNeeds.length ? `${form.selectedNeeds.length} areas selected` : "None" },
              ].filter((s) => s.value && s.value !== " — ").map((s) => (
                <div key={s.label} className="flex items-center justify-between p-3 rounded-lg bg-background-elevated text-sm">
                  <span className="text-foreground-dim">{s.label}</span>
                  <span className="text-foreground-muted">{s.value}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-4 gradient-steel-btn text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-lg">
              Submit Partnership Application <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-foreground-dim text-xs mt-4">By submitting, you agree to Inter Agentcy&apos;s terms and partnership agreement</p>
          </div>
        )}

        {/* Navigation */}
        {step < 4 && (
          <div className="flex items-center justify-between mt-6">
            <button onClick={back} className={`flex items-center gap-2 text-sm text-foreground-muted hover:text-white transition-colors ${step === 0 ? "invisible" : ""}`}>
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <div className="flex items-center gap-3">
              <span className="text-xs text-foreground-dim">Step {step + 1} of 5</span>
              <button onClick={next} className="flex items-center gap-2 px-5 py-2.5 gradient-steel-btn text-white rounded-xl transition-all text-sm font-medium">
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
