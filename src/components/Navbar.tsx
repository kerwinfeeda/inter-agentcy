"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Shield, ChevronDown } from "lucide-react";

interface NavItem {
  href?: string;
  label: string;
  children?: { href: string; label: string; desc?: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Platform",
    children: [
      { href: "/inter-os", label: "Inter OS", desc: "The complete operating system" },
      { href: "/ecosystem", label: "Ecosystem", desc: "How the platform connects everyone" },
      { href: "/features", label: "Features", desc: "Tools and capabilities" },
      { href: "/deal-room", label: "Inter DealRoom", desc: "Transfer marketplace & deal execution" },
      { href: "/network", label: "Network", desc: "200+ clubs worldwide" },
    ],
  },
  {
    label: "Directory",
    children: [
      { href: "/directory/agents", label: "Agents", desc: "2,400+ verified football agents" },
      { href: "/directory/agencies", label: "Agencies", desc: "Licensed agencies and teams" },
      { href: "/directory/players", label: "Players", desc: "139 players with profiles and stats" },
      { href: "/directory", label: "Browse All", desc: "Full directory overview" },
    ],
  },
  { href: "/academy", label: "Academy" },
  { href: "/docs", label: "Docs" },
  { href: "/agents", label: "Pricing" },
  {
    label: "Join",
    children: [
      { href: "/players", label: "For Players", desc: "Get verified representation" },
      { href: "/players/apply", label: "Player Application", desc: "Submit your profile" },
      { href: "/clubs", label: "For Clubs", desc: "Access verified talent" },
      { href: "/clubs/partner", label: "Club Partnership", desc: "Become a partner club" },
    ],
  },
  {
    label: "Company",
    children: [
      { href: "/about", label: "About", desc: "Our mission and team" },
      { href: "/compliance", label: "Compliance", desc: "FIFA regulations & standards" },
      { href: "/profile", label: "Agent Profiles", desc: "See how profiles look" },
    ],
  },
];

function Dropdown({ item, onClose }: { item: NavItem; onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
      <div className="bg-background-elevated border border-border rounded-xl shadow-2xl shadow-black/40 p-2 min-w-[220px]">
        {item.children!.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={onClose}
            className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group"
          >
            <span className="text-sm font-medium text-foreground group-hover:text-white transition-colors">{child.label}</span>
            {child.desc && <p className="text-xs text-foreground-dim mt-0.5">{child.desc}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}

function NavDropdown({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-foreground-muted hover:text-white transition-colors"
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <Dropdown item={item} onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <Shield className="w-7 h-7 text-accent group-hover:text-accent-light transition-colors" />
            <span className="text-lg font-semibold tracking-tight">
              Inter <span className="text-accent">Agentcy</span>
            </span>
          </Link>

          {/* Desktop nav — centered */}
          <div className="hidden lg:flex items-center justify-center gap-6 flex-1">
            {navItems.map((item) =>
              item.children ? (
                <NavDropdown key={item.label} item={item} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="text-sm text-foreground-muted hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Auth — right */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <Link href="/login" className="text-sm text-foreground-muted hover:text-white transition-colors">
              Sign In
            </Link>
            <Link href="/register" className="px-5 py-2 gradient-steel-btn text-white text-sm font-semibold rounded-lg transition-all">
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-white ml-auto" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between py-2.5 text-foreground-muted hover:text-white transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-4 pb-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-foreground-dim hover:text-white transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="block py-2.5 text-foreground-muted hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3 mt-3 border-t border-border space-y-3">
              <Link href="/login" className="block text-foreground-muted hover:text-white transition-colors py-2" onClick={() => setOpen(false)}>
                Sign In
              </Link>
              <Link href="/register" className="block w-full text-center px-5 py-2.5 gradient-steel-btn text-white font-semibold rounded-lg transition-all" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
