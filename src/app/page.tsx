
import AboutMeSection from "./about/page"
import Footer from "./footer/page"
import Hero from "./herosection/page"
import Navbar from "./navigationbar/page"


export default function Home() {
  return (
    <main className="bg-white dark:bg-[#061b26] text-gray-900 dark:text-white">
      <Navbar/>
      <Hero />
      <AboutMeSection />
      <Footer />
    </main>
  )
}
