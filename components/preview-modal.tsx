"use client"
import { X } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export function PreviewModal({
                                 src,
                                 alt,
                                 open,
                                 onClose,
                             }: {
    src: string
    alt: string
    open: boolean
    onClose: () => void
}) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        document.addEventListener("keydown", onKey)
        return () => document.removeEventListener("keydown", onKey)
    }, [onClose])

    if (!open) return null

    return (
        <div
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm"
            onClick={onClose}
            aria-modal
            role="dialog"
        >
            <div
                className="absolute inset-0 m-auto max-w-4xl w-[92%] aspect-[16/10] rounded-3xl border border-border overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* sanfter Accent-Hintergrund */}
                <div className="absolute -inset-1 rounded-[28px] pointer-events-none bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/10" />

                {/* Klick auf Bild schließt Modal */}
                <button
                    onClick={onClose}
                    className="absolute inset-0 cursor-zoom-out"
                    aria-label="Vorschau schließen"
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover"
                        priority
                    />
                </button>

                {/* X-Button (zusätzlich verfügbar) */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-20 p-2 rounded-full bg-card/85 border border-border hover:bg-card transition-colors"
                    aria-label="Vorschau schließen"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}
