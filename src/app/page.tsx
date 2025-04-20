// page.tsx
import Navbar from "@components/navigationsbar"
import Hero from "@components/herosection"
import KinemoShowcase from "@components/kinemoShowcase"
import Contact from "@components/Contact"
import Footer from "@components/Footer"
import LogoBanner from "./helpercomponents/logoBanner"
import About from "@components/about"

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#061b26] text-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <LogoBanner />
      <KinemoShowcase />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
