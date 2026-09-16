#!/usr/bin/env python3
"""
Werkt de gedeelde navigatie- en footerblokken bij op alle pagina's in docs/.

De site is statisch en heeft geen buildstap: nav en footer staan in elke pagina
gedupliceerd. Dit script is de enige plek waar die blokken worden gedefinieerd.
Pas hier aan en draai `python3 tools/update_nav.py` opnieuw.
"""
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

# Alle dienstenpagina's, in de volgorde waarin ze in menu's en footer staan.
DIENSTEN = [
    ("/diensten/projectleiding/", "Projectleiding en projectbegeleiding"),
    ("/diensten/locatieonderzoek/", "Locatieonderzoek en werkvoorbereiding"),
    ("/diensten/plaatsing/", "Plaatsen van inzamelmiddelen"),
    ("/diensten/beheer-onderhoud/", "Beheer, onderhoud &amp; refurbish"),
    ("/diensten/afvalinzameling/", "Afvalinzameling &amp; Management"),
    ("/diensten/projectmanagement/", "Projectmanagement"),
    ("/diensten/aanbesteding/", "Aanbesteding &amp; bestek"),
    ("/diensten/meerjaren-investeringsplan/", "Meerjaren Investeringsplan"),
    ("/diensten/bewonersparticipatie/", "Bewonersparticipatie"),
]

# Hoofdmenu naast Diensten.
HOOFDMENU = [
    ("/projecten/", "Projecten"),
    ("/b-organized/", "B-Organized"),
    ("/b-covered/", "B-Covered"),
    ("/producten/", "Producten"),
    ("/nieuws/", "Nieuws"),
    ("/locatieaanvraag/", "Locatieaanvraag"),
    ("/over-ons/", "Over ons"),
]

CHEVRON = ('<svg class="nav-drop-chevron" viewBox="0 0 10 6" aria-hidden="true">'
           '<path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" '
           'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>')


def url_for(path: pathlib.Path) -> str:
    """Leidt de publieke URL af uit het bestandspad."""
    rel = path.relative_to(DOCS).parent.as_posix()
    return "/" if rel == "." else f"/{rel}/"


def cls(name: str, active: bool) -> str:
    return ' class="%s"' % name if active else ""


def nav_center(url: str) -> str:
    diensten_open = url.startswith("/diensten/")
    trigger_cls = "nav-drop-trigger active" if diensten_open else "nav-drop-trigger"
    items = "".join(
        '\n        <a href="%s"%s>%s</a>' % (href, cls("current", url == href), label)
        for href, label in DIENSTEN
    )
    rest = "".join(
        '\n    <a href="%s"%s>%s</a>' % (href, cls("active", url == href), label)
        for href, label in HOOFDMENU
    )
    return (
        '<div class="nav-center">\n'
        '    <div class="nav-drop">\n'
        f'      <a href="/diensten/" class="{trigger_cls}" aria-haspopup="true">Diensten{CHEVRON}</a>\n'
        '      <div class="nav-drop-menu">'
        f'{items}\n'
        '        <a href="/diensten/" class="nav-drop-all">Alle diensten &rarr;</a>\n'
        '      </div>\n'
        '    </div>'
        f'{rest}\n'
        '  </div>'
    )


def nav_mobile(url: str) -> str:
    sub = "".join(
        '\n      <a href="%s" class="nav-mobile-sub%s">%s</a>'
        % (href, " active" if url == href else "", label)
        for href, label in DIENSTEN
    )
    rest = "".join(
        '\n    <a href="%s"%s>%s</a>' % (href, cls("active", url == href), label)
        for href, label in HOOFDMENU
    )
    diensten_cls = cls("active", url == "/diensten/")
    return (
        '<div class="nav-mobile-links">\n'
        f'    <a href="/diensten/"{diensten_cls}>Diensten</a>\n'
        '    <div class="nav-mobile-subgroup">'
        f'{sub}\n'
        '    </div>'
        f'{rest}\n'
        '    <a href="/contact/" class="nav-mobile-contact" '
        'style="font-size:15px;color:var(--ink-4);font-weight:400;">Contact</a>\n'
        '  </div>'
    )


def footer_diensten() -> str:
    links = "".join(
        f'\n        <a href="{href}">{label}</a>' for href, label in DIENSTEN
    )
    return (
        '<div class="footer-col-links">'
        f'{links}\n'
        '      </div>'
    )


def footer_bedrijf() -> str:
    return (
        '<div class="footer-col-links">\n'
        '        <a href="/projecten/">Projecten &amp; referenties</a>\n'
        '        <a href="/over-ons/">Over ons</a>\n'
        '        <a href="/nieuws/">Nieuws</a>\n'
        '        <a href="/contact/">Contact</a>\n'
        '        <a href="/b-organized/">B-Organized</a>\n'
        '        <a href="/privacy/">Privacy &amp; Cookies</a>\n'
        '      </div>'
    )


NAV_CENTER_RE = re.compile(r'<div class="nav-center">.*?\n  </div>', re.S)
NAV_MOBILE_RE = re.compile(r'<div class="nav-mobile-links">.*?\n  </div>', re.S)
FOOTER_COL_RE = re.compile(
    r'(<div class="footer-col-title">(Diensten|Bedrijf)</div>\s*\n\s*)'
    r'<div class="footer-col-links">.*?\n      </div>', re.S)


def patch(path: pathlib.Path) -> bool:
    src = original = path.read_text(encoding="utf-8")
    url = url_for(path)

    if '<div class="nav-center">' in src:
        src = NAV_CENTER_RE.sub(lambda m: nav_center(url), src, count=1)
    if '<div class="nav-mobile-links">' in src:
        src = NAV_MOBILE_RE.sub(lambda m: nav_mobile(url), src, count=1)

    def footer_sub(m):
        return m.group(1) + (footer_diensten() if m.group(2) == "Diensten" else footer_bedrijf())

    src = FOOTER_COL_RE.sub(footer_sub, src)

    if src != original:
        path.write_text(src, encoding="utf-8")
        return True
    return False


def main():
    changed = 0
    for path in sorted(DOCS.rglob("index.html")):
        if patch(path):
            changed += 1
            print("bijgewerkt:", path.relative_to(ROOT))
    print(f"\n{changed} pagina's bijgewerkt.")


if __name__ == "__main__":
    main()
