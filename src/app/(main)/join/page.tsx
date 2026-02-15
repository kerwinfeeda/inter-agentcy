"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle, Shield, Users, Globe, Search, Link2 } from "lucide-react";

const steps = ["Your Role", "Personal Info", "Role Details", "Confirm"];

type Role = "" | "agent" | "scout" | "rep" | "introducer";

const regions = [
  "Western Europe", "Eastern Europe", "Scandinavia", "UK & Ireland",
  "West Africa", "East Africa", "North Africa", "Southern Africa",
  "South America", "Central America", "North America",
  "Middle East", "East Asia", "Southeast Asia", "Oceania",
];

const roleCards: { key: Role; icon: typeof Shield; label: string; desc: string; color: string; tag: string }[] = [
  { key: "agent", icon: Shield, label: "Licensed Agent", desc: "Execute transfers, negotiate contracts, handle FIFA-regulated transactions.", color: "border-accent", tag: "Licensed" },
  { key: "scout", icon: Search, label: "Scout", desc: "Discover talent, create reports, earn finder's fees.", color: "border-success", tag: "Licensed or Unlicensed" },
  { key: "rep", icon: Users, label: "Representative", desc: "Manage player careers, build brands, work with agents.", color: "border-purple-400", tag: "Unlicensed OK" },
  { key: "introducer", icon: Link2, label: "Introducer", desc: "Connect parties, earn referral commissions.", color: "border-accent-light", tag: "Unlicensed OK" },
];

