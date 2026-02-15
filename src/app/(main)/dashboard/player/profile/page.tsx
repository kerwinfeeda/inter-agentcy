"use client";

import { User, Edit3, Camera, Play, Eye } from "lucide-react";

const stats = [
  { label: "Appearances", value: "28" },
  { label: "Goals", value: "6" },
  { label: "Assists", value: "9" },
  { label: "Pass Accuracy", value: "84%" },
  { label: "Tackles/Game", value: "2.1" },
  { label: "Rating Avg", value: "7.2" },
];

const achievements = [
  "Liga Portugal 2 Team of the Month — October 2025",
  "U21 Portugal — 8 caps, 2 goals",
  "Gil Vicente Player of the Year 2024/25",
  "Youth Champions League semi-finalist 2023",
];

const highlights = [
  { title: "Season Highlights 2025/26", duration: "4:32", views: "2.1K" },
  { title: "Best Goals Compilation", duration: "3:15", views: "1.8K" },
  { title: "Defensive Skills & Assists", duration: "5:01", views: "940" },
];

export default function PlayerProfilePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Profile</h1>
          <p className="text-sm text-foreground-muted mt-1">Manage how clubs and agents see you</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg gradient-steel-btn text-sm font-medium text-white transition-all">
          <Edit3 className="w-4 h-4" />
          Edit Profile
        </button>
      </div>

      {/* Profile Header */}
      <div className="card rounded-xl p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative w-28 h-28 rounded-xl bg-background-elevated flex items-center justify-center flex-shrink-0">
            <User className="w-12 h-12 text-foreground-dim" />
            <button className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center">
              <Camera className="w-3.5 h-3.5 text-accent-light" />
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">Rafael Domingues</h2>
            <p className="text-sm text-foreground-muted mt-1">Central Midfielder · Gil Vicente FC · Age 22</p>
            <p className="text-sm text-foreground-dim mt-3 leading-relaxed">
              Creative midfielder with strong passing range and vision. Comfortable in possession under pressure,
              developing as a box-to-box option. Portuguese U21 international looking to step up to a top-flight club.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Portuguese", "Right-footed", "178cm", "73kg"].map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-background-elevated rounded text-xs text-foreground-muted">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="card rounded-xl p-6">
        <h2 className="font-semibold text-sm mb-4">Season Stats 2025/26</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-3 bg-background-elevated rounded-lg">
              <p className="text-xl font-bold">{s.value}</p>
              <p className="text-[10px] text-foreground-dim mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Achievements */}
        <div className="card rounded-xl p-6">
          <h2 className="font-semibold text-sm mb-4">Achievements</h2>
          <div className="space-y-2">
            {achievements.map((a, i) => (
              <div key={i} className="flex items-start gap-2 p-3 bg-background-elevated rounded-lg">
                <span className="text-accent text-xs mt-0.5">★</span>
                <p className="text-sm text-foreground-muted">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Video Highlights */}
        <div className="card rounded-xl p-6">
          <h2 className="font-semibold text-sm mb-4">Video Highlights</h2>
          <div className="space-y-2">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-background-elevated rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Play className="w-4 h-4 text-accent-light" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{h.title}</p>
                    <p className="text-xs text-foreground-dim">{h.duration} · {h.views} views</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Clubs See Preview */}
      <div className="card rounded-xl p-6 border border-accent/20">
        <div className="flex items-center gap-2 mb-4">
          <Eye className="w-4 h-4 text-accent" />
          <h2 className="font-semibold text-sm">What Clubs See</h2>
        </div>
        <div className="p-4 bg-background-elevated rounded-lg">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center">
              <User className="w-7 h-7 text-foreground-dim" />
            </div>
            <div>
              <p className="font-bold">Rafael Domingues</p>
              <p className="text-xs text-foreground-muted">CM · 22 · Gil Vicente FC · €800K</p>
            </div>
          </div>
          <p className="text-xs text-foreground-dim leading-relaxed">
            Creative midfielder with strong passing range and vision. 28 appearances, 6 goals, 9 assists this season.
            Portuguese U21 international. Contract expires June 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
