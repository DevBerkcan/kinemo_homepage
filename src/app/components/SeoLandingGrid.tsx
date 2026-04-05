"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Cpu, Layers, ScanSearch, CircuitBoard } from "lucide-react"

const seoLandings = [
  {
    title: "CT für Aluminiumguss",
    href: "/ct-aluminiumguss",
    description:
      "Lunker, Poren und Einschlüsse in Aluminiumgussteilen frühzeitig mit industrieller CT erkennen.",
    icon: ScanSearch,
  },
  {
    title: "BGA-Lötstellenprüfung",
    href: "/bga-loetstellenpruefung",
    description:
      "2D-Röntgen und CT für die Analyse von BGAs, Voids, kalten Lötstellen und Fehlpositionierungen.",
    icon: CircuitBoard,
  },
  {
    title: "Porositätsanalyse",
    href: "/porositaetsanalyse",
    description:
      "Porositäten, Lunker und Hohlräume quantitativ bewerten und dokumentieren.",
    icon: Layers,
  },
  {
    title: "Erstmusterprüfung mit CT",
    href: "/erstmusterpruefung-ct",
    description:
      "Innere Strukturen, Wandstärken und Soll-Ist-Abweichungen vor Serienfreigabe absichern.",
    icon: Cpu,
  },
]

export default function SeoLandingGrid() {
  return (
    <section className="bg-gray-50 dark:bg-[#0b2230] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#50C9E1] mb-3">
            Häufig gesucht
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#08415C] dark:text-white mb-5">
            Lösungen für konkrete Prüfaufgaben
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Diese Seiten beantworten häufige Suchanfragen aus Entwicklung, Qualitätssicherung und Fertigung mit konkretem Bezug zu industrieller CT und Röntgenanalyse.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seoLandings.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Link
                  href={item.href}
                  className="group block h-full rounded-2xl border border-gray-200 dark:border-[#1f3a4b] bg-white dark:bg-[#061b26] p-6 shadow-sm hover:shadow-xl hover:border-[#50C9E1]/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#08415C]/8 dark:bg-[#50C9E1]/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#08415C] dark:text-[#50C9E1]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#08415C] dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-5">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#50C9E1]">
                    Mehr erfahren
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
