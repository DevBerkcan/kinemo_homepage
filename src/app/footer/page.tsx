import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#063348] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold text-lg mb-4">Kinemo</h4>
          <p className="text-sm">Bewegung sichtbar machen – mit Know-how, Präzision und Herz.</p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">Über uns</Link></li>
            <li><Link href="/services">Dienstleistungen</Link></li>
            <li><Link href="/solutions">Branchenlösungen</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
          <p className="text-sm">
            Max-Muster-Straße 1<br />
            12345 Düsseldorf<br />
            kontakt@kinemo.de<br />
            +49 123 456789
          </p>
        </div>
      </div>

      <div className="text-center text-xs text-white/60 mt-10">
        &copy; {new Date().getFullYear()} Kinemo. Alle Rechte vorbehalten.
      </div>
    </footer>
  )
}
