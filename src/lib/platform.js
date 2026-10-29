export function detectStorePlatform(userAgent) {
    const ua = userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua))
        return "ios";
    if (/android/.test(ua))
        return "android";
    return "other";
}
