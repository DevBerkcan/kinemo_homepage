import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kinemo – Industrielle CT & Röntgenanalyse für die Produktentwicklung",
    template: "%s | Kinemo",
  },
  description:
    "Kinemo macht verborgene Fehler in Bauteilen und Baugruppen sichtbar – mit industrieller CT und Röntgenanalyse. Zerstörungsfrei, präzise, Ergebnisse in 48h.",
  keywords: [
    "industrielle CT",
    "Computertomographie",
    "Röntgenanalyse",
    "zerstörungsfreie Prüfung",
    "ZfP",
    "Lunkeranalyse",
    "Fehleranalyse",
    "Produktentwicklung",
    "Qualitätssicherung",
    "Kinemo",
  ],
  openGraph: {
    title: "Kinemo – Industrielle CT & Röntgenanalyse für die Produktentwicklung",
    description:
      "Verborgene Produktfehler sichtbar machen – bevor sie Zeit und Geld kosten.",
    url: "https://www.kinemo.de",
    siteName: "Kinemo",
    locale: "de_DE",
    type: "website",
  },
  metadataBase: new URL("https://www.kinemo.de"),
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
