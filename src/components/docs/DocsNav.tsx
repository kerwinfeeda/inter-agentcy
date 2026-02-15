import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DocPage } from "@/lib/docs-nav";

interface DocsNavProps {
  prev: DocPage | null;
  next: DocPage | null;
}

export default function DocsNav({ prev, next }: DocsNavProps) {
  return (
    <div className="mt-16 pt-8 border-t border-border flex items-center justify-between gap-4">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex items-center gap-2 px-4 py-3 rounded-lg border border-border hover:border-accent/30 hover:bg-white/[0.02] transition-all max-w-[45%]"
        >
          <ChevronLeft className="w-4 h-4 text-foreground-dim group-hover:text-accent transition-colors flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-xs text-foreground-dim">Previous</p>
            <p className="text-sm text-foreground-muted group-hover:text-foreground transition-colors truncate">{prev.title}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex items-center gap-2 px-4 py-3 rounded-lg border border-border hover:border-accent/30 hover:bg-white/[0.02] transition-all max-w-[45%] ml-auto text-right"
        >
          <div className="min-w-0">
            <p className="text-xs text-foreground-dim">Next</p>
            <p className="text-sm text-foreground-muted group-hover:text-foreground transition-colors truncate">{next.title}</p>
          </div>
          <ChevronRight className="w-4 h-4 text-foreground-dim group-hover:text-accent transition-colors flex-shrink-0" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
