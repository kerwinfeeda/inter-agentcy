import Link from "next/link";
import { Shield, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Platform: [
    { href: "/ecosystem", label: "How It Works" },
    { href: "/features", label: "Features" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/compliance", label: "Compliance" },
    { href: "/about", label: "About" },
  ],
  "Get Started": [
    { href: "/agents", label: "Pricing" },
    { href: "/clubs", label: "For Clubs" },
    { href: "/join", label: "Join Waitlist" },
  ],
  Resources: [
    { href: "/compliance", label: "FIFA Regulations" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Documentation" },
    { href: "#", label: "Support" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-7 h-7 text-accent" />
              <span className="text-lg font-bold">
                Inter <span className="text-accent">Agentcy</span>
              </span>
            </Link>
            <p className="text-sm text-foreground-muted mb-6">
              The future of football representation. Enterprise tools for independent agents.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground-muted hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground-muted hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground-muted hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-foreground-muted hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground-dim">
            © 2024 Inter Agentcy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground-dim">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
