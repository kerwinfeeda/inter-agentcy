"use client";

import { useState } from "react";
import { Plus, Search, Filter } from "lucide-react";
import Link from "next/link";
import ModalContainer from "@/components/ModalContainer";
import CreateAgencyModal from "./CreateAgencyModal";
import agencyService from "../../../../services/agencyService";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "../../../../Context/authContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Toast from "../../../../components/Toast";

export default function AgenciesPage() {
  const [search, setSearch] = useState("");

  const { fetch, refetch } = useContextHook(AuthContext, (v) => ({
    fetch: v.fetch,
    refetch: v.refetch,
  }));

  const { _agencies_data, _agencies_loading } =
    agencyService?.GetAgencies(fetch);

  const filtered = _agencies_data?.data?.items?.filter((p) => {
    if (!search) return true;

    const searchTerm = search.toLowerCase();
    const matchesName = p.name?.toLowerCase().includes(searchTerm);
    const matchesEmail = p.email?.toLowerCase().includes(searchTerm);

    return matchesName || matchesEmail;
  });

  const handleDeleteAgency = async (e, onClose) => {
    try {
      await agencyService?.deleteAgency(e);
      Toast({ type: "success", message: "Agency Deleted Successfully" });
      onClose();
      refetch();
    } catch (error) {
      Toast({
        type: "error",
        message: error?.message || "Something went wrong!!",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Agencies</h1>
          <p className="text-sm text-foreground-muted mt-1">
            {_agencies_data?.data?.items?.length} agencies in your portfolio
          </p>
        </div>
        <ModalContainer
          title="Add Agency"
          width="800"
          content={({ onClose }) => <CreateAgencyModal onClose={onClose} />}
          btnComponent={({ onClick }) => (
            <button
              onClick={onClick}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg gradient-steel-btn text-sm font-medium text-white"
            >
              <Plus className="w-4 h-4" /> Add Agency
            </button>
          )}
        />
      </div>

      {/* Filters */}
      <div className="card rounded-xl p-4">
        <div className="flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-dim" />
            <input
              type="text"
              placeholder="Search agencies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-background-elevated border border-border rounded-lg text-sm text-foreground placeholder:text-foreground-dim focus:outline-none focus:border-border-light"
            />
          </div>
        </div>
      </div>

      <div className="card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-foreground-dim text-xs border-b border-border">
                <th className="text-left py-3 px-4 font-medium">Name</th>
                <th className="text-left py-3 px-4 font-medium">Email</th>
                <th className="text-left py-3 px-4 font-medium">Value</th>
                <th className="text-left py-3 px-4 font-medium">
                  Foundation Year
                </th>
                <th className="text-left py-3 px-4 font-medium">Country</th>
                <th className="text-center py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {_agencies_loading
                ? Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <tr
                        key={`skeleton-${index}`}
                        className="border-b border-border"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <Skeleton
                              circle
                              width={36}
                              height={36}
                              baseColor="#202020"
                              highlightColor="#444"
                            />
                            <Skeleton
                              width={120}
                              height={20}
                              baseColor="#202020"
                              highlightColor="#444"
                            />
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Skeleton
                            width={150}
                            baseColor="#202020"
                            highlightColor="#444"
                          />
                        </td>
                        <td className="py-3 px-4">
                          <Skeleton
                            width={80}
                            baseColor="#202020"
                            highlightColor="#444"
                          />
                        </td>
                        <td className="py-3 px-4">
                          <Skeleton
                            width={60}
                            baseColor="#202020"
                            highlightColor="#444"
                          />
                        </td>
                        <td className="py-3 px-4">
                          <Skeleton
                            width={100}
                            baseColor="#202020"
                            highlightColor="#444"
                          />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <Skeleton
                            width={32}
                            height={32}
                            borderRadius={8}
                            baseColor="#202020"
                            highlightColor="#444"
                          />
                        </td>
                      </tr>
                    ))
                : filtered?.map((p) => (
                    <tr
                      key={p._id}
                      className="border-b border-border hover:bg-background-elevated transition-colors"
                    >
                      <td className="py-3 px-4">
                        <Link
                          href={`/directory/agencies/${p._id}`}
                          className="flex items-center gap-3 hover:text-accent-light transition-colors"
                        >
                          <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent">
                            {p.name

                              .split(" ")

                              .map((n) => n[0])

                              .join("")}
                          </div>

                          <span className="font-medium">{p?.name}</span>
                        </Link>
                      </td>

                      <td className="py-3 px-4 text-foreground-muted">
                        {p?.email}
                      </td>

                      <td className="py-3 px-4 text-foreground-muted">
                        €{p?.realValue}
                      </td>

                      <td className="py-3 px-4 text-foreground-muted">
                        {p?.foundationYear}
                      </td>

                      <td className="py-3 px-4 text-foreground-muted">
                        {p?.location?.country}
                      </td>

                      <td className="py-3 px-4 flex items-center justify-center gap-1 text-center">
                        <ModalContainer
                          title="Edit Agency"
                          width="800"
                          content={({ onClose }) => (
                            <CreateAgencyModal isEdit={p} onClose={onClose} />
                          )}
                          btnComponent={({ onClick }) => (
                            <button
                              onClick={onClick}
                              className="p-2 text-foreground-muted hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                              title="Edit Agency"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                />
                              </svg>
                            </button>
                          )}
                        />

                        <ModalContainer
                          title="Delete Agency"
                          width="600"
                          content={({ onClose }) => (
                            <div>
                              <p className="text-foreground-muted text-lg mb-10 leading-relaxed">
                                Are you sure you want to delete this agency ?
                                This action is permanent and all associated data
                                will be lost.
                              </p>

                              {/* Action Buttons */}

                              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                                <button
                                  onClick={onClose}
                                  className="px-5 py-2.5 rounded-lg border border-border text-foreground-muted hover:bg-background-elevated transition-colors font-medium text-sm"
                                >
                                  No, keep it
                                </button>

                                <button
                                  onClick={() =>
                                    handleDeleteAgency(p._id, onClose)
                                  }
                                  className="px-5 py-2.5 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors font-semibold text-sm shadow-sm"
                                >
                                  Yes, delete agency
                                </button>
                              </div>
                            </div>
                          )}
                          btnComponent={({ onClick }) => (
                            <button
                              className="p-2 text-foreground-muted hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                              title="Delete Agency"
                              onClick={onClick}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                              </svg>
                            </button>
                          )}
                        />
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
