import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { Clock, DollarSign, TrendingUp, Target, Zap, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Freelancer Time App – Deine Zeit, dein Preis – doumi.tech",
    description:
        "Echtzeit-Timetracking für Freelancer. Ziele setzen: Stundenhonorar oder Projektbudget. Sehen, wie viel deine Zeit wirklich wert ist. Kostenlos testen.",
    alternates: { canonical: "https://doumi.tech/freelancer-time-app" },
}

export default function FreelancerTimeAppPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            <Header />

            <main className="pt-28 md:pt-36 container mx-auto px-4 pb-16 md:pb-24">
                {/* HERO SECTION */}
                <section className="grid lg:grid-cols-2 gap-12 items-center mb-32 relative">
                    {/* Decorative element */}
                    <div className="absolute -top-32 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl -z-10"></div>

                    <div>
                        <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 mb-8 backdrop-blur-sm">
                            <Clock className="w-4 h-4 text-cyan-400 animate-pulse" />
                            <span className="text-sm font-medium text-cyan-300 tracking-wide">ECHTZEIT TIMETRACKING</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-balance bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                            Deine Zeit,<br />dein Preis
                        </h1>

                        <p className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                            Freelancer Time App läuft lokal auf deinem Gerät – deine Daten gehören dir. Setze dein Stundenhonorar fest und sehe in Echtzeit, wie viel deine Arbeit wert ist. Oder kalkuliere dein Projektbudget und behalte die Kontrolle. Später kannst du optional synchronisieren.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all">
                                <Link href="/contact">Kickstarter</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-white">
                                <Link href="#features">Features entdecken</Link>
                            </Button>
                        </div>

                        <div className="mt-10 flex gap-6 text-sm text-slate-400">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                                <span>Kostenlos starten</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                                <span>Lokal auf deinem Gerät</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                                <span>Sofort einsatzbereit</span>
                            </div>
                        </div>
                    </div>

                    {/* VISUAL PLACEHOLDER - App Screenshot/Demo */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10 group-hover:blur-3xl transition-all"></div>
                        <div className="rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 p-1 overflow-hidden shadow-2xl">
                            <div className="bg-slate-900 rounded-2xl p-8 aspect-square md:aspect-auto md:h-auto flex items-center justify-center">
                                <div className="text-center">
                                    <Clock className="w-20 h-20 text-cyan-400/30 mx-auto mb-4" />
                                    <p className="text-slate-500 text-sm">App Interface wird hier angezeigt</p>
                                    <p className="text-slate-600 text-xs mt-2">Mockup: Timer, Echtzeit-Einnahmen-Anzeige</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY IT MATTERS */}
                <section id="features" className="mb-32 space-y-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Das Problem, das wir lösen
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Viele Freelancer wissen nicht genau, wie viel ihrer Zeit sie pro Projekt investieren – oder wie viel ihre Arbeit wirklich wert ist.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="group rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 p-8 hover:border-cyan-500/30 transition-all hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-slate-900/70">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/10 text-orange-400 inline-block mb-4 group-hover:scale-110 transition-transform">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Du fragst dich:</h3>
                            <p className="text-slate-400 leading-relaxed">
                                "Wie viel Zeit stecke ich wirklich in Projekt X? Verdiene ich genug für die Stundensätze, die ich anbiete?"
                            </p>
                        </div>

                        <div className="group rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 p-8 hover:border-cyan-500/30 transition-all hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-slate-900/70">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-500/10 text-yellow-400 inline-block mb-4 group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Ergebnis oft:</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Zu niedrige Sätze, schlechte Kalkulationen, fehlende Übersicht über echte Profitabilität.
                            </p>
                        </div>

                        <div className="group rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 p-8 hover:border-cyan-500/30 transition-all hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-slate-900/70">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 text-emerald-400 inline-block mb-4 group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Unsere Lösung:</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Echtzeit-Tracking, intelligente Preis-Kalkulationen, volle Transparenz – in Sekunden.
                            </p>
                        </div>
                    </div>
                </section>

                {/* TWO CORE FEATURES */}
                <section className="mb-32">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Feature 1: Hourly Rate */}
                        <div className="group rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/40 overflow-hidden hover:border-cyan-500/40 transition-all">
                            <div className="relative overflow-hidden h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 flex items-center justify-center border-b border-slate-700/40">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <DollarSign className="w-24 h-24 text-cyan-400/20 mx-auto mb-4" />
                                        <p className="text-slate-500 text-sm">Stundenhonorar Setup</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Stundenhonorar-Modus</h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    Gib deinen Stundenhonorar an. Die App zeigt dir in Echtzeit, wie viel du während der Arbeit verdienst.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start gap-3 text-slate-300">
                                        <span className="text-cyan-400 font-bold mt-0.5">→</span>
                                        <span>Satz eingeben (z.B. €60/h)</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-300">
                                        <span className="text-cyan-400 font-bold mt-0.5">→</span>
                                        <span>Timer starten</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-300">
                                        <span className="text-cyan-400 font-bold mt-0.5">→</span>
                                        <span>Live-Einnahmen-Display: Sehe, wie schnell es wächst</span>
                                    </li>
                                </ul>
                                <p className="text-sm text-slate-500 italic">
                                    Perfekt für: Consulting, Freelance-Entwicklung, Coaching, Beratung.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2: Project Budget */}
                        <div className="group rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/40 overflow-hidden hover:border-cyan-500/40 transition-all">
                            <div className="relative overflow-hidden h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 flex items-center justify-center border-b border-slate-700/40">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <BarChart3 className="w-24 h-24 text-blue-400/20 mx-auto mb-4" />
                                        <p className="text-slate-500 text-sm">Budget Tracking</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Projektbudget-Modus</h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    Lege ein fixes Projektbudget fest. Die App zeigt, wie lange du noch „arbeiten" kannst, bevor du über-/unterplanst.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start gap-3 text-slate-300">
                                        <span className="text-blue-400 font-bold mt-0.5">→</span>
                                        <span>Budget eingeben (z.B. €1.500)</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-300">
                                        <span className="text-blue-400 font-bold mt-0.5">→</span>
                                        <span>Timer starten</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-300">
                                        <span className="text-blue-400 font-bold mt-0.5">→</span>
                                        <span>Sehe Kosten/Stunde und verbleibende Zeit</span>
                                    </li>
                                </ul>
                                <p className="text-sm text-slate-500 italic">
                                    Perfekt für: Projektarbeit, Agentur-Kunden, Time-Boxing, Effizienz-Kontrolle.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* KEY BENEFITS */}
                <section className="mb-32">
                    <div className="rounded-3xl bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-slate-900/20 border border-slate-700/30 p-10 md:p-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            Was deine Produktivität & Verdienste verändert
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-cyan-500/20 text-cyan-400">
                                            <Zap className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">Volle Transparenz</h3>
                                        <p className="text-slate-400 mt-1">
                                            Du siehst genau, wo deine Zeit fließt und ob deine Sätze fair sind.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-cyan-500/20 text-cyan-400">
                                            <TrendingUp className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">Bessere Preis-Kalkulationen</h3>
                                        <p className="text-slate-400 mt-1">
                                            Datengestützte Entscheidungen für künftige Projekte. Nie wieder zu niedrig angeboten.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-cyan-500/20 text-cyan-400">
                                            <BarChart3 className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">Überblick über Profitabilität</h3>
                                        <p className="text-slate-400 mt-1">
                                            Welche Projekte lohnen sich? Wo verschenkst du Zeit? Schnelle Insights.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500/20 text-blue-400">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">Echtzeit Motivation</h3>
                                        <p className="text-slate-400 mt-1">
                                            Das Live-Einnahmen-Display ist psychologisch motivierend. Du siehst, dass deine Zeit Wert hat.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500/20 text-blue-400">
                                            <Target className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">Effiziente Ressourcen-Planung</h3>
                                        <p className="text-slate-400 mt-1">
                                            Budget-Modus hilft dir, Projekte realistic einzuschätzen und nicht über-commitment zu gehen.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500/20 text-blue-400">
                                            <DollarSign className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">Maximiere dein Einkommen</h3>
                                        <p className="text-slate-400 mt-1">
                                            Höhere Sätze, bessere Projekte, weniger Zeit auf Low-ROI-Aufgaben.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section className="mb-32">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
                        So funktioniert's – in 3 Sekunden
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="relative">
                            <div className="rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 p-8 h-full">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg mb-6">
                                    1
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Wähle deinen Modus</h3>
                                <p className="text-slate-400">
                                    Stundenhonorar oder Projektbudget – je nachdem, wie du kalkulierst.
                                </p>
                            </div>
                            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2 translate-x-full">
                                <ArrowRight className="w-8 h-8 text-slate-600" />
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                            <div className="rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 p-8 h-full">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg mb-6">
                                    2
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Gib deine Zahlen ein</h3>
                                <p className="text-slate-400">
                                    Stundenhonorar (€/h) oder Projektbudget (€). Mehr nicht nötig.
                                </p>
                            </div>
                            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2 translate-x-full">
                                <ArrowRight className="w-8 h-8 text-slate-600" />
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 p-8 h-full">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg mb-6">
                                3
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Starte den Timer</h3>
                            <p className="text-slate-400">
                                Arbeite. Die App zeigt dir in Echtzeit, wie viel du verdienst oder noch Zeit hast.
                            </p>
                        </div>
                    </div>
                </section>

                {/* HYBRID APPROACH SECTION */}
                <section className="mb-32">
                    <div className="rounded-3xl bg-gradient-to-r from-slate-800/40 to-slate-900/40 border border-slate-700/30 p-10 md:p-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                            Hybrid: Lokal + Optional Cloud
                        </h2>
                        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                            Deine App, deine Daten, deine Kontrolle – mit optionaler Synchronisierung.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="rounded-2xl bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-cyan-500/20 p-6">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-xl">📱</span> Lokal (Standard)
                                </h3>
                                <ul className="space-y-3 text-slate-300 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400 mt-1">✓</span>
                                        <span>App läuft direkt in deinem Browser</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400 mt-1">✓</span>
                                        <span>Daten werden lokal gespeichert (Browser Storage)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400 mt-1">✓</span>
                                        <span>Kein Server, keine Tracking, 100% privat</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400 mt-1">✓</span>
                                        <span>Sofort nutzbar – ohne Anmeldung</span>
                                    </li>
                                </ul>
                                <p className="text-xs text-slate-500 mt-6 italic">
                                    Perfekt für: Schnelle Tests, Freelancer, die Privatsphäre schätzen.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-gradient-to-br from-blue-700/30 to-slate-800/30 border border-blue-500/20 p-6">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-xl">☁️</span> + Optional: Cloud-Sync
                                </h3>
                                <ul className="space-y-3 text-slate-300 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">✓</span>
                                        <span>Erstelle einen kostenlosen Account (später)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">✓</span>
                                        <span>Synchronisiere deine Projekte & Einnahmen</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">✓</span>
                                        <span>Zugriff von mehreren Geräten</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">✓</span>
                                        <span>Erweiterte Analytics & Reporting</span>
                                    </li>
                                </ul>
                                <p className="text-xs text-slate-500 mt-6 italic">
                                    Perfekt für: Teams, mehrere Geräte, detaillierte Auswertungen.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRICING / CTA */}
                <section className="mb-16">
                    <div className="rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-slate-900/20 border border-cyan-500/30 p-10 md:p-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Bereit, mehr zu verdienen?
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                            Freelancer Time App startet kostenlos und lokal auf deinem Gerät – keine Anmeldung nötig. Später kannst du optional ein Konto erstellen, um deine Daten zu synchronisieren und noch mehr Features freizuschalten.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all">
                                <Link href="/contact">App jetzt starten</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-white">
                                <Link href="#features">Mehr erfahren</Link>
                            </Button>
                        </div>

                        <p className="text-sm text-slate-500 mt-8">
                            ✓ Kostenlos • ✓ Lokal & sicher • ✓ Optional: Synchronisieren
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}