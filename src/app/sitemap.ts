import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/portfolio", "/quote", "/contact"]

  return routes.map((route) => ({
    url: `${SITE.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}
