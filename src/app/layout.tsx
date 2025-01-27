import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MouseTrackingProvider from "@/components/MouseTrackingProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olufemi Afolabi - Portfolio",
  description: "Software Engineer & Solutions Architect Portfolio",
};

/**
 * Root layout component that provides the base structure and styling
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="portfolio scroll-smooth">
      <body className={`${inter.className} gradient-background`}>
        <MouseTrackingProvider>
          <main className="portfolio__main">{children}</main>
        </MouseTrackingProvider>
      </body>
    </html>
  );
}
