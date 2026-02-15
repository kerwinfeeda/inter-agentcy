import { ShieldCheck } from "lucide-react";

interface VerifiedBadgeProps {
  variant: "gold" | "blue";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

const config = {
  gold: { color: "#D4A843", label: "Verified Agency", className: "verified-gold" },
  blue: { color: "#9AAAB8", label: "Verified Agent", className: "verified-blue" },
};

const sizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };

export default function VerifiedBadge({ variant, size = "md", showLabel = false }: VerifiedBadgeProps) {
  const { color, label, className } = config[variant];
  return (
    <span className={`inline-flex items-center gap-1 verified-badge ${className}`} title={label}>
      <ShieldCheck className={sizes[size]} style={{ color }} />
      {showLabel && <span className="text-xs font-medium" style={{ color }}>{label}</span>}
    </span>
  );
}
