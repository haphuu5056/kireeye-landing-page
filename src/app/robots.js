import { getSiteInfo } from "@/lib/api/site";
export default async function robots() {
    const site = await getSiteInfo();
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${site.url}/sitemap.xml`,
    };
}
