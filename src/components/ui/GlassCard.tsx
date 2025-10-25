"use client";

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
    "glass-card relative overflow-hidden rounded-xl bg-glass border border-glass-border p-6 transition-transform duration-300";

  return (
    <div className={cn(baseClasses, animate && "hover:scale-[1.01]", className)}>
      {children}
    </div>
  );
};
