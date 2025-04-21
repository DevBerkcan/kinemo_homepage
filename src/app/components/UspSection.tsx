import { Lightbulb, ShieldCheck, ActivitySquare, Zap } from "lucide-react"

export default function USPSection() {
  return (
    <section className="bg-[#f9fafb] dark:bg-[#061b26] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#08415C] dark:text-[#50C9E1] mb-10">
          Warum Kinemo für Ihre Produktentwicklung?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <Lightbulb className="mx-auto text-[#FF6B00]" size={40} />
            <h3 className="text-xl font-semibold mt-4 mb-2">Innovation sichtbar machen</h3>
            <p className="text-gray-600 dark:text-gray-400">Erkennen Sie Bewegungsprobleme, bevor sie real auftreten – mit 3D-Röntgen in Echtzeit.</p>
          </div>
          <div className="text-center">
            <ActivitySquare className="mx-auto text-[#FF6B00]" size={40} />
            <h3 className="text-xl font-semibold mt-4 mb-2">Fehleranalyse im Prozess</h3>
            <p className="text-gray-600 dark:text-gray-400">Präzise Diagnosen direkt während der Bewegung – kein Herunterfahren notwendig.</p>
          </div>
          <div className="text-center">
            <ShieldCheck className="mx-auto text-[#FF6B00]" size={40} />
            <h3 className="text-xl font-semibold mt-4 mb-2">Sicherheit & Qualität</h3>
            <p className="text-gray-600 dark:text-gray-400">Vermeiden Sie Rückrufe und Materialverschwendung durch vorausschauende Analyse.</p>
          </div>
          <div className="text-center">
            <Zap className="mx-auto text-[#FF6B00]" size={40} />
            <h3 className="text-xl font-semibold mt-4 mb-2">Schneller zur Marktreife</h3>
            <p className="text-gray-600 dark:text-gray-400">Reduzieren Sie Entwicklungszeiten und Kosten mit präzisem Testing von Anfang an.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
