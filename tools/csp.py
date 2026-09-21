#!/usr/bin/env python3
"""
Zet in elke pagina onder docs/ een Content-Security-Policy als <meta>-tag.

GitHub Pages stuurt geen eigen HTTP-headers mee, dus de meta-variant is hier
de enige mogelijkheid. Eén beperking hoort daarbij: frame-ancestors werkt
alleen als echte header en wordt in een meta-tag genegeerd. Bescherming tegen
clickjacking zit er dus niet in; dat lukt pas met een proxy als Cloudflare.

De inline scripts krijgen een hash in plaats van 'unsafe-inline'. Een script
dat een aanvaller in de pagina zou weten te krijgen, wordt daarmee alsnog
geweigerd. Voor stijl is dat niet haalbaar: de pagina's gebruiken honderden
style-attributen, en daar bestaat geen werkbare hash-variant voor.

Draai dit na elke wijziging aan de pagina's onder docs/:  python3 tools/csp.py
"""
import base64
import hashlib
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

MERK = '<meta http-equiv="Content-Security-Policy"'

# Inline <script>-blokken zonder src. JSON-LD hoort er ook bij: een CSP kijkt
# naar het element, niet naar wat erin staat.
SCRIPTS = re.compile(r'<script(?![^>]*\ssrc=)[^>]*>(.*?)</script>', re.S)
HANDLERS = re.compile(r'\son(?:click|error|load|change|submit)="([^"]*)"')


def hash_van(inhoud: str) -> str:
    digest = hashlib.sha256(inhoud.encode("utf-8")).digest()
    return "'sha256-" + base64.b64encode(digest).decode("ascii") + "'"


def beleid(html: str, pad: str) -> str:
    scripts = dict.fromkeys(hash_van(m.group(1)) for m in SCRIPTS.finditer(html) if m.group(1))
    handlers = dict.fromkeys(hash_van(m.group(1)) for m in HANDLERS.finditer(html))

    script_src = ["'self'", *scripts]
    # Een onclick of onerror in de tag zelf draait niet op een gewone hash; dat
    # vraagt om 'unsafe-hashes' plus de hash van precies die ene regel code.
    if handlers:
        script_src.append("'unsafe-hashes'")
        script_src.extend(handlers)

    connect_src = ["'self'", "https://api.web3forms.com"]
    frame_src = ["https://www.youtube.com", "https://www.youtube-nocookie.com"]
    img_src = ["'self'", "data:", "https://img.youtube.com"]

    # De beheeromgeving haalt de Supabase-bibliotheek van een CDN en praat met
    # het Supabase-project zelf. Alleen die pagina krijgt die uitzondering.
    if pad.startswith("admin/"):
        script_src.append("https://cdn.jsdelivr.net")
        connect_src.extend(["https://*.supabase.co", "https://cdn.jsdelivr.net"])
        img_src.append("https://*.supabase.co")

    return "; ".join([
        "default-src 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "script-src " + " ".join(script_src),
        "style-src 'self' 'unsafe-inline'",
        "img-src " + " ".join(img_src),
        "font-src 'self'",
        "connect-src " + " ".join(connect_src),
        "form-action 'self' https://api.web3forms.com",
        "frame-src " + " ".join(frame_src),
        "upgrade-insecure-requests",
    ])


def main() -> None:
    aangepast = overgeslagen = vervangen = 0
    for bestand in sorted(DOCS.rglob("*.html")):
        html = bestand.read_text(encoding="utf-8")
        pad = str(bestand.relative_to(DOCS))

        if 'http-equiv="refresh"' in html:
            overgeslagen += 1
            continue

        # Een eerdere CSP eerst weghalen, zodat opnieuw draaien de hashes
        # bijwerkt in plaats van een tweede regel toe te voegen.
        nieuw = re.sub(r'\n?[ \t]*' + re.escape(MERK) + r'[^>]*>', "", html)
        if nieuw != html:
            vervangen += 1
        html = nieuw

        tag = f'  {MERK} content="{beleid(html, pad)}">'
        plek = html.find("<head>")
        if plek == -1:
            print(f"geen <head>, overgeslagen: {pad}")
            overgeslagen += 1
            continue

        html = html[: plek + 6] + "\n" + tag + html[plek + 6 :]
        bestand.write_text(html, encoding="utf-8")
        aangepast += 1

    print(f"CSP gezet in {aangepast} pagina's "
          f"({vervangen} bijgewerkt, {overgeslagen} overgeslagen).")


if __name__ == "__main__":
    main()
