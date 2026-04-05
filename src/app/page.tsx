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
import PainPointSection from "./components/PainPointSection"
import ServicesPreview from "./components/ServicesPreview"
import IndustriesSection from "./components/IndustriesSection"
import ProcessSteps from "./components/ProcessSteps"
import {
  BRAND_NAME,
  SITE_URL,
  createBreadcrumbJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BRAND_NAME,
  description:
    "Industrielle CT und Röntgenanalyse für Produktentwicklung und Qualitätssicherung. Zerstörungsfreie Bauteilprüfung in 48h.",
  url: SITE_URL,
  telephone: "+4915205765010",
  email: "contact@kinemo.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Heinz-Fangman-Str. 2",
    addressLocality: "Wuppertal",
    postalCode: "42287",
    addressCountry: "DE",
  },
  areaServed: "DE",
  serviceType: [
    "Industrielle Computertomographie",
    "Röntgenanalyse",
    "Zerstörungsfreie Prüfung",
    "Fehleranalyse",
  ],
}

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Kinemo – Industrielle CT & Röntgenanalyse",
  url: SITE_URL,
  description:
    "Industrielle CT und Röntgenanalyse für Produktentwicklung, Fehleranalyse und Qualitätssicherung.",
  about: [
    "Industrielle Computertomographie",
    "Röntgenanalyse",
    "Zerstörungsfreie Prüfung",
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Welche Bauteile und Materialien können geprüft werden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grundsätzlich können alle festen Materialien geprüft werden – von Metallen über Kunststoffe und Verbundwerkstoffe bis hin zu elektronischen Baugruppen. Die Bauteilgröße reicht von Mikrokomponenten bis hin zu größeren Baugruppen.",
      },
    },
    {
      "@type": "Question",
      name: "Ist die Analyse zerstörungsfrei?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, vollständig. Industrielle CT und Röntgenanalyse sind zerstörungsfreie Prüfverfahren (ZfP). Ihr Bauteil bleibt nach der Analyse in unverändertem Zustand.",
      },
    },
    {
      "@type": "Question",
      name: "Wie schnell erhalten wir die Ergebnisse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der Regel erhalten Sie Ihre Ergebnisse innerhalb von 48 Stunden nach Eingang des Bauteils.",
      },
    },
    {
      "@type": "Question",
      name: "In welcher Entwicklungsphase ist eine CT-Analyse sinnvoll?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Je früher, desto besser. Eine Analyse lohnt sich bereits beim ersten Prototypen, bei der Vorserie und vor Serienfreigaben.",
      },
    },
    {
      "@type": "Question",
      name: "Können auch kleine Serien oder Einzelprototypen analysiert werden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Kinemo arbeitet sowohl mit Einzelprototypen als auch mit kleinen Serien. Es gibt keine Mindestmengenanforderung.",
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            createBreadcrumbJsonLd([{ name: "Startseite", path: "/" }])
          ),
        }}
      />
      <main className="bg-white dark:bg-[#061b26] text-gray-900 dark:text-white">
        <Navbar />
        <Hero />
        <LogoBanner />
        <PainPointSection />
        <UspSection />
        <ServicesPreview />
        <KinemoShowcase />
        <IndustriesSection />
        <ProcessSteps />
        <TestimonialsSection />
        <About />
        <FaqSection />
        <CallToActionSection />
        <DemoRequestForm />
        <Footer />
      </main>
    </>
  )
}
