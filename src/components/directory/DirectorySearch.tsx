"use client";

import { Search } from "lucide-react";

interface DirectorySearchProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function DirectorySearch({ placeholder = "Search...", value, onChange }: DirectorySearchProps) {
  return (
    <div className="relative w-full max-w-xl">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-dim" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-background-card border border-border rounded-xl text-foreground placeholder:text-foreground-dim focus:outline-none focus:border-accent-steel transition-colors"
      />
    </div>
  );
}
