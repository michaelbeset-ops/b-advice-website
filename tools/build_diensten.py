#!/usr/bin/env python3
"""Genereert de twee nieuwe dienstenpagina's (projectleiding, locatieonderzoek)."""
import importlib.util
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
_spec = importlib.util.spec_from_file_location("page", ROOT / "tools" / "page.py")
page = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(page)

DIENSTEN = page.nav_mod.DIENSTEN


def sidebar(current_url, cta_title, cta_text, cta_button):
    links = "\n        ".join(
        '<a href="%s"%s>%s</a>' % (href, ' class="current"' if href == current_url else "", label)
        for href, label in DIENSTEN
    )
    return f"""  <aside class="dienst-sidebar">
    <div class="sidebar-card">
      <div class="sidebar-card-title">Alle diensten</div>
      <nav class="dienst-nav">
        {links}
      </nav>
    </div>
    <div class="sidebar-card" style="background:var(--green);border-color:var(--green);">
      <div class="sidebar-card-title" style="color:#fff;">{cta_title}</div>
      <p style="font-size:13px;color:rgba(255,255,255,.85);line-height:1.6;margin-bottom:16px;">{cta_text}</p>
      <a href="/contact/" style="display:block;background:#fff;color:var(--green);text-align:center;padding:11px 16px;border-radius:7px;font-size:14px;font-weight:600;">{cta_button}</a>
    </div>
  </aside>"""


def faq_schema(pairs):
    items = ",\n      ".join(
        '{"@type":"Question","name":%s,"acceptedAnswer":{"@type":"Answer","text":%s}}'
        % (_json(q), _json(a)) for q, a in pairs
    )
    return ('  <script type="application/ld+json">\n  {\n'
            '    "@context": "https://schema.org",\n'
            '    "@type": "FAQPage",\n'
            '    "mainEntity": [\n      %s\n    ]\n  }\n  </script>' % items)


def _json(text):
    import json
    return json.dumps(text, ensure_ascii=False)


def faq_html(pairs):
    """Accordeon op <details>/<summary>: toegankelijk en werkt zonder JavaScript."""
    items = "\n".join(
        f"""    <details class="faq-details">
      <summary>{q}</summary>
      <div class="faq-details-a"><p>{a}</p></div>
    </details>""" for q, a in pairs
    )
    return f"""<section class="faq">
  <h2 class="faq-title">Veelgestelde vragen</h2>
  <div class="faq-list">
{items}
  </div>
</section>"""


def service_schema(url, name, description, service_type):
    return f"""  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://b-advice.info{url}#dienst",
    "name": "{name}",
    "serviceType": "{service_type}",
    "description": "{description}",
    "url": "https://b-advice.info{url}",
    "provider": {{ "@id": "https://b-advice.info/#organisatie" }},
    "areaServed": {{ "@type": "Country", "name": "Nederland" }},
    "audience": {{ "@type": "Audience", "audienceType": "Gemeenten en afvalinzamelaars" }}
  }}
  </script>"""


REFERENTIES = """<section class="section-sm" style="border-top:1px solid var(--border);background:var(--bg-2);">
  <div class="section-label">Referenties</div>
  <h2 class="section-title" style="font-size:28px;">Relevante referentieprojecten</h2>
  <p class="section-sub">Projecten waarin B-Advice deze werkzaamheden uitvoerde.</p>
  <div class="project-grid" id="dienst-projecten" data-dienst="{sleutel}"><!-- gevuld door tools/build_projecten.py --></div>
  <p style="margin-top:28px;"><a href="/projecten/" class="service-link">Alle projecten en referenties &rarr;</a></p>
</section>"""


# ══════════════════════════════════════════════════════════════════════════
# Projectleiding
# ══════════════════════════════════════════════════════════════════════════
PL_URL = "/diensten/projectleiding/"
PL_TITLE = "Projectleider ondergrondse afvalcontainers inhuren | B-Advice"
PL_DESC = ("Tijdelijke projectleiding voor ondergrondse containers. Projectleider "
           "afvalinzameling inhuren voor voorbereiding tot oplevering. Landelijk inzetbaar.")

