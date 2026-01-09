import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import ReviewsIsland from "@/components/reviews-island"

export const metadata: Metadata = {
    title: "Kundenstimmen & Google-Bewertungen – doumi.tech",
    description: "Echte Erfahrungen und Bewertungen zu Webdesign & Webentwicklung.",
    alternates: { canonical: "https://doumi.tech/reviews" },
}

export default function ReviewsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
            <Header />
            <main className="pt-28 md:pt-32 container mx-auto px-4 pb-16 md:pb-24">
                <header className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Kundenstimmen</h1>
                    <p className="text-lg text-muted-foreground">
                        Ausgewählte Google-Bewertungen zu Projekten in Webdesign & Webentwicklung.
                    </p>
                </header>

                <ReviewsIsland /> {/* lazy, ssr:false – korrekt */}
            </main>
            <Footer />
        </div>
    )
}
