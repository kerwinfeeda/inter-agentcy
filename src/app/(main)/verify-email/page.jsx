"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import authService from "../../../services/authService";
import { Shield } from "lucide-react";
import { clearCookie, setCookie } from "@/helpers/common";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // Assuming the URL is /verify-email?token=...

  const [status, setStatus] = useState("loading"); // loading | success | error

  useEffect(() => {
    const verify = async () => {
      setCookie(process.env.NEXT_PUBLIC_AI_TOKEN_COOKIE, token);
      if (!token) {
        setStatus("error");

        return;
      }

      try {
        await authService?.verify();
        setStatus("success");
        clearCookie(process.env.NEXT_PUBLIC_AI_TOKEN_COOKIE);
      } catch (err) {
        console.log(err.message || "Something went wrong!");
        setStatus("error");
      }
    };

    verify();
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4">
      {/* Logo */}
      <Link href="/" className="inline-flex items-center gap-2 mb-5">
        <Shield className="w-8 h-8 text-accent" />
        <span className="text-xl font-semibold tracking-tight">
          Inter <span className="text-accent">Agentcy</span>
        </span>
      </Link>

      <div className="w-full max-w-md text-center">
        {status === "loading" && (
          <div className="animate-fade-in">
            <div className="w-16 h-16 border-4 border-accent-steel border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
            <h2 className="text-2xl font-bold mb-2">Verifying your account</h2>
            <p className="text-foreground-muted">
              Please wait while we confirm your email address...
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="animate-slide-up">
            <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(78,190,150,0.2)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">
              Email Verified!
            </h2>
            <p className="text-foreground-muted mb-10 leading-relaxed">
              Your account is now active. You can now proceed to set up your
              profile and access the dashboard.
            </p>
            <Link
              href="/login"
              className="gradient-steel-btn inline-flex px-10 py-3 rounded-xl font-semibold text-white transition-all hover:scale-[1.02]"
            >
              Login to continue
            </Link>
          </div>
        )}

        {status === "error" && (
          <div className="animate-slide-up">
            <div className="w-20 h-20 rounded-full bg-danger/10 flex items-center justify-center mx-auto mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-danger"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">
              Verification Failed
            </h2>
            <p className="text-foreground-muted mb-10 leading-relaxed">
              The verification link is invalid or has expired. Please request a
              new link to continue.
            </p>
            {/* <button
              onClick={() => router.push("/register")}
              className="px-8 py-3 rounded-xl border border-border-light font-semibold hover:bg-white/5 transition-all"
            >
              Register Again
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
}
