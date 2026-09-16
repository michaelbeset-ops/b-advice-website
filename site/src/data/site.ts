/**
 * Alle tekst van de site staat hier. Componenten bevatten geen losse copy,
 * zodat een tekstwijziging nooit betekent dat je door opmaak moet zoeken.
 *
 * Wat hier staat is aangeleverd door B-Advice of overgenomen van de huidige
 * site. Niets is verzonnen. Waar iets ontbreekt staat TE_BEVESTIGEN.
 */

export const bedrijf = {
  naam: "B-Advice",
  kvk: "82797811",
  telefoon: "+31 (6) 431 25 245",
  telefoonUrl: "tel:+31643125245",
  email: "info@b-advice.info",
  adres: { straat: "Achterdijk 26", plaats: "Nieuwland (UT)" },
  // TE_BEVESTIGEN: postcode en btw-nummer zijn niet bekend. Zonder deze twee
  // blijft het LocalBusiness-blok voor Google onvolledig.
  postcode: null as string | null,
  btwNummer: null as string | null,
} as const;

export const navigatie = {
  /** Uitklapmenu onder Diensten. Volgorde bepaalt menu, footer en overzicht. */
  diensten: [
    { url: "/diensten/projectleiding/", label: "Projectleiding en projectbegeleiding" },
    { url: "/diensten/locatieonderzoek/", label: "Locatieonderzoek en werkvoorbereiding" },
    { url: "/diensten/plaatsing/", label: "Plaatsen van inzamelmiddelen" },
    { url: "/diensten/beheer-onderhoud/", label: "Beheer, onderhoud en refurbish" },
    { url: "/diensten/afvalinzameling/", label: "Afvalinzameling en management" },
    { url: "/diensten/projectmanagement/", label: "Projectmanagement" },
    { url: "/diensten/aanbesteding/", label: "Aanbesteding en bestek" },
    { url: "/diensten/meerjaren-investeringsplan/", label: "Meerjaren Investeringsplan" },
    { url: "/diensten/bewonersparticipatie/", label: "Bewonersparticipatie" },
  ],
  /** Hoofdmenu naast Diensten, in dezelfde volgorde als op de huidige site. */
  hoofd: [
    { url: "/b-organized/", label: "B-Organized" },
    { url: "/b-covered/", label: "B-Covered" },
    { url: "/producten/", label: "Producten" },
    { url: "/nieuws/", label: "Nieuws" },
    { url: "/locatieaanvraag/", label: "Locatieaanvraag" },
    { url: "/over-ons/", label: "Over ons" },
  ],
  contact: { url: "/contact/", label: "Contact" },
  login: { url: "https://b-organized.info", label: "Login B-Organized", extern: true },
} as const;

/** De ene actie die een bezoeker moet doen. Overal dezelfde woorden. */
/** Kop en intro van het dienstenoverzicht, letterlijk van de huidige site. */
export const dienstenPagina = {
  h1: "Onze diensten",
  lead:
    "B-Advice ondersteunt gemeenten en afvalinzamelaars bij projecten rondom " +
    "ondergrondse inzamelvoorzieningen. Onze werkzaamheden kunnen afzonderlijk " +
    "of als onderdeel van een groter project worden uitgevoerd.",
} as const;

export const hoofdactie = {
  label: "Bespreek uw project met B-Advice",
  url: "/contact/",
} as const;

export const home = {
  meta: {
    titel: "Specialist ondergrondse afvalcontainers | B-Advice",
    omschrijving:
      "Advies, projectleiding en werkvoorbereiding voor gemeenten en " +
      "afvalinzamelaars bij ondergrondse afvalcontainers. Landelijk inzetbaar.",
  },
  hero: {
    // Aangeleverde positioneringstekst, ongewijzigd.
    bovenregel: "Ondergrondse inzamelvoorzieningen",
    kop: "Specialist in ondergrondse afvalcontainers",
    kopAccent: "Specialist",
    lead: "Advies, projectleiding en werkvoorbereiding voor gemeenten en afvalinzamelaars.",
    alineas: [
      "B-Advice ondersteunt gemeenten en afvalinzamelaars bij de voorbereiding, " +
        "organisatie en uitvoering van projecten rondom ondergrondse " +
        "inzamelvoorzieningen. Van locatieonderzoek en technische voorbereiding " +
        "tot projectleiding en begeleiding van de uitvoering.",
    ],
    tweedeActie: { label: "Bekijk onze diensten", url: "/diensten/" },
    /** Feiten uit de huidige site. Het percentage klanttevredenheid dat er
     *  eerder stond is weggelaten, omdat er geen bron bij te leveren is. */
    feiten: [
      { label: "Gemeenten bediend", waarde: "40+" },
      { label: "Containers in beheer", waarde: "7.000+" },
      // Geen getal, dus kleiner gezet: anders schreeuwt "Heel Nederland"
      // net zo hard als de cijfers ernaast.
      { label: "Werkgebied", waarde: "Heel Nederland", tekstwaarde: true },
    ],
  },
} as const;

export const a11y = {
  skipLink: "Naar de inhoud",
  menuOpenen: "Menu openen",
  menuSluiten: "Menu sluiten",
  hoofdnavigatie: "Hoofdnavigatie",
} as const;

