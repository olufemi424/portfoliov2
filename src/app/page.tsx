import { HeroSection } from "@/components/sections/HeroSection";

/**
 * Home page component that serves as the main landing page
 * Features a modern, interactive portfolio layout with:
 * - Hero section with profile
 * - Project showcase
 * - Skills overview
 * - Contact information
 */
export default function Home() {
  return (
    <main className="portfolio__body">
      <HeroSection />
    </main>
  );
}
