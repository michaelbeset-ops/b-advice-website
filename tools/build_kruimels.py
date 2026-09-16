#!/usr/bin/env python3
"""
Zet een zichtbaar kruimelpad op alle onderliggende pagina's en zorgt dat het
bijbehorende BreadcrumbList-blok voor Google klopt.

Het kruimelpad wordt afgeleid uit het pad van het bestand en de H1 van de
pagina, zodat zichtbare navigatie en gestructureerde data nooit uit elkaar
lopen.

Draaien:  python3 tools/build_kruimels.py
"""
import html
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
BASIS = "https://b-advice.info"

# Vaste namen voor de tussenniveaus en voor pagina's waarvan de H1 te lang is.
SECTIES = {"diensten": "Diensten", "projecten": "Projecten", "nieuws": "Nieuws"}
NAMEN = {
    "/contact/": "Contact",
    "/over-ons/": "Over ons",
    "/locatieaanvraag/": "Locatieaanvraag",
    "/producten/": "Producten",
    "/b-organized/": "B-Organized",
    "/b-covered/": "B-Covered",
    "/privacy/": "Privacy",
    "/cookies/": "Cookies",
    "/diensten/": "Diensten",
    "/projecten/": "Projecten",
    "/nieuws/": "Nieuws",
    "/diensten/projectleiding/": "Projectleiding",
    "/diensten/locatieonderzoek/": "Locatieonderzoek en werkvoorbereiding",
    "/diensten/afvalinzameling/": "Afvalinzameling & Management",
    "/diensten/plaatsing/": "Plaatsen van inzamelmiddelen",
    "/diensten/projectmanagement/": "Projectmanagement",
    "/diensten/meerjaren-investeringsplan/": "Meerjaren Investeringsplan",
    "/diensten/beheer-onderhoud/": "Beheer, onderhoud & refurbish",
    "/diensten/aanbesteding/": "Aanbesteding & bestek",
    "/diensten/bewonersparticipatie/": "Bewonersparticipatie",
}

KRUIMEL_RE = re.compile(r'<nav class="kruimels".*?</nav>\n', re.S)
SCHEMA_RE = re.compile(
    r'  <script type="application/ld\+json">\s*\{\s*"@context": "https://schema\.org",\s*'
    r'"@type": "BreadcrumbList".*?</script>\n?', re.S)


def naam_van(url, src):
    if url in NAMEN:
        return NAMEN[url]
    m = re.search(r"<h1[^>]*>(.*?)</h1>", src, re.S)
    if m:
        tekst = re.sub(r"<[^>]+>", "", m.group(1))
        return html.unescape(" ".join(tekst.split()))
    return url.strip("/").split("/")[-1].replace("-", " ").capitalize()


def spoor(url, src):
    delen = [d for d in url.strip("/").split("/") if d]
    pad = [("Home", "/")]
    for i, deel in enumerate(delen[:-1]):
        tussen = "/" + "/".join(delen[: i + 1]) + "/"
        pad.append((SECTIES.get(deel, NAMEN.get(tussen, deel.capitalize())), tussen))
    pad.append((naam_van(url, src), url))
    return pad


def kruimel_html(pad):
    items = []
    for i, (naam, link) in enumerate(pad):
        laatste = i == len(pad) - 1
        e = html.escape(naam)
        items.append(f'<li><span aria-current="page">{e}</span></li>' if laatste
                     else f'<li><a href="{link}">{e}</a></li>')
    return ('<nav class="kruimels" aria-label="Kruimelpad">\n  <ol>\n    '
            + "\n    ".join(items) + "\n  </ol>\n</nav>\n")


def schema_html(pad):
    items = ",\n    ".join(
        '{"@type":"ListItem","position":%d,"name":%s,"item":"%s%s"}'
        % (i + 1, json.dumps(naam, ensure_ascii=False), BASIS, link)
        for i, (naam, link) in enumerate(pad))
    return ('  <script type="application/ld+json">\n  {\n'
            '    "@context": "https://schema.org",\n'
            '    "@type": "BreadcrumbList",\n'
            '    "itemListElement": [\n    %s\n    ]\n  }\n  </script>\n' % items)


def main():
    aantal = 0
    for f in sorted(DOCS.rglob("index.html")):
        rel = f.relative_to(DOCS).parent.as_posix()
        url = "/" if rel == "." else f"/{rel}/"
        if url == "/" or url.startswith("/rmn-") or url.startswith("/admin/"):
            continue
        src = origineel = f.read_text(encoding="utf-8")
        pad = spoor(url, src)

        src = KRUIMEL_RE.sub("", src)
        anker = ('<section class="page-hero"' if '<section class="page-hero"' in src
                 else '<div class="article-hero"' if '<div class="article-hero"' in src
                 else '<div class="coming-soon-wrap"' if '<div class="coming-soon-wrap"' in src
                 else None)
        if not anker:
            print("geen invoegpunt gevonden:", url)
            continue
        # Bij de sobere "binnenkort"-pagina's past een kruimelpad niet.
        if anker != '<div class="coming-soon-wrap"':
            src = src.replace(anker, kruimel_html(pad) + anker, 1)

        src = SCHEMA_RE.sub("", src)
        src = src.replace("</head>", schema_html(pad) + "</head>", 1)

        if src != origineel:
            f.write_text(src, encoding="utf-8")
            aantal += 1
    print(f"kruimelpad en BreadcrumbList bijgewerkt op {aantal} pagina's")


if __name__ == "__main__":
    main()
