import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olufemiaf.info"),
  title: "Olufemi Afolabi - Portfolio",
  description: "Software Engineer & Solutions Architect Portfolio",
  openGraph: {
    title: "Olufemi Afolabi",
    description: "Software Engineer & Solutions Architect Portfolio",
    url: "https://olufemiaf.info",
    images: [
      {
        url: "/preview-image.png",
      },
    ],
  },
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
      <body className={`${courierPrime.className}`}>
        <main className="portfolio__main">{children}</main>
      </body>
    </html>
  );
}
