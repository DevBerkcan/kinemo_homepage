"use client"

import Link from "next/link"
import Navbar from "../components/navigationsbar"
import Footer from "../components/Footer"
import { useState } from "react"
import { motion } from "framer-motion"

const blogPosts = [
    {
      slug: "erste-analyse",
      title: "Die erste Röntgenanalyse in Bewegung",
      excerpt: "Erfahre, wie Kinemo 3D-Röntgen in Echtzeit nutzbar macht.",
      date: "2025-04-10",
      tags: ["3D-Röntgen", "Innovation"],
      image: "https://source.unsplash.com/600x400/?xray,technology",
    },
    {
      slug: "ct-verfahren",
      title: "Dynamische CT erklärt",
      excerpt: "Ein Blick hinter die Kulissen des dynamischen CTs bei Kinemo.",
      date: "2025-04-01",
      tags: ["CT", "Technologie"],
      image: "https://source.unsplash.com/600x400/?medical,innovation",
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#08415C]">Blog & News</h1>

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
              <img
                src={post.image}
                alt={post.title}
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