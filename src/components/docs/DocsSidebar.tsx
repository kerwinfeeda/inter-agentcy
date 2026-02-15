"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Shield, ArrowLeft, Search, Menu, X } from "lucide-react";
import { docsNav } from "@/lib/docs-nav";

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    docsNav.forEach((section) => {
      if (section.pages.some((p) => p.href === pathname)) init[section.title] = true;
      else init[section.title] = true; // all expanded by default
    });
    return init;
  });

  const toggle = (title: string) =>
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));

  return (
    <nav className="py-4 px-3 space-y-1">
      {docsNav.map((section) => (
        <div key={section.title} className="mb-1">
          <button
            onClick={() => toggle(section.title)}
            className="w-full flex items-center gap-1.5 px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground-dim hover:text-foreground-muted transition-colors"
          >
            <ChevronRight
              className={`w-3 h-3 transition-transform ${expanded[section.title] ? "rotate-90" : ""}`}
            />
            {section.title}
          </button>
          {expanded[section.title] && (
            <div className="ml-2 border-l border-border pl-2 space-y-0.5">
              {section.pages.map((page) => {
                const active = pathname === page.href;
                return (
                  <Link
                    key={page.href}
                    href={page.href}
                    onClick={onNavigate}
                    className={`block px-2 py-1.5 text-[13px] rounded-md transition-colors ${
                      active
                        ? "text-white bg-white/[0.06] font-medium"
                        : "text-foreground-muted hover:text-foreground hover:bg-white/[0.03]"
                    }`}
                  >
                    {page.title}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default function DocsSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-background/95 backdrop-blur-sm border-b border-border flex items-center px-4 gap-4">
        <button
          className="lg:hidden text-foreground-muted hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <Shield className="w-6 h-6 text-accent group-hover:text-accent-light transition-colors" />
          <span className="text-base font-semibold tracking-tight">
            Inter <span className="text-accent">Agentcy</span>
          </span>
        </Link>
        <span className="text-foreground-dim text-sm hidden sm:block">/</span>
        <span className="text-foreground-muted text-sm font-medium hidden sm:block">Docs</span>
        <div className="flex-1" />
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-background-card text-foreground-dim text-sm max-w-[240px] w-full">
          <Search className="w-4 h-4 flex-shrink-0" />
          <span>Search docs…</span>
        </div>
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-foreground-dim hover:text-foreground-muted transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Back to site</span>
        </Link>
      </header>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block fixed top-14 left-0 w-[260px] h-[calc(100vh-56px)] border-r border-border overflow-y-auto bg-background">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 top-14 z-40 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="lg:hidden fixed top-14 left-0 w-[280px] h-[calc(100vh-56px)] z-50 bg-background border-r border-border overflow-y-auto">
            <SidebarContent onNavigate={() => setMobileOpen(false)} />
          </aside>
        </>
      )}
    </>
  );
}
