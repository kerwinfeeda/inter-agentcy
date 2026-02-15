"use client";

import { Check, Star } from "lucide-react";

interface PlayerBadgeProps {
  verification: "none" | "blue" | "gold";
  size?: "sm" | "lg";
}

export default function PlayerBadge({ verification, size = "sm" }: PlayerBadgeProps) {
  if (verification === "none") return null;

  const px = size === "lg" ? "w-6 h-6" : "w-5 h-5";
  const iconPx = size === "lg" ? "w-3.5 h-3.5" : "w-3 h-3";

  if (verification === "blue") {
    return (
      <span title="Verified Player" className={`inline-flex items-center justify-center ${px} rounded-full bg-[#9AAAB8] shrink-0`}>
        <Check className={`${iconPx} text-white`} strokeWidth={3} />
      </span>
    );
  }

  return (
    <span title="Agency Signed" className={`inline-flex items-center justify-center ${px} rounded-full bg-[#D4A843] shrink-0`}>
      <Star className={`${iconPx} text-white`} strokeWidth={3} />
    </span>
  );
}
