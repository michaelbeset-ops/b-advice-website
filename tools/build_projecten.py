#!/usr/bin/env python3
"""
Genereert de projectpagina's uit docs/data/projecten.json.

Levert:
  docs/projecten/index.html            overzichtspagina
  docs/projecten/<slug>/index.html     detailpagina per project
en vult de projectblokken op de homepage en de twee dienstenpagina's.

Projecten met status "concept" krijgen wel een detailpagina (zodat de klant kan
meekijken), maar staan niet in overzichten, niet in de sitemap en zijn noindex.

Draaien:  python3 tools/build_projecten.py
"""
import html
import importlib.util
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
DATA = DOCS / "data" / "projecten.json"

_spec = importlib.util.spec_from_file_location("page", ROOT / "tools" / "page.py")
page = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(page)

E = lambda t: html.escape(str(t or ""), quote=True)


def load():
    data = json.loads(DATA.read_text(encoding="utf-8"))
    projecten = data.get("projecten", [])
    for p in projecten:
        p.setdefault("status", "concept")
        p.setdefault("diensten", [])
        p.setdefault("afbeeldingen", [])
        p.setdefault("werkzaamheden", [])
        p.setdefault("resultaten", [])
        p.setdefault("volgorde", 999)
    projecten.sort(key=lambda p: (p.get("volgorde", 999), p.get("naam", "")))
    return projecten


def gepubliceerd(projecten):
    return [p for p in projecten if p.get("status") == "gepubliceerd"]


def opdrachtgever_label(p):
    """De naam van de opdrachtgever verschijnt alleen als publicatie is toegestaan."""
    if p.get("opdrachtgever_tonen") and p.get("opdrachtgever"):
        return E(p["opdrachtgever"])
    return ""


def kaart(p):
    afb = p["afbeeldingen"][0] if p["afbeeldingen"] else None
    if afb:
        beeld = (f'<div class="project-card-img"><img src="{E(afb["url"])}" '
                 f'alt="{E(afb.get("alt") or p["naam"])}" loading="lazy" decoding="async"></div>')
    else:
        beeld = ('<div class="project-card-img project-card-img-leeg" aria-hidden="true">'
                 '<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 '
                 '7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg></div>')
    meta = " &middot; ".join(x for x in [E(p.get("locatie")), opdrachtgever_label(p)] if x)
    return f"""<a href="/projecten/{E(p['slug'])}/" class="project-card">
      {beeld}
      <div class="project-card-body">
        <div class="project-card-meta">{meta}</div>
        <h3 class="project-card-title">{E(p['naam'])}</h3>
        <p class="project-card-desc">{E(p.get('samenvatting'))}</p>
        <span class="service-link">Bekijk project &rarr;</span>
      </div>
    </a>"""


def grid(projecten, leeg_tekst):
    if not projecten:
        return (f'<p class="project-leeg">{leeg_tekst}</p>')
    return "\n    ".join(kaart(p) for p in projecten)


# ── Overzichtspagina ───────────────────────────────────────────────────────
def overzicht(projecten):
    pubs = gepubliceerd(projecten)
    url = "/projecten/"
    itemlist = ",\n      ".join(
        '{"@type":"ListItem","position":%d,"url":"https://b-advice.info/projecten/%s/","name":%s}'
        % (i + 1, p["slug"], json.dumps(p["naam"], ensure_ascii=False))
        for i, p in enumerate(pubs)
    )
    head = ""
    if pubs:
        head += ('  <script type="application/ld+json">\n  {\n'
                 '    "@context": "https://schema.org",\n'
                 '    "@type": "ItemList",\n'
                 '    "name": "Projecten en referenties B-Advice",\n'
                 '    "itemListElement": [\n      %s\n    ]\n  }\n  </script>' % itemlist)

    body = f"""<section class="page-hero" id="inhoud">
    <h1 class="page-hero-title">Projecten en referenties</h1>
  <p class="page-hero-sub">Projecten waarin B-Advice gemeenten en afvalinzamelaars ondersteunde bij de voorbereiding, werkvoorbereiding en projectleiding van ondergrondse inzamelvoorzieningen.</p>
</section>

<section class="section">
  <div class="project-grid">
    {grid(pubs, "De eerste referentieprojecten worden op dit moment samengesteld. Wilt u nu al weten of wij ervaring hebben met een vergelijkbaar project? Neem gerust contact op.")}
  </div>
</section>

<div class="cta-band">
  <div>
    <div class="cta-band-title">Een vergelijkbaar project in voorbereiding?</div>
    <p class="cta-band-sub">Wij denken vrijblijvend mee over de aanpak.</p>
  </div>
  <a href="/contact/" class="btn-white">Bespreek uw project met B-Advice</a>
</div>"""
    return page.build(url, "Projecten en referenties ondergrondse containers | B-Advice",
                      "Referentieprojecten van B-Advice: locatieonderzoek, werkvoorbereiding "
                      "en projectleiding rondom ondergrondse afvalcontainers voor gemeenten.",
                      body, extra_head=head)


