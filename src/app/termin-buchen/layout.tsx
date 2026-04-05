import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Termin buchen für CT- und Röntgenanalyse",
  description:
    "Unverbindliches Erstgespräch für industrielle CT, Röntgenanalyse und zerstörungsfreie Bauteilprüfung buchen.",
  path: "/termin-buchen",
  keywords: [
    "Termin industrielle CT",
    "CT Beratung buchen",
    "Röntgenanalyse Termin",
  ],
})

export default function TerminBuchenLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
