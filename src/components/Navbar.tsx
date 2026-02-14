"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Shield } from "lucide-react";

const links = [
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/features", label: "Features" },
  { href: "/agents", label: "Pricing" },
  { href: "/clubs", label: "For Clubs" },
  { href: "/compliance", label: "Compliance" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 group">
            <Shield className="w-7 h-7 text-accent group-hover:text-accent-light transition-colors" />
            <span className="text-lg font-semibold tracking-tight">
              Inter <span className="text-accent">Agentcy</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-foreground-muted hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-sm text-foreground-muted hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="px-5 py-2 gradient-steel-btn text-white text-sm font-semibold rounded-lg transition-all"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-foreground-muted hover:text-white transition-colors py-2"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="block text-foreground-muted hover:text-white transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="block w-full text-center px-5 py-2.5 gradient-steel-btn text-white font-semibold rounded-lg transition-all"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
