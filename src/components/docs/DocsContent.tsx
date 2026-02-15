import { ReactNode } from "react";

export default function DocsContent({ children }: { children: ReactNode }) {
  return (
    <div className="docs-prose max-w-3xl mx-auto px-6 py-10 lg:px-8">
      {children}
    </div>
  );
}
