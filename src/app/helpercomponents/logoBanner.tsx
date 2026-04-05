"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const logos = [
  { src: "/01_logo_blau.png", alt: "Kinemo", description: "3D-Röntgentechnologie" },
  { src: "/witte_automotive.svg", alt: "Witte Automotive", description: "Automotive Solutions" },
  { src: "/hansgrohe.svg", alt: "Hansgrohe", description: "Sanitärtechnik" },
  { src: "/BROSE_Excellence_in_Mechatronics.png", alt: "Brose", description: "Mechatronik" },
  { src: "/FramoMorat_Logo_FMG.png", alt: "Framo Morat", description: "Antriebstechnik" },
  { src: "/Logo-SAGSchriftzug-RGB.jpg", alt: "Schulte-Schlagbaum AG", description: "Sicherheitstechnik" },
]

export default function SimpleLogoBanner() {
  const [isMobile, setIsMobile] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <section className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 py-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-24 h-24 bg-white/10 rounded-full blur-lg animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
            Vertraut von <span className="text-yellow-300">führenden</span> Industriepartnern
          </h2>
        </motion.div>

        {/* Logo Carousel */}
        <div
          className="relative w-full overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 py-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-orange-500/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-orange-500/80 to-transparent z-10 pointer-events-none"></div>
          
          <motion.div
            className="flex gap-12"
            animate={{
              x: isHovered ? "0%" : "-50%"
            }}
            transition={{
              duration: isHovered ? 0.5 : 25,
              ease: "linear",
              repeat: isHovered ? 0 : Infinity
            }}
          >
            {duplicatedLogos.map((logo, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 group cursor-pointer relative z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500 rounded-xl"
                onMouseEnter={() => setHoveredLogo(i)}
                onMouseLeave={() => setHoveredLogo(null)}
                onFocus={() => setHoveredLogo(i)}
                onBlur={() => setHoveredLogo(null)}
                whileHover={{ scale: 1.1, zIndex: 30 }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: hoveredLogo === i ? 30 : 10 }}
                tabIndex={0}
                role="button"
                aria-label={`Mehr Informationen über ${logo.alt} anzeigen`}
              >
                <div className="relative z-20">
                  {/* Logo Container */}
                  <div className="h-14 w-44 flex items-center justify-center bg-white/90 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/30 group-hover:bg-white">
                    <Image
                      src={logo.src}
                      alt={`${logo.alt} Logo - ${logo.description}`}
                      title={`${logo.alt} - ${logo.description}`}
                      width={160}
                      height={40}
                      className="object-contain h-10 w-auto max-w-[160px] grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  
                  {/* Accessible Tooltip */}
<motion.div
  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-gray-900 px-2 py-1 rounded shadow-lg text-xs font-normal whitespace-nowrap z-50 border border-gray-200"
  initial={{ opacity: 0, y: -10, scale: 0.8 }}
  animate={hoveredLogo === i ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -10, scale: 0.8 }}
  transition={{ duration: 0.2 }}
  style={{ pointerEvents: hoveredLogo === i ? 'auto' : 'none' }}
  role="tooltip"
  aria-label={`Information über ${logo.alt}`}
>
  <div className="font-semibold text-gray-900">{logo.alt}</div>
  <div className="text-[10px] text-gray-500 mt-0.5">{logo.description}</div>
  {/* Arrow */}
  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-l border-t border-gray-200"></div>
</motion.div>
                  
                  {/* Screen Reader Only Text */}
                  <span className="sr-only">
                    Partner: {logo.alt}, Bereich: {logo.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, -20, -10],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      {/* CSS for additional animations */}
      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}