import type { MetadataRoute } from "next";
import { lastUpdated } from "@/data/game";
import { navItems } from "@/lib/navigation";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({
    url: absoluteUrl(item.href),
    lastModified: new Date(lastUpdated),
    changeFrequency: item.href === "/" ? "daily" : "weekly",
    priority: item.href === "/" ? 1 : 0.8
  }));
}
