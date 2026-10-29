import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const outDir = path.join(process.cwd(), "public", "images");
fs.mkdirSync(outDir, { recursive: true });

const teal = "#0E8A7D";
const navy = "#123447";
const sand = "#E8F3F1";
const slate = "#334155";

function svg({ width, height, background, label, subtitle, darkText = false }) {
  const fill = darkText ? navy : "#ffffff";
  const muted = darkText ? "rgba(18,52,71,0.7)" : "rgba(255,255,255,0.8)";
  const panel = darkText ? "rgba(18,52,71,0.06)" : "rgba(255,255,255,0.08)";
  const stroke = darkText ? "rgba(18,52,71,0.12)" : "rgba(255,255,255,0.18)";
  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${background}"/>
      <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="28" fill="${panel}" stroke="${stroke}"/>
      <text x="50%" y="${height / 2 - 8}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.round(width / 18)}" font-weight="700" fill="${fill}">${label}</text>
      <text x="50%" y="${height / 2 + 28}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.round(width / 32)}" fill="${muted}">${subtitle}</text>
    </svg>
  `);
}

const files = [
  { name: "hero-app.webp", width: 780, height: 1600, background: navy, label: "App screenshot", subtitle: "PLACEHOLDER" },
  { name: "owner.png", width: 1200, height: 900, background: "#EDE7FF", label: "Property owners", subtitle: "OWNER IMAGE PLACEHOLDER", darkText: true },
  { name: "og-image.webp", width: 1200, height: 630, background: navy, label: "kireeye", subtitle: "Book hotels, halls, apartments and tickets" },
  { name: "qr-code.webp", width: 320, height: 320, background: "#0F172A", label: "QR", subtitle: "PLACEHOLDER" },
  { name: "partner-1.webp", width: 360, height: 120, background: sand, label: "Partner 1", subtitle: "PLACEHOLDER", darkText: true },
  { name: "partner-2.webp", width: 360, height: 120, background: sand, label: "Partner 2", subtitle: "PLACEHOLDER", darkText: true },
  { name: "partner-3.webp", width: 360, height: 120, background: sand, label: "Partner 3", subtitle: "PLACEHOLDER", darkText: true },
  { name: "partner-4.webp", width: 360, height: 120, background: sand, label: "Partner 4", subtitle: "PLACEHOLDER", darkText: true },
];

for (const file of files) {
  const image = sharp(svg(file));
  if (file.name.endsWith(".png")) {
    await image.png().toFile(path.join(outDir, file.name));
  } else {
    await image.webp({ quality: 82 }).toFile(path.join(outDir, file.name));
  }
  console.log("wrote", file.name);
}
