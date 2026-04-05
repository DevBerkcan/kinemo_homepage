"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Car, Cpu, Box, Cog, HeartPulse, ShoppingBag, ArrowRight } from "lucide-react"

const industries = [
  {
    icon: Car,
    title: "Automotive",
    description: "Gussteile, Schweißnähte, Sicherheitsbauteile und Antriebskomponenten zerstörungsfrei prüfen.",
  },
  {
    icon: Cpu,
    title: "Elektronik",
    description: "Lötstellenqualität, Leiterbahnintegrität und Bauteilpositionierung in Leiterplatten analysieren.",
  },
  {
    icon: Box,
    title: "Kunststoff",
    description: "Einfallstellen, Lunker, Bindenähte und Wandstärkenabweichungen in Spritzgussteilen erkennen.",
  },
  {
    icon: Cog,
    title: "Maschinenbau",
    description: "Innere Strukturen von Getrieben, Ventilen und Baugruppen auf Fehler und Abweichungen prüfen.",
  },
  {
    icon: HeartPulse,
    title: "Medizintechnik",
    description: "Implantate, Instrumente und medizinische Geräte nach höchsten Qualitätsstandards analysieren.",
  },
  {
    icon: ShoppingBag,
    title: "Konsumgüter",
    description: "Technische Produkte und Haushaltsgeräte in der Entwicklung auf innere Fehler und Qualitätsmängel prüfen.",
  },
]

export default function IndustriesSection() {
  return (
    <section className="bg-gray-50 dark:bg-[#0f2b3b] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-[#50C9E1]/10 text-[#50C9E1] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Cog size={16} />
            Branchen
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#08415C] dark:text-white mb-6">
            Für Ihre Branche
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Kinemo unterstützt Unternehmen aus verschiedensten Industrien dabei,
            verborgene Fehler frühzeitig zu erkennen und Produktqualität nachhaltig zu sichern.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={index}
                className="group bg-white dark:bg-[#061b26] border border-gray-200 dark:border-gray-700 rounded-2xl p-7 hover:shadow-xl hover:border-[#50C9E1]/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#08415C]/10 dark:bg-[#50C9E1]/10 flex items-center justify-center mb-5 group-hover:bg-[#50C9E1]/20 transition-colors">
                  <Icon size={22} className="text-[#08415C] dark:text-[#50C9E1]" />
                </div>
                <h3 className="text-xl font-bold text-[#08415C] dark:text-white mb-3">{industry.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{industry.description}</p>
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
            href="/branchen"
            className="inline-flex items-center bg-[#08415C] hover:bg-[#0C5374] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl gap-2"
          >
            Branchenlösungen ansehen
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
