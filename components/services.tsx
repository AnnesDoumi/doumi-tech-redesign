"use client"

import { TrendingUp, Zap, Shield, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    icon: TrendingUp,
    title: "Webseiten, die wirklich gefunden werden",
    description:
        "Google zeigt deine Webseite nur, wenn sie schnell ist und richtig aufgebaut. Ich baue deine Seite so, dass du wirklich auf der Google-Ergebnisseite auftauchst – und nicht Seite 5.",
    technologies: "Google optimiert · Schnellladen · Suchmaschinen",
    image: "/googlesearch.jpg",
  },
  {
    icon: Zap,
    title: "Schnell und zuverlässig",
    description: "Eine langsame Webseite ist ein Geschäft-Killer. Besucher gehen weg, und Google zählt dir das als Fehler an. Meine Websites sind blitzschnell – egal ob am Handy oder Computer.",
    technologies: "Perfekte Geschwindigkeit · Alle Geräte · Immer online",
    image: "/fast-reliable.jpg",
  },
  {
    icon: Shield,
    title: "Full-Service Betreuung & Hosting",
    description:
        "Sie kümmern sich um Ihr Geschäft, ich mich um die Technik. Mit meinem Wartungspaket bleibt Ihre Seite sicher, DSGVO-konform und blitzschnell – inklusive persönlichem Support.",
    technologies: "Hosting · Updates · Backup · Support",
    image: "/support.jpg",
  },
]

export function Services() {
  return (
      <section className="cv-auto pt-3 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16 pt-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Das baue ich für dich
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vom ersten Gespräch bis zum Go-Live – alles aus einer Hand, alles verständlich erklärt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                  <article
                      key={index}
                      className="group relative rounded-3xl overflow-hidden border border-border/50 bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
                  >
                    {/* Link Overlay - Macht die ganze Card klickbar */}
                    <Link href="/contact" className="absolute inset-0 z-30">
                      <span className="sr-only">{service.title} anfragen</span>
                    </Link>

                    {/* Bild Bereich */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          sizes="(min-width:1024px) 33vw, 100vw"
                          priority={index < 2}
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Subtiles Overlay auf dem Bild bei Hover */}
                      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4 relative z-20">
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-xl bg-accent/20 text-accent group-hover:bg-accent/30 transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>

                        {/* Pfeil Icon als visueller Hinweis auf Link */}
                        <div className="p-2 rounded-lg bg-muted/50 text-muted-foreground group-hover:text-accent group-hover:bg-accent/10 transition-all">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 pt-2 border-t border-border/50">
                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                            {service.technologies}
                        </span>
                      </div>
                    </div>
                  </article>
              )
            })}
          </div>
        </div>
      </section>
  )
}