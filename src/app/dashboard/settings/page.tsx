"use client";

import { useState } from "react";
import { User, CreditCard, Bell, Shield, Key } from "lucide-react";

function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`w-10 h-6 rounded-full transition-colors flex items-center px-0.5 ${
        enabled ? "bg-success" : "bg-foreground-dim/30"
      }`}
    >
      <div className={`w-5 h-5 rounded-full bg-white transition-transform ${enabled ? "translate-x-4" : ""}`} />
    </button>
  );
}

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    emailDeals: true, emailContracts: true, emailMessages: false,
    pushDeals: true, pushContracts: false, pushMessages: true,
    smsDeals: false, smsContracts: true, smsMessages: false,
  });
  const [twoFa, setTwoFa] = useState(false);

  const toggleNotif = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm text-foreground-muted mt-1">Manage your account and preferences</p>
      </div>

      {/* Profile */}
      <div className="card rounded-xl p-6">
        <h2 className="font-semibold flex items-center gap-2 mb-5">
          <User className="w-4 h-4 text-accent" /> Profile
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-foreground-dim block mb-1.5">Full Name</label>
            <input type="text" defaultValue="Kerwin Alabi" className="w-full bg-background-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-border-light" />
          </div>
          <div>
            <label className="text-xs text-foreground-dim block mb-1.5">Email</label>
            <input type="email" defaultValue="kerwin@interagentcy.com" className="w-full bg-background-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-border-light" />
          </div>
          <div>
            <label className="text-xs text-foreground-dim block mb-1.5">Phone</label>
            <input type="tel" defaultValue="+351 912 345 678" className="w-full bg-background-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-border-light" />
          </div>
          <div>
            <label className="text-xs text-foreground-dim block mb-1.5">Regions</label>
            <input type="text" defaultValue="West Africa, Portugal, Belgium" className="w-full bg-background-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-border-light" />
          </div>
          <div className="md:col-span-2">
            <label className="text-xs text-foreground-dim block mb-1.5">Bio</label>
            <textarea defaultValue="FIFA Licensed Football Agent specializing in West African and Portuguese market talent. 8+ years experience in international transfers." rows={3} className="w-full bg-background-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-border-light resize-none" />
          </div>
          <div>
            <label className="text-xs text-foreground-dim block mb-1.5">Specializations</label>
            <input type="text" defaultValue="Transfers, Contract Negotiation, Youth Development" className="w-full bg-background-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-border-light" />
          </div>
        </div>
        <button className="mt-4 px-5 py-2.5 rounded-lg gradient-steel-btn text-sm font-medium text-white">Save Changes</button>
      </div>

      {/* Billing */}
      <div className="card rounded-xl p-6">
        <h2 className="font-semibold flex items-center gap-2 mb-5">
          <CreditCard className="w-4 h-4 text-accent" /> Billing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-background-elevated rounded-lg p-4">
            <p className="text-xs text-foreground-dim">Current Plan</p>
            <p className="text-lg font-bold mt-1">Professional</p>
            <p className="text-xs text-foreground-muted">€49/month</p>
          </div>
          <div className="bg-background-elevated rounded-lg p-4">
            <p className="text-xs text-foreground-dim">Players Managed</p>
            <p className="text-lg font-bold mt-1">8 / 15</p>
            <p className="text-xs text-foreground-muted">53% usage</p>
          </div>
          <div className="bg-background-elevated rounded-lg p-4">
            <p className="text-xs text-foreground-dim">Next Billing</p>
            <p className="text-lg font-bold mt-1">Mar 1, 2026</p>
            <p className="text-xs text-foreground-muted">Auto-renewal</p>
          </div>
        </div>
        <button className="px-5 py-2.5 rounded-lg gradient-steel-btn text-sm font-medium text-white">Upgrade Plan</button>
      </div>

      {/* Notifications */}
      <div className="card rounded-xl p-6">
        <h2 className="font-semibold flex items-center gap-2 mb-5">
          <Bell className="w-4 h-4 text-accent" /> Notifications
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-foreground-dim text-xs border-b border-border">
                <th className="text-left py-2 font-medium">Event</th>
                <th className="text-center py-2 font-medium">Email</th>
                <th className="text-center py-2 font-medium">Push</th>
                <th className="text-center py-2 font-medium">SMS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Deal Updates", keys: ["emailDeals", "pushDeals", "smsDeals"] as const },
                { label: "Contract Expiries", keys: ["emailContracts", "pushContracts", "smsContracts"] as const },
                { label: "New Messages", keys: ["emailMessages", "pushMessages", "smsMessages"] as const },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <td className="py-3 text-foreground-muted">{row.label}</td>
                  {row.keys.map((k) => (
                    <td key={k} className="py-3 text-center">
                      <div className="flex justify-center">
                        <Toggle enabled={notifications[k]} onToggle={() => toggleNotif(k)} />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Security */}
      <div className="card rounded-xl p-6">
        <h2 className="font-semibold flex items-center gap-2 mb-5">
          <Shield className="w-4 h-4 text-accent" /> Security
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-background-elevated rounded-lg">
            <div>
              <p className="text-sm font-medium">Change Password</p>
              <p className="text-xs text-foreground-dim">Last changed 45 days ago</p>
            </div>
            <button className="px-4 py-2 rounded-lg border border-border text-sm text-foreground-muted hover:text-foreground hover:border-border-light transition-colors">
              Update
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-background-elevated rounded-lg">
            <div>
              <p className="text-sm font-medium">Two-Factor Authentication</p>
              <p className="text-xs text-foreground-dim">{twoFa ? "Enabled" : "Not enabled"}</p>
            </div>
            <Toggle enabled={twoFa} onToggle={() => setTwoFa(!twoFa)} />
          </div>
        </div>
      </div>

      {/* API */}
      <div className="card rounded-xl p-6">
        <h2 className="font-semibold flex items-center gap-2 mb-5">
          <Key className="w-4 h-4 text-accent" /> API Access
        </h2>
        <div className="flex items-center gap-3 p-4 bg-background-elevated rounded-lg">
          <div className="flex-1">
            <p className="text-xs text-foreground-dim mb-1">API Key</p>
            <p className="text-sm font-mono text-foreground-muted">ia_live_••••••••••••••••••••••••</p>
          </div>
          <button className="px-4 py-2 rounded-lg border border-border text-sm text-foreground-muted hover:text-foreground hover:border-border-light transition-colors">
            Regenerate
          </button>
        </div>
      </div>
    </div>
  );
}
