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
