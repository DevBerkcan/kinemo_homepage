"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Scan, Radio, SearchX, FlaskConical, GitCompare, FileText, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Scan,
    title: "CT-Analyse",
    subtitle: "Industrielle Computertomographie",
    description: "Dreidimensionale Darstellung innerer Strukturen – für Bauteile und Baugruppen jeder Komplexität.",
    color: "from-[#08415C] to-[#0C5374]",
  },
  {
    icon: Radio,
    title: "Röntgenprüfung",
    subtitle: "2D-Röntgenanalyse",
    description: "Schnelle, präzise 2D-Durchleuchtung zur Erkennung von Fehlern, Fremdkörpern und Strukturdefekten.",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: SearchX,
    title: "Fehleranalyse",
    subtitle: "Schaden- & Ursachenanalyse",
    description: "Systematische Analyse von Schäden, Brüchen und Materialfehlern mit Dokumentation der Ursache.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: FlaskConical,
    title: "Entwicklungsbegleitung",
    subtitle: "Prüfungen in F&E-Phasen",
    description: "Von der ersten Idee bis zur Serienreife – Kinemo begleitet Ihren Entwicklungsprozess mit Analysedaten.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: GitCompare,
    title: "Vergleichsanalysen",
    subtitle: "Soll-/Ist-Vergleiche",
    description: "Abweichungen zwischen Konstruktionsdaten und realen Bauteilen präzise messen und dokumentieren.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: FileText,
    title: "Dokumentation & Auswertung",
    subtitle: "Visuelle Berichte",
    description: "Strukturierte Analyseberichte mit annotierten Bildern, 3D-Rekonstruktionen und Handlungsempfehlungen.",
    color: "from-teal-500 to-cyan-500",
  },
]

export default function ServicesPreview() {
  return (
    <section className="bg-white dark:bg-[#061b26] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-[#50C9E1]/10 text-[#50C9E1] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Scan size={16} />
            Leistungen
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#08415C] dark:text-white mb-6">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Von der CT-Analyse bis zur Entwicklungsbegleitung – präzise Analyseleistungen für Unternehmen,
            die Fehler früh erkennen und Entwicklungszeiten verkürzen wollen.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className="group bg-gray-50 dark:bg-[#0f2b3b] border border-gray-200 dark:border-gray-700 rounded-2xl p-7 hover:shadow-xl hover:border-[#50C9E1]/40 dark:hover:border-[#50C9E1]/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#08415C] dark:text-white mb-1">{service.title}</h3>
                <p className="text-[#50C9E1] text-sm font-medium mb-3">{service.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/leistungen"
            className="inline-flex items-center bg-[#08415C] hover:bg-[#0C5374] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl gap-2"
          >
            Alle Leistungen entdecken
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
