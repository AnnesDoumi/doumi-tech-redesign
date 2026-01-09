import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

// Schriftart: Inter lokal laden (keine blockierenden Google-Requests)
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    preload: true,
    variable: "--font-inter",
})

export const metadata: Metadata = {
    title: "doumi.tech – Webdesign & Webentwicklung | Moderne Webseiten",
    description:
        "Professionelle Webentwicklung & Webdesign. Moderne, schnelle und SEO-optimierte Webseite für Unternehmen, Marken & Freelancer. Entwickelt mit Next.js & React.",
    icons: {
        icon: "/favicon.png",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },

    other: {
        "link[rel=preload]": "/_next/static/css/app/layout.css",
        "as": "style",
    },

    alternates: {
        canonical: "https://doumi.tech",
    },
    openGraph: {
        title: "doumi.tech – Webentwicklung & Webdesign in Berlin",
        description:
            "Webentwicklung mit Fokus auf Performance, Benutzererfahrung und SEO. Klare, schnelle Webseiten mit modernem Design.",
        url: "https://doumi.tech",
        siteName: "doumi.tech",
        images: [
            {
                url: "/preview.png",
                width: 1200,
                height: 630,
                alt: "doumi.tech – moderne Webentwicklung & Webdesign",
            },
        ],
        locale: "de_DE",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "doumi.tech – Webdesign & Webentwicklung in Berlin",
        description:
            "Professionelle Webentwicklung & Webdesign. Moderne Webseiten mit Next.js, React & Tailwind.",
        images: ["/preview.png"],
    },
}

// Next.js Viewport Config
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "#0b0b0b",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="de" className="h-full">
        <head>
            {/* Favicon preload */}
            <link rel="preload" as="image" href="/favicon.png" />
            {/* Hero-Bild preload (LCP fix) */}
            <link rel="preload" as="image" href="/favicon.png" />
            {/* Strukturierte Daten (Local Business für SEO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "doumi.tech",
                        url: "https://doumi.tech",
                        image: "https://doumi.tech/preview.png",
                        description:
                            "Webdesign und Webentwicklung in Berlin – moderne, performante Webseiten mit exzellentem SEO",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Gropiusstraße 3",
                            addressLocality: "Berlin",
                            postalCode: "13357",
                            addressCountry: "DE",
                        },
                        sameAs: [
                            "https://www.linkedin.com/in/annes-bani-al-doumi",
                            "https://www.instagram.com/doumi.tech",
                        ],
                    }),
                }}
            />
        </head>
        <body
            className={`${inter.className} font-sans antialiased min-h-screen bg-background text-foreground`}
        >
        {children}

        {/* Vercel Analytics */}
        <Analytics />

        {/* Skripte nach Paint laden */}
        <Script
            id="non-critical-scripts"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
              // Beispiel: spätere Third-Party Inits (wenn du je was brauchst)
            `,
            }}
        />
        </body>
        </html>
    )
}
