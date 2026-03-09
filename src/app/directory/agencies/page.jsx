"use client";

import { useState, useMemo } from "react";
import { Building2 } from "lucide-react";
import AgencyCard from "@/components/directory/AgencyCard";
import DirectorySearch from "@/components/directory/DirectorySearch";
import agencyService from "../../../services/agencyService";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// function parseValue(v) {
//   if (!v) return 0;
//   const num = parseFloat(v.replace(/[€,]/g, ""));
//   if (isNaN(num)) return 0;
//   if (v.includes("bn")) return num * 1000;
//   if (v.includes("mm")) return num;
//   return num;
// }

export default function AgenciesPage() {
  const [search, setSearch] = useState("");
  // const [sortBy, setSortBy] = useState("value");
  const [currentPage, setCurrentPage] = useState(1);

  const { _agencies_data, _agencies_loading } =
    agencyService?.GetAllAgencies(currentPage);

  const pagination = _agencies_data?.data;
  const agencyItems = pagination?.items || [];

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    let list = [...agencyItems].filter(
      (a) =>
        a.name?.toLowerCase().includes(q) ||
        a.location?.country?.toLowerCase().includes(q) ||
        a.slogan?.toLowerCase().includes(q) ||
        a.foundationYear?.toLowerCase().includes(q),
    );

    // list.sort((a, b) => {
    //   if (sortBy === "value")
    //     return parseValue(b.realValue) - parseValue(a.realValue);
    //   if (sortBy === "name") return a.name.localeCompare(b.name);
    //   return (a.location?.country || "").localeCompare(
    //     b.location?.country || "",
    //   );
    // });
    return list;
  }, [agencyItems, search]);

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Building2 className="w-6 h-6 text-accent-steel" />
          <h1 className="text-3xl font-bold text-white">All Agencies</h1>
        </div>
        <p className="text-foreground-muted mb-8">
          {_agencies_data?.data?.totalItems} verified football agencies
          worldwide
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <DirectorySearch
            placeholder="Search agencies by name, country..."
            value={search}
            onChange={setSearch}
          />
          {/* <div className="flex gap-2">
            {["value", "name", "country"].map((key) => (
              <button
                key={key}
                onClick={() => setSortBy(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  sortBy === key
                    ? "bg-accent-steel/20 text-accent-light border border-accent-steel/30"
                    : "bg-background-card border border-border text-foreground-muted hover:text-foreground"
                }`}
              >
                <ArrowUpDown className="w-3.5 h-3.5" />
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {_agencies_loading
            ? Array(6)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="card p-6 flex flex-col gap-3 h-full border border-border/50"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 w-full">
                        <Skeleton
                          baseColor="#202020"
                          highlightColor="#444"
                          width="60%"
                          height={20}
                        />
                        <Skeleton
                          baseColor="#202020"
                          highlightColor="#444"
                          circle
                          width={16}
                          height={16}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Skeleton
                        baseColor="#202020"
                        highlightColor="#444"
                        count={2}
                        height={14}
                      />
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                      <div className="flex items-center gap-1">
                        <Skeleton
                          baseColor="#202020"
                          highlightColor="#444"
                          width={60}
                          height={12}
                        />
                      </div>
                      <div className="flex items-center gap-1">
                        <Skeleton
                          baseColor="#202020"
                          highlightColor="#444"
                          width={50}
                          height={12}
                        />
                      </div>
                      <div className="flex items-center gap-1">
                        <Skeleton
                          baseColor="#202020"
                          highlightColor="#444"
                          width={40}
                          height={12}
                        />
                      </div>
                    </div>

                    <div className="pt-1">
                      <Skeleton
                        baseColor="#202020"
                        highlightColor="#444"
                        width={80}
                        height={12}
                      />
                    </div>
                  </div>
                ))
            : filtered.map((agency) => (
                <AgencyCard key={agency._id} {...agency} />
              ))}
        </div>

        {pagination?.totalItems > 0 && (
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              disabled={!pagination.hasPreviousPage || _agencies_loading}
              onClick={() => setCurrentPage(pagination.previousPage)}
              className="px-4 py-2 rounded-lg border border-border text-foreground-muted hover:bg-background-elevated disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            <div className="flex items-center gap-2">
              <span className="text-sm text-foreground-muted">Page</span>
              <span className="text-sm font-medium text-white px-3 py-1 bg-accent-steel/20 rounded border border-accent-steel/30">
                {pagination.currentPage}
              </span>
              <span className="text-sm text-foreground-muted">
                of {pagination.lastPage}
              </span>
            </div>

            <button
              disabled={!pagination.hasNextPage || _agencies_loading}
              onClick={() => setCurrentPage(pagination.nextPage)}
              className="px-4 py-2 rounded-lg border border-border text-foreground-muted hover:bg-background-elevated disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-foreground-dim">
            No agencies found matching &quot;{search}&quot;
          </div>
        )}
      </div>
    </main>
  );
}
