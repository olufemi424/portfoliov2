"use client";

import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

type IconSpec = {
  id: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const ICONS: IconSpec[] = [
  { id: "github", label: "GitHub", Icon: FaGithub },
  { id: "linkedin", label: "LinkedIn", Icon: FaLinkedin },
  { id: "twitter", label: "Twitter", Icon: FaTwitter },
];

export const HtmlInCanvasDemo = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [supported, setSupported] = useState(false);
  const [activeIcon, setActiveIcon] = useState<string>(ICONS[0].id);

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

    const bg = ctx.createLinearGradient(0, 0, width, height);
    bg.addColorStop(0, "#020617");
    bg.addColorStop(0.5, "#0f172a");
    bg.addColorStop(1, "#111827");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    const glowX = activeIcon === "github" ? 160 : activeIcon === "linkedin" ? 380 : 600;
    const glow = ctx.createRadialGradient(glowX, 90, 10, glowX, 90, 160);
    glow.addColorStop(0, "rgba(125,211,252,0.45)");
    glow.addColorStop(1, "rgba(125,211,252,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(255,255,255,0.16)";
    ctx.lineWidth = 1;
    ctx.strokeRect(16, 16, width - 32, height - 32);

    ctx.fillStyle = "rgba(255,255,255,0.96)";
    ctx.font = "700 24px Inter, system-ui, sans-serif";
    ctx.fillText("Dramatic Focus Demo", 30, 58);

    ctx.fillStyle = "rgba(255,255,255,0.72)";
    ctx.font = "400 14px Inter, system-ui, sans-serif";
    ctx.fillText(
      supported
        ? "API detected: this is where html-in-canvas layered effects get interesting."
        : "Fallback mode: this still previews the interaction direction safely.",
      30,
      84
    );

    const labels = ["GitHub", "LinkedIn", "Twitter"];
    labels.forEach((label, index) => {
      const x = 110 + index * 220;
      const y = 132;
      const isActive =
        (activeIcon === "github" && index === 0) ||
        (activeIcon === "linkedin" && index === 1) ||
        (activeIcon === "twitter" && index === 2);

      ctx.beginPath();
      ctx.arc(x, y, 36, 0, Math.PI * 2);
      ctx.fillStyle = isActive ? "rgba(125,211,252,0.24)" : "rgba(255,255,255,0.08)";
      ctx.fill();
      ctx.lineWidth = isActive ? 3 : 1;
      ctx.strokeStyle = isActive ? "rgba(125,211,252,0.95)" : "rgba(255,255,255,0.24)";
      ctx.stroke();

      if (isActive) {
        ctx.beginPath();
        ctx.arc(x, y, 48, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(125,211,252,0.35)";
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      ctx.fillStyle = "rgba(255,255,255,0.84)";
      ctx.font = "600 12px Inter, system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(label, x, y + 58);
    });
  }, [supported, activeIcon]);

  return (
    <div className="mt-8 rounded-2xl border border-black/10 bg-black/[0.02] p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-wider text-black/45">Experimental preview</p>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
            supported ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
          }`}
        >
          {supported ? "API detected" : "Fallback mode"}
        </span>
      </div>

      <canvas
        ref={canvasRef}
        width={760}
        height={190}
        className="h-auto w-full rounded-xl"
        aria-label="HTML in canvas dramatic icon focus demo"
      />

      <div className="mt-4 flex flex-wrap gap-3">
        {ICONS.map(({ id, label, Icon }) => {
          const isActive = id === activeIcon;
          return (
            <button
              key={id}
              type="button"
              onMouseEnter={() => setActiveIcon(id)}
              onFocus={() => setActiveIcon(id)}
              onClick={() => setActiveIcon(id)}
              className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all ${
                isActive
                  ? "border-sky-300 bg-sky-100/70 text-sky-900 shadow-[0_0_0_3px_rgba(125,211,252,0.25)]"
                  : "border-black/10 bg-white text-black/70 hover:border-black/20 hover:bg-black/[0.03]"
              }`}
              aria-pressed={isActive}
            >
              <Icon
                className={`h-4 w-4 transition-transform ${
                  isActive ? "scale-110" : "group-hover:scale-105"
                }`}
              />
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-sm text-black/60">
        Hover/focus the icon chips above. This simulates a more dramatic, canvas-backed focus system for
        social icons while keeping the rest of the page minimal.
      </p>
    </div>
  );
};
