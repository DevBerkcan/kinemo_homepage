"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

const testimonials = [
  {
    name: "Julia Möller",
    role: "Produktentwicklung, Vorwerk",
    quote:
      "Dank Kinemo konnten wir Fehlerquellen bereits in der Prototypenphase erkennen und sparen damit Monate an Entwicklung.",
    image: "/testimonials/julia.jpg",
  },
  {
    name: "Martin Schubert",
    role: "Leitung Technik, Hansgrohe",
    quote:
      "Die Röntgenanalyse hat uns geholfen, Strömungsverläufe in Echtzeit zu verstehen – ein echter Gamechanger.",
    image: "/testimonials/martin.jpg",
  },
  {
    name: "Dr. Lisa Krämer",
    role: "F&E Managerin, Meditech AG",
    quote:
      "Unsere Produkte durchlaufen jetzt eine viel präzisere Prüfung. Kinemo setzt hier einen neuen Standard.",
    image: "/testimonials/lisa.jpg",
  },
  {
    name: "Christian Prellwitz",
    role: "Abteilungsleiter Test & Vorentwicklung",
    quote:
      "Durch die Videos war es möglich, das Verhalten der Produkte im realen Beanspruchungszustand zu prüfen und Rückschlüsse auf potenzielle Probleme zu ermitteln. Als Ergebnis konnten wir unsere Produkte robuster auslegen und Reklamationen vermeiden, was im Endeffekt zu signifikanten Kosteneinsparungen geführt hat.",
    image: "/testimonials/christian.jpg",
    company: "ABUS",
    logo: "/logos/abus.png"
  },
  {
    name: "Dr. Thomas Kunstfeld",
    role: "Abteilungsleiter Versuch",
    quote:
      "Wir konnten durch die Analyse wertvolle Zeit einsparen und komplexe Problemstellungen vereinfacht darstellen und kommunizieren.",
    image: "/testimonials/thomas.jpg",
    company: "Festool",
    logo: "/logos/festool.png"
  },
  {
    name: "Michael Ußfeller",
    role: "Manager Project Development",
    quote:
      "In der bewegten Videoanalyse entstanden wertvolle Informationen die wir innerhalb kurzer Zeit verfügbar hatten. Es wurden uns so Optimierungspotentiale aufgezeigt, die wir mit keinem anderen Verfahren hätten erfahren können.",
    image: "/testimonials/michael.jpg",
    company: "brose",
    logo: "/logos/brose.png"
  },
]

const caseStudies = [
  {
    title: "Optimierung eines Wasserfilters bei Hansgrohe",
    summary:
      "Kinemo analysierte die Partikelbewegung im Filtergehäuse und half bei der Optimierung der Strömungsgeometrie.",
    slug: "hansgrohe-wasserfilter",
    details:
      "Vorher-Nachher-Analyse zeigte 30% bessere Partikelverteilung und reduzierte Verstopfungsrisiken.",
    imageBefore: "/cases/hansgrohe-before.jpg",
    imageAfter: "/cases/hansgrohe-after.jpg",
  },
  {
    title: "Prototypenprüfung bei Vorwerk-Küchengeräten",
    summary:
      "Frühzeitige Entdeckung mechanischer Schwachstellen dank Röntgenbeobachtung bewegter Teile in Echtzeit.",
    slug: "vorwerk-prototypen",
    details:
      "Die Modalanalyse mit Röntgen führte zu gezielten Design-Anpassungen an beweglichen Komponenten.",
    imageBefore: "/cases/vorwerk-before.jpg",
    imageAfter: "/cases/vorwerk-after.jpg",
  },
  {
    title: "Implantatprüfung in der Medizintechnik",
    summary:
      "Live-Analyse von Gelenkbewegungen zur Optimierung von Hüftimplantaten – direkt in der Entwicklungsphase.",
    slug: "implantat-medizintechnik",
    details:
      "Ermöglichte die Simulation echter Belastungsszenarien, um Materialversagen zu minimieren.",
    imageBefore: "/cases/implantat-before.jpg",
    imageAfter: "/cases/implantat-after.jpg",
  },
]

export default function TestimonialsAndCases() {
  const [activeTab, setActiveTab] = useState<"testimonials" | "cases">("testimonials")
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const router = useRouter()

  const selectedCase = caseStudies.find(c => c.slug === activeModal)

  return (
    <section className="bg-white dark:bg-[#0f2b3b] py-24 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#08415C] dark:text-white mb-4">
          Stimmen & Anwendungsfälle
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Wie Kinemo Unternehmen dabei unterstützt, bessere Produkte schneller auf den Markt zu bringen.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            className={`px-6 py-2 text-sm font-semibold rounded-full transition ${
              activeTab === "testimonials"
                ? "bg-[#50C9E1] text-[#08415C]"
                : "bg-white dark:bg-[#1a3a4b] text-gray-600 dark:text-white border"
            }`}
            onClick={() => setActiveTab("testimonials")}
          >
            Testimonials
          </button>
          <button
            className={`px-6 py-2 text-sm font-semibold rounded-full transition ${
              activeTab === "cases"
                ? "bg-[#50C9E1] text-[#08415C]"
                : "bg-white dark:bg-[#1a3a4b] text-gray-600 dark:text-white border"
            }`}
            onClick={() => setActiveTab("cases")}
          >
            Case Studies
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "testimonials" ? (
          <motion.div
            key="testimonials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#061b26] p-6 rounded-xl shadow-lg border border-gray-100 dark:border-[#1f3a4b] text-left"
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="rounded-full mb-4"
                />
                <p className="text-gray-700 dark:text-gray-300 italic">"{t.quote}"</p>
                <p className="font-semibold text-[#08415C] dark:text-[#50C9E1] mt-4">{t.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="cases"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {caseStudies.map((c, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-[#061b26] p-6 rounded-xl shadow-lg border border-gray-100 dark:border-[#1f3a4b] text-left flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#08415C] dark:text-[#50C9E1] mb-2">{c.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{c.summary}</p>
                </div>
                <button
                  onClick={() => setActiveModal(c.slug)}
                  className="mt-4 inline-block text-[#50C9E1] hover:underline text-sm font-medium"
                >
                  Erfahre mehr →
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeModal && selectedCase && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-[#0f2b3b] rounded-xl p-6 max-w-3xl w-full text-left relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg"
              >
                ✕
              </button>
              <h3 className="text-xl font-bold text-[#08415C] dark:text-[#50C9E1] mb-4">
                {selectedCase.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{selectedCase.summary}</p>
              <p className="text-sm mt-4 text-gray-500 dark:text-gray-400">{selectedCase.details}</p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Vorher</p>
                  <Image
                    src={selectedCase.imageBefore}
                    alt="Vorher"
                    width={500}
                    height={300}
                    className="rounded-lg w-full h-auto object-cover border"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Nachher</p>
                  <Image
                    src={selectedCase.imageAfter}
                    alt="Nachher"
                    width={500}
                    height={300}
                    className="rounded-lg w-full h-auto object-cover border"
                  />
                </div>
              </div>
              <div className="mt-6 text-right">
                <Link
                  href={`/case-studies/${selectedCase.slug}`}
                  className="text-sm text-[#50C9E1] hover:underline"
                >
                  Zur Detailseite →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
