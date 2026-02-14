"use client";

import { FileText, Calendar, Clock, AlertTriangle } from "lucide-react";

const currentContract = {
  club: "Gil Vicente FC",
  startDate: "Jul 1, 2023",
  endDate: "Jun 30, 2026",
  salary: "€4,200/month",
  bonuses: "€500 per goal, €250 per assist",
  releaseClause: "€1.5M",
  status: "Active",
};

const historicalContracts = [
  { club: "Gil Vicente FC (Youth)", period: "Jul 2020 – Jun 2023", type: "Youth Contract", status: "Completed" },
  { club: "Sporting CP (Academy)", period: "Jul 2017 – Jun 2020", type: "Academy Scholarship", status: "Completed" },
];

const keyDates = [
  { date: "Mar 1, 2026", label: "Renewal negotiation window opens", icon: Calendar, urgent: false },
  { date: "Apr 15, 2026", label: "Club option deadline for extension", icon: Clock, urgent: false },
  { date: "Jun 30, 2026", label: "Contract expiry", icon: AlertTriangle, urgent: true },
  { date: "Jan 1, 2026", label: "Free to negotiate with foreign clubs", icon: FileText, urgent: false },
];

export default function ContractsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">My Contracts</h1>
        <p className="text-sm text-foreground-muted mt-1">Current and historical contract information</p>
      </div>

      {/* Current Contract */}
      <div className="card rounded-xl p-6 border border-accent/20">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-4 h-4 text-accent" />
          <h2 className="font-semibold text-sm">Current Contract</h2>
          <span className="ml-auto px-2.5 py-1 rounded text-xs font-medium text-success bg-success/10">Active</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "Club", value: currentContract.club },
            { label: "Start Date", value: currentContract.startDate },
            { label: "End Date", value: currentContract.endDate },
            { label: "Salary", value: currentContract.salary },
            { label: "Bonuses", value: currentContract.bonuses },
            { label: "Release Clause", value: currentContract.releaseClause },
          ].map((item) => (
            <div key={item.label} className="p-3 bg-background-elevated rounded-lg">
              <p className="text-xs text-foreground-dim">{item.label}</p>
              <p className="text-sm font-medium mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Key Dates Timeline */}
        <div className="card rounded-xl p-6">
          <h2 className="font-semibold text-sm mb-4">Key Dates</h2>
          <div className="space-y-4">
            {keyDates.map((d, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  d.urgent ? "bg-danger/10" : "bg-background-elevated"
                }`}>
                  <d.icon className={`w-4 h-4 ${d.urgent ? "text-danger" : "text-accent"}`} />
                </div>
                <div>
                  <p className={`text-sm font-medium ${d.urgent ? "text-danger" : ""}`}>{d.label}</p>
                  <p className="text-xs text-foreground-dim">{d.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Contracts */}
        <div className="card rounded-xl p-6">
          <h2 className="font-semibold text-sm mb-4">Contract History</h2>
          <div className="space-y-3">
            {historicalContracts.map((c, i) => (
              <div key={i} className="p-4 bg-background-elevated rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium">{c.club}</p>
                    <p className="text-xs text-foreground-dim mt-1">{c.period}</p>
                  </div>
                  <span className="text-xs text-foreground-dim bg-background rounded px-2 py-1">{c.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
