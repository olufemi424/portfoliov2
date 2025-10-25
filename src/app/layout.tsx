import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
      <Head>
        <title>Olufemi Afolabi</title>
        <meta property="og:title" content="Portfolio" key="Portfolio" />
        <meta
          property="og:description"
          content="Software Engineer & Solutions Architect Portfolio"
        />
        <meta property="og:image" content="/preview-image.png" />
        <meta property="og:url" content="https://olufemiaf.info" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <body className={`${inter.className}`}>
        <main className="portfolio__main">{children}</main>
      </body>
    </html>
  );
}
