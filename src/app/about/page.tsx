"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutMeSection() {
  const logos = [
    { name: "Start-up Center", src: "/Start-up-Center-Logo-Etikett-schwarz_Ausnahme.svg" },
    { name: "EFRE NRW", src: "/EFRE.NRW_.svg" },
    { name: "Berg Pitch", src: "/logo-Berg-Pitch_n.png" },
    { name: "BUW", src: "/BUW_Logo-weiss.png" },
  ]

  return (
    <section className="bg-[#fdfdfc] dark:bg-[#05151f] text-[#1a1a1a] dark:text-white py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Bildbereich */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://picsum.photos/600/600"
            alt="Portrait von Berkcan Atesoglu"
            className="w-full h-auto rounded-xl shadow-2xl object-cover border-4 border-kinemo"
          />
        </motion.div>

        {/* Textbereich */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#08415C] dark:text-[#50C9E1] mb-6 leading-snug">
            Meine Geschichte
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Mein Name ist Berkcan Atesoglu – ich glaube daran, dass Bewegung der Schlüssel zu einem erfüllten Leben ist.
            In meiner Laufbahn habe ich gelernt, dass nicht nur Technik zählt, sondern auch echtes Zuhören und Verstehen.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Deshalb habe ich Kinemo gegründet: als Ort, an dem Menschlichkeit, Innovation und Therapie zusammenfinden.
            Jeder Fortschritt beginnt mit einem ersten Schritt – und genau den machen wir gemeinsam.
          </p>
        </motion.div>
      </div>

      {/* Mission Statement */}
      <motion.div
        className="mt-28 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <blockquote className="text-2xl md:text-3xl italic text-[#08415C] dark:text-[#50C9E1] font-medium leading-snug">
          "Innovation wird dort sichtbar, wo Technik den Menschen wirklich bewegt."
        </blockquote>
      </motion.div>

      {/* Logo-Bereich */}
      <div className="mt-24">
        <p className="text-center text-lg font-semibold text-[#08415C] dark:text-[#50C9E1] mb-4">
          Unterstützt und gefördert durch starke Partner
        </p>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Diese Institutionen begleiten Kinemo als vertrauensvolle Partner und ermöglichen es, Innovation und Bewegung neu zu denken.
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-12 px-4">
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              className="transition duration-300 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={40}
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}