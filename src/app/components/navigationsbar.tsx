"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, Moon, Sun, Phone, ChevronDown, ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

const menu = [
  { title: "Startseite", path: "/" },
  { title: "Über uns", path: "/about" },
  {
    title: "Dienstleistungen",
    path: "/services",
    children: [
      { title: "Röntgen in Bewegung", path: "/services/x-ray-in-motion" },
      { title: "Dynamische CT", path: "/services/dynamic-ct" },
      { title: "Hypothesen belegen", path: "/services/validate-hypotheses" },
      { title: "Fehleranalyse", path: "/services/error-analysis" },
    ],
  },
  {
    title: "Branchenlösungen",
    path: "/solutions",
    children: [
      { title: "Automobilindustrie", path: "/solutions/automotive" },
      { title: "Luft- und Raumfahrt", path: "/solutions/aerospace" },
      { title: "Maschinenbau", path: "/solutions/mechanical-engineering" },
    ],
  },
  { title: "Fallstudien", path: "/case-studies" },
  { title: "Blog & News", path: "/blog" },
  {
    title: "Ressourcen",
    path: "/resources",
    children: [
      { title: "Whitepapers", path: "/resources/whitepapers" },
      { title: "Webinare", path: "/resources/webinars" },
      { title: "Downloads", path: "/resources/downloads" },
    ],
  },
  { title: "Kontakt", path: "/contact" },
  { title: "FAQ", path: "/faq" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const router = useRouter()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  // Laden des Dark Mode Status aus localStorage beim ersten Rendern
  useEffect(() => {
    // Prüfen, ob wir im Browser-Umfeld sind
    if (typeof window !== 'undefined') {
      // Präferenz aus localStorage laden oder System-Präferenz prüfen
      const savedMode = localStorage.getItem('darkMode')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      const shouldBeDark = savedMode 
        ? savedMode === 'true'
        : prefersDark
      
      setDarkMode(shouldBeDark)
      document.documentElement.classList.toggle("dark", shouldBeDark)
    }
  }, [])

  // Scroll-zu-Top Button anzeigen/verstecken
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Schließen des Menüs beim Klicken außerhalb
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpen && !target.closest('nav') && !target.closest('button')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  // Schließen des Mobile-Menüs beim Ändern des Pfades
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const toggleMenu = () => setIsOpen(!isOpen)
  
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    document.documentElement.classList.toggle("dark", newDarkMode)
    // Speichern der Präferenz
    localStorage.setItem('darkMode', String(newDarkMode))
  }

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value
    router.push(`${locale}${pathname}`)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toggleMobileSubmenu = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  // Aktuelle Sprache aus dem Pathname extrahieren
  const getCurrentLanguage = () => {
    if (pathname.startsWith('/en')) return '/en'
    return '/de'  // Standardsprache
  }

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-[#061b26]/95 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 relative">
              <Image 
                src="/01_logo_blau.png" 
                alt="Kinemo Logo" 
                width={130} 
                height={40}
                className="transition-opacity duration-300"
                priority
              />
            </Link>

            {/* Desktop Buttons rechts */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={toggleDarkMode} 
                className="text-[#08415C] dark:text-[#50C9E1] hover:scale-110 transition-transform"
                aria-label={darkMode ? "Zu hellem Modus wechseln" : "Zu dunklem Modus wechseln"}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <select
                onChange={handleLanguageChange}
                className="bg-transparent border border-[#08415C]/30 dark:border-white/20 rounded px-2 py-1 text-sm text-[#08415C] dark:text-white cursor-pointer transition-colors"
                defaultValue={getCurrentLanguage()}
                aria-label="Sprache wählen"
              >
                <option value="/de">DE</option>
                <option value="/en">EN</option>
              </select>

              <a
                href="tel:+49123456789"
                className="flex items-center gap-2 border px-3 py-1 rounded-md text-sm hover:bg-[#50C9E1]/10 text-[#08415C] dark:text-white transition-colors"
                aria-label="Anrufen"
              >
                <Phone size={16} /> +49 123 456789
              </a>

              <Link
                href="/contact"
                className="bg-[#50C9E1] hover:bg-[#7DDBF3] text-[#08415C] font-semibold px-4 py-2 rounded-md text-sm transition-colors"
              >
                Jetzt Termin vereinbaren
              </Link>
            </div>

            <button
              className="md:hidden text-[#08415C] dark:text-[#50C9E1] p-1"
              onClick={toggleMenu}
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-wrap gap-6 pb-4">
            {menu.map((item, idx) => (
              <div key={idx} className="relative group">
                <Link
                  href={item.path}
                  className={`text-sm font-medium px-2 py-1 transition-colors duration-200 hover:text-[#50C9E1] flex items-center ${
                    pathname === item.path || pathname.startsWith(item.path + '/') 
                      ? "text-[#50C9E1]" 
                      : "text-[#08415C] dark:text-white"
                  }`}
                >
                  {item.title}
                  {item.children && (
                    <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 mt-2 bg-white dark:bg-[#0f2b3b] border dark:border-[#1f3a4b] rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50 min-w-[180px]">
                    {item.children.map((child, i) => (
                      <Link
                        key={i}
                        href={child.path}
                        className={`block whitespace-nowrap px-4 py-2 text-sm hover:bg-[#F2F2F2] dark:hover:bg-[#1f3a4b] transition-colors duration-200 ${
                          pathname === child.path ? "text-[#50C9E1] font-medium" : "text-[#08415C] dark:text-white"
                        }`}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full z-40 bg-white dark:bg-[#061b26] px-6 pb-6 shadow-xl border-t border-gray-100 dark:border-[#1a3a4b]"
          >
          
              <div className="max-h-[70vh] overflow-y-auto py-2">
                {menu.map((item, idx) => (
                  <div key={idx} className="mt-4">
                    <div className="flex justify-between items-center">
                      <Link
                        href={item.path}
                        className={`text-base font-medium ${
                          pathname === item.path || pathname.startsWith(item.path + '/') 
                            ? "text-[#50C9E1]" 
                            : "text-[#08415C] dark:text-white"
                        }`}
                        onClick={() => !item.children && setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                      {item.children && (
                        <button
                          onClick={() => toggleMobileSubmenu(idx)}
                          className="p-1 text-[#08415C] dark:text-white"
                          aria-label={expandedItems.includes(idx) ? "Untermenü schließen" : "Untermenü öffnen"}
                          aria-expanded={expandedItems.includes(idx)}
                        >
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${
                              expandedItems.includes(idx) ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {item.children && expandedItems.includes(idx) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 mt-2 space-y-2 overflow-hidden"
                        >
                          {item.children.map((child, i) => (
                            <Link
                              key={i}
                              href={child.path}
                              className={`block text-sm py-1 ${
                                pathname === child.path ? "text-[#50C9E1]" : "text-[#08415C] dark:text-white"
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile Extra Actions */}
              <div className="mt-6 space-y-4">
                <div className="flex gap-4 items-center justify-between mb-4">
                  <button 
                    onClick={toggleDarkMode} 
                    className="flex items-center gap-2 text-[#08415C] dark:text-white border border-[#08415C]/30 dark:border-white/20 px-3 py-2 rounded-md"
                    aria-label={darkMode ? "Zu hellem Modus wechseln" : "Zu dunklem Modus wechseln"}
                  >
                    {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                    <span className="text-sm">{darkMode ? "Heller Modus" : "Dunkler Modus"}</span>
                  </button>
                  
                  <select
                    onChange={handleLanguageChange}
                    className="bg-transparent border border-[#08415C]/30 dark:border-white/20 rounded px-2 py-2 text-sm text-[#08415C] dark:text-white"
                    defaultValue={getCurrentLanguage()}
                    aria-label="Sprache wählen"
                  >
                    <option value="/de">Deutsch</option>
                    <option value="/en">English</option>
                  </select>
                </div>
                
                <Link
                  href="/contact"
                  className="block bg-[#50C9E1] text-center text-[#08415C] font-semibold px-4 py-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Jetzt Termin vereinbaren
                </Link>
                
                <a
                  href="tel:+49123456789"
                  className="flex items-center justify-center gap-2 border px-4 py-2 rounded-md text-sm text-[#08415C] dark:text-white"
                >
                  <Phone size={16} /> +49 123 456789
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-6 right-6 z-50 bg-[#50C9E1] hover:bg-[#7DDBF3] text-[#08415C] p-2 rounded-full shadow-lg"
            onClick={scrollToTop}
            aria-label="Nach oben scrollen"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}