import Navbar from "@components/navigationsbar"
import Footer from "@components/Footer"
import Link from "next/link"
import { Scan, Radio, SearchX, FlaskConical, GitCompare, FileText, ArrowRight, CheckCircle } from "lucide-react"
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Leistungen für industrielle CT, Röntgenanalyse und Fehleranalyse",
  description:
    "Von industrieller Computertomographie über 2D-Röntgenanalyse bis zur Fehler- und Schadensanalyse: Kinemo unterstützt Produktentwicklung und Qualitätssicherung mit präzisen Prüfleistungen.",
  path: "/leistungen",
  keywords: ["Leistungen industrielle CT", "2D Röntgenanalyse", "Schadensanalyse"],
})

const services = [
  {
    icon: Scan,
    title: "Industrielle Computertomographie (CT)",
    subtitle: "3D-Einblicke in jedes Bauteil",
    description:
      "Die industrielle CT ist das leistungsfähigste Werkzeug zur zerstörungsfreien Prüfung. Sie liefert dreidimensionale Daten über die innere Struktur von Bauteilen – ohne diese zu beschädigen.",
    benefits: [
      "Vollständige 3D-Rekonstruktion innerer Strukturen",
      "Erkennung von Lunkern, Rissen, Poren und Fremdkörpern",
      "Wandstärken- und Toleranzanalysen",
      "Messungen und Vergleiche mit CAD-Daten (Soll-/Ist-Vergleich)",
      "Geeignet für Metall, Kunststoff, Verbundwerkstoffe und Elektronik",
    ],
    scenarios: "Prototypenprüfung, Vorserienvalidierung, Fehlerursachenanalyse, Fertigungsoptimierung",
    color: "from-[#08415C] to-[#0C5374]",
  },
  {
    icon: Radio,
    title: "2D-Röntgenanalyse",
    subtitle: "Schnell. Präzise. Zerstörungsfrei.",
    description:
      "Die klassische Röntgendurchleuchtung liefert schnelle Ergebnisse bei einfacheren Prüfaufgaben – ideal, wenn eine zweidimensionale Darstellung ausreicht oder Zeit eine Rolle spielt.",
    benefits: [
      "Schnelle Durchleuchtung für erste Einschätzungen",
      "Erkennung von Fehllagen, Fremdkörpern und groben Defekten",
      "Lötstellen- und Verbindungsprüfung in Elektronikbaugruppen",
      "Kostengünstige Alternative zur CT bei geeigneten Aufgaben",
    ],
    scenarios: "Erstprüfung, Serienbegleitung, Eingangsinspektion, Schnellprüfung",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: SearchX,
    title: "Fehler- und Schadensanalyse",
    subtitle: "Ursachen verstehen – nicht nur Symptome sehen",
    description:
      "Wenn ein Bauteil versagt, ein Prozess unbeständig ist oder Qualitätsprobleme wiederholt auftreten, hilft eine systematische Fehleranalyse, die Wurzel des Problems zu finden.",
    benefits: [
      "Systematische Ursachenanalyse (Root Cause Analysis)",
      "Dokumentation von Fehlerbildern mit annotierten Bildern",
      "Unterstützung bei Lieferantenreklamationen",
      "Bewertung von Ausschuss und Rückläufern",
    ],
    scenarios: "Reklamationsbearbeitung, Prozessoptimierung, Qualitätssicherung, Entwicklungsschleifen",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: FlaskConical,
    title: "Entwicklungsbegleitende Prüfungen",
    subtitle: "Von der ersten Idee bis zur Serienreife",
    description:
      "Kinemo begleitet Entwicklungsteams in jeder Phase – vom ersten Prototypen über die Vorserie bis zur Serienfreigabe – mit präzisen Analysedaten als Entscheidungsgrundlage.",
    benefits: [
      "Früherkennung von Konstruktionsschwächen",
      "Bewertung von Fertigungsalternativen",
      "Analyse von Iterationen und Designänderungen",
      "Unterstützung bei Freigabeentscheidungen",
    ],
    scenarios: "F&E-Begleitung, Prototypenphasen, Vorserienfreigabe, Konstruktionsoptimierung",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: GitCompare,
    title: "Vergleichsanalysen",
    subtitle: "Abweichungen sichtbar machen",
    description:
      "Soll-/Ist-Vergleiche zwischen CAD-Modell und realem Bauteil oder zwischen verschiedenen Fertigungschargen helfen, Fertigungsqualität objektiv zu bewerten.",
    benefits: [
      "Abgleich mit CAD-Konstruktionsdaten",
      "Chargenkompensation und Serienstreuung bewerten",
      "Dokumentation von Maßabweichungen",
      "Grundlage für Freigabeentscheidungen und Toleranzdefinitionen",
    ],
    scenarios: "Erstmusterprüfung, Serienüberwachung, Lieferantenbewertung",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: FileText,
    title: "Dokumentation & Auswertung",
    subtitle: "Klare Berichte als Entscheidungsgrundlage",
    description:
      "Jede Analyse endet mit einem strukturierten Bericht – verständlich für Entwicklungsteams, Qualitätsmanager und externe Partner.",
    benefits: [
      "Annotierte CT-Schnittbilder und 3D-Visualisierungen",
      "Klare Befundbeschreibung und Handlungsempfehlungen",
      "Dokumentation in druckfähigem PDF-Format",
      "Geeignet für interne Freigaben und Lieferantenkommunikation",
    ],
    scenarios: "Interne QS-Dokumentation, Projektabschlussberichte, Lieferantenaudit",
    color: "from-teal-500 to-cyan-500",
  },
]

