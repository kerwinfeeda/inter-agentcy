import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
}

export default function FeatureCard({ icon: Icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className="card card-hover rounded-2xl p-6 group">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${gradient ? "bg-gradient-to-br from-accent to-accent-light" : "bg-accent/10"}`}>
        <Icon className={`w-6 h-6 ${gradient ? "text-white" : "text-accent"}`} />
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-foreground-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
