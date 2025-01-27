"use client";

import { useEffect, useRef } from "react";

/**
 * Client component that handles mouse tracking for glass card effects and background
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 */
export default function MouseTrackingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Handle glass card effects
      const cards = document.getElementsByClassName("glass-card__gradient");
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      }

      // Handle background effect
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        containerRef.current.style.setProperty("--mouse-x", `${x}%`);
        containerRef.current.style.setProperty("--mouse-y", `${y}%`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="mouse-tracking relative min-h-screen">
      <div className="mouse-tracking__gradient absolute inset-0 pointer-events-none" />
      {children}
    </div>
  );
}
