// page.tsx
import Navbar from "@components/navigationsbar"
import Hero from "@components/herosection"
import KinemoShowcase from "@components/kinemoShowcase"
import Footer from "@components/Footer"
import LogoBanner from "./helpercomponents/logoBanner"
import About from "@components/about"
import UspSection from "./components/UspSection"
import CallToActionSection from "./helpercomponents/CallToActionSection"
import DemoRequestForm from "./components/DemoRequestForm"
import TestimonialsSection from "./components/testimonials"
import FaqSection from "./components/faqsection"

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#061b26] text-gray-900 dark:text-white">
      <Navbar />                       
      <Hero />                       
      <UspSection />                  
      <LogoBanner />    
      <About />                
      <KinemoShowcase /> 
      <TestimonialsSection />           
      <FaqSection     />          
      <CallToActionSection /> 
      <DemoRequestForm />            
      <Footer />                     
    </main>
  )
}


// 🧭 Navigation zuerst – wie gewohnt
 // 🎯 Attention: Klare Headline + Value Proposition + CTA oben
 // 📌 Interest: Sofort die wichtigsten Vorteile nennen
 // 💼 Trust: Logos von Kunden → soziale Bewährtheit
 // 🧠 Proof & Depth: Technik-Insights & Vorher-Nachher Vergleich
 // 👤 Mensch hinter dem Produkt: Vertrauen aufbauen
  // 🚀 Desire: Ermutigen zur Handlung
   // 📅 Action: Konkrete Conversion-Möglichkeit
    // 📎 Links, Kontakt & Rechtliches