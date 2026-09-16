/**
 * Comprimeert het beeldmateriaal in docs/assets/ en zet foto's om naar WebP.
 *
 * Draaien:  npm install --no-save sharp && node tools/optimize_images.mjs
 * Het script is idempotent: bestaande WebP-bestanden worden overschreven met
 * hetzelfde resultaat, originelen blijven staan waar ze nog nodig zijn
 * (favicon en og:image moeten PNG blijven voor Apple en sociale media).
 */
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const A = "docs/assets";
const kb = (n) => (n / 1024).toFixed(0) + " KB";

async function grootte(p) { return (await fs.stat(p)).size; }

async function naarWebp(bron, doel, opties = {}) {
  const voor = await grootte(bron);
  await sharp(bron).webp({ quality: opties.quality ?? 82, effort: 6 }).toFile(doel);
  const na = await grootte(doel);
  console.log(`${path.basename(bron).padEnd(22)} ${kb(voor).padStart(8)} -> ${kb(na).padStart(8)}  ${path.basename(doel)}`);
}

async function pngKleiner(bestand, opties = {}) {
  const voor = await grootte(bestand);
  const data = await sharp(bestand)
    .png({ compressionLevel: 9, palette: true, quality: opties.quality ?? 90, effort: 10 })
    .toBuffer();
  if (data.length < voor) {
    await fs.writeFile(bestand, data);
    console.log(`${path.basename(bestand).padEnd(22)} ${kb(voor).padStart(8)} -> ${kb(data.length).padStart(8)}  (png)`);
  } else {
    console.log(`${path.basename(bestand).padEnd(22)} ${kb(voor).padStart(8)}     al optimaal`);
  }
}

// Logo: WebP voor gebruik in <img>; de PNG blijft bestaan voor schema.org en
// als apple-touch-icon-fallback.
await naarWebp(`${A}/b-advice-logo.png`, `${A}/b-advice-logo.webp`, { quality: 90 });

// Teamfoto's
for (const naam of ["ric", "jay", "leon"]) {
  await naarWebp(`${A}/team/${naam}.jpg`, `${A}/team/${naam}.webp`, { quality: 78 });
}

// Favicon en og:image moeten PNG blijven, wel beter comprimeren.
await pngKleiner(`${A}/favicon.png`);
await pngKleiner(`${A}/og-image.png`, { quality: 88 });
