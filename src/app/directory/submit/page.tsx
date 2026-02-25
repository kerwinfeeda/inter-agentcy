"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Shield, Users, Building2, ArrowRight, CheckCircle, User } from "lucide-react";

type ProfileType = "player" | "agent" | "agency" | null;

const VALID_TYPES: ProfileType[] = ["player", "agent", "agency"];

export default function SubmitProfilePage() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") as ProfileType;
  const [profileType, setProfileType] = useState<ProfileType>(
    VALID_TYPES.includes(initialType) ? initialType : null
  );
  const [submitted, setSubmitted] = useState(false);

  const types = [
    {
      id: "player" as const,
      label: "Player",
      icon: User,
      desc: "Professional or semi-professional footballer looking for representation or visibility.",
    },
    {
      id: "agent" as const,
      label: "Agent",
      icon: Users,
      desc: "FIFA-licensed football intermediary or agent representing players.",
    },
    {
      id: "agency" as const,
      label: "Agency",
      icon: Building2,
      desc: "Football agency managing multiple agents and player portfolios.",
    },
  ];

  if (submitted) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Profile Submitted
          </h1>
          <p className="text-foreground-muted text-lg mb-8">
            Thank you for your submission. Our team will review your profile and get back to you
            within 48 hours. Verified profiles will receive a badge in the directory.
          </p>
          <a
            href="/directory"
            className="gradient-steel-btn px-6 py-3 rounded-xl text-white font-medium inline-flex items-center gap-2 transition-all"
          >
            Back to Directory <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-card border border-border text-sm text-foreground-muted mb-6">
            <Shield className="w-4 h-4 text-accent-steel" />
            Directory Submission
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Submit Your <span className="gradient-text">Profile</span>
          </h1>
          <p className="text-lg text-foreground-muted max-w-xl mx-auto">
            Join the most comprehensive football directory in the industry.
            All submissions are reviewed and verified by our team.
          </p>
        </div>

        {/* Profile Type Selection */}
        {!profileType && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-white text-center">I am a...</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {types.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setProfileType(t.id)}
                  className="card p-6 text-left hover:border-accent-steel/50 transition-all group cursor-pointer"
                >
                  <t.icon className="w-8 h-8 text-accent-steel mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold mb-2">{t.label}</h3>
                  <p className="text-sm text-foreground-dim leading-relaxed">{t.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Form */}
        {profileType && (
          <div className="card p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white capitalize">
                {profileType} Submission
              </h2>
              <button
                onClick={() => setProfileType(null)}
                className="text-sm text-accent-steel hover:text-accent-light transition-colors"
              >
                Change type
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >
              {/* Common Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground-muted mb-1.5">
                    {profileType === "agency" ? "Agency Name" : "Full Name"} *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-white placeholder:text-foreground-dim focus:outline-none focus:border-accent-steel transition-colors"
                    placeholder={profileType === "agency" ? "e.g. Stellar Group" : "e.g. John Smith"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground-muted mb-1.5">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-white placeholder:text-foreground-dim focus:outline-none focus:border-accent-steel transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground-muted mb-1.5">
                    Country *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-white placeholder:text-foreground-dim focus:outline-none focus:border-accent-steel transition-colors"
                    placeholder="e.g. England"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground-muted mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-white placeholder:text-foreground-dim focus:outline-none focus:border-accent-steel transition-colors"
                    placeholder="+44 7XXX XXXXXX"
                  />
                </div>
              </div>

              {/* Player-specific fields */}
              {profileType === "player" && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground-muted mb-1.5">
                        Position *
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-white placeholder:text-foreground-dim focus:outline-none focus:border-accent-steel transition-colors"
                        placeholder="e.g. Centre Forward"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground-muted mb-1.5">
                        Current Club
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-white placeholder:text-foreground-dim focus:outline-none focus:border-accent-steel transition-colors"
                        placeholder="e.g. FC Porto"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground-muted mb-1.5">
                        Date of Birth *
                      </label>
                      <input
                        required
                        type="date"
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-white placeholder:text-foreground-dim focus:outline-none focus:border-accent-steel transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground-muted mb-1.5">
                      Highlight Reel / Portfolio Link
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-white placeholder:text-foreground-dim focus:outline-none focus:border-accent-steel transition-colors"
                      placeholder="https://..."
                    />
                  </div>
                </>
              )}

              {/* Agent-specific fields */}
              {profileType === "agent" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground-muted mb-1.5">
                      FIFA Licence Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-white placeholder:text-foreground-dim focus:outline-none focus:border-accent-steel transition-colors"
                      placeholder="Licence number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground-muted mb-1.5">
                      Agency (if applicable)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-white placeholder:text-foreground-dim focus:outline-none focus:border-accent-steel transition-colors"
                      placeholder="Agency name"
                    />
                  </div>
                </div>
              )}

              {/* Agency-specific fields */}
              {profileType === "agency" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground-muted mb-1.5">
                      Website
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-white placeholder:text-foreground-dim focus:outline-none focus:border-accent-steel transition-colors"
                      placeholder="https://..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground-muted mb-1.5">
                      Number of Agents
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-white placeholder:text-foreground-dim focus:outline-none focus:border-accent-steel transition-colors"
                      placeholder="e.g. 12"
                    />
                  </div>
                </div>
              )}

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-foreground-muted mb-1.5">
                  Bio / Additional Information
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-white placeholder:text-foreground-dim focus:outline-none focus:border-accent-steel transition-colors resize-none"
                  placeholder="Tell us about yourself, your experience, notable achievements..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="gradient-steel-btn w-full px-6 py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all text-lg"
              >
                Submit Profile <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-xs text-foreground-dim text-center">
                All submissions are reviewed within 48 hours. Verified profiles receive a badge.
              </p>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
