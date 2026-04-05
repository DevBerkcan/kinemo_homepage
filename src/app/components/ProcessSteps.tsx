"use client"

import { motion } from "framer-motion"
import { MessageSquare, ClipboardList, Scan, BarChart3 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Anfrage & Zielklärung",
    description: "Sie beschreiben Ihr Bauteil, den Prüfauftrag und Ihre Fragestellung. Wir klären gemeinsam, welches Verfahren den größten Erkenntnisgewinn bringt.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Analyseplanung",
    description: "Wir definieren Auflösung, Ausrichtung und Prüfparameter – abgestimmt auf Bauteilgröße, Material und Ihre spezifische Fragestellung.",
  },
  {
    number: "03",
    icon: Scan,
    title: "Röntgen / CT-Auswertung",
    description: "Das Bauteil wird eingescannt, die Daten werden rekonstruiert und ausgewertet. Fehlerstrukturen, Abweichungen und Auffälligkeiten werden identifiziert und annotiert.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Ergebnisbesprechung & Handlungsempfehlung",
    description: "Sie erhalten einen strukturierten Analysebericht mit Visualisierungen, Befunden und konkreten Handlungsempfehlungen – und wir besprechen die Ergebnisse mit Ihrem Team.",
  },
]

export default function ProcessSteps() {
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
            <ClipboardList size={16} />
            Ablauf
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#08415C] dark:text-white mb-6">
            So funktioniert&apos;s
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Von der ersten Anfrage bis zum Ergebnis – ein klar strukturierter Prozess,
            damit Sie schnell und sicher die Antworten bekommen, die Sie brauchen.
          </p>
        </motion.div>

        {/* Desktop: horizontal connector line */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#50C9E1]/30 to-transparent" style={{ top: "3rem" }} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true }}
                >
                  {/* Step number + icon circle */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-[#08415C] dark:bg-[#0C5374] border-4 border-white dark:border-[#061b26] shadow-xl flex items-center justify-center relative z-10">
                      <Icon size={32} className="text-[#50C9E1]" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#50C9E1] text-[#08415C] text-xs font-bold flex items-center justify-center z-20 shadow-md">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#08415C] dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