/** Homepagesecties onder de hero. Alle tekst komt van de huidige site. */
export const homeSecties = {
  diensten: {
    bovenregel: "Onze diensten",
    kop: "Waarmee wij gemeenten en afvalinzamelaars ondersteunen",
    kopAccent: "afvalinzamelaars",
    lead:
      "Afzonderlijk in te zetten of als samenhangend pakket, van eerste " +
      "locatieonderzoek tot oplevering van de uitvoering.",
    /** De vijf diensten uit de briefing, elk direct doorklikbaar. */
    items: [
      {
        url: "/diensten/projectleiding/",
        icoon: "put",
        titel: "Projectleiding en projectbegeleiding",
        tekst:
          "Tijdelijke projectleiding en interim-ondersteuning, van de eerste " +
          "voorbereidingen tot en met de oplevering.",
      },
      {
        url: "/diensten/locatieonderzoek/",
        icoon: "meten",
        titel: "Locatieonderzoek en werkvoorbereiding",
        tekst:
          "Onderzoeken, beoordelen en uitwerken van geschikte containerlocaties, " +
          "inclusief locatiebezoek en inmeten.",
      },
      {
        url: "/diensten/locatieonderzoek/#kabels-en-leidingen",
        icoon: "leidingen",
        titel: "Onderzoek naar kabels en leidingen",
        tekst:
          "Beoordelen van de beschikbare informatie en het voorbereiden en " +
          "co\u00f6rdineren van aanvullend onderzoek.",
      },
      {
        url: "/diensten/locatieonderzoek/#inrichtingstekeningen",
        icoon: "tekening",
        titel: "Inrichtingstekeningen en uitvoeringsvoorbereiding",
        tekst:
          "Opstellen en uitwerken van inrichtingstekeningen en het voorbereiden " +
          "van de werkzaamheden voor de uitvoering.",
      },
      {
        url: "/diensten/",
        icoon: "advies",
        titel: "Advies over ondergrondse inzamelvoorzieningen",
        tekst:
          "Specialistisch advies over inzamelstructuur, inzamelmiddelen, beheer " +
          "en vervanging.",
      },
      {
        url: "/diensten/plaatsing/",
        icoon: "plaatsing",
        titel: "Plaatsen van inzamelmiddelen",
        tekst:
          "Civieltechnische plaatsing van ondergrondse en halfondergrondse " +
          "containers, inclusief grondwerk, fundering en inbedrijfstelling.",
      },
    ],
  },

  werkwijze: {
    bovenregel: "Werkwijze",
    kop: "Van locatieonderzoek tot oplevering",
    kopAccent: "locatieonderzoek",
    lead:
      "Wij kunnen het hele traject verzorgen of alleen het deel waar u " +
      "ondersteuning bij nodig heeft.",
    stappen: [
      {
        titel: "Locatieonderzoek",
        tekst:
          "Onderzoeken en beoordelen van potentiële containerlocaties, met " +
          "locatiebezoek en een beoordeling van de beschikbare informatie over " +
          "kabels en leidingen.",
      },
      {
        titel: "Werkvoorbereiding",
        tekst:
          "Inmeten van de locatie, opstellen en uitwerken van de " +
          "inrichtingstekeningen en het voorbereiden van de werkzaamheden voor " +
          "de uitvoering.",
      },
      {
        titel: "Uitvoering",
        tekst:
          "Begeleiden van de levering en plaatsing, bewaken van planning en " +
          "voortgang, en afstemmen met gemeenten, leveranciers en aannemers.",
      },
      {
        titel: "Oplevering",
        tekst:
          "Voortgangsrapportages en ondersteuning bij de overdracht en " +
          "oplevering van het project.",
      },
    ],
    // De tweede alinea uit de aangeleverde hero-tekst, ongewijzigd.
    slot:
      "Wij zijn landelijk inzetbaar voor tijdelijke projectleiding, " +
      "specialistische adviesopdrachten en projectmatige ondersteuning.",
  },

  platform: {
    bovenregel: "Ons platform",
    kop: "B-Organized: digitaal containerbeheer",
    kopAccent: "digitaal containerbeheer",
    lead:
      "Gemeenten en afvalinzamelaars beheren hun volledige containerpark via " +
      "\u00e9\u00e9n platform. Overzichtelijk, snel en schaalbaar.",
    kenmerken: [
      "Kanban-overzicht per gemeente en wijk",
      "Containerregistratie met kaartweergave",
      "Takenbeheer en gebruikersrollen",
      "Bijlages en notities per container",
    ],
    acties: [
      { url: "/b-organized/", label: "Meer over B-Organized" },
      { url: "https://b-organized.info", label: "Inloggen", extern: true },
    ],
  },


  cta: {
    kop: "Een project in voorbereiding of uitvoering?",
    tekst: "Wij denken vrijblijvend mee en reageren binnen \u00e9\u00e9n werkdag.",
  },
} as const;

export const footer = {
  tagline:
    "Specialist in ondergrondse afvalcontainers. Advies, projectleiding en " +
    "werkvoorbereiding voor gemeenten en afvalinzamelaars.",
  kolommen: [
    {
      titel: "Bedrijf",
      links: [
        { url: "/over-ons/", label: "Over ons" },
        { url: "/nieuws/", label: "Nieuws" },
        { url: "/contact/", label: "Contact" },
        { url: "/b-organized/", label: "B-Organized" },
        { url: "/privacy/", label: "Privacy en cookies" },
      ],
    },
  ],
  onderaan: [
    { url: "/privacy/", label: "Privacy" },
    { url: "/cookies/", label: "Cookies" },
    // Het bureau achter de site, zoals onderaan de huidige site staat.
    // Extern, dus in een nieuw tabblad met rel=noopener.
    { url: "https://sitefront.nl", label: "Powered by Sitefront", extern: true },
  ],
} as const;

/* ══════════════════════════════════════════════════════════════════════════
   Dienstenpagina's

   De teksten van projectleiding en locatieonderzoek zijn aangeleverd door
   B-Advice en staan hier ongewijzigd. De overige zeven komen van de huidige
   site en zijn eveneens ongewijzigd overgenomen.

   TE_BEVESTIGEN: de vragen en antwoorden bij projectleiding en
   locatieonderzoek zijn door ons geschreven op basis van de aangeleverde
   tekst, niet door B-Advice aangeleverd. Laten nakijken voor publicatie.
   TE_BEVESTIGEN: "tientallen plaatsingsprojecten per jaar" (plaatsing) is een
   volumeclaim uit de huidige site waar geen onderbouwing bij zit.
   ══════════════════════════════════════════════════════════════════════════ */

export type Blok =
  | { type: "p"; tekst: string }
  | { type: "h2"; tekst: string; id?: string }
  | { type: "ul"; items: readonly string[] };

export interface Dienst {
  slug: string;
  h1: string;
  intro: string;
  meta: { titel: string; omschrijving: string };
  /** Knoptekst op deze pagina. Sommige diensten hebben een eigen tekst. */
  actie: string;
  blokken: readonly Blok[];
  faq?: readonly { vraag: string; antwoord: string }[];
  /** Verwante pagina's, onderaan de tekst. Houdt de interne links bij de
   *  inhoud in plaats van in de opmaak. */
  verwant?: readonly { label: string; url: string }[];
  /** serviceType voor het Service-blok in de gestructureerde data. */
  soort: string;
}

