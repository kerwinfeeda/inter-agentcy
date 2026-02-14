"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, ArrowRight, Check, Upload, Globe, Users, FileText } from "lucide-react";

const steps = [
  { label: "Profile", icon: Users },
  { label: "Expertise", icon: Globe },
  { label: "Documents", icon: FileText },
  { label: "Ready", icon: Check },
];

const regions = ["Western Europe", "Eastern Europe", "West Africa", "East Africa", "Southern Africa", "North Africa", "South America", "Central America", "Asia", "Middle East", "Oceania"];
const specializations = ["Youth Development", "First Team", "Transfers", "Loan Deals", "Free Agents", "Contract Renewals", "Brand & Sponsorship", "Legal & Compliance"];
const leagues = ["Premier League", "Championship", "League One", "League Two", "La Liga", "Serie A", "Bundesliga", "Ligue 1", "Eredivisie", "Liga Portugal", "MLS", "Other"];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState({ bio: "", phone: "", linkedin: "", regions: [] as string[], specializations: [] as string[], leagues: [] as string[], yearsExp: "" });

  const toggle = (field: "regions" | "specializations" | "leagues", value: string) => {
    setProfile((p) => ({
      ...p,
      [field]: p[field].includes(value) ? p[field].filter((v) => v !== value) : [...p[field], value],
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Shield className="w-8 h-8 text-accent mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-1">Set up your profile</h1>
          <p className="text-foreground-muted text-sm">This helps us match you with the right opportunities</p>
        </div>

        {/* Steps */}
        <div className="flex items-center justify-center gap-1 mb-10">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-1">
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${i <= step ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-dim"}`}>
                <s.icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{s.label}</span>
              </div>
              {i < steps.length - 1 && <div className={`w-6 h-0.5 ${i < step ? "gradient-steel" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <div className="card p-8">
          {/* Step 1: Profile */}
          {step === 0 && (
            <div className="space-y-5">
              <h2 className="text-lg font-semibold mb-1">Basic information</h2>
              <p className="text-foreground-muted text-sm mb-4">Tell us about yourself</p>

              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Professional bio</label>
                <textarea
                  value={profile.bio} onChange={(e) => setProfile((p) => ({ ...p, bio: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors resize-none"
                  placeholder="Brief description of your experience in football..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">Phone</label>
                  <input
                    type="tel" value={profile.phone} onChange={(e) => setProfile((p) => ({ ...p, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors"
                    placeholder="+44 7700 900000"
                  />
                </div>
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">Years of experience</label>
                  <input
                    type="text" value={profile.yearsExp} onChange={(e) => setProfile((p) => ({ ...p, yearsExp: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors"
                    placeholder="e.g. 5"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">LinkedIn profile</label>
                <input
                  type="url" value={profile.linkedin} onChange={(e) => setProfile((p) => ({ ...p, linkedin: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>
              {/* Profile photo */}
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Profile photo</label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-background-elevated border border-border flex items-center justify-center">
                    <Users className="w-6 h-6 text-foreground-dim" />
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-background-elevated border border-border text-sm text-foreground-muted hover:text-white hover:border-accent/40 transition-all flex items-center gap-2">
                    <Upload className="w-4 h-4" /> Upload
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Expertise */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold mb-1">Your expertise</h2>
              <p className="text-foreground-muted text-sm mb-4">Help us understand your focus areas</p>

              <div>
                <label className="block text-xs text-foreground-muted mb-3">Regions you cover</label>
                <div className="flex flex-wrap gap-2">
                  {regions.map((r) => (
                    <button key={r} onClick={() => toggle("regions", r)}
                      className={`px-3 py-1.5 rounded-lg text-xs transition-all ${profile.regions.includes(r) ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-muted hover:text-white border border-border"}`}
                    >{r}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-3">Specializations</label>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((s) => (
                    <button key={s} onClick={() => toggle("specializations", s)}
                      className={`px-3 py-1.5 rounded-lg text-xs transition-all ${profile.specializations.includes(s) ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-muted hover:text-white border border-border"}`}
                    >{s}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-3">Leagues of interest</label>
                <div className="flex flex-wrap gap-2">
                  {leagues.map((l) => (
                    <button key={l} onClick={() => toggle("leagues", l)}
                      className={`px-3 py-1.5 rounded-lg text-xs transition-all ${profile.leagues.includes(l) ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-muted hover:text-white border border-border"}`}
                    >{l}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Documents */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold mb-1">Documents & verification</h2>
              <p className="text-foreground-muted text-sm mb-4">Upload relevant documents to verify your profile</p>

              {[
                { label: "FIFA Agent License", desc: "Required for licensed agents. Optional for other roles.", required: false },
                { label: "Government ID", desc: "Passport or national ID for identity verification.", required: true },
                { label: "Proof of Address", desc: "Utility bill or bank statement from the last 3 months.", required: false },
              ].map((doc) => (
                <div key={doc.label} className="flex items-center gap-4 p-4 rounded-xl bg-background-elevated border border-border">
                  <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                    <FileText className="w-5 h-5 text-foreground-dim" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-white">{doc.label}</p>
                      {doc.required && <span className="text-xs text-accent">Required</span>}
                    </div>
                    <p className="text-xs text-foreground-dim mt-0.5">{doc.desc}</p>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-background border border-border text-xs text-foreground-muted hover:text-white hover:border-accent/40 transition-all flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5" /> Upload
                  </button>
                </div>
              ))}

              <p className="text-xs text-foreground-dim">You can skip this step and upload documents later from your dashboard.</p>
            </div>
          )}

          {/* Step 4: Ready */}
          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full gradient-steel-btn flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-3">You&apos;re all set</h2>
              <p className="text-foreground-muted text-sm mb-8 max-w-sm mx-auto">
                Your profile is ready. Head to your dashboard to start managing your football career.
              </p>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-3 gradient-steel-btn text-white font-semibold rounded-xl transition-all"
              >
                Go to Dashboard <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {/* Navigation */}
          {step < 3 && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <button
                onClick={() => setStep(Math.max(0, step - 1))}
                className={`text-sm text-foreground-muted hover:text-white transition-colors ${step === 0 ? "invisible" : ""}`}
              >
                Back
              </button>
              <div className="flex items-center gap-3">
                {step === 2 && (
                  <button onClick={() => setStep(3)} className="text-sm text-foreground-dim hover:text-foreground-muted transition-colors">
                    Skip for now
                  </button>
                )}
                <button
                  onClick={() => setStep(step + 1)}
                  className="flex items-center gap-2 px-5 py-2.5 gradient-steel-btn text-white rounded-xl transition-all text-sm font-medium"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
