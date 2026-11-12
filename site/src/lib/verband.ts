/**
 * Verbanden tussen artikelen, diensten en kennispagina's.
 *
 * Een artikel hoort bij een dienst of kennispagina als het er in de tekst naar
 * linkt. Dat verband wordt hier uit de artikelen zelf gehaald, zodat een nieuw
 * artikel niets extra's hoeft op te geven: wie in de tekst naar
 * /diensten/locatieonderzoek/ linkt, verschijnt vanzelf onder "Achtergrond" op
 * die dienstpagina, en artikelen over hetzelfde onderwerp verwijzen onderaan
 * naar elkaar.
 */
import { artikelen } from "../data/nieuws";
import type { Artikel } from "../data/nieuws";
import { diensten, tekstPaginas, navigatie } from "../data/site";

/** Pagina's die als onderwerp tellen: alle diensten en de kennispagina's. */
const JURIDISCH = new Set(["privacy", "cookies"]);

export interface Onderwerp {
  url: string;
  label: string;
}

export const onderwerpen: Onderwerp[] = [
  ...diensten.map((d) => {
    const url = `/diensten/${d.slug}/`;
    return { url, label: navigatie.diensten.find((n) => n.url === url)?.label ?? d.h1 };
  }),
  ...tekstPaginas.filter((p) => !JURIDISCH.has(p.slug)).map((p) => ({ url: `/${p.slug}/`, label: p.h1 })),
];

const bekend = new Set(onderwerpen.map((o) => o.url));

/** De onderwerp-URL's waar een artikel in de tekst naar linkt, in volgorde. */
export function onderwerpenVan(artikel: Artikel): string[] {
  const tekst = JSON.stringify(artikel.blokken);
  const gevonden: string[] = [];
  for (const m of tekst.matchAll(/href=\\"(\/[^"\\#?]*)/g)) {
    let url = m[1];
    if (!url.endsWith("/")) url += "/";
    if (bekend.has(url) && !gevonden.includes(url)) gevonden.push(url);
  }
  return gevonden;
}

/** Artikelen die naar een onderwerp linken, nieuwste eerst. */
export function artikelenOver(url: string, max = 6): Artikel[] {
  return artikelen.filter((a) => onderwerpenVan(a).includes(url)).slice(0, max);
}

/**
 * Drie artikelen om verder te lezen: eerst die met de meeste gedeelde
 * onderwerpen, bij gelijke stand de nieuwste. Zijn er te weinig verwante
 * artikelen, dan vult de chronologische volgorde aan.
 */
export function verderLezen(artikel: Artikel, aantal = 3): Artikel[] {
  const eigen = new Set(onderwerpenVan(artikel));
  const anderen = artikelen.filter((a) => a.slug !== artikel.slug);
  const gescoord = anderen
    .map((a, i) => ({ a, i, score: onderwerpenVan(a).filter((u) => eigen.has(u)).length }))
    .filter((x) => x.score > 0)
    .sort((x, y) => y.score - x.score || x.i - y.i)
    .map((x) => x.a);
  const i = artikelen.findIndex((a) => a.slug === artikel.slug);
  const chronologisch = [...artikelen.slice(i + 1), ...artikelen.slice(0, i)];
  const lijst = [...gescoord];
  for (const a of chronologisch) if (!lijst.includes(a)) lijst.push(a);
  return lijst.slice(0, aantal);
}

export function onderwerp(url: string): Onderwerp | undefined {
  return onderwerpen.find((o) => o.url === url);
}
