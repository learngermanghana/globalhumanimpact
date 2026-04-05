import type { MetadataRoute } from "next";

const baseUrl = "https://247-print-house.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/about", "/contact", "/quote", "/privacy"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
