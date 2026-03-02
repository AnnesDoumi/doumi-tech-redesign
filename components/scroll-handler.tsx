"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollHandler() {
    const pathname = usePathname()

    useEffect(() => {
        const handleLinkClick = (e: MouseEvent) => {
            // Finde den geklickten Link
            const target = (e.target as HTMLElement).closest("a")
            if (!target) return

            const href = target.getAttribute("href")
            // Vergleiche mit aktuellem Pfad (normalisiert)
            const isCurrentPage = href === pathname || (href === "/" && pathname === "/")

            if (isCurrentPage) {
                // Wenn wir schon da sind: Scroll nach oben erzwingen
                e.preventDefault()
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                })
            }
        }

        document.addEventListener("click", handleLinkClick)
        return () => document.removeEventListener("click", handleLinkClick)
    }, [pathname])

    return null
}