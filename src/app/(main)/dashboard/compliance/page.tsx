"use client";

import { useState } from "react";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const complianceScore = 96.5;

const checks = [
  { label: "FIFA Agent License", status: "valid", expiry: "2027-09-15", detail: "License #FA-2024-00847" },
  { label: "Professional Indemnity Insurance", status: "valid", expiry: "2026-12-31", detail: "Coverage: €2M" },
  { label: "Anti-Money Laundering Training", status: "valid", expiry: "2026-06-30", detail: "Completed Jan 2026" },
  { label: "Conflict of Interest Declarations", status: "warning", expiry: "2026-02-28", detail: "1 pending declaration" },
  { label: "Client Money Account Audit", status: "valid", expiry: "2026-08-15", detail: "Last audit: Oct 2025" },
  { label: "Data Protection Compliance", status: "valid", expiry: "2026-11-30", detail: "GDPR compliant" },
];

const deals = [
  { id: "DL-001", player: "Emmanuel Osei", club: "Club Brugge", status: "compliant", commission: "2.8%", cap: "3%", issues: [] },
  { id: "DL-002", player: "Ahmed Hassan", club: "Galatasaray", status: "compliant", commission: "2.5%", cap: "3%", issues: [] },
  { id: "DL-003", player: "Lucas Ferreira", club: "Vitória SC", status: "warning", commission: "—", cap: "3%", issues: ["Missing dual representation disclosure"] },
  { id: "DL-004", player: "Yusuf Kamara", club: "FC Nordsjaelland", status: "compliant", commission: "9.2%", cap: "10%", issues: [] },
  { id: "DL-005", player: "James Mensah", club: "Hatayspor", status: "compliant", commission: "2.1%", cap: "3%", issues: [] },
  { id: "DL-006", player: "João Silva", club: "Brighton", status: "flagged", commission: "3.5%", cap: "3%", issues: ["Commission exceeds FIFA cap by 0.5%"] },
];

const auditLog = [
  { date: "2026-02-14 09:30", action: "Commission check passed", deal: "DL-001", result: "Pass" },
  { date: "2026-02-13 16:45", action: "Dual representation check", deal: "DL-003", result: "Pending" },
  { date: "2026-02-13 14:20", action: "License verification renewed", deal: "—", result: "Pass" },
  { date: "2026-02-12 11:00", action: "Commission cap exceeded", deal: "DL-006", result: "Flag" },
  { date: "2026-02-12 10:15", action: "AML screening completed", deal: "DL-002", result: "Pass" },
  { date: "2026-02-11 09:00", action: "Insurance policy verified", deal: "—", result: "Pass" },
  { date: "2026-02-10 15:30", action: "Contract template compliance check", deal: "DL-005", result: "Pass" },
  { date: "2026-02-09 12:00", action: "Commission check passed", deal: "DL-004", result: "Pass" },
];

const statusIcon = (s: string) => {
  if (s === "valid" || s === "compliant") return <CheckCircle className="w-4 h-4 text-success" />;
  if (s === "warning") return <AlertTriangle className="w-4 h-4 text-amber-400" />;
  return <XCircle className="w-4 h-4 text-danger" />;
};

const statusBadge = (s: string) => {
  if (s === "valid" || s === "compliant") return "bg-success/10 text-success";
  if (s === "warning" || s === "Pending") return "bg-amber-400/10 text-amber-400";
  return "bg-danger/10 text-danger";
};

export default function ComplianceDashboardPage() {
  const [dealFilter, setDealFilter] = useState<string>("all");
  const filteredDeals = dealFilter === "all" ? deals : deals.filter((d) => d.status === dealFilter);

  const compliant = deals.filter((d) => d.status === "compliant").length;
  const warnings = deals.filter((d) => d.status === "warning").length;
  const flagged = deals.filter((d) => d.status === "flagged").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Compliance</h1>
        <p className="text-foreground-muted text-sm">FIFA regulation compliance and audit trail</p>
      </div>

      {/* Score + Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card p-6 text-center">
          <div className="text-4xl font-bold gradient-text mb-1">{complianceScore}%</div>
          <p className="text-foreground-dim text-xs">Compliance Score</p>
        </div>
        <div className="card p-5 flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-success" />
          <div>
            <div className="text-xl font-bold">{compliant}</div>
            <p className="text-foreground-dim text-xs">Compliant Deals</p>
          </div>
        </div>
        <div className="card p-5 flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 text-amber-400" />
          <div>
            <div className="text-xl font-bold">{warnings}</div>
            <p className="text-foreground-dim text-xs">Warnings</p>
          </div>
        </div>
        <div className="card p-5 flex items-center gap-3">
          <XCircle className="w-8 h-8 text-danger" />
          <div>
            <div className="text-xl font-bold">{flagged}</div>
            <p className="text-foreground-dim text-xs">Flagged</p>
          </div>
        </div>
      </div>

      {/* License & Compliance Checks */}
      <div className="card p-6">
        <h2 className="text-sm font-semibold text-foreground-dim mb-4">LICENSE &amp; COMPLIANCE CHECKS</h2>
        <div className="space-y-3">
          {checks.map((c) => (
            <div key={c.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div className="flex items-center gap-3">
                {statusIcon(c.status)}
                <div>
                  <p className="text-sm font-medium">{c.label}</p>
                  <p className="text-xs text-foreground-dim">{c.detail}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${statusBadge(c.status)}`}>
                  {c.status === "valid" ? "Valid" : "Action Needed"}
                </span>
                <p className="text-xs text-foreground-dim mt-1">Expires {c.expiry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deal Compliance */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-foreground-dim">DEAL COMPLIANCE</h2>
          <div className="flex gap-2">
            {["all", "compliant", "warning", "flagged"].map((f) => (
              <button key={f} onClick={() => setDealFilter(f)} className={`px-3 py-1 rounded-lg text-xs transition-all ${dealFilter === f ? "gradient-steel-btn text-white" : "bg-background-elevated text-foreground-muted"}`}>
                {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-foreground-dim text-xs">
                <th className="text-left py-2 font-medium">Deal</th>
                <th className="text-left py-2 font-medium">Player</th>
                <th className="text-left py-2 font-medium">Club</th>
                <th className="text-left py-2 font-medium">Commission</th>
                <th className="text-left py-2 font-medium">Cap</th>
                <th className="text-left py-2 font-medium">Status</th>
                <th className="text-left py-2 font-medium">Issues</th>
              </tr>
            </thead>
            <tbody>
              {filteredDeals.map((d) => (
                <tr key={d.id} className="border-b border-border last:border-0">
                  <td className="py-3 text-foreground-dim font-mono text-xs">{d.id}</td>
                  <td className="py-3">{d.player}</td>
                  <td className="py-3 text-foreground-muted">{d.club}</td>
                  <td className="py-3 font-mono">{d.commission}</td>
                  <td className="py-3 text-foreground-dim font-mono">{d.cap}</td>
                  <td className="py-3">{statusIcon(d.status)}</td>
                  <td className="py-3 text-xs text-foreground-dim">{d.issues.length ? d.issues[0] : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Audit Log */}
      <div className="card p-6">
        <h2 className="text-sm font-semibold text-foreground-dim mb-4">AUDIT LOG</h2>
        <div className="space-y-2">
          {auditLog.map((log, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-xs text-foreground-dim font-mono w-32 flex-shrink-0">{log.date}</span>
                <span>{log.action}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-foreground-dim">{log.deal}</span>
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${statusBadge(log.result)}`}>{log.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
