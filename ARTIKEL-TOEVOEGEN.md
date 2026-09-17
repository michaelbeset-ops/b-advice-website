# Nieuw nieuwsartikel toevoegen

## Stap-voor-stap

### 1. Bepaal de slug
Kies een korte, beschrijvende URL-slug op basis van het focus-zoekwoord.  
Voorbeeld: `diftar-betalen-naar-gebruik` → pagina wordt `/nieuws/diftar-betalen-naar-gebruik/`

Regels:
- Alleen kleine letters, cijfers en koppeltekens
- Geen spaties, geen speciale tekens
- Zoekwoord staat vooraan

---

### 2. Maak de map en het HTML-bestand

```bash
mkdir docs/nieuws/JOUW-SLUG
cp docs/nieuws/_artikel-template.html docs/nieuws/JOUW-SLUG/index.html
```

---

### 3. Vul de verplichte SEO-velden in (bovenin het bestand)

Open `docs/nieuws/JOUW-SLUG/index.html` en vervang **alle** `HOOFDLETTERS`-placeholders:

| Placeholder | Wat invullen |
|---|---|
| `ZOEKWOORD: korte beschrijving \| B-Advice` | Paginatitel, **max 60 tekens**. Zoekwoord vooraan. |
| `Vul hier een unieke beschrijving in...` | Meta description, **ca. 150 tekens**. |
| `SLUG-VAN-DIT-ARTIKEL` | Jouw slug (3x: canonical, og:url) |
| `Volledige artikeltitel zoals in de H1` | Exacte H1-tekst in het JSON-LD Article-schema |
| `JJJJ-MM-DD` (2x) | Publicatiedatum én wijzigingsdatum, formaat `2026-06-26` |

Het kruimelpad en het bijbehorende `BreadcrumbList`-blok hoef je **niet** in te
vullen: die worden gegenereerd uit het pad en de H1 van de pagina.

---

### 4. Schrijf de inhoud

Vul de body in:

- **Één H1** — al aanwezig in de template als `<h1 class="article-hero-title">`
- **H2's** voor elke sectie — gebruik `<h2 class="article-h2">`
- **Minimaal één interne link** naar een dienstenpagina of gerelateerd artikel
- **CTA-blok** onderaan — pas de koptekst en uitleg aan op het artikel-onderwerp

Beschikbare elementen:
```html
<!-- Pull-quote -->
<div class="article-pullquote"><p>Tekst <span>accent</span>.</p></div>

<!-- Checklist -->
<div class="article-infobox">
  <div class="article-infobox-title">Kader-titel</div>
  <ul class="article-checklist">
    <li>Punt</li>
  </ul>
</div>

<!-- Oranje waarschuwingsbox -->
<div class="article-warning">
  <div class="article-warning-label">Let op</div>
  <p>Tekst.</p>
</div>

<!-- Donker stat-blok -->
<div style="background:#0F2117;border-radius:16px;padding:30px 30px 22px;">
  ...
</div>
```

---

### 5. Voeg de kaart toe op de nieuwsoverzichtpagina

Open `docs/nieuws/index.html` en voeg in het "Meer nieuws" grid een kaart toe:

```html
<a href="/nieuws/JOUW-SLUG/" style="text-decoration:none;display:block;background:#fff;border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;transition:border-color .18s;" onmouseover="this.style.borderColor='var(--ink-3)';" onmouseout="this.style.borderColor='';">
  <div style="background:var(--ink);padding:28px 28px 24px;position:relative;overflow:hidden;">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(76,175,114,.15);border:1px solid rgba(76,175,114,.25);color:var(--merk);font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;padding:4px 10px;border-radius:100px;margin-bottom:16px;">
      Artikel <!-- of: Analyse / Uitleg / Innovatie -->
    </div>
    <div style="font-size:18px;font-weight:700;color:#fff;line-height:1.3;letter-spacing:-.3px;">ARTIKELTITEL</div>
  </div>
  <div style="padding:20px 28px 24px;">
    <p style="font-size:14px;color:var(--ink-3);line-height:1.65;margin:0 0 16px;">KORTE TEASER (1-2 zinnen)</p>
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <span style="font-size:12px;color:var(--ink-4);">Maand JJJJ</span>
      <span style="font-size:13px;font-weight:600;color:var(--green);">Lees artikel &rarr;</span>
    </div>
  </div>
</a>
```

**Let op met kleuren.** Gebruik `var(--green)` voor tekst op lichte vlakken en
`var(--merk)` voor tekst op de donkere vlakken. Het logogroen haalt op wit maar
2,7:1 en zakt daarmee door de WCAG-norm; `tools/check_contrast.mjs` betrapt dat.

---

### 6. Bouw de site opnieuw op

```bash
python3 tools/build.py
```

Dit zet het kruimelpad en het `BreadcrumbList`-blok op de nieuwe pagina, werkt
`docs/sitemap.xml` bij en controleert links en SEO. De sitemap hoef je dus niet
met de hand te bewerken.

Controleer daarna ook de toegankelijkheid:

```bash
cd docs && python3 -m http.server 8765 &
npm install --no-save playwright
node tools/check_contrast.mjs
```

---

### 7. Commit en push

```bash
git add docs/nieuws/JOUW-SLUG/ docs/nieuws/index.html docs/sitemap.xml
git commit -m "Nieuw artikel: ARTIKELTITEL"
git push origin main
```

---

### 8. Herindexering aanvragen in Google Search Console (handmatig)

1. Ga naar [search.google.com/search-console](https://search.google.com/search-console)
2. Selecteer eigendom `b-advice.info`
3. Gebruik **URL-inspectie** → plak `https://b-advice.info/nieuws/JOUW-SLUG/` → klik "Indexering aanvragen"
4. Optioneel: dien ook de bijgewerkte sitemap opnieuw in via **Indexering → Sitemaps**

---

## Artikelen op basis van een bericht van een derde

Neem nooit letterlijk tekst over van een gemeente, koepelorganisatie of vakmedium:
op die teksten rust auteursrecht. Schrijf een eigen stuk op basis van de feiten
en voeg toe wat B-Advice er vanuit de praktijk aan kan toevoegen — dat is ook
wat het artikel onderscheidend maakt voor Google.

Vermeld de bron onderaan met een link, bijvoorbeeld:

```html
<p class="article-bron">Bron: <a href="https://www.voorbeeld.nl/bericht" target="_blank" rel="noopener">Gemeente Voorbeeld</a>, 12 september 2026.</p>
```

## Checklist voor elk artikel

- [ ] `<title>` ingevuld, max 60 tekens, zoekwoord vooraan
- [ ] `<meta name="description">` ingevuld, ca. 150 tekens
- [ ] `<link rel="canonical">` klopt met de slug
- [ ] OG-tags ingevuld (og:title, og:description, og:url)
- [ ] JSON-LD Article schema: `datePublished` en `dateModified` als `JJJJ-MM-DD`
- [ ] Precies één `<h1>` in het artikel
- [ ] Minimaal één interne link naar dienst of gerelateerd artikel
- [ ] Bron vermeld als het artikel op een bericht van een derde is gebaseerd
- [ ] Kaart toegevoegd aan `docs/nieuws/index.html`
- [ ] `python3 tools/build.py` gedraaid (zet kruimelpad en sitemap, controleert links en SEO)
- [ ] `node tools/check_contrast.mjs` gedraaid — geen meldingen
- [ ] Gecommit en gepusht naar main
- [ ] URL-inspectie gedaan in Google Search Console