export const diensten: readonly Dienst[] = [
  {
    slug: "projectleiding",
    h1: "Projectleider ondergrondse afvalcontainers inhuren",
    intro:
      "Tijdelijke projectleiding en projectbegeleiding voor gemeenten en afvalinzamelaars, landelijk inzetbaar.",
    meta: {
      titel: "Projectleider ondergrondse afvalcontainers inhuren | B-Advice",
      omschrijving:
        "Tijdelijke projectleiding voor ondergrondse containers. Projectleider afvalinzameling inhuren voor voorbereiding tot oplevering. Landelijk inzetbaar.",
    },
    actie: "Informeer naar onze beschikbaarheid",
    soort: "Projectleiding afvalinzameling",
    blokken: [
      {
        type: "p",
        tekst:
          "B-Advice ondersteunt gemeenten en afvalinzamelaars bij de voorbereiding en uitvoering van projecten rondom ondergrondse afvalcontainers. Wij bieden tijdelijke projectleiding en projectbegeleiding, waarbij wij ondersteuning kunnen bieden vanaf de eerste voorbereidingen tot en met de oplevering.",
      },
      { type: "h2", tekst: "Onze werkzaamheden", id: "werkzaamheden" },
      { type: "p", tekst: "Onze werkzaamheden omvatten onder andere:" },
      {
        type: "ul",
        items: [
          "Het voorbereiden en begeleiden van de levering en plaatsing van ondergrondse inzamelvoorzieningen.",
          "Het opstellen en bewaken van projectplanningen.",
          "Het afstemmen van werkzaamheden met gemeenten, leveranciers, aannemers en overige betrokken partijen.",
          "Het begeleiden van de uitvoering en bewaken van de voortgang.",
          "Het verzorgen van voortgangsrapportages.",
          "Het ondersteunen bij de overdracht en oplevering van projecten.",
        ],
      },
      {
        type: "p",
        tekst:
          "B-Advice is beschikbaar voor tijdelijke projectleiding, interim-opdrachten en projectmatige ondersteuning in heel Nederland.",
      },
      { type: "h2", tekst: "Wanneer schakelt u een projectleider in?", id: "inzet" },
      {
        type: "p",
        tekst:
          "Projectleiding afvalinzameling is vaak tijdelijk werk: een uitrol van ondergrondse containers, een vervangingsronde of een piek in de werkvoorbereiding. Op die momenten kunt u een projectleider ondergrondse containers inhuren zonder de vaste formatie uit te breiden. Wij nemen de coördinatie over, bewaken planning en voortgang, en dragen het project bij oplevering weer volledig over.",
      },
    ],
    verwant: [
      { label: "Locatieonderzoek en werkvoorbereiding", url: "/diensten/locatieonderzoek/" },
    ],
    faq: [
      {
        vraag: "Kan ik een projectleider ondergrondse containers tijdelijk inhuren?",
        antwoord:
          "Ja. B-Advice is beschikbaar voor tijdelijke projectleiding, interim-opdrachten en projectmatige ondersteuning in heel Nederland. Wij kunnen ondersteuning bieden vanaf de eerste voorbereidingen tot en met de oplevering.",
      },
      {
        vraag: "Voor welke organisaties werkt B-Advice?",
        antwoord:
          "Wij ondersteunen gemeenten en afvalinzamelaars bij de voorbereiding en uitvoering van projecten rondom ondergrondse afvalcontainers.",
      },
      {
        vraag: "Wat doet een projectleider afvalinzameling bij B-Advice precies?",
        antwoord:
          "De werkzaamheden omvatten onder andere het voorbereiden en begeleiden van de levering en plaatsing van ondergrondse inzamelvoorzieningen, het opstellen en bewaken van projectplanningen, afstemming met alle betrokken partijen, begeleiding van de uitvoering, voortgangsrapportages en ondersteuning bij overdracht en oplevering.",
      },
      {
        vraag: "In welke regio's is B-Advice inzetbaar?",
        antwoord: "B-Advice is landelijk inzetbaar: in heel Nederland.",
      },
    ],
  },
  {
    slug: "locatieonderzoek",
    h1: "Locatieonderzoek en werkvoorbereiding ondergrondse containers",
    intro:
      "Van het beoordelen van containerlocaties tot inrichtingstekeningen en voorbereiding van de uitvoering.",
    meta: {
      titel: "Locatieonderzoek en werkvoorbereiding ondergrondse containers | B-Advice",
      omschrijving:
        "Locatieonderzoek ondergrondse containers: locatiebezoek, kabels en leidingen, inmeten en inrichtingstekeningen. Werkvoorbereiding voor gemeenten.",
    },
    actie: "Vraag ondersteuning aan voor uw project",
    soort: "Werkvoorbereiding ondergrondse containers",
    blokken: [
      {
        type: "p",
        tekst:
          "Een zorgvuldige voorbereiding is essentieel voor de succesvolle plaatsing van ondergrondse afvalcontainers. B-Advice ondersteunt gemeenten en afvalinzamelaars bij het onderzoeken, voorbereiden en uitwerken van geschikte containerlocaties.",
      },
      { type: "h2", tekst: "Waarbij wij ondersteunen", id: "ondersteuning" },
      { type: "p", tekst: "Wij kunnen onder andere ondersteuning bieden bij:" },
      {
        type: "ul",
        items: [
          "Het onderzoeken en beoordelen van potentiële containerlocaties.",
          "Het uitvoeren en begeleiden van locatiebezoeken.",
          "Het beoordelen van beschikbare informatie over kabels en leidingen.",
          "Het voorbereiden en coördineren van aanvullend onderzoek.",
          "Het inmeten van locaties.",
          "Het opstellen en uitwerken van inrichtingstekeningen.",
          "Het voorbereiden van de werkzaamheden voor de uitvoering.",
          "Het afstemmen met betrokken partijen en beheerders.",
        ],
      },
      {
        type: "p",
        tekst:
          "Onze werkzaamheden kunnen afzonderlijk of als onderdeel van een groter project worden uitgevoerd.",
      },
      { type: "h2", tekst: "Onderzoek naar kabels en leidingen", id: "kabels-en-leidingen" },
      {
        type: "p",
        tekst:
          "De ondergrond bepaalt in de praktijk of een containerlocatie haalbaar is. Wij beoordelen de beschikbare informatie over kabels en leidingen en bereiden aanvullend onderzoek voor en coördineren dat waar dat nodig is. Zo komen verrassingen in de uitvoering naar voren op het moment dat een locatie nog eenvoudig te verschuiven is, en niet pas als de graafmachine er staat.",
      },
      {
        type: "p",
        tekst:
          "Ook de afstemming met netbeheerders en overige beheerders van de openbare ruimte hoort hierbij.",
      },
      { type: "h2", tekst: "Inrichtingstekeningen en uitvoeringsvoorbereiding", id: "inrichtingstekeningen" },
      {
        type: "p",
        tekst:
          "Na het inmeten van de locatie werken wij de inrichtingstekeningen uit: de positie van de voorziening, de inpassing in de openbare ruimte en de aansluiting op bestrating, verkeer en aanrijroute. Vervolgens bereiden wij de werkzaamheden voor de uitvoering voor en stemmen wij af met de betrokken partijen.",
      },
    ],
    verwant: [
      { label: "Projectleiding en projectbegeleiding", url: "/diensten/projectleiding/" },
    ],
    faq: [
      {
        vraag: "Wat houdt locatieonderzoek voor ondergrondse containers in?",
        antwoord:
          "Wij onderzoeken en beoordelen potentiële containerlocaties, voeren locatiebezoeken uit of begeleiden die, beoordelen de beschikbare informatie over kabels en leidingen en meten locaties in. Op basis daarvan werken wij de locatie verder uit.",
      },
      {
        vraag: "Verzorgen jullie ook het onderzoek naar kabels en leidingen?",
        antwoord:
          "Wij beoordelen de beschikbare informatie over kabels en leidingen en bereiden aanvullend onderzoek voor en coördineren dat, zoals proefsleuven of grondradar. Het veldwerk zelf wordt uitgevoerd door gespecialiseerde partijen; wij stemmen dat af en verwerken de resultaten in de voorbereiding.",
      },
      {
        vraag: "Maken jullie inrichtingstekeningen?",
        antwoord:
          "Ja. Het opstellen en uitwerken van inrichtingstekeningen hoort tot onze werkzaamheden, net als het voorbereiden van de werkzaamheden voor de uitvoering.",
      },
      {
        vraag: "Kunnen wij alleen de werkvoorbereiding uitbesteden?",
        antwoord:
          "Ja. Onze werkzaamheden kunnen afzonderlijk of als onderdeel van een groter project worden uitgevoerd. U kunt dus ook alleen het locatieonderzoek of alleen de werkvoorbereiding bij ons beleggen.",
      },
    ],
  },
  {
    slug: "plaatsing",
    h1: "Plaatsen van inzamelmiddelen",
    intro: "Civieltechnische plaatsing van ondergrondse en halfondergrondse containers, inclusief grondwerk, fundering en inbedrijfstelling.",
    meta: {
      titel: "Ondergrondse container plaatsen | B-Advice",
      omschrijving: "B-Advice verzorgt de volledige plaatsing van ondergrondse containers. Locatiebeoordeling, betonputten, oplevering: van A tot Z geregeld.",
    },
    actie: "Bespreek uw project met B-Advice",
    soort: "Plaatsing ondergrondse inzamelmiddelen",
    blokken: [
      { type: "p", tekst: "Civieltechnische plaatsing van ondergrondse en halfondergrondse containers, inclusief grondwerk, fundering en inbedrijfstelling. Wij coördineren het volledige plaatsingsproces, van vergunningaanvraag tot oplevering." },
      { type: "p", tekst: "Onze ervaring met tientallen plaatsingsprojecten per jaar maakt ons tot een betrouwbare partner voor gemeentes en woningcorporaties. Wij werken met gecertificeerde uitvoerders en bewaken kwaliteit en planning gedurende het hele project." },
      { type: "h2", tekst: "Wat wij regelen" },
      { type: "ul", items: [
        "Vergunningaanvraag en administratie",
        "Grondwerk en fundering",
        "Montage en inbedrijfstelling",
        "Oplevering en documentatie",
      ] },
    ],
  },
  {
    slug: "beheer-onderhoud",
    h1: "Beheer, onderhoud & refurbish",
    intro: "Preventief en correctief onderhoud verlengt de levensduur van uw inzamelmiddelen aanzienlijk en bespaart vervangingskosten.",
    meta: {
      titel: "Beheer & onderhoud ondergrondse containers | B-Advice",
      omschrijving: "B-Advice beheert en onderhoudt ondergrondse containers. Preventief onderhoud, refurbish en storingsdienst voor een betrouwbaar containerpark.",
    },
    actie: "Bespreek uw project met B-Advice",
    soort: "Beheer en onderhoud inzamelmiddelen",
    blokken: [
      { type: "p", tekst: "Preventief en correctief onderhoud verlengt de levensduur van uw inzamelmiddelen aanzienlijk en bespaart vervangingskosten. Wij verzorgen reguliere inspecties, reinigingen en reparaties, maar ook complete refurbishment van verouderde containers." },
      { type: "p", tekst: "Na refurbishment presteren containers als nieuw: nieuwe bekleding, mechanische revisie en indien gewenst een update naar de nieuwste veiligheidsstandaarden. Dit is een duurzame en kostenefficiënte keuze voor gemeentes met grote containerparken." },
      { type: "h2", tekst: "Onderhoud en refurbishment" },
      { type: "ul", items: [
        "Periodieke inspecties en reinigingen",
        "Reparaties en vervanging van onderdelen",
        "Complete mechanische revisie",
        "Update naar actuele veiligheidsstandaarden",
      ] },
    ],
  },
  {
    slug: "afvalinzameling",
    h1: "Afvalinzameling & Management",
    intro: "Strategisch advies en operationeel management van het volledige afvalinzamelingsproces, van wijkanalyse tot routeoptimalisatie.",
    meta: {
      titel: "Afvalinzameling & Management | B-Advice",
      omschrijving: "B-Advice adviseert gemeenten bij omgekeerd inzamelen en afvalmanagement. Van strategie tot uitvoering van ondergrondse inzamelsystemen.",
    },
    actie: "Bespreek uw project met B-Advice",
    soort: "Advies afvalinzameling",
    blokken: [
      { type: "p", tekst: "Strategisch advies en operationeel management van het volledige afvalinzamelingsproces. Van wijkanalyse en routeoptimalisatie tot het selecteren van de juiste inzamelmiddelen voor elke locatie. B-Advice begeleidt gemeentes bij het opzetten en verbeteren van hun afvalinzamelingsinfrastructuur." },
      { type: "p", tekst: "Wij analyseren uw huidige situatie en stellen een verbeterplan op dat aansluit bij uw doelstellingen op het gebied van afvalscheiding, kosten en klanttevredenheid. Met onze ervaring bij 40+ gemeentes brengen wij bewezen methodieken naar uw project." },
      { type: "h2", tekst: "Wat wij bieden" },
      { type: "ul", items: [
        "Wijkanalyse en capaciteitsberekening",
        "Routeoptimalisatie voor inzamelvoertuigen",
        "Selectie van passende inzamelmiddelen",
        "Implementatiebegeleiding en evaluatie",
      ] },
    ],
  },
  {
    slug: "projectmanagement",
    h1: "Projectmanagement",
    intro: "Complete projectbegeleiding van initiatief tot oplevering, met bewaking van planning, budget en kwaliteit.",
    meta: {
      titel: "Projectmanagement afvalsystemen | B-Advice",
      omschrijving: "B-Advice begeleidt gemeenten bij het aanleggen van ondergrondse inzamelsystemen: van vergunning en planning tot oplevering en nazorg.",
    },
    actie: "Bespreek uw project met B-Advice",
    soort: "Projectmanagement afvalinfrastructuur",
    blokken: [
      { type: "p", tekst: "Complete projectbegeleiding van initiatief tot oplevering. Wij coördineren alle betrokken partijen (gemeente, aannemer, nutsbedrijven en bewoners) en bewaken planning, budget en kwaliteit. Ons projectmanagement is gericht op een soepel proces met minimale overlast." },
      { type: "p", tekst: "Van kleine vervangingsprojecten tot grootschalige uitrol in nieuwe wijken: B-Advice heeft de kennis en ervaring om elk project succesvol af te ronden. Wij rapporteren transparant en houden u in elke fase op de hoogte." },
      { type: "h2", tekst: "Onze aanpak" },
      { type: "ul", items: [
        "Projectplanning en fasering",
        "Coördinatie van alle betrokken partijen",
        "Budget- en kwaliteitsbewaking",
        "Rapportage en opleverdocumentatie",
      ] },
    ],
  },
  {
    slug: "aanbesteding",
    h1: "Aanbesteding & bestek",
    intro: "Complete bestekken en aanbestedingsdocumenten die voldoen aan alle wettelijke vereisten en actuele marktstandaarden.",
    meta: {
      titel: "Aanbesteding & bestek afvalcontainers | B-Advice",
      omschrijving: "B-Advice helpt gemeenten bij aanbesteding van afvalinfrastructuur. Technisch bestek, programma van eisen en begeleiding van het inkooptraject.",
    },
    actie: "Bespreek uw project met B-Advice",
    soort: "Aanbesteding en bestek",
    blokken: [
      { type: "p", tekst: "Wij stellen complete bestekken en aanbestedingsdocumenten op die voldoen aan alle wettelijke vereisten en actuele marktstandaarden. Van Europese aanbestedingen tot enkelvoudige uitvragen: wij begeleiden het volledige traject." },
      { type: "p", tekst: "Onze bestekken zijn helder, volledig en juridisch waterdicht. Wij hebben ruime ervaring met aanbestedingen voor ondergrondse inzamelmiddelen en weten precies welke criteria relevant zijn voor een succesvolle selectie." },
      { type: "h2", tekst: "Onze diensten" },
      { type: "ul", items: [
        "Opstellen van bestekken en technische omschrijvingen",
        "Begeleiding van Europese aanbestedingsprocedures",
        "Enkelvoudige en meervoudige uitvragen",
        "Beoordeling van inschrijvingen en gunningsadvies",
      ] },
    ],
  },
  {
    slug: "meerjaren-investeringsplan",
    h1: "Meerjaren Investeringsplan",
    intro: "Inzicht in de staat van uw containerpark en de verwachte vervangingsbehoefte de komende jaren.",
    meta: {
      titel: "Meerjaren Investeringsplan containers | B-Advice",
      omschrijving: "Inzicht in toekomstige investeringen in uw containerpark. B-Advice maakt een doordacht meerjaren investeringsplan voor gemeenten.",
    },
    actie: "Bespreek uw project met B-Advice",
    soort: "Meerjaren investeringsplan",
    blokken: [
      { type: "p", tekst: "Een Meerjaren Investeringsplan (MIP) geeft gemeentes inzicht in de staat van hun containerpark en de verwachte vervangingsbehoefte de komende jaren. Wij inventariseren uw bestaande middelen, beoordelen de technische staat en stellen een gefundeerd investeringsplan op." },
      { type: "p", tekst: "Het MIP helpt u budget te plannen, onderhoud te prioriteren en dure noodvervangingen te voorkomen. Wij leveren een helder rapport dat direct bruikbaar is voor uw begrotingscyclus." },
      { type: "h2", tekst: "Wat het MIP oplevert" },
      { type: "ul", items: [
        "Complete inventarisatie van uw containerpark",
        "Technische beoordeling per locatie",
        "Meerjarenplanning voor vervanging en onderhoud",
        "Kostenraming en budgetadvies",
      ] },
    ],
  },
  {
    slug: "bewonersparticipatie",
    h1: "Bewonersparticipatie",
    intro: "Effectieve communicatie met bewoners over wijzigingen in afvalinfrastructuur voor draagvlak en een soepele uitvoering.",
    meta: {
      titel: "Bewonersparticipatie afvalinzameling | B-Advice",
      omschrijving: "Draagvlak creëren voor nieuwe inzamelpunten. B-Advice begeleidt het participatieproces met bewoners bij omgekeerd inzamelen en diftar.",
    },
    actie: "Bespreek uw project met B-Advice",
    soort: "Bewonersparticipatie",
    blokken: [
      { type: "p", tekst: "Effectieve communicatie met bewoners over wijzigingen in de afvalinfrastructuur is essentieel voor draagvlak en een soepele uitvoering. B-Advice begeleidt gemeentes bij informatieavonden, nieuwsbrieven, digitale updates en directe bewonerscontacten." },
      { type: "p", tekst: "Wij zorgen voor duidelijke communicatie over het waarom en hoe van wijzigingen, beantwoorden vragen en verwerken feedback. Een goed participatietraject voorkomt bezwaren en versnelt de uitvoering." },
      { type: "h2", tekst: "Communicatiemiddelen" },
      { type: "ul", items: [
        "Informatieavonden en bewonersbijeenkomsten",
        "Nieuwsbrieven en huis-aan-huis brieven",
        "Digitale updates en websitecontent",
        "Directe bewonerscontacten en vraagbeantwoording",
      ] },
    ],
  },
] as const;


