# Oplevering — vijf verbeterpunten, september 2026

Branch: `claude/b-advice-improvements-4mpvw2`
Back-up van de situatie vooraf: `backup/pre-verbeteringen-2026-09-16`

---

## 1. Homepage

### Wat er is uitgevoerd
- De aangeleverde positioneringstekst staat nu bovenaan de pagina, ongewijzigd:
  H1 "B-Advice – Specialist in ondergrondse afvalcontainers", daaronder de
  ondertitel en beide alinea's.
- Naast de tekst staat een feitenkaart: voor wie, werkgebied, inzetvormen en
  direct contact. Bewust geen beeld: er is nog geen projectfotografie, en een
  screenshot van B-Organized past niet bij de nieuwe positionering.
- De vijf genoemde diensten staan als genummerde lijst direct onder de hero,
  elk doorklikbaar:

  | Dienst | Gaat naar |
  |---|---|
  | Projectleiding en projectbegeleiding | `/diensten/projectleiding/` |
  | Locatieonderzoek en werkvoorbereiding | `/diensten/locatieonderzoek/` |
  | Onderzoek naar kabels en leidingen | `/diensten/locatieonderzoek/#kabels-en-leidingen` |
  | Inrichtingstekeningen en uitvoeringsvoorbereiding | `/diensten/locatieonderzoek/#inrichtingstekeningen` |
  | Advies over ondergrondse inzamelvoorzieningen | `/diensten/` |

- Contactknop met de exacte tekst **"Bespreek uw project met B-Advice"** staat in
  de hero en onderaan in de groene band.
- De bestaande B-Organized-sectie is blijven staan, maar nu ónder de nieuwe
  positionering in plaats van erboven.
- Getest op 1440, 820 en 390 px breed: geen horizontale schuifbalk, geen
  overlappende elementen.

### Wat ik nog van u nodig heb
- **Een beslissing over de twee diensten zonder eigen pagina.** "Onderzoek naar
  kabels en leidingen" en "Inrichtingstekeningen en uitvoeringsvoorbereiding"
  verwijzen nu naar een sectie op de locatieonderzoekpagina. Wilt u dat het eigen
  pagina's worden? Dat is beter voor Google, maar vraagt wel losse teksten.
- **Postcode en btw-nummer.** Ik heb ze bewust leeg gelaten in de bedrijfsgegevens
  voor Google; ik ga daar niet naar raden.
- **De drie cijfers in de hero** (40+ gemeenten, 7.000+ containers, 87%
  klanttevredenheid) stonden er al. Kloppen ze nog en mag "87%
  klanttevredenheid" zo gepresenteerd worden? Bij een overheidsdoelgroep is een
  cijfer dat niet onderbouwd kan worden een risico.

### Wat u zelf kunt aanpassen
Teksten op de homepage staan in `docs/index.html`. Voor tekstwijzigingen is dat
prima te doen; de projectblokken worden automatisch gevuld en moet u niet met de
hand bewerken.

---

## 2. Pagina Projectleiding

**URL:** `/diensten/projectleiding/`
**Paginatitel:** Projectleider ondergrondse afvalcontainers inhuren | B-Advice

### Wat er is uitgevoerd
- De aangeleverde tekst is integraal overgenomen, inclusief de zes opsommingen.
- Opgenomen in het hoofdmenu onder **Diensten** (uitklapmenu) en in de footer.
- Contactknop met de exacte tekst **"Informeer naar onze beschikbaarheid"**, zowel
  in de hero, in de zijbalk als in de groene band.
- Geoptimaliseerd op "projectleider ondergrondse containers" en "projectleider
  afvalinzameling inhuren": beide termen staan in de H1, de tekst en de
  meta description, en er staat een blok veelgestelde vragen met
  FAQPage-opmaak voor Google.
- Verwijst naar de referentieprojecten; dat blok vult zich automatisch met
  projecten die u in de beheeromgeving aan deze dienst koppelt.

