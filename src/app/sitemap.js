import { getSiteInfo } from "@/lib/api/site";
export default async function sitemap() {
    const site = await getSiteInfo();
    return [{ url: site.url, changeFrequency: "weekly", priority: 1 }];
}
