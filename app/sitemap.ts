import type { MetadataRoute } from "next";
import { site } from "@/data/content";

export const dynamic = "force-static";

// The site is a single page; listing its photos helps Google Images index them against the name.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${site.url}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${site.url}/abinash-sambandham-portrait.jpg`,
        `${site.url}/photos/abinash-sambandham-finance-video.jpg`,
        `${site.url}/opengraph-image.png`,
      ],
    },
  ];
}
