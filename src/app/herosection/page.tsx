"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, ArrowRight, Play, Scan } from "lucide-react"



// Typen für 3D-Animation
interface XRaySimulation {
  isActive: boolean;
  initializeAnimation: () => void;
  destroyAnimation: () => void;
}

// Komponente zur Steuerung der 3D-Röntgenanimation
const XRay3DEffect = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [simulation, setSimulation] = useState<XRaySimulation | null>(null)
  
  useEffect(() => {
    // Diese Funktion würde normalerweise die Three.js-Animation initialisieren
    // Für dieses Beispiel beschreiben wir die Funktionalität
    
    const setupXRaySimulation = (): XRaySimulation => {
      // In einer echten Implementierung würden hier Three.js-Elemente erstellt:
      // - Eine 3D-Szene mit einem Objekt (z.B. ein Maschinenteil)
      // - Ein Röntgeneffekt-Shader, der das Objekt "durchleuchtet"
      // - Eine Animation, die den Röntgenstrahl um das Objekt rotieren lässt
      
      const simulation: XRaySimulation = {
        isActive: true,
        
        initializeAnimation: () => {
          // In der echten Implementierung würden hier drei.js Elemente initialisiert
          console.log("3D Röntgensimulation gestartet")
        },
        
        destroyAnimation: () => {
          // In der echten Implementierung würden hier three.js Ressourcen freigegeben
          console.log("3D Röntgensimulation gestoppt")
        }
      }
      
      return simulation
    }
    
    const xraySimulation = setupXRaySimulation()
    xraySimulation.initializeAnimation()
    setSimulation(xraySimulation)
    
    return () => {
      if (xraySimulation.isActive) {
        xraySimulation.destroyAnimation()
      }
    }
  }, [])
  
  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {/* Fallback-Bild, falls 3D-Animation nicht unterstützt wird */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/xray-simulation-fallback.jpg"
          alt="3D Röntgenanalyse in Bewegung"
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay mit Animationseffekt */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08415C]/70 to-transparent mix-blend-multiply"></div>
        
        {/* Animierte Röntgenstrahlen */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#50C9E1] h-px opacity-70"
              style={{ 
                width: '100%',
                top: `${20 + i * 15}%`,
                left: '-100%'
              }}
              animate={{
                left: '200%',
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  // Für Röntgen-Effekt auf Text
  const [showXRay, setShowXRay] = useState(false)
  
  useEffect(() => {
    // Toggle Röntgen-Effekt alle 5 Sekunden
    const interval = setInterval(() => {
      setShowXRay(prev => !prev)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])
  
  const scrollToNextSection = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth"
      })
    }
  }

  // Anwendungsbeispiele
  const applications = [
    "Qualitätskontrolle", 
    "Bewegungsanalyse", 
    "Fehlerdiagnose", 
    "Produktentwicklung", 
    "Materialprüfung"
  ]
  
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#08415C] to-[#05151f] text-white min-h-[90vh] overflow-hidden">
        {/* Hintergrund mit 3D-Röntgen-Effekt */}
        <div className="absolute inset-0 opacity-25 mix-blend-screen">
          <div className="h-full w-full bg-[url('/xray-grid-pattern.svg')] bg-repeat"></div>
        </div>
        
        <div className="relative z-10 container mx-auto h-[90vh] flex flex-col md:flex-row items-center">
          {/* Text-Bereich */}
          <motion.div 
            className="w-full md:w-1/2 px-6 py-16 md:py-0 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <Scan size={24} className="text-[#50C9E1]" />
              <span className="text-sm uppercase tracking-widest font-semibold text-[#50C9E1]">Röntgentechnologie der nächsten Generation</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight relative">
              <span className={`transition-opacity duration-500 ${showXRay ? 'opacity-0' : 'opacity-100'}`}>
                Bewegungen in 3D
              </span>
              <span className={`absolute left-0 top-0 text-[#50C9E1] transition-opacity duration-500 ${showXRay ? 'opacity-100' : 'opacity-0'}`}>
                Röntgenanalyse
              </span>
              <span className="block mt-2">sichtbar machen</span>
            </h1>
            
            <p className="text-lg mb-8 max-w-xl text-gray-300 mx-auto md:mx-0">
              Unsere innovative 3D-Röntgentechnologie erfasst Bewegungen in Echtzeit und liefert tiefe Einblicke in komplexe mechanische Systeme – auch dort, wo herkömmliche Technologien an ihre Grenzen stoßen.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
              {applications.map((app, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium">
                  {app}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#50C9E1] hover:bg-[#7DDBF3] text-[#08415C] font-semibold px-6 py-3 rounded-full transition group"
              >
                Demo-Termin vereinbaren
                <ArrowRight size={18} className="ml-2 transition group-hover:translate-x-1" />
              </Link>
              
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center bg-transparent border border-white/30 hover:border-white text-white px-6 py-3 rounded-full transition mt-4 sm:mt-0"
              >
                <Play size={18} className="mr-2" />
                3D-Röntgen in Aktion
              </button>
            </div>
          </motion.div>
          
          {/* 3D-Röntgen-Visualisierung */}
          <motion.div 
            className="w-full md:w-1/2 h-[50vh] md:h-[90vh] relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <XRay3DEffect className="w-full h-full" />
            
            {/* Overlay mit technischen Daten */}
            <div className="absolute bottom-12 right-12 bg-black/40 backdrop-blur-md p-4 rounded-lg border border-white/20 max-w-xs hidden md:block">
              <div className="text-sm font-mono">
                <div className="flex justify-between text-[#50C9E1] mb-2">
                  <span>AUFLÖSUNG:</span>
                  <span>4K / 60FPS</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>SCAN-TIEFE:</span>
                  <span>180mm</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>PRÄZISION:</span>
                  <span>±0.02mm</span>
                </div>
                <div className="flex justify-between">
                  <span>DATENRATE:</span>
                  <span>2.8 GB/s</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll-Indikator */}
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
          <ChevronDown size={32} className="text-[#50C9E1]/80" />
        </motion.div>
      </section>
      
      {/* Anwendungsbereiche Section */}
      <div ref={scrollRef} className="bg-white dark:bg-[#0f2b3b] py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#08415C] dark:text-white mb-4">
              Präzise Einblicke durch 3D-Röntgentechnologie
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Unsere patentierte 3D-Röntgentechnologie revolutioniert die Bewegungsanalyse mit Echtzeit-Visualisierung und Datenerfassung für verschiedenste Anwendungen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-[#061b26] p-6 rounded-lg border border-gray-100 dark:border-[#1a3a4b] text-center">
              <div className="w-16 h-16 bg-[#08415C]/10 dark:bg-[#50C9E1]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#08415C] dark:text-[#50C9E1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#08415C] dark:text-[#50C9E1] mb-2">
                Fehleranalyse in Bewegung
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Identifizieren Sie Fehler in mechanischen Systemen während des Betriebs, ohne den Prozess unterbrechen zu müssen.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-[#061b26] p-6 rounded-lg border border-gray-100 dark:border-[#1a3a4b] text-center">
              <div className="w-16 h-16 bg-[#08415C]/10 dark:bg-[#50C9E1]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#08415C] dark:text-[#50C9E1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#08415C] dark:text-[#50C9E1] mb-2">
                3D-Visualisierung
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Erfassen Sie komplexe Bewegungen in dreidimensionalem Raum und erhalten Sie detaillierte Einblicke in verborgene Prozesse.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-[#061b26] p-6 rounded-lg border border-gray-100 dark:border-[#1a3a4b] text-center">
              <div className="w-16 h-16 bg-[#08415C]/10 dark:bg-[#50C9E1]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#08415C] dark:text-[#50C9E1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#08415C] dark:text-[#50C9E1] mb-2">
                Echtzeit-Datenerfassung
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sammeln Sie präzise Messdaten während der Röntgenanalyse und nutzen Sie sie für sofortige Auswertungen und Entscheidungen.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative bg-[#061b26] rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden border border-[#50C9E1]/30">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="aspect-video">
              {/* Hier würde ein echtes Video eingebettet */}
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <p className="text-white text-center p-8">
                  [Video: "3D-Röntgentechnologie in Bewegung - Tiefe Einblicke in komplexe mechanische Systeme"]
                </p>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#50C9E1] mb-2">
                3D-Röntgenanalyse im Einsatz
              </h3>
              <p className="text-gray-300">
                Sehen Sie, wie unsere patentierte Technologie komplexe Bewegungen in Echtzeit erfasst und visualisiert - für beispiellose Einblicke in Ihre technischen Systeme.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}