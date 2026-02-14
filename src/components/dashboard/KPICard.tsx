import { LucideIcon } from "lucide-react";

interface KPICardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  iconColor?: string;
}

export default function KPICard({ icon: Icon, label, value, trend, trendUp, iconColor = "text-accent" }: KPICardProps) {
  return (
    <div className="card rounded-xl p-5 card-hover">
      <Icon className={`w-5 h-5 ${iconColor} mb-3`} />
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs text-foreground-muted mt-1">{label}</p>
      {trend && (
        <p className={`text-xs mt-0.5 ${trendUp ? "text-success" : "text-foreground-dim"}`}>
          {trend}
        </p>
      )}
    </div>
  );
}