export default function LeistungenPage() {
  const breadcrumbSchema = createBreadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "Leistungen", path: "/leistungen" },
  ])

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Industrielle CT und Röntgenanalyse",
    serviceType: [
      "Industrielle Computertomographie",
      "2D-Röntgenanalyse",
      "Fehleranalyse",
      "Entwicklungsbegleitende Prüfung",
    ],
    provider: {
      "@type": "Organization",
      name: "Kinemo",
      url: "https://www.kinemo.de",
    },
    areaServed: "DE",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <main className="bg-white dark:bg-[#061b26] text-gray-900 dark:text-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#08415C] to-[#061b26] text-white py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#50C9E1]/10 text-[#50C9E1] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Scan size={16} />
              Unsere Leistungen
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Präzise Analysen für Ihre Produktentwicklung
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
              Von der industriellen CT bis zur Entwicklungsbegleitung – Kinemo bietet zerstörungsfreie
              Analyseleistungen, die Ihnen helfen, verborgene Fehler früh zu erkennen und
              Entwicklungszeiten zu verkürzen.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center bg-[#50C9E1] hover:bg-[#7DDBF3] text-[#08415C] font-semibold px-8 py-4 rounded-full transition-all gap-2"
            >
              Jetzt Analyse anfragen
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-start`}
                >
                  <div className="lg:w-1/2">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-[#08415C] dark:text-white mb-2">{service.title}</h2>
                    <p className="text-[#50C9E1] font-medium mb-4">{service.subtitle}</p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{service.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold text-[#08415C] dark:text-white">Typische Einsatzszenarien:</span>{" "}
                      {service.scenarios}
                    </p>
                  </div>
                  <div className="lg:w-1/2 bg-gray-50 dark:bg-[#0f2b3b] rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-[#08415C] dark:text-white mb-5">Was Sie erhalten:</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-[#50C9E1] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#08415C] to-[#0C5374] text-white py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nicht sicher, welche Leistung passt?
            </h2>
            <p className="text-gray-200 mb-8 text-lg">
              Sprechen Sie uns an – wir klären gemeinsam, welches Analyseverfahren für Ihre Fragestellung
              den größten Erkenntnisgewinn bringt.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center bg-[#50C9E1] hover:bg-[#7DDBF3] text-[#08415C] font-semibold px-8 py-4 rounded-full transition-all gap-2"
            >
              Jetzt unverbindlich anfragen
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
