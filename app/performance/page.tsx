import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { Gauge, Zap, ShieldCheck, Search, Rocket, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {ScoreBadgeAnimated} from "@/components/score-badge-animated"

// ── SEO / Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Performance & SEO – Websites, die ranken – doumi.tech",
    description:
        "Schnelle Websites ranken besser und konvertieren mehr. Core Web Vitals, technisches SEO & Best Practices – ich mache deine Seite 90+ schnell.",
    alternates: { canonical: "https://doumi.tech/performance" },
}

export default function PerformancePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
            <Header />

            <main className="pt-28 md:pt-32 container mx-auto px-4 pb-16 md:pb-24">
                {/* HERO */}
                <section className="grid lg:grid-cols-2 gap-10 items-center mb-20">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                            <Zap className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium text-accent">Schnelle Websites ranken besser</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                            Performance & SEO – Webseiten, die Google liebt.
                        </h1>

                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                            Jede Sekunde Ladezeit kostet ~7% Conversions. Schnelle Websites ranken besser und generieren mehr Anfragen. Ich optimiere deine Seite auf Geschwindigkeit, Stabilität und SEO – die Signale, die wirklich zählen.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                                <Link href="/contact">Kostenloses Erstgespräch</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/portfolio">Referenzen</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="cv-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {/* Leistung: 90–100 */}
                        <ScoreBadgeAnimated label="Leistung" range={{ min: 90, max: 100 }} />
                        {/* Zugänglichkeit: 95–98 */}
                        <ScoreBadgeAnimated label="Zugängl." range={{ min: 95, max: 98 }} />
                        {/* Best Practices: 98–100 */}
                        <ScoreBadgeAnimated label="Best Prac." range={{ min: 98, max: 100 }} />
                        {/* SEO: 98–100 */}
                        <ScoreBadgeAnimated label="SEO" range={{ min: 95, max: 100 }} />
                    </div>
                </section>

                {/* WARUM ES ZÄHLT */}
                <section className="cv-auto grid md:grid-cols-3 gap-6 mb-20">
                    <div className="rounded-3xl bg-card border border-border p-6">
                        <div className="p-3 rounded-xl bg-accent/10 text-accent inline-block mb-4">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Besseres Ranking</h3>
                        <p className="text-muted-foreground">
                            Google bevorzugt schnelle, stabile Websites. Core Web Vitals sind ein offizielles Ranking-Signal. Das macht den Unterschied zwischen Seite 1 und Seite 5.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-card border border-border p-6">
                        <div className="p-3 rounded-xl bg-accent/10 text-accent inline-block mb-4">
                            <Rocket className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Mehr Conversions</h3>
                        <p className="text-muted-foreground">
                            Langsame Websites = Absprünge. Eine 1-Sekunden-Verzögerung = 7% weniger Conversions. Schnellere Seiten = mehr Anfragen, mehr Umsatz.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-card border border-border p-6">
                        <div className="p-3 rounded-xl bg-accent/10 text-accent inline-block mb-4">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Professionelle Qualität</h3>
                        <p className="text-muted-foreground">
                            Best Practices, Accessibility & saubere Semantik – das signalisiert Google UND deinen Besuchern: "Das ist ein vertrauenswürdiges Unternehmen."
                        </p>
                    </div>
                </section>

                {/* MEINE METHODIK */}
                <section className="cv-auto mb-20 rounded-3xl bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border border-border p-6 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Wie ich Performance erreiche</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-3 text-muted-foreground">
                            <li>• <strong>Bild-Optimierung:</strong> Modern formats, richtige Größen, Lazy Loading</li>
                            <li>• <strong>Kritisches CSS:</strong> Tailwind-Optimization, CSS-Removal von ungenutztem Code</li>
                            <li>• <strong>Script-Strategien:</strong> Nur laden was nötig ist, <code>defer</code> richtig setzen</li>
                            <li>• <strong>Caching & CDN:</strong> Statische Auslieferung wo möglich, globale Performance</li>
                        </ul>
                        <ul className="space-y-3 text-muted-foreground">
                            <li>• <strong>Semantik & Accessibility:</strong> Sauberes HTML, ARIA, Farbkontraste</li>
                            <li>• <strong>Strukturierte Daten:</strong> Schema.org für bessere Google-Snippets</li>
                            <li>• <strong>Monitoring:</strong> Lighthouse, Google PageSpeed, Web Vitals regelmäßig prüfen</li>
                            <li>• <strong>Best Practice:</strong> Clean Code, moderne Architektur, wartbar für die Zukunft</li>
                        </ul>
                    </div>
                </section>

                {/* ANGEBOTE / CTA */}
                <section className="cv-auto grid lg:grid-cols-2 gap-6">
                    <div className="rounded-3xl bg-card border border-border p-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Performance-Audit</h3>
                        <p className="text-muted-foreground mb-6">
                            Du hast schon eine Website? Ich analysiere, wo deine Bottlenecks sind und was den größten Impact hätte.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                            <li>✓ Ausführlicher Lighthouse-Report</li>
                            <li>✓ Core Web Vitals Analyse</li>
                            <li>✓ Konkrete To-do-Liste mit Priorisierung</li>
                            <li>✓ Kostenloses Erstgespräch inklusive</li>
                        </ul>
                        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/contact">Audit anfragen</Link>
                        </Button>
                    </div>

                    <div className="rounded-3xl bg-card border border-border p-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Neue Website mit Best Practices</h3>
                        <p className="text-muted-foreground mb-6">
                            Du startest neu? Ich baue dir von Anfang an eine Website, die 90+ schnell und SEO-strong ist.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                            <li>✓ Next.js / React / TypeScript</li>
                            <li>✓ Bereits 90+ optimiert (nicht später)</li>
                            <li>✓ Technisches SEO von Tag 1</li>
                            <li>✓ Saubere, wartbare Codebase</li>
                        </ul>
                        <Button asChild variant="outline">
                            <Link href="/contact">Projekt starten</Link>
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}