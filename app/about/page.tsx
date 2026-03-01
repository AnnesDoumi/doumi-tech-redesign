import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, Zap, Target, Shield, HeartHandshake } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  // Fokus auf die relevanten Techs für Kunden (Next.js & Performance)
  const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Vercel", "SEO-Optimierung", "UI/UX Design"]

  const values = [
    {
      icon: Target,
      title: "Echte Ergebnisse statt nur 'online'",
      description: "Eine Webseite ist kein Selbstzweck. Ich baue Systeme, die Besucher in Kunden verwandeln – egal ob per Anruf oder Kontaktformular.",
    },
    {
      icon: HeartHandshake,
      title: "Ehrliche Beratung",
      description: "Ich verkaufe dir nichts, was du nicht brauchst. Als Wirtschaftsinformatiker schaue ich auf die Kosten-Nutzen-Rechnung deiner IT.",
    },
    {
      icon: Zap,
      title: "Technik von morgen",
      description: "Keine langsamen Baukästen. Ich nutze High-End Technik, damit deine Seite schneller lädt als die der Konkurrenz.",
    },
    {
      icon: Shield,
      title: "Dein Partner auf Augenhöhe",
      description: "Du hast ein Problem oder eine Frage? Ich bin in Berlin vor Ort und reagiere sofort. Keine anonyme Hotline, sondern direkter Kontakt.",
    },
  ]

  return (
      <div className="pt-24 min-h-screen bg-gradient-to-b from-background to-background">
        <Header />
        <main className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight">
                <span className="text-accent">Über mich</span>
              </h1>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Ich bin Wirtschaftsinformatiker aus Berlin und habe <strong>doumi.tech</strong> gegründet, um lokalen Unternehmen dabei zu helfen, im Netz endlich professionell aufzutreten.
                </p>
                <p>
                  Viele Webseiten im Mittelstand sind langsam, veraltet oder rechtlich unsicher. Das kostet jeden Tag bares Geld. Ich schlage die Brücke zwischen <strong>Informatik und Betriebswirtschaft</strong>: Ich baue Technik, die sich für dein Geschäft rechnet.
                </p>
                <p className="text-foreground font-medium">
                  Mein Ziel: Eine Webseite, die dir Arbeit abnimmt und keine neue verursacht.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden bg-muted border border-border/50 shadow-2xl rotate-[-2deg]">
                <Image src="/annes.jpg" alt="Annes - Webentwickler Berlin" fill className="object-cover" priority />
              </div>
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden bg-muted border border-border/50 shadow-2xl rotate-[2deg] mt-8">
                <Image src="/annes030.jpg" alt="Webentwicklung Wedding" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Warum ich? */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Keine Spielereien.</h2> <h2 className="text-accent text-3xl md:text-5xl font-bold mb-4">Nur Qualität.</h2>
              <p className="text-muted-foreground text-lg">Was du von einer Zusammenarbeit mit mir erwarten kannst.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                    <div
                        key={index}
                        className="group bg-card border border-border/50 rounded-3xl p-8 hover:border-accent/50 transition-all duration-300"
                    >
                      <div className="p-3 w-fit rounded-2xl bg-accent/10 text-accent mb-6 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">{value.description}</p>
                    </div>
                )
              })}
            </div>
          </div>

          {/* Tech Stack - Professionell verpackt */}
          <div className="relative  bg-gradient-to-br from-accent via-accent to-secondary bg-card border border-border/50 rounded-[2.5rem] p-8 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] -z-10" />

            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Technik, die performt</h2>
              <p className="text-foreground mb-12 text-lg">
                Ich nutze keine billigen Baukästen. Deine Webseite wird mit den gleichen Technologien gebaut, die auch Branchenriesen wie Netflix oder Airbnb nutzen. Das Ergebnis: <strong>Maximale Geschwindigkeit und Sicherheit.</strong>
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech, index) => (
                    <span
                        key={index}
                        className="px-5 py-2 bg-background border border-border/50 rounded-xl text-sm font-medium"
                    >
                      {tech}
                    </span>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
  )
}