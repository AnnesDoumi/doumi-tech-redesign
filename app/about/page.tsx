import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, Zap, Target, Shield } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Git", "React Native", "Python", "bash"]

  const values = [
    {
      icon: Target,
      title: "Potenzial für dein Geschäft",
      description: "Ein Online Auftritt, jederzeit, überall – der neue Kunden überzeugt.",
    },
    {
      icon: Zap,
      title: "Schnell und zuverlässig",
      description: "Deine Webseite lädt blitzschnell, auch auf dem Smartphone. Das mögen deine Besucher – und Google auch.",
    },
    {
      icon: CheckCircle2,
      title: "Saubere Arbeit",
      description: "Der Code ist ordentlich, die Webseite barrierefreundlich, alles mit größter Sorgfalt.",
    },
    {
      icon: Shield,
      title: "Fehler passieren, ich reagiere.",
      description: "Wenn sich ein Fehler einschleichen sollte, behebe ich diesen so schnell wie möglich.",
    },
  ]

  return (
      <div className="pt-12 min-h-screen bg-gradient-to-b from-background to-background">
        <Header />
        <main className="container mx-auto px-4 py-16 md:py-24">
          {/* Hero Section with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Über mich</h1>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Ich bin Wirtschaftsinformatiker und baue Webseiten, die nicht nur schön aussehen – sondern auch funktionieren. Das heißt: Webseiten, die dir wirklich Kunden bringt.
                </p>
                <p>
                  Egal ob Handwerk, Dienstleistung oder E-Commerce – ich entwickle Webseiten, die funktionieren. Schnell, zuverlässig und nach deiner Zufriedenheit.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/20 via-primary/15 to-accent/10 border border-border/50">
              <Image src="/annes.jpg" alt="Über mich – Webentwickler" fill className="object-cover" />
            </div>
          </div>

          {/* Meine Vorteile */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Was du von mir erwarten kannst</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                    <div
                        key={index}
                        className="group relative bg-card border border-border/50 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-accent/20 text-accent group-hover:bg-accent/30 transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </div>
                )
              })}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-border/50">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Mit moderner Technik gebaut</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
              Bevorzugt entwickle ich deine Webseite ohne Baukastensysteme, sondern direkt über die nötigen Programmiersprachen und Technolgien die dahinter stecken.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                  <div
                      key={index}
                      className="px-6 py-3 bg-card border border-border/50 rounded-full text-sm font-medium hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
  )
}