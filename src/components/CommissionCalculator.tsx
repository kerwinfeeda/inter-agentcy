"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

export default function CommissionCalculator() {
  const [dealType, setDealType] = useState<"transfer" | "salary">("transfer");
  const [amount, setAmount] = useState("");
  const [agentRole, setAgentRole] = useState<"selling" | "buying" | "player">("selling");

  const numAmount = parseFloat(amount) || 0;

  let maxCommission = 0;
  let capLabel = "";
  if (dealType === "transfer") {
    if (agentRole === "selling") {
      maxCommission = numAmount * 0.1;
      capLabel = "10% of transfer fee (selling club agent)";
    } else if (agentRole === "buying") {
      maxCommission = numAmount * 0.03 + numAmount * 0.03;
      capLabel = "3-6% of transfer fee (buying club agent)";
      maxCommission = numAmount * 0.06;
    } else {
      maxCommission = numAmount * 0.03;
      capLabel = "3% of transfer fee (player agent)";
    }
  } else {
    maxCommission = numAmount * 0.03;
    capLabel = "3% of player salary (FIFA cap)";
  }

  return (
    <div className="card rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Calculator className="w-5 h-5 text-accent" />
        </div>
        <h3 className="text-xl font-semibold">Commission Cap Calculator</h3>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm text-foreground-muted mb-2">Deal Type</label>
          <div className="flex gap-3">
            {(["transfer", "salary"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setDealType(t)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  dealType === t
                    ? "bg-accent text-white"
                    : "card hover:bg-background-elevated text-foreground-muted"
                }`}
              >
                {t === "transfer" ? "Transfer Fee" : "Player Salary"}
              </button>
            ))}
          </div>
        </div>

        {dealType === "transfer" && (
          <div>
            <label className="block text-sm text-foreground-muted mb-2">Agent Role</label>
            <div className="flex gap-3 flex-wrap">
              {([
                ["selling", "Selling Club Agent"],
                ["buying", "Buying Club Agent"],
                ["player", "Player Agent"],
              ] as const).map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setAgentRole(val)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    agentRole === val
                      ? "bg-accent text-white"
                      : "card hover:bg-background-elevated text-foreground-muted"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm text-foreground-muted mb-2">
            {dealType === "transfer" ? "Transfer Fee (€)" : "Annual Salary (€)"}
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            className="w-full px-4 py-3 rounded-lg bg-background-card border border-border text-white placeholder-text-dim focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {numAmount > 0 && (
          <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-foreground-muted mb-1">{capLabel}</p>
            <p className="text-3xl font-bold gradient-text">
              €{maxCommission.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </p>
            <p className="text-xs text-foreground-dim mt-2">
              Maximum commission under FIFA Football Agent Regulations
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
