import Link from "next/link"
import {Mail, MapPin} from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-border bg-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4 lg:col-span-2">
                        <Link href="/" className="text-2xl font-semibold text-foreground inline-block">
                            doumi<span className="text-accent">.tech</span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed max-w-md">
                            Web Development für klare, schnelle Webseiten mit Fokus auf Performance und
                            Benutzererfahrung. Moderne
                            Technologien, saubere Umsetzung.
                        </p>
                        <div className="flex flex-col gap-3 pt-4">
                            <a
                                href="mailto:info@doumi.tech"
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                                <Mail className="w-4 h-4"/>
                                info@doumi.tech
                            </a>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4"/>
                                Gropiusstraße 3,
                                13357 Berlin
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
                        <nav className="flex flex-col gap-3">
                            <Link href="/"
                                  className="text-sm text-muted-foreground hover:text-accent transition-colors">
                                Home
                            </Link>
                            <Link href="/portfolio"
                                  className="text-sm text-muted-foreground hover:text-accent transition-colors">Referenzen</Link>
                            <Link href="/performance"
                                  className="text-sm text-muted-foreground hover:text-accent transition-colors">Kickstarter</Link>
                            <Link href="/about"
                                  className="text-sm text-muted-foreground hover:text-accent transition-colors">
                                Über mich
                            </Link>
                        </nav>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground">Rechtliches</h3>
                        <nav className="flex flex-col gap-3">
                            <Link href="/impressum"
                                  className="text-sm text-muted-foreground hover:text-accent transition-colors">
                                Impressum
                            </Link>
                            <Link href="/datenschutz"
                                  className="text-sm text-muted-foreground hover:text-accent transition-colors">
                                Datenschutz
                            </Link>
                            <Link href="/contact"
                                  className="text-sm text-muted-foreground hover:text-accent transition-colors">
                                Kontakt
                            </Link>
                        </nav>
                    </div>
                </div>

                <div className="pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            Webdesign & Webseite von doumi.tech
                        </p>

                    </div>
                </div>

            </div>
        </footer>
    )
}
