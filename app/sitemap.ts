import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.kidsdenschool.in";
  const currentDate = "2026-10-09T00:00:00.000Z";

  const routes = [
    "",
    "/admission",
    "/admission/kidset",
    "/learning",
    "/learning/curriculum",
    "/about/recognition-and-affiliations",
    "/about/school-song",
    "/community/academic-calendar",
    "/community/gallery",
    "/jobs",
    "/jobs/archive",
    "/identity",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" || route.includes("admission") ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.includes("admission") ? 0.9 : 0.8,
  }));
}