PL_FAQ = [
    ("Kan ik een projectleider ondergrondse containers tijdelijk inhuren?",
     "Ja. B-Advice is beschikbaar voor tijdelijke projectleiding, interim-opdrachten en "
     "projectmatige ondersteuning in heel Nederland. Wij kunnen ondersteuning bieden vanaf "
     "de eerste voorbereidingen tot en met de oplevering."),
    ("Voor welke organisaties werkt B-Advice?",
     "Wij ondersteunen gemeenten en afvalinzamelaars bij de voorbereiding en uitvoering van "
     "projecten rondom ondergrondse afvalcontainers."),
    ("Wat doet een projectleider afvalinzameling bij B-Advice precies?",
     "De werkzaamheden omvatten onder andere het voorbereiden en begeleiden van de levering "
     "en plaatsing van ondergrondse inzamelvoorzieningen, het opstellen en bewaken van "
     "projectplanningen, afstemming met alle betrokken partijen, begeleiding van de "
     "uitvoering, voortgangsrapportages en ondersteuning bij overdracht en oplevering."),
    ("In welke regio's is B-Advice inzetbaar?",
     "B-Advice is landelijk inzetbaar: in heel Nederland."),
]

PL_BODY = f"""<section class="page-hero" id="inhoud">
  
  <h1 class="page-hero-title">Projectleider ondergrondse afvalcontainers inhuren</h1>
  <p class="page-hero-sub">Tijdelijke projectleiding en projectbegeleiding voor gemeenten en afvalinzamelaars &mdash; landelijk inzetbaar.</p>
  <div style="margin-top:28px;"><a href="/contact/" class="btn-primary">Informeer naar onze beschikbaarheid</a></div>
</section>

<div class="dienst-layout">
  <div class="dienst-body">
    <p>B-Advice ondersteunt gemeenten en afvalinzamelaars bij de voorbereiding en uitvoering van projecten rondom ondergrondse afvalcontainers. Wij bieden tijdelijke projectleiding en projectbegeleiding, waarbij wij ondersteuning kunnen bieden vanaf de eerste voorbereidingen tot en met de oplevering.</p>

    <h2 id="werkzaamheden">Onze werkzaamheden</h2>
    <p>Onze werkzaamheden omvatten onder andere:</p>
    <ul>
      <li>Het voorbereiden en begeleiden van de levering en plaatsing van ondergrondse inzamelvoorzieningen.</li>
      <li>Het opstellen en bewaken van projectplanningen.</li>
      <li>Het afstemmen van werkzaamheden met gemeenten, leveranciers, aannemers en overige betrokken partijen.</li>
      <li>Het begeleiden van de uitvoering en bewaken van de voortgang.</li>
      <li>Het verzorgen van voortgangsrapportages.</li>
      <li>Het ondersteunen bij de overdracht en oplevering van projecten.</li>
    </ul>

    <p>B-Advice is beschikbaar voor tijdelijke projectleiding, interim-opdrachten en projectmatige ondersteuning in heel Nederland.</p>

    <h2 id="inzet">Wanneer schakelt u een projectleider in?</h2>
    <p>Projectleiding afvalinzameling is vaak tijdelijk werk: een uitrol van ondergrondse containers, een vervangingsronde of een piek in de werkvoorbereiding. Op die momenten kunt u een projectleider ondergrondse containers inhuren zonder de vaste formatie uit te breiden. Wij nemen de co&ouml;rdinatie over, bewaken planning en voortgang, en dragen het project bij oplevering weer volledig over.</p>
    <p>Gaat het project vooraf aan de uitvoering nog door de voorbereidingsfase? Bekijk dan ook <a href="/diensten/locatieonderzoek/">locatieonderzoek en werkvoorbereiding</a>; die werkzaamheden sluiten direct aan op de projectbegeleiding.</p>
  </div>
{sidebar(PL_URL, "Beschikbaarheid opvragen", "Wilt u weten wanneer wij kunnen starten en wat wij voor uw project kunnen betekenen?", "Informeer naar onze beschikbaarheid")}
</div>

{REFERENTIES.format(sleutel="projectleiding")}

{faq_html(PL_FAQ)}

<div class="cta-band">
  <div>
    <div class="cta-band-title">Tijdelijke projectleiding nodig voor uw project?</div>
    <p class="cta-band-sub">Wij reageren binnen &eacute;&eacute;n werkdag met onze beschikbaarheid.</p>
  </div>
  <a href="/contact/" class="btn-white">Informeer naar onze beschikbaarheid</a>
</div>"""

