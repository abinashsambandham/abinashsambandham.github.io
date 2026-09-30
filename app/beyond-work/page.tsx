import type { Metadata } from "next";
import Logo from "@/components/Logo";
import JsonLd from "@/components/JsonLd";
import { InstagramIcon, YouTubeIcon } from "@/components/Creator";
import { gallery, profile, site, type Photo } from "@/data/content";

const pageUrl = `${site.url}${gallery.path}`;
const chip =
  "inline-flex h-11 items-center gap-2 rounded-full border border-line px-4 text-sm text-muted transition-colors hover:border-accent hover:text-accent";

export const metadata: Metadata = {
  title: gallery.metaTitle,
  description: gallery.description,
  alternates: { canonical: gallery.path },
  openGraph: {
    title: gallery.metaTitle,
    description: gallery.description,
    url: pageUrl,
    siteName: profile.name,
    type: "website",
    images: [{ url: "/photos/abinash-sambandham-working-on-laptop.jpg", width: 1200, height: 1600, alt: gallery.photos[0].alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: gallery.metaTitle,
    description: gallery.description,
    images: ["/photos/abinash-sambandham-working-on-laptop.jpg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: profile.name, item: `${site.url}/` },
    { "@type": "ListItem", position: 2, name: gallery.label, item: pageUrl },
  ],
};

// Each photo is an ImageObject "about" the same Person the homepage describes.
const galleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: gallery.metaTitle,
  description: gallery.description,
  url: pageUrl,
  about: { "@id": `${site.url}/#person` },
  image: gallery.photos.map((p) => ({
    "@type": "ImageObject",
    contentUrl: `${site.url}${p.src}`,
    url: `${site.url}${p.src}`,
    caption: p.caption,
    description: p.alt,
    width: p.width,
    height: p.height,
    creditText: profile.name,
    copyrightNotice: `© ${profile.name}`,
    about: { "@type": "Person", "@id": `${site.url}/#person`, name: profile.name },
  })),
};

// Greedy masonry: caption height is roughly 0.12 of a column's width at desktop sizes.
function toColumns(photos: Photo[], count: number) {
  const cols: { photo: Photo; index: number }[][] = Array.from({ length: count }, () => []);
  const heights = new Array(count).fill(0);
  photos.forEach((photo, index) => {
    const c = heights.indexOf(Math.min(...heights));
    cols[c].push({ photo, index });
    heights[c] += photo.height / photo.width + 0.12;
  });
  return cols;
}

const desktopColumns = toColumns(gallery.photos, 3);

function PhotoCard({ photo, eager }: { photo: Photo; eager: boolean }) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <figcaption className="border-t border-line px-4 py-3 text-sm text-muted">{photo.caption}</figcaption>
    </figure>
  );
}

export default function BeyondWorkPage() {
  return (
    <>
      <JsonLd data={galleryJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <header className="sticky top-0 z-30 border-b border-line/70 bg-bg/80 backdrop-blur-md">
        <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="/" className="flex items-center gap-3">
            <Logo className="h-7 w-7 shrink-0 text-accent" />
            <span className="whitespace-nowrap font-display text-[15px] font-medium leading-none tracking-[-0.02em] sm:text-lg">
              Abinash <span className="text-accent">Sambandham</span>
            </span>
          </a>
          <a
            href="/"
            className="flex h-11 items-center rounded-lg border border-line px-3.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <span aria-hidden>←</span>
            <span className="ml-1.5 hidden sm:inline">Back to portfolio</span>
            <span className="ml-1.5 sm:hidden">Portfolio</span>
          </a>
        </nav>
      </header>

      <main id="main" className="mx-auto max-w-6xl px-5 pb-8 pt-14 sm:px-8 sm:pt-20">
        <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          <span className="h-px w-8 bg-accent" />
          {gallery.label}
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl">
          Abinash Sambandham,{" "}
          <span className="bg-gradient-to-r from-[#f2efe9] via-[#e9d9b8] to-[#b99a62] bg-clip-text text-transparent">
            beyond work
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{gallery.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={profile.instagram} target="_blank" rel="noreferrer" className={chip}>
            <InstagramIcon /> @buildwithabinash · Finance
          </a>
          <a href={profile.youtube} target="_blank" rel="noreferrer" className={chip}>
            <YouTubeIcon /> Build with Abinash · YouTube
          </a>
          <a href={profile.instagramPersonal} target="_blank" rel="noreferrer" className={chip}>
            <InstagramIcon /> @abinashh28 · Personal
          </a>
        </div>

        {/* Desktop: photos placed left to right, each into the currently shortest column, so the first row
            leads with the work photos and the columns finish level. Smaller screens use simple columns. */}
        <div className="mt-12 hidden gap-5 lg:flex">
          {desktopColumns.map((col, c) => (
            <div key={c} className="flex min-w-0 flex-1 flex-col gap-5">
              {col.map(({ photo, index }) => (
                <PhotoCard key={photo.src} photo={photo} eager={index < 3} />
              ))}
            </div>
          ))}
        </div>
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:hidden">
          {gallery.photos.map((p, i) => (
            <div key={p.src} className="mb-5 break-inside-avoid">
              <PhotoCard photo={p} eager={i < 2} />
            </div>
          ))}
        </div>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 border-t border-line px-5 py-10 text-xs text-muted sm:px-8">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </span>
        <a href="/" className="hover:text-accent">
          Back to portfolio
        </a>
      </footer>
    </>
  );
}
