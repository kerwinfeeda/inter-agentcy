"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  Shield,
  ArrowRight,
  Check,
  Upload,
  Globe,
  Users,
  FileText,
} from "lucide-react";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/Context/authContext";
import Image from "next/image";
import authService from "@/services/authService";
import Toast from "@/components/Toast";
import { convertToFormData } from "@/helpers/common";

const steps = [
  { label: "Profile", icon: Users },
  { label: "Expertise", icon: Globe },
  { label: "Documents", icon: FileText },
  { label: "Ready", icon: Check },
];

const normalSteps = [
  { label: "Profile", icon: Users },
  { label: "Expertise", icon: Globe },
  { label: "Ready", icon: Check },
];

const regions = [
  "WESTERN_EUROPE",
  "EASTERN_EUROPE",
  "WEST_AFRICA",
  "EAST_AFRICA",
  "SOUTHERN_AFRICA",
  "NORTH_AFRICA",
  "SOUTH_AMERICA",
  "CENTRAL_AMERICA",
  "ASIA",
  "MIDDLE_EAST",
  "OCEANIA",
];

const specializations = [
  "YOUTH_DEVELOPMENT",
  "FIRST_TEAM",
  "TRANSFERS",
  "LOAN_DEALS",
  "FREE_AGENTS",
  "CONTRACT_RENEWALS",
  "BRAND_&_SPONSORSHIP",
  "LEGAL_&_COMPLIANCE",
];

