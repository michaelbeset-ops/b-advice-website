#!/usr/bin/env python3
"""
Minificeert CSS en haalt het gedeelde inline-script uit de pagina's.

Wat het doet:
  1. docs/style.css        -> docs/style.min.css   (en past de <link> aan)
  2. docs/fonts/fonts.css  -> docs/fonts/fonts.min.css
  3. het inline <script> dat op elke pagina staat -> docs/site.js
     (één keer downloaden en cachen in plaats van ~4 KB per pagina)

De bronbestanden blijven leesbaar; dit script draai je opnieuw na elke
aanpassing aan style.css of aan het gedeelde script.

Draaien:  python3 tools/minify.py
"""
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"


def minify_css(bron: str) -> str:
    """Conservatieve CSS-minifier die strings, url() en escapes met rust laat."""
    uit = []
    i, n = 0, len(bron)
    while i < n:
        c = bron[i]
        # Commentaar overslaan
        if c == "/" and bron.startswith("/*", i):
            eind = bron.find("*/", i + 2)
            i = n if eind == -1 else eind + 2
            continue
        # Strings letterlijk overnemen
        if c in "\"'":
            j = i + 1
            while j < n:
                if bron[j] == "\\":
                    j += 2
                    continue
                if bron[j] == c:
                    break
                j += 1
            uit.append(bron[i:j + 1])
            i = j + 1
            continue
        # Witruimte samenvouwen tot één spatie
        if c in " \t\r\n\f":
            while i < n and bron[i] in " \t\r\n\f":
                i += 1
            if uit and uit[-1] != " ":
                uit.append(" ")
            continue
        uit.append(c)
        i += 1

    css = "".join(uit)
    # Spaties rond scheidingstekens weghalen (buiten strings, die zijn al veilig).
    css = re.sub(r"\s*([{}:;,>~])\s*", r"\1", css)
    # '+' alleen binnen selectors opruimen, niet in calc() of nth-child.
    css = re.sub(r"\s*\+\s*(?=[.#\[a-zA-Z*])(?![^{}]*\))", "+", css)
    css = css.replace(";}", "}")
    return css.strip()


def main():
    # ── 1. CSS ────────────────────────────────────────────────────────────
    style = DOCS / "style.css"
    bron = style.read_text(encoding="utf-8")
    # De @import is overbodig: elke pagina laadt fonts.css al via een <link>,
    # en een @import maakt het laden onnodig serieel.
    bron_zonder_import = re.sub(r"@import url\('/fonts/fonts\.css'\);\s*", "", bron)
    if bron_zonder_import != bron:
        style.write_text(bron_zonder_import, encoding="utf-8")
        bron = bron_zonder_import
        print("style.css: overbodige @import van fonts.css verwijderd")

    klein = minify_css(bron)
    (DOCS / "style.min.css").write_text(klein, encoding="utf-8")
    print(f"style.min.css: {len(bron)/1024:.0f} KB -> {len(klein)/1024:.0f} KB")

    fonts = DOCS / "fonts" / "fonts.css"
    fklein = minify_css(fonts.read_text(encoding="utf-8"))
    (DOCS / "fonts" / "fonts.min.css").write_text(fklein, encoding="utf-8")
    print(f"fonts.min.css: {fonts.stat().st_size/1024:.0f} KB -> {len(fklein)/1024:.0f} KB")

    # ── 2. Gedeeld script naar één bestand ────────────────────────────────
    voorbeeld = (DOCS / "index.html").read_text(encoding="utf-8")
    m = re.search(r"<script>\n\(function\(\)\{\n  var nav=.*?\n\}\)\(\);\n</script>",
                  voorbeeld, re.S)
    blok = None
    if m:
        # Eerste keer: het inline-script verhuist naar docs/site.js.
        blok = m.group(0)
        script = blok[len("<script>"):-len("</script>")].strip()
        (DOCS / "site.js").write_text(
            "/* Gedeeld script: navigatie, mobiel menu en cookiemelding. */\n"
            + script + "\n", encoding="utf-8")
        print(f"site.js aangemaakt: {len(script)/1024:.1f} KB (voorheen op elke pagina inline)")
    else:
        # Daarna is docs/site.js zelf het bronbestand en valt er niets te verhuizen.
        print("site.js bestaat al en is het bronbestand — ongewijzigd gelaten")

    # ── 3. Pagina's aanpassen ─────────────────────────────────────────────
    aangepast = 0
    for f in sorted(DOCS.rglob("*.html")):
        s = origineel = f.read_text(encoding="utf-8")
        s = s.replace('<link rel="stylesheet" href="/style.css">',
                      '<link rel="stylesheet" href="/style.min.css">')
        s = s.replace('<link rel="stylesheet" href="/fonts/fonts.css">',
                      '<link rel="stylesheet" href="/fonts/fonts.min.css">')
        if blok and blok in s:
            s = s.replace(blok, '<script src="/site.js" defer></script>')
        if s != origineel:
            f.write_text(s, encoding="utf-8")
            aangepast += 1
    print(f"{aangepast} pagina's verwijzen nu naar de geminificeerde bestanden")


if __name__ == "__main__":
    main()
