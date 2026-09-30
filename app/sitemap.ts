import type { MetadataRoute } from "next";
import { gallery, site } from "@/data/content";

export const dynamic = "force-static";

// Lists the homepage with every photo on it, so they are indexed in Google Images against the name.
// /beyond-work/ is left out on purpose: it is noindex, so it stays out of web results.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${site.url}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      images: [...gallery.photos.map((p) => `${site.url}${p.src}`), `${site.url}/opengraph-image.png`],
    },
  ];
}
