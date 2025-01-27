"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

/**
 * A modern glass-effect card component with optional animation
 * @param {ReactNode} children - Content to be rendered inside the card
 * @param {string} className - Additional CSS classes
 * @param {boolean} animate - Whether to animate the card on hover
 */
export const GlassCard = ({
  children,
  className,
  animate = true,
}: GlassCardProps) => {
  const baseClasses =
    "glass-card relative overflow-hidden rounded-xl bg-glass border border-glass-border backdrop-blur-sm p-6";

  return animate ? (
    <motion.div
      className={cn(baseClasses, "glass-card--animated", className)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
      <div className="glass-card__gradient glass-card__gradient--animated absolute inset-0 opacity-20 pointer-events-none" />
    </motion.div>
  ) : (
    <div className={cn(baseClasses, "glass-card--static", className)}>
      {children}
      <div className="glass-card__gradient glass-card__gradient--static absolute inset-0 opacity-20 pointer-events-none" />
    </div>
  );
};
