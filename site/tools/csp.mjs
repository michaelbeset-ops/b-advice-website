/**
 * Zet in elke gebouwde pagina een Content-Security-Policy als <meta>-tag.
 *
 * GitHub Pages kan geen eigen HTTP-headers meesturen, dus de meta-variant is
 * de enige manier om hier een CSP te krijgen. Die kent één beperking:
 * frame-ancestors werkt alleen als echte header en wordt in een meta-tag
 * genegeerd. Bescherming tegen clickjacking zit er dus niet in; dat lukt pas
 * met een proxy als Cloudflare ervoor.
 *
 * De inline scripts en stijlen krijgen een hash in plaats van 'unsafe-inline'.
 * Daarmee blijft een script dat een aanvaller in de pagina zou krijgen —
 * bijvoorbeeld via een projectnaam uit de beheeromgeving — alsnog geweigerd.
 * De hashes worden per pagina opnieuw berekend, zodat een wijziging aan een
 * script niet stilletjes de pagina breekt.
 *
 * Gebruik: draait automatisch na `npm run build`.
 */
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, globSync } from "node:fs";

const DIST = new URL("../dist/", import.meta.url).pathname;

/** sha256-hash in de vorm die een CSP verwacht. */
const hash = (inhoud) => `'sha256-${createHash("sha256").update(inhoud, "utf8").digest("base64")}'`;

/** Alle <script>- en <style>-inhoud uit een pagina, inclusief de JSON-LD-blokken. */
function inlineHashes(html, tag) {
  const uit = new Set();
  for (const m of html.matchAll(new RegExp(`<${tag}(?![^>]*\\ssrc=)[^>]*>([\\s\\S]*?)</${tag}>`, "g"))) {
    if (m[1] !== "") uit.add(hash(m[1]));
  }
  return [...uit];
}

function beleid(html) {
  const scripts = inlineHashes(html, "script");
  const stijlen = inlineHashes(html, "style");
  return [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    `script-src 'self' ${scripts.join(" ")}`.trim(),
    `style-src 'self' ${stijlen.join(" ")}`.trim(),
    "img-src 'self' data:",
    "font-src 'self'",
    // Het contact- en locatieformulier versturen naar Web3Forms.
    "connect-src 'self' https://api.web3forms.com",
    "form-action 'self' https://api.web3forms.com",
    // De video op de nieuwspagina komt van YouTube.
    "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
    "upgrade-insecure-requests",
  ].join("; ");
}

let aangepast = 0;
let overgeslagen = 0;
for (const rel of globSync("**/*.html", { cwd: DIST })) {
  const pad = DIST + rel;
  let html = readFileSync(pad, "utf8");
  if (html.includes('http-equiv="Content-Security-Policy"')) continue;
  // De doorstuurpagina's van Astro zijn losse <meta refresh>-bestanden zonder
  // head en zonder script; daar valt niets te beveiligen.
  if (html.includes('http-equiv="refresh"')) { overgeslagen++; continue; }
  const tag = `<meta http-equiv="Content-Security-Policy" content="${beleid(html)}">`;
  // Zo vroeg mogelijk in de head, nog voor het eerste bestand wordt geladen.
  const na = html.indexOf("<head>");
  if (na === -1) {
    console.warn(`geen <head> gevonden, overgeslagen: ${rel}`);
    continue;
  }
  html = html.slice(0, na + 6) + "\n" + tag + html.slice(na + 6);
  writeFileSync(pad, html);
  aangepast++;
}
console.log(`CSP toegevoegd aan ${aangepast} pagina's (${overgeslagen} doorstuurpagina's overgeslagen).`);
