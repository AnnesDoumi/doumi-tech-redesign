// app/sitemap.xml/route.ts
import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: "https://doumi.tech/", lastModified: new Date() },
        { url: "https://doumi.tech/portfolio", lastModified: new Date() },
        { url: "https://doumi.tech/about", lastModified: new Date() },
        { url: "https://doumi.tech/contact", lastModified: new Date() },
    ]
}
