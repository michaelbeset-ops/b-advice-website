import type { Artikel, ArtikelBlok } from "../data/nieuws";

/** Platte tekst uit een blok, voor het tellen van woorden. */
function tekstVan(blok: ArtikelBlok): string {
  switch (blok.type) {
    case "p":
    case "h2":
    case "h3":
    case "citaat":
    case "bron":
      return blok.tekst;
    case "lijst":
      return blok.items.join(" ");
    case "stappen":
      return blok.items.map((i) => `${i.titel} ${i.tekst}`).join(" ");
    case "kader":
      return blok.inhoud.map(tekstVan).join(" ");
    case "let-op":
      return blok.tekst;
    case "faq":
      return blok.items.map((i) => `${i.vraag} ${i.antwoord}`).join(" ");
    case "cta":
      return `${blok.kop} ${blok.tekst}`;
    default:
      return "";
  }
}

/**
 * Leestijd in hele minuten. 200 woorden per minuut is de gangbare aanname
 * voor Nederlands lopend proza. Altijd minstens één minuut.
 */
export function leestijd(artikel: Artikel): number {
  const woorden = artikel.blokken
    .map(tekstVan)
    .join(" ")
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(woorden / 200));
}

/** Kop naar een anker: kleine letters, zonder accenten en leestekens. */
export function anker(tekst: string): string {
  return tekst
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * De tussenkoppen van een artikel, voor de inhoudsopgave. Dubbele koppen
 * krijgen een volgnummer, anders wijzen twee ankers naar dezelfde plek.
 */
export function inhoudsopgave(artikel: Artikel): { id: string; tekst: string }[] {
  const gebruikt = new Map<string, number>();
  return artikel.blokken
    .filter((b): b is Extract<ArtikelBlok, { type: "h2" }> => b.type === "h2")
    .map((b) => {
      const basis = anker(b.tekst);
      const n = (gebruikt.get(basis) ?? 0) + 1;
      gebruikt.set(basis, n);
      return { id: n === 1 ? basis : `${basis}-${n}`, tekst: b.tekst };
    });
}
