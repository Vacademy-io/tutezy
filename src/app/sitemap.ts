import type { MetadataRoute } from "next";
import { PAGES, SITE } from "@/lib/site";
import { POSTS, postPath } from "@/content/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    ...PAGES.map((p) => ({
      url: `${SITE}${p.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: p.group === "product" ? 0.9 : 0.8,
    })),
    ...POSTS.map((p) => ({
      url: `${SITE}${postPath(p.slug)}`,
      lastModified: new Date(`${p.updated ?? p.published}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
