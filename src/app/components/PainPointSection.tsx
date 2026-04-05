"use client"

import { motion } from "framer-motion"
import { Clock, TrendingDown, Search, DollarSign, AlertTriangle } from "lucide-react"

const painPoints = [
  {
    icon: Search,
    title: "Defekte werden erst spät entdeckt",
    description: "Innere Fehler bleiben bei visueller Prüfung unsichtbar – und werden oft erst nach Auslieferung oder unter Betrieb sichtbar.",
  },
  {
    icon: Clock,
    title: "Entwicklungszyklen verzögern sich",
    description: "Fehler, die spät erkannt werden, erzwingen aufwändige Iterationen und verschieben Markteinführungstermine.",
  },
  {
    icon: Search,
    title: "Ursachenanalyse kostet unnötig Zeit",
    description: "Ohne klare Einblicke ins Innere des Bauteils bleibt die Fehlerursache oft wochenlang ungeklärt.",
  },
  {
    icon: DollarSign,
    title: "Spätere Änderungen verursachen hohe Kosten",
    description: "Je später ein Fehler im Entwicklungsprozess erkannt wird, desto teurer wird die Korrektur – oft um den Faktor 10.",
  },
  {
    icon: AlertTriangle,
    title: "Qualitätsprobleme gefährden die Markteinführung",
    description: "Unentdeckte Mängel in Prototypen oder der Vorserie können Freigaben verzögern oder zu kostspieligen Rückrufen führen.",
  },
]

export default function PainPointSection() {
  return (
    <section className="bg-[#061b26] dark:bg-[#050f15] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingDown size={16} />
            Das Problem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Viele Fehler bleiben{" "}
            <span className="text-[#50C9E1]">zu lange unsichtbar.</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Innere Strukturfehler, Materialdefekte und Fertigungsmängel sind von außen nicht erkennbar –
            und werden deshalb oft viel zu spät entdeckt.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={index}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#50C9E1]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5 group-hover:bg-red-500/20 transition-colors">
                  <Icon size={22} className="text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>

                {/* Subtle hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#50C9E1]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
