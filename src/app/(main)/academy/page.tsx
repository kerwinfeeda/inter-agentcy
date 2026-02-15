"use client";

import { GraduationCap, BookOpen, Users, Target, Award, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const tracks = [
  { icon: GraduationCap, title: "Agent Track", desc: "FIFA Agent Exam prep, contract negotiation, transfer mechanics, FIFA regulations", courses: 4, hours: 105 },
  { icon: Target, title: "Scout Track", desc: "Scouting methodology, video analysis, report writing, talent identification", courses: 3, hours: 55 },
  { icon: Users, title: "Representative Track", desc: "Player management, career planning, brand building, media training", courses: 3, hours: 45 },
  { icon: BookOpen, title: "Introducer Track", desc: "Network building, relationship management, deal facilitation", courses: 2, hours: 25 },
];

const courses = [
  { title: "FIFA Agent Exam Preparation", hours: 40, level: "Advanced", track: "Agent" },
  { title: "Football Contract Law Fundamentals", hours: 20, level: "Beginner", track: "Agent" },
  { title: "Scouting Methodology & Report Writing", hours: 25, level: "Beginner", track: "Scout" },
  { title: "Transfer Negotiation Masterclass", hours: 15, level: "Intermediate", track: "Agent" },
  { title: "Player Valuation & Market Analysis", hours: 20, level: "Intermediate", track: "Scout" },
  { title: "Brand Building for Football Professionals", hours: 10, level: "Beginner", track: "Representative" },
  { title: "FIFA Regulations & Compliance", hours: 30, level: "Intermediate", track: "Agent" },
  { title: "Youth Development & Pathway Planning", hours: 15, level: "Beginner", track: "Representative" },
  { title: "Advanced Deal Structuring", hours: 20, level: "Advanced", track: "Agent" },
  { title: "Data-Driven Scouting", hours: 15, level: "Intermediate", track: "Scout" },
];

const badges = [
  { name: "FIFA Exam Ready", color: "text-accent" },
  { name: "Certified Scout", color: "text-success" },
  { name: "Deal Maker", color: "text-accent-light" },
  { name: "Compliance Expert", color: "text-accent-steel" },
];

const levelColor = (l: string) => l === "Beginner" ? "text-success" : l === "Intermediate" ? "text-accent" : "text-accent-light";

export default function AcademyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background-elevated text-accent text-sm mb-6">
            <GraduationCap className="w-4 h-4" /> Inter Academy
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Turn Your Football Passion <br /><span className="gradient-text">Into a Career</span>
          </h1>
          <p className="text-foreground-muted text-lg mb-8 max-w-2xl mx-auto">
            No experience required. Our structured learning paths give you the knowledge, tools, and certification to build a career in football representation.
          </p>
          <Link href="/register" className="inline-flex items-center gap-2 px-8 py-4 gradient-steel-btn text-white font-semibold rounded-xl transition-all">
            Start Learning — Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Choose Your Track</h2>
          <p className="text-foreground-muted text-center mb-12 max-w-xl mx-auto">Four specialized learning paths designed for every role in football representation</p>
          <div className="grid md:grid-cols-2 gap-6">
            {tracks.map((t) => (
              <div key={t.title} className="card p-8 card-hover">
                <div className="w-12 h-12 rounded-xl bg-background-elevated flex items-center justify-center mb-4">
                  <t.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.title}</h3>
                <p className="text-foreground-muted text-sm mb-4">{t.desc}</p>
                <div className="flex gap-4 text-xs text-foreground-dim">
                  <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {t.courses} courses</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {t.hours} hours</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-background-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Enroll", desc: "Choose your track and create your free account" },
              { step: "02", title: "Learn", desc: "Complete courses at your own pace with expert-led content" },
              { step: "03", title: "Get Certified", desc: "Earn certification badges that verify your expertise" },
              { step: "04", title: "Start Earning", desc: "Access the network, tools, and deals to build your career" },
            ].map((s) => (
              <div key={s.step}>
                <div className="text-3xl font-bold gradient-text mb-3">{s.step}</div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-foreground-muted text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Course Catalog</h2>
          <p className="text-foreground-muted text-center mb-12">Expert-designed courses covering every aspect of football representation</p>
          <div className="grid md:grid-cols-2 gap-4">
            {courses.map((c) => (
              <div key={c.title} className="card p-5 card-hover flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-1">{c.title}</h3>
                  <div className="flex gap-3 text-xs">
                    <span className="text-foreground-dim flex items-center gap-1"><Clock className="w-3 h-3" /> {c.hours}hrs</span>
                    <span className={levelColor(c.level)}>{c.level}</span>
                    <span className="text-foreground-dim">{c.track}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-foreground-dim" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section className="py-20 px-4 bg-background-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Mentorship Program</h2>
          <p className="text-foreground-muted mb-12 max-w-xl mx-auto">Get paired with experienced professionals who&apos;ve been where you want to go</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Carlos Mendes", role: "Licensed Agent · 12 years", specialty: "South American transfers" },
              { name: "Sarah Williams", role: "Chief Scout · 8 years", specialty: "Youth talent identification" },
              { name: "Ibrahim Diallo", role: "Licensed Agent · 15 years", specialty: "West African market" },
            ].map((m) => (
              <div key={m.name} className="card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-background-elevated mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-6 h-6 text-foreground-dim" />
                </div>
                <h3 className="font-semibold mb-1">{m.name}</h3>
                <p className="text-foreground-muted text-xs mb-2">{m.role}</p>
                <p className="text-foreground-dim text-xs">{m.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Earn Certification Badges</h2>
          <p className="text-foreground-muted mb-12">Verified credentials that showcase your expertise to players and clubs</p>
          <div className="flex flex-wrap justify-center gap-6">
            {badges.map((b) => (
              <div key={b.name} className="card p-6 text-center min-w-[160px]">
                <Award className={`w-10 h-10 ${b.color} mx-auto mb-3`} />
                <p className="font-semibold text-sm">{b.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
          <p className="text-foreground-muted mb-8">Join hundreds of football professionals building their careers through Inter Academy</p>
          <Link href="/register" className="inline-flex items-center gap-2 px-8 py-4 gradient-steel-btn text-white font-semibold rounded-xl transition-all">
            Get Started — Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
