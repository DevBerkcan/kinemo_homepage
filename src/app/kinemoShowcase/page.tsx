"use client"

import Image from "next/image"
import ReactCompareImage from "react-compare-image"
import { useState } from "react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Dr. Anna Becker",
    role: "Leiterin Bewegungsdiagnostik, OrthoPlus",
    text: "Mit Kinemo konnten wir erstmals präzise Bewegungsanalysen in Echtzeit durchführen. Ein Meilenstein für unsere Diagnostik!",
    image: "/testimonials/anna.jpg",
  },
  {
    name: "Prof. Markus Held",
    role: "Entwicklungsleiter, MotionMedTech",
    text: "Dank der Röntgenanalyse von Kinemo erkennen wir kritische Fehler im Systemaufbau – noch bevor sie real auftreten.",
    image: "/testimonials/markus.jpg",
  },
]

export default function KinemoShowcase() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const next = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-white dark:bg-[#0f2b3b] py-16">
      <div className="container mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-kinemo dark:text-white mb-4">Röntgenanalyse im Vergleich</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Bewegen Sie den Regler und vergleichen Sie die visuelle Darstellung mit und ohne Kinemo-3D-Röntgentechnologie.
          </p>
        </div>

        {/* Vergleichsslider */}
        <div className="max-w-4xl mx-auto mb-16">
          <ReactCompareImage
            leftImage="/xray-before.jpg"
            rightImage="/xray-after.jpg"
            sliderLineColor="#50C9E1"
            handleSize={40}
          />
        </div>

        {/* Testimonials */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-kinemo dark:text-white">Das sagen unsere Partner</h3>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-[#061b26] p-6 rounded-xl shadow-md border border-gray-200 dark:border-[#1a3a4b] text-center"
          >
            <Image
              src={testimonials[activeTestimonial].image}
              alt={testimonials[activeTestimonial].name}
              width={64}
              height={64}
              className="rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              "{testimonials[activeTestimonial].text}"
            </p>
            <p className="font-semibold text-kinemo dark:text-kinemo-light">
              {testimonials[activeTestimonial].name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonials[activeTestimonial].role}
            </p>
          </motion.div>

          <div className="flex justify-between mt-6 px-4 text-kinemo dark:text-kinemo-light">
            <button onClick={prev} aria-label="Zurück">◀</button>
            <button onClick={next} aria-label="Weiter">▶</button>
          </div>
        </div>
      </div>
    </section>
  )
}
