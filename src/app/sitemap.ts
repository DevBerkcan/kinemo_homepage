import type { MetadataRoute } from "next"
import { blogPosts } from "@/lib/blog-posts"
import { SITE_URL } from "@/lib/seo"

const staticRoutes: Array<{
  path: string
  priority: number
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never"
}> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/leistungen", priority: 0.9, changeFrequency: "monthly" },
  { path: "/anwendungsfaelle", priority: 0.9, changeFrequency: "monthly" },
  { path: "/branchen", priority: 0.85, changeFrequency: "monthly" },
  { path: "/technologie", priority: 0.85, changeFrequency: "monthly" },
  { path: "/referenzen", priority: 0.8, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.8, changeFrequency: "monthly" },
  { path: "/termin-buchen", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.75, changeFrequency: "weekly" },
  { path: "/HowItWorks", priority: 0.65, changeFrequency: "monthly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date()

  return [
    ...staticRoutes.map((route) => ({
      url: new URL(route.path, SITE_URL).toString(),
      lastModified: today,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogPosts.map((post) => ({
      url: new URL(`/blog/${post.slug}`, SITE_URL).toString(),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
  ]
}
