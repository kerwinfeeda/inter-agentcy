"use client";

import { useEffect, useState } from "react";

interface StatProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

function StatItem({ value, label, prefix = "", suffix = "", delay = 0 }: StatProps) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    const hasDecimal = value.includes(".");
    const duration = 2000;

    const timeout = setTimeout(() => {
      const start = Date.now();
      const tick = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = num * eased;
        if (hasDecimal) {
          setDisplay(current.toFixed(2));
        } else {
          setDisplay(Math.floor(current).toLocaleString());
        }
        if (progress < 1) requestAnimationFrame(tick);
      };
      tick();
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {prefix}{display}{suffix}
      </div>
      <div className="text-foreground-muted text-sm">{label}</div>
    </div>
  );
}

const stats: (StatProps & { delay: number })[] = [
  { value: "1.37", label: "Agent Service Fees (2024)", prefix: "$", suffix: "B", delay: 300 },
  { value: "10000", label: "FIFA Exam Candidates", suffix: "+", delay: 500 },
  { value: "200", label: "Countries in the Ecosystem", suffix: "+", delay: 700 },
  { value: "50000", label: "Scouts, Reps & Agents Worldwide", suffix: "+", delay: 900 },
];

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s) => (
        <StatItem key={s.label} {...s} />
      ))}
    </div>
  );
}
