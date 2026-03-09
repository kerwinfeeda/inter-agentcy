"use client";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardTopbar from "@/components/dashboard/DashboardTopbar";
import { AuthContext } from "@/Context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useContextHook } from "use-context-hook";

export default function DashboardLayout({ children }) {
  const { user } = useContextHook(AuthContext, (v) => ({
    user: v.user,
  }));
  const navigate = useRouter();

  useEffect(() => {
    if (user?._id && !user.isVerified) {
      navigate.push("/verification-pending");
    }
  }, [user]);

  if (!user || !user.isVerified) {
    return;
  }

  return (
    <div className="fixed inset-0 z-50 bg-background flex">
      <DashboardSidebar />
      <div className="flex-1 ml-60 flex flex-col min-h-0 max-md:ml-16">
        <DashboardTopbar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
