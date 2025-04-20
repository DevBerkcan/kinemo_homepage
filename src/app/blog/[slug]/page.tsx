// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation"
import Navbar from "@/app/components/navigationsbar"
import Footer from "@/app/components/Footer"
import Image from "next/image"

const blogPosts: Record<string, { title: string; content: string }> = {
  "erste-analyse": {
    title: "Die erste Röntgenanalyse in Bewegung",
    content: `
      <figure>
        <img src="https://source.unsplash.com/800x400/?xray,technology" alt="X-Ray in motion" class="rounded shadow" />
        <figcaption class="text-center text-sm text-gray-500 mt-2">Bewegung sichtbar gemacht – mit Kinemo 3D-Röntgentechnologie</figcaption>
      </figure>
      <p>Kinemo hat eine bahnbrechende Methode entwickelt, mit der erstmals Bewegungsabläufe mithilfe von 3D-Röntgentechnologie in Echtzeit erfasst werden können. Die Kombination aus hochauflösender Bildgebung und intelligenter Datenanalyse erlaubt nie dagewesene Einblicke.</p>
      <p>Durch die Integration in industrielle Prozesse kann frühzeitig auf Abweichungen reagiert werden – präzise, effizient und automatisiert.</p>
      <h2>Vorteile gegenüber herkömmlicher Analyse</h2>
      <ul>
        <li>Live-Diagnose direkt in der Bewegung</li>
        <li>Fehlerminimierung durch KI-gestützte Echtzeit-Auswertung</li>
        <li>Nahtlose Integration in Produktionsprozesse</li>
      </ul>
      <p>Die ersten Kundenerfahrungen zeigen eine signifikante Steigerung der Prozesssicherheit bei gleichzeitiger Reduktion von Stillstandzeiten.</p>
    `,
  },
  "ct-verfahren": {
    title: "Dynamische CT erklärt",
    content: `
      <figure>
        <img src="https://source.unsplash.com/800x400/?ct-scan,medical" alt="Dynamische CT im Einsatz" class="rounded shadow" />
        <figcaption class="text-center text-sm text-gray-500 mt-2">Dynamische CT bei bewegten Objekten – ein Blick ins Innere</figcaption>
      </figure>
      <p>Die dynamische Computertomographie (CT) bei Kinemo geht über herkömmliche Verfahren hinaus. Statt statischer Bilder erfassen wir vollständige Bewegungssequenzen – ideal für biomechanische, industrielle oder materialwissenschaftliche Anwendungen.</p>
      <h2>Was ist neu?</h2>
      <p>Die Bewegungserfassung erfolgt während der rotierenden CT-Aufnahme. So entstehen 3D-Bildfolgen mit maximaler Detailtiefe. Besonders Bauteile mit mehreren Achsen oder flexiblen Komponenten profitieren von der Methode.</p>
      <h3>Beispiele aus der Praxis</h3>
      <ul>
        <li>Bewegliche Zahnräder und Wellen im Maschinenbau</li>
        <li>Herzklappen oder Gelenke in der Medizintechnik</li>
        <li>Kunststoffverformungen unter Belastung</li>
      </ul>
      <p>Dank Kinemos automatisierter Bewegungsrekonstruktion werden diese Daten in kürzester Zeit für Ingenieure oder Ärzte nutzbar – visualisiert, ausgewertet, optimiert.</p>
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) return notFound()

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-16 prose prose-neutral dark:prose-invert">
        <h1 className="text-3xl font-bold text-[#08415C]">{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.content }} />
      </main>
      <Footer />
    </>
  )
}
