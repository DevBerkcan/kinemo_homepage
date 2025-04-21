"use client"

import Image from "next/image"
import Link from "next/link"

export default function HowItWorks() {
  return (
    <section className="bg-white dark:bg-[#0f2b3b] py-24 px-4 relative">
      {/* Sticky CTA */}
      <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
        <Link
          href="/contact"
          className="bg-gradient-to-r from-[#50C9E1] to-[#84E3F5] text-[#08415C] font-semibold px-5 py-3 rounded-full shadow-xl hover:scale-105 transition text-sm md:text-base"
        >
          ✨ Jetzt kostenlos beraten lassen
        </Link>
      </div>

      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#08415C] dark:text-white mb-4">
          Wie Kinemo Ihre Produktentwicklung transformiert
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          Entdecken Sie, wie unsere innovative 3D-Röntgentechnologie den Entwicklungsprozess revolutioniert – Schritt für Schritt.
        </p>
      </div>

      {/* Direkt eingebettetes Video */}
      <div className="max-w-5xl mx-auto aspect-video mb-16 rounded-xl overflow-hidden shadow-xl">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Kinemo Erklärvideo"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Schritte & Features */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-[#08415C] dark:text-white mb-6 text-center">Ablauf der Zusammenarbeit</h3>
        <ol className="space-y-6 list-decimal list-inside text-gray-700 dark:text-gray-300 text-sm md:text-base">
          <li><strong>📞 Erstgespräch & Zieldefinition:</strong> Wir besprechen Ihre Anforderungen und definieren gemeinsam die Analyseziele.</li>
          <li><strong>📦 Probenanlieferung:</strong> Sie senden uns das Bauteil oder Produkt zur Untersuchung.</li>
          <li><strong>🔬 Röntgenanalyse in 3D:</strong> Unsere Technologie macht innere Bewegungen und Strukturen sichtbar – zerstörungsfrei.</li>
          <li><strong>📈 Auswertung & Interpretation:</strong> Sie erhalten hochwertige Visualisierungen, Videos und Handlungsempfehlungen.</li>
          <li><strong>🛠️ Beratung zur Optimierung:</strong> Auf Wunsch begleiten wir Sie bei der Weiterentwicklung und Implementierung.</li>
        </ol>

        <div className="mt-10 text-center">
          <Link
            href="/downloads/Kinemo-Analyse-Beispiel.pdf"
            target="_blank"
            className="inline-block px-6 py-3 bg-white dark:bg-[#0f2b3b] border border-[#50C9E1] text-[#08415C] dark:text-[#50C9E1] rounded-full shadow hover:bg-[#f3fdff] dark:hover:bg-[#193c4d] transition"
          >
            📄 Beispiel-Auswertung als PDF ansehen
          </Link>
        </div>
      </div>

      {/* Conversion-Leiste */}
      <div className="mt-24 bg-[#08415C] text-white py-12 px-6 rounded-xl max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Bereit für die nächste Entwicklungsstufe?</h3>
        <p className="mb-6 text-white/90 text-sm md:text-base">Über 50+ Unternehmen aus Industrie & Medizintechnik setzen bereits auf Kinemo. Fordern Sie jetzt eine unverbindliche Analyse an und entdecken Sie, was in Ihrem Produkt steckt.</p>
        <Link
          href="/contact"
          className="bg-[#50C9E1] hover:bg-[#7DDBF3] text-[#08415C] font-semibold px-8 py-3 rounded-full transition"
        >
          🚀 Jetzt Demo anfordern
        </Link>
      </div>

      {/* SEO Text */}
      <div className="mt-20 max-w-4xl mx-auto text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        <p>
          Die Integration modernster Röntgentechnologie in den Entwicklungsprozess spart Unternehmen Zeit, Geld und Ressourcen.
          Durch zerstörungsfreie Prüfung in Echtzeit ermöglichen wir eine tiefgreifende Analyse von Prototypen, Baugruppen und Materialien.
        </p>
        <p className="mt-4">
          Unsere Kund:innen – von der Automobilindustrie bis zur Medizintechnik – profitieren von präzisen Erkenntnissen, klaren Empfehlungen und einem reibungslosen Ablauf.
          Sie möchten wissen, ob Kinemo auch Ihr Projekt voranbringen kann? Vereinbaren Sie jetzt ein unverbindliches Gespräch.
        </p>
      </div>
    </section>
  )
}