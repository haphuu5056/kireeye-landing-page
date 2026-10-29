export async function apiGet(path, { revalidate = 300 } = {}) {
  const baseUrl = process.env.API_BASE_URL;
  if (!baseUrl) {
    throw new Error("API_BASE_URL is not configured");
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // Create a 5-second timeout to prevent serverless hanging
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(`${baseUrl.replace(/\/+$/, "")}${normalizedPath}`, {
      headers: { Accept: "application/json" },
      next: { revalidate },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) throw new Error(`API error ${res.status} for ${path}`);
    return res.json();
  } catch (error) {
    clearTimeout(timeoutId);
    throw error; // This safely drops into getSiteInfo's catch block and serves fallbackSite
  }
}
