import type { Metadata } from "next";
import { Outfit, Manrope, Kalam } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-outfit", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-manrope", display: "swap" });
const kalam = Kalam({ subsets: ["latin", "devanagari"], weight: ["400", "700"], variable: "--font-kalam", display: "swap" });

const SITE = "https://tutezy.ai";
const GTM_ID = "GTM-5C4DDJ6W";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Tutezy by Vacademy — a live AI teacher for every student",
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
  icons: { icon: "/favicon.svg" },
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
      name: "Tutezy by Vacademy",
      url: SITE,
      logo: `${SITE}/logo.png`,
      parentOrganization: { "@type": "Organization", name: "Vacademy", url: "https://vacademy.io" },
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
        {children}
      </body>
    </html>
  );
}
