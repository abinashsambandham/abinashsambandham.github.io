import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profile, site } from "@/data/content";
import Analytics from "@/components/Analytics";

// Used only for the wordmark in the nav.
const display = Space_Grotesk({ weight: "500", subsets: ["latin"], variable: "--font-space-grotesk" });

const title = `${profile.name} | ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  openGraph: {
    title,
    description: site.description,
    url: site.url,
    siteName: profile.name,
    locale: "en_US",
    type: "profile",
  },
  twitter: { card: "summary_large_image", title, description: site.description },
  // Let Google show full snippets and large image previews (Images, Discover) for this site.
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: { google: site.googleVerification },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${display.variable}`}>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
