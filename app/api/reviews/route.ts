import { NextResponse } from "next/server"

export async function GET() {
    const key = process.env.GOOGLE_MAPS_API_KEY
    const placeId = process.env.GOOGLE_PLACE_ID
    if (!key || !placeId) {
        return NextResponse.json({ error: "Missing GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID" }, { status: 500 })
    }

    const fields = [
        "name",
        "rating",
        "user_ratings_total",
        "url",
        "reviews"
    ].join(",")

    const url =
        `https://maps.googleapis.com/maps/api/place/details/json` +
        `?place_id=${encodeURIComponent(placeId)}` +
        `&fields=${encodeURIComponent(fields)}` +
        `&reviews_no_translations=true` +
        `&reviews_sort=newest` +                 // <— Sortierung (hilft oft)
        `&key=${encodeURIComponent(key)}`


    const res = await fetch(url, { next: { revalidate: 60 * 60 } }) // 1h Cache
    const data = await res.json()

    if (data.status !== "OK") {
        return NextResponse.json({ error: data.status, details: data.error_message }, { status: 502 })
    }

    const r = data.result
    return NextResponse.json({
        name: r.name,
        rating: r.rating,
        total: r.user_ratings_total,
        url: r.url,
        reviews: (r.reviews || []).slice(0, 6).map((x: any) => ({
            author_name: x.author_name,
            rating: x.rating,
            relative_time: x.relative_time_description,
            text: x.text,
            profile_photo_url: x.profile_photo_url,
        })),
    })
}
