// app/robots.txt/route.ts
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [{ userAgent: "*", allow: "/" }],
        sitemap: "https://doumi.tech/sitemap.xml",
    }
}
