"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type MenuItem = {
  label: string;
  href: string;
};

interface NavigationMenuProps {
  items: MenuItem[];
  accentColor?: string;
  skewEffect?: number;
  className?: string;
}

const MotionLink = motion.create(Link);

/**
 * Animated navigation menu component with Framer Motion effects
 * Features smooth hover animations and icon transitions
 */
export const NavigationMenu = ({
  items = [],
  accentColor = "#ff6900",
  skewEffect = 0,
  className = "",
}: NavigationMenuProps) => {
  return (
    <div className={`flex w-fit flex-col gap-4 px-10 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={`${item.href}-${index}`}
          className="group/nav flex items-center gap-2 cursor-pointer text-zinc-900 dark:text-zinc-50"
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            variants={{
              initial: { x: "-100%", color: "inherit", opacity: 0 },
              hover: { x: 0, color: accentColor, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="z-0"
          >
            <ArrowRight strokeWidth={3} className="size-10" />
          </motion.div>

          <MotionLink
            href={item.href}
            variants={{
              initial: { x: -40, color: "inherit" },
              hover: { x: 0, color: accentColor, skewX: skewEffect },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-semibold text-4xl no-underline"
          >
            {item.label}
          </MotionLink>
        </motion.div>
      ))}
    </div>
  );
};
