"use client";

import { useEffect, useRef, useState } from "react";

export const HtmlInCanvasDemo = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported(
      Object.prototype.hasOwnProperty.call(
        HTMLCanvasElement.prototype,
        "drawElementImage"
      )
    );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#0f172a");
    gradient.addColorStop(1, "#1e293b");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(255,255,255,0.16)";
    ctx.strokeRect(16, 16, width - 32, height - 32);

    ctx.fillStyle = "rgba(255,255,255,0.94)";
    ctx.font = "600 22px Inter, system-ui, sans-serif";
    ctx.fillText("HTML-in-Canvas (experimental)", 28, 58);

    ctx.fillStyle = "rgba(255,255,255,0.72)";
    ctx.font = "400 14px Inter, system-ui, sans-serif";
    ctx.fillText(
      supported
        ? "Browser API detected. Good candidate for subtle hero effects."
        : "Fallback preview. API not available in this browser yet.",
      28,
      86
    );

    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "500 13px Inter, system-ui, sans-serif";
    ctx.fillText("Use case: render rich hero typography into a canvas layer", 28, 126);
  }, [supported]);

  return (
    <div className="mt-8 rounded-2xl border border-black/10 bg-black/[0.02] p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-wider text-black/45">
          Experimental preview
        </p>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
            supported
              ? "bg-green-100 text-green-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {supported ? "API detected" : "Fallback mode"}
        </span>
      </div>

      <canvas
        ref={canvasRef}
        width={760}
        height={170}
        className="h-auto w-full rounded-xl"
        aria-label="HTML in canvas experiment preview"
      />

      <p className="mt-3 text-sm text-black/60">
        This block demonstrates how we can ship a minimal progressive enhancement:
        default HTML first, then optional canvas-rendered polish where supported.
      </p>
    </div>
  );
};
