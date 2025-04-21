"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "Was ist das Besondere an der Kinemo-Röntgentechnik?",
    answer:
      "Unsere Technologie ermöglicht die Echtzeit-Analyse von Bewegung im Inneren eines Produkts – mit höchster Präzision und Auflösung.",
  },
  {
    question: "Für welche Branchen eignet sich Kinemo?",
    answer:
      "Ideal für Automobil, Maschinenbau, Medizintechnik und jede Branche mit beweglichen Bauteilen in der Produktentwicklung.",
  },
  {
    question: "Wie schnell bekomme ich Ergebnisse?",
    answer:
      "In der Regel innerhalb von 48 Stunden nach Datenerfassung – inklusive Visualisierungen und Auswertungen.",
  },
  {
    question: "Können auch sehr kleine Bauteile geröntgt werden?",
    answer:
      "Ja. Unsere Technologie bietet detailreiche Einblicke selbst bei Mikromechanik-Komponenten oder feinen Werkstoffstrukturen.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <section
      id="faq"
      className="bg-white dark:bg-[#0f2b3b] py-24 px-4 border-t border-gray-200 dark:border-[#1f3a4b]"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#08415C] dark:text-white mb-10">
          Häufig gestellte Fragen
        </h2>
        <ul className="space-y-6">
          {faqs.map((faq, i) => (
            <li key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left text-[#08415C] dark:text-[#50C9E1] text-lg font-medium bg-gray-50 dark:bg-[#061b26] p-4 rounded-lg shadow-sm border border-gray-200 dark:border-[#1f3a4b] hover:bg-gray-100 dark:hover:bg-[#1a3a4b] transition"
              >
                <div className="flex items-center gap-2">
                  <ChevronDown
                    className={`transition-transform duration-300 ${openIndex === i ? "rotate-180" : "rotate-0"}`}
                  />
                  <span>{faq.question}</span>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pt-2 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* CTA unten */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-[#08415C] dark:text-white mb-4">
            Noch Fragen offen?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Wir beraten Sie gerne individuell zu Ihrer Anwendung.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#50C9E1] hover:bg-[#7DDBF3] text-[#08415C] font-semibold px-6 py-3 rounded-md transition"
          >
            Kontaktieren Sie uns
          </Link>
        </div>
      </div>
    </section>
  )
}
