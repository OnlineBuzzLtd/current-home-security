import type { MetadataRoute } from "next";
import { locations } from "./locations/location-data";
import { siteUrl } from "./site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/alarms`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/cctv`, changeFrequency: "monthly", priority: 0.9 },
    ...locations.map((location) => ({
      url: `${siteUrl}/locations/${location.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