# ── Detailpagina ───────────────────────────────────────────────────────────
def detail(p):
    url = f"/projecten/{p['slug']}/"
    concept = p.get("status") != "gepubliceerd"

    rijen = []
    if p.get("opdrachtgever_tonen") and p.get("opdrachtgever"):
        rijen.append(("Opdrachtgever", E(p["opdrachtgever"])))
    if p.get("locatie"):
        rijen.append(("Locatie", E(p["locatie"])))
    if p.get("periode"):
        rijen.append(("Periode", E(p["periode"])))
    dienstnamen = {"projectleiding": "Projectleiding en projectbegeleiding",
                   "locatieonderzoek": "Locatieonderzoek en werkvoorbereiding"}
    dienstlinks = {"projectleiding": "/diensten/projectleiding/",
                   "locatieonderzoek": "/diensten/locatieonderzoek/"}
    if p["diensten"]:
        rijen.append(("Diensten", "<br>".join(
            f'<a href="{dienstlinks[d]}">{dienstnamen[d]}</a>' if d in dienstnamen else E(d)
            for d in p["diensten"])))
    feiten = "\n      ".join(
        f'<div class="project-feit"><div class="intro-card-label">{k}</div>'
        f'<div class="intro-card-value">{v}</div></div>' for k, v in rijen)

    def lijst(items):
        return "\n      ".join(f"<li>{E(i)}</li>" for i in items)

    blokken = ""
    if p["werkzaamheden"]:
        blokken += f"""
    <h2>Uitgevoerde werkzaamheden</h2>
    <ul>
      {lijst(p['werkzaamheden'])}
    </ul>"""
    if p["resultaten"]:
        blokken += f"""
    <h2>Resultaten</h2>
    <ul>
      {lijst(p['resultaten'])}
    </ul>"""

    if p["afbeeldingen"]:
        figs = "\n    ".join(
            f"""<figure class="beeld-item">
      <img src="{E(a['url'])}" alt="{E(a.get('alt') or p['naam'])}" loading="lazy" decoding="async">
      {f'<figcaption>{E(a["bijschrift"])}</figcaption>' if a.get("bijschrift") else ''}
    </figure>""" for a in p["afbeeldingen"])
        galerij = f"""<section class="section-sm" style="border-top:1px solid var(--border);">
  <div class="section-label">Beeldmateriaal</div>
  <h2 class="section-title" style="font-size:26px;">Foto's en tekeningen</h2>
  <div class="beeld-grid">
    {figs}
  </div>
</section>"""
    else:
        galerij = """<section class="section-sm" style="border-top:1px solid var(--border);">
  <div class="section-label">Beeldmateriaal</div>
  <h2 class="section-title" style="font-size:26px;">Foto's en tekeningen</h2>
  <div class="beeld-grid">
    <figure class="beeld-item beeld-placeholder">
      <div class="beeld-placeholder-box">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/></svg>
        <span>Nog geen beeldmateriaal</span>
      </div>
      <figcaption>Voeg foto's of inrichtingstekeningen toe via de beheeromgeving.</figcaption>
    </figure>
  </div>
</section>"""

    banner = ""
    if concept:
        banner = """<div class="concept-banner" role="status">
  <strong>Concept &mdash; nog niet gepubliceerd.</strong>
  Deze pagina is alleen via deze link zichtbaar, staat niet in het projectoverzicht of de sitemap
  en wordt niet door Google ge&iuml;ndexeerd. De teksten hieronder zijn een voorbeeldinvulling.
  Zet het project in de beheeromgeving op &lsquo;Gepubliceerd&rsquo; zodra de definitieve tekst en
  foto&rsquo;s klaarstaan.
</div>"""

    head = ""
    if not concept:
        head += f"""
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": {json.dumps(p['naam'], ensure_ascii=False)},
    "about": "Ondergrondse inzamelvoorzieningen",
    "url": "https://b-advice.info{url}",
    "description": {json.dumps(p.get('samenvatting', ''), ensure_ascii=False)},
    "creator": {{ "@id": "https://b-advice.info/#organisatie" }},
    "locationCreated": {{ "@type": "Place", "name": {json.dumps(p.get('locatie', ''), ensure_ascii=False)} }}
  }}
  </script>"""

    body = f"""{banner}
<section class="page-hero" id="inhoud">
    <h1 class="page-hero-title">{E(p['naam'])}</h1>
  <p class="page-hero-sub">{E(p.get('samenvatting'))}</p>
</section>

<div class="dienst-layout">
  <div class="dienst-body">{blokken}
  </div>
  <aside class="dienst-sidebar">
    <div class="sidebar-card">
      <div class="sidebar-card-title">Projectgegevens</div>
      <div class="project-feiten">
      {feiten}
      </div>
    </div>
    <div class="sidebar-card" style="background:var(--green);border-color:var(--green);">
      <div class="sidebar-card-title" style="color:#fff;">Vergelijkbaar project?</div>
      <p style="font-size:13px;color:rgba(255,255,255,.85);line-height:1.6;margin-bottom:16px;">Wij denken vrijblijvend mee over de aanpak van uw project.</p>
      <a href="/contact/" style="display:block;background:#fff;color:var(--green);text-align:center;padding:11px 16px;border-radius:7px;font-size:14px;font-weight:600;">Bespreek uw project</a>
    </div>
  </aside>
</div>

{galerij}

<div class="cta-band">
  <div>
    <div class="cta-band-title">Een vergelijkbaar project in voorbereiding?</div>
    <p class="cta-band-sub">Wij denken vrijblijvend mee over de aanpak.</p>
  </div>
  <a href="/contact/" class="btn-white">Bespreek uw project met B-Advice</a>
</div>"""

    titel = f"{p['naam']}"
    if p.get("locatie"):
        titel += f" in {p['locatie']}"
    titel += " | B-Advice"
    desc = p.get("samenvatting") or ""
    if len(desc) > 158:
        desc = desc[:158]
        desc = (desc[:desc.rfind(" ")] if " " in desc else desc).rstrip(" ,;:-") + "."
    return page.build(url, titel, E(desc), body, extra_head=head, noindex=concept)


