import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navigationsbar";

export default function ImpressumPage() {
  return (

    <>
    <Navbar/>
    <main className="max-w-3xl mx-auto px-4 py-16 text-[#333333] font-inter">
      <h1 className="text-4xl font-bold text-[#08415C] mb-8">Impressum</h1>

      <div className="space-y-4 text-base leading-relaxed">
        <p><strong>Sercan Atesoglu</strong><br />
        KINEMO GmbH<br />
        Heinz-Fangman-Str. 2<br />
        42287 Wuppertal<br />
        Deutschland</p>

        <p>Tel.: <a href="tel:+4915205765010" className="text-[#08415C] hover:underline">+49 1520 5765010</a><br />
        E-Mail: <a href="mailto:sercan.atesoglu@kinemo.de" className="text-[#08415C] hover:underline">sercan.atesoglu@kinemo.de</a></p>

        <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
        DE364016512</p>

        <p>Zuständige Aufsichtsbehörde für das Angebot audiovisueller Mediendienste:<br />
        Landesanstalt für Medien Nordrhein-Westfalen (LfM NRW)<br />
        Zollhof 2, 40221 Düsseldorf</p>

        <p>Plattform der EU-Kommission zur Online-Streitbeilegung:<br />
        <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-[#08415C] hover:underline">
          https://ec.europa.eu/odr
        </a></p>

        <p>Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</p>
      </div>
    </main>
<Footer/>
    </>
  );
}
