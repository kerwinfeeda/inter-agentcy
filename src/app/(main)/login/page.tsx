"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2">
            <Shield className="w-8 h-8 text-accent" />
            <span className="text-xl font-semibold tracking-tight">Inter <span className="text-accent">Agentcy</span></span>
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-center mb-2">Welcome back</h1>
        <p className="text-foreground-muted text-center mb-8 text-sm">Sign in to your account</p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs text-foreground-muted mb-1.5">Email</label>
            <input
              type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs text-foreground-muted">Password</label>
              <button className="text-xs text-accent hover:text-accent-light">Forgot?</button>
            </div>
            <input
              type="password" value={form.password} onChange={(e) => update("password", e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors"
              placeholder="••••••••"
            />
          </div>
          <Link
            href="/dashboard"
            className="w-full py-3 gradient-steel-btn text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 mt-2"
          >
            Sign in <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-center text-foreground-dim text-xs mt-8">
          Don&apos;t have an account? <Link href="/register" className="text-accent hover:text-accent-light">Get started</Link>
        </p>
      </div>
    </div>
  );
}
