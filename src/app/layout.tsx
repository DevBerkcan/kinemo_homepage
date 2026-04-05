import type { Metadata } from "next";
import "./globals.css";
import { createPageMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Kinemo – Industrielle CT & Röntgenanalyse für Produktentwicklung und Qualitätssicherung",
    description:
      "Kinemo macht verborgene Fehler in Bauteilen und Baugruppen sichtbar – mit industrieller CT, Röntgenanalyse und zerstörungsfreier Prüfung für Produktentwicklung und Qualitätssicherung.",
    path: "/",
    keywords: ["industrielle Röntgenprüfung", "CT Dienstleister", "Bauteilprüfung 3D"],
  }),
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kinemo – Industrielle CT & Röntgenanalyse",
    template: "%s | Kinemo",
  },
  applicationName: "Kinemo",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Kinemo" }],
  creator: "Kinemo",
  publisher: "Kinemo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
