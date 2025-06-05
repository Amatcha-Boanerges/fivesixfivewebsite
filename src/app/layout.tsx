import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "fivesixfive";
const siteUrl = "https://fivesixfive.com"; // PLEASE UPDATE with your actual production URL
const twitterHandle = "@fivesixfive"; // PLEASE UPDATE with your actual Twitter handle

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Your Growth Partner`,
    template: `%s | ${siteName}`,
  },
  description: "Welcome to the official website of fivesixfive. We Empower Your People. We Accelerate Your Growth..",
  
  // Open Graph Metadata
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteName} | Your Growth Partner`,
    description: "Empowering Your People. Accelerating Your Growth.", // Slightly shorter for OG
    siteName: siteName,
    images: [
      {
        url: "/og-image.png", // Placeholder: /public/og-image.png (1200x630)
        width: 1200,
        height: 630,
        alt: `Open Graph image for ${siteName}`,
      },
    ],
  },

  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    site: twitterHandle,
    creator: twitterHandle, // Or individual author's handle if preferred
    title: `${siteName} | Your Growth Partner`,
    description: "Empowering Your People. Accelerating Your Growth.",
    images: ["/twitter-image.png"], // Placeholder: /public/twitter-image.png (e.g., 1200x600 or 1:1 ratio)
  },
  
  // Additional relevant metadata
  applicationName: siteName,
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "default",
  },
  // TODO: Add more specific metadata like icons, manifest, theme-color
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
