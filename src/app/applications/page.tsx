"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Plus } from "lucide-react";
import { SpaceBackground } from "@/components/SpaceBackground";

export default function Applications() {
  const applications = []; // placeholder for applications list

  return (
    <>
      <SpaceBackground particleCount={350} backgroundColor="#000000" />
      <div className="flex flex-col min-h-screen bg-black">
      <nav className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          New Application
        </button>
      </nav>

      <main className="flex-1 px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Applications
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-8">
            Track all your job applications and their status.
          </p>

          <div className="mb-6 flex gap-3">
            <button className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
              All
            </button>
            <button className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
              Pending
            </button>
            <button className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
              Accepted
            </button>
            <button className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
              Rejected
            </button>
          </div>

          {applications.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-zinc-800 rounded-lg p-12 text-center shadow-sm"
            >
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                No applications yet. Start tracking your job applications here.
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors">
                Add Application
              </button>
            </motion.div>
          ) : (
            <div className="grid gap-4">
              {/* Applications list will go here */}
            </div>
          )}
        </motion.div>
      </main>
      </div>
    </>
  );
}
