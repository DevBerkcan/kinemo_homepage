import Link from "next/link"
import Navbar from "@components/navigationsbar"
import Footer from "@components/Footer"
import { CheckCircle, ArrowRight } from "lucide-react"
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "CT für Aluminiumguss und Lunkeranalyse",
  description:
    "Industrielle CT für Aluminiumguss: Lunker, Porosität, Einschlüsse und Wandstärkenabweichungen in Gussteilen zerstörungsfrei erkennen.",
  path: "/ct-aluminiumguss",
  keywords: ["CT Aluminiumguss", "Lunkeranalyse Aluminiumguss", "Porosität Guss CT"],
})

const benefits = [
  "Lunker und Porennester dreidimensional lokalisieren",
  "Kritische Bereiche in Lastpfaden und Dichtflächen bewerten",
  "Wandstärken und Geometrie mit dem CAD-Modell vergleichen",
  "Belastbare Grundlage für Werkzeug- und Prozessoptimierung schaffen",
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wann lohnt sich CT bei Aluminiumgussteilen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Besonders bei Erstmustern, Prototypen, sicherheitsrelevanten Bauteilen und wiederkehrenden Qualitätsproblemen lohnt sich CT, weil innere Fehlstellen sichtbar werden, bevor sie in der Serie teuer werden.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Fehler erkennt CT in Aluminiumguss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CT erkennt unter anderem Lunker, Porosität, Einschlüsse, Risse, Wandstärkenabweichungen und Montagefehler in Baugruppen.",
      },
    },
  ],
}

export default function CtAluminiumgussPage() {
  const breadcrumbSchema = createBreadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "CT für Aluminiumguss", path: "/ct-aluminiumguss" },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="bg-white dark:bg-[#061b26] text-gray-900 dark:text-white">
        <section className="bg-gradient-to-br from-[#08415C] to-[#061b26] text-white py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CT für Aluminiumguss</h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Lunker, Porosität und Einschlüsse in Aluminiumgussteilen mit industrieller CT zerstörungsfrei erkennen und vor Serienfreigabe sicher bewerten.
            </p>
          </div>
        </section>
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#08415C] dark:text-white mb-5">Warum diese Seite ranken kann</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Wer nach <strong>CT Aluminiumguss</strong>, <strong>Lunkeranalyse Aluminium</strong> oder <strong>Porosität Guss CT</strong> sucht, hat meist eine sehr konkrete Prüfaufgabe. Genau dafür ist diese Landingpage gedacht.
                </p>
                <p>
                  Industrielle CT liefert bei Aluminiumgussteilen ein vollständiges 3D-Bild des Bauteils. So lassen sich innere Fehlstellen nicht nur erkennen, sondern auch nach Lage, Größe und Relevanz für Funktion und Lebensdauer bewerten.
                </p>
                <p>
                  Besonders wertvoll ist das bei Erstmustern, Vorserien, Reklamationen und Freigabeentscheidungen, wenn Oberflächenprüfung allein nicht ausreicht.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-[#0f2b3b] rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-xl font-bold text-[#08415C] dark:text-white mb-5">Typische Analyseziele</h3>
              <ul className="space-y-3">
                {benefits.map((item) => (
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
            <h2 className="text-3xl font-bold mb-4">Aluminiumgussteil prüfen lassen</h2>
            <p className="text-gray-200 mb-6">
              Wenn Sie Lunker, Porosität oder Geometrieabweichungen in einem Gussteil absichern möchten, ist CT meist der schnellste Weg zu belastbaren Daten.
            </p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-[#50C9E1] text-[#08415C] font-semibold px-7 py-3 rounded-full">
              Analyse anfragen
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
