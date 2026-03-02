import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, PhoneIcon, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
      <div className="pt-12 min-h-screen bg-gradient-to-br from-accent/20 via-secondary/10 to-primary/10 overflow-x-clip">
        <Header />
        <main className="container mx-auto px-4 py-16 md:py-24 overflow-x-clip">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Lass uns über dein Projekt sprechen</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Neue Webseite? Alte Webseite zu langsam? Oder die aktuelle Webseite funktioniert nicht? Ich helfe dir weiter.
              </p>
              {/* Contact Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-12 pt-12">
                {/* Email Card */}
                <a
                    href="mailto:info@doumi.tech"
                    className="group relative block w-full bg-gradient-to-br from-accent/15 to-secondary/10 border border-border/50 rounded-3xl p-6 sm:p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-2xl bg-primary text-accent-foreground shrink-0">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Per E-Mail</h3>
                      <p className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors break-words ">
                        info@doumi.tech
                      </p>
                    </div>
                  </div>
                </a>

                {/* Location Card */}
                <a
                    className="relative block w-full bg-gradient-to-br from-accent/15 to-secondary/10 border border-border/50 rounded-3xl p-6 sm:p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
                    aria-label="In Google Maps öffnen"
                >
                  <div className="flex items-start gap-4 bg">
                    <div className="p-4 rounded-2xl bg-primary text-accent-foreground shrink-0">
                      <PhoneIcon className="w-7 h-7" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Telefon</h3>
                      <a href="tel:+4915568200829" className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors break-words ">+49 15568 200 829</a>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-16 bg-card border border-border/50 rounded-3xl bg-gradient-to-br from-accent/20 via-secondary/10 to-primary/10 p-8 md:p-12">

              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">So läuft es ab</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-accent-foreground font-bold text-sm">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Kostenloses Gespräch (ca. 30 Minuten)</h3>
                    <p className="text-muted-foreground">
                      Wir sprechen über dein Projekt, deine Ziele und dein Budget. Keine versteckten Kosten, keine Verkaufsmache – nur ehrliche Beratung.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-accent-foreground font-bold text-sm">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Mein Angebot</h3>
                    <p className="text-muted-foreground">
                      Ich schreibe dir auf, was ich mache, wie lange es dauert und was es kostet. Gültig für zwei Wochen – keine Überraschungen.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-accent-foreground font-bold text-sm">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Wir starten</h3>
                    <p className="text-muted-foreground">
                      Nach der Beauftragung geht's los. Jede Woche haben wir Abstimmung, dein Feedback ist wichtig.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-accent-foreground font-bold text-sm">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Übergabe und Support</h3>
                    <p className="text-muted-foreground">
                      Deine Webseite geht online. Die ersten 30 Tage bekommst du von mir kostenlose kleine Anpassungen – dann halten wir auch gerne Kontakt.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            {/* Important Info Box */}
            <div className="bg-card bg-gradient-to-br from-accent/20 via-secondary/10 to-primary/10 border border-border/50 rounded-3xl p-8 md:p-12 mb-12">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                Das solltest du wissen
              </h3>

              <div className="space-y-4 text-muted-foreground">
                <div className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">•</span>
                  <p><strong>Mindestbudget:</strong> Ab 1.200 Euro. Das ist das Minimum, um eine Webseite professionell zu entwickeln.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">•</span>
                  <p><strong>Zeit:</strong> Normalerweise 2 bis 6 Wochen, je nachdem wie komplex es wird.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">•</span>
                  <p><strong>Zahlung:</strong> 50% Anzahlung bei Projektstart, 50% nach Abnahme. So sind beide Seiten abgesichert und wir können ohne Verzögerung loslegen.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">•</span>
                  <p><strong>Nach dem Launch:</strong> Du bekommst 30 Tage Support gratis. Danach biete ich dir ein Sorgenfrei-Paket an: Ich kümmere mich um Hosting, Updates und Sicherheit, damit du dich voll auf dein Business konzentrieren kannst.</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-accent/20 via-secondary/10 to-primary/10 text-foreground rounded-3xl p-8 md:p-12 text-center border border-border/50">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Dein Projekt beginnt hier</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                Schick mir einfach eine kurze Mail mit deinem Vorhaben oder ruf direkt durch. Ich melde mich innerhalb von 24 Stunden bei dir.              </p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href="tel:+4915568200829">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Jetzt anrufen
                </a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
  )
}