"use client";

import { useState } from "react";
import { Building2, Shield, Zap, Globe, Users, FileCheck, ArrowRight, Check } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const benefits = [
  { icon: Shield, title: "Verified Agents Only", description: "Every agent on our platform is verified, licensed, and compliance-checked. No more vetting headaches." },
  { icon: Zap, title: "Streamlined Deals", description: "Standardized documentation, digital workflows, and clear commission structures accelerate negotiations." },
  { icon: FileCheck, title: "Built-in Compliance", description: "Every transaction follows FIFA regulations automatically. Reduce legal risk and simplify audits." },
  { icon: Globe, title: "Global Talent Access", description: "Connect with agents representing players across 200+ countries and all levels of competition." },
  { icon: Users, title: "Agent Quality Ratings", description: "Our reputation system helps you identify the most reliable, professional agents to work with." },
  { icon: Building2, title: "Dedicated Support", description: "Priority partnership team to help you get the most from the platform." },
];

const clubTiers = [
  {
    name: "Explorer",
    price: "Free",
    features: ["Browse agent profiles", "Basic search filters", "Up to 5 agent connections/month"],
  },
  {
    name: "Partner",
    price: "$199/mo",
    features: ["Unlimited agent connections", "Priority deal matching", "Advanced scouting data", "Compliance dashboard", "Dedicated account manager"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Everything in Partner", "API access", "Custom integrations", "Multi-user access", "White-glove onboarding", "SLA guarantees"],
  },
];

export default function ClubsPage() {
  const [form, setForm] = useState({ club: "", name: "", email: "", role: "", message: "" });

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            For <span className="gradient-text">Clubs</span>
          </h1>
          <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
            Access a network of verified, compliant agents. Streamline your transfer operations.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {benefits.map((b) => (
            <FeatureCard key={b.title} icon={b.icon} title={b.title} description={b.description} />
          ))}
        </div>

        {/* Club Tiers */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Partnership <span className="gradient-text">Tiers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clubTiers.map((tier, i) => (
              <div key={tier.name} className={`card rounded-2xl p-8 ${i === 1 ? "border-2 border-accent" : ""}`}>
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold mb-6">{tier.price}</p>
                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-foreground-muted">Interested in a partnership? Let&apos;s talk.</p>
          </div>
          <div className="card rounded-2xl p-8">
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-foreground-muted mb-1.5">Club Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white focus:outline-none focus:border-accent transition-colors" value={form.club} onChange={(e) => setForm({ ...form, club: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm text-foreground-muted mb-1.5">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white focus:outline-none focus:border-accent transition-colors" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-foreground-muted mb-1.5">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white focus:outline-none focus:border-accent transition-colors" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm text-foreground-muted mb-1.5">Your Role</label>
                  <input type="text" placeholder="e.g., Sporting Director" className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white placeholder-text-dim focus:outline-none focus:border-accent transition-colors" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="block text-sm text-foreground-muted mb-1.5">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white focus:outline-none focus:border-accent transition-colors resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <button className="w-full py-3 gradient-steel-btn text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2">
                Send Message
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
