/**
 * Zet een te bekijken versie van de Astro-site in docs/preview/, zodat hij op
 * https://b-advice.info/preview/ te openen is zonder dat de live site wordt
 * aangeraakt.
 *
 * Waarom een nabewerking en geen `base` in astro.config: alle interne links
 * staan als absoluut pad in de data (/diensten/...). Astro herschrijft
 * handgeschreven hrefs niet mee met een base. Ze hier prefixen houdt de
 * productiebuild helemaal schoon: die kent geen preview-pad.
 *
 * Draaien: npm run preview:build
 */
import fs from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";

const BASIS = "/preview";
const BRON = "dist";
const DOEL = path.join("..", "docs", "preview");

const NOINDEX = '<meta name="robots" content="noindex, nofollow">';
const BANNER = `<div style="position:sticky;top:0;z-index:999;background:#12211a;color:#fff;
  font:600 13px/1.4 system-ui,sans-serif;padding:10px 16px;text-align:center">
  Voorbeeldversie. De live site staat op <a href="https://b-advice.info/" style="color:#4CAF72">b-advice.info</a>.
</div>`;

console.log("bouwen...");
execFileSync("npx", ["astro", "build"], { stdio: "inherit" });

async function bestanden(map) {
  const uit = [];
  for (const item of await fs.readdir(map, { withFileTypes: true })) {
    const p = path.join(map, item.name);
    if (item.isDirectory()) uit.push(...(await bestanden(p)));
    else uit.push(p);
  }
  return uit;
}

await fs.rm(DOEL, { recursive: true, force: true });
await fs.mkdir(DOEL, { recursive: true });

let aantal = 0;
for (const bron of await bestanden(BRON)) {
  const rel = path.relative(BRON, bron);
  const doel = path.join(DOEL, rel);
  await fs.mkdir(path.dirname(doel), { recursive: true });

  // De sitemap van de voorbeeldversie hoort niet in Google terecht te komen.
  if (rel.startsWith("sitemap")) continue;
  // CNAME en robots.txt horen bij de echte site, niet bij een kopie in een
  // submap. De QR-kortlinks staan op stickers en verwijzen naar de echte
  // URL's; een tweede set onder /preview/ heeft geen functie.
  if (rel === "CNAME" || rel === "robots.txt" || rel.startsWith("rmn-")) continue;

  // Ook de verwijzingen binnen de CSS, anders wijzen de @font-face-regels
  // nog naar /fonts/ en valt de site terug op systeemletters.
  if (rel.endsWith(".css")) {
    const css = await fs.readFile(bron, "utf8");
    await fs.writeFile(doel, css.replaceAll('url("/', `url("${BASIS}/`).replaceAll("url(/", `url(${BASIS}/`));
    continue;
  }

  if (rel.endsWith(".html")) {
    let html = await fs.readFile(bron, "utf8");
    html = html
      .replaceAll('href="/', `href="${BASIS}/`)
      .replaceAll('src="/', `src="${BASIS}/`)
      .replace("</head>", `${NOINDEX}\n</head>`)
      .replace(/(<body[^>]*>)/, `$1\n${BANNER}`);
    await fs.writeFile(doel, html);
    aantal++;
  } else {
    await fs.copyFile(bron, doel);
  }
}

console.log(`${aantal} pagina's naar docs/preview/ geschreven`);
