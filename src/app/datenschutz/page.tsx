import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navigationsbar";

export default function Datenschutz() {
  return (
    <>
    <Navbar/>
    <main className="max-w-3xl mx-auto px-4 py-16 text-[#333333] font-inter">
      <h1 className="text-4xl font-bold text-[#08415C] mb-8">Datenschutzerklärung</h1>

      <div className="prose prose-neutral prose-headings:text-[#08415C] prose-a:text-[#08415C] prose-a:underline max-w-none">
        <h2>1) Einleitung und Kontaktdaten des Verantwortlichen</h2>
        <p>1.1 Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns für Ihr Interesse...</p>
        <p>1.2 Verantwortlicher ist Sercan Atesoglu, KINEMO GmbH, Heinz-Fangman-Str. 2, 42287 Wuppertal, Deutschland, Tel.: +49 1520 5765010, E-Mail: sercan.atesoglu@kinemo.de.</p>
        <p>1.3 Datenschutzbeauftragter: Sercan Atesoglu, E-Mail: sercan.atesoglu@kinemo.de</p>

        <h2>2) Datenerfassung beim Besuch unserer Website</h2>
        <p>2.1 Server-Logfiles, IP-Adresse (anonymisiert), verwendeter Browser, etc...</p>
        <p>2.2 SSL-/TLS-Verschlüsselung ist aktiv.</p>

        <h2>3) Cookies</h2>
        <p>Wir verwenden Session- und persistente Cookies... (Einwilligung Art. 6 Abs. 1 lit. a DSGVO)</p>

        <h2>4) Kontaktaufnahme</h2>
        <h3>4.1 Calendly</h3>
        <p>Datenübermittlung an Calendly, USA – Datenschutzrahmen beachtet.</p>

        <h3>4.2 HubSpot</h3>
        <p>Vertrag zur Auftragsverarbeitung vorhanden. DSGVO-konform.</p>

        <h3>4.3 WhatsApp-Business</h3>
        <p>Verwendung mit Zustimmung. Adressbuch-Zugriff begrenzt auf WhatsApp-Kontakte.</p>

        <h2>5) Nutzung von Kundendaten zur Direktwerbung</h2>
        <p>5.1 Newsletter mit Double-Opt-In, Widerruf jederzeit möglich.</p>
        <p>5.2 Briefpost-Werbung auf Basis berechtigtem Interesse.</p>

        <h2>6) Datenverarbeitung zur Bestellabwicklung</h2>
        <p>Weitergabe an Versanddienstleister und Zahlungsanbieter gemäß Vertrag.</p>

        <h2>7) Retargeting & Tracking</h2>
        <p>Meta Pixel (mit erweitertem Abgleich) – nur bei Einwilligung aktiv.</p>

        <h2>8) Seitenfunktionalitäten</h2>
        <p>Instagram, LinkedIn, Pinterest, Xing, YouTube Plugins – 2-Klick-Lösung & Einwilligung notwendig.</p>

        <h2>9) Rechte des Betroffenen</h2>
        <p>Auskunft, Löschung, Berichtigung, Einschränkung, Widerspruch – gemäß DSGVO.</p>

        <h2>10) Speicherdauer</h2>
        <p>Nach Ablauf gesetzlicher Pflichten oder Widerruf werden personenbezogene Daten gelöscht.</p>

        <p className="text-sm mt-6 italic">Diese Datenschutzerklärung wurde mit Unterstützung der IT-Recht Kanzlei München erstellt. © 2024</p>
      </div>
    </main>

<Footer/>
</>
  );
}