PL_HEAD = "\n".join([
    service_schema(PL_URL, "Projectleiding en projectbegeleiding ondergrondse afvalcontainers",
                   "Tijdelijke projectleiding, interim-opdrachten en projectmatige ondersteuning "
                   "voor gemeenten en afvalinzamelaars bij projecten rondom ondergrondse "
                   "inzamelvoorzieningen.",
                   "Projectleiding afvalinzameling"),
    faq_schema(PL_FAQ),
])


# ══════════════════════════════════════════════════════════════════════════
# Locatieonderzoek en werkvoorbereiding
# ══════════════════════════════════════════════════════════════════════════
LO_URL = "/diensten/locatieonderzoek/"
LO_TITLE = "Locatieonderzoek en werkvoorbereiding ondergrondse containers | B-Advice"
LO_DESC = ("Locatieonderzoek ondergrondse containers: locatiebezoek, kabels en leidingen, "
           "inmeten en inrichtingstekeningen. Werkvoorbereiding voor gemeenten.")

LO_FAQ = [
    ("Wat houdt locatieonderzoek voor ondergrondse containers in?",
     "Wij onderzoeken en beoordelen potenti&euml;le containerlocaties, voeren locatiebezoeken uit "
     "of begeleiden die, beoordelen de beschikbare informatie over kabels en leidingen en meten "
     "locaties in. Op basis daarvan werken wij de locatie verder uit."),
    ("Verzorgen jullie ook het onderzoek naar kabels en leidingen?",
     "Wij beoordelen de beschikbare informatie over kabels en leidingen en bereiden aanvullend "
     "onderzoek voor en co&ouml;rdineren dat, zoals proefsleuven of grondradar. Het veldwerk zelf "
     "wordt uitgevoerd door gespecialiseerde partijen; wij stemmen dat af en verwerken de "
     "resultaten in de voorbereiding."),
    ("Maken jullie inrichtingstekeningen?",
     "Ja. Het opstellen en uitwerken van inrichtingstekeningen hoort tot onze werkzaamheden, "
     "net als het voorbereiden van de werkzaamheden voor de uitvoering."),
    ("Kunnen wij alleen de werkvoorbereiding uitbesteden?",
     "Ja. Onze werkzaamheden kunnen afzonderlijk of als onderdeel van een groter project worden "
     "uitgevoerd. U kunt dus ook alleen het locatieonderzoek of alleen de werkvoorbereiding "
     "bij ons beleggen."),
]

BEELD_PLACEHOLDER = """<section class="section-sm" id="beeldmateriaal" style="border-top:1px solid var(--border);">
  <div class="section-label">In de praktijk</div>
  <h2 class="section-title" style="font-size:28px;">Locatieonderzoek en inrichtingstekeningen</h2>
  <p class="section-sub">Voorbeelden uit lopende en afgeronde projecten.</p>
  <div class="beeld-grid">
    <figure class="beeld-item beeld-placeholder">
      <div class="beeld-placeholder-box">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/></svg>
        <span>Foto locatiebezoek</span>
      </div>
      <figcaption>Nog aan te leveren: foto van een locatiebezoek of inmeting.</figcaption>
    </figure>
    <figure class="beeld-item beeld-placeholder">
      <div class="beeld-placeholder-box">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h18v18H3z"/><path d="M3 9h18M9 3v18"/></svg>
        <span>Voorbeeld inrichtingstekening</span>
      </div>
      <figcaption>Nog aan te leveren: uitsnede van een inrichtingstekening (zonder herleidbare gegevens).</figcaption>
    </figure>
    <figure class="beeld-item beeld-placeholder">
      <div class="beeld-placeholder-box">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
        <span>Foto geplaatste voorziening</span>
      </div>
      <figcaption>Nog aan te leveren: foto van een gerealiseerde ondergrondse inzamelvoorziening.</figcaption>
    </figure>
  </div>
</section>"""

