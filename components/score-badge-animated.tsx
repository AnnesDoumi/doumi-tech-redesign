"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import clsx from "clsx"

type Range = { min: number; max: number }
type Props = {
    label: string
    range: Range
    // Optional: Startwert (falls du was fix vorgibst)
    initial?: number
    // Optional: pro Wechsel anim. Dauer (ms)
    durationMs?: number
    // Optional: Intervallfenster (ms)
    intervalMs?: { min: number; max: number }
    className?: string
}

/**
 * Schöne, weiche Zahlenanimation (ähnlich Banking-Apps):
 * - Wert wechselt zufällig im gegebenen Intervall (8–15 s)
 * - Zwischenwerte werden „gezählt“ (eased)
 * - sanfter Fade+Slide jedes Mal
 */
export function ScoreBadgeAnimated({
                                       label,
                                       range,
                                       initial,
                                       durationMs = 900,
                                       intervalMs = { min: 3000, max: 6000 },
                                       className,
                                   }: Props) {
    const [value, setValue] = useState<number>(() =>
        typeof initial === "number" ? clamp(initial, range) : randomInt(range)
    )
    const [isFlashing, setFlashing] = useState(false)
    const raf = useRef<number | null>(null)
    const current = useRef(value)

    const nextDelay = useMemo(() => () => randBetween(intervalMs.min, intervalMs.max), [intervalMs])

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>

        const tick = () => {
            // Zielwert
            const target = randomInt(range, current.current)
            // schöne Tween-Animation
            tweenNumber({
                from: current.current,
                to: target,
                duration: durationMs,
                onStart: () => setFlashing(true),
                onUpdate: (v) => {
                    current.current = v
                    setValue(Math.round(v))
                },
                onComplete: () => setFlashing(false),
                rafRef: raf,
            })
            // nächster Wechsel zufällig 8–15 s
            timer = setTimeout(tick, nextDelay())
        }

        // Start (kleine Verzögerung, damit erste Renderphase ruhig bleibt)
        timer = setTimeout(tick, nextDelay())

        return () => {
            if (raf.current) cancelAnimationFrame(raf.current)
            clearTimeout(timer)
        }
    }, [durationMs, nextDelay, range])

    return (
        <div
            className={clsx(
                "relative overflow-hidden rounded-2xl bg-card border border-border px-6 py-5",
                "transition-shadow",
                isFlashing && "shadow-[0_0_0_4px_rgba(0,0,0,0.02)]",
                className
            )}
        >
            {/* Zahl – sanfter Fade/Slide bei Änderung */}
            <div
                key={value} // key triggert kleinen Reflow für Mini-Fade
                className={clsx(
                    "text-3xl font-bold will-change-transform transition-transform duration-300",
                    isFlashing ? "translate-y-[-2px] opacity-100" : "translate-y-0"
                )}
            >
                {value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>

            {/* dezenter Glanz bei Wechsel */}
            <div
                className={clsx(
                    "pointer-events-none absolute -inset-x-10 -top-6 h-10 rotate-2 rounded-full",
                    "bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md",
                    "transition-opacity duration-500",
                    isFlashing ? "opacity-100" : "opacity-0"
                )}
            />
        </div>
    )
}

/* Utilities */
function randBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function randomInt(range: Range, exclude?: number) {
    let v = randBetween(range.min, range.max)
    if (typeof exclude === "number" && range.max - range.min >= 1) {
        // ggf. erneut würfeln, damit’s sichtbar wechselt
        let tries = 0
        while (v === exclude && tries < 5) {
            v = randBetween(range.min, range.max)
            tries++
        }
    }
    return v
}
function clamp(v: number, r: Range) {
    return Math.max(r.min, Math.min(r.max, v))
}

/** Zahl sanft von A nach B „zählen“ mit easeInOutCubic */
function tweenNumber(opts: {
    from: number
    to: number
    duration: number
    onStart?: () => void
    onUpdate: (v: number) => void
    onComplete?: () => void
    rafRef: React.MutableRefObject<number | null>
}) {
    const { from, to, duration, onStart, onUpdate, onComplete, rafRef } = opts
    const start = performance.now()
    onStart?.()

    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

    const loop = (now: number) => {
        const elapsed = now - start
        const t = Math.min(1, elapsed / duration)
        const v = from + (to - from) * ease(t)
        onUpdate(v)
        if (t < 1) {
            rafRef.current = requestAnimationFrame(loop)
        } else {
            onComplete?.()
        }
    }
    rafRef.current = requestAnimationFrame(loop)
}
