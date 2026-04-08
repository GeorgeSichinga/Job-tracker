"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { SpaceBackground } from "@/components/SpaceBackground";

export default function Settings() {
  return (
    <>
      <SpaceBackground particleCount={350} backgroundColor="#000000" />
      <div className="flex flex-col min-h-screen bg-black">
      <nav className="border-b border-zinc-200 dark:border-zinc-800 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </nav>

      <main className="flex-1 px-6 py-12 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-8">
            Settings
          </h1>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                Profile
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                Preferences
              </h2>
              <div className="space-y-4">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded"
                  />
                  <span className="text-zinc-700 dark:text-zinc-300">
                    Email notifications
                  </span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded"
                  />
                  <span className="text-zinc-700 dark:text-zinc-300">
                    Weekly summary
                  </span>
                </label>
              </div>
            </motion.div>

            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors font-medium">
              Save Changes
            </button>
          </div>
        </motion.div>
      </main>
      </div>
    </>
  );
}
