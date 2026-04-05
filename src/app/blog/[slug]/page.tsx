// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation"
import Navbar from "@/app/components/navigationsbar"
import Footer from "@/app/components/Footer"
import Link from "next/link"

const BASE_URL = "https://www.kinemo.de"

type Post = {
  title: string
  date: string
  tags: string[]
  content: string
}

const blogPosts: Record<string, Post> = {
  "was-ist-industrielle-ct": {
    title: "Was ist industrielle Computertomographie?",
    date: "2026-03-15",
    tags: ["Industrielle CT", "Technologie"],
    content: `
      <p>Industrielle Computertomographie (CT) ist eines der leistungsfähigsten Verfahren der zerstörungsfreien Werkstoffprüfung. Das Prinzip ist ähnlich wie bei der medizinischen CT: Ein Bauteil wird aus vielen Winkeln geröntgt, und aus den resultierenden Projektionen rekonstruiert ein Computer ein vollständiges dreidimensionales Volumenmodell.</p>

      <h2>Wie funktioniert industrielle CT?</h2>
      <p>Das Bauteil rotiert auf einem Drehtisch zwischen Röntgenquelle und Detektor. Aus mehreren Hundert bis zu mehreren Tausend Einzelaufnahmen entsteht ein vollständiges Volumendatensatz. Anschließend können beliebige Schnitte durch das 3D-Modell gelegt, innere Strukturen freigestellt und Maße direkt im digitalen Modell gemessen werden.</p>

      <h2>Was kann industrielle CT sichtbar machen?</h2>
      <ul>
        <li>Lunker, Poren und Einschlüsse in Gussteilen</li>
        <li>Risse, Bindenähte und Materialtrennungen</li>
        <li>Wandstärken und Maßabweichungen</li>
        <li>Fremdkörper und Fehlpositionierungen in Baugruppen</li>
        <li>Lötstellen und Verbindungsqualität in Elektronikbaugruppen</li>
      </ul>

      <h2>Wo liegt der Unterschied zur medizinischen CT?</h2>
      <p>Industrielle CT-Systeme sind auf deutlich höhere Auflösungen ausgelegt als medizinische Geräte. Während medizinische Geräte im Millimeter-Bereich auflösen, erreichen industrielle Systeme Auflösungen im Mikrometerbereich – ideal für die Analyse feiner Strukturen in technischen Bauteilen.</p>

      <h2>Wann lohnt sich industrielle CT?</h2>
      <p>CT lohnt sich immer dann, wenn innere Strukturen geprüft werden sollen, ohne das Bauteil zu zerstören. Besonders wertvoll ist sie in der Entwicklungsphase, bei der Erstmusterprüfung, der Serienvalidierung und der Fehlerursachenanalyse.</p>
    `,
  },
  "fehler-entwicklungsphase-kosten": {
    title: "Warum Fehler in der Entwicklungsphase am teuersten werden",
    date: "2026-02-28",
    tags: ["Produktentwicklung", "Qualität"],
    content: `
      <p>Es ist eine der ältesten Erkenntnisse im Qualitätsmanagement – und eine der am häufigsten ignorierten: Fehler, die früh erkannt werden, kosten wenig. Fehler, die spät auffallen, kosten ein Vielfaches. Aber was genau bedeutet das in der Praxis?</p>

      <h2>Die Zehnerregel der Fehlerkosten</h2>
      <p>Die sogenannte „Regel der Zehn" besagt: Für jede Phase, die ein Fehler im Entwicklungs- und Produktionsprozess weiter voranschreitet, verzehnfachen sich die Kosten für seine Behebung.</p>
      <ul>
        <li><strong>Fehler in der Konstruktionsphase:</strong> Kosten 1x</li>
        <li><strong>Fehler in der Prototypenphase:</strong> Kosten 10x</li>
        <li><strong>Fehler in der Serienproduktion:</strong> Kosten 100x</li>
        <li><strong>Fehler im Feld (Rückruf):</strong> Kosten 1.000x</li>
      </ul>

      <h2>Warum bleiben Fehler so lange unentdeckt?</h2>
      <p>Der Hauptgrund: Innere Fehler – Lunker, Risse, Fehlstellen, Bindenähte – sind von außen nicht erkennbar. Klassische Sicht- und Maßprüfungen erfassen die Bauteiloberfläche, nicht das Innere. Damit bleibt ein erhebliches Risikopotenzial unsichtbar.</p>

      <h2>Was zerstörungsfreie Prüfung verändert</h2>
      <p>Industrielle CT macht innere Strukturen in der Entwicklungsphase sichtbar – ohne das Bauteil zu öffnen oder zu beschädigen. Fehler, die sonst erst unter Belastung oder im Feld sichtbar werden, werden in der Konstruktionsphase identifiziert – zu einem Bruchteil der späteren Korrekturkosten.</p>

      <p>Unternehmen, die früh in ZfP-Prüfungen investieren, berichten regelmäßig von deutlich kürzeren Entwicklungszeiten, weniger Entwicklungsschleifen und einer stabilen Qualität vom ersten Serienteil an.</p>
    `,
  },
  "lunkererkennung-gussteile": {
    title: "Lunker in Gussteilen frühzeitig erkennen",
    date: "2026-02-10",
    tags: ["Fehleranalyse", "Guss", "Lunker"],
    content: `
      <p>Lunker sind innere Hohlräume, die beim Erstarren von Schmelzen entstehen. Sie sind in Aluminium-, Zink- und Stahlgussteilen weit verbreitet – und von außen nicht erkennbar. Trotzdem können sie erhebliche Auswirkungen auf Festigkeit, Dichtigkeit und Lebensdauer eines Bauteils haben.</p>

      <h2>Wie entstehen Lunker?</h2>
      <p>Beim Erstarren einer Schmelze zieht sich das Material zusammen. Wenn die Außenhaut bereits erstarrt ist, während das Innere noch flüssig ist, entsteht ein Unterdruck – und es bilden sich Hohlräume. Je nach Gussprozess, Geometrie und Materialtemperatur können diese Lunker unterschiedlich groß und unterschiedlich kritisch sein.</p>

      <h2>Warum sind Lunker ein Problem?</h2>
      <ul>
        <li>Sie reduzieren die mechanische Festigkeit lokal</li>
        <li>In sicherheitsrelevanten Bereichen können sie zu Ermüdungsbrüchen führen</li>
        <li>Bei Dichtigkeitsanforderungen (Hydraulik, Druckbehälter) sind sie kritisch</li>
        <li>Sie können Oberflächenfehler bei Nachbearbeitung verursachen</li>
      </ul>

      <h2>Wie werden Lunker mit CT erkannt?</h2>
      <p>Industrielle CT liefert ein vollständiges 3D-Bild des Gussteils – inklusive aller inneren Hohlräume. Lunker werden automatisch detektiert, nach Größe und Position klassifiziert und in einem Analysebericht dokumentiert. Entwicklungsteams erhalten damit eine klare Grundlage für Prozessoptimierungen oder Konstruktionsanpassungen.</p>

      <h2>Wann sollte man analysieren?</h2>
      <p>Die sinnvollste Investition ist eine CT-Analyse beim ersten Prototypen oder Erstmuster – also bevor ein Prozess finalisiert oder eine Serienfreigabe erteilt wird. Das gibt Zeit für Anpassungen ohne zeitkritischen Druck.</p>
    `,
  },
  "ct-vs-roentgen": {
    title: "CT oder 2D-Röntgen – wann welches Verfahren?",
    date: "2026-01-20",
    tags: ["CT", "Röntgen", "Verfahrensvergleich"],
    content: `
      <p>Beide Verfahren – industrielle Computertomographie und klassisches 2D-Röntgen – nutzen Röntgenstrahlen zur Prüfung von Bauteilen. Aber sie unterscheiden sich erheblich in dem, was sie leisten können. Die Wahl des richtigen Verfahrens hängt von der konkreten Prüfaufgabe ab.</p>

      <h2>2D-Röntgen: schnell und kosteneffizient</h2>
      <p>Beim klassischen Röntgen entsteht eine zweidimensionale Projektionsaufnahme des Bauteils. Strukturen werden überlagert dargestellt – ähnlich wie bei einem Schattenwurf. Das ist ideal für schnelle Erstprüfungen, die Erkennung grober Defekte oder die Lötstellenprüfung in Elektronikbaugruppen.</p>
      <ul>
        <li>Sehr schnell – oft innerhalb von Minuten</li>
        <li>Günstig im Vergleich zur CT</li>
        <li>Gut geeignet für flache oder einfache Geometrien</li>
        <li>Eingeschränkte Tiefenlokalisation</li>
      </ul>

      <h2>Industrielle CT: vollständiges 3D-Bild</h2>
      <p>CT rekonstruiert ein vollständiges Volumenmodell des Bauteils. Innere Strukturen können schichtweise analysiert werden – mit präziser Lokalisierung in X, Y und Z. Maßmessungen und Soll-Ist-Vergleiche mit CAD-Daten sind direkt im 3D-Modell möglich.</p>
      <ul>
        <li>Vollständige 3D-Information</li>
        <li>Präzise Fehlerlokalisation</li>
        <li>Maßhaltigkeit und Toleranzprüfung möglich</li>
        <li>Mehr Aufwand und höhere Kosten als 2D</li>
      </ul>

      <h2>Wann was?</h2>
      <p><strong>2D-Röntgen</strong> eignet sich für schnelle Erstprüfungen, einfache Geometrien, Lötstellenprüfung und grobe Fehlerdetektion.</p>
      <p><strong>CT</strong> ist die richtige Wahl, wenn Sie Fehler präzise lokalisieren, Maßabweichungen nachweisen, Soll-Ist-Vergleiche durchführen oder komplexe Baugruppen vollständig analysieren wollen.</p>
      <p>Im Zweifelsfall beraten wir Sie gerne – kostenfrei und unverbindlich.</p>
    `,
  },
  // Legacy slugs weiterhin erreichbar
  "erste-analyse": {
    title: "Die erste Röntgenanalyse in Bewegung",
    date: "2025-04-10",
    tags: ["3D-Röntgen", "Innovation"],
    content: `<p>Dieser Beitrag beschreibt frühe Technologieexperimente mit 3D-Röntgenanalyse in Bewegung.</p>`,
  },
  "ct-verfahren": {
    title: "Dynamische CT erklärt",
    date: "2025-04-01",
    tags: ["CT", "Technologie"],
    content: `<p>Dieser Beitrag erklärt die Grundlagen dynamischer CT-Verfahren.</p>`,
  },
}

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) return notFound()

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Kinemo", url: BASE_URL },
    publisher: { "@type": "Organization", name: "Kinemo", url: BASE_URL },
    url: `${BASE_URL}/blog/${slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/blog/${slug}` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main className="bg-white dark:bg-[#061b26] min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-20">
          {/* Back */}
          <Link href="/blog" className="text-sm text-[#50C9E1] hover:underline mb-8 inline-block">
            ← Zurück zum Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            {post.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded text-xs bg-[#50C9E1]/15 text-[#08415C] dark:text-[#50C9E1] font-medium">
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#08415C] dark:text-white mb-10">
            {post.title}
          </h1>

          <article
            className="prose prose-lg prose-neutral dark:prose-invert max-w-none
              prose-headings:text-[#08415C] dark:prose-headings:text-white
              prose-a:text-[#50C9E1] prose-li:text-gray-700 dark:prose-li:text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#08415C] to-[#0C5374] text-white rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-3">Fragen oder Analyse anfragen?</h3>
            <p className="text-gray-200 text-sm mb-5">Wir beraten Sie gerne – kostenlos und unverbindlich.</p>
            <Link
              href="/kontakt"
              className="inline-flex items-center bg-[#50C9E1] hover:bg-[#7DDBF3] text-[#08415C] font-semibold px-6 py-3 rounded-full transition-all"
            >
              Jetzt Kontakt aufnehmen →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
