// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation"
import Navbar from "@/app/components/navigationsbar"
import Footer from "@/app/components/Footer"
import Link from "next/link"
import { blogPostMap, blogPosts } from "@/lib/blog-posts"
import { SITE_URL, createBreadcrumbJsonLd } from "@/lib/seo"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPostMap[slug]
  if (!post) return notFound()

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    description: post.excerpt,
    image: post.image,
    author: { "@type": "Organization", name: "Kinemo", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Kinemo", url: SITE_URL },
    url: `${SITE_URL}/blog/${slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
  }

  const breadcrumbSchema = createBreadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="bg-white dark:bg-[#061b26] min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-20">
          {/* Back */}
          <Link href="/blog" className="text-sm text-[#50C9E1] hover:underline mb-8 inline-block">
            ← Zurück zum Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            {post.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded text-xs bg-[#50C9E1]/15 text-[#08415C] dark:text-[#50C9E1] font-medium">
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#08415C] dark:text-white mb-10">
            {post.title}
          </h1>

          <article
            className="prose prose-lg prose-neutral dark:prose-invert max-w-none
              prose-headings:text-[#08415C] dark:prose-headings:text-white
              prose-a:text-[#50C9E1] prose-li:text-gray-700 dark:prose-li:text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#08415C] to-[#0C5374] text-white rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-3">Fragen oder Analyse anfragen?</h3>
            <p className="text-gray-200 text-sm mb-5">Wir beraten Sie gerne – kostenlos und unverbindlich.</p>
            <Link
              href="/kontakt"
              className="inline-flex items-center bg-[#50C9E1] hover:bg-[#7DDBF3] text-[#08415C] font-semibold px-6 py-3 rounded-full transition-all"
            >
              Jetzt Kontakt aufnehmen →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}
