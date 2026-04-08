"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Plus, CheckCircle2, Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { getJobs, markJobApplied, type Job } from "@/lib/api";
import { SpaceBackground } from "@/components/SpaceBackground";

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterApplied, setFilterApplied] = useState<"all" | "applied" | "pending">("all");
  const [updatingJobId, setUpdatingJobId] = useState<number | null>(null);

  useEffect(() => {
    loadJobs();
  }, []);

  async function loadJobs() {
    setLoading(true);
    const appliedFilter = filterApplied === "applied" ? true : filterApplied === "pending" ? false : undefined;
    const fetchedJobs = await getJobs({
      limit: 100,
      search: search || undefined,
      applied: appliedFilter,
    });
    setJobs(fetchedJobs);
    setLoading(false);
  }

  async function handleToggleApplied(job: Job) {
    setUpdatingJobId(job.id);
    const success = await markJobApplied(job.id, !job.applied);
    if (success) {
      const updatedJobs = jobs.map((j) =>
        j.id === job.id ? { ...j, applied: !job.applied } : j
      );
      setJobs(updatedJobs);
    }
    setUpdatingJobId(null);
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleFilterChange(filter: "all" | "applied" | "pending") {
    setFilterApplied(filter);
  }

  return (
    <>
      <SpaceBackground particleCount={350} backgroundColor="#000000" />
      <div className="flex flex-col min-h-screen bg-black">
        <nav className="border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          Add Job
        </button>
      </nav>

      <main className="flex-1 px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Jobs
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Browse and manage job opportunities you're interested in.
          </p>

          <div className="mb-8 space-y-4">
            <input
              type="text"
              placeholder="Search jobs by title, company, or location..."
              value={search}
              onChange={handleSearch}
              onKeyPress={(e) => {
                if (e.key === "Enter") loadJobs();
              }}
              className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400"
            />

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => {
                  handleFilterChange("all");
                  setJobs([]);
                  setTimeout(loadJobs, 0);
                }}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filterApplied === "all"
                    ? "bg-orange-600 text-white"
                    : "bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-700"
                }`}
              >
                All
              </button>
              <button
                onClick={() => {
                  handleFilterChange("pending");
                  setJobs([]);
                  setTimeout(loadJobs, 0);
                }}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filterApplied === "pending"
                    ? "bg-orange-600 text-white"
                    : "bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-700"
                }`}
              >
                Not Applied
              </button>
              <button
                onClick={() => {
                  handleFilterChange("applied");
                  setJobs([]);
                  setTimeout(loadJobs, 0);
                }}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filterApplied === "applied"
                    ? "bg-orange-600 text-white"
                    : "bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-700"
                }`}
              >
                Applied
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin">
                <div className="w-8 h-8 border-4 border-orange-200 border-t-orange-600 rounded-full"></div>
              </div>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">Loading jobs...</p>
            </div>
          ) : jobs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-zinc-800 rounded-lg p-12 text-center shadow-sm"
            >
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                No jobs found. Try different search terms or filters.
              </p>
              <button
                onClick={loadJobs}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Refresh
              </button>
            </motion.div>
          ) : (
            <div className="grid gap-4">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-1">
                        {job.title}
                      </h3>
                      <p className="text-orange-600 font-medium mb-2">{job.company}</p>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                        📍 {job.location || "Location not specified"}
                      </p>
                      {job.description && (
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-3">
                          {job.description}
                        </p>
                      )}
                      <div className="flex gap-2 items-center flex-wrap">
                        <span className="text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded">
                          {job.source}
                        </span>
                        {job.found_at && (
                          <span className="text-xs text-zinc-500 dark:text-zinc-400">
                            {new Date(job.found_at).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => handleToggleApplied(job)}
                        disabled={updatingJobId === job.id}
                        className="text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        {job.applied ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          <Circle className="w-6 h-6" />
                        )}
                      </button>
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </main>
      </div>
    </>
  );
}
