"use client";

import { NavigationMenu } from "@/components/navigation";
import { Warp } from "@paper-design/shaders-react";
import { motion } from "framer-motion";

const menuItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Jobs", href: "/jobs" },
  { label: "Applications", href: "/applications" },
  { label: "Settings", href: "/settings" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Warp
          style={{ width: "100%", height: "100%" }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={1}
          colors={["hsl(203, 100%, 62%)", "hsl(255, 100%, 72%)", "hsl(158, 99%, 59%)", "hsl(264, 100%, 61%)"]}
        />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex flex-1 flex-col items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              JobWatch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Track your job applications and stay organized throughout your job search journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <NavigationMenu items={menuItems} accentColor="#ff6900" skewEffect={0} />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