const leagues = [
  "PREMIER_LEAGUE",
  "CHAMPIONSHIP",
  "LEAGUE_ONE",
  "LEAGUE_TWO",
  "LA_LIGA",
  "SERIE_A",
  "BUNDESLIGA",
  "LIGUE_1",
  "EREDIVISIE",
  "LIGA_PORTUGAL",
  "MLS",
  "OTHER",
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState({
    professionalBio: "",
    phoneNumber: "",
    linkedIn: "",
    regionCover: [],
    specializations: [],
    leaguesOfInterest: [],
    experience: "",
    profilePhoto: null,
    governmentID: null,
    agentLicense: null,
    proofOfAddress: null,
  });

  const { user } = useContextHook(AuthContext, ["user"]);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile((prev) => ({
        ...prev,
        profilePhoto: file,
      }));
    }
  };

  const docTypeToStateKey = {
    "FIFA Agent License": "agentLicense",
    "Government ID": "governmentID",
    "Proof of Address": "proofOfAddress",
  };

  const handleDocFileChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      setProfile((prev) => ({
        ...prev,
        [key]: file,
      }));
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const toggle = (field, value) => {
    setProfile((p) => ({
      ...p,
      [field]: p[field].includes(value)
        ? p[field].filter((v) => v !== value)
        : [...p[field], value],
    }));
  };

  const handleSubmit = async () => {
    const formData = convertToFormData(profile);

    try {
      await authService?.updateUser(user?._id, formData);

      window?.location?.replace("/dashboard");
    } catch (error) {
      Toast({
        type: "error",
        message: error?.message || "Something Went wrong!!",
      });
      console.log(error?.message || "Something Went wrong!!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Shield className="w-8 h-8 text-accent mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-1">Set up your profile</h1>
          <p className="text-foreground-muted text-sm">
            This helps us match you with the right opportunities
          </p>
        </div>

        {/* Steps */}
        <div className="flex items-center justify-center gap-1 mb-10">
          {(user?.userType === "LICENSED_AGENT" ||
          user?.userType === "REPRESENTATIVE"
            ? steps
            : normalSteps
          ).map((s, i) => (
            <div key={i} className="flex items-center gap-1">
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${i <= step ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-dim"}`}
              >
                <s.icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{s.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`w-6 h-0.5 ${i < step ? "gradient-steel" : "bg-border"}`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="card p-8">
          {/* Step 1: Profile */}
          {step === 0 && (
            <div className="space-y-5">
              <h2 className="text-lg font-semibold mb-1">Basic information</h2>
              <p className="text-foreground-muted text-sm mb-4">
                Tell us about yourself
              </p>

              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">
                  Professional bio
                </label>
                <textarea
                  value={profile.professionalBio}
                  onChange={(e) =>
                    setProfile((p) => ({
                      ...p,
                      professionalBio: e.target.value,
                    }))
                  }
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors resize-none"
                  placeholder="Brief description of your experience in football..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={profile.phoneNumber}
                    onChange={(e) =>
                      setProfile((p) => ({ ...p, phoneNumber: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors"
                    placeholder="+44 7700 900000"
                  />
                </div>
                <div>
                  <label className="block text-xs text-foreground-muted mb-1.5">
                    Years of experience
                  </label>
                  <input
                    type="text"
                    value={profile.experience}
                    onChange={(e) =>
                      setProfile((p) => ({ ...p, experience: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors"
                    placeholder="e.g. 5"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">
                  LinkedIn profile
                </label>
                <input
                  type="url"
                  value={profile.linkedIn}
                  onChange={(e) =>
                    setProfile((p) => ({ ...p, linkedIn: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl bg-background-elevated border border-border text-white text-sm focus:outline-none focus:border-accent/40 transition-colors"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>
              {/* Profile photo */}
              <div>
                <label className="block text-xs text-foreground-muted mb-1.5">
                  Profile photo
                </label>
                <div className="flex items-center gap-4">
                  {/* Hidden Input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />

                  {/* Avatar Preview */}
                  <div className="w-16 h-16 rounded-full bg-background-elevated border border-border flex items-center justify-center overflow-hidden">
                    {profile.profilePhoto ? (
                      <Image
                        src={URL.createObjectURL(profile.profilePhoto)}
                        alt="Preview"
                        width={64} // 16 * 4 = 64px
                        height={64} // 16 * 4 = 64px
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Users className="w-6 h-6 text-foreground-dim" />
                    )}
                  </div>

                  {/* Custom Upload Button */}
                  <button
                    type="button"
                    onClick={triggerFileInput}
                    className="px-4 py-2 rounded-lg bg-background-elevated border border-border text-sm text-foreground-muted hover:text-white hover:border-accent/40 transition-all flex items-center gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    {profile.profilePhoto ? "Change Photo" : "Upload"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Expertise */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold mb-1">Your expertise</h2>
              <p className="text-foreground-muted text-sm mb-4">
                Help us understand your focus areas
              </p>

              <div>
                <label className="block text-xs text-foreground-muted mb-3">
                  Regions you cover
                </label>
                <div className="flex flex-wrap gap-2">
                  {regions.map((r) => (
                    <button
                      key={r}
                      onClick={() => toggle("regionCover", r)}
                      className={`px-3 py-1.5 rounded-lg text-xs transition-all ${profile.regionCover.includes(r) ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-muted hover:text-white border border-border"}`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-3">
                  Specializations
                </label>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((s) => (
                    <button
                      key={s}
                      onClick={() => toggle("specializations", s)}
                      className={`px-3 py-1.5 rounded-lg text-xs transition-all ${profile.specializations.includes(s) ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-muted hover:text-white border border-border"}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-3">
                  Leagues of interest
                </label>
                <div className="flex flex-wrap gap-2">
                  {leagues.map((l) => (
                    <button
                      key={l}
                      onClick={() => toggle("leaguesOfInterest", l)}
                      className={`px-3 py-1.5 rounded-lg text-xs transition-all ${profile.leaguesOfInterest.includes(l) ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-muted hover:text-white border border-border"}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Documents */}
          {(user?.userType === "LICENSED_AGENT" ||
            user?.userType === "REPRESENTATIVE") &&
            step === 2 && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold mb-1">
                  Documents & verification
                </h2>
                <p className="text-foreground-muted text-sm mb-4">
                  Upload relevant documents to verify your profile
                </p>

                {[
                  {
                    label: "FIFA Agent License",
                    desc: "Required for licensed agents. Optional for other roles.",
                    required: false,
                  },
                  {
                    label: "Government ID",
                    desc: "Passport or national ID for identity verification.",
                    required: true,
                  },
                  {
                    label: "Proof of Address",
                    desc: "Utility bill or bank statement from the last 3 months.",
                    required: false,
                  },
                ].map((doc) => {
                  const stateKey = docTypeToStateKey[doc.label];
                  const fileName = profile[stateKey]?.name;

                  return (
                    <div
                      key={doc.label}
                      className="flex items-center gap-4 p-4 rounded-xl bg-background-elevated border border-border"
                    >
                      <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                        <FileText className="w-5 h-5 text-foreground-dim" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-white">
                            {doc.label}
                          </p>
                          {doc.required && (
                            <span className="text-xs text-accent">
                              Required
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-foreground-dim mt-0.5">
                          {fileName ? `Selected: ${fileName}` : doc.desc}
                        </p>
                      </div>

                      <label className="cursor-pointer px-4 py-2 rounded-lg bg-background border border-border text-xs text-foreground-muted hover:text-white hover:border-accent/40 transition-all flex items-center gap-1.5">
                        <Upload className="w-3.5 h-3.5" />
                        {fileName ? "Change" : "Upload"}
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => handleDocFileChange(e, stateKey)}
                          accept=".jpg,.jpeg,.png,.pdf"
                        />
                      </label>
                    </div>
                  );
                })}

                <p className="text-xs text-foreground-dim">
                  You can skip this step and upload documents later from your
                  dashboard.
                </p>
              </div>
            )}

          {/* Step 4: Ready */}

          {!(user?.userType === "LICENSED_AGENT") &&
            !(user?.userType === "REPRESENTATIVE") &&
            step === 2 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full gradient-steel-btn flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-3">You&apos;re all set</h2>
                <p className="text-foreground-muted text-sm mb-8 max-w-sm mx-auto">
                  Your profile is ready. Head to your dashboard to start
                  managing your football career.
                </p>
                <button
                  onClick={() => handleSubmit()}
                  className="inline-flex items-center gap-2 px-8 py-3 gradient-steel-btn text-white font-semibold rounded-xl transition-all"
                >
                  Go to Dashboard <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full gradient-steel-btn flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-3">You&apos;re all set</h2>
              <p className="text-foreground-muted text-sm mb-8 max-w-sm mx-auto">
                Your profile is ready. Head to your dashboard to start managing
                your football career.
              </p>
              <button
                onClick={() => handleSubmit()}
                className="inline-flex items-center gap-2 px-8 py-3 gradient-steel-btn text-white font-semibold rounded-xl transition-all"
              >
                Save and Go to Dashboard <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Navigation */}
          {(user?.userType === "LICENSED_AGENT" ||
            user?.userType === "REPRESENTATIVE") && (
            <>
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
                      <button
                        onClick={() => setStep(3)}
                        className="text-sm text-foreground-dim hover:text-foreground-muted transition-colors"
                      >
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
            </>
          )}
          {!(user?.userType === "LICENSED_AGENT") &&
            !(user?.userType === "REPRESENTATIVE") && (
              <>
                {step < 2 && (
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                    <button
                      onClick={() => setStep(Math.max(0, step - 1))}
                      className={`text-sm text-foreground-muted hover:text-white transition-colors ${step === 0 ? "invisible" : ""}`}
                    >
                      Back
                    </button>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setStep(step + 1)}
                        className="flex items-center gap-2 px-5 py-2.5 gradient-steel-btn text-white rounded-xl transition-all text-sm font-medium"
                      >
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
        </div>
      </div>
    </div>
  );
}
