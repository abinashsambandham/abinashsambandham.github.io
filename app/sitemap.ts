import type { MetadataRoute } from "next";
import { gallery, site } from "@/data/content";

export const dynamic = "force-static";

// Lists each page with the images on it, so photos are indexed in Google Images against the name.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${site.url}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${site.url}/abinash-sambandham-portrait.jpg`, `${site.url}/opengraph-image.png`],
    },
    {
      url: `${site.url}${gallery.path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
      images: gallery.photos.map((p) => `${site.url}${p.src}`),
    },
  ];
}
