#!/usr/bin/env python3
"""
Genereert docs/sitemap.xml uit de bestanden in docs/.

Pagina's met `noindex` (concepten, 404, beheeromgeving) en de rmn-kortlinks
blijven eruit. De lastmod komt uit de laatste commit van het bestand; lukt dat
niet, dan wordt de datum uit de bestaande sitemap hergebruikt.

Draaien:  python3 tools/build_sitemap.py
"""
import datetime
import pathlib
import re
import subprocess

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
SITEMAP = DOCS / "sitemap.xml"
BASIS = "https://b-advice.info"
VANDAAG = datetime.date.today().isoformat()

# Volgorde en gewicht van de secties.
REGELS = [
    ("/",                    1.0, "weekly"),
    ("/diensten/",           0.9, "monthly"),
    ("/projecten/",          0.9, "monthly"),
    ("/diensten/projectleiding/",   0.9, "monthly"),
    ("/diensten/locatieonderzoek/", 0.9, "monthly"),
    ("/contact/",            0.8, "yearly"),
    ("/locatieaanvraag/",    0.8, "yearly"),
    ("/over-ons/",           0.7, "yearly"),
    ("/nieuws/",             0.7, "weekly"),
]
STANDAARD = {"/diensten/": (0.8, "monthly"), "/projecten/": (0.8, "monthly"),
             "/nieuws/": (0.6, "yearly")}
JURIDISCH = {"/privacy/", "/cookies/"}


def bestaande_datums():
    if not SITEMAP.exists():
        return {}
    tekst = SITEMAP.read_text(encoding="utf-8")
    return dict(re.findall(r"<loc>([^<]+)</loc>\s*<lastmod>([^<]+)</lastmod>", tekst))


def git_datum(pad):
    """Datum van de laatste commit; vandaag als het bestand nog niet is vastgelegd."""
    try:
        status = subprocess.run(["git", "status", "--porcelain", "--", str(pad)],
                                cwd=ROOT, capture_output=True, text=True, timeout=20)
        if status.stdout.strip():
            return VANDAAG
        uit = subprocess.run(["git", "log", "-1", "--format=%cs", "--", str(pad)],
                             cwd=ROOT, capture_output=True, text=True, timeout=20)
        return uit.stdout.strip() or None
    except Exception:
        return None


def verzamel():
    oud = bestaande_datums()
    urls = []
    for pad in sorted(DOCS.rglob("index.html")):
        rel = pad.relative_to(DOCS).parent.as_posix()
        url = "/" if rel == "." else f"/{rel}/"
        if url.startswith("/rmn-") or url.startswith("/admin/"):
            continue
        src = pad.read_text(encoding="utf-8")
        if re.search(r'<meta name="robots" content="[^"]*noindex', src):
            continue

        prio, freq = 0.7, "monthly"
        for p, pr, fr in REGELS:
            if url == p:
                prio, freq = pr, fr
                break
        else:
            for prefix, (pr, fr) in STANDAARD.items():
                if url.startswith(prefix):
                    prio, freq = pr, fr
                    break
            if url in JURIDISCH:
                prio, freq = 0.3, "yearly"

        loc = BASIS + url
        lastmod = git_datum(pad.relative_to(ROOT)) or oud.get(loc) or VANDAAG
        urls.append((loc, lastmod, freq, prio))

    volgorde = {p: i for i, (p, _, _) in enumerate(REGELS)}
    urls.sort(key=lambda u: (volgorde.get(u[0][len(BASIS):], 99), -u[3], u[0]))
    return urls


def main():
    urls = verzamel()
    regels = "\n".join(
        f"  <url>\n"
        f"    <loc>{loc}</loc>\n"
        f"    <lastmod>{lastmod}</lastmod>\n"
        f"    <changefreq>{freq}</changefreq>\n"
        f"    <priority>{prio:.1f}</priority>\n"
        f"  </url>"
        for loc, lastmod, freq, prio in urls)
    SITEMAP.write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        f"{regels}\n</urlset>\n", encoding="utf-8")
    print(f"docs/sitemap.xml bijgewerkt: {len(urls)} URL's")


if __name__ == "__main__":
    main()
