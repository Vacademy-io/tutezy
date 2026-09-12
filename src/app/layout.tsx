import type { Metadata } from "next";
import { Outfit, Manrope, Kalam } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-outfit", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-manrope", display: "swap" });
const kalam = Kalam({ subsets: ["latin", "devanagari"], weight: ["400", "700"], variable: "--font-kalam", display: "swap" });

import { SITE, SITE_NAME } from "@/lib/site";
import { Tracking } from "@/components/Tracking";

const GTM_ID = "GTM-5C4DDJ6W";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Tutezy by Vacademy — a live AI teacher for every student", template: "%s | Tutezy" },
  applicationName: "Tutezy",
  manifest: "/site.webmanifest",
  description:
    "Turn your videos, PDFs and slides into live, personalised whiteboard lessons. A teacher that speaks in your voice, checks understanding, revisits weak spots and reports back. Pay per minute. Book a demo.",
  keywords: ["AI tutor", "personalized learning", "AI live classes", "coaching institute software", "Vacademy", "Tutezy"],
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Tutezy by Vacademy",
    title: "Tutezy — a live AI teacher for every student",
    description: "Personalised whiteboard lessons taught live, in your teacher's voice and face. Pay per minute.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tutezy by Vacademy" }],
  },
  twitter: { card: "summary_large_image", title: "Tutezy by Vacademy", description: "A live AI teacher for every student. Pay per minute.", images: ["/og.png"] },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/icon-192.png", sizes: "192x192", type: "image/png" }, { url: "/icon-512.png", sizes: "512x512", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
  alternates: { canonical: SITE },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Tutezy",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web, Android, iOS",
      url: SITE,
      featureList: [
        "Live whiteboard lessons compiled from existing PDFs, videos, slides and quizzes",
        "Teacher voice cloning and animated avatar",
        "Questions, hints and remediation with per-concept mastery tracking",
        "English and Hindi, switchable mid-lesson",
        "Per-student and per-batch insights with CSV export",
        "Pay per learner-minute, no seat licences",
      ],
      inLanguage: ["en", "hi"],
      description:
        "Tutezy by Vacademy turns existing course content into live, personalised AI whiteboard lessons with voice, checks, revisits and insights for institutes and solo teachers.",
      offers: [
        { "@type": "Offer", price: "3", priceCurrency: "INR", description: "Per learner-minute of live lesson" },
        { "@type": "Offer", price: "0.03", priceCurrency: "USD", description: "Per learner-minute of live lesson" },
      ],
      publisher: { "@type": "Organization", name: "Vacademy", url: "https://vacademy.io" },
    },
    {
      "@type": "Organization",
      name: SITE_NAME,
      alternateName: "Tutezy",
      url: SITE,
      logo: `${SITE}/logo.png`,
      sameAs: ["https://vacademy.io"],
      contactPoint: [{ "@type": "ContactPoint", contactType: "sales", telephone: "+91-99933-36616", availableLanguage: ["en", "hi"] }],
      parentOrganization: { "@type": "Organization", name: "Vacademy", url: "https://vacademy.io" },
    },
    {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE,
      inLanguage: "en",
      publisher: { "@type": "Organization", name: "Vacademy", url: "https://vacademy.io" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${manrope.variable} ${kalam.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="gtm" />
        </noscript>
        <Tracking />
        {children}
      </body>
    </html>
  );
}
