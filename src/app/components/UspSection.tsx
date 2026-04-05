"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lightbulb, ShieldCheck, ActivitySquare, Zap, ArrowRight, CheckCircle, Play, X, type LucideIcon } from "lucide-react"

// TypeScript Interfaces
interface USPData {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  benefits: string[]
  stats: { value: string; label: string }
  color: string
  bgColor: string
  example: string
}

const uspData: USPData[] = [
  {
    icon: Lightbulb,
    title: "Innere Fehlerstrukturen",
    subtitle: "Sichtbar machen, was verborgen ist",
    description:
      "Lunker, Risse, Poren und Fehlstellen im Inneren von Bauteilen und Baugruppen zerstörungsfrei sichtbar machen – noch in der Entwicklungsphase.",
    benefits: [
      "Erkennung innerer Defekte ohne Zerstörung",
      "Analyse von Schweißnähten, Gussteilen und Verbundwerkstoffen",
      "Frühzeitige Qualitätssicherung vor der Serie",
    ],
    stats: { value: "85%", label: "frühere Fehlererkennung" },
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    example:
      "Ein Automobilzulieferer entdeckte durch CT-Analyse Lunker in Aluminiumgussteilen, die erst unter Belastung zu Ausfällen geführt hätten.",
  },
  {
    icon: ActivitySquare,
    title: "Schnelle, präzise Analyse",
    subtitle: "Ergebnisse in 48 Stunden",
    description:
      "Von der Bauteileinreichung bis zum detaillierten Analysebericht in 48 Stunden – ohne Zerstörung des Bauteils, ohne Produktionsunterbrechung.",
    benefits: [
      "Ergebnisse in der Regel innerhalb von 48h",
      "Zerstörungsfreie Prüfung (ZfP)",
      "Digitale Berichte mit annotierten Bildern",
    ],
    stats: { value: "48h", label: "bis zum Ergebnis" },
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    example:
      "Ein Maschinenbauer erhielt innerhalb von 2 Tagen einen vollständigen CT-Analysebericht – und konnte seinen Entwicklungsplan ohne Verzögerung einhalten.",
  },
  {
    icon: ShieldCheck,
    title: "Entwicklung & Validierung",
    subtitle: "Unterstützung in jeder F&E-Phase",
    description:
      "Ob Prototyp, Vorserie oder Serienvalidierung – Kinemo begleitet Entwicklungs- und Qualitätsteams mit präzisen Analysedaten in jeder Phase.",
    benefits: [
      "Prototypen- und Vorserienprüfung",
      "Seriennahe Validierung von Baugruppen",
      "Unterstützung bei Ursachenanalyse und Root Cause",
    ],
    stats: { value: "60%", label: "kürzere Entwicklungszyklen" },
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    example:
      "Ein Medizintechnikunternehmen validierte seine Implantatkonstruktion in der Vorserie mit CT-Daten – und vermied eine kostspielige Designänderung kurz vor der Markteinführung.",
  },
  {
    icon: Zap,
    title: "Visuelle Entscheidungsgrundlage",
    subtitle: "Klar. Präzise. Nachvollziehbar.",
    description:
      "Annotierte Bilder, 3D-Rekonstruktionen und strukturierte Berichte – damit Entwicklungs- und Qualitätsteams fundierte Entscheidungen treffen können.",
    benefits: [
      "Annotierte CT-Schnittbilder und 3D-Rekonstruktionen",
      "Klare Handlungsempfehlungen im Bericht",
      "Dokumentation für interne und externe Freigaben",
    ],
    stats: { value: "40%", label: "weniger Entwicklungskosten" },
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    example:
      "Ein Elektronikhersteller nutzte die visuellen CT-Berichte direkt in der Lieferantenkommunikation – und konnte Qualitätsprobleme präzise adressieren.",
  },
]

