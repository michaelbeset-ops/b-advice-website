#!/usr/bin/env python3
"""Controleert of alle interne links en assets in docs/ bestaan."""
import pathlib, re, sys
ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
HREF = re.compile(r'(?:href|src)="(/[^"#?]*)(?:[#?][^"]*)?"')
fouten, gecheckt = [], 0
for f in sorted(DOCS.rglob("*.html")):
    if f.relative_to(DOCS).parts[:1] == ("preview",):
        continue
    for m in HREF.finditer(f.read_text(encoding="utf-8")):
        url = m.group(1)
        gecheckt += 1
        doel = DOCS / url.lstrip("/")
        ok = doel.is_file() or (doel / "index.html").is_file() or (url.endswith("/") and (doel / "index.html").is_file())
        if not ok:
            fouten.append(f"{f.relative_to(DOCS)}  ->  {url}")
print(f"{gecheckt} interne verwijzingen gecontroleerd")
if fouten:
    print(f"\n{len(fouten)} KAPOT:")
    for x in sorted(set(fouten)): print("  ", x)
    sys.exit(1)
print("alle interne links en assets bestaan")