### Wat ik nog van u nodig heb
- **Controle op de vier vragen en antwoorden** in het FAQ-blok. Ik heb die
  geschreven op basis van uw eigen tekst en er niets bij verzonnen, maar ze zijn
  niet door u aangeleverd — lees ze na voordat dit live gaat.

---

## 3. Pagina Locatieonderzoek en werkvoorbereiding

**URL:** `/diensten/locatieonderzoek/`
**Paginatitel:** Locatieonderzoek en werkvoorbereiding ondergrondse containers | B-Advice

### Wat er is uitgevoerd
- De aangeleverde tekst is integraal overgenomen, inclusief de acht opsommingen.
- Twee extra secties met een eigen anker, zodat de homepage er direct naartoe kan
  linken: "Onderzoek naar kabels en leidingen" en "Inrichtingstekeningen en
  uitvoeringsvoorbereiding".
- Opgenomen in het hoofdmenu onder **Diensten** en in de footer.
- Contactknop met de exacte tekst **"Vraag ondersteuning aan voor uw project"**.
- Geoptimaliseerd op "locatieonderzoek ondergrondse containers" en
  "werkvoorbereiding ondergrondse containers".
- Drie beeldplaatshouders met daaronder precies wat er moet komen.

### Wat ik nog van u nodig heb — beeldmateriaal
1. **Foto van een locatiebezoek of inmeting** (liggend, minimaal 1600 px breed).
2. **Uitsnede van een inrichtingstekening.** Let op: zonder herleidbare gegevens
   van een opdrachtgever, tenzij die daarvoor toestemming geeft.
3. **Foto van een gerealiseerde ondergrondse inzamelvoorziening.**

Lever ze aan zoals ze uit de camera komen; comprimeren en omzetten naar WebP doe
ik of doet de beheeromgeving automatisch.

Ook hier geldt: **lees het FAQ-blok na.** Bij de vraag over kabels en leidingen
heb ik geschreven dat het veldwerk (proefsleuven, grondradar) door
gespecialiseerde partijen wordt uitgevoerd en dat B-Advice dat coördineert.
Klopt die rolverdeling?

---

## 4. Projecten en referenties

### Wat er is uitgevoerd
- **Overzichtspagina** `/projecten/` en een **eigen detailpagina per project** op
  `/projecten/naam-van-het-project/`.
- Alle gevraagde velden zitten erin: naam, opdrachtgever met aan/uit-veld,
  locatie of gemeente, korte omschrijving, uitgevoerde werkzaamheden, resultaten
  en beeldmateriaal. Daarnaast periode, volgorde en de koppeling met de twee
  dienstenpagina's.
- **Beheeromgeving** op `/admin/`: inloggen, projecten toevoegen, bewerken en
  verwijderen, foto's uploaden door ze in het vak te slepen, volgorde van foto's
  aanpassen, en concept versus gepubliceerd. Geen code nodig.
- Vanaf beide dienstenpagina's wordt doorgelinkt naar de referentieprojecten die
  u aan die dienst koppelt.
- **"Hoogbouw op Orde" in Dordrecht** staat klaar als **concept** met een duidelijk
  gemarkeerde voorbeeldinvulling. Concepten zijn alleen via een directe link te
  bekijken, staan niet in het overzicht, niet in de sitemap en worden niet door
  Google geïndexeerd. Zo staat er niets over gemeente Dordrecht online dat nog
  niet door u is nagekeken.

### Technische keuze: Supabase, niet een JSON-bestand

U vroeg om de eenvoudigste opslag die bij de stack past. Dat is **Supabase**, en
dit is waarom:

De website draait op GitHub Pages en is volledig statisch — er is geen server die
een formulier kan verwerken. Een JSON-bestand in de repository is op zichzelf de
simpelste opslag, maar een browser kan daar niet in schrijven zonder een
GitHub-toegangstoken. Dat token zou dan in uw browser moeten staan: onveilig, en
foto's slepen werkt er sowieso niet mee.

Daarom een combinatie, waarbij het JSON-bestand gewoon blijft bestaan:

