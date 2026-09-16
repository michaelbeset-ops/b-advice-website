#!/usr/bin/env python3
"""Controleert per pagina: unieke title en description, precies één H1, en lengtes."""
import pathlib, re, collections, sys
DOCS = pathlib.Path(__file__).resolve().parent.parent / "docs"
titels, descs, meldingen = collections.defaultdict(list), collections.defaultdict(list), []
rijen = []
for f in sorted(DOCS.rglob("index.html")):
    url = "/" + f.relative_to(DOCS).parent.as_posix().replace(".", "").strip("/")
    url = (url + "/").replace("//", "/")
    s = f.read_text(encoding="utf-8")
    if url.startswith("/rmn-") or url.startswith("/admin/"):
        continue
    if re.search(r'<meta name="robots" content="[^"]*noindex', s):
        continue
    t = re.search(r"<title>(.*?)</title>", s, re.S)
    d = re.search(r'<meta name="description" content="(.*?)"', s, re.S)
    h1 = re.findall(r"<h1\b", s)
    t, d = (t.group(1).strip() if t else ""), (d.group(1).strip() if d else "")
    titels[t].append(url); descs[d].append(url)
    if len(h1) != 1:
        meldingen.append(f"{url}: {len(h1)} H1-koppen (moet er 1 zijn)")
    if not t: meldingen.append(f"{url}: geen title")
    if not d: meldingen.append(f"{url}: geen meta description")
    rijen.append((url, len(t), len(d), t))

for t, urls in titels.items():
    if len(urls) > 1: meldingen.append(f"dubbele title {t!r}: {', '.join(urls)}")
for d, urls in descs.items():
    if len(urls) > 1: meldingen.append(f"dubbele description: {', '.join(urls)}")

print(f"{'URL':48} {'title':>6} {'desc':>5}")
for url, lt, ld, t in rijen:
    vlag = ""
    if lt > 62: vlag += "  title lang"
    if ld > 160: vlag += "  description lang"
    if ld and ld < 70: vlag += "  description kort"
    print(f"{url:48} {lt:6} {ld:5}{vlag}")
if meldingen:
    print("\nAandachtspunten:")
    for m in meldingen: print("  -", m)
    sys.exit(1)
print("\nAlle titles en descriptions zijn uniek; elke pagina heeft precies één H1.")
