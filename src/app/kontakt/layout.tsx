import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Kontakt für industrielle CT und Röntgenanalyse",
  description:
    "Jetzt Anfrage für industrielle CT, Röntgenanalyse oder Fehleranalyse stellen. Kinemo meldet sich in der Regel innerhalb von 24 Stunden.",
  path: "/kontakt",
  keywords: [
    "CT Anfrage",
    "Röntgenanalyse Kontakt",
    "Fehleranalyse anfragen",
    "Zerstörungsfreie Prüfung Kontakt",
  ],
})

export default function KontaktLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
