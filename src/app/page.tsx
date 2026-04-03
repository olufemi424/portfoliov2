import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_#f8fafc_0%,_#eef2ff_35%,_#e2e8f0_100%)]">
      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center px-4 py-12 sm:px-8">
        <div className="h-[78vh] w-full max-w-6xl rounded-[36px] border border-white/40 bg-white/22 shadow-[0_20px_80px_rgba(15,23,42,0.16)] backdrop-blur-2xl" />
      </div>

      <div className="relative z-10 py-10 sm:py-14 md:py-20">
        <HeroSection />
      </div>
    </main>
  );
}