| Onderdeel | Waar | Waarom |
|---|---|---|
| Invoer, login, foto-upload | Supabase | Werkt vanuit de browser, met login en slepen |
| Wat bezoekers zien | Statische HTML in `docs/` | Snel, goed vindbaar, geen externe afhankelijkheid |
| De brug | GitHub Action, elk half uur | Zet Supabase om in `docs/data/projecten.json` en genereert de pagina's |

Wat dat oplevert: nette webadressen (`/projecten/hoogbouw-op-orde-dordrecht/` in
plaats van `?id=12`), volledige indexeerbaarheid door Google, en een website die
blijft werken als Supabase eruit ligt. De foto's worden bij het publiceren
automatisch verkleind en naar WebP omgezet.

Nadeel, eerlijk benoemd: een wijziging is niet meteen zichtbaar, maar binnen een
half uur. U kunt het publiceren ook handmatig starten.

### Wat ik nog van u nodig heb
1. **Supabase instellen.** Dit kan ik niet voor u doen — er moet een account op
   naam van B-Advice komen. Het is ongeveer 15 minuten werk en staat stap voor
   stap in `BEHEEROMGEVING.md`; de database-instellingen staan kant-en-klaar in
   `supabase/schema.sql`. Wilt u dat ik het samen met u doorloop, dan heb ik
   alleen een uitnodiging voor het Supabase-project nodig — **stuur mij nooit de
   `service_role`-sleutel**.
2. **De definitieve tekst en foto's voor "Hoogbouw op Orde"**: omschrijving van de
   opdracht, uitgevoerde werkzaamheden, resultaten (het liefst met concrete
   aantallen) en beeldmateriaal.
3. **Toestemming van gemeente Dordrecht** om als opdrachtgever genoemd te worden.
   Zonder die bevestiging laat ik de schakelaar uit staan.

### Wat u zelf kunt aanpassen
Alles rond projecten: toevoegen, wijzigen, verwijderen, foto's uploaden en
vervangen, volgorde bepalen, opdrachtgever wel of niet tonen, en concept versus
gepubliceerd. Zonder tussenkomst van een ontwikkelaar.

---

## 5. Techniek en vindbaarheid

### Bereikbaarheid — één bevinding die u moet oplossen

Ik kon de live site niet rechtstreeks benaderen (het netwerk van deze omgeving
blokkeert dat), maar de DNS heb ik wel kunnen opvragen. Daar zit het probleem:

```
b-advice.info        ->  185.199.108.153
www.b-advice.info    ->  b-advice.info  ->  185.199.108.153
```

**Er staat maar één van de vier GitHub Pages-adressen ingesteld.** GitHub schrijft
voor dat alle vier de A-records worden aangemaakt. Met één record valt de site uit
zodra juist die server onderhoud heeft — dat past precies bij de serverfout die u
op `www.b-advice.info` zag.

Voeg bij uw domeinregistrar deze A-records toe voor `b-advice.info`:

```
A  @  185.199.108.153   (staat er al)
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153
```

En zet `www` om naar het door GitHub voorgeschreven doel:

```
CNAME  www  michaelbeset-ops.github.io.
```

Nu wijst `www` naar de apex in plaats van naar GitHub zelf. In die opzet kan
GitHub het SSL-certificaat voor `www` niet altijd uitgeven, wat een tweede
mogelijke oorzaak van de storing is.

Daarna, in GitHub → **Settings** → **Pages**:
1. Controleer dat het custom domain `b-advice.info` is (dat komt uit `docs/CNAME`).
2. Wacht tot "DNS check successful" verschijnt.
3. Zet **Enforce HTTPS** aan.

GitHub Pages stuurt dan zelf `www.b-advice.info` met een 301 door naar
`b-advice.info`, en alle http-verkeer naar https. Er hoeft niets in de code te
veranderen. **Laat het mij weten zodra de DNS is aangepast, dan controleer ik het
resultaat.**

### Snelheid

