"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function CallToActionSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#08415C] to-[#061b26] text-white py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/xray-grid-pattern.svg')] bg-cover opacity-5 pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ihre Produkte verdienen <span className="text-[#50C9E1]">maximale Präzision</span>
        </h2>
        <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
          Vereinbaren Sie eine kostenlose Demo und sehen Sie, wie unsere 3D-Röntgentechnologie frühzeitig Fehler erkennt und Ihre Entwicklung beschleunigt.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center bg-[#50C9E1] hover:bg-[#7ddbf3] text-[#08415C] font-semibold px-8 py-4 rounded-full shadow-lg transition"
        >
          Jetzt Demo vereinbaren
          <ArrowRight className="ml-3" size={18} />
        </Link>
      </motion.div>
    </section>
  )
}
