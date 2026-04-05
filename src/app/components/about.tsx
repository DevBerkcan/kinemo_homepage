"use client"

import { motion } from "framer-motion"
import { Award, Users, Target, Lightbulb, ArrowRight, Quote } from "lucide-react"
import Image from "next/image"

export default function ImprovedAbout() {
  const logos = [
    { name: "Start-up Center", src: "/Start-up-Center-Logo-Etikett-schwarz_Ausnahme.svg" },
    { name: "EFRE NRW", src: "/EFRE.NRW_.svg" },
    { name: "Berg Pitch", src: "/logo-Berg-Pitch_n.png" },
    { name: "BUW", src: "/BUW_Logo-weiss.png" },
  ]

  const achievements = [
    {
      icon: Users,
      number: "50+",
      label: "Zufriedene Industriekunden",
      description: "Von Startups bis Konzerne"
    },
    {
      icon: Target,
      number: "1000+",
      label: "Erfolgreiche Analysen",
      description: "CT- und Röntgenauswertungen"
    },
    {
      icon: Award,
      number: "5+",
      label: "Jahre Erfahrung",
      description: "In industrieller CT & ZfP"
    },
    {
      icon: Lightbulb,
      number: "3",
      label: "Patente",
      description: "Innovative Technologielösungen"
    }
  ]

  const expertise = [
    "Industrielle CT & Röntgenanalyse",
    "Zerstörungsfreie Prüfung (ZfP)",
    "Produktentwicklung & Qualitätssicherung",
    "Fehler- & Ursachenanalyse",
    "Medizintechnik & Biomechanik",
  ]

  return (
    <section className="bg-gradient-to-b from-[#fdfdfc] to-gray-50 dark:from-[#05151f] dark:to-[#061b26] text-[#1a1a1a] dark:text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#08415C] dark:text-[#50C9E1] mb-6">
            Der Kopf hinter <span className="text-[#50C9E1]">Kinemo</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Innovation entsteht dort, wo Leidenschaft auf Expertise trifft – 
            lernen Sie die Vision kennen, die Kinemo antreibt.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Enhanced Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#50C9E1]/20 to-[#08415C]/20 rounded-2xl blur-xl"></div>
              
              {/* Main image */}
              <div className="relative bg-white dark:bg-[#0f2b3b] p-2 rounded-2xl shadow-2xl">
                <Image
                  src="/sercan-atesoglu.jpeg"
                  alt="Sercan Atesoglu, Gründer von Kinemo"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-xl object-cover aspect-square"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-[#50C9E1] text-[#08415C] px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                  🚀 CEO & Gründer
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#50C9E1]/10 text-[#50C9E1] px-4 py-2 rounded-full text-sm font-medium">
              <Target size={16} />
              Sercan Atesoglu
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-[#08415C] dark:text-white leading-tight">
              Verborgene Fehler sichtbar machen – das ist unsere Mission
            </h3>

            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Als Ingenieur und Gründer entwickelte ich Kinemo aus der Überzeugung heraus, dass
                <strong className="text-[#08415C] dark:text-[#50C9E1]"> viele teure Fehler vermeidbar wären, wenn man früh genug ins Innere schaut</strong>.
              </p>

              <p>
                Meine Expertise in Biomechanik und industrieller Bildgebung hat mir gezeigt: Innere
                Strukturfehler sind mit konventionellen Methoden schlicht nicht erkennbar –
                industrielle CT und Röntgenanalyse schon.
              </p>

              <p>
                Heute unterstützt Kinemo Entwicklungs- und Qualitätsteams dabei, verborgene Fehler
                frühzeitig zu erkennen – <strong className="text-[#50C9E1]">bevor sie Zeit, Geld und Nerven kosten</strong>.
              </p>
            </div>

            {/* Expertise Tags */}
            <div>
              <h4 className="text-sm font-semibold text-[#08415C] dark:text-[#50C9E1] mb-3 uppercase tracking-wider">
                Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-white dark:bg-[#0f2b3b] text-sm text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-[#50C9E1] hover:bg-[#7DDBF3] text-[#08415C] font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Persönliches Gespräch vereinbaren
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Mission Statement */}
        <motion.div
          className="relative mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#08415C] to-[#0C5374] rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#50C9E1]/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#50C9E1]/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <Quote size={48} className="text-[#50C9E1] mx-auto mb-6 opacity-50" />
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
                "Jeder Fehler, der in der Entwicklung erkannt wird, ist ein Fehler, der nicht im Feld auftritt.
                Das ist der Mehrwert, den wir für unsere Kunden schaffen."
              </blockquote>
              <cite className="text-[#50C9E1] font-semibold">— Sercan Atesoglu, Gründer & CEO</cite>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Achievements */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-[#08415C] dark:text-white mb-12">
            Zahlen, die für sich sprechen
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-[#0f2b3b] p-6 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-[#50C9E1]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#50C9E1]/20 transition-colors">
                    <achievement.icon className="w-6 h-6 text-[#50C9E1]" />
                  </div>
                  <div className="text-3xl font-bold text-[#08415C] dark:text-[#50C9E1] mb-2">
                    {achievement.number}
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Partner Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#08415C] dark:text-[#50C9E1] mb-4">
              Unterstützt von führenden Institutionen
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Vertrauensvolle Partnerschaften mit renommierten Organisationen ermöglichen es uns, 
              kontinuierlich zu innovieren und zu wachsen.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0f2b3b] rounded-2xl p-8 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex flex-wrap justify-center items-center gap-12">
              {logos.map((logo, idx) => (
                <motion.div
                  key={idx}
                  className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.7, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ opacity: 1 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={160}
                    height={48}
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}