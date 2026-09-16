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
