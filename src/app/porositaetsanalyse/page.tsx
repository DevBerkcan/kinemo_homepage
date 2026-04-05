import Link from "next/link"
import Navbar from "@components/navigationsbar"
import Footer from "@components/Footer"
import { CheckCircle, ArrowRight } from "lucide-react"
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Porositätsanalyse mit industrieller CT",
  description:
    "Porositätsanalyse für Guss, Kunststoff und additiv gefertigte Bauteile. Hohlräume, Poren und Verteilungen mit industrieller CT sichtbar und bewertbar machen.",
  path: "/porositaetsanalyse",
  keywords: ["Porositätsanalyse CT", "Porenanalyse Guss", "Hohlräume CT Analyse"],
})

const industries = [
  "Aluminium- und Druckguss",
  "Spritzguss und technische Kunststoffe",
  "Additiv gefertigte Bauteile",
  "Dichtheits- und Festigkeitskritische Komponenten",
]

export default function PorositaetsanalysePage() {
  const breadcrumbSchema = createBreadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "Porositätsanalyse", path: "/porositaetsanalyse" },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="bg-white dark:bg-[#061b26] text-gray-900 dark:text-white">
        <section className="bg-gradient-to-br from-[#08415C] to-[#061b26] text-white py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Porositätsanalyse mit industrieller CT</h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Poren, Lunker und Hohlräume zerstörungsfrei analysieren, dokumentieren und für Freigabe- oder Optimierungsentscheidungen nutzbar machen.
            </p>
          </div>
        </section>
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-[#08415C] dark:text-white mb-4">Für Bauteile mit innerem Qualitätsrisiko</h2>
              <p>
                Bei Suchanfragen wie <strong>Porositätsanalyse CT</strong>, <strong>Porenanalyse Guss</strong> oder <strong>Hohlräume im Bauteil prüfen</strong> geht es fast immer um eine konkrete Qualitätsentscheidung.
              </p>
              <p>
                CT ermöglicht nicht nur den Nachweis einzelner Poren, sondern auch die Bewertung ihrer Verteilung, Clusterbildung und Lage in funktionskritischen Bereichen.
              </p>
              <p>
                Damit wird aus einem bloßen Sichtbarkeitsproblem eine belastbare technische Entscheidungsvorlage für Entwicklung, QS und Lieferantenmanagement.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-[#0f2b3b] rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-xl font-bold text-[#08415C] dark:text-white mb-5">Besonders relevant für</h3>
              <ul className="space-y-3">
                {industries.map((item) => (
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
            <h2 className="text-3xl font-bold mb-4">Porosität bewerten statt vermuten</h2>
            <p className="text-gray-200 mb-6">
              Wenn Poren und Hohlräume über Freigabe, Dichtheit oder Bauteillebensdauer entscheiden, ist CT oft das präziseste Verfahren.
            </p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-[#50C9E1] text-[#08415C] font-semibold px-7 py-3 rounded-full">
              Porositätsanalyse anfragen
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