| Wat | Voor | Na |
|---|---|---|
| Logo (op elke pagina, 2×) | 57 KB PNG | 29 KB WebP |
| Favicon | 35 KB | 11 KB |
| Deelafbeelding voor LinkedIn/WhatsApp | 102 KB | 27 KB |
| Teamfoto's (samen) | 101 KB | 39 KB |
| Stylesheet | 43 KB | 36 KB geminificeerd |
| Gedeeld script | 3,4 KB inline op elke pagina | 1× `/site.js`, met `defer` en cachebaar |

Verder: `loading="lazy"` op alle afbeeldingen onder de vouw, expliciete
afmetingen zodat de pagina niet verspringt tijdens het laden, en de overbodige
`@import` van het lettertypebestand verwijderd — die maakte het laden onnodig
serieel.

De geminificeerde stylesheet is gecontroleerd door zeven pagina's op drie
schermbreedtes te renderen met beide versies en de resultaten pixel voor pixel te
vergelijken: identiek.

### SEO

- Unieke title en meta description op alle 32 geïndexeerde pagina's, automatisch
  gecontroleerd met `tools/check_seo.py`.
- Precies één H1 per pagina, met een logische H2/H3-structuur eronder.
- De zoekwoorden uit de briefing zijn natuurlijk verwerkt in koppen, lopende tekst
  en meta-omschrijvingen — niet opgestapeld.
- Interne links tussen homepage, dienstenpagina's en projecten, in beide
  richtingen.
- Schema.org: `Organization` + `ProfessionalService` + `LocalBusiness` met
  dienstencatalogus op de homepage, `Service` op beide nieuwe dienstenpagina's,
  `FAQPage` bij de veelgestelde vragen, `BreadcrumbList` op alle onderliggende
  pagina's en `ItemList`/`CreativeWork` bij de projecten. Alle blokken zijn op
  geldigheid gecontroleerd.
- `robots.txt` sluit de beheeromgeving uit; `sitemap.xml` wordt gegenereerd en
  laat concepten en noindex-pagina's automatisch weg.
- Alle 2.369 interne verwijzingen gecontroleerd: geen dode links.

Eén punt ter overweging: de paginatitel die u opgaf voor de locatieonderzoekpagina
is 72 tekens. Google toont er ongeveer 60. Ik heb uw tekst laten staan, maar
"Locatieonderzoek ondergrondse containers | B-Advice" zou volledig zichtbaar zijn.
Zegt u het maar.

### Indexering controleren

Dit kan ik niet voor u doen; het vereist toegang tot uw Google-account.

1. Ga naar <https://search.google.com/search-console> en voeg `b-advice.info` toe
   als **domeinproperty** (dan vallen www en non-www er allebei onder).
2. Bevestig het eigendom met het TXT-record dat Google aanlevert.
3. Meld de sitemap aan: `https://b-advice.info/sitemap.xml`.
4. Vraag via **URL-inspectie** indexering aan voor de drie nieuwe pagina's.
5. Kijk na een week bij **Pagina's** of er uitsluitingen zijn.

**Wat ik van u nodig heb:** of u richt het in en geeft mij daarna leestoegang, of u
stuurt mij een uitnodiging als gebruiker, dan doe ik het.

### Statistieken — mijn advies

**Plausible Cloud, EU-hosting: € 9 per maand** (of € 90 per jaar) tot 10.000
paginaweergaven per maand.

Waarom Plausible en niet Simple Analytics:
- Beide zijn privacyvriendelijk, gebruiken geen cookies en hebben geen
  cookiebanner nodig. Simple Analytics kost € 19 per maand — ruim het dubbele.
- Plausible host in de EU (Duitsland). Voor een leverancier van gemeenten is dat
  eenvoudiger uit te leggen dan een Amerikaanse partij, en het scheelt werk bij
  aanbestedingen.
- Doelen instellen zit in het basispakket; bij Simple Analytics zit dat in een
  duurder plan.
- Plausible is open source. Wilt u geen abonnement, dan kunt u het ook zelf
  hosten op een VPS van ongeveer € 5 per maand — meer werk, minder gedoe met
  verwerkersovereenkomsten.

