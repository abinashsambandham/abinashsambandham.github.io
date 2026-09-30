import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Creator from "@/components/Creator";
import { RevealObserver } from "@/components/Motion";
import { profile, site, skills } from "@/data/content";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const title = `${profile.name} | ${profile.role}`;

// Structured data: a ProfilePage whose main entity is the person, so Google can treat this site as
// the official profile of Abinash Sambandham (and show his photo against the name).
const portrait = `${site.url}/abinash-sambandham-portrait.jpg`;
const photo = (file: string) => `${site.url}${file}`;
const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${site.url}/#profilepage`,
  url: site.url,
  isPartOf: { "@id": `${site.url}/#website` },
  name: title,
  dateModified: new Date().toISOString(),
  mainEntity: {
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: profile.name,
    alternateName: ["Abinash", "Abinash S"],
    givenName: "Abinash",
    familyName: "Sambandham",
    jobTitle: profile.role,
    description: site.description,
    url: site.url,
    image: [
      { "@type": "ImageObject", contentUrl: portrait, url: portrait, width: 974, height: 1336, caption: site.portraitAlt },
      photo("/photos/abinash-sambandham-finance-video.jpg"),
    ],
    email: `mailto:${profile.email}`,
    worksFor: { "@type": "Organization", name: profile.company, url: site.companyUrl },
    address: { "@type": "PostalAddress", addressLocality: "Coimbatore", addressRegion: "Tamil Nadu", addressCountry: "IN" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Sri Shakthi Institute of Engineering and Technology" },
    knowsAbout: skills.slice(0, 3).flatMap((g) => g.items),
    sameAs: [profile.linkedin, profile.github, profile.instagram, profile.youtube, profile.instagramPersonal],
    mainEntityOfPage: { "@id": `${site.url}/#profilepage` },
  },
};

// Tells Google the site's name, so results can show "Abinash Sambandham" as the site name.
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: `${site.url}/`,
  name: profile.name,
  alternateName: ["Abinash S", "abinashsambandham.github.io"],
  inLanguage: "en",
  publisher: { "@id": `${site.url}/#person` },
};


export default function Home() {
  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={profileJsonLd} />
      <RevealObserver />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-on-accent"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <div className="mx-auto max-w-6xl overflow-x-clip px-5 sm:px-8">
          <Highlights />
          <About />
          <Work />
          <Experience />
          <Skills />
          <Creator />
          <Contact />
        </div>
      </main>
      <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 border-t border-line px-5 py-10 text-xs text-muted sm:px-8">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </span>
        <span>
          {profile.location} · <a href={`mailto:${profile.email}`} className="hover:text-accent">{profile.email}</a>
        </span>
      </footer>
    </>
  );
}
