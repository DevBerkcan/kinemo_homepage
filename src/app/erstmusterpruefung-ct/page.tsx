import Link from "next/link"
import Navbar from "@components/navigationsbar"
import Footer from "@components/Footer"
import { CheckCircle, ArrowRight } from "lucide-react"
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Erstmusterprüfung mit industrieller CT",
  description:
    "Erstmusterprüfung mit industrieller CT: innere Strukturen, Porosität, Wandstärken und Soll-Ist-Abweichungen vor Serienfreigabe sicher bewerten.",
  path: "/erstmusterpruefung-ct",
  keywords: ["Erstmusterprüfung CT", "Serienfreigabe CT", "Vorserie CT Analyse"],
})

const checklist = [
  "Innere Struktur vor Serienstart absichern",
  "CAD-Soll-Ist-Vergleich für Geometrie und Toleranzen nutzen",
  "Porosität und kritische Fehlstellen vor Freigabe erkennen",
  "Lieferanten- oder Prozessänderungen früh bewerten",
]

export default function ErstmusterpruefungCtPage() {
  const breadcrumbSchema = createBreadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "Erstmusterprüfung mit CT", path: "/erstmusterpruefung-ct" },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="bg-white dark:bg-[#061b26] text-gray-900 dark:text-white">
        <section className="bg-gradient-to-br from-[#08415C] to-[#061b26] text-white py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Erstmusterprüfung mit industrieller CT</h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Vor Serienfreigabe reicht die Betrachtung von Oberfläche und Maßen oft nicht aus. CT zeigt, was im Inneren des Bauteils tatsächlich vorhanden ist.
            </p>
          </div>
        </section>
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-[#08415C] dark:text-white mb-4">Mehr Sicherheit vor Freigabe</h2>
              <p>
                Suchanfragen wie <strong>Erstmusterprüfung CT</strong> oder <strong>Serienfreigabe CT Analyse</strong> entstehen dort, wo Entwicklungs- und QS-Teams nicht nur Sichtprüfung wollen, sondern belastbare innere Daten.
              </p>
              <p>
                CT ergänzt klassische Erstmusterprüfungen um Informationen zu inneren Fehlstellen, Wandstärken, Passungen und Geometrieabweichungen. So lassen sich Freigaben fundierter treffen und Rückläufer vermeiden.
              </p>
              <p>
                Das ist besonders wertvoll bei sicherheitsrelevanten Bauteilen, komplexen Geometrien, Gussteilen, Spritzgussteilen und montierten Baugruppen.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-[#0f2b3b] rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-xl font-bold text-[#08415C] dark:text-white mb-5">Was mit CT zusätzlich abgesichert wird</h3>
              <ul className="space-y-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle size={18} className="text-[#50C9E1] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="pb-24 px-6">
          <div className="max-w-4xl mx-auto bg-[#08415C] text-white rounded-3xl p-8 md:p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Erstmuster mit CT absichern</h2>
            <p className="text-gray-200 mb-6">
              Wenn vor Serienstart mehr Klarheit benötigt wird als klassische Prüfberichte liefern, unterstützt CT mit inneren Daten und klarer Dokumentation.
            </p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-[#50C9E1] text-[#08415C] font-semibold px-7 py-3 rounded-full">
              Erstmuster prüfen lassen
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
