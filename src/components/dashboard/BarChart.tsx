"use client";

interface BarChartData {
  label: string;
  value: number;
  color?: string;
}

interface BarChartProps {
  data: BarChartData[];
  height?: number;
  showLabels?: boolean;
  maxValue?: number;
}

export default function BarChart({ data, height = 160, showLabels = true, maxValue }: BarChartProps) {
  const max = maxValue ?? Math.max(...data.map((d) => d.value));

  return (
    <div className="flex items-end gap-3" style={{ height }}>
      {data.map((d, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-2">
          {showLabels && (
            <span className="text-[10px] text-foreground-dim">{d.value.toLocaleString()}</span>
          )}
          <div
            className="w-full rounded-t-md transition-all duration-700 ease-out"
            style={{
              height: `${max > 0 ? (d.value / max) * 100 : 0}%`,
              minHeight: 4,
              background: d.color ?? "linear-gradient(135deg, #5A6B7A 0%, #7B8794 50%, #9AAAB8 100%)",
              animationDelay: `${i * 50}ms`,
            }}
          />
          <span className="text-xs text-foreground-muted">{d.label}</span>
        </div>
      ))}
    </div>
  );
}
