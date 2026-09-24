import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { RevealObserver } from "@/components/Motion";
import { profile } from "@/data/content";

export default function Home() {
  return (
    <>
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
