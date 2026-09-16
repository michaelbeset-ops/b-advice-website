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
    { url: "/projecten/", label: "Projecten" },
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
    lead: "Advies, projectleiding en werkvoorbereiding voor gemeenten en afvalinzamelaars.",
    alineas: [
      "B-Advice ondersteunt gemeenten en afvalinzamelaars bij de voorbereiding, " +
        "organisatie en uitvoering van projecten rondom ondergrondse " +
        "inzamelvoorzieningen. Van locatieonderzoek en technische voorbereiding " +
        "tot projectleiding en begeleiding van de uitvoering.",
      "Wij zijn landelijk inzetbaar voor tijdelijke projectleiding, " +
        "specialistische adviesopdrachten en projectmatige ondersteuning.",
    ],
    tweedeActie: { label: "Bekijk onze diensten", url: "/diensten/" },
    /** Feiten uit de huidige site. Het percentage klanttevredenheid dat er
     *  eerder stond is weggelaten, omdat er geen bron bij te leveren is. */
    feiten: [
      { label: "Gemeenten bediend", waarde: "40+" },
      { label: "Containers in beheer", waarde: "7.000+" },
      { label: "Werkgebied", waarde: "Heel Nederland" },
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
    lead:
      "Afzonderlijk in te zetten of als samenhangend pakket, van eerste " +
      "locatieonderzoek tot oplevering van de uitvoering.",
    /** De vijf diensten uit de briefing, elk direct doorklikbaar. */
    items: [
      {
        url: "/diensten/projectleiding/",
        titel: "Projectleiding en projectbegeleiding",
        tekst:
          "Tijdelijke projectleiding en interim-ondersteuning, van de eerste " +
          "voorbereidingen tot en met de oplevering.",
      },
      {
        url: "/diensten/locatieonderzoek/",
        titel: "Locatieonderzoek en werkvoorbereiding",
        tekst:
          "Onderzoeken, beoordelen en uitwerken van geschikte containerlocaties, " +
          "inclusief locatiebezoek en inmeten.",
      },
      {
        url: "/diensten/locatieonderzoek/#kabels-en-leidingen",
        titel: "Onderzoek naar kabels en leidingen",
        tekst:
          "Beoordelen van de beschikbare informatie en het voorbereiden en " +
          "co\u00f6rdineren van aanvullend onderzoek.",
      },
      {
        url: "/diensten/locatieonderzoek/#inrichtingstekeningen",
        titel: "Inrichtingstekeningen en uitvoeringsvoorbereiding",
        tekst:
          "Opstellen en uitwerken van inrichtingstekeningen en het voorbereiden " +
          "van de werkzaamheden voor de uitvoering.",
      },
      {
        url: "/diensten/",
        titel: "Advies over ondergrondse inzamelvoorzieningen",
        tekst:
          "Specialistisch advies over inzamelstructuur, inzamelmiddelen, beheer " +
          "en vervanging.",
      },
    ],
  },

  platform: {
    bovenregel: "Ons platform",
    kop: "B-Organized: digitaal containerbeheer",
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

  projecten: {
    bovenregel: "Projecten en referenties",
    kop: "Projecten en referenties",
    lead:
      "Projecten waarin B-Advice de voorbereiding, werkvoorbereiding of " +
      "projectleiding verzorgde.",
    /** Er staat nog geen project gepubliceerd, dus geen kaarten maar een
     *  eerlijke lege staat. Zodra er projecten zijn komt hier een overzicht. */
    leeg:
      "De eerste referentieprojecten worden op dit moment samengesteld. Wilt u " +
      "nu al weten of wij ervaring hebben met een vergelijkbaar project, neem " +
      "dan gerust contact op.",
    link: { url: "/projecten/", label: "Alle projecten en referenties" },
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
        { url: "/projecten/", label: "Projecten en referenties" },
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
      { label: "Projecten en referenties", url: "/projecten/" },
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
      { label: "Projecten en referenties", url: "/projecten/" },
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