/* ══════════════════════════════════════════════════════════════════════════
   Tekstpagina's (privacy, cookies)

   Letterlijk overgenomen uit de huidige site. Deze teksten zijn juridisch van
   aard; er is niets aan geherformuleerd.

   TE_BEVESTIGEN: het cookiebeleid noemt een versiedatum van mei 2025. Loop na
   of de inhoud nog klopt met wat de site nu doet.
   ══════════════════════════════════════════════════════════════════════════ */

export type TekstBlok =
  | { type: "p"; tekst: string }
  | { type: "h2"; tekst: string }
  | { type: "h3"; tekst: string }
  | { type: "ul"; items: readonly string[] }
  | { type: "tabel"; koppen: readonly string[]; rijen: readonly (readonly string[])[] };

export interface TekstPagina {
  slug: string;
  h1: string;
  intro: string;
  meta: { titel: string; omschrijving: string };
  blokken: readonly TekstBlok[];
}

export const tekstPaginas: readonly TekstPagina[] = [
  {
    slug: "privacy",
    h1: "Privacyverklaring",
    intro: "Hoe B-Advice omgaat met uw persoonsgegevens conform de AVG.",
    meta: { titel: "Privacyverklaring | B-Advice", omschrijving: "Lees hoe B-Advice omgaat met persoonsgegevens conform de AVG. Privacyverklaring voor bezoekers van b-advice.info." },
    blokken: [
        { type: "p", tekst: "Versie 1.0 · Mei 2025  |  KvK 82797811" },
        { type: "p", tekst: "Samenvatting: B-Advice verwerkt alleen gegevens die u zelf verstrekt (contactformulier, e-mail) en gegevens voor websiteanalyse. Wij verkopen uw gegevens nooit aan derden en bewaren ze niet langer dan noodzakelijk." },
        { type: "h2", tekst: "1. Wie zijn wij?" },
        { type: "p", tekst: "B-Advice is een eenmanszaak geregistreerd bij de Kamer van Koophandel onder nummer 82797811, gevestigd aan Achterdijk 26 te Nieuwland (UT). Wij zijn verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring." },
        { type: "p", tekst: "Contactgegevens:\nE-mail: info@b-advice.info\nTelefoon: +31 (6) 431 25 245" },
        { type: "h2", tekst: "2. Welke gegevens verwerken wij?" },
        { type: "p", tekst: "Wij verwerken de volgende persoonsgegevens:" },
        { type: "ul", items: [
          "Naam en contactgegevens (e-mail, telefoonnummer) die u invult via onze contactformulieren",
          "Organisatienaam en functie (indien opgegeven)",
          "Inhoud van berichten en aanvragen die u verstuurt",
          "Technische gegevens: IP-adres, browsertype en bezochte pagina's (anoniem via analyticssoftware)",
        ] },
        { type: "h2", tekst: "3. Waarom verwerken wij uw gegevens?" },
        {
          type: "tabel",
          koppen: ["Doel", "Grondslag"],
          rijen: [
            ["Beantwoorden van uw vragen en aanvragen", "Uitvoering overeenkomst / gerechtvaardigd belang"],
            ["Verbetering van onze website", "Gerechtvaardigd belang"],
            ["Voldoen aan wettelijke verplichtingen", "Wettelijke verplichting"],
          ],
        },
        { type: "h2", tekst: "4. Hoe lang bewaren wij uw gegevens?" },
        { type: "p", tekst: "Wij bewaren persoonsgegevens niet langer dan noodzakelijk:" },
        { type: "ul", items: [
          "Contactformulieren: maximaal 2 jaar na laatste contact",
          "Financiële administratie: 7 jaar (wettelijke bewaarplicht)",
        ] },
        { type: "h2", tekst: "5. Delen wij uw gegevens?" },
        { type: "p", tekst: "Wij delen uw gegevens nooit met derden voor commerciële doeleinden. Wij maken gebruik van de volgende verwerkers:" },
        { type: "ul", items: [
          "Web3Forms: voor het verwerken van formulierinzendingen; doorgifte buiten de EER vindt plaats op basis van de EU-standaardcontractbepalingen",
          "GitHub Pages: voor hosting van de website",
        ] },
        { type: "p", tekst: "Met al onze verwerkers hebben wij verwerkersovereenkomsten gesloten conform de AVG." },
        { type: "h2", tekst: "6. Cookies" },
        { type: "p", tekst: "Onze website gebruikt alleen functionele cookies en lokale opslag; wij plaatsen geen analytische of tracking-cookies. Meer informatie vindt u in ons cookiebeleid." },
        { type: "h2", tekst: "7. Uw rechten" },
        { type: "p", tekst: "Op grond van de AVG heeft u de volgende rechten:" },
        { type: "ul", items: [
          "Inzage: U kunt opvragen welke gegevens wij van u verwerken",
          "Rectificatie: U kunt onjuiste gegevens laten corrigeren",
          "Verwijdering: U kunt verzoeken uw gegevens te laten verwijderen",
          "Bezwaar: U kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd belang",
          "Overdraagbaarheid: U kunt uw gegevens opvragen in een machineleesbaar formaat",
        ] },
        { type: "p", tekst: "Stuur uw verzoek naar info@b-advice.info. Wij reageren binnen 30 dagen." },
        { type: "h2", tekst: "8. Beveiliging" },
        { type: "p", tekst: "Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beveiligen tegen ongeautoriseerde toegang, verlies of misbruik. Onze website maakt gebruik van HTTPS-versleuteling." },
        { type: "h2", tekst: "9. Klachten" },
        { type: "p", tekst: "Heeft u een klacht over de verwerking van uw persoonsgegevens? U kunt een klacht indienen bij de Autoriteit Persoonsgegevens via autoriteitpersoonsgegevens.nl." },
        { type: "h2", tekst: "10. Wijzigingen" },
        { type: "p", tekst: "Wij behouden het recht deze privacyverklaring te wijzigen. De meest actuele versie vindt u altijd op deze pagina. Bij ingrijpende wijzigingen informeren wij u via e-mail." },
        { type: "h2", tekst: "11. Contact" },
        { type: "p", tekst: "Voor vragen over deze privacyverklaring kunt u contact opnemen via info@b-advice.info of ons contactformulier." },
    ],
  },
  {
    slug: "cookies",
    h1: "Cookiebeleid",
    intro: "Welke cookies B-Advice gebruikt en hoe u uw voorkeuren beheert.",
    meta: { titel: "Cookiebeleid | B-Advice", omschrijving: "Het cookiebeleid van B-Advice: welke cookies we gebruiken op b-advice.info en hoe u uw voorkeuren kunt instellen." },
    blokken: [
        { type: "p", tekst: "Versie 1.0 · Mei 2025" },
        { type: "h2", tekst: "Wat zijn cookies?" },
        { type: "p", tekst: "Cookies zijn kleine tekstbestanden die bij een bezoek aan onze website op uw apparaat worden opgeslagen. Ze zorgen ervoor dat de website goed functioneert en helpen ons de website te verbeteren." },
        { type: "h2", tekst: "Welke cookies gebruiken wij?" },
        { type: "h3", tekst: "Noodzakelijke cookies" },
        { type: "p", tekst: "Deze cookies zijn essentieel voor het functioneren van de website. Zonder deze cookies werken bepaalde functies niet correct." },
        {
          type: "tabel",
          koppen: ["Naam", "Doel", "Bewaartijd"],
          rijen: [
            ["b_advice_consent", "Slaat uw cookievoorkeur op zodat de banner niet herhaaldelijk verschijnt", "Permanent (localStorage)"],
          ],
        },
        { type: "h3", tekst: "Analytische cookies" },
        { type: "p", tekst: "Wij plaatsen op dit moment geen analytische of tracking-cookies. Mocht dit in de toekomst veranderen, dan vragen wij hiervoor eerst uw toestemming via een cookiebanner en werken wij dit beleid bij." },
        { type: "h2", tekst: "Uw cookievoorkeur beheren" },
        { type: "p", tekst: "U kunt uw cookievoorkeuren op elk moment aanpassen. Klik op de knop hieronder om de cookiebanner opnieuw te tonen:" },
        { type: "p", tekst: "Daarnaast kunt u cookies blokkeren via de instellingen van uw browser. Let op: het blokkeren van noodzakelijke cookies kan de werking van de website beïnvloeden." },
        { type: "h2", tekst: "Cookies van derden" },
        { type: "p", tekst: "Onze website maakt gebruik van Web3Forms voor het verwerken van formulierinzendingen. Web3Forms plaatst geen cookies bij bezoekers; de inhoud van het formulier wordt bij verzending via hun dienst aan ons doorgestuurd. Zie het privacybeleid van Web3Forms voor meer informatie." },
        { type: "h2", tekst: "Meer informatie" },
        { type: "p", tekst: "Voor vragen over ons cookiebeleid kunt u contact opnemen via info@b-advice.info. Meer informatie over privacy vindt u in onze privacyverklaring." },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   Contact

   De access key van Web3Forms is bedoeld om openbaar te zijn en staat ook in
   de huidige site.

   TE_BEVESTIGEN: zet in het Web3Forms-dashboard de domeinrestrictie op
   b-advice.info aan. Zonder die instelling kan iedereen die de sleutel
   uitleest het maandelijkse inzendquotum opmaken.
   ══════════════════════════════════════════════════════════════════════════ */
export const contact = {
  meta: {
    titel: "Contact | B-Advice",
    omschrijving:
      "Neem contact op met B-Advice over projectleiding, locatieonderzoek of " +
      "werkvoorbereiding rondom ondergrondse afvalcontainers.",
  },
  h1: "Bespreek uw project met B-Advice",
  intro:
    "Vertel kort waar uw project staat en waar u ondersteuning bij zoekt. " +
    "Wij reageren binnen één werkdag.",
  web3formsSleutel: "28c0f073-516d-4fe1-a111-8d987ee1bbb6",
  onderwerpen: [
    "Projectleiding en projectbegeleiding",
    "Locatieonderzoek en werkvoorbereiding",
    "Onderzoek naar kabels en leidingen",
    "Inrichtingstekeningen en uitvoeringsvoorbereiding",
    "Advies over ondergrondse inzamelvoorzieningen",
    "Plaatsen van inzamelmiddelen",
    "B-Organized platform",
    "Overig",
  ],
  reactietijd: "Wij reageren binnen één werkdag",
} as const;

/* ══════════════════════════════════════════════════════════════════════════
   Overige pagina's, letterlijk overgenomen uit de huidige site.
   ══════════════════════════════════════════════════════════════════════════ */

export const bOrganized = {
  slug: "b-organized",
  meta: {
    titel: "B-Organized: containerbeheer software | B-Advice",
    omschrijving:
      "B-Organized is het digitale platform voor containerbeheer. Beheer uw " +
      "containerpark, plan onderhoud en monitor vulgraden via één dashboard.",
  },
  h1: "B-Organized",
  intro:
    "Het digitale platform voor volledig containerbeheer. Gemeenten en " +
    "afvalverwerkers beheren hun containerpark overzichtelijk, snel en " +
    "schaalbaar via één dashboard.",
  kopAlles: "Alles in één platform",
  leadAlles:
    "B-Organized brengt alle informatie over uw containerpark samen. Van " +
    "werkvoorbereiding tot lediging: alles inzichtelijk en beheersbaar.",
  kenmerken: [
    "Kanban-overzicht per gemeente en wijk",
    "Containerregistratie met kaartweergave",
    "Takenbeheer en gebruikersrollen",
    "Bijlages en notities per container",
  ],
  kopStappen: "Hoe werkt B-Organized?",
  leadStappen: "In drie stappen aan de slag met digitaal containerbeheer.",
  stappen: [
    {
      titel: "Toegang",
      tekst:
        "Neem contact op met B-Advice om toegang te krijgen tot het platform. " +
        "Wij richten uw organisatie en containerpark in.",
    },
    {
      titel: "Inrichten",
      tekst:
        "Voeg uw containerlocaties toe via de kaartweergave of importeer " +
        "bestaande data. Wij helpen u bij de initiële opzet.",
    },
    {
      titel: "Beheren",
      tekst:
        "Wijs taken toe, beheer onderhoudsstatus en houd alles bij via het " +
        "Kanban-dashboard. Altijd en overal beschikbaar.",
    },
  ],
  slotTekst: "Vraag een demo aan of log direct in op B-Organized.",
  loginUrl: "https://b-organized.info",
} as const;

/** Pagina's waar nog aan gewerkt wordt. Eerlijk gelabeld in plaats van gevuld. */
export const binnenkortPaginas = [
  {
    slug: "b-covered",
    meta: {
      titel: "B-Covered: locatiemeting containers | B-Advice",
      omschrijving:
        "B-Covered biedt professionele locatiemeting voor containerplaatsingen. " +
        "Binnenkort beschikbaar via B-Advice.",
    },
    h1: "B-Covered",
    intro: "Uw partner voor inmeten op maat.",
    tekst: "Wij werken aan deze pagina. Binnenkort vindt u hier meer informatie.",
  },
  {
    slug: "producten",
    meta: {
      titel: "Producten ondergrondse containers | B-Advice",
      omschrijving:
        "Overzicht van ondergrondse containers en inzamelmiddelen die B-Advice " +
        "levert en plaatst voor gemeenten en afvalverwerkers in Nederland.",
    },
    h1: "Producten",
    intro: "Ondergrondse containers en inzamelmiddelen.",
    tekst:
      "Wij werken aan deze pagina. Binnenkort vindt u hier meer informatie over " +
      "onze producten.",
  },
] as const;

/* ══════════════════════════════════════════════════════════════════════════
   Over ons, projecten en de locatieaanvraag. De teksten komen letterlijk van
   de huidige site; er is niets bij verzonnen.
   ══════════════════════════════════════════════════════════════════════════ */

export const overOns = {
  meta: {
    titel: "Over B-Advice | Specialist afvalinfrastructuur",
    omschrijving:
      "B-Advice ondersteunt gemeenten en afvalinzamelaars met ruim twee decennia " +
      "ervaring in ondergrondse afvalinfrastructuur. Ons verhaal, ons team en onze aanpak.",
  },
  bovenregel: "Sinds 2013",
  h1: "Specialisten in afvalinzameling",
  kopAccent: "afvalinzameling",
  lead:
    "B-Advice ondersteunt gemeentes en afvalverwerkers met ruim twee decennia " +
    "ervaring in ondergrondse afvalinfrastructuur.",
  tijdlijn: [
    { jaar: "2001", tekst: "Start loopbaan in inzameling en recycling van bedrijfsafvalstoffen" },
    { jaar: "2007", tekst: "Focus verlegd naar ondergrondse en bovengrondse onderlossende systemen" },
    { jaar: "2010", tekst: "Specialisatie in gemeentelijke inzameling: logistiek, techniek en civieltechniek" },
    { jaar: "2013", tekst: "Oprichting B-Advice door Ricardo Beset" },
    { jaar: "2022", tekst: "Lancering B-Organized platform voor digitaal containerbeheer" },
    { jaar: "Nu", tekst: "40+ gemeentes bediend, 7.000+ containers beheerd" },
  ],
  geschiedenis: {
    bovenregel: "Achtergrond",
    kop: "Onze geschiedenis",
    kopAccent: "geschiedenis",
    alineas: [
      "B-Advice bestaat sinds 2013, maar onze werkzaamheden in afvalinzameling en " +
        "verwerking gaan terug tot 2001. Oprichter Ricardo Beset begon zijn carrière in " +
        "inzameling en recycling van bedrijfsafvalstoffen. Met de opkomst van ondergrondse " +
        "afvalcontainers in Nederland verlegde hij de focus naar ondergrondse en " +
        "bovengrondse onderlossende systemen.",
      "Die vroege ervaring met zowel de techniek als de logistiek van afvalinzameling " +
        "vormt tot op de dag van vandaag de basis van onze aanpak: wij begrijpen het " +
        "systeem van binnenuit.",
      "Sinds 2010 richten wij ons primair op gemeentelijke inzameling, met specialisme " +
        "in logistiek, techniek en civieltechniek. De rode draad: inzamelmiddelen, " +
        "afvalinzameling en afvalscheiding, altijd met oog voor de eindgebruiker, zowel " +
        "bewoners als inzamelaars.",
      "Alle kennis die we opdoen in het veld, verwerken we direct in ons platform " +
        "B-Organized. Zo profiteert elke klant van de collectieve ervaring van tientallen " +
        "projecten per jaar.",
    ],
  },
  team: {
    bovenregel: "De mensen achter B-Advice",
    kop: "Het team",
    lead: "Drie mensen. Eén missie: afvalbeheer eenvoudiger en slimmer maken.",
    leden: [
      {
        naam: "Ricardo Beset",
        rol: "Directeur en senior projectmanager",
        foto: "/assets/team/ric.webp",
        tekst:
          "Meer dan 20 jaar ervaring in afvalinzameling, van bedrijfsafval tot complexe " +
          "gemeentelijke infrastructuurprojecten. Oprichter van B-Advice en drijvende " +
          "kracht achter B-Organized.",
      },
      {
        naam: "Jayden Beset",
        rol: "Werkvoorbereider",
        foto: "/assets/team/jay.webp",
        tekst:
          "Verantwoordelijk voor de voorbereiding en coördinatie van plaatsingsprojecten. " +
          "Werkt dagelijks met B-Organized om projecten van initiatief naar uitvoering te " +
          "begeleiden.",
      },
      {
        naam: "Leon Lauran",
        rol: "Developer en projectleider",
        foto: "/assets/team/leon.webp",
        tekst:
          "Ontwikkelaar van het B-Organized platform en projectleider voor technische " +
          "implementaties. Combineert softwarekennis met praktijkervaring in de " +
          "afvalinzameling.",
      },
    ],
  },
  aanpak: {
    bovenregel: "Werkwijze",
    kop: "Onze aanpak",
    kopAccent: "aanpak",
    punten: [
      {
        titel: "Specialisme",
        tekst:
          "Diepgaande kennis van logistiek, techniek en civieltechniek. Geen generalist: " +
          "wij kennen elk onderdeel van het systeem van binnenuit.",
      },
      {
        titel: "Eigen processen",
        tekst:
          "Eigen werkprocessen en complete administratie maken efficiëntie mogelijk. Van " +
          "aanbesteding tot oplevering werken wij gestructureerd en voorspelbaar.",
      },
      {
        titel: "SMART systemen",
        tekst:
          "Niet alleen slimme inzamelsystemen, maar ook slimme registratie en beheer. Via " +
          "B-Organized is elk containerpunt inzichtelijk en beheersbaar.",
      },
    ],
  },
} as const;


export const locatieaanvraag = {
  meta: {
    titel: "Locatieaanvraag ondergrondse container | B-Advice",
    omschrijving:
      "Dien een locatie in voor beoordeling. Wij toetsen de haalbaarheid en logistiek " +
      "en koppelen binnen twee werkdagen terug.",
  },
  h1: "Locatieaanvraag",
  kopAccent: "aanvraag",
  lead:
    "Vul het formulier in zodat wij uw locatie kunnen beoordelen en een passend " +
    "voorstel kunnen maken.",
  stappen: [
    { titel: "Aanvraag indienen", tekst: "Vul het formulier in met locatiegegevens en uw contactinformatie." },
    { titel: "Beoordeling", tekst: "Wij beoordelen de locatie op haalbaarheid en logistiek." },
    { titel: "Terugkoppeling", tekst: "U ontvangt binnen 2 werkdagen een reactie met ons advies." },
    { titel: "Offerte op maat", tekst: "Bij akkoord stellen wij een offerte op maat op." },
  ],
  meten: {
    kop: "B-Covered meten",
    tekst:
      "Wij meten locaties professioneel in met GPS-apparatuur voor nauwkeurige coördinaten.",
    link: { url: "/b-covered/", label: "Meer over B-Covered" },
  },
  bevestiging: {
    kop: "Aanvraag ontvangen",
    tekst: "Bedankt voor uw locatieaanvraag. Wij nemen zo spoedig mogelijk contact met u op.",
  },
  /** De vier stappen van het formulier, in dezelfde volgorde als nu. */
  onderdelen: [
    {
      titel: "Contactgegevens",
      sub: "Uw persoonlijke informatie",
      velden: [
        { soort: "tekst", naam: "naam", label: "Naam", type: "text", hint: "Uw volledige naam", verplicht: true, autocomplete: "name" },
        { soort: "tekst", naam: "email", label: "E-mailadres", type: "email", hint: "uw@email.nl", verplicht: true, autocomplete: "email" },
        { soort: "tekst", naam: "telefoon", label: "Telefoonnummer", type: "tel", hint: "+31 6 12 34 56 78", verplicht: false, autocomplete: "tel" },
        { soort: "tekst", naam: "organisatie", label: "Organisatie", type: "text", hint: "Gemeente of bedrijfsnaam", verplicht: true, autocomplete: "organization" },
      ],
    },
    {
      titel: "Locatiegegevens",
      sub: "Technische informatie over de locatie",
      velden: [
        { soort: "tekst", naam: "adres", label: "Adres of omschrijving locatie", type: "text", hint: "Straatnaam, plaatsnaam", verplicht: true, autocomplete: "street-address" },
        { soort: "tekst", naam: "coord_x", label: "X-coördinaat (RD)", type: "text", hint: "bijvoorbeeld 125000", verplicht: false },
        { soort: "tekst", naam: "coord_y", label: "Y-coördinaat (RD)", type: "text", hint: "bijvoorbeeld 483000", verplicht: false },
        { soort: "tekst", naam: "kenmerk", label: "Kenmerk of referentie", type: "text", hint: "Interne projectcode of locatienaam", verplicht: false },
        { soort: "keuze", naam: "plaatsing", label: "Plaatsing", opties: ["Eigen grond", "Openbaar terrein", "Onbekend"] },
      ],
    },
    {
      titel: "Locatiekenmerken",
      sub: "Huidige situatie en werkzaamheden",
      velden: [
        { soort: "keuze", naam: "proefsleuven", label: "Proefsleuven gewenst?", opties: ["Ja", "Nee", "Onbekend"] },
        { soort: "keuze", naam: "ingemeten", label: "Locatie al ingemeten?", opties: ["Ja", "Nee", "Onbekend"] },
        { soort: "keuze", naam: "voertuig", label: "Bezocht met inzamelvoertuig?", opties: ["Ja", "Nee", "Onbekend"] },
      ],
    },
    {
      titel: "Aanvullende informatie",
      sub: "Type container en opmerkingen",
      velden: [
        { soort: "keuze", naam: "inrichting", label: "Standaardinrichting", opties: ["Standaard", "Geen voorkeur", "Afwijkend"] },
        {
          soort: "tekstvak",
          naam: "opmerkingen",
          label: "Opmerkingen of aanvullende informatie",
          hint: "Beschrijf eventuele bijzonderheden, obstakels of andere relevante informatie",
          verplicht: false,
        },
      ],
    },
  ],
} as const;

export const nietGevonden = {
  meta: {
    titel: "Pagina niet gevonden | B-Advice",
    omschrijving: "Deze pagina bestaat niet of is verplaatst.",
  },
  h1: "Deze pagina bestaat niet",
  tekst:
    "De link klopt niet meer of de pagina is verplaatst. Hieronder staan de plekken " +
    "waar de meeste bezoekers naar op zoek zijn.",
  suggesties: [
    { url: "/diensten/", label: "Alle diensten" },
    { url: "/nieuws/", label: "Nieuws en achtergrond" },
    { url: "/over-ons/", label: "Over B-Advice" },
    { url: "/contact/", label: "Contact" },
  ],
} as const;
