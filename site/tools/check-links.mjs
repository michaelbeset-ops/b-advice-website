/**
 * Controleert of elke interne verwijzing in dist/ naar een bestaande pagina
 * wijst. Draai na `npm run build`.
 *
 * Zolang de migratie loopt is de lijst met ontbrekende pagina's het overzicht
 * van wat er nog gebouwd moet worden.
 */
import fs from "node:fs/promises";
import path from "node:path";

const DIST = "dist";
const HREF = /(?:href|src)="(\/[^"#?]*)(?:[#?][^"]*)?"/g;

async function bestanden(map) {
  const uit = [];
  for (const item of await fs.readdir(map, { withFileTypes: true })) {
    const p = path.join(map, item.name);
    if (item.isDirectory()) uit.push(...(await bestanden(p)));
    else if (item.name.endsWith(".html")) uit.push(p);
  }
  return uit;
}

async function bestaat(url) {
  const basis = path.join(DIST, url.replace(/^\//, ""));
  for (const kandidaat of [basis, path.join(basis, "index.html")]) {
    try {
      if ((await fs.stat(kandidaat)).isFile()) return true;
    } catch {}
  }
  return false;
}

const ontbreekt = new Map();
let totaal = 0;
for (const f of await bestanden(DIST)) {
  const src = await fs.readFile(f, "utf8");
  for (const m of src.matchAll(HREF)) {
    totaal++;
    if (!(await bestaat(m[1]))) ontbreekt.set(m[1], (ontbreekt.get(m[1]) ?? 0) + 1);
  }
}

console.log(`${totaal} interne verwijzingen gecontroleerd`);
if (ontbreekt.size === 0) {
  console.log("alle interne links wijzen naar een bestaande pagina");
} else {
  console.log(`\n${ontbreekt.size} pagina's bestaan nog niet:`);
  for (const [url, n] of [...ontbreekt].sort()) console.log(`  ${String(n).padStart(3)}x  ${url}`);
}