LO_BODY = f"""<section class="page-hero" id="inhoud">
  
  <h1 class="page-hero-title">Locatieonderzoek en werkvoorbereiding ondergrondse containers</h1>
  <p class="page-hero-sub">Van het beoordelen van containerlocaties tot inrichtingstekeningen en voorbereiding van de uitvoering.</p>
  <div style="margin-top:28px;"><a href="/contact/" class="btn-primary">Vraag ondersteuning aan voor uw project</a></div>
</section>

<div class="dienst-layout">
  <div class="dienst-body">
    <p>Een zorgvuldige voorbereiding is essentieel voor de succesvolle plaatsing van ondergrondse afvalcontainers. B-Advice ondersteunt gemeenten en afvalinzamelaars bij het onderzoeken, voorbereiden en uitwerken van geschikte containerlocaties.</p>

    <h2 id="ondersteuning">Waarbij wij ondersteunen</h2>
    <p>Wij kunnen onder andere ondersteuning bieden bij:</p>
    <ul>
      <li>Het onderzoeken en beoordelen van potenti&euml;le containerlocaties.</li>
      <li>Het uitvoeren en begeleiden van locatiebezoeken.</li>
      <li>Het beoordelen van beschikbare informatie over kabels en leidingen.</li>
      <li>Het voorbereiden en co&ouml;rdineren van aanvullend onderzoek.</li>
      <li>Het inmeten van locaties.</li>
      <li>Het opstellen en uitwerken van inrichtingstekeningen.</li>
      <li>Het voorbereiden van de werkzaamheden voor de uitvoering.</li>
      <li>Het afstemmen met betrokken partijen en beheerders.</li>
    </ul>

    <p>Onze werkzaamheden kunnen afzonderlijk of als onderdeel van een groter project worden uitgevoerd.</p>

    <h2 id="kabels-en-leidingen">Onderzoek naar kabels en leidingen</h2>
    <p>De ondergrond bepaalt in de praktijk of een containerlocatie haalbaar is. Wij beoordelen de beschikbare informatie over kabels en leidingen en bereiden aanvullend onderzoek voor en co&ouml;rdineren dat waar dat nodig is. Zo komen verrassingen in de uitvoering naar voren op het moment dat een locatie nog eenvoudig te verschuiven is, en niet pas als de graafmachine er staat.</p>
    <p>Ook de afstemming met netbeheerders en overige beheerders van de openbare ruimte hoort hierbij.</p>

    <h2 id="inrichtingstekeningen">Inrichtingstekeningen en uitvoeringsvoorbereiding</h2>
    <p>Na het inmeten van de locatie werken wij de inrichtingstekeningen uit: de positie van de voorziening, de inpassing in de openbare ruimte en de aansluiting op bestrating, verkeer en aanrijroute. Vervolgens bereiden wij de werkzaamheden voor de uitvoering voor en stemmen wij af met de betrokken partijen.</p>
    <p>Loopt het project door naar de uitvoeringsfase? Dan kan B-Advice ook de <a href="/diensten/projectleiding/">projectleiding en projectbegeleiding</a> verzorgen, zodat de voorbereiding naadloos overgaat in de realisatie.</p>
  </div>
{sidebar(LO_URL, "Ondersteuning aanvragen", "Vertel ons kort waar uw project staat; wij denken mee over de aanpak van de voorbereiding.", "Vraag ondersteuning aan")}
</div>

{BEELD_PLACEHOLDER}

{REFERENTIES.format(sleutel="locatieonderzoek")}

{faq_html(LO_FAQ)}

<div class="cta-band">
  <div>
    <div class="cta-band-title">Locatieonderzoek of werkvoorbereiding uitbesteden?</div>
    <p class="cta-band-sub">Afzonderlijk in te zetten of als onderdeel van een groter project.</p>
  </div>
  <a href="/contact/" class="btn-white">Vraag ondersteuning aan voor uw project</a>
</div>"""

LO_HEAD = "\n".join([
    service_schema(LO_URL, "Locatieonderzoek en werkvoorbereiding ondergrondse containers",
                   "Onderzoeken, beoordelen en uitwerken van geschikte containerlocaties: "
                   "locatiebezoek, kabels en leidingen, inmeten, inrichtingstekeningen en "
                   "voorbereiding van de uitvoering.",
                   "Werkvoorbereiding ondergrondse containers"),
    faq_schema(LO_FAQ),
])


