import { profile, hero } from "@/data/content";

const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

// Head outline in the original photo's pixels (974 × 1336).
const HEAD = { cx: 600, cy: 380, rx: 200, ry: 250 };

function Portrait({ className = "", children, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={`portrait-in absolute right-0 top-10 aspect-[289/590] w-[74%] max-w-[360px] overflow-hidden sm:bottom-[150px] sm:aspect-auto sm:max-w-[460px] [mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.45)_22%,#000_55%)] ${className}`}
    >
      <div className="h-full w-full [mask-image:linear-gradient(180deg,#000_60%,transparent_100%)]">{children}</div>
    </div>
  );
}

// Phone and tablet hero ("Bento, blended"): portrait on the right fading into the page, content on the left,
// impact stats beside the photo, the two actions below the arm, and the expertise carousel along the bottom.
export default function MobileHero() {
  const expertise = [...hero.expertise, ...hero.expertiseMore];

  return (
    <div className="relative flex min-h-[calc(100svh-4rem)] flex-col px-5 pb-4 pt-[18px] sm:px-8">
      {/* Portrait, drawn twice with identical fades: once behind the text, and once in front of it cut out to
          the head, so the end of the name sits behind the head. The cut-out lives in the photo's own
          coordinates (SVG viewBox), so it stays aligned at every screen size. */}
      <Portrait className="z-0">
        <picture className="block h-full w-full">
          <source type="image/avif" srcSet="/abinash-portrait-560.avif 560w, /abinash-portrait-974.avif 974w" sizes="(min-width: 1024px) 480px, 74vw" />
          <source type="image/jpeg" srcSet="/abinash-portrait-560.jpg 560w, /abinash-portrait.jpg 974w" sizes="(min-width: 1024px) 480px, 74vw" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/abinash-portrait.jpg"
            alt={`Portrait of ${profile.name}`}
            width={974}
            height={1336}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-[50%_0%]"
          />
        </picture>
      </Portrait>
      <Portrait className="pointer-events-none z-20" aria-hidden>
        <svg viewBox="0 0 974 1336" preserveAspectRatio="xMidYMin slice" className="h-full w-full">
          <defs>
            <radialGradient id="head-fade">
              <stop offset="0.9" stopColor="#fff" />
              <stop offset="1" stopColor="#000" />
            </radialGradient>
            <mask id="head-mask">
              <ellipse cx={HEAD.cx} cy={HEAD.cy} rx={HEAD.rx} ry={HEAD.ry} fill="url(#head-fade)" />
            </mask>
          </defs>
          <image href="/abinash-portrait-974.avif" width="974" height="1336" mask="url(#head-mask)" />
        </svg>
      </Portrait>

      {/* Left column */}
      <p className="rise relative z-30 flex items-center gap-2.5 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.16em] text-[#d9b779] min-[360px]:text-[11px] min-[360px]:tracking-[0.22em]" style={d(0.1)}>
        <span className="h-px w-7 bg-[#d9b779]" />
        {hero.eyebrow}
      </p>

      <h1 className="rise relative z-10 mt-[47px] text-[min(9.75vw,42px)] font-semibold leading-[0.95] tracking-[-0.045em] sm:mt-16 sm:text-6xl" style={d(0.2)}>
        Abinash{" "}
        <br />
        <span className="bg-gradient-to-r from-[#f2efe9] via-[#e9d9b8] to-[#b99a62] bg-clip-text text-transparent">Sambandham</span>
      </h1>

      <div className="rise relative z-30 mt-[max(22px,calc(22px_+_(100svh_-_844px)_*_0.2))] flex w-[150px] flex-col gap-[5px] sm:mt-8 sm:w-[240px]" style={d(0.3)}>
        <span className="flex items-center gap-2 text-[11px] text-[#9a978f]">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#8fbfa8] shadow-[0_0_0_4px_rgba(143,191,168,0.15)]" />
          Currently
        </span>
        <span className="text-[15px] font-semibold leading-tight">Technical Lead, AI</span>
        <span className="text-xs text-[#9a978f]">at {profile.company}</span>
      </div>

      <p className="rise relative z-30 mt-3.5 w-[170px] text-[15px] leading-[1.45] text-[#c3bfb5] sm:mt-5 sm:w-[300px] sm:text-lg" style={d(0.38)}>
        {hero.tagline}
      </p>

      <div className="rise relative z-30 mt-[max(26px,calc(26px_+_(100svh_-_844px)_*_0.35))] flex w-[160px] flex-col gap-3.5 sm:mt-10 sm:w-[240px] sm:gap-5" style={d(0.46)}>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#d9b779]">Impact</span>
        <dl className="flex flex-col gap-3.5">
          {hero.impact.map((s, i) => (
            <div key={s.label} className="flex flex-col gap-3.5">
              {i > 0 && <span aria-hidden className="h-px w-[150px] bg-gradient-to-r from-white/15 to-transparent" />}
              <div className="flex flex-col gap-[3px]">
                <dt className="text-[26px] font-semibold leading-none tracking-[-0.03em] sm:text-4xl">{s.value}</dt>
                <dd className="text-xs leading-snug text-[#9a978f] sm:text-sm">{s.label}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      <div className="rise relative z-30 mt-[max(22px,calc(22px_+_(100svh_-_844px)_*_0.35))] grid grid-cols-1 gap-2.5 min-[360px]:grid-cols-2 sm:mt-10 sm:max-w-[440px]" style={d(0.54)}>
        <a
          href="#work"
          className="flex h-[50px] items-center justify-between gap-2 whitespace-nowrap rounded-full bg-[#f2efe9] pl-4 pr-[7px] text-sm font-medium text-[#0b0a08] min-[380px]:pl-[18px] min-[380px]:text-[15px]"
        >
          View my work
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0b0a08] text-[#f2efe9] min-[380px]:h-9 min-[380px]:w-9">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M1 6h9M7 2.5 10.5 6 7 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
        <a
          href={profile.resume}
          className="flex h-[50px] items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/[0.18] bg-[#010101]/60 px-3 text-sm font-medium text-[#f2efe9] min-[380px]:px-4 min-[380px]:text-[15px]"
        >
          Download CV
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M8 2v8m0 0 3-3m-3 3L5 7M2.5 13.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Expertise and stack carousel */}
      <div className="rise relative z-30 -mx-5 mt-auto flex flex-col gap-2.5 border-t border-white/[0.08] pt-3.5 sm:-mx-8" style={d(0.62)}>
        <span className="px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#d9b779] sm:px-8">{hero.expertLabel}</span>
        <p className="sr-only">{expertise.join(", ")}</p>
        <div aria-hidden className="relative overflow-hidden">
          <div className="marquee-a flex w-max gap-2 pl-5">
            {[...expertise, ...expertise].map((t, i) => (
              <span key={i} className="whitespace-nowrap rounded-full border border-white/[0.12] px-3.5 py-2 text-[13px] text-[#d6d3cc]">
                {t}
              </span>
            ))}
          </div>
          <div className="marquee-b mt-2 flex w-max gap-2 pl-5">
            {[...hero.stack, ...hero.stack].map((t, i) => (
              <span key={i} className="whitespace-nowrap rounded-full bg-[#d9b779]/[0.07] px-3.5 py-2 font-mono text-xs text-[#bdb9b0]">
                {t}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-7 bg-gradient-to-r from-[#010101] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#010101] to-transparent" />
        </div>
      </div>
    </div>
  );
}
