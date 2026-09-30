import Section from "./Section";
import { gallery } from "@/data/content";

// Every gallery photo has -480 and -960 AVIF copies beside the JPEG (see README).
export function avifSrcSet(src: string) {
  const base = src.replace(/\.jpg$/, "");
  return `${base}-480.avif 480w, ${base}-960.avif 960w`;
}

// The hero portrait and the finance photo already appear higher up the page.
const shown = gallery.photos.filter(
  (p) => p.src !== "/abinash-sambandham-portrait.jpg" && !p.src.endsWith("-finance-video.jpg"),
);

// A contact sheet of photos beyond work. They live on the homepage so Google Images indexes them
// against this page (the /beyond-work/ page itself is kept out of search results).
export default function Photos() {
  return (
    <Section id="photos" eyebrow={gallery.label} title="Off the clock" intro={gallery.intro}>
      <ul data-reveal className="grid grid-cols-4 gap-2 sm:gap-3 lg:grid-cols-8">
        {shown.map((p) => (
          <li key={p.src} className="group relative aspect-square overflow-hidden rounded-xl border border-line bg-surface">
            <picture>
              <source type="image/avif" srcSet={avifSrcSet(p.src)} sizes="(min-width: 1024px) 140px, 25vw" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                title={p.caption}
                width={p.width}
                height={p.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-[50%_30%] transition-transform duration-700 group-hover:scale-[1.06]"
              />
            </picture>
          </li>
        ))}
      </ul>
      <a
        href={gallery.path}
        className="mt-6 inline-flex h-11 items-center gap-2 rounded-lg border border-line px-4 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
      >
        See the full gallery <span aria-hidden>→</span>
      </a>
    </Section>
  );
}
