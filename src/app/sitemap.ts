import type { MetadataRoute } from "next";
import { PAGES, SITE } from "@/lib/site";

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
  ];
}
