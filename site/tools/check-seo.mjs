/**
 * Controleert de gebouwde site op de dingen waar een zoekmachine naar kijkt:
 * titels en beschrijvingen die te lang of te kort zijn, dubbele titels,
 * ontbrekende canonical of og:image, afbeeldingen zonder alt of afmetingen,
 * ongeldige structured data, pagina's die niet in de sitemap staan en
 * pagina's waar vanuit de inhoud niets naartoe wijst.
 *
 * Gebruik: npm run build && npm run seo
 */
import { readFileSync } from "node:fs";
import { globSync } from "node:fs";
import { relative } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;
const bestanden = globSync("**/*.html", { cwd: DIST }).sort();
const sitemap = readFileSync(DIST + "sitemap-0.xml", "utf8");
const inSitemap = new Set([...sitemap.matchAll(/<loc>https:\/\/b-advice\.info([^<]*)<\/loc>/g)].map((m) => m[1]));

const urlVan = (rel) => (rel === "404.html" ? "/404.html" : "/" + rel.replace("index.html", ""));
const problemen = [];
const titels = new Map();
const inkomend = new Map();
const paginas = [];

for (const rel of bestanden) {
  const s = readFileSync(DIST + rel, "utf8");
  if (s.includes('http-equiv="refresh"')) continue; // doorstuurpagina's
  const u = urlVan(rel);
  paginas.push(u);
  const meld = (m) => problemen.push(`${u.padEnd(44)} ${m}`);

  const titel = s.match(/<title>(.*?)<\/title>/s)?.[1] ?? "";
  const omschrijving = s.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  if (!titel) meld("geen title");
  else if (titel.length > 62) meld(`title ${titel.length} tekens (Google kapt af rond 60)`);
  else if (titel.length < 25) meld(`title kort (${titel.length} tekens)`);
  if (titels.has(titel)) meld(`zelfde title als ${titels.get(titel)}`);
  titels.set(titel, u);
  if (!omschrijving) meld("geen description");
  else if (omschrijving.length < 110 || omschrijving.length > 165)
    meld(`description ${omschrijving.length} tekens (richtlijn 110 tot 165)`);
  if (!s.includes('<link rel="canonical"')) meld("geen canonical");
  if (!s.includes('property="og:image"')) meld("geen og:image");
  if (u === "/404.html" && !s.includes("noindex")) meld("404 zonder noindex");
  if (!inSitemap.has(u) && u !== "/404.html") meld("niet in de sitemap");

  for (const [tag] of s.matchAll(/<img[^>]*>/g)) {
    if (!tag.includes("alt=")) meld(`img zonder alt: ${tag.slice(0, 60)}`);
    if (!tag.includes("width=") || !tag.includes("height=")) meld(`img zonder afmetingen: ${tag.slice(0, 60)}`);
    if (!tag.includes("loading=") && !tag.includes("fetchpriority")) meld(`img zonder loading: ${tag.slice(0, 60)}`);
  }

  for (const m of s.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      meld(`ongeldige structured data: ${e.message}`);
    }
  }

  // Links uit de hoofdinhoud tellen, niet die uit menu en voettekst: die
  // staan toch op elke pagina en zeggen niets over de opbouw.
  const hoofd = s.match(/<main.*?<\/main>/s)?.[0] ?? "";
  for (const m of hoofd.matchAll(/href="(\/[^"#?]*)"/g)) {
    if (m[1] === u) continue;
    if (!inkomend.has(m[1])) inkomend.set(m[1], new Set());
    inkomend.get(m[1]).add(u);
  }
}

// Alleen via het menu of de voettekst bereikbaar is geen fout, maar het is
// wel de zwakste plek in de opbouw: een zoekmachine leidt uit links binnen de
// tekst af waar een pagina over gaat en hoe belangrijk hij is.
const aandacht = [];
for (const u of paginas) {
  if (u === "/" || u === "/404.html") continue;
  const n = inkomend.get(u)?.size ?? 0;
  if (n === 0) aandacht.push(`${u.padEnd(44)} alleen via menu of voettekst bereikbaar`);
}

console.log(`${paginas.length} pagina's gecontroleerd`);
if (problemen.length === 0) {
  console.log("geen SEO-problemen gevonden");
} else {
  console.log(`\n${problemen.length} problemen:`);
  for (const p of problemen) console.log("  " + p);
  process.exitCode = 1;
}
if (aandacht.length) {
  console.log(`\n${aandacht.length} aandachtspunten:`);
  for (const p of aandacht) console.log("  " + p);
}
