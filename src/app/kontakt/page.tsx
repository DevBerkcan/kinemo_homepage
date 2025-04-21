"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "", privacy: false })
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [success])

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    if (!form.name.trim()) newErrors.name = "Bitte geben Sie Ihren Namen ein."
    if (!form.email.trim()) newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein."
    if (!form.company.trim()) newErrors.company = "Bitte geben Sie den Firmennamen an."
    if (!form.privacy) newErrors.privacy = "Bitte bestätigen Sie die Datenschutzbestimmungen."
    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement
    const { name, value, type } = target
    const checked = (target.type === "checkbox") ? target.checked : undefined
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setForm({ name: "", email: "", phone: "", company: "", message: "", privacy: false })
    }, 1500)
  }

  return (
    <section className="relative bg-[#F9FAFB] dark:bg-[#05151f] py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Text-Bereich */}
        <div>
          <p className="text-sm text-[#FF6600] font-semibold uppercase mb-2">Wir freuen uns auf Ihre Nachricht</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#08415C] dark:text-[#50C9E1] mb-6">Kontakt</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Kontaktieren Sie uns gern per Mail oder rufen Sie uns direkt an, damit wir Ihr Vorhaben besprechen können.
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-2 font-medium text-[#08415C] dark:text-white">
              📞 <span>+49 1520 576 5010</span>
            </p>
            <p className="flex items-center gap-2 font-medium text-[#08415C] dark:text-white">
              📧 <span>contact@kinemo.de</span>
            </p>
          </div>
        </div>

        {/* Formular */}
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#08415C] dark:text-[#50C9E1]">Ihr Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Vor- und Nachname"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-[#1a3a4b] bg-white dark:bg-[#0f2b3b] text-[#1a1a1a] dark:text-white placeholder-gray-400"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#08415C] dark:text-[#50C9E1]">
              Ihre E-Mail-Adresse <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="mustermann@musterfirma.de"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-[#1a3a4b] bg-white dark:bg-[#0f2b3b] text-[#1a1a1a] dark:text-white placeholder-gray-400"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#08415C] dark:text-[#50C9E1]">Telefonnummer</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Damit wir uns direkt bei Ihnen melden können."
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-[#1a3a4b] bg-white dark:bg-[#0f2b3b] text-[#1a1a1a] dark:text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2 text-[#08415C] dark:text-[#50C9E1]">
              Unternehmen <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Musterfirma"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-[#1a3a4b] bg-white dark:bg-[#0f2b3b] text-[#1a1a1a] dark:text-white placeholder-gray-400"
            />
            {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#08415C] dark:text-[#50C9E1]">Ihre Nachricht</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Details zu Ihrem Vorhaben oder Anliegen"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-[#1a3a4b] bg-white dark:bg-[#0f2b3b] text-[#1a1a1a] dark:text-white placeholder-gray-400"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              checked={form.privacy}
              onChange={handleChange}
              className="accent-[#FF6600]"
            />
            <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-400">
              Ich habe die <a href="/datenschutz" className="text-[#FF6600] underline">Datenschutzerklärung</a> zur Kenntnis genommen.
            </label>
          </div>
          {errors.privacy && <p className="text-red-500 text-sm -mt-4 mb-4">{errors.privacy}</p>}

          <div className="text-left">
            <button
              type="submit"
              disabled={loading}
              className="inline-block bg-[#FF6600] hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-full transition disabled:opacity-50"
            >
              {loading ? "Wird gesendet..." : "Absenden"}
            </button>
          </div>
        </form>
      </div>

      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-6"
          >
            <div className="bg-white dark:bg-[#0f2b3b] text-center px-8 py-12 rounded-xl shadow-xl max-w-md w-full">
              <h3 className="text-2xl font-bold text-[#08415C] dark:text-[#50C9E1] mb-4">Vielen Dank!</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns in Kürze bei Ihnen.</p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-2 inline-block bg-[#FF6600] hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-full"
              >
                Fenster schließen
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
