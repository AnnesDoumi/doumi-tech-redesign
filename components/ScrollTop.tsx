"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollTop() {
    const pathname = usePathname()

    useEffect(() => {
        // Verhindert das Hängenbleiben beim Seitenwechsel
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Auf Mobile ist "instant" oft stabiler als "smooth" beim Routenwechsel
        })
    }, [pathname])

    return null
}