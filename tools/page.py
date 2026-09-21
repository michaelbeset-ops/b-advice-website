#!/usr/bin/env python3
"""
Bouwt complete pagina's met dezelfde head/nav/footer/scripts als de rest van de site.

De site heeft geen buildstap; nav en footer staan in elke pagina gedupliceerd.
Dit hulpbestand haalt die gedeelde blokken uit een bestaande pagina, zodat nieuwe
pagina's nooit uit de pas lopen. Na een wijziging in de navigatie draai je eerst
`tools/update_nav.py` en daarna de generators die dit bestand gebruiken.
"""
import html
import pathlib
import re
import importlib.util

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
REFERENCE = DOCS / "diensten" / "projectmanagement" / "index.html"

_spec = importlib.util.spec_from_file_location("update_nav", ROOT / "tools" / "update_nav.py")
nav_mod = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(nav_mod)

_ref = REFERENCE.read_text(encoding="utf-8")

# Alles vanaf <footer> tot en met </html>: footer, scripts en sluitende tags.
FOOTER_AND_SCRIPTS = _ref[_ref.index("<footer>"):]

HEAD_ASSETS = """  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/fonts/fonts.min.css">
  <link rel="icon" href="/favicon.ico" sizes="32x32">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png">
  <link rel="stylesheet" href="/style.min.css">"""


def breadcrumbs(trail):
    """trail: lijst van (naam, url) vanaf Home."""
    items = ",\n    ".join(
        '{"@type":"ListItem","position":%d,"name":"%s","item":"https://b-advice.info%s"}'
        % (n + 1, name, url)
        for n, (name, url) in enumerate(trail)
    )
    return ('  <script type="application/ld+json">\n  {\n'
            '    "@context": "https://schema.org",\n'
            '    "@type": "BreadcrumbList",\n'
            '    "itemListElement": [\n    %s\n    ]\n  }\n  </script>' % items)


def kruimels(trail):
    """Zichtbaar kruimelpad bij dezelfde trail als breadcrumbs(). De laatste
    stap is de huidige pagina en wordt geen link."""
    regels = []
    for n, (name, url) in enumerate(trail):
        naam = html.escape(str(name), quote=True)
        if n == len(trail) - 1:
            regels.append(f'    <li><span aria-current="page">{naam}</span></li>')
        else:
            regels.append(f'    <li><a href="{html.escape(str(url), quote=True)}">{naam}</a></li>')
    return ('<nav class="kruimels" aria-label="Kruimelpad">\n  <ol>\n'
            + "\n".join(regels) + "\n  </ol>\n</nav>\n")


def build(url, title, description, body, extra_head="", noindex=False):
    """Bouwt een volledige pagina. `url` is het pad met slashes, bv. /projecten/."""
    robots = '\n  <meta name="robots" content="noindex, nofollow">' if noindex else ""
    # Titel, omschrijving en pad komen deels uit de beheeromgeving. Ze gaan hier
    # door html.escape, zodat een aanhalingsteken of < in een projectnaam de
    # meta-tags niet kan openbreken. Aanroepers leveren dus ruwe tekst aan.
    title = html.escape(str(title or ""), quote=True)
    description = html.escape(str(description or ""), quote=True)
    url = html.escape(str(url or ""), quote=True)
    head = f"""<!DOCTYPE html>
<html lang="nl">
<head>
{HEAD_ASSETS}
  <title>{title}</title>
  <meta name="description" content="{description}">
  <link rel="canonical" href="https://b-advice.info{url}">{robots}
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="B-Advice">
  <meta property="og:locale" content="nl_NL">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:url" content="https://b-advice.info{url}">
  <meta property="og:image" content="https://b-advice.info/assets/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{title}">
  <meta name="twitter:description" content="{description}">
  <meta name="twitter:image" content="https://b-advice.info/assets/og-image.png">
  <link rel="apple-touch-icon" href="/assets/favicon.png">
{extra_head}
</head>
<body>
<a href="#inhoud" class="skip-link">Naar de inhoud</a>

<nav class="nav" id="sitenav">
  <a class="nav-logo" href="/" style="display:flex;align-items:center;">
    <img src="/assets/b-advice-logo.png" alt="B-Advice" style="height:40px;display:block;" />
  </a>
  {nav_mod.nav_center(url)}
  <div class="nav-right">
    <a href="/contact/" class="nav-contact">Contact</a>
    <a href="https://b-organized.info" target="_blank" rel="noopener" class="nav-cta">Login B-Organized</a>
  </div>
  <button class="nav-hamburger" id="navHamburger" aria-label="Menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="nav-mobile-overlay" id="navMobileOverlay">
  {nav_mod.nav_mobile(url)}
  <a href="https://b-organized.info" target="_blank" rel="noopener" class="nav-mobile-cta" style="display:block;text-align:center;text-decoration:none;">Login B-Organized</a>
</div>

{body}

{FOOTER_AND_SCRIPTS}"""
    return head


def write(url, html):
    target = DOCS / url.strip("/") / "index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(html, encoding="utf-8")
    return target
