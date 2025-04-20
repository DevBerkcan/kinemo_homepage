import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `Kinemo Blog – ${params.slug.replace(/-/g, " ")}`,
    description: "Erfahren Sie mehr über modernste Bewegungsanalyse mit Kinemo.",
    openGraph: {
      title: `Kinemo Blog – ${params.slug}`,
      images: ["/og-image-xray.jpg"],
    },
  }
}
