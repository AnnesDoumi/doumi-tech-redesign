import {Header} from "@/components/header"
import {Hero} from "@/components/hero"
import {CTA} from "@/components/cta"
import {Footer} from "@/components/footer"
import ReviewsIsland from "@/components/reviews-island" // <-- richtig importieren
import dynamic from "next/dynamic"
import {Services} from "@/components/services";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
            <Header/>
            <main>
                <Hero/>
                <Services/> {/* client+lazy → leichter Initial-Pfad */}
                <CTA/>
            </main>
            <Footer/>
        </div>
    )
}
