"use client";

import {
  ArrowRight,
  Check,
  Linkedin,
  Mail,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const VerificationPending = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card p-8">
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full gradient-steel-btn flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-3">You&apos;re all set</h2>
          <p className="text-foreground-muted text-sm mb-8 max-w-sm mx-auto">
            Thank you for applying. Our team is reviewing early applicants as we
            finalize the{" "}
            <span className="text-white font-medium">Inter Agency</span>{" "}
            platform. You&apos;ll be notified as soon as access is granted.
          </p>
          <button
            onClick={() => router?.push("/directory")}
            className="inline-flex items-center gap-2 mb-5 px-8 py-3 gradient-steel-btn text-white font-semibold rounded-xl transition-all"
          >
            Go To Directory <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="text-foreground-muted hover:text-accent transition-colors"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-foreground-muted hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@interagentcy.com"
              className="text-foreground-muted hover:text-accent transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPending;