# ══════════════════════════════════════════════════════════════════════════
# Overzichtspagina /diensten/
# ══════════════════════════════════════════════════════════════════════════
# Eén bron voor de omschrijvingen; de volgorde komt uit tools/update_nav.py,
# zodat menu, footer en deze pagina nooit uit elkaar lopen.
OMSCHRIJVINGEN = {
    "/diensten/projectleiding/":
        "Tijdelijke projectleiding en interim-ondersteuning, van de eerste voorbereidingen "
        "tot en met de oplevering.",
    "/diensten/locatieonderzoek/":
        "Onderzoeken, beoordelen en uitwerken van geschikte containerlocaties: locatiebezoek, "
        "kabels en leidingen, inmeten en inrichtingstekeningen.",
    "/diensten/plaatsing/":
        "Civieltechnische plaatsing van ondergrondse en halfondergrondse containers, inclusief "
        "grondwerk, fundering en inbedrijfstelling.",
    "/diensten/beheer-onderhoud/":
        "Preventief en correctief onderhoud verlengt de levensduur van uw inzamelmiddelen "
        "aanzienlijk. Wij refurbishen containers tot als-nieuw staat.",
    "/diensten/afvalinzameling/":
        "Strategisch advies en operationeel management van uw volledige afvalinzamelingsproces, "
        "van wijkanalyse tot routeoptimalisatie.",
    "/diensten/projectmanagement/":
        "Complete projectbegeleiding van initiatief tot oplevering. Wij co\u00f6rdineren alle "
        "partijen en bewaken planning, budget en kwaliteit.",
    "/diensten/aanbesteding/":
        "Wij stellen complete bestekken en aanbestedingsdocumenten op die voldoen aan de "
        "wettelijke vereisten en marktstandaarden.",
    "/diensten/meerjaren-investeringsplan/":
        "Inzicht in de levensduur en vervangingsbehoefte van uw containerpark. Wij stellen een "
        "gefundeerd MIP op voor uw gemeente.",
    "/diensten/bewonersparticipatie/":
        "Effectieve communicatie met bewoners over wijzigingen in de afvalinfrastructuur. "
        "Van informatieavonden tot digitale updates.",
}

OVERZICHT_URL = "/diensten/"

OVERZICHT_BODY = """<section class="page-hero" id="inhoud">
  <h1 class="page-hero-title">Onze diensten</h1>
  <p class="page-hero-sub">B-Advice ondersteunt gemeenten en afvalinzamelaars bij projecten rondom ondergrondse inzamelvoorzieningen. Onze werkzaamheden kunnen afzonderlijk of als onderdeel van een groter project worden uitgevoerd.</p>
</section>

<section class="section">
  <div class="dienst-list">
{rijen}
  </div>

  <dl class="feiten" style="margin-top:56px;">
    <div class="feit"><dt>Gemeenten bediend</dt><dd>40+</dd></div>
    <div class="feit"><dt>Containers in beheer</dt><dd>7.000+</dd></div>
    <div class="feit"><dt>Ervaring</dt><dd>20+ jaar</dd></div>
  </dl>
</section>

<div class="cta-band">
  <div>
    <div class="cta-band-title">Heeft u een project waar wij in mee kunnen denken?</div>
    <p class="cta-band-sub">Neem vrijblijvend contact op. Wij reageren binnen &eacute;&eacute;n werkdag.</p>
  </div>
  <a href="/contact/" class="btn-white">Bespreek uw project met B-Advice</a>
</div>"""


def overzicht_body():
    rijen = "\n".join(
        f"""    <a href="{href}" class="dienst-row">
      <span class="dienst-row-title">{label}</span>
      <span class="dienst-row-desc">{OMSCHRIJVINGEN[href]}</span>
    </a>""" for href, label in DIENSTEN)
    return OVERZICHT_BODY.format(rijen=rijen)


OVERZICHT_HEAD = """  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Diensten van B-Advice",
    "itemListElement": [
%s
    ]
  }
  </script>""" % ",\n".join(
    '    {"@type":"ListItem","position":%d,"name":"%s","url":"https://b-advice.info%s"}'
    % (i + 1, label.replace("&amp;", "&"), href)
    for i, (href, label) in enumerate(DIENSTEN))


def main():
    for url, title, desc, body, head in [
        (OVERZICHT_URL,
         "Diensten ondergrondse afvalcontainers | B-Advice",
         "Projectleiding, locatieonderzoek, werkvoorbereiding, plaatsing, beheer en advies "
         "rondom ondergrondse inzamelvoorzieningen voor gemeenten en afvalinzamelaars.",
         overzicht_body(), OVERZICHT_HEAD),
        (PL_URL, PL_TITLE, PL_DESC, PL_BODY, PL_HEAD),
        (LO_URL, LO_TITLE, LO_DESC, LO_BODY, LO_HEAD),
    ]:
        target = page.write(url, page.build(url, title, desc, body, extra_head=head))
        print("geschreven:", target.relative_to(ROOT))


if __name__ == "__main__":
    main()
