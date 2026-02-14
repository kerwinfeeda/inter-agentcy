"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, ArrowRight, Scan, Handshake, Link2, GraduationCap, Briefcase, Globe, CheckCircle2 } from "lucide-react";

const roles = [
  { id: "agent", label: "Licensed Agent", desc: "Execute deals, manage player contracts", icon: Shield, features: ["Full CRM & deal pipeline", "FIFA compliance tools", "Club network access"] },
  { id: "scout", label: "Scout", desc: "Discover talent, write reports", icon: Scan, features: ["Scouting report tools", "Video upload & analysis", "Agent matching"] },
  { id: "representative", label: "Representative", desc: "Manage player careers & brands", icon: Handshake, features: ["Career planning tools", "Brand management suite", "Licensed agent routing"] },
  { id: "introducer", label: "Introducer", desc: "Connect players, agents & clubs", icon: Link2, features: ["Referral tracking", "Commission dashboard", "Network tools"] },
];

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ role: "", firstName: "", lastName: "", email: "", password: "", country: "" });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2">
            <Shield className="w-8 h-8 text-accent" />
            <span className="text-xl font-semibold tracking-tight">Inter <span className="text-accent">Agentcy</span></span>
          </Link>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${s <= step ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-dim"}`}>
                {s}
              </div>
              {s < 3 && <div className={`w-12 h-0.5 ${s < step ? "gradient-steel" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        {/* Step 1: Choose Role */}
        {step === 1 && (
          <div>
            <h1 className="text-2xl font-bold text-center mb-2">Join the future of football representation</h1>
            <p className="text-foreground-muted text-center mb-8 text-sm">No experience required — we&apos;ll give you the tools, training, and network to succeed</p>
            {/* What you'll get */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { icon: GraduationCap, label: "Free Training" },
                { icon: Briefcase, label: "Professional Tools" },
                { icon: Globe, label: "Global Network" },
                { icon: CheckCircle2, label: "FIFA Compliance" },
              ].map((b) => (
                <div key={b.label} className="card rounded-xl p-3 flex items-center gap-2.5">
                  <b.icon className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-xs text-foreground-muted">{b.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => { update("role", role.id); setStep(2); }}
                  className={`w-full text-left card card-hover p-5 transition-all group ${form.role === role.id ? "border-accent/40" : ""}`}
                  type="button"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-background-elevated flex items-center justify-center group-hover:bg-accent/10 transition-all">
                      <role.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{role.label}</h3>
                      <p className="text-foreground-muted text-sm mb-3">{role.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {role.features.map((f) => (
                          <span key={f} className="text-xs px-2 py-0.5 rounded bg-background-elevated text-foreground-dim">{f}</span>
                        ))}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-foreground-dim group-hover:text-accent transition-colors mt-1" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Account Details */}
        {step === 2 && (
          <div>
            <h1 className="text-2xl font-bold text-center mb-2">Create your account</h1>
            <p className="text-foreground-muted text-center mb-8 text-sm">
              Signing up as <span className="text-accent capitalize">{form.role}</span> · <button onClick={() => setStep(1)} className="underline hover:text-white">change</button>
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">First name</label>
                  <input
                    type="text" value={form.firstName} onChange={(e) => update("firstName", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">Last name</label>
                  <input
                    type="text" value={form.lastName} onChange={(e) => update("lastName", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Email</label>
                <input
                  type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Password</label>
                <input
                  type="password" value={form.password} onChange={(e) => update("password", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors"
                  placeholder="Min 8 characters"
                />
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Country</label>
                <input
                  type="text" value={form.country} onChange={(e) => update("country", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors"
                  placeholder="United Kingdom"
                />
              </div>
              <button
                onClick={() => setStep(3)}
                disabled={!form.firstName || !form.email || !form.password}
                className="w-full py-3 gradient-steel-btn text-white font-semibold rounded-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="text-center">
            <div className="w-16 h-16 rounded-full gradient-steel-btn flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold mb-3">You&apos;re in</h1>
            <p className="text-foreground-muted mb-8 text-sm max-w-sm mx-auto">
              Welcome to Inter Agentcy, {form.firstName}. Let&apos;s set up your {form.role} profile so you can hit the ground running.
            </p>
            <Link
              href="/onboarding"
              className="inline-flex items-center gap-2 px-8 py-3 gradient-steel-btn text-white font-semibold rounded-xl transition-all"
            >
              Set up your profile <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-foreground-dim text-xs mt-6">
              Or go straight to your <Link href="/dashboard" className="text-accent hover:text-accent-light underline">dashboard</Link>
            </p>
          </div>
        )}

        {/* Footer */}
        {step < 3 && (
          <p className="text-center text-foreground-dim text-xs mt-8">
            Already have an account? <Link href="/login" className="text-accent hover:text-accent-light">Sign in</Link>
          </p>
        )}
      </div>
    </div>
  );
}
