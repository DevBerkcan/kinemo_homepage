"use client"

import Link from "next/link"
import { FaLinkedin, FaYoutube } from "react-icons/fa"
import { motion } from "framer-motion"
import React from "react"
import {
  COMPANY_ADDRESS_LINE_1,
  COMPANY_BRAND,
  COMPANY_CITY,
  COMPANY_COUNTRY,
  COMPANY_EMAIL,
  COMPANY_EMAIL_HREF,
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_PHONE_HREF,
} from "@/lib/site"

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
            {COMPANY_BRAND.slice(0, 3).toUpperCase()}<span className="text-[#50C9E1]">{COMPANY_BRAND.slice(3).toUpperCase()}</span>
          </h4>
          <p className="text-sm leading-relaxed text-white/90">
            Industrielle CT und Röntgenanalyse für Unternehmen, die verborgene Fehler frühzeitig erkennen wollen.
          </p>
          <p className="text-sm mt-4">
            📞 <a href={COMPANY_PHONE_HREF} className="hover:text-[#50C9E1] transition-colors">{COMPANY_PHONE}</a>
          </p>
          <p className="text-sm">
            📬 <a href={COMPANY_EMAIL_HREF} className="hover:text-[#50C9E1] transition-colors">{COMPANY_EMAIL}</a>
          </p>
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
            {COMPANY_NAME}<br />
            {COMPANY_ADDRESS_LINE_1}<br />
            {COMPANY_CITY}<br />
            {COMPANY_COUNTRY}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#50C9E1] transition-colors">Startseite</Link></li>
            <li><Link href="/leistungen" className="hover:text-[#50C9E1] transition-colors">Leistungen</Link></li>
            <li><Link href="/branchen" className="hover:text-[#50C9E1] transition-colors">Branchen</Link></li>
            <li><Link href="/anwendungsfaelle" className="hover:text-[#50C9E1] transition-colors">Anwendungsfälle</Link></li>
            <li><Link href="/technologie" className="hover:text-[#50C9E1] transition-colors">Technologie</Link></li>
            <li><Link href="/referenzen" className="hover:text-[#50C9E1] transition-colors">Referenzen</Link></li>
            <li><Link href="/blog" className="hover:text-[#50C9E1] transition-colors">Blog & Wissen</Link></li>
            <li><Link href="/kontakt" className="hover:text-[#50C9E1] transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        {/* Weiteres */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Weiteres</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/ct-aluminiumguss">CT für Aluminiumguss</Link></li>
            <li><Link href="/bga-loetstellenpruefung">BGA-Lötstellenprüfung</Link></li>
            <li><Link href="/porositaetsanalyse">Porositätsanalyse</Link></li>
            <li><Link href="/erstmusterpruefung-ct">Erstmusterprüfung mit CT</Link></li>
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
