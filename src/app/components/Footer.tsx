"use client"

import Link from "next/link"
import { FaLinkedin, FaYoutube } from "react-icons/fa"
import { motion } from "framer-motion"
import React from "react"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#063348] text-white pt-16 pb-10 px-6 w-full"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Text + Kontakt */}
        <div className="space-y-4">
          <h4 className="text-2xl font-extrabold tracking-tight">
            KIN<span className="text-[#50C9E1]">EMO</span>
          </h4>
          <p className="text-sm leading-relaxed text-white/90">
            Wir helfen Unternehmen dabei, die innere Bewegung von Produkten zu sehen und zu bewerten.
          </p>
          <p className="text-sm mt-4">📞 +49 1520 576 5010</p>
          <p className="text-sm">📬 contact@kinemo.de</p>
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.linkedin.com/company/kinemo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#063348] p-2 rounded-md hover:bg-[#50C9E1] hover:text-[#08415C] transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.youtube.com/@kinemo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#063348] p-2 rounded-md hover:bg-[#50C9E1] hover:text-[#08415C] transition"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Laboradresse */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Labor</h4>
          <p className="text-sm leading-relaxed">
            Kinemo GmbH<br />
            Talstraße 71<br />
            42551 Velbert<br />
            Deutschland
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-[#FF6B00]">Startseite</Link></li>
            <li><Link href="/benefits">Vorteile</Link></li>
            <li><Link href="/collaboration">Zusammenarbeit</Link></li>
            <li><Link href="/analysis">Analysen</Link></li>
            <li><Link href="/blog">Blog & News</Link></li>
          </ul>
        </div>

        {/* Weiteres */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Weiteres</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/datenschutz">Datenschutzerklärung</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-white/60 mt-10">
        &copy; {new Date().getFullYear()} Kinemo. Alle Rechte vorbehalten.
      </div>
    </motion.footer>
  )
}
