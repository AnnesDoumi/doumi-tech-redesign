"use client"

import { useEffect, useState } from "react"

type Review = {
    author_name: string; rating: number; relative_time: string; text: string; profile_photo_url?: string
}
type Payload = { name: string; rating: number; total: number; url: string; reviews: Review[] }

export function Reviews() {
    const [data, setData] = useState<Payload | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("/api/reviews")
            .then(r => r.json())
            .then(j => {
                console.log("[/api/reviews] response:", j) // <— hilft beim Debuggen
                if (j?.error) setError(`${j.error}${j.details ? `: ${j.details}` : ""}`)
                else setData(j)
            })
            .catch((e) => setError(e?.message || "Fehler beim Laden"))
            .finally(() => setLoading(false))
    }, [])

    // Loading Skeleton
    if (loading) {
        return (
            <section className="cv-auto py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-8">
                        <div className="h-8 w-64 bg-muted animate-pulse rounded" />
                        <div className="h-4 w-40 mt-2 bg-muted animate-pulse rounded" />
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="rounded-3xl border border-border p-6 bg-card">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
                                    <div className="space-y-2">
                                        <div className="h-4 w-32 bg-muted animate-pulse rounded" />
                                        <div className="h-3 w-24 bg-muted animate-pulse rounded" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-3 w-full bg-muted animate-pulse rounded" />
                                    <div className="h-3 w-5/6 bg-muted animate-pulse rounded" />
                                    <div className="h-3 w-2/3 bg-muted animate-pulse rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    // Fehler oder keine Reviews: Fallback statt „nichts“
    if (error || !data || !Array.isArray(data.reviews) || data.reviews.length === 0) {
        return (
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="rounded-3xl border border-border bg-card p-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Bewertungen</h2>
                        <p className="text-muted-foreground">
                            {error
                                ? `Bewertungen konnten nicht geladen werden (${error}).`
                                : "Aktuell sind noch keine Google-Bewertungen verfügbar."}
                        </p>
                    </div>
                </div>
            </section>
        )
    }

    // Normale Ansicht
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">Bewertungen</h2>
                        <p className="text-muted-foreground">
                            {data.rating?.toFixed?.(1)} / 5 · {data.total} Bewertungen
                        </p>
                    </div>
                    <a
                        href={data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-card hover:border-accent transition-colors"
                    >
                        Google
                    </a>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {data.reviews.map((rev, i) => (
                        <article
                            key={`${rev.author_name}-${i}`}
                            className="group relative bg-card border border-border rounded-3xl p-6 hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 rounded-full overflow-hidden bg-accent/10">
                                    {rev.profile_photo_url ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={rev.profile_photo_url} alt={rev.author_name} className="h-full w-full object-cover" />
                                    ) : (
                                        <div className="h-full w-full flex items-center justify-center text-accent font-semibold">
                                            {rev.author_name?.slice(0, 1) ?? "?"}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <div className="font-medium">{rev.author_name}</div>
                                    <div className="text-xs text-muted-foreground">{rev.relative_time}</div>
                                </div>
                            </div>

                            <div className="mb-3 flex gap-1">
                                {Array.from({ length: 5 }).map((_, s) => (
                                    <span key={s} className={s < Math.round(rev.rating) ? "text-accent" : "text-muted-foreground/30"}>★</span>
                                ))}
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-6">{rev.text}</p>
                        </article>
                    ))}
                </div>

                <p className="text-xs text-muted-foreground mt-6">
                    Bewertungen bereitgestellt durch Google Places. Einige Inhalte können moderiert oder gekürzt sein.
                </p>
            </div>
        </section>
    )
}