function JoinPageInner() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    role: "" as Role,
    firstName: "", lastName: "", email: "", phone: "",
    licenseNumber: "", experience: "",
    scoutExperience: "", scoutRegions: [] as string[], videoCapability: "",
    playersManaged: "", socialFollowing: "", repFocus: "",
    networkSize: "", industryConnections: "",
    regions: [] as string[], goals: "",
  });

  // Pre-select role from URL param
  useEffect(() => {
    const role = searchParams.get("role");
    if (role && ["agent", "scout", "rep", "introducer"].includes(role)) {
      setForm((prev) => ({ ...prev, role: role as Role }));
      setStep(1);
    }
  }, [searchParams]);

  const update = (key: string, value: string | string[]) => setForm({ ...form, [key]: value });
  const toggleRegion = (r: string) => {
    const regs = form.regions.includes(r) ? form.regions.filter(x => x !== r) : [...form.regions, r];
    update("regions", regs);
  };

  if (submitted) {
    return (
      <div className="py-24 min-h-[80vh] flex items-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-success" />
          </div>
          <h1 className="text-3xl font-bold mb-4">You&apos;re on the List!</h1>
          <p className="text-foreground-muted mb-8">
            Thanks for joining the Inter Agentcy waitlist, {form.firstName}. We&apos;ll be in touch at{" "}
            <span className="text-accent">{form.email}</span> with updates and early access.
          </p>
          <div className="card rounded-xl p-6 text-left space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm text-foreground-muted">Your application as <span className="capitalize font-medium text-white">{form.role === "rep" ? "representative" : form.role}</span> is being reviewed</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-sm text-foreground-muted">Join our community Discord while you wait</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-accent" />
              <span className="text-sm text-foreground-muted">Expected launch: Q2 2025</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const canProceed = () => {
    if (step === 0) return !!form.role;
    if (step === 1) return !!(form.firstName && form.lastName && form.email);
    return true;
  };

  return (
    <div className="py-24 min-h-[80vh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join the <span className="gradient-text">Ecosystem</span>
          </h1>
          <p className="text-foreground-muted">Choose your role and be among the first to access the platform.</p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between mb-10 max-w-md mx-auto">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${i <= step ? "bg-accent text-white" : "bg-background-elevated text-foreground-dim"}`}>
                {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
              </div>
              {i < steps.length - 1 && <div className={`w-8 sm:w-16 h-0.5 mx-1 ${i < step ? "bg-accent" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <div className="card rounded-2xl p-8">
          {/* Step 0: Role Selection */}
          {step === 0 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold mb-2">Choose Your Role</h2>
              <p className="text-sm text-foreground-muted mb-4">How will you participate in the football ecosystem?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {roleCards.map((r) => (
                  <button
                    key={r.key}
                    onClick={() => update("role", r.key)}
                    className={`p-5 rounded-xl text-left transition-all border-2 ${
                      form.role === r.key ? `${r.color} bg-background-elevated` : "border-transparent card card-hover"
                    }`}
                  >
                    <r.icon className="w-6 h-6 mb-2 text-white" />
                    <p className="font-semibold mb-1">{r.label}</p>
                    <p className="text-xs text-foreground-muted mb-2">{r.desc}</p>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-foreground-muted">{r.tag}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Personal Info */}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold mb-2">Personal Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div><label className="block text-sm text-foreground-muted mb-1.5">First Name *</label><input type="text" className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white focus:outline-none focus:border-accent transition-colors" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} /></div>
                <div><label className="block text-sm text-foreground-muted mb-1.5">Last Name *</label><input type="text" className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white focus:outline-none focus:border-accent transition-colors" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} /></div>
              </div>
              <div><label className="block text-sm text-foreground-muted mb-1.5">Email *</label><input type="email" className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white focus:outline-none focus:border-accent transition-colors" value={form.email} onChange={(e) => update("email", e.target.value)} /></div>
              <div><label className="block text-sm text-foreground-muted mb-1.5">Phone (optional)</label><input type="tel" className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white focus:outline-none focus:border-accent transition-colors" value={form.phone} onChange={(e) => update("phone", e.target.value)} /></div>
            </div>
          )}

          {/* Step 2: Role-specific details */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold mb-2">
                {form.role === "agent" && "Agent Details"}
                {form.role === "scout" && "Scout Details"}
                {form.role === "rep" && "Representative Details"}
                {form.role === "introducer" && "Introducer Details"}
              </h2>

              {form.role === "agent" && (
                <>
                  <div><label className="block text-sm text-foreground-muted mb-1.5">FIFA License Number (optional)</label><input type="text" placeholder="Leave blank if not yet licensed" className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white placeholder-text-dim focus:outline-none focus:border-accent transition-colors" value={form.licenseNumber} onChange={(e) => update("licenseNumber", e.target.value)} /></div>
                  <div>
                    <label className="block text-sm text-foreground-muted mb-2">Experience Level</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[["aspiring", "Pre-License"], ["new", "0-2 Years"], ["established", "2-5 Years"], ["veteran", "5+ Years"]].map(([val, label]) => (
                        <button key={val} onClick={() => update("experience", val)} className={`p-3 rounded-xl text-sm transition-all ${form.experience === val ? "bg-accent/20 border-2 border-accent" : "card card-hover"}`}>{label}</button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {form.role === "scout" && (
                <>
                  <div>
                    <label className="block text-sm text-foreground-muted mb-2">Scouting Experience</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[["beginner", "Just Starting"], ["intermediate", "1-3 Years"], ["experienced", "3-5 Years"], ["expert", "5+ Years"]].map(([val, label]) => (
                        <button key={val} onClick={() => update("scoutExperience", val)} className={`p-3 rounded-xl text-sm transition-all ${form.scoutExperience === val ? "bg-success/20 border-2 border-success" : "card card-hover"}`}>{label}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-foreground-muted mb-2">Regions You Cover</label>
                    <div className="flex flex-wrap gap-2">{regions.map((r) => (<button key={r} onClick={() => toggleRegion(r)} className={`px-3 py-1.5 rounded-lg text-xs transition-all ${form.regions.includes(r) ? "bg-success text-white" : "card text-foreground-muted hover:text-white"}`}>{r}</button>))}</div>
                  </div>
                  <div>
                    <label className="block text-sm text-foreground-muted mb-2">Video Capability</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[["none", "None"], ["basic", "Phone/Basic"], ["pro", "Professional"]].map(([val, label]) => (
                        <button key={val} onClick={() => update("videoCapability", val)} className={`p-3 rounded-xl text-sm transition-all ${form.videoCapability === val ? "bg-success/20 border-2 border-success" : "card card-hover"}`}>{label}</button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {form.role === "rep" && (
                <>
                  <div><label className="block text-sm text-foreground-muted mb-1.5">Current Players Managed</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white focus:outline-none focus:border-accent transition-colors" value={form.playersManaged} onChange={(e) => update("playersManaged", e.target.value)}>
                      <option value="" className="bg-background">Select...</option><option value="0" className="bg-background">None yet</option><option value="1-3" className="bg-background">1-3 players</option><option value="4-10" className="bg-background">4-10 players</option><option value="10+" className="bg-background">10+ players</option>
                    </select>
                  </div>
                  <div><label className="block text-sm text-foreground-muted mb-1.5">Combined Social Media Following</label><input type="text" placeholder="e.g., 50K across all players" className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white placeholder-text-dim focus:outline-none focus:border-accent transition-colors" value={form.socialFollowing} onChange={(e) => update("socialFollowing", e.target.value)} /></div>
                  <div><label className="block text-sm text-foreground-muted mb-1.5">Primary Focus</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[["career", "Career Management"], ["brand", "Brand Building"], ["social", "Social Media"], ["all", "Full Service"]].map(([val, label]) => (
                        <button key={val} onClick={() => update("repFocus", val)} className={`p-3 rounded-xl text-sm transition-all ${form.repFocus === val ? "bg-purple-400/20 border-2 border-purple-400" : "card card-hover"}`}>{label}</button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {form.role === "introducer" && (
                <>
                  <div><label className="block text-sm text-foreground-muted mb-1.5">Network Size (estimated contacts in football)</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white focus:outline-none focus:border-accent transition-colors" value={form.networkSize} onChange={(e) => update("networkSize", e.target.value)}>
                      <option value="" className="bg-background">Select...</option><option value="small" className="bg-background">Under 50 contacts</option><option value="medium" className="bg-background">50-200 contacts</option><option value="large" className="bg-background">200-500 contacts</option><option value="xlarge" className="bg-background">500+ contacts</option>
                    </select>
                  </div>
                  <div><label className="block text-sm text-foreground-muted mb-1.5">Primary Industry Connections</label><input type="text" placeholder="e.g., Club directors, agents, academy staff" className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white placeholder-text-dim focus:outline-none focus:border-accent transition-colors" value={form.industryConnections} onChange={(e) => update("industryConnections", e.target.value)} /></div>
                  <div>
                    <label className="block text-sm text-foreground-muted mb-2">Regions</label>
                    <div className="flex flex-wrap gap-2">{regions.map((r) => (<button key={r} onClick={() => toggleRegion(r)} className={`px-3 py-1.5 rounded-lg text-xs transition-all ${form.regions.includes(r) ? "bg-accent text-white" : "card text-foreground-muted hover:text-white"}`}>{r}</button>))}</div>
                  </div>
                </>
              )}

              <div><label className="block text-sm text-foreground-muted mb-1.5">What are you hoping to achieve? (optional)</label><textarea rows={3} className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white placeholder-text-dim focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Tell us about your goals..." value={form.goals} onChange={(e) => update("goals", e.target.value)} /></div>
            </div>
          )}

          {/* Step 3: Confirm */}
          {step === 3 && (
            <div className="space-y-5">
              <h2 className="text-xl font-bold mb-2">Confirm Your Application</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-border"><span className="text-foreground-muted">Role</span><span className="capitalize font-medium">{form.role === "rep" ? "Representative" : form.role}</span></div>
                <div className="flex justify-between py-2 border-b border-border"><span className="text-foreground-muted">Name</span><span>{form.firstName} {form.lastName}</span></div>
                <div className="flex justify-between py-2 border-b border-border"><span className="text-foreground-muted">Email</span><span className="text-accent">{form.email}</span></div>
                {form.role === "agent" && form.experience && <div className="flex justify-between py-2 border-b border-border"><span className="text-foreground-muted">Experience</span><span className="capitalize">{form.experience}</span></div>}
                {form.role === "scout" && form.scoutExperience && <div className="flex justify-between py-2 border-b border-border"><span className="text-foreground-muted">Experience</span><span className="capitalize">{form.scoutExperience}</span></div>}
                {form.role === "rep" && form.playersManaged && <div className="flex justify-between py-2 border-b border-border"><span className="text-foreground-muted">Players Managed</span><span>{form.playersManaged}</span></div>}
                {form.role === "introducer" && form.networkSize && <div className="flex justify-between py-2 border-b border-border"><span className="text-foreground-muted">Network Size</span><span className="capitalize">{form.networkSize}</span></div>}
                {form.regions.length > 0 && (
                  <div className="py-2"><span className="text-foreground-muted block mb-1">Regions</span><div className="flex flex-wrap gap-1">{form.regions.map(r => (<span key={r} className="px-2 py-0.5 bg-accent/10 text-accent rounded text-xs">{r}</span>))}</div></div>
                )}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            {step > 0 ? (
              <button onClick={() => setStep(step - 1)} className="flex items-center gap-2 px-5 py-2.5 card rounded-xl hover:bg-background-elevated transition-colors text-sm">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            ) : <div />}
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-dark disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl transition-all text-sm font-medium"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent to-accent-light text-white rounded-xl transition-all text-sm font-bold"
              >
                Submit Application <CheckCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function JoinPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <JoinPageInner />
    </Suspense>
  );
}
