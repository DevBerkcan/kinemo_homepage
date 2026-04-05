import type { Metadata } from "next"

export const SITE_URL = "https://www.kinemo.de"
export const BRAND_NAME = "Kinemo"
export const DEFAULT_OG_IMAGE = "/og-image-xray.jpg"

export const DEFAULT_KEYWORDS = [
  "industrielle CT",
  "industrielle Computertomographie",
  "CT Analyse",
  "Röntgenanalyse",
  "zerstörungsfreie Prüfung",
  "ZfP",
  "Bauteilanalyse",
  "Fehleranalyse",
  "Lunkeranalyse",
  "Porositätsanalyse",
  "Baugruppenprüfung",
  "Qualitätssicherung",
  "Produktentwicklung",
  "Erstmusterprüfung",
  "Soll Ist Vergleich",
]

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString()
}

type PageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
  noindex?: boolean
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  noindex = false,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path)

  return {
    title,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    alternates: {
      canonical,
      languages: {
        de: canonical,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BRAND_NAME,
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "industrial inspection",
  }
}

export function createBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/favicon.ico"),
  email: "contact@kinemo.de",
  telephone: "+49 1520 5765010",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Heinz-Fangman-Str. 2",
    postalCode: "42287",
    addressLocality: "Wuppertal",
    addressCountry: "DE",
  },
  areaServed: "DE",
  sameAs: [],
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BRAND_NAME,
  url: SITE_URL,
  inLanguage: "de-DE",
  publisher: {
    "@type": "Organization",
    name: BRAND_NAME,
  },
}
