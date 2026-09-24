import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profile, site, skills } from "@/data/content";
import Analytics from "@/components/Analytics";

// Used only for the wordmark in the nav.
const display = Space_Grotesk({ weight: "500", subsets: ["latin"], variable: "--font-space-grotesk" });

const title = `${profile.name} | ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: profile.intro,
  keywords: site.keywords,
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: profile.intro,
    url: site.url,
    siteName: profile.name,
    locale: "en_US",
    type: "profile",
  },
  twitter: { card: "summary_large_image", title, description: profile.intro },
  robots: { index: true, follow: true },
  verification: { google: site.googleVerification },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

// Structured data so search engines can show a rich result for the name.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: site.url,
  image: `${site.url}/abinash-portrait.jpg`,
  email: `mailto:${profile.email}`,
  worksFor: { "@type": "Organization", name: profile.company },
  address: { "@type": "PostalAddress", addressLocality: "Coimbatore", addressCountry: "IN" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Sri Shakthi Institute of Engineering and Technology" },
  knowsAbout: skills.slice(0, 3).flatMap((g) => g.items),
  sameAs: [profile.linkedin, profile.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${display.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
