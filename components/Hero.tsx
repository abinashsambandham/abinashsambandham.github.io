import { profile, hero } from "@/data/content";
import { CountUp } from "./Motion";
import MobileHero from "./MobileHero";

const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

// The hero is always dark so it blends with the portrait's black backdrop.
// Phones and tablets get MobileHero; the three-column layout below is for desktop.
export default function Hero() {
  const words = [...hero.expertise, hero.expertise[0]];

  return (
    <section id="top" className="relative overflow-hidden bg-[#010101] text-[#f2efe9]">
      <div className="lg:hidden">
        <MobileHero />
      </div>

      <div className="relative hidden lg:block">
      {/* Faint grid fading out towards the edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_50%_40%,black_20%,transparent_75%)]"
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl grid-cols-2 content-center px-8 pb-32 pt-24">
        {/* Left: identity */}
        <div className="relative z-10 max-w-[500px]">
          <p className="rise flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#d9b779]" style={d(0.1)}>
            <span className="h-px w-8 bg-[#d9b779]" />
            {hero.eyebrow}
          </p>
          <h1
            className="rise mt-6 text-7xl font-semibold leading-[0.95] tracking-[-0.045em] xl:text-[5.5rem]"
            style={d(0.2)}
          >
            Abinash{" "}
            <br />
            <span className="bg-gradient-to-r from-[#f2efe9] via-[#e9d9b8] to-[#b99a62] bg-clip-text text-transparent">
              Sambandham
            </span>
          </h1>
          <p className="rise mt-7 max-w-md text-xl leading-relaxed text-[#b9b5ab]" style={d(0.35)}>
            {hero.tagline}
          </p>

          <div className="rise mt-10 flex flex-wrap items-center gap-3" style={d(0.5)}>
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-[#f2efe9] py-3 pl-6 pr-3 text-sm font-medium text-[#0b0a08] transition-all hover:bg-white hover:shadow-[0_0_40px_rgba(217,183,121,0.25)]"
            >
              View my work
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0b0a08] text-[#f2efe9] transition-transform duration-300 group-hover:translate-x-1">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M1 6h9M7 2.5 10.5 6 7 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a
              href={profile.resume}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-[#f2efe9] transition-colors hover:border-[#d9b779] hover:text-[#d9b779]"
            >
              Download CV
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M8 2v8m0 0 3-3m-3 3L5 7M2.5 13.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Centre: portrait with a soft glow and slowly turning orbit rings */}
        <div className="absolute bottom-0 left-1/2 top-6 w-[32%] max-w-[480px] -translate-x-1/2">
          <div aria-hidden className="glow-pulse absolute left-1/2 top-[38%] h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(217,183,121,0.16),transparent)]" />
          <div aria-hidden className="absolute hidden xl:block left-1/2 top-[36%] aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2">
            <div className="spin-slow relative h-full w-full rounded-full border border-dashed border-white/[0.07]">
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9b779] shadow-[0_0_12px_#d9b779]" />
            </div>
          </div>
          <div aria-hidden className="absolute hidden xl:block left-1/2 top-[36%] aspect-square w-[96%] -translate-x-1/2 -translate-y-1/2">
            <div className="spin-slower relative h-full w-full rounded-full border border-white/[0.04]">
              <span className="absolute bottom-[14%] right-[6%] h-1.5 w-1.5 rounded-full bg-[#8fbfa8]" />
            </div>
          </div>

          <div className="portrait-in relative h-full w-full">
            <picture className="block h-full w-full">
              <source type="image/avif" srcSet="/abinash-portrait-560.avif 560w, /abinash-portrait-974.avif 974w" sizes="(min-width: 1024px) 480px, 74vw" />
              <source type="image/jpeg" srcSet="/abinash-portrait-560.jpg 560w, /abinash-portrait.jpg 974w" sizes="(min-width: 1024px) 480px, 74vw" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/abinash-portrait.jpg"
                alt={`Portrait of ${profile.name}`}
                width={974}
                height={1336}
                decoding="async"
                className="breathe h-full w-full object-cover object-[50%_15%] [mask-image:radial-gradient(ellipse_62%_70%_at_50%_42%,black_55%,transparent_100%)]"
              />
            </picture>
          </div>
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#010101] to-transparent" />
        </div>

        {/* Right: what I do */}
        <div className="relative z-10 ml-auto max-w-[330px] self-center pt-20">
          <p className="rise text-sm text-[#9a978f]" style={d(0.55)}>
            {hero.expertLabel}
          </p>
          <p
            className="rise mt-2 h-[1.3em] overflow-hidden text-3xl font-semibold leading-[1.3em] tracking-tight"
            style={d(0.6)}
            aria-label={hero.expertise.join(", ")}
          >
            <span className="words block" aria-hidden>
              {words.map((w, i) => (
                <span key={i} className="block text-[#d9b779]">
                  {w}
                </span>
              ))}
            </span>
          </p>
          <p className="rise mt-5 text-[15px] leading-relaxed text-[#a9a59c]" style={d(0.7)}>
            {hero.body}
          </p>

          <dl className="rise mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6" style={d(0.85)}>
            {hero.quickStats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-semibold tracking-tight">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-1 text-xs leading-snug text-[#8a877f]">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Bottom bar: socials, scroll cue, location */}
      <div className="rise absolute inset-x-0 bottom-0 z-10" style={d(1)}>
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-8 pb-8">
          <div className="flex items-center gap-3">
            <SocialLink href={profile.linkedin} label="LinkedIn">
              <path d="M4.5 9.5v10M4.5 5.5v.01M9.5 19.5v-6a3 3 0 0 1 6 0v6M9.5 9.5v10" />
            </SocialLink>
            <SocialLink href={profile.github} label="GitHub">
              <path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
            </SocialLink>
            <SocialLink href={`mailto:${profile.email}`} label="Email">
              <path d="M3.5 6.5h17v11h-17zM3.5 6.5l8.5 6.5 8.5-6.5" />
            </SocialLink>
            <a href={`mailto:${profile.email}`} className="link-draw ml-3 pb-0.5 text-sm text-[#bdb9b0] hover:text-[#f2efe9]">
              {profile.email}
            </a>
          </div>

          <a href="#highlights" aria-label="Scroll down" className="absolute left-1/2 -translate-x-1/2">
            <span className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2">
              <span className="scroll-dot h-2 w-1 rounded-full bg-[#d9b779]" />
            </span>
          </a>

          <p className="flex items-center gap-2 text-sm text-[#bdb9b0]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8fbfa8] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8fbfa8]" />
            </span>
            {profile.location}
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-[#bdb9b0] transition-all hover:-translate-y-0.5 hover:border-[#d9b779] hover:text-[#d9b779]"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {children}
      </svg>
    </a>
  );
}
