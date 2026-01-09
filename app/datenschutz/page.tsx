import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Datenschutzerklärung – doumi.tech",
    description: "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
}

export default function DatenschutzPage() {
    return (
        <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
            <Header />
            <main className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-3xl mx-auto space-y-10">
                    <header className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Datenschutz</h1>
                        <p className="text-muted-foreground">Stand: 31. Oktober 2025</p>
                    </header>

                    {/* 1. Verantwortlicher */}
                    <section className="bg-card border border-border rounded-3xl p-8 md:p-12 space-y-4">
                        <h2 className="text-2xl font-semibold">1. Verantwortlicher</h2>
                        <address className="not-italic leading-relaxed">
                            <div>Annes Bani Al Doumi</div>
                            <div>Gropiusstraße 3</div>
                            <div>13357 Berlin</div>
                            <div>
                                E-Mail:{" "}
                                <a href="mailto:info@doumi.tech" className="text-accent underline-offset-4 hover:underline">
                                    info.@doumi.tech
                                </a>
                            </div>
                        </address>
                    </section>

                    {/* 2. Zugriffsdaten / Server-Logs */}
                    <section className="bg-card border border-border rounded-3xl p-8 md:p-12 space-y-4">
                        <h2 className="text-2xl font-semibold">2. Zugriffsdaten / Server-Logs</h2>
                        <p className="text-muted-foreground">
                            Beim Aufruf dieser Webseite werden automatisch Informationen erfasst, die Ihr Browser übermittelt (u. a.
                            IP-Adresse in gekürzter Form, Datum/Uhrzeit, aufgerufene Seiten, Referrer-URL, User-Agent). Die
                            Verarbeitung erfolgt zur sicheren Bereitstellung der Webseite und zur Abwehr von Störungen. Rechtsgrundlage
                            ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Stabilität und Sicherheit).
                        </p>
                    </section>

                    {/* 3. Kontaktaufnahme */}
                    <section className="bg-card border border-border rounded-3xl p-8 md:p-12 space-y-4">
                        <h2 className="text-2xl font-semibold">3. Kontaktaufnahme</h2>
                        <p className="text-muted-foreground">
                            Bei der Kontaktaufnahme per E-Mail werden die von Ihnen mitgeteilten Daten zur Bearbeitung der Anfrage
                            verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche/vertragliche Maßnahmen) bzw.
                            lit. f DSGVO (berechtigtes Interesse an Kommunikation). Die Daten werden gelöscht, sobald sie für den
                            Zweck nicht mehr erforderlich sind; gesetzliche Aufbewahrungspflichten bleiben unberührt.
                        </p>
                    </section>

                    {/* 4. Cookies & Tracking */}
                    <section className="bg-card border border-border rounded-3xl p-8 md:p-12 space-y-4">
                        <h2 className="text-2xl font-semibold">4. Cookies &amp; Tracking</h2>
                        <p className="text-muted-foreground">
                            Es werden keine Tracking-Cookies oder Analyse-Dienste eingesetzt. Es kommen nur technisch notwendige
                            Cookies zum Einsatz (falls erforderlich, z. B. für Session-Management).
                        </p>
                    </section>

                    {/* 5. Externe Inhalte / Links */}
                    <section className="bg-card border border-border rounded-3xl p-8 md:p-12 space-y-4">
                        <h2 className="text-2xl font-semibold">5. Einbindung externer Inhalte / Links</h2>
                        <p className="text-muted-foreground">
                            Das Portfolio verlinkt auf externe Webseiten (z. B. Projekt-Live-Sites). Beim Aufruf externer Seiten gelten
                            deren Datenschutzhinweise.
                        </p>
                    </section>

                    {/* 6. Auftragsverarbeitung / Hosting */}
                    <section className="bg-card border border-border rounded-3xl p-8 md:p-12 space-y-4">
                        <h2 className="text-2xl font-semibold">6. Auftragsverarbeitung / Hosting</h2>
                        <p className="text-muted-foreground">
                            Die Webseite wird bei einem externen Dienstleister gehostet. Dabei können Server-Logs anfallen.
                        </p>
                    </section>

                    {/* 7. Betroffenenrechte */}
                    <section className="bg-card border border-border rounded-3xl p-8 md:p-12 space-y-4">
                        <h2 className="text-2xl font-semibold">7. Betroffenenrechte</h2>
                        <p className="text-muted-foreground">
                            Sie haben Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
                            Datenübertragbarkeit sowie Widerspruch (Art. 15–21 DSGVO). Zudem besteht ein Beschwerderecht bei der
                            zuständigen Aufsichtsbehörde.
                        </p>
                    </section>

                    {/* 8. Sicherheit */}
                    <section className="bg-card border border-border rounded-3xl p-8 md:p-12 space-y-4">
                        <h2 className="text-2xl font-semibold">8. Sicherheit</h2>
                        <p className="text-muted-foreground">
                            Es werden geeignete technische und organisatorische Maßnahmen eingesetzt, um ein dem Risiko angemessenes
                            Schutzniveau zu gewährleisten.
                        </p>
                    </section>

                    {/* 9. Aktualität */}
                    <section className="bg-card border border-border rounded-3xl p-8 md:p-12 space-y-4">
                        <h2 className="text-2xl font-semibold">9. Aktualität</h2>
                        <p className="text-muted-foreground">
                            Diese Datenschutzerklärung wird bei Bedarf aktualisiert.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}
