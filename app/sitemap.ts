import type { MetadataRoute } from "next";
import { locations } from "./locations/location-data";
import { guides } from "./alarm-guides/guides";
import { siteUrl } from "./site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/alarms`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/cctv`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/autumn-offer`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${siteUrl}/alarm-guides`, changeFrequency: "monthly", priority: 0.8 },
    ...guides.map(guide => ({ url: `${siteUrl}/alarm-guides/${guide.slug}`, lastModified: new Date("2026-10-19T09:00:00Z"), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...locations.map((location) => ({
      url: `${siteUrl}/locations/${location.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
