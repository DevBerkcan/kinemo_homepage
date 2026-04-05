"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "Welche Bauteile und Materialien können geprüft werden?",
    answer:
      "Grundsätzlich können alle festen Materialien geprüft werden – von Metallen (Aluminium, Stahl, Guss) über Kunststoffe und Verbundwerkstoffe bis hin zu elektronischen Baugruppen. Auch Mischbauteile aus verschiedenen Materialien sind analysierbar. Die Bauteilgröße reicht von Mikrokomponenten bis hin zu größeren Baugruppen.",
  },
  {
    question: "Ist die Analyse zerstörungsfrei?",
    answer:
      "Ja, vollständig. Industrielle CT und Röntgenanalyse sind zerstörungsfreie Prüfverfahren (ZfP). Ihr Bauteil bleibt nach der Analyse in unverändertem Zustand und kann weiterverwendet werden. Das ist besonders wichtig für teure Prototypen oder sicherheitsrelevante Komponenten.",
  },
  {
    question: "Wie schnell erhalten wir die Ergebnisse?",
    answer:
      "In der Regel erhalten Sie Ihre Ergebnisse innerhalb von 48 Stunden nach Eingang des Bauteils. Der Bericht enthält annotierte CT-Schnittbilder, 3D-Rekonstruktionen und klare Handlungsempfehlungen. Bei dringendem Bedarf sprechen Sie uns einfach an – wir finden eine Lösung.",
  },
  {
    question: "In welcher Entwicklungsphase ist eine CT-Analyse sinnvoll?",
    answer:
      "Je früher, desto besser – und damit günstiger. Eine Analyse lohnt sich bereits beim ersten Prototypen, bei der Vorserie und vor Serienfreigaben. Gerade in frühen Phasen lassen sich Konstruktionsfehler und Prozessprobleme noch kostengünstig beheben, bevor sie in die Serie übergehen.",
  },
  {
    question: "Können auch kleine Serien oder Einzelprototypen analysiert werden?",
    answer:
      "Ja. Kinemo arbeitet sowohl mit Einzelprototypen als auch mit kleinen Serien. Es gibt keine Mindestmengenanforderung. Gerade für Unternehmen in frühen Entwicklungsphasen ist die Analyse einzelner Bauteile besonders wertvoll, um Konstruktionsentscheidungen abzusichern.",
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
            href="/kontakt"
            className="inline-block bg-[#50C9E1] hover:bg-[#7DDBF3] text-[#08415C] font-semibold px-6 py-3 rounded-md transition"
          >
            Kontaktieren Sie uns
          </Link>
        </div>
      </div>
    </section>
  )
}