**De conversiemeting is al voorbereid.** Zodra een succesvolle inzending van het
contactformulier of de locatieaanvraag binnenkomt, wordt het doel
`Contactaanvraag` respectievelijk `Locatieaanvraag` gemeld. Er hoeft straks alleen
nog één scriptregel in de pagina's te komen; daarna werken de doelen direct. Ook
Simple Analytics wordt ondersteund, mocht u die toch kiezen.

**Voordat u dit aanzet:** de privacyverklaring en het cookiebeleid moeten worden
aangevuld met de gekozen partij. Nu staat er dat er geen statistieken draaien, en
dat klopt op dit moment. Geef een seintje zodra u gekozen heeft, dan pas ik beide
teksten aan.

---

## 6. Uitstraling — de "AI-look" eraf

Een aantal vormkenmerken maakte de site herkenbaar als sjabloonwerk. Die zijn
eruit, en er is iets in de plaats gekomen dat past bij een leverancier van
gemeenten.

### Wat eruit is
- De pil met het knipperende groene bolletje bovenaan elke pagina.
- Het groene accentwoord middenin koppen ("Specialist in <em>ondergrondse
  afvalcontainers</em>").
- De nummering 01–05 bij de diensten.
- Labels in monospace-hoofdletters. Monospace is nu voorbehouden aan echte
  cijfers, zoals het KvK-nummer.
- De pulserende stip, de stuiterende scrollpijl en kaarten die omhoog zweven
  bij aanwijzen.
- De emoji in de cookiemelding en in de bevestiging na het versturen van een
  formulier.
- Ronde hoeken van 12 px (nu 3 px) en slagschaduwen onder kaarten (nu randen).

### Wat ervoor in de plaats komt
- Een zichtbaar kruimelpad op alle onderliggende pagina's. Dat is gebruikelijk
  op zakelijke en overheidssites, maakt de structuur zichtbaar en helpt Google.
  Het wordt afgeleid uit hetzelfde spoor als het BreadcrumbList-blok, dus
  zichtbare navigatie en gestructureerde data kunnen niet uit elkaar lopen.
- De diensten staan als definitielijst: titel links, toelichting rechts,
  gescheiden door haarlijnen. Rustiger dan een raster met pictogrammen, en het
  werkt met negen diensten net zo goed als met vijf.
- De cijfers staan als nuchtere feitenregel onder de tekst in plaats van als
  grote getallen.

### Kleur en toegankelijkheid

Bij het nalopen bleek het groen uit het logo (#4CAF72) overal gebruikt te
worden als tekst- en knopkleur. Op wit haalt dat **2,7:1**, terwijl WCAG 2.1 AA
**4,5:1** vereist. Elke knop, elke link in de huisstijlkleur en elk label was
dus feitelijk ontoegankelijk.

Het groen is daarom gesplitst:

| Kleur | Waar | Contrast |
|---|---|---|
| #4CAF72 (logogroen) | alleen op de donkere vlakken | 6,3:1 |
| #1f6b3f | tekst, links en knoppen op lichte vlakken | 6,2:1 (wit erop: 6,5:1) |

Ook de footertekst is aangepast: die stond op 45% wit (4,0:1) en haalde de norm
net niet.

**Het resultaat is gemeten, niet aangenomen.** `tools/check_contrast.mjs` opent
elke pagina in een echte browser, bepaalt per tekstelement de werkelijk
gerenderde voor- en achtergrondkleur en toetst aan AA. Uitkomst:

```
Alle tekst op 19 pagina's haalt WCAG 2.1 AA.
```

Voor een leverancier van gemeenten is dat relevant: onder het Tijdelijk besluit
digitale toegankelijkheid overheid wordt hier in aanbestedingen naar gevraagd.

### Twee inhoudelijke ingrepen

1. **"87% klanttevredenheid" is weggehaald** van de homepage en de
   dienstenoverzichtspagina. Het cijfer stond er groot bij, maar er is geen bron
   bij te leveren. Bij een overheidsdoelgroep is een onbewijsbaar percentage
   eerder een risico dan een pluspunt. Lever een onderbouwing aan (welk
   onderzoek, welk jaar, hoeveel respondenten) en het kan terug.
2. **De dienstenoverzichtspagina miste projectleiding en locatieonderzoek.**
   Die pagina wordt nu gegenereerd uit dezelfde bron als het menu en de footer,
   zodat een nieuwe dienst automatisch overal verschijnt.

### Nog te bespreken
De pagina /over-ons/ beschrijft B-Advice nog als "specialisten in
afvalinzameling" met "ruim twee decennia ervaring in ondergrondse
afvalinfrastructuur". Dat is uw eigen bedrijfsgeschiedenis, dus die heb ik niet
herschreven, maar hij sluit niet helemaal aan op de nieuwe positionering op de
homepage. Wilt u dat ik die tekst meeneem, dan hoor ik het graag.

---

## Terugkerende kosten — overzicht

| Onderdeel | Nu | Na deze oplevering |
|---|---|---|
| Hosting (GitHub Pages) | € 0 | € 0 |
| Publicatietaak (GitHub Actions, publieke repo) | — | € 0 |
| Domeinnaam b-advice.info | ± € 10 – 15 per jaar | ongewijzigd |
| SSL-certificaat | € 0 (via GitHub) | € 0 |
| Formulieren (Web3Forms) | € 0 in de gratis tier | ongewijzigd |
| Beheeromgeving (Supabase) | — | **€ 0** in de gratis tier |
| Statistieken (Plausible) | — | **€ 9 per maand / € 90 per jaar**, optioneel |

**Totaal extra: € 0 als u geen statistieken neemt, € 90 per jaar als u dat wel doet.**

Twee kanttekeningen:
- Een Supabase-project op de gratis tier wordt gepauzeerd na een week zonder
  gebruik. De website merkt daar niets van (die is statisch), maar u moet het
  project dan eenmalig weer starten voordat u kunt inloggen op de
  beheeromgeving. Wilt u dat voorkomen: € 25 per maand. Voor dit gebruik niet
  nodig.
- GitHub Actions is gratis zolang de repository openbaar is. Wordt hij privé, dan
  geldt een limiet van 2.000 minuten per maand. De publicatietaak gebruikt
  ongeveer 1 minuut per keer, dus ook dan ruim voldoende.

---

## Nog open uit de vorige audit

Deze punten staan los van de vijf verbeterpunten en vragen actie buiten de code:

1. **Web3Forms-dashboard**: zet de domeinrestrictie op `b-advice.info` aan.
2. **Repository openbaar**: de map `chats/` (volledige ontwerpgesprekken),
   `uploads/` en `b-advice-theme.zip` staan publiek in de repository. Ik heb ze
   laten staan omdat opschonen buiten deze opdracht valt, maar het advies blijft:
   verwijderen of de repository privé maken.
3. **LinkedIn-profielen** van de teamleden, als de knoppen op /over-ons/ terug
   moeten.

---

## Hoe u hier zelf mee verder werkt

De hulpscripts staan in `tools/`. Na een wijziging aan de navigatie of de
stylesheet:

```bash
python3 tools/build.py            # doet alles hieronder, in de juiste volgorde

# of los:
python3 tools/update_nav.py       # navigatie op alle pagina's bijwerken
python3 tools/build_diensten.py   # dienstenoverzicht en de twee nieuwe pagina's
python3 tools/build_projecten.py  # projectpagina's genereren
python3 tools/build_kruimels.py   # kruimelpaden en BreadcrumbList
python3 tools/build_sitemap.py    # sitemap opnieuw opbouwen
python3 tools/minify.py           # stylesheet minificeren
python3 tools/check_links.py      # controle: geen dode links
python3 tools/check_seo.py        # controle: unieke titles, één H1 per pagina

# toegankelijkheid (vereist een draaiende testserver):
cd docs && python3 -m http.server 8765 &
npm install --no-save playwright && node tools/check_contrast.mjs
```

De projectpagina's worden ook automatisch gegenereerd door de GitHub Action. Voor
alledaags gebruik — projecten beheren — hoeft u geen van deze scripts te draaien.
