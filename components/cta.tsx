import { Button } from "@/components/ui/button"
import { Mail, ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"
import { ReviewsCarousel } from "@/components/reviews-carousel"

export function CTA() {
  return (
      <section className="cv-auto pb-12 pt-12 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-secondary to-primary border border-border/50">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              {/* Content Side */}
              <div className="relative z-10 space-y-6 p-8 sm:p-12 lg:p-16">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent-foreground/15 px-4 py-2 backdrop-blur-sm">
                  <MessageSquare className="h-4 w-4 text-accent-foreground" />
                  <span className="text-sm font-medium text-accent-foreground">
                  Kostenloses Gespräch, keine Pflicht
                </span>
                </div>

                <h2 className="text-balance text-3xl font-bold text-accent-foreground sm:text-4xl lg:text-5xl">
                  Lass dich beraten
                </h2>

                <p className="leading-relaxed text-lg text-accent-foreground/90">
                  In 30 Minuten sprechen wir über dein Projekt, deine Ziele und was eine gute Webseite für dich bedeutet. Keine versteckten Kosten, keine Verkaufsmasche – nur ehrliche Beratung.
                </p>

                <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                  <Button
                      asChild
                      size="lg"
                      className="group bg-background text-foreground hover:bg-background/90"
                  >
                    <Link href="/contact">
                      <Mail className="mr-2 h-5 w-5" />
                      Termin buchen
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>

                {/* Trust Signals */}
                <div className="grid grid-cols-3 gap-6 border-t border-accent-foreground/30 pt-8">
                  <div>
                    <div className="text-2xl font-bold text-accent-foreground">100%</div>
                    <div className="text-sm text-accent-foreground/80">Zufriedenheit</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-foreground">2-6</div>
                    <div className="text-sm text-accent-foreground/80">Entwicklungszeit</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-foreground">90+</div>
                    <div className="text-sm text-accent-foreground/80">Page Speed Rating</div>
                  </div>
                </div>
              </div>

              {/* Reviews Carousel */}
              <section className="py-4 px-4 sm:px-6 lg:px-8">
                <div className="relative bg-gradient-to-br from-accent via-secondary to-primary rounded-3xl overflow-hidden border border-border/50">
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/60 to-secondary/50 shadow-inner" />
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
  )
}