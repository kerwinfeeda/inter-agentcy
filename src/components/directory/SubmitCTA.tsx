import Link from "next/link";
import { UserPlus, ArrowRight } from "lucide-react";

interface SubmitCTAProps {
  type: "player" | "agent" | "agency";
}

const copy = {
  player: {
    title: "Are You a Player?",
    desc: "Get discovered by top agents and agencies. Submit your profile to be listed in the Inter Agentcy player directory.",
    cta: "Submit Player Profile",
  },
  agent: {
    title: "Are You an Agent?",
    desc: "Increase your visibility in the football industry. Submit your profile to join the verified Inter Agentcy agent directory.",
    cta: "Submit Agent Profile",
  },
  agency: {
    title: "List Your Agency",
    desc: "Showcase your agency to players, clubs, and partners worldwide. Submit your agency profile to the Inter Agentcy directory.",
    cta: "Submit Agency Profile",
  },
};

export default function SubmitCTA({ type }: SubmitCTAProps) {
  const { title, desc, cta } = copy[type];

  return (
    <div className="mt-12 card p-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-steel/10 via-transparent to-accent-light/5 pointer-events-none" />
      <div className="relative">
        <UserPlus className="w-8 h-8 text-accent-steel mx-auto mb-3" />
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-foreground-muted max-w-lg mx-auto mb-5">{desc}</p>
        <Link
          href={`/directory/submit?type=${type}`}
          className="gradient-steel-btn px-6 py-3 rounded-xl text-white font-semibold inline-flex items-center gap-2 transition-all"
        >
          {cta} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
