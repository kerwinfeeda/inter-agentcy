import DocsSidebar from "@/components/docs/DocsSidebar";

export const metadata = {
  title: "Documentation — Inter Agentcy",
  description: "Comprehensive documentation for the Inter Agentcy football representation platform.",
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DocsSidebar />
      <div className="pt-14 lg:pl-[260px] min-h-screen">
        {children}
      </div>
    </>
  );
}
