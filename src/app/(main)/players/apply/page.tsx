"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowLeft, User, Trophy,
  Upload, FileText, CheckCircle, Star, Video
} from "lucide-react";

const positions = ["Goalkeeper", "Centre-Back", "Left-Back", "Right-Back", "Defensive Midfielder", "Central Midfielder", "Attacking Midfielder", "Left Winger", "Right Winger", "Striker", "Second Striker"];
const feet = ["Right", "Left", "Both"];
const regions = ["West Africa", "East Africa", "Southern Africa", "North Africa", "South America", "Central America", "Western Europe", "Eastern Europe", "Scandinavia", "Asia", "Middle East", "Oceania", "North America"];
const ambitions = ["Move to a top 5 European league", "Move to a stronger league than current", "Secure a professional contract", "Get more playing time on loan", "Move closer to home", "Improve financial terms", "Join a club with better development pathway"];

const steps = [
  { num: 1, label: "Personal", icon: User },
  { num: 2, label: "Football", icon: Trophy },
  { num: 3, label: "Media", icon: Video },
  { num: 4, label: "Ambitions", icon: Star },
  { num: 5, label: "Documents", icon: FileText },
  { num: 6, label: "Review", icon: CheckCircle },
];

export default function PlayerApplyPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "", lastName: "", dob: "", nationality: "", secondNationality: "",
    email: "", phone: "", country: "", city: "",
    position: "", secondPosition: "", foot: "", height: "", weight: "",
    currentClub: "", currentLeague: "", contractExpiry: "", yearsPlaying: "",
    videoUrl: "", highlightNotes: "",
    selectedAmbitions: [] as string[], preferredRegions: [] as string[],
    additionalInfo: "",
    hasPassport: false, hasWorkPermit: false,
  });

  const update = (field: string, value: string | boolean) => setForm((f) => ({ ...f, [field]: value }));
  const toggleList = (field: "selectedAmbitions" | "preferredRegions", value: string) => {
    setForm((f) => ({
      ...f,
      [field]: f[field].includes(value) ? f[field].filter((v) => v !== value) : [...f[field], value],
    }));
  };

  const next = () => setStep((s) => Math.min(6, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/players" className="inline-flex items-center gap-2 text-foreground-dim text-sm hover:text-foreground-muted transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to For Players
          </Link>
          <h1 className="text-3xl font-bold mb-2">Player Application</h1>
          <p className="text-foreground-muted text-sm">Complete your profile so we can match you with the right representation. Takes about 10 minutes.</p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between mb-10 px-4">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${s.num <= step ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-dim"}`}>
                  <s.icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-foreground-dim mt-1.5 hidden sm:block">{s.label}</span>
              </div>
              {i < steps.length - 1 && <div className={`w-6 sm:w-10 h-0.5 mx-1 ${s.num < step ? "gradient-steel" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <div className="card p-8">
          {/* Step 1: Personal */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-semibold mb-1">Personal Information</h2>
                <p className="text-foreground-dim text-sm mb-6">Basic details about you</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">First name *</label>
                  <input type="text" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="Emmanuel" />
                </div>
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">Last name *</label>
                  <input type="text" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="Osei" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Date of birth *</label>
                <input type="date" value={form.dob} onChange={(e) => update("dob", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">Nationality *</label>
                  <input type="text" value={form.nationality} onChange={(e) => update("nationality", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="Ghanaian" />
                </div>
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">Second nationality</label>
                  <input type="text" value={form.secondNationality} onChange={(e) => update("secondNationality", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="Optional" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Email *</label>
                <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="you@example.com" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">Phone *</label>
                  <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="+233 20 000 0000" />
                </div>
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">City *</label>
                  <input type="text" value={form.city} onChange={(e) => update("city", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="Accra" />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Football */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-semibold mb-1">Football Profile</h2>
                <p className="text-foreground-dim text-sm mb-6">Tell us about your football career</p>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-2">Primary position *</label>
                <div className="flex flex-wrap gap-2">
                  {positions.map((p) => (
                    <button key={p} onClick={() => update("position", p)} className={`px-3 py-1.5 rounded-lg text-xs transition-all ${form.position === p ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-muted hover:text-white border border-border"}`}>{p}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-2">Secondary position</label>
                <div className="flex flex-wrap gap-2">
                  {positions.filter((p) => p !== form.position).map((p) => (
                    <button key={p} onClick={() => update("secondPosition", p)} className={`px-3 py-1.5 rounded-lg text-xs transition-all ${form.secondPosition === p ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-muted hover:text-white border border-border"}`}>{p}</button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">Preferred foot *</label>
                  <div className="flex gap-2">
                    {feet.map((f) => (
                      <button key={f} onClick={() => update("foot", f)} className={`flex-1 py-2.5 rounded-lg text-xs transition-all ${form.foot === f ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-muted border border-border"}`}>{f}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">Height (cm)</label>
                  <input type="number" value={form.height} onChange={(e) => update("height", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="180" />
                </div>
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">Weight (kg)</label>
                  <input type="number" value={form.weight} onChange={(e) => update("weight", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="75" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">Current club *</label>
                  <input type="text" value={form.currentClub} onChange={(e) => update("currentClub", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="Accra Hearts of Oak" />
                </div>
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">Current league *</label>
                  <input type="text" value={form.currentLeague} onChange={(e) => update("currentLeague", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="Ghana Premier League" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">Contract expiry</label>
                  <input type="date" value={form.contractExpiry} onChange={(e) => update("contractExpiry", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">Years playing competitively</label>
                  <input type="number" value={form.yearsPlaying} onChange={(e) => update("yearsPlaying", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="5" />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Media */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-semibold mb-1">Videos & Media</h2>
                <p className="text-foreground-dim text-sm mb-6">Help agents and clubs see you play</p>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Highlight reel URL *</label>
                <input type="url" value={form.videoUrl} onChange={(e) => update("videoUrl", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors" placeholder="https://youtube.com/watch?v=..." />
                <p className="text-foreground-dim text-xs mt-1.5">YouTube, Vimeo, or Hudl link to your best highlights (2-5 minutes recommended)</p>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Full match footage (optional)</label>
                <div className="card p-6 text-center border-dashed">
                  <Upload className="w-8 h-8 text-foreground-dim mx-auto mb-3" />
                  <p className="text-sm text-foreground-muted mb-1">Upload full match footage</p>
                  <p className="text-xs text-foreground-dim">MP4, MOV up to 500MB</p>
                  <button className="mt-3 px-4 py-2 rounded-lg bg-background-elevated border border-border text-xs text-foreground-muted hover:text-white transition-all">Choose file</button>
                </div>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Profile photo</label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-background-elevated border border-border flex items-center justify-center">
                    <User className="w-8 h-8 text-foreground-dim" />
                  </div>
                  <div>
                    <button className="px-4 py-2 rounded-lg bg-background-elevated border border-border text-xs text-foreground-muted hover:text-white transition-all flex items-center gap-2">
                      <Upload className="w-3.5 h-3.5" /> Upload photo
                    </button>
                    <p className="text-foreground-dim text-xs mt-1.5">Professional headshot preferred. JPG/PNG, max 5MB.</p>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">What should scouts look for in your video?</label>
                <textarea value={form.highlightNotes} onChange={(e) => update("highlightNotes", e.target.value)} rows={3} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors resize-none" placeholder="e.g. Watch my positioning at 1:20, and the through balls at 2:45 and 3:30..." />
              </div>
            </div>
          )}

          {/* Step 4: Ambitions */}
          {step === 4 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-semibold mb-1">Career Ambitions</h2>
                <p className="text-foreground-dim text-sm mb-6">Help us understand what you&apos;re looking for</p>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-3">What are your goals? (select all that apply)</label>
                <div className="space-y-2">
                  {ambitions.map((a) => (
                    <button key={a} onClick={() => toggleList("selectedAmbitions", a)} className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all ${form.selectedAmbitions.includes(a) ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-muted border border-border hover:border-accent/20"}`}>
                      <span className="flex items-center gap-3">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 ${form.selectedAmbitions.includes(a) ? "text-white" : "text-foreground-dim"}`} />
                        {a}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-3">Preferred regions to play in</label>
                <div className="flex flex-wrap gap-2">
                  {regions.map((r) => (
                    <button key={r} onClick={() => toggleList("preferredRegions", r)} className={`px-3 py-1.5 rounded-lg text-xs transition-all ${form.preferredRegions.includes(r) ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-muted border border-border hover:text-white"}`}>{r}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">Anything else we should know?</label>
                <textarea value={form.additionalInfo} onChange={(e) => update("additionalInfo", e.target.value)} rows={3} className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors resize-none" placeholder="Injuries, availability, personal circumstances..." />
              </div>
            </div>
          )}

          {/* Step 5: Documents */}
          {step === 5 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-semibold mb-1">Documents & Eligibility</h2>
                <p className="text-foreground-dim text-sm mb-6">Upload key documents — you can add more later</p>
              </div>
              {[
                { label: "Passport / ID", desc: "Required for identity verification and transfer eligibility", required: true },
                { label: "Current contract", desc: "Helps us understand your contractual situation (confidential)", required: false },
                { label: "Player CV / Resume", desc: "Career history, stats, achievements", required: false },
                { label: "Medical clearance", desc: "Recent medical or fitness certificate", required: false },
              ].map((doc) => (
                <div key={doc.label} className="flex items-center gap-4 p-4 rounded-xl bg-background-elevated border border-border">
                  <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-foreground-dim" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-white">{doc.label}</p>
                      {doc.required && <span className="text-xs text-accent">Required</span>}
                    </div>
                    <p className="text-xs text-foreground-dim mt-0.5">{doc.desc}</p>
                  </div>
                  <button className="px-3 py-2 rounded-lg bg-background border border-border text-xs text-foreground-muted hover:text-white hover:border-accent/40 transition-all flex items-center gap-1.5 flex-shrink-0">
                    <Upload className="w-3.5 h-3.5" /> Upload
                  </button>
                </div>
              ))}
              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.hasPassport} onChange={(e) => update("hasPassport", e.target.checked)} className="mt-1 rounded border-border bg-background-elevated" />
                  <span className="text-sm text-foreground-muted">I have a valid passport</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.hasWorkPermit} onChange={(e) => update("hasWorkPermit", e.target.checked)} className="mt-1 rounded border-border bg-background-elevated" />
                  <span className="text-sm text-foreground-muted">I have / can obtain a work permit for an EU country</span>
                </label>
              </div>
              <p className="text-xs text-foreground-dim">All documents are stored securely and only shared with your assigned agent and representative.</p>
            </div>
          )}

          {/* Step 6: Review */}
          {step === 6 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-1">Review your application</h2>
                <p className="text-foreground-dim text-sm mb-6">Make sure everything looks good before submitting</p>
              </div>
              {[
                { section: "Personal", items: [`${form.firstName} ${form.lastName}`, form.nationality, form.email, form.city].filter(Boolean) },
                { section: "Football", items: [form.position, form.currentClub, form.currentLeague, `${form.foot} footed`].filter(Boolean) },
                { section: "Media", items: [form.videoUrl ? "Highlight reel uploaded" : "No video", form.highlightNotes ? "Scout notes added" : ""].filter(Boolean) },
                { section: "Ambitions", items: form.selectedAmbitions.length ? form.selectedAmbitions.slice(0, 3) : ["None selected"] },
              ].map((s) => (
                <div key={s.section} className="p-4 rounded-xl bg-background-elevated">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-semibold text-foreground-dim">{s.section.toUpperCase()}</h3>
                    <button onClick={() => setStep(s.section === "Personal" ? 1 : s.section === "Football" ? 2 : s.section === "Media" ? 3 : 4)} className="text-xs text-accent hover:text-accent-light">Edit</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span key={item} className="text-xs text-foreground-muted bg-background px-2 py-1 rounded">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="p-4 rounded-xl bg-background-elevated border border-accent/20">
                <p className="text-sm text-foreground-muted">
                  By submitting, you agree to Inter Agentcy&apos;s terms of service and privacy policy. Your information will be reviewed by our team and shared with verified agents and representatives who may be a good match for your profile.
                </p>
              </div>
              <button className="w-full py-4 gradient-steel-btn text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-lg">
                Submit Application <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-foreground-dim text-xs">We typically respond within 48 hours</p>
            </div>
          )}

          {/* Navigation */}
          {step < 6 && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <button onClick={back} className={`flex items-center gap-2 text-sm text-foreground-muted hover:text-white transition-colors ${step === 1 ? "invisible" : ""}`}>
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <div className="flex items-center gap-3">
                <span className="text-xs text-foreground-dim">Step {step} of 6</span>
                <button onClick={next} className="flex items-center gap-2 px-5 py-2.5 gradient-steel-btn text-white rounded-xl transition-all text-sm font-medium">
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