# ── Projectblokken op bestaande pagina's vullen ────────────────────────────
def vul_blokken(projecten):
    pubs = gepubliceerd(projecten)

    def vervang(path, marker_attr, inhoud):
        f = DOCS / path
        if not f.exists():
            return False
        src = f.read_text(encoding="utf-8")
        pattern = re.compile(
            r'(<div class="project-grid"[^>]*' + marker_attr + r'[^>]*>).*?(</div>)',
            re.S)
        if not pattern.search(src):
            return False
        new = pattern.sub(lambda m: m.group(1) + "\n    " + inhoud + "\n  " + m.group(2), src, count=1)
        if new != src:
            f.write_text(new, encoding="utf-8")
        return True

    leeg_home = ("De eerste referentieprojecten worden op dit moment samengesteld. "
                 '<a href="/contact/">Neem contact op</a> als u wilt weten of wij ervaring '
                 "hebben met een vergelijkbaar project.")
    vervang("index.html", 'id="home-projecten"', grid(pubs[:3], leeg_home))

    for sleutel, pad in [("projectleiding", "diensten/projectleiding/index.html"),
                         ("locatieonderzoek", "diensten/locatieonderzoek/index.html")]:
        relevant = [p for p in pubs if sleutel in p["diensten"]][:3]
        leeg = ("De referentieprojecten voor deze dienst worden op dit moment samengesteld. "
                '<a href="/contact/">Neem contact op</a> voor voorbeelden uit vergelijkbare projecten.')
        vervang(pad, 'id="dienst-projecten"', grid(relevant, leeg))


def main():
    projecten = load()
    (DOCS / "projecten").mkdir(exist_ok=True)
    (DOCS / "projecten" / "index.html").write_text(overzicht(projecten), encoding="utf-8")
    print("geschreven: docs/projecten/index.html")
    for p in projecten:
        target = DOCS / "projecten" / p["slug"] / "index.html"
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(detail(p), encoding="utf-8")
        merk = "" if p["status"] == "gepubliceerd" else "  (concept, noindex)"
        print(f"geschreven: {target.relative_to(ROOT)}{merk}")
    vul_blokken(projecten)
    print("projectblokken op homepage en dienstenpagina's bijgewerkt")
    return projecten


if __name__ == "__main__":
    main()
