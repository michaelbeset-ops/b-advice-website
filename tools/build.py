#!/usr/bin/env python3
"""
Bouwt de hele site opnieuw op, in de juiste volgorde.

    python3 tools/build.py

Volgorde is belangrijk: eerst de navigatie (die staat in elke pagina), dan de
gegenereerde pagina's, dan de kruimelpaden, de sitemap en tot slot de
minificatie. Sluit af met de controles op links en SEO.
"""
import pathlib
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
STAPPEN = [
    ("Navigatie bijwerken", "update_nav.py"),
    ("Dienstenpagina's genereren", "build_diensten.py"),
    ("Projectpagina's genereren", "build_projecten.py"),
    ("Kruimelpaden bijwerken", "build_kruimels.py"),
    ("Sitemap genereren", "build_sitemap.py"),
    ("CSS minificeren", "minify.py"),
    ("Links controleren", "check_links.py"),
    ("SEO controleren", "check_seo.py"),
]


def main():
    mislukt = []
    for titel, script in STAPPEN:
        print(f"\n\033[1m── {titel} ──\033[0m")
        uit = subprocess.run([sys.executable, str(ROOT / "tools" / script)], cwd=ROOT)
        if uit.returncode:
            mislukt.append(titel)
    if mislukt:
        print("\nMislukt: " + ", ".join(mislukt))
        sys.exit(1)
    print("\nKlaar — alle stappen geslaagd.")


if __name__ == "__main__":
    main()
