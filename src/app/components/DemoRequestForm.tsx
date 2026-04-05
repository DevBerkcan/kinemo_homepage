"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function DemoRequestForm() {
  const [submitted, setSubmitted] = useState(false)
  const [privacy, setPrivacy] = useState(false)
  const [privacyError, setPrivacyError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!privacy) {
      setPrivacyError(true)
      return
    }
    setPrivacyError(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="bg-white dark:bg-[#05151f] py-20 px-6 border-t border-gray-200 dark:border-[#1a3a4b]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#08415C] dark:text-[#50C9E1] mb-6">
          Jetzt unverbindlich anfragen
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Beschreiben Sie Ihr Bauteil oder Ihre Prüfaufgabe – wir melden uns innerhalb von 24 Stunden
          und klären gemeinsam den nächsten Schritt.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                required
                type="text"
                placeholder="Ihr Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-[#1a3a4b] bg-white dark:bg-[#0f2b3b] text-gray-800 dark:text-white placeholder-gray-400"
              />
              <input
                required
                type="email"
                placeholder="E-Mail-Adresse"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-[#1a3a4b] bg-white dark:bg-[#0f2b3b] text-gray-800 dark:text-white placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Unternehmen"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-[#1a3a4b] bg-white dark:bg-[#0f2b3b] text-gray-800 dark:text-white placeholder-gray-400"
              />
              <input
                type="tel"
                placeholder="Telefonnummer (optional)"
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-[#1a3a4b] bg-white dark:bg-[#0f2b3b] text-gray-800 dark:text-white placeholder-gray-400"
              />
            </div>

            <textarea
              rows={5}
              placeholder="Welches Bauteil soll geprüft werden? Was ist Ihre Fragestellung?"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-[#1a3a4b] bg-white dark:bg-[#0f2b3b] text-gray-800 dark:text-white placeholder-gray-400"
            />

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="demo-privacy"
                checked={privacy}
                onChange={(e) => { setPrivacy(e.target.checked); setPrivacyError(false) }}
                className="mt-1 accent-[#50C9E1]"
              />
              <label htmlFor="demo-privacy" className="text-sm text-gray-600 dark:text-gray-400">
                Ich habe die{" "}
                <a href="/datenschutz" className="text-[#50C9E1] hover:underline">Datenschutzerklärung</a>
                {" "}gelesen und stimme der Verarbeitung meiner Daten zu. <span className="text-red-500">*</span>
              </label>
            </div>
            {privacyError && (
              <p className="text-red-500 text-sm -mt-3">Bitte bestätigen Sie die Datenschutzerklärung.</p>
            )}

            <button
              type="submit"
              className="w-full md:w-auto bg-[#FF6600] hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Jetzt Analyse anfragen
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#08415C] dark:text-[#50C9E1] text-lg font-semibold mt-10"
          >
            🎉 Vielen Dank! Wir melden uns in Kürze bei Ihnen.
          </motion.div>
        )}
      </div>
    </section>
  )
}
