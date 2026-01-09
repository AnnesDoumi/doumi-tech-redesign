"use client"

import { useState } from "react"
import { TrendingUp, Zap, Shield, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { PreviewModal } from "@/components/preview-modal"

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
    title: "Professioneller Support & Beratung",
    description:
        "Ich bin nicht nur Webentwickler. Ich verstehe auch deine IT-Infrastruktur und kann dir zu Datenschutz, Sicherheit und Hosting beraten. Du bekommst also echte Expertise, nicht nur Coding.",
    technologies: "IT-Beratung · Sicherheit · Aufbau & Technik",
    image: "/support.jpg",
  },
]

export function Services() {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null)

  const openPreview = (src: string, alt: string) => setPreview({ src, alt })
  const closePreview = () => setPreview(null)

  return (
      <section className="cv-auto pt-3 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16 pt-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">Das baue ich für dich</h2>
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
                    {/* Bild (öffnet Vorschau) */}
                    <button
                        type="button"
                        onClick={() => openPreview(service.image, service.title)}
                        className="relative h-48 w-full cursor-zoom-in"
                        aria-label={`${service.title} – Bild zeigen`}
                    >
                      <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          sizes="(min-width:1024px) 33vw, 100vw"
                          priority={index < 2}
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </button>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="p-3 rounded-xl bg-accent/20 text-accent group-hover:bg-accent/30 transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>

                        {/* Pfeil (öffnet ebenfalls Vorschau) */}
                        <button
                            type="button"
                            onClick={() => openPreview(service.image, service.title)}
                            className="p-2 rounded-lg hover:bg-accent/10 text-muted-foreground group-hover:text-accent transition-all"
                            aria-label={`${service.title} – Bild zeigen`}
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </button>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                      </div>

                      <div className="flex items-center gap-2 pt-2">
                        <span className="text-xs text-muted-foreground font-medium">{service.technologies}</span>
                      </div>
                    </div>
                  </article>
              )
            })}
          </div>
        </div>

        {/* Vorschau-Modal */}
        <PreviewModal
            open={!!preview}
            src={preview?.src ?? ""}
            alt={preview?.alt ?? "Vorschau"}
            onClose={closePreview}
        />
      </section>
  )
}