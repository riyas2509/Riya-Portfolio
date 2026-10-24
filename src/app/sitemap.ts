import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://riyas25.vercel.app", priority: 1 },
    ...["work", "about", "curiosity-lab", "achievements", "contact"].map(
      (path) => ({ url: "https://riyas25.vercel.app/" + path, priority: 0.8 }),
    ),
    ...projects.map((p) => ({
      url: `https://riyas25.vercel.app/work/${p.slug}`,
      priority: p.slug === "echonote" ? 0.9 : 0.6,
    })),
  ];
}
