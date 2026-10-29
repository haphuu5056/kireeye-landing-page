import { apiGet } from "./client";
import { mapSiteInfo } from "./mappers";
import { fallbackSite } from "@/lib/content";

export async function getSiteInfo() {
  try {
    const json = await apiGet("/site/info");
    return mapSiteInfo(json.payload);
  } catch (error) {
    console.error("getSiteInfo failed:", error);
    return fallbackSite; // the page still works if the API is down
  }
}
