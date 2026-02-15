import { Info, AlertTriangle, Lightbulb, Zap } from "lucide-react";
import { ReactNode } from "react";

const variants = {
  info: { icon: Info, border: "#7B8794", bg: "rgba(123,135,148,0.08)" },
  warning: { icon: AlertTriangle, border: "#e15e67", bg: "rgba(225,94,103,0.08)" },
  tip: { icon: Lightbulb, border: "#4EBE96", bg: "rgba(78,190,150,0.08)" },
  highlight: { icon: Zap, border: "#9AAAB8", bg: "rgba(154,170,184,0.08)" },
};

interface CalloutProps {
  type?: keyof typeof variants;
  title?: string;
  children: ReactNode;
}

export default function Callout({ type = "info", title, children }: CalloutProps) {
  const v = variants[type];
  const Icon = v.icon;
  return (
    <div
      className="my-6 rounded-lg px-5 py-4"
      style={{ borderLeft: `3px solid ${v.border}`, background: v.bg }}
    >
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: v.border }} />
        <div className="min-w-0">
          {title && <p className="font-semibold text-foreground mb-1">{title}</p>}
          <div className="text-sm text-foreground-muted leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
