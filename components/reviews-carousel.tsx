// components/reviews-carousel.tsx
"use client"

import { useEffect, useState, useMemo, useRef } from "react"
import clsx from "clsx"

type Review = {
    author_name: string
    rating: number
    relative_time: string
    text: string
    profile_photo_url?: string
}
type Payload = { name: string; rating: number; total: number; url: string; reviews: Review[] }

export function ReviewsCarousel({
                                    className,
                                    variant = "card", // "card" = mobil/klein, "embed" = CTA groß
                                }: { className?: string; variant?: "card" | "embed" }) {
    const [data, setData] = useState<Payload | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [idx, setIdx] = useState(0)
    const hoverRef = useRef(false)


    useEffect(() => {
        let alive = true
        fetch("/api/reviews")
            .then(r => r.json())
            .then(j => { if (alive) { j?.error ? setError(j.error) : setData(j) } })
            .catch(() => alive && setError("Fehler beim Laden"))
        return () => { alive = false }
    }, [])

    const reviews = useMemo(() => data?.reviews ?? [], [data])
    const hasMany = reviews.length > 1

    useEffect(() => {
        if (!hasMany) return
        const t = setInterval(() => {
            if (!hoverRef.current) setIdx(i => (i + 1) % reviews.length)
        }, 5000)
        return () => clearInterval(t)
    }, [hasMany, reviews.length])

    if (error) return null
    if (!data || reviews.length === 0) {
        // Skeleton
        return (
            <div className={clsx("h-full w-full p-6 lg:p-10", className)}>
                <div className="h-full w-full rounded-3xl border border-border bg-card/70 backdrop-blur-sm p-8 animate-pulse" />
            </div>
        )
    }

    const r = reviews[idx]

    return (
        <div
            className={clsx(
                variant === "embed"
                    ? "h-full w-full"                     // nimmt den ganzen Slot
                    : "p-4 lg:p-6",
                className
            )}
            onMouseEnter={() => (hoverRef.current = true)}
            onMouseLeave={() => (hoverRef.current = false)}
            aria-roledescription={hasMany ? "carousel" : undefined}
        >
            <article
                className={clsx(
                    "mx-auto h-full w-full max-w-[600px] max-h-[520px]",
                    "rounded-3xl border border-white/10 bg-card/80 backdrop-blur-xl",
                    "shadow-2xl shadow-black/10 ring-1 ring-white/10",
                    "p-10 flex flex-col justify-between text-center items-center"
                )}
            >
                {/* Kopfbereich */}
                <div className="space-y-2">
                    <div className="text-accent text-2xl">
                        {"★".repeat(Math.round(r.rating))}
                        <span className="text-muted-foreground/30">
        {"★".repeat(5 - Math.round(r.rating))}
      </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">{r.author_name}</h3>
                        <p className="text-xs text-muted-foreground">{r.relative_time}</p>
                    </div>
                </div>

                {/* Text */}
                <p
                    className={clsx(
                        "text-base text-muted-foreground leading-relaxed max-w-[38ch]",
                        "mt-6 mb-6 line-clamp-6"
                    )}
                    title={r.text}
                >
                    {r.text}
                </p>

                {/* Button */}
                <a
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-background/70 hover:border-accent hover:text-accent transition-colors text-sm"
                >
                    Auf Google ansehen
                </a>
            </article>

        </div>
    )
}
