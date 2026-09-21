/**
 * Zet de sitemap ook op /sitemap.xml neer.
 *
 * De sitemap-integratie van Astro schrijft sitemap-index.xml en sitemap-0.xml,
 * maar geen sitemap.xml. Wie in Google Search Console de gebruikelijke
 * https://b-advice.info/sitemap.xml heeft opgegeven — en dat is ook het adres
 * waar de oude site en docs/robots.txt naar verwijzen — krijgt daar dus een
 * 404 en de melding dat de sitemap niet gelezen kan worden.
 *
 * Een sitemap-index op dat adres is volgens de sitemaps-standaard prima; het
 * bestand hoeft alleen op of boven het niveau te staan van de URL's waar het
 * naar verwijst. Daarom komt hier een kopie te staan, zodat beide adressen
 * werken en een eerder ingediende sitemap blijft kloppen.
 *
 * Gebruik: draait automatisch na `npm run build`.
 */
import { copyFileSync, existsSync } from "node:fs";

const DIST = new URL("../dist/", import.meta.url).pathname;
const bron = DIST + "sitemap-index.xml";
const doel = DIST + "sitemap.xml";

if (!existsSync(bron)) {
  console.warn("sitemap-index.xml niet gevonden; /sitemap.xml niet aangemaakt.");
} else {
  copyFileSync(bron, doel);
  console.log("sitemap ook beschikbaar op /sitemap.xml");
}
