/**
 * Haalt de gepubliceerde projecten uit Supabase, zet het beeldmateriaal lokaal
 * neer als WebP en schrijft docs/data/projecten.json.
 *
 * Draaien:  node tools/sync_projecten.mjs
 * De GitHub Action `projecten-sync` doet dit automatisch; daarna draait
 * tools/build_projecten.py om de HTML opnieuw te genereren.
 *
 * Leest de Supabase-gegevens uit docs/admin/config.js, zodat er maar één plek
 * is waar ze staan. De 'anon public'-sleutel is bedoeld om openbaar te zijn.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONFIG = path.join(ROOT, "docs/admin/config.js");
const BEELD_MAP = path.join(ROOT, "docs/assets/projecten");
const DATA = path.join(ROOT, "docs/data/projecten.json");

function leesConfig(bron) {
  const pak = (sleutel) =>
    bron.match(new RegExp(`${sleutel}\\s*:\\s*["']([^"']*)["']`))?.[1] || "";
  return {
    url: pak("SUPABASE_URL").replace(/\/+$/, ""),
    key: pak("SUPABASE_ANON_KEY"),
    bucket: pak("BUCKET") || "project-media",
  };
}

async function haalProjecten({ url, key }) {
  const query = new URLSearchParams({
    select: "*",
    status: "eq.gepubliceerd",
    order: "volgorde.asc,naam.asc",
  });
  const res = await fetch(`${url}/rest/v1/projecten?${query}`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
  });
  if (!res.ok) {
    throw new Error(`Supabase gaf ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

/** Downloadt een afbeelding en zet hem om naar WebP als sharp beschikbaar is. */
async function haalBeeld(bronUrl, basisnaam) {
  const res = await fetch(bronUrl);
  if (!res.ok) throw new Error(`Kon ${bronUrl} niet ophalen (${res.status})`);
  const ruw = Buffer.from(await res.arrayBuffer());

  let sharp = null;
  try { ({ default: sharp } = await import("sharp")); } catch { /* optioneel */ }

  if (sharp) {
    const data = await sharp(ruw)
      .rotate()                                  // EXIF-oriëntatie toepassen
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toBuffer();
    const meta = await sharp(data).metadata();
    const naam = `${basisnaam}.webp`;
    await fs.writeFile(path.join(BEELD_MAP, naam), data);
    return { url: `/assets/projecten/${naam}`, breedte: meta.width, hoogte: meta.height };
  }

  // Zonder sharp: origineel overnemen, zodat de sync nooit vastloopt.
  const ext = (new URL(bronUrl).pathname.split(".").pop() || "jpg").toLowerCase();
  const naam = `${basisnaam}.${ext}`;
  await fs.writeFile(path.join(BEELD_MAP, naam), ruw);
  console.warn(`  let op: sharp ontbreekt, ${naam} is niet naar WebP omgezet`);
  return { url: `/assets/projecten/${naam}` };
}

async function main() {
  const cfg = leesConfig(await fs.readFile(CONFIG, "utf8"));
  if (!cfg.url || !cfg.key) {
    console.log("Supabase is nog niet ingesteld in docs/admin/config.js — niets te doen.");
    return;
  }

  const rijen = await haalProjecten(cfg);
  console.log(`${rijen.length} gepubliceerd(e) project(en) opgehaald.`);

  await fs.rm(BEELD_MAP, { recursive: true, force: true });
  await fs.mkdir(BEELD_MAP, { recursive: true });

  const projecten = [];
  for (const r of rijen) {
    const afbeeldingen = [];
    const bron = Array.isArray(r.afbeeldingen) ? r.afbeeldingen : [];
    for (const [i, a] of bron.entries()) {
      if (!a?.url) continue;
      try {
        const beeld = await haalBeeld(a.url, `${r.slug}-${i + 1}`);
        afbeeldingen.push({ ...beeld, alt: a.alt || "", bijschrift: a.bijschrift || "" });
      } catch (e) {
        console.warn(`  afbeelding ${i + 1} van "${r.naam}" overgeslagen: ${e.message}`);
      }
    }
    projecten.push({
      slug: r.slug,
      naam: r.naam,
      opdrachtgever: r.opdrachtgever || "",
      opdrachtgever_tonen: !!r.opdrachtgever_tonen,
      locatie: r.locatie || "",
      periode: r.periode || "",
      status: "gepubliceerd",
      volgorde: r.volgorde ?? 100,
      diensten: r.diensten || [],
      samenvatting: r.samenvatting || "",
      werkzaamheden: r.werkzaamheden || [],
      resultaten: r.resultaten || [],
      afbeeldingen,
    });
  }

  // Concepten die alleen lokaal bestaan (zoals de voorbeeldinvulling) blijven staan,
  // tenzij Supabase inmiddels een project met dezelfde slug publiceert.
  let bestaand = { projecten: [] };
  try { bestaand = JSON.parse(await fs.readFile(DATA, "utf8")); } catch { /* eerste keer */ }
  const gepubliceerdeSlugs = new Set(projecten.map((p) => p.slug));
  const concepten = (bestaand.projecten || [])
    .filter((p) => p.status !== "gepubliceerd" && !gepubliceerdeSlugs.has(p.slug));

  const uit = {
    _toelichting: bestaand._toelichting,
    bijgewerkt: new Date().toISOString().slice(0, 10),
    projecten: [...projecten, ...concepten],
  };
  await fs.writeFile(DATA, JSON.stringify(uit, null, 2) + "\n");
  console.log(`docs/data/projecten.json bijgewerkt (${uit.projecten.length} project(en) totaal).`);
}

main().catch((e) => { console.error(e); process.exit(1); });
