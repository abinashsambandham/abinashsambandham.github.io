import { creator, profile } from "@/data/content";

// "Beyond engineering": the personal-finance channel, as a single card between Skills and Contact.
export default function Creator() {
  return (
    <section id="creator" aria-labelledby="creator-title" className="border-t border-line py-20 sm:py-24">
      <div data-reveal className="grid overflow-hidden rounded-3xl border border-line bg-surface md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="relative min-h-[320px] overflow-hidden md:min-h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photos/abinash-sambandham-finance-video.jpg"
            alt="Abinash Sambandham presenting a personal-finance video for Build with Abinash"
            width={900}
            height={1600}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[50%_20%]"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-surface" />
        </div>

        <div className="p-6 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{creator.eyebrow}</p>
          <h2 id="creator-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {creator.title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{creator.body}</p>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
            {creator.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-semibold tracking-tight sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-4 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
            >
              <InstagramIcon /> Instagram
            </a>
            <a
              href={profile.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-line bg-surface-2 px-4 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <YouTubeIcon /> YouTube
            </a>
          </div>
          <p className="mt-5 text-xs text-muted">{creator.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}

export function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8v.01" />
    </svg>
  );
}

export function YouTubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10.5 9.5 4 2.5-4 2.5z" fill="currentColor" />
    </svg>
  );
}
