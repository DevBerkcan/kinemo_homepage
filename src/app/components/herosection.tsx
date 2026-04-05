"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, ArrowRight, Play, Scan, CheckCircle, Star } from "lucide-react"

// Optimierte 3D-Röntgen-Simulation
const XRay3DEffect = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {/* Modernisierter Hintergrund */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0C5374] via-[#08415C] to-[#061b26] border border-[#50C9E1]/20">
        
        {/* 3D Röntgen-Visualisierung */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Zentrales Scan-Icon */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Scan size={100} className="text-[#50C9E1]" />
            </motion.div>
            
            {/* Rotierende Scan-Ringe */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-2 border-[#50C9E1]/30 rounded-full"
                style={{
                  width: `${150 + i * 40}px`,
                  height: `${150 + i * 40}px`,
                  top: `${-75 - i * 20}px`,
                  left: `${-75 - i * 20}px`,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Verbesserte animierte Scan-Linien */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-0.5 opacity-60"
              style={{ 
                width: '120%',
                top: `${25 + i * 15}%`,
                left: '-120%',
                background: `linear-gradient(90deg, transparent, #50C9E1, transparent)`
              }}
              animate={{
                left: '120%',
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Particle Effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#50C9E1] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function OptimizedHero() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  
  const features = [
    { text: "Fehler früh erkennen, bevor sie teuer werden", icon: "🎯" },
    { text: "Entwicklungszyklen verkürzen", icon: "⚡" },
    { text: "Ausschuss und Reklamationen reduzieren", icon: "🔬" },
    { text: "Fundiertere Entscheidungen im F&E-Prozess", icon: "📊" }
  ]

  const applications = [
    "Produktentwicklung",
    "Qualitätssicherung",
    "Fehleranalyse",
    "Prototypenprüfung",
    "Serienvalidierung",
  ]

  // Animierte Features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])


  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#benefits')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.section 
        style={{ opacity }}
        className="relative bg-gradient-to-br from-[#08415C] via-[#0C5374] to-[#05151f] text-white min-h-screen overflow-hidden"
      >
        {/* Optimierter Hintergrund */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[url('/grid-pattern.svg')] bg-repeat animate-pulse"></div>
        </div>

        <div className="relative z-10 container mx-auto min-h-screen flex flex-col md:flex-row items-center px-6 py-16">
          
          {/* Verbesserter Content-Bereich */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            
            {/* Trust Badge */}
            <motion.div 
              className="flex items-center gap-2 mb-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-300">50+ zufriedene Industriekunden</span>
            </motion.div>

            <motion.div 
              className="flex items-center gap-2 mb-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Scan size={24} className="text-[#50C9E1]" />
              <span className="text-sm uppercase tracking-widest font-semibold text-[#50C9E1]">
                Industrielle CT &amp; Röntgenanalyse für die Produktentwicklung
              </span>
            </motion.div>
            
            {/* Verbesserter Haupttitel - Überlappung behoben */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Verborgene Produktfehler</span>
              <span className="block">
                <span className="text-[#50C9E1]">sichtbar machen</span> –
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-200 mt-1">
                bevor sie Zeit und Geld kosten.
              </span>
            </motion.h1>
            
            {/* Verbesserter Untertitel */}
            <motion.p
              className="text-lg mb-8 max-w-xl text-gray-200 mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Mit industrieller Röntgentechnologie und CT-Analysen unterstützt Kinemo Entwicklungs- und Qualitätsteams dabei,{" "}
              <span className="text-[#50C9E1] font-medium">innere Strukturen, Schwachstellen und Fehler frühzeitig zu erkennen</span> – noch bevor sie Zeit und Geld kosten.
            </motion.p>
            
            {/* Animierte Feature-Highlights - Überlappung behoben */}
            <motion.div 
              className="mb-8 min-h-[3rem] flex items-center justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <CheckCircle size={20} className="text-[#50C9E1] mr-3 flex-shrink-0" />
              <div className="relative min-h-[2rem] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-2xl">{features[currentFeature].icon}</span>
                    <span className="text-lg font-medium">{features[currentFeature].text}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
            
            {/* Verbesserte CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                href="/kontakt"
                className="group relative inline-flex items-center bg-[#50C9E1] hover:bg-[#7DDBF3] text-[#08415C] font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="relative">Jetzt Analyse anfragen</span>
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/anwendungsfaelle"
                className="inline-flex items-center bg-transparent border-2 border-white/30 hover:border-[#50C9E1] hover:bg-[#50C9E1]/10 text-white px-8 py-4 rounded-full transition-all duration-300"
              >
                <Play size={18} className="mr-2" />
                Anwendungsfälle ansehen
              </Link>
            </motion.div>

            {/* Anwendungsbereiche */}
            <motion.div 
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {applications.map((app, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors">
                  {app}
                </span>
              ))}
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              className="flex flex-wrap items-center gap-6 justify-center md:justify-start opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <span className="text-sm text-gray-300">Vertraut von Marktführern:</span>
              <div className="flex items-center gap-4 text-sm font-medium">
                <span className="hover:text-[#50C9E1] transition-colors">Brose</span>
                <span className="text-gray-500">•</span>
                <span className="hover:text-[#50C9E1] transition-colors">Vorwerk</span>
                <span className="text-gray-500">•</span>
                <span className="hover:text-[#50C9E1] transition-colors">Hansgrohe</span>
                <span className="text-gray-500">•</span>
                <span className="text-[#50C9E1]">50+ weitere</span>
              </div>
            </motion.div>
          </div>
          
          {/* Verbesserte Visualisierung */}
          <motion.div 
            className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <XRay3DEffect className="w-full h-full" />
            
            {/* Verbesserte Stats */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="text-sm font-mono space-y-2">
                <div className="flex justify-between text-[#50C9E1] font-bold">
                  <span>AUFLÖSUNG:</span>
                  <span>4K / 60FPS</span>
                </div>
                <div className="flex justify-between">
                  <span>PRÄZISION:</span>
                  <span className="text-[#50C9E1]">±0.02mm</span>
                </div>
                <div className="flex justify-between">
                  <span>ANALYSEZEIT:</span>
                  <span className="text-green-400"> 48h</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Verbesserter Scroll-Indikator */}
        <motion.div 
          className="absolute bottom-8 left-0 right-0 flex justify-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
          onClick={scrollToNextSection}
        >
          <div className="flex flex-col items-center gap-2 group">
            <span className="text-xs text-gray-400 group-hover:text-[#50C9E1] transition-colors">Mehr erfahren</span>
            <ChevronDown size={24} className="text-[#50C9E1]/80 group-hover:text-[#50C9E1] transition-colors" />
          </div>
        </motion.div>
      </motion.section>

    </>
  )
}