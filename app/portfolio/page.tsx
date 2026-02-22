import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import type {Metadata} from "next"
import Image from "next/image"
import Link from "next/link"
import {ArrowRight, ExternalLink, Mail, MessageSquare} from "lucide-react"
import {Button} from "@/components/ui/button";
import {ReviewsCarousel} from "@/components/reviews-carousel";

export const metadata: Metadata = {
    title: "Referenzen – doumi.tech",
    description: "Ausgewählte Web-Projekte – schnell, klar, performant.",
}

type Project = {
    title: string
    description?: string
    image: string
    href?: string
    status: "live" | "soon"
    tech?: string[]
}

const projects: Project[] = [
    {
        title: "A. Marmor Ponzo UG",
        description: "Portfolio & Kontakt - Natursteinhandel.",
        image: "/marmor.jpeg",
        href: "https://marmorponzo.de",
        status: "live",
        tech: ["Next.js", "React", "Tailwind"],
    },
    {
        title: "Mirjam Barner",
        description: "About, Newsletter, Quiz, Design, Termine",
        image: "/mirjambarner.png",
        href: "https://www.mirjambarner.com",
        status: "live",

    },
]

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
            <Header/>
            <main className="pt-24 container mx-auto px-4 12 md:py-24">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 pt-12">Referenzen</h1>
                    <p className="text-lg text-muted-foreground">Hier findest du meine bisherigen Projekte.</p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {projects.map((p, i) => {
                        const isLive = p.status === "live" && !!p.href
                        return (
                            <article
                                key={p.title}
                                className={[
                                    "group relative rounded-3xl overflow-hidden border border-border bg-card hover:shadow-xl hover:shadow-accent/5 transition-all duration-300",
                                    isLive ? "hover:border-accent cursor-pointer" : "cursor-default",
                                ].join(" ")}
                            >
                                {/* Bild */}
                                <div className="relative h-56">
                                    <Image
                                        src={p.image}
                                        alt={p.title}
                                        fill
                                        sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
                                        priority={i === 0}
                                        className={[
                                            "object-cover transition-transform duration-500",
                                            isLive ? "group-hover:scale-105" : "scheme-light",
                                        ].join(" ")}
                                    />
                                    <div
                                        className={[
                                            "absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium",
                                            isLive
                                                ? "bg-accent text-accent-foreground"
                                                : "bg-muted/80 text-foreground backdrop-blur",
                                        ].join(" ")}
                                    >
                                        {isLive ? "Live" : "Coming Soon"}
                                    </div>
                                </div>

                                {/* Inhalt */}
                                <div className="p-6 space-y-4">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-xl font-semibold">{p.title}</h3>

                                        {/* Pfeil: nur bei Live zeigen; bei Soon komplett weglassen */}
                                        {isLive ? (
                                            <span
                                                className="p-2 rounded-lg text-muted-foreground group-hover:text-accent transition-colors pointer-events-none select-none"
                                                aria-hidden
                                            >
                        {/* Optischer Pfeil (kein eigener Link, Click fängt das Overlay) */}
                                                <ExternalLink className="w-5 h-5"/>
                      </span>
                                        ) : null}
                                    </div>

                                    {p.description ? (
                                        <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                                    ) : null}

                                    {p.tech && p.tech.length > 0 ? (
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {p.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs border border-border"
                                                >
                          {t}
                        </span>
                                            ))}
                                        </div>
                                    ) : null}

                                    {/* Visueller CTA: nur bei Live; kein eigener Link (Overlay übernimmt) */}
                                    {isLive ? (
                                        <span
                                            className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                      Live ansehen
                      <ExternalLink className="w-4 h-4"/>
                    </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">In Arbeit</span>
                                    )}
                                </div>

                                {/* Vollflächiger Link-Overlay NUR für Live */}
                                {isLive && (
                                    <Link
                                        href={p.href!}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 z-10"
                                        aria-label={`${p.title} öffnen (neuer Tab)`}
                                    />
                                )}
                            </article>
                        )
                    })}
                </section>
                <section className="cv-auto pt-24 pb-0 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-7xl">
                        <div
                            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-accent to-secondary">
                            <div className="grid items-center gap-8 lg:grid-cols-2">
                                {/* Content Side */}
                                <div className="relative z-10 space-y-6 p-8 sm:p-12 lg:p-16">
                                    <div
                                        className="inline-flex items-center gap-2 rounded-full bg-accent-foreground/10 px-4 py-2 backdrop-blur-sm">
                                        <MessageSquare className="h-4 w-4 text-accent-foreground"/>
                                        <span className="text-sm font-medium text-accent-foreground">
                  Kostenlose Erstberatung
                </span>
                                    </div>

                                    <h2 className="text-balance text-3xl font-bold text-accent-foreground sm:text-4xl lg:text-5xl">
                                        Bereit für dein Projekt?
                                    </h2>

                                    <p className="leading-relaxed text-lg text-accent-foreground/90">
                                        Lass uns gemeinsam deine Vision in eine moderne, performante Webseite
                                        verwandeln.
                                    </p>

                                    <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="secondary"
                                            className="group bg-background text-foreground hover:bg-background/90"
                                        >
                                            <Link href="/contact">
                                                <Mail className="mr-2 h-5 w-5"/>
                                                Jetzt Kontakt aufnehmen
                                                <ArrowRight
                                                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                                            </Link>
                                        </Button>
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-6 border-t border-accent-foreground/20 pt-8">
                                        <div>
                                            <div className="text-2xl font-bold text-accent-foreground">100%</div>
                                            <div className="text-sm text-accent-foreground/80">Zufriedenheit</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-accent-foreground">24/7</div>
                                            <div className="text-sm text-accent-foreground/80">Support</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-accent-foreground">kurze</div>
                                            <div className="text-sm text-accent-foreground/80">Entwicklung</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Side – ohne Zwischen-Card, nur das Bild */}
                                {/* Image Side – bündig, ohne Zwischen-Card, aber mit leicht abgerundetem Bild */}
                                <section className="py-4 px-4 sm:px-6 lg:px-8">
                                    <div
                                        className="relative bg-gradient-to-br from-accent via-accent to-secondary rounded-3xl overflow-hidden">
                                        <div
                                            className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/90 to-primary/60 shadow-inner"/>
                                        <ReviewsCarousel
                                            variant="embed"
                                            className="relative z-10 h-full w-full max-w-none px-0 py-0"
                                        />
                                    </div>
                                </section>


                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}
