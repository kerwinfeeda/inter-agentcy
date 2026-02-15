import Link from "next/link";
import { Shield } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <Shield className="w-16 h-16 text-[#7B8794] mx-auto mb-6" />
        <h1 className="text-6xl font-bold text-[#9AAAB8] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-3">Page Not Found</h2>
        <p className="text-foreground-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 gradient-steel-btn text-white font-semibold rounded-xl transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
