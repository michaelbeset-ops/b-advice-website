/**
 * Meet het contrast van alle zichtbare tekst tegen de werkelijk gerenderde
 * achtergrond en toetst aan WCAG 2.1 AA (4,5:1, of 3:1 voor grote tekst).
 *
 * Nederlandse overheidsopdrachtgevers vragen hiernaar; deze controle maakt
 * aantoonbaar dat de site eraan voldoet.
 *
 * Gebruik:
 *   cd docs && python3 -m http.server 8765 &
 *   npm install --no-save playwright
 *   node tools/check_contrast.mjs
 */
import { chromium } from "playwright";

const BASIS = process.env.BASIS_URL || "http://127.0.0.1:8765";
const paginas = ["/","/diensten/","/diensten/projectleiding/","/diensten/locatieonderzoek/","/diensten/plaatsing/","/diensten/beheer-onderhoud/","/projecten/","/projecten/hoogbouw-op-orde-dordrecht/","/over-ons/","/contact/","/nieuws/","/nieuws/kantelpunt-2026/","/nieuws/qr-code-pilot/","/locatieaanvraag/","/producten/","/b-organized/","/b-covered/","/privacy/","/cookies/"];

const browser = await chromium.launch(
  process.env.CHROME_PAD ? { executablePath: process.env.CHROME_PAD } : {});
const alleFouten = [];

for (const pad of paginas) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(BASIS + pad, { waitUntil: "networkidle" });
  await page.evaluate(() => localStorage.setItem("b_advice_consent", "x"));
  await page.reload({ waitUntil: "networkidle" });

  const fouten = await page.evaluate(() => {
    const kleur = (c) => {
      const m = c.match(/[\d.]+/g).map(Number);
      return { r: m[0], g: m[1], b: m[2], a: m.length > 3 ? m[3] : 1 };
    };
    const meng = (voor, achter) => ({
      r: voor.r * voor.a + achter.r * (1 - voor.a),
      g: voor.g * voor.a + achter.g * (1 - voor.a),
      b: voor.b * voor.a + achter.b * (1 - voor.a), a: 1,
    });
    const lum = ({ r, g, b }) => {
      const f = (v) => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; };
      return .2126 * f(r) + .7152 * f(g) + .0722 * f(b);
    };
    const ratio = (a, b) => {
      const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
      return (hi + .05) / (lo + .05);
    };
    const achtergrondVan = (el) => {
      let n = el, stapel = [];
      while (n && n !== document.documentElement) {
        const bg = kleur(getComputedStyle(n).backgroundColor);
        if (bg.a > 0) { stapel.push(bg); if (bg.a === 1) break; }
        n = n.parentElement;
      }
      stapel.push({ r: 255, g: 255, b: 255, a: 1 });
      return stapel.reduceRight((achter, voor) => meng(voor, achter));
    };

    const uit = [];
    for (const el of document.querySelectorAll("body *")) {
      const tekst = [...el.childNodes]
        .filter((n) => n.nodeType === 3 && n.textContent.trim())
        .map((n) => n.textContent.trim()).join(" ");
      if (!tekst) continue;
      const st = getComputedStyle(el);
      if (st.visibility === "hidden" || st.display === "none" || +st.opacity === 0) continue;
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) continue;
      const voor = kleur(st.color);
      const vg = voor.a < 1 ? meng(voor, achtergrondVan(el)) : voor;
      const c = ratio(vg, achtergrondVan(el));
      const px = parseFloat(st.fontSize);
      const groot = px >= 24 || (px >= 18.66 && +st.fontWeight >= 700);
      const eis = groot ? 3 : 4.5;
      if (c < eis) {
        uit.push({ tekst: tekst.slice(0, 48), sel: el.tagName.toLowerCase() + "." + (el.className || "").toString().split(" ")[0],
                   ratio: +c.toFixed(2), eis, px });
      }
    }
    return uit;
  });

  if (fouten.length) {
    alleFouten.push([pad, fouten]);
    console.log(`\n${pad}`);
    for (const f of fouten) console.log(`  ${f.ratio}:1 (${f.eis} nodig, ${f.px}px)  ${f.sel}  "${f.tekst}"`);
  }
  await ctx.close();
}
await browser.close();
const aantal = alleFouten.reduce((n, [, f]) => n + f.length, 0);
console.log(aantal
  ? `\n${aantal} tekstelementen halen AA niet`
  : `Alle tekst op ${paginas.length} pagina's haalt WCAG 2.1 AA.`);
process.exit(aantal ? 1 : 0);
