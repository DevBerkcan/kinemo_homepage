import Link from "next/link"
import Navbar from "@components/navigationsbar"
import Footer from "@components/Footer"
import { CheckCircle, ArrowRight } from "lucide-react"
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "BGA-Lötstellenprüfung mit Röntgen und CT",
  description:
    "BGA-Lötstellenprüfung mit 2D-Röntgen und CT: Voids, kalte Lötstellen, Fehlpositionierungen und Lötfehler in Elektronikbaugruppen erkennen.",
  path: "/bga-loetstellenpruefung",
  keywords: ["BGA Lötstellenprüfung", "Röntgen BGA", "CT Elektronik Lötstellen"],
})

const useCases = [
  "Voids unter BGAs sichtbar machen",
  "Kalte oder unvollständige Lötstellen bewerten",
  "Bauteilpositionierung und Kurzschlüsse prüfen",
  "Vergleich zwischen Gutteil und Ausfallteil durchführen",
]

export default function BgaLoetstellenpruefungPage() {
  const breadcrumbSchema = createBreadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "BGA-Lötstellenprüfung", path: "/bga-loetstellenpruefung" },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="bg-white dark:bg-[#061b26] text-gray-900 dark:text-white">
        <section className="bg-gradient-to-br from-[#08415C] to-[#061b26] text-white py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">BGA-Lötstellenprüfung mit Röntgen und CT</h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Für Elektronikbaugruppen, bei denen verdeckte Lötstellen nicht optisch prüfbar sind, liefern Röntgen und CT die nötige Transparenz.
            </p>
          </div>
        </section>
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-[#08415C] dark:text-white mb-4">Typische Suchintention: konkreter Elektronikfehler</h2>
              <p>
                Suchanfragen wie <strong>BGA Lötstellenprüfung</strong>, <strong>Röntgenanalyse Elektronik</strong> oder <strong>Voids BGA prüfen</strong> kommen fast immer aus einer konkreten Qualitäts- oder Ausfallsituation.
              </p>
              <p>
                2D-Röntgen ist ideal für schnelle Serien- und Stichprobenprüfungen. CT wird interessant, wenn Lage, Tiefe und exakte Fehlerursache dreidimensional bewertet werden sollen.
              </p>
              <p>
                Das ist besonders relevant bei Feldausfällen, Serienanläufen, Prozessänderungen und Freigaben neuer Baugruppen.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-[#0f2b3b] rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-xl font-bold text-[#08415C] dark:text-white mb-5">Wofür die Prüfung genutzt wird</h3>
              <ul className="space-y-3">
                {useCases.map((item) => (
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
            <h2 className="text-3xl font-bold mb-4">Elektronikbaugruppe analysieren lassen</h2>
            <p className="text-gray-200 mb-6">
              Wenn verdeckte Lötstellen die Ursache für Ausfälle sein könnten, schaffen Röntgen und CT schnell Klarheit.
            </p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-[#50C9E1] text-[#08415C] font-semibold px-7 py-3 rounded-full">
              Anfrage senden
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
