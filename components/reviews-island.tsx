"use client"
import dynamic from "next/dynamic"
const ReviewsInner = dynamic(() => import("@/components/reviews").then(m => m.Reviews), { ssr: false, loading: () => null })
export default function ReviewsIsland() { return <ReviewsInner /> }
