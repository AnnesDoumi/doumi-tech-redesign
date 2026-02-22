import {Button} from "@/components/ui/button"
import {ArrowRight, Sparkles, CheckCircle2, Zap} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
    //@ts-ignore
    return (
        <section className="cv-auto pt-24 pb-3 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"/>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl"/>
            </div>

            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30">
                            <Sparkles className="w-4 h-4 text-accent"/>
                            <span className="text-sm font-medium text-accent">Webseiten, die funktionieren</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance">
                            Eine Webseite, die <span className="text-accent"> dein Klientel überzeugt.</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
                            Eine gute Website funktioniert wie ein Verkäufer im Internet: Sie wird gefunden, macht einen guten Eindruck und überzeugt Besucher, dich zu kontaktieren. Genau das baue ich – schnell, zuverlässig und transparent.
                        </p>

                        {/* Desktop: Features */}
                        <div className="hidden sm:flex flex-wrap gap-6 pt-4">
                            <div className="flex items-center gap-2">
                                <div className="p-2 rounded-lg bg-accent/15">
                                    <CheckCircle2 className="w-5 h-5 text-accent"/>
                                </div>
                                <span className="text-sm font-medium">Professionell umgesetzt</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-2 rounded-lg bg-accent/15">
                                    <Zap className="w-5 h-5 text-accent"/>
                                </div>
                                <span className="text-sm font-medium">Blitzschnelle Ladezeiten</span>
                            </div>
                        </div>

                        {/* Mobile: Buttons */}
                        <div className="flex flex-col sm:hidden gap-3 pt-4">
                            <div className="flex justify-center gap-3">
                                <Button asChild size="sm" variant="outline" className="flex-1 min-w-[100px]">
                                    <Link href="/about">Über mich</Link>
                                </Button>
                                <Button asChild size="sm" variant="outline" className="flex-1 min-w-[100px]">
                                    <Link href="/portfolio">Referenzen</Link>
                                </Button>
                                <Button asChild size="sm" variant="outline" className="flex-1 min-w-[100px]">
                                    <Link href="/performance">Performance</Link>
                                </Button>
                            </div>

                            <div className="flex justify-center pt-3">
                                <Button asChild size="lg"
                                        className="bg-accent text-accent-foreground hover:bg-accent/90 group w-full">
                                    <Link href="/contact">
                                        Kostenloses Gespräch
                                        <ArrowRight
                                            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* DESKTOP VERSION (nur lg sichtbar) */}
                    <div className="relative lg:h-[600px] hidden lg:block">
                        <div className="absolute inset-0 grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div
                                    className="h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/15 border border-border/50 p-6 flex flex-col justify-between">
                                    <div className="text-1xl font-bold">100% Zufriedenheit</div>
                                    <div className="text-sm text-muted-foreground">Deine Zufriedenheit ist für mich Priorität.<br/></div>
                                    <div className="text-sm text-muted-foreground">Auch nach dem Launch – kostenloses Feintuning inklusive.<br/></div>

                                </div>
                                <div className="h-64 rounded-2xl overflow-hidden relative bg-primary/10 border border-border/50">
                                    <Image src="/happycustomer.jpg" alt="Webentwicklung" fill className="object-cover"/>
                                </div>
                            </div>
                            <div className="space-y-4 pt-12">
                                <div className="h-64 rounded-2xl overflow-hidden relative border border-border/50 bg-black">
                                    <div className="h-64 rounded-2xl overflow-hidden relative bg-primary/10 border border-border/50">
                                        <div className="h-64 rounded-2xl overflow-hidden relative border border-border/50 bg-black">
                                            <video
                                                src="/modern.mp4"
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                className="w-full h-full object-cover"
                                                style={{ objectPosition: 'center' }}
                                                preload="auto"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/15 border border-border/50 p-6 flex flex-col justify-between">
                                    <div className="text-3xl font-bold pb-4">Modern & Zuverlässig</div>
                                    <div className="text-sm text-muted-foreground">Gebaut mit moderner Technik, die funktioniert.</div>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MOBILE VERSION (nur unter lg sichtbar) */}
                    <div className="relative lg:hidden mt-8">
                        <div className="grid grid-cols-2 gap-3">
                            {/* Box 1: 100% Zufriedenheit */}
                            <div className="h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/15 border border-border/50 p-4 flex flex-col justify-between">
                                <div className="text-sm font-bold">100% Zufriedenheit</div>
                                <div className="text-xs text-muted-foreground">Auch nach Launch – kostenloses Feintuning.</div>
                            </div>

                            {/* Box 2: Bild */}
                            <div className="h-40 rounded-2xl overflow-hidden relative bg-primary/10 border border-border/50">
                                <Image src="/happycustomer.jpg" alt="Webentwicklung" fill className="object-cover"/>
                            </div>

                            <div className="h-40 rounded-2xl overflow-hidden relative bg-primary/10 border border-border/50">
                                <Image src="/annes030.jpg" alt="Webentwicklung" fill className="object-cover"/>
                            </div>


                            {/* Box 4: Modern & Zuverlässig */}
                            <div className="h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/15 border border-border/50 p-4 flex flex-col justify-between">
                                <div className="text-sm font-bold">Modern & Zuverlässig</div>
                                <div className="text-xs text-muted-foreground">Gebaut mit Technik, die funktioniert.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}