import type { Metadata } from "next"
import { blogPostMap } from "@/lib/blog-posts"
import { createPageMetadata } from "@/lib/seo"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPostMap[slug]

  if (!post) {
    return createPageMetadata({
      title: "Blogbeitrag nicht gefunden",
      description: "Der angeforderte Blogbeitrag konnte nicht gefunden werden.",
      path: `/blog/${slug}`,
      noindex: true,
    })
  }

  return createPageMetadata({
    title: `${post.title} | Kinemo Blog`,
    description: post.excerpt,
    path: `/blog/${slug}`,
    keywords: post.tags,
    image: post.image,
  })
}
