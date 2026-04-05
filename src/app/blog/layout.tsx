import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Blog für industrielle CT, Röntgenanalyse und ZfP",
  description:
    "Fachbeiträge zu industrieller Computertomographie, Röntgenanalyse, Fehleranalyse, Qualitätssicherung und Produktentwicklung.",
  path: "/blog",
  keywords: [
    "Blog industrielle CT",
    "Röntgenanalyse Blog",
    "ZfP Wissen",
    "Fehleranalyse Blog",
  ],
})

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
