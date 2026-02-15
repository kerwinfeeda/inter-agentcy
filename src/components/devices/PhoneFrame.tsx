"use client";

import { ReactNode } from "react";

export default function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`animate-float-slow ${className}`}>
      <div className="device-glow rounded-[2.5rem] w-[280px]">
        <div className="relative bg-[#0d0d0f] rounded-[2.5rem] border-2 border-[#2a2a2e] p-2">
          {/* Dynamic Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0d0d0f] rounded-full z-10 border border-[#1a1a1e]" />
          {/* Screen */}
          <div className="rounded-[2rem] overflow-hidden bg-[#131419]">
            <div className="aspect-[9/19.5] overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
