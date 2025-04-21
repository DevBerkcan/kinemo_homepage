"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"

const ReactCompareImage = dynamic(() => import("react-compare-image"), { ssr: false })

export default function KinemoShowcase() {
  return (
    <section className="bg-white dark:bg-[#0f2b3b] py-24 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#08415C] dark:text-white mb-4">
          Röntgenanalyse im Vergleich
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Bewegen Sie den Regler und vergleichen Sie die visuelle Darstellung mit und ohne Kinemo-3D-Röntgentechnologie.
        </p>
      </div>

      {/* Drei Vergleichsslider nebeneinander */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#061b26] p-4 rounded-lg shadow-lg border border-gray-200 dark:border-[#1a3a4b]"
          >
            <ReactCompareImage
              leftImage="/xray-before.jpg"
              rightImage="/xray-after.jpg"
              sliderLineColor="#50C9E1"
              handleSize={40}
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
              Beispiel {i + 1}: Analyse eines mechanischen Teils
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
