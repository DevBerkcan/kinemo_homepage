import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Wie industrielle CT und Röntgenanalyse bei Kinemo ablaufen",
  description:
    "Erfahren Sie Schritt für Schritt, wie Kinemo industrielle CT und Röntgenanalyse für Produktentwicklung und Fehleranalyse einsetzt.",
  path: "/HowItWorks",
  keywords: [
    "Wie funktioniert industrielle CT",
    "Ablauf Röntgenanalyse",
    "CT Prozess",
  ],
})

export default function HowItWorksLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