export default function EnhancedUSP() {
  const [activeUSP, setActiveUSP] = useState<number>(0)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<USPData | null>(null)

  const openModal = (usp: USPData) => {
    setModalContent(usp)
    setShowModal(true)
  }

return (
    <>
      <section className="relative bg-gradient-to-b from-[#f9fafb] to-white dark:from-[#061b26] dark:to-[#05151f] py-24 px-6 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#50C9E1] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#08415C] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#50C9E1]/10 text-[#50C9E1] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap size={16} />
              Die Lösung
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#08415C] dark:text-white mb-6">
              Kinemo macht sichtbar,{" "}
              <span className="text-[#50C9E1]">was von außen nicht erkennbar ist.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Mit industrieller CT und Röntgenanalyse unterstützen wir Entwicklungs- und Qualitätsteams dabei,
              verborgene Fehler frühzeitig zu erkennen – bevor sie Zeit und Geld kosten.
            </p>
          </motion.div>

          {/* Interactive USP Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {uspData.map((usp, index) => {
              const Icon = usp.icon
              return (
                <motion.div
                  key={index}
                  className={`group relative cursor-pointer transition-all duration-500 ${
                    activeUSP === index ? "scale-105" : "hover:scale-[1.02]"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setActiveUSP(index)}
                  onClick={() => openModal(usp)}
                >
                  <div
                    className={`relative p-8 rounded-2xl transition-all duration-500 border-2 ${
                      activeUSP === index
                        ? `${usp.bgColor} border-transparent shadow-2xl`
                        : "bg-white dark:bg-[#0f2b3b] border-gray-200 dark:border-gray-700 hover:border-[#50C9E1]/50 shadow-md hover:shadow-xl"
                    }`}
                  >
                    {/* Animated Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${usp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                    ></div>

                    {/* Icon with Animation */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${usp.color} p-4 mb-6 mx-auto relative overflow-hidden`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-full h-full text-white relative z-10" />
                      <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                    </motion.div>

                    {/* Content */}
                    <div className="text-center relative z-10">
                      <h3 className="text-xl font-bold text-[#08415C] dark:text-white mb-2">{usp.title}</h3>
                      <div className="text-sm text-[#50C9E1] font-medium mb-4">{usp.subtitle}</div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">{usp.description}</p>

                      {/* Stats */}
                      <div className="mb-6">
                        <div className="text-2xl font-bold text-[#50C9E1] mb-1">{usp.stats.value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{usp.stats.label}</div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-center gap-2 text-[#50C9E1] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                        <span>Mehr erfahren</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#50C9E1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Active USP Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeUSP}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-[#0f2b3b] rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${uspData[activeUSP].color} p-3`}>
                      {(() => {
                        const ActiveIcon = uspData[activeUSP].icon
                        return <ActiveIcon className="w-full h-full text-white" />
                      })()}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-[#08415C] dark:text-white">{uspData[activeUSP].title}</h4>
                      <p className="text-[#50C9E1] font-medium">{uspData[activeUSP].subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {uspData[activeUSP].benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle size={20} className="text-[#50C9E1] flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className={`${uspData[activeUSP].bgColor} p-6 rounded-xl`}>
                  <h5 className="font-semibold text-[#08415C] dark:text-white mb-3">🎯 Praxisbeispiel</h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{uspData[activeUSP].example}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-[#08415C] to-[#0C5374] rounded-2xl p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Alle Leistungen entdecken</h3>
              <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                Von der CT-Analyse bis zur Entwicklungsbegleitung – erfahren Sie, wie Kinemo Ihre Produktentwicklung unterstützt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/leistungen"
                  className="inline-flex items-center bg-[#50C9E1] hover:bg-[#7DDBF3] text-[#08415C] font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Alle Leistungen entdecken
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <a
                  href="/kontakt"
                  className="inline-flex items-center bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full transition-all duration-200"
                >
                  <Play size={18} className="mr-2" />
                  Jetzt Analyse anfragen
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-white dark:bg-[#0f2b3b] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    {modalContent && (
                      (() => {
                        const ModalIcon = modalContent.icon
                        return (
                          <>
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${modalContent.color} p-3`}>
                              <ModalIcon className="w-full h-full text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-[#08415C] dark:text-white">{modalContent.title}</h3>
                              <p className="text-[#50C9E1]">{modalContent.subtitle}</p>
                            </div>
                          </>
                        )
                      })()
                    )}
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    aria-label="Modal schließen"
                  >
                    <X size={24} className="text-gray-500" />
                  </button>
                </div>

                {modalContent && (
                  <div className="space-y-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{modalContent.description}</p>

                    <div className="grid gap-4">
                      <h4 className="font-semibold text-[#08415C] dark:text-white">Ihre Vorteile:</h4>
                      {modalContent.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle size={20} className="text-[#50C9E1] flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`${modalContent.bgColor} p-6 rounded-xl`}>
                      <h5 className="font-semibold text-[#08415C] dark:text-white mb-3">💡 Praxisbeispiel</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{modalContent.example}</p>
                    </div>

                    <div className="text-center pt-4">
                      <a
                        href="/kontakt"
                        className="inline-flex items-center bg-[#50C9E1] hover:bg-[#7DDBF3] text-[#08415C] font-semibold px-6 py-3 rounded-full transition-colors"
                      >
                        Jetzt Analyse anfragen
                        <ArrowRight size={18} className="ml-2" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
