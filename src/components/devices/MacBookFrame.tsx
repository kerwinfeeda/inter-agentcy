"use client";

import { ReactNode } from "react";

export default function MacBookFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`animate-float ${className}`}>
      <div className="device-glow rounded-2xl">
        {/* Screen */}
        <div className="relative bg-[#1a1a1e] rounded-t-2xl border border-[#2a2a2e] overflow-hidden">
          {/* Top bezel with camera */}
          <div className="h-6 bg-[#0d0d0f] flex items-center justify-center border-b border-[#2a2a2e]">
            <div className="w-2 h-2 rounded-full bg-[#2a2a2e]" />
          </div>
          {/* Screen content */}
          <div className="aspect-[16/10] overflow-hidden">
            {children}
          </div>
        </div>
        {/* Bottom chin */}
        <div className="h-4 bg-gradient-to-b from-[#1a1a1e] to-[#0d0d0f] rounded-b-xl border-x border-b border-[#2a2a2e] flex items-center justify-center">
          <div className="w-16 h-1 rounded-full bg-[#2a2a2e]" />
        </div>
      </div>
    </div>
  );
}
