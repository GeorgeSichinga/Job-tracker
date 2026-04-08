"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { getStats, type Stats } from "@/lib/api";
import { SpaceBackground } from "@/components/SpaceBackground";

export default function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {
    setLoading(true);
    const data = await getStats();
    setStats(data);
    setLoading(false);
  }
  return (
    <>
      <SpaceBackground particleCount={350} backgroundColor="#000000" />
      <div className="flex flex-col min-h-screen bg-black">
      <nav className="border-b border-zinc-800 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </nav>

      <main className="flex-1 px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dashboard
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Welcome back! Here's an overview of your job search activity.
          </p>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin">
                <div className="w-8 h-8 border-4 border-orange-200 border-t-orange-600 rounded-full"></div>
              </div>
              <p className="mt-4 text-gray-400">Loading statistics...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-sm font-semibold text-gray-400 mb-2">
                  Total Jobs
                </h3>
                <p className="text-4xl font-bold text-orange-600">
                  {stats?.total ?? 0}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-sm font-semibold text-gray-400 mb-2">
                  Applications
                </h3>
                <p className="text-4xl font-bold text-green-600">
                  {stats?.applied ?? 0}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-sm font-semibold text-gray-400 mb-2">
                  Remote Jobs
                </h3>
                <p className="text-4xl font-bold text-blue-600">
                  {stats?.remote ?? 0}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-sm font-semibold text-gray-400 mb-2">
                  Malawi Jobs
                </h3>
                <p className="text-4xl font-bold text-purple-600">
                  {stats?.malawi ?? 0}
                </p>
              </motion.div>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/jobs"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-lg transition-colors font-medium text-center"
              >
                Browse Jobs
              </Link>
              <Link
                href="/applications"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg transition-colors font-medium text-center"
              >
                View Applications
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </main>
      </div>
    </>
  );
}
