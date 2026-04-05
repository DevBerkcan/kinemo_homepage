"use client"

import Link from "next/link"
import Image from "next/image"
import Navbar from "../components/navigationsbar"
import Footer from "../components/Footer"
import { useState } from "react"
import { motion } from "framer-motion"

const blogPosts = [
  {
    slug: "was-ist-industrielle-ct",
    title: "Was ist industrielle Computertomographie?",
    excerpt: "Industrielle CT macht das Innere von Bauteilen sichtbar – zerstörungsfrei, präzise und in 3D. Wir erklären, wie das Verfahren funktioniert und wann es sich lohnt.",
    date: "2026-03-15",
    tags: ["Industrielle CT", "Technologie"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  },
  {
    slug: "fehler-entwicklungsphase-kosten",
    title: "Warum Fehler in der Entwicklungsphase am teuersten werden",
    excerpt: "Je später ein Fehler erkannt wird, desto höher die Kosten. Wir zeigen anhand konkreter Zahlen, warum frühe Prüfung die wirtschaftlichste Entscheidung ist.",
    date: "2026-02-28",
    tags: ["Produktentwicklung", "Qualität"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
  },
  {
    slug: "lunkererkennung-gussteile",
    title: "Lunker in Gussteilen frühzeitig erkennen",
    excerpt: "Lunker und Porositäten in Aluminiumgussteilen sind von außen nicht sichtbar – aber mit CT klar erkennbar. Was Sie darüber wissen sollten.",
    date: "2026-02-10",
    tags: ["Fehleranalyse", "Guss", "Lunker"],
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
  },
  {
    slug: "ct-vs-roentgen",
    title: "CT oder 2D-Röntgen – wann welches Verfahren?",
    excerpt: "CT und Röntgen haben unterschiedliche Stärken. Dieser Beitrag hilft Ihnen zu entscheiden, welches Verfahren für Ihre Prüfaufgabe das Richtige ist.",
    date: "2026-01-20",
    tags: ["CT", "Röntgen", "Verfahrensvergleich"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
  },
]
  

export default function BlogPage() {
  const [search, setSearch] = useState("")

  const filteredPosts = blogPosts
    .filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#08415C] dark:text-white">Blog & Wissen</h1>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Suche Beiträge..."
            className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#50C9E1] text-sm"
          />
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-[#0f2b3b] border border-gray-200 dark:border-[#1f3a4b] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between">
                <header>
                  <h2 className="text-xl font-semibold text-[#08415C] dark:text-white mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-white/50">
                    {new Date(post.date).toLocaleDateString("de-DE")}
                  </p>
                </header>

                <p className="mt-4 text-gray-700 dark:text-white/80 leading-relaxed text-sm">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#50C9E1]/20 text-[#08415C] dark:text-[#50C9E1] text-xs font-medium px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <footer className="mt-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#50C9E1] hover:text-[#7DDBF3] font-medium text-sm transition-all inline-flex items-center"
                  >
                    Beitrag lesen <span className="ml-1">→</span>
                  </Link>
                </footer>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}