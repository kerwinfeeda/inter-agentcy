"use client";

import { usePathname } from "next/navigation";
import { Bell, Settings, ChevronRight } from "lucide-react";
import Link from "next/link";

const breadcrumbMap: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/players": "Players",
  "/dashboard/deals": "Deal Pipeline",
  "/dashboard/commissions": "Commissions",
  "/dashboard/network": "Club Network",
  "/dashboard/documents": "Documents",
  "/dashboard/calendar": "Calendar",
  "/dashboard/compliance": "Compliance",
  "/dashboard/messages": "Messages",
  "/dashboard/settings": "Settings",
};

export default function DashboardTopbar() {
  const pathname = usePathname();
  const pageTitle = breadcrumbMap[pathname] || "Dashboard";

  return (
    <header className="h-14 border-b border-border bg-background-card/80 backdrop-blur-sm flex items-center justify-between px-6 flex-shrink-0">
      <div className="flex items-center gap-2 text-sm">
        <Link href="/dashboard" className="text-foreground-dim hover:text-foreground-muted transition-colors">
          Dashboard
        </Link>
        {pathname !== "/dashboard" && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-foreground-dim" />
            <span className="text-foreground">{pageTitle}</span>
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button className="relative text-foreground-muted hover:text-foreground transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-danger rounded-full text-[10px] font-bold flex items-center justify-center text-white">
            3
          </span>
        </button>
        <Link href="/dashboard/settings" className="text-foreground-muted hover:text-foreground transition-colors">
          <Settings className="w-5 h-5" />
        </Link>
        <div className="flex items-center gap-2 ml-2">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">
            KA
          </div>
          <span className="text-sm text-foreground-muted hidden sm:block">Kerwin</span>
        </div>
      </div>
    </header>
  );
}
