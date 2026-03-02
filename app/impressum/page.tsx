import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Impressum – doumi.tech",
    description: "Pflichtangaben gemäß § 5 TMG und Verantwortlichkeit nach § 18 Abs. 2 MStV.",
}

export default function ImpressumPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-accent/20 via-secondary/10 to-primary/10">
            <Header />
            <main className="pt-24 pb-20 container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-3xl mx-auto space-y-10">
                    <header className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Impressum</h1>
                        <p className="text-muted-foreground">Angaben gemäß § 5 TMG</p>
                    </header>

                    <section className="bg-card bg-gradient-to-br from-accent/20 via-secondary/10 to-primary/10 border border-border rounded-3xl p-8 md:p-12 space-y-6">
                        <h2 className="text-2xl font-semibold">Anbieter</h2>
                        <address className="not-italic leading-relaxed">
                            <div>Annes Doumi Tech</div>
                            <div>Annes Bani Al Doumi</div>
                            <div>Gropiusstraße 3</div>
                            <div>13357 Berlin</div>
                        </address>

                        <div className="space-y-2">
                            <h3 className="text-lg font-medium">Kontakt</h3>
                            <p>
                                E-Mail:{" "}
                                <a href="mailto:info@doumi.tech" className="text-accent underline-offset-4 hover:underline">
                                    info@doumi.tech
                                </a>
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-medium">Umsatzsteuer-ID</h3>
                            <p>DE459845250</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-medium">Steuernummer</h3>
                            <p>23/216/00653</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-medium">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
                            <address className="not-italic leading-relaxed">
                                <div>Annes Bani Al Doumi</div>
                                <div>Gropiusstraße 3</div>
                                <div>13357 Berlin</div>
                            </address>
                        </div>
                    </section>

                    <section className="bg-card bg-gradient-to-br from-accent/20 via-secondary/10 to-primary/10 border border-border rounded-3xl p-8 md:p-12 space-y-6">
                        <h2 className="text-2xl font-semibold">Haftung</h2>

                        <div className="space-y-3">
                            <h3 className="text-lg font-medium">Haftung für Inhalte</h3>
                            <p className="text-muted-foreground">
                                Die Inhalte dieser Webseite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                                und Aktualität der Inhalte wird jedoch keine Gewähr übernommen. Verpflichtungen zur Entfernung oder
                                Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-lg font-medium">Haftung für Links</h3>
                            <p className="text-muted-foreground">
                                Diese Webseite enthält Links zu externen Webseite Dritter, auf deren Inhalte der Anbieter keinen Einfluss
                                hat. Für diese fremden Inhalte wird keine Gewähr übernommen. Für die Inhalte der verlinkten Seiten ist
                                stets der jeweilige Anbieter oder Betreiber verantwortlich.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-lg font-medium">Urheberrecht</h3>
                            <p className="text-muted-foreground">
                                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                                Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                                Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}
