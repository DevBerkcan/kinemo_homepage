"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const logos = [
  { src: "/01_logo_blau.png", alt: "Kinemo" },
  { src: "/witte_automotive.svg", alt: "Witte Automotive" },
  { src: "/hansgrohe.svg", alt: "Hansgrohe" },
  { src: "/BROSE_Excellence_in_Mechatronics.png", alt: "Brose" },
  { src: "/FramoMorat_Logo_FMG.png", alt: "Framo Morat" },
  { src: "/Logo-SAGSchriftzug-RGB.jpg", alt: "Schulte-Schlagbaum AG" },
]

export default function LogoBanner() {
  const [isMobile, setIsMobile] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="bg-orange-500 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
          Vertraut von führenden Industriepartnern
        </h2>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex gap-16 whitespace-nowrap will-change-transform ${
            isMobile ? 'animate-marquee-slow' : 'animate-marquee'
          }`}
          style={{
            animationPlayState: isHovered ? 'paused' : 'running',
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="h-12 w-auto flex items-center justify-center grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                height={48}
                width={160}
                className="object-contain h-12 w-auto max-w-[160px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
