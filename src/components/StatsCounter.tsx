"use client";

import { useEffect, useRef, useState } from "react";

interface StatProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

function StatItem({ value, label, prefix = "", suffix = "" }: StatProps) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const num = parseFloat(value.replace(/[^0-9.]/g, ""));
          const duration = 2000;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = num * eased;
            if (value.includes(".")) {
              setDisplay(current.toFixed(2));
            } else {
              setDisplay(Math.floor(current).toLocaleString());
            }
            if (progress < 1) requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {prefix}{display}{suffix}
      </div>
      <div className="text-foreground-muted text-sm">{label}</div>
    </div>
  );
}

const stats: StatProps[] = [
  { value: "1.37", label: "Agent Service Fees (2024)", prefix: "$", suffix: "B" },
  { value: "10000", label: "FIFA Exam Candidates", suffix: "+" },
  { value: "200", label: "Countries in the Ecosystem", suffix: "+" },
  { value: "50000", label: "Scouts, Reps & Agents Worldwide", suffix: "+" },
];

export default function StatsCounter() {
  return (
    <section className="py-20 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
