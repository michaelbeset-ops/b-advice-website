/**
 * De nieuwsartikelen. Ze staan in een eigen bestand en niet in site.ts, omdat
 * twaalf volledige artikelen dat bestand onleesbaar zouden maken. site.ts
 * blijft de plek voor de teksten van de vaste pagina's.
 *
 * Een artikel is een lijst blokken. Die blokken zijn dezelfde bouwstenen die
 * de redactie in de bestaande artikelen gebruikt: alinea's, tussenkoppen,
 * opsommingen, stappen, een kader, een waarschuwing, een citaat, cijfers,
 * veelgestelde vragen, een video en een afsluitende oproep. In tekstvelden
 * mag simpele opmaak staan (<strong>, <em>, <a>); die komt uit de bestaande
 * artikelen en wordt als HTML weergegeven.
 */

export type ArtikelBlok =
  | { type: "p"; tekst: string }
  | { type: "h2"; tekst: string }
  | { type: "h3"; tekst: string }
  | { type: "streep" }
  | { type: "lijst"; items: string[] }
  | { type: "stappen"; items: { titel: string; tekst: string }[] }
  | { type: "citaat"; tekst: string }
  | { type: "kader"; titel: string; inhoud: ({ type: "p"; tekst: string } | { type: "lijst"; items: string[] })[] }
  | { type: "let-op"; label: string; tekst: string }
  | { type: "cijfers"; label?: string; titel?: string; sub?: string; bron?: string; items: { waarde: string; label: string }[] }
  | { type: "faq"; items: { vraag: string; antwoord: string }[] }
  | { type: "video"; src: string; titel: string }
  | { type: "bron"; tekst: string }
  | { type: "cta"; label?: string; kop: string; tekst: string };

export interface Artikel {
  slug: string;
  categorie: string;
  /** ISO-datum, gebruikt voor de volgorde en voor schema.org. */
  datum: string;
  h1: string;
  lead: string;
  /** Korte samenvatting voor het nieuwsoverzicht. */
  samenvatting: string;
  meta: { titel: string; omschrijving: string };
  blokken: ArtikelBlok[];
}

export const nieuwsPagina = {
  meta: {
    titel: "Nieuws over afvalinzameling en ondergrondse containers | B-Advice",
    omschrijving:
      "Analyses en uitleg over ondergrondse afvalcontainers, diftar, PMD, textiel en containerbeheer, geschreven voor gemeenten en afvalinzamelaars.",
  },
  h1: "Nieuws en achtergrond",
  kopAccent: "achtergrond",
  lead: "Wat er speelt in de afvalinzameling, vertaald naar wat het betekent voor uw containerpark.",
};

// Nieuwste artikel eerst.
export const artikelen: Artikel[] = [
  {
    slug: "afval-naast-ondergrondse-containers",
    samenvatting: "Op tien locaties worden containers opgeknapt en krijgen omwonenden uitleg. Een verzorgde plek helpt — maar niet elke bijplaatsing is een kwestie van gedrag.",
    categorie: "Analyse",
    datum: "2026-09-16",
    h1: "Afval naast ondergrondse containers: Rd4 en vier gemeenten pakken bijplaatsingen aan",
    lead: "Op tien locaties worden containers opgeknapt en krijgen omwonenden uitleg. Een verzorgde plek helpt — maar niet elke bijplaatsing is een kwestie van gedrag.",
    meta: {
      titel: "Afval naast ondergrondse containers aanpakken",
      omschrijving: "Rd4 en vier gemeenten pakken afval naast ondergrondse containers aan. Wat werkt tegen bijplaatsingen, en wat is in de voorbereiding al op te lossen?",
    },
    blokken: [
      {
        type: "p",
        tekst: "Rd4 en de gemeenten Beekdaelen, Brunssum, Heerlen en Kerkrade zijn een gezamenlijke aanpak gestart om <strong>afval naast ondergrondse containers</strong> terug te dringen. Op tien locaties worden de glas-, papier- en textielcontainers opgeknapt, voorzien van nieuwe stickers en van een informatiebord. De aanpak komt voort uit de wens van alle tien Rd4-gemeenten om bijplaatsingen aan te pakken.",
      },
      {
        type: "h2",
        tekst: "Wat er op de tien locaties verandert",
      },
      {
        type: "p",
        tekst: "De maatregelen zijn bewust praktisch. De containers worden schoongemaakt en opgeknapt, er komen nieuwe stickers op en bij elke locatie komt een informatiebord te staan. Daarnaast krijgen inwoners uitleg over wat zij kunnen doen wanneer een container vol of defect is — juist op die momenten ontstaan de meeste bijplaatsingen.",
      },
      {
        type: "p",
        tekst: "Omwonenden worden actief betrokken. Via de Rd4-app ontvangen zij updates over de aangepakte locaties en tips om de omgeving schoon te houden. De campagneboodschap ‘Doe gewoon, houd je buurt schoon’ is bedacht door een Rd4-medewerker die dagelijks ondergrondse containers schoonmaakt en het afval ernaast opruimt.",
      },
      {
        type: "h2",
        tekst: "Waarom een verzorgde locatie verschil maakt",
      },
      {
        type: "p",
        tekst: "Dozen, glas, zakken en grofvuil naast een container vervuilen de omgeving, leiden tot ergernis in de buurt, trekken ongedierte aan en kosten geld om op te ruimen. De aanpak van Rd4 en de gemeenten gaat uit van een eenvoudige gedachte: een nette en verzorgde plek nodigt minder uit om afval achter te laten.",
      },
      {
        type: "citaat",
        tekst: "“Als een locatie schoon en verzorgd oogt, zijn mensen eerder geneigd om deze ook netjes te houden.” — Rd4",
      },
      {
        type: "p",
        tekst: "Die redenering sluit aan bij wat wij in de praktijk zien. Een locatie die er verwaarloosd bij ligt, verlaagt de drempel om er nog iets bij te zetten. Andersom werkt het ook: op een plek die er verzorgd uitziet, valt de eerste zak op.",
      },
      {
        type: "h2",
        tekst: "Bijplaatsing is niet alleen een kwestie van gedrag",
      },
      {
        type: "p",
        tekst: "Tegelijk is niet elke bijplaatsing met communicatie op te lossen. Een deel ervan komt voort uit hoe de locatie is ingericht en gedimensioneerd. Een container die regelmatig vol zit, is geen gedragsprobleem maar een capaciteits- of ledigingsvraagstuk. En een inworpopening waar een verhuisdoos niet doorheen past, levert voorspelbaar een doos ernaast op.",
      },
      {
        type: "p",
        tekst: "Vaak speelt ook de fysieke ruimte mee. Waar een strook stoep, een plantvak of een lage muur een logische plek biedt om iets neer te zetten, gebeurt dat ook. Waar die ruimte er niet is, verdwijnt de verleiding grotendeels vanzelf.",
      },
      {
        type: "kader",
        titel: "Wat bepaalt of er naast een container wordt bijgeplaatst?",
        inhoud: [
          {
            type: "lijst",
            items: [
              "Het aantal huishoudens per container in verhouding tot de ledigingsfrequentie",
              "Of de inworpopening past bij wat mensen daadwerkelijk aanbieden",
              "Of er fysiek ruimte is om iets naast de zuil neer te zetten",
              "De ligging ten opzichte van looproutes, parkeerplaatsen en de aanrijroute",
              "Zicht vanuit omliggende woningen en verlichting in de avonduren",
              "Hoe eenvoudig een storing te melden is — en hoe snel die wordt verholpen",
            ],
          },
        ],
      },
      {
        type: "h2",
        tekst: "Wat in de voorbereiding al op te lossen is",
      },
      {
        type: "p",
        tekst: "Het lastige is dat de meeste van deze factoren vastliggen op het moment dat de locatie wordt gekozen en de inrichtingstekening wordt gemaakt. Tegen de tijd dat er een campagne nodig is, zijn ze niet meer eenvoudig te wijzigen. Bij een vervangings- of uitbreidingsronde ligt dat anders: dat is het natuurlijke moment om locaties die structureel problemen geven opnieuw te beoordelen.",
      },
      {
        type: "p",
        tekst: "In de praktijk gaat het dan om het combineren van twee dingen: de meldingen en opruimrondes die de inzamelaar al heeft, en een beoordeling van de locatie zelf. Rd4 wijst daar zelf op: de medewerkers die dagelijks in de wijken staan, weten waar het misgaat. Die kennis is bruikbare input voor de voorbereiding van de volgende ronde.",
      },
      {
        type: "p",
        tekst: "B-Advice ondersteunt gemeenten en afvalinzamelaars bij precies dat traject: van <a href=\"/diensten/locatieonderzoek/\">locatieonderzoek en werkvoorbereiding</a> tot <a href=\"/diensten/projectleiding/\">projectleiding</a> bij de uitvoering. Zie ook onze eerdere artikelen over <a href=\"/nieuws/omgekeerd-inzamelen/\">omgekeerd inzamelen</a> en <a href=\"/nieuws/diftar-betalen-naar-gebruik/\">diftar</a>, die allebei van invloed zijn op het aanbod bij ondergrondse containers.",
      },
      {
        type: "streep",
      },
      {
        type: "cta",
        kop: "Bijplaatsingen aanpakken begint bij de locatie",
        tekst: "Wij beoordelen containerlocaties op capaciteit, bereikbaarheid en inpassing, en werken de aanpassing uit tot en met de inrichtingstekening.",
      },
      {
        type: "p",
        tekst: "Dit artikel is gebaseerd op het bericht <a href=\"https://www.beekdaelen.nl/rd4-en-gemeenten-pakken-afval-naast-containers-aan\" target=\"_blank\" rel=\"noopener\">‘Rd4 en gemeenten pakken afval naast containers aan’</a> van de gemeente Beekdaelen, 14 september 2026. De aangehaalde citaten komen uit dat bericht.",
      },
    ],
  },
  {
    slug: "pmd-verzamelcontainers-hoogbouw-verpact-2026",
    samenvatting: "Verpact, VNG en NVRD schrappen de vergoeding voor PMD uit openbare verzamelcontainers. Enschede laat zien hoe lastig deze omslag in de praktijk is.",
    categorie: "Analyse",
    datum: "2026-09-10",
    h1: "PMD-verzamelcontainers verdwijnen uit hoogbouw: wat betekent dit voor gemeenten?",
    lead: "Verpact, VNG en NVRD schrappen vergoeding voor PMD uit openbare verzamelcontainers. Enschede loopt voorop in de discussie — wat de nieuwe afspraken betekenen voor de ondergrondse infrastructuur.",
    meta: {
      titel: "PMD-containers hoogbouw verdwijnen 2026",
      omschrijving: "Verpact, VNG en NVRD schrappen PMD-verzamelcontainers uit hoogbouw. Wat de nieuwe Samenwerkingsovereenkomst Verpakkingen betekent voor gemeenten en.",
    },
    blokken: [
      {
        type: "p",
        tekst: "Sinds 1 januari 2026 geldt een nieuwe Samenwerkingsovereenkomst Verpakkingen tussen Verpact, de Vereniging van Nederlandse Gemeenten (VNG) en de NVRD. Een van de meest ingrijpende gevolgen: <strong>PMD-verzamelcontainers</strong> voor bewoners van hoogbouw verdwijnen uit het straatbeeld. Terwijl gemeenten dit najaar volop bezig zijn de gevolgen hiervan in te richten, laat Enschede zien hoe lastig deze omslag in de praktijk uitpakt.",
      },
      {
        type: "p",
        tekst: "In dit artikel leggen we uit wat er precies verandert, waarom Verpact deze knop heeft omgedraaid en welke keuzes gemeenten nu moeten maken voor hun ondergrondse containerinfrastructuur.",
      },
      {
        type: "h2",
        tekst: "Wat is er veranderd?",
      },
      {
        type: "p",
        tekst: "Verpact, VNG en NVRD bereikten een onderhandelingsresultaat over een nieuwe overeenkomst voor de inzameling en verwerking van verpakkingen, die per 1 januari 2026 is ingegaan. Een kernpunt: huishoudens in laagbouw kunnen plastic, metaal en drankkartons (PMD) voortaan alleen nog aanbieden via hun eigen container. De boven- en ondergrondse verzamelcontainers in de openbare ruimte, waar voorheen ook bewoners van hoogbouw hun PMD konden inleveren, verdwijnen uit het straatbeeld.",
      },
      {
        type: "h2",
        tekst: "Waarom Verpact deze knop omdraait",
      },
      {
        type: "p",
        tekst: "De reden is financieel-kwalitatief van aard. Voor PMD dat via openbare verzamelcontainers wordt ingezameld, wordt geen vergoeding meer verstrekt vanwege de hoge mate van vervuiling van deze stroom. Enschede is daarvan een sprekend voorbeeld: vorig jaar werd daar 99 procent van het PMD uit verzamelcontainers afgekeurd. Verzamelcontainers in de openbare ruimte trekken nu eenmaal bijmenging van ander afval aan, wat de kwaliteit — en daarmee de recyclingwaarde — van de stroom sterk verlaagt.",
      },
      {
        type: "citaat",
        tekst: "Een verzamelcontainer die voor 99 procent wordt afgekeurd, levert geen grondstof meer op — hij levert vooral kosten op.",
      },
      {
        type: "h2",
        tekst: "Drie opties voor hoogbouw",
      },
      {
        type: "p",
        tekst: "Voor bewoners van hoogbouw, die vaak geen ruimte hebben voor een eigen PMD-container, blijven binnen de nieuwe overeenkomst drie alternatieven over.",
      },
      {
        type: "kader",
        titel: "Opties voor gemeenten",
        inhoud: [
          {
            type: "lijst",
            items: [
              "<strong>Zakkeninzameling.</strong> Bewoners bieden PMD aan in zakken op een vaste inzameldag, zonder vaste verzamelvoorziening.",
              "<strong>Deelvoorziening.</strong> Een afgesloten inzamelpunt per wooncomplex, toegankelijk voor de bewoners van dat specifieke gebouw.",
              "<strong>Nascheiding.</strong> PMD gaat samen met restafval de container in en wordt achteraf machinaal gescheiden bij de verwerker.",
            ],
          },
        ],
      },
      {
        type: "p",
        tekst: "Elke optie heeft eigen consequenties voor de ondergrondse infrastructuur. Zakkeninzameling vraagt geen extra container, maar wel een oplossing voor zwerfafval rond de inzameldag. Een deelvoorziening vraagt om extra ruimte per complex. Nascheiding raakt direct aan de discussie die we eerder beschreven over <a href=\"/nieuws/bronscheiding-nascheiding-pmd-2026/\">bron- versus nascheiding van PMD</a>.",
      },
      {
        type: "h2",
        tekst: "Enschede als casus: gemeenten zoeken naar de beste route",
      },
      {
        type: "p",
        tekst: "In Enschede leidt de verplichte omslag tot een stevige discussie in de gemeenteraad. De gemeente moet kiezen tussen de drie bovengenoemde opties voor haar hoogbouwbewoners, terwijl eerdere ervaringen met zakkeninzameling al werden afgeschaft vanwege overlast. Nascheiding wordt daarbij serieus overwogen als alternatief, ook al ligt diftar in Enschede vooralsnog niet ter discussie. De casus laat zien dat de landelijke afspraak op papier eenvoudig lijkt, maar dat de uitvoering per gemeente maatwerk vraagt.",
      },
      {
        type: "h2",
        tekst: "Wat dit betekent voor de ondergrondse infrastructuur",
      },
      {
        type: "p",
        tekst: "Voor gemeenten die hun ondergrondse containerpark beheren, ontstaat een concrete planningsvraag: wat gebeurt er met bestaande ondergrondse PMD-containers bij hoogbouwlocaties die straks niet meer worden vergoed? Een aantal richtingen die gemeenten nu verkennen:",
      },
      {
        type: "lijst",
        items: [
          "Bestaande ondergrondse PMD-containers ombouwen tot restafvalcontainers, in combinatie met nascheiding bij de verwerker.",
          "Locaties herbestemmen voor andere stromen, zoals textiel of papier, waar nog wel behoefte aan extra capaciteit bestaat.",
          "Voor complexen die kiezen voor een deelvoorziening: een kleinschalige, afgesloten ondergrondse of halfverdiepte voorziening per gebouw in plaats van een openbare wijkcontainer.",
        ],
      },
      {
        type: "p",
        tekst: "Welke route het beste past, hangt sterk af van de lokale situatie — vergelijkbaar met de afweging tussen bron- en nascheiding die elders al breed wordt gevoerd. Belangrijk is dat gemeenten deze wijziging niet als losse actie behandelen, maar meenemen in de bredere planning van hun containerpark.",
      },
      {
        type: "h2",
        tekst: "Conclusie",
      },
      {
        type: "p",
        tekst: "De nieuwe Samenwerkingsovereenkomst Verpakkingen maakt een einde aan de open PMD-verzamelcontainer voor hoogbouw zoals gemeenten die kennen. Voor gemeenten is dit geen tijdelijke aanpassing, maar een structurele wijziging die vraagt om een herziening van de ondergrondse infrastructuur op locaties waar voorheen PMD werd ingezameld. Wie deze wijziging nu meeneemt in de planning, voorkomt dat de omslag straks ad hoc en gehaast moet gebeuren.",
      },
      {
        type: "p",
        tekst: "Lees meer over <a href=\"/diensten/afvalinzameling/\">afvalinzameling & management</a> of bekijk onze andere <a href=\"/nieuws/\">nieuwsartikelen</a>.",
      },
      {
        type: "streep",
      },
      {
        type: "cta",
        kop: "Advies over herinrichting van uw PMD-infrastructuur",
        tekst: "B-Advice adviseert gemeenten over de technische herbestemming van bestaande ondergrondse containers nu de vergoeding voor PMD uit verzamelcontainers wegvalt.",
      },
    ],
  },
  {
    slug: "hitteprotocol-afvalinzameling-hittegolf-2026",
    samenvatting: "Tientallen gemeenten pasten halverwege augustus hun inzameling aan vanwege de hitte. Wat leert het hitteprotocol ons over de kracht van ondergronds inzamelen?",
    categorie: "Analyse",
    datum: "2026-08-24",
    h1: "Hittegolf van augustus 2026: een stresstest voor de gemeentelijke afvalinzameling",
    lead: "Van Peel en Maas tot Den Haag pasten inzameldiensten halverwege augustus massaal hun roosters aan. Wat het hitteprotocol blootlegt over de kwetsbaarheid van bovengronds inzamelen, en wat gemeenten er structureel aan kunnen doen.",
    meta: {
      titel: "Hitteprotocol afvalinzameling: de les van 2026",
      omschrijving: "Tijdens de hittegolf van augustus 2026 pasten tientallen gemeenten hun afvalinzameling aan. Waarom ondergrondse containers de hitte veel beter doorstaan.",
    },
    blokken: [
      {
        type: "p",
        tekst: "Halverwege augustus 2026 kleurde de kaart van Nederland dieprood. Vanaf dinsdag 11 augustus liepen de temperaturen in grote delen van het land op tot boven de dertig graden, en overal gebeurde hetzelfde: gemeenten en inzamelaars activeerden hun hitteprotocol voor de afvalinzameling. Vuilniswagens reden een uur eerder uit, milieustraten sloten vroeger en inwoners kregen het verzoek hun containers de avond ervoor al buiten te zetten. Wie de gemeentelijke nieuwspagina's van die week naast elkaar legt, ziet geen incident maar een patroon. En dat patroon zegt iets over hoe toekomstbestendig onze inzamelstructuur eigenlijk is.",
      },
      {
        type: "h2",
        tekst: "Wat er in de week van 11 augustus gebeurde",
      },
      {
        type: "p",
        tekst: "Het rijtje gemeenten dat de inzameling aanpaste, is opvallend lang. <a href=\"https://www.gemeentelandvancuijk.nl/nieuws/2026/08/10/afvalinzameling-start-een-uur-eerder-op-12-13-en-14-augustus\" target=\"_blank\" rel=\"noopener\">Land van Cuijk</a> liet de wagens op 12, 13 en 14 augustus om 6.00 uur in plaats van 7.00 uur starten. <a href=\"https://www.boekel.nl/in-de-gemeente/nieuws/2026/08/11/afvalinzameling-start-1-uur-eerder-op-woensdag-12-augustus-donderdag-13-augustus-en-vrijdag-14-augustus\" target=\"_blank\" rel=\"noopener\">Boekel</a> deed exact hetzelfde. In <a href=\"https://www.gemeentemaashorst.nl/nieuws/2026/08/10/aangepaste-tijden-afvalinzameling-vanaf-dinsdag-11-augustus\" target=\"_blank\" rel=\"noopener\">Maashorst</a> gold het aangepaste rooster zelfs van dinsdag tot en met zaterdag, met een starttijd van 6.30 uur. <a href=\"https://www.peelenmaas.nl/nieuws/2026/08/12/hitte-aangepaste-tijden-voor-afvalinzameling-en-milieupark\" target=\"_blank\" rel=\"noopener\">Peel en Maas</a> vervroegde naast de inzameling ook de openingstijden van het Milieupark, en <a href=\"https://www.gemeentealtena.nl/nieuws/nieuwsbericht/artikel/aangepaste-afvalinzameling-en-openingstijden-milieustations-vanwege-warmte\" target=\"_blank\" rel=\"noopener\">Altena</a> paste zowel de routes als de milieustations aan.",
      },
      {
        type: "p",
        tekst: "Hetzelfde beeld in de Randstad en daarbuiten. In <a href=\"https://www.zuidplas.nl/hitteprotocol-aangepaste-openingstijden-afvalinzameling-en-afvalbrengstations\" target=\"_blank\" rel=\"noopener\">Zuidplas</a> werkte de buitendienst onder het hitteprotocol van 6.00 tot 14.00 uur. In <a href=\"https://langstraatmedia.nl/hitteprotocol-in-de-langstraat-afval-wordt-eerder-opgehaald/\" target=\"_blank\" rel=\"noopener\">De Langstraat</a> ging het afval eerder de wagen in, in de <a href=\"https://dmgdeurne.nl/nieuwe-hittegolf-op-komst-in-regio-deurne-afval-wordt-eerder-opgehaald-en-milieustraat-korter-geopend/\" target=\"_blank\" rel=\"noopener\">regio Deurne</a> werd de milieustraat korter geopend en in Den Haag gingen de vuilniswagens <a href=\"https://rijswijksdagblad.nl/den%20haag%20%26%20regio/haagse-vuilniswagens-vanwege-hitte-opnieuw-eerder-op-pad\" target=\"_blank\" rel=\"noopener\">opnieuw eerder op pad</a>. Regionale inzamelaars riepen het hitteprotocol <a href=\"https://www.omroepzout.nl/hitteprotocol-van-kracht-bij-regionale-afvalinzamelaars/\" target=\"_blank\" rel=\"noopener\">breed uit</a>. De reden is steeds dezelfde: beladers en chauffeurs doen fysiek zwaar werk en moeten uit de middaghitte blijven, terwijl het afval zelf bij deze temperaturen sneller gaat broeien en stinken.",
      },
      {
        type: "citaat",
        tekst: "Eén hete week en tientallen gemeenten moeten hun complete inzamellogistiek omgooien. Dat is geen incident, dat is een structurele kwetsbaarheid.",
      },
      {
        type: "h2",
        tekst: "Waarom hitte en afval zo'n slechte combinatie zijn",
      },
      {
        type: "p",
        tekst: "Het probleem zit niet alleen bij de mensen op de wagen. Afval zelf gedraagt zich anders bij dertig graden. Vooral gft breekt in de zon razendsnel af, met stankoverlast en maden als gevolg. Voorlichtingsorganisatie <a href=\"https://www.milieucentraal.nl/minder-afval/afval-scheiden/tips-voor-een-schone-gft-bak/\" target=\"_blank\" rel=\"noopener\">Milieu Centraal</a> adviseert huishoudens daarom nat afval eerst uit te laten lekken, vlees- en visresten in papier te wikkelen en de bak in de schaduw te zetten. Inzamelaar <a href=\"https://www.radbv.nl/2026/06/18/warmweertips-voor-gft-pmd-en-restafval/\" target=\"_blank\" rel=\"noopener\">RAD</a> publiceerde deze zomer vergelijkbare warmweertips voor gft, pmd en restafval. En <a href=\"https://www.rodi.nl/purmerend/nieuws/501679/gemeente-purmerend-haalt-deze-zomermaanden-de-gft-container-vaker-op\" target=\"_blank\" rel=\"noopener\">Purmerend</a> ging nog een stap verder: daar wordt de gft-container in de zomermaanden simpelweg vaker geleegd, met alle extra inzamelkosten van dien.",
      },
      {
        type: "p",
        tekst: "Daar komt een minder zichtbaar risico bij. Hoge temperaturen vergroten de kans dat beschadigde lithium-ion batterijen in het afval thermisch op hol slaan. In een broeiende afvalmassa is dat extra gevaarlijk, zoals we eerder beschreven in ons artikel over <a href=\"/nieuws/batterijbranden-afvalinzameling/\">batterijbranden in de afvalinzameling</a>. Hitte is dus niet alleen een arbo-vraagstuk en een hygiëneprobleem, maar ook een veiligheidsrisico in de keten.",
      },
      {
        type: "kader",
        titel: "Wat gemeenten deden tijdens de hittegolf",
        inhoud: [
          {
            type: "lijst",
            items: [
              "Inzameling een tot anderhalf uur vervroegd, starttijden van 6.00 of 6.30 uur",
              "Werktijden buitendienst ingekort tot uiterlijk 14.00 uur (hitteprotocol)",
              "Milieustraten en afvalbrengstations eerder open en eerder dicht",
              "Inwoners gevraagd containers al de avond ervoor buiten te zetten",
              "Extra gft-ledigingen in de zomermaanden tegen stank en maden",
              "Warmweertips verspreid over gft, pmd en restafval",
            ],
          },
        ],
      },
      {
        type: "h2",
        tekst: "De structurele les: ondergronds heeft geen hitteprotocol nodig",
      },
      {
        type: "p",
        tekst: "Al deze maatregelen hebben één ding gemeen: het zijn noodverbanden rond een inzamelmodel dat afval bovengronds laat staan, in de zon, in zakken en minicontainers, wachtend op een vaste ophaaldag. Precies daar wringt het bij hitte. Een ondergrondse container werkt fundamenteel anders. Enkele meters onder het maaiveld blijft de temperatuur ook tijdens een hittegolf relatief laag en stabiel, waardoor afval veel langzamer broeit en stinkt. Er staan geen zakken op straat die opengetrokken worden door meeuwen of ratten, en de grote opslagcapaciteit betekent dat een gemiste of verschoven inzameldag niet meteen tot overlast leidt.",
      },
      {
        type: "p",
        tekst: "Ook de logistieke kant verandert. Waar een huis-aan-huisroute op een vaste dag moet rijden, hoe heet het ook is, wordt een netwerk van ondergrondse containers geleegd op het moment dat het nodig is. Met vulgraadsensoren en een beheerplatform zoals <a href=\"/b-organized/\">B-Organized</a> zien beheerders precies welke containers vol raken. Ledigingsroutes kunnen dan in de koele ochtenduren worden gepland, met minder ritten en minder uren in de hitte voor het personeel. Zo wordt het hitteprotocol geen paniekmaatregel meer, maar een kwestie van slim plannen met data.",
      },
      {
        type: "citaat",
        tekst: "Enkele meters onder het maaiveld is het ook tijdens een hittegolf koel en stabiel. Het afval broeit langzamer, de straat blijft schoon en de planning blijft overeind.",
      },
      {
        type: "h2",
        tekst: "Hitte wordt de norm, niet de uitzondering",
      },
      {
        type: "p",
        tekst: "Wie denkt dat dit een eenmalige zomer was, kijkt er naast. Uit de <a href=\"https://www.knmi.nl/nederland-nu/klimatologie/lijsten/hittegolven\" target=\"_blank\" rel=\"noopener\">hittegolvenlijst van het KNMI</a> blijkt dat hittegolven in De Bilt de afgelopen decennia duidelijk vaker voorkomen dan in de eerste helft van de vorige eeuw. Het KNMI legt in zijn <a href=\"https://www.knmi.nl/kennis-en-datacentrum/uitleg/hittegolf\" target=\"_blank\" rel=\"noopener\">uitleg over hittegolven</a> uit dat vijf zomerse dagen op rij, waarvan drie tropisch, de drempel vormen. Die drempel wordt in het huidige klimaat steeds makkelijker gehaald. Voor gemeenten betekent dit dat aangepaste inzameltijden, extra ledigingen en klachten over stank geen uitzonderlijke kostenpost meer zijn, maar een jaarlijks terugkerende post op de begroting.",
      },
      {
        type: "p",
        tekst: "De vraag voor beleidsmakers is dan ook niet of de inzameling hittebestendig moet worden, maar hoe. Gemeenten die toch al voor keuzes staan rond vervanging van inzamelmiddelen, verdichting van wijken of een nieuw afvalbeleidsplan, doen er verstandig aan klimaatbestendigheid expliciet mee te wegen. Ondergrondse inzameling scoort daarin op drie fronten tegelijk: minder hinder voor inwoners, betere arbeidsomstandigheden voor inzamelaars en een planning die niet omvalt bij het eerste weeralarm. Lees meer over onze aanpak van <a href=\"/diensten/plaatsing/\">het plaatsen van inzamelmiddelen</a> en het <a href=\"/diensten/beheer-onderhoud/\">beheer en onderhoud</a> van ondergrondse containers, of verdiep je in <a href=\"/diensten/afvalinzameling/\">afvalinzameling en management</a>.",
      },
      {
        type: "streep",
      },
      {
        type: "cta",
        kop: "Klaar voor de volgende hete zomer?",
        tekst: "B-Advice adviseert gemeenten over hittebestendige, ondergrondse afvalinfrastructuur: van locatiekeuze en plaatsing tot datagestuurd beheer met B-Organized.",
      },
    ],
  },
  {
    slug: "afvalstoffenbelasting-verhoging-2028-gemeenten",
    samenvatting: "De belasting op afvalverbranding stijgt fors richting 2028 en 2035. Waarom minder restafval per inwoner nu een financiële noodzaak wordt.",
    categorie: "Analyse",
    datum: "2026-08-20",
    h1: "Afvalstoffenbelasting fors omhoog vanaf 2028: wat betekent dit voor gemeenten?",
    lead: "Het kabinet verhoogt de belasting op afvalverbranding stapsgewijs tot 2035. Waarom minder restafval per inwoner vanaf nu een financiële noodzaak wordt in plaats van alleen een duurzaamheidsdoel.",
    meta: {
      titel: "Afvalstoffenbelasting 2028: gevolgen voor gemeenten",
      omschrijving: "De afvalstoffenbelasting stijgt fors richting 2028 en 2035. Wat dit betekent voor gemeenten, de afvalstoffenheffing en het belang van minder restafval per.",
    },
    blokken: [
      {
        type: "p",
        tekst: "Terwijl gemeenten volop bezig zijn met de overstap naar bron- of nascheiding en de gevolgen van de PPWR, kondigde het kabinet een maatregel aan die de financiële urgentie van afvalreductie flink vergroot: een forse verhoging van de <strong>afvalstoffenbelasting</strong>. Voor gemeenten betekent dit dat restafval de komende jaren aanmerkelijk duurder wordt om te verwerken — met directe gevolgen voor de afvalstoffenheffing van inwoners.",
      },
      {
        type: "p",
        tekst: "In dit artikel zetten we de cijfers op een rij, leggen we uit waarom de impact per gemeente verschilt en bespreken we waarom minder restafval per inwoner vanaf nu niet alleen een duurzaamheidsdoel is, maar ook een directe kostenbesparing.",
      },
      {
        type: "h2",
        tekst: "Wat het kabinet precies heeft aangekondigd",
      },
      {
        type: "p",
        tekst: "Het kabinet verhoogt zowel de afvalstoffenbelasting als de CO2-heffing voor afvalverbrandingsinstallaties. De afvalstoffenbelasting stijgt van €39,71 per 1.000 kilo in 2025 naar €90,21 per 1.000 kilo in 2028 — meer dan een verdubbeling. Vanaf 2035 loopt het tarief verder op naar €113,81 per 1.000 kilo. Samen leveren beide maatregelen de rijksoverheid structureel minimaal €567 miljoen aan belastinginkomsten per jaar op.",
      },
      {
        type: "citaat",
        tekst: "Wat vandaag nog restafval is, wordt de komende jaren stap voor stap duurder om kwijt te raken dan de meeste gemeenten gewend zijn.",
      },
      {
        type: "h2",
        tekst: "Wanneer wordt het voelbaar?",
      },
      {
        type: "p",
        tekst: "De lastenverzwaring is niet in één keer voelbaar, maar loopt gefaseerd op. Vanaf 2027 merken gemeenten de eerste effecten, waarna de kosten stapsgewijs toenemen tot het structurele niveau van €567 miljoen per jaar in 2030. Voor gemeentelijke begrotingen betekent dit dat de kostprijs van restafvalverwerking in korte tijd fors verandert, terwijl veel bestaande verwerkingscontracten daar niet automatisch op zijn ingericht.",
      },
      {
        type: "h2",
        tekst: "Waarom de impact per gemeente verschilt",
      },
      {
        type: "p",
        tekst: "Niet elke gemeente wordt even hard geraakt. De financiële gevolgen hangen sterk af van twee factoren.",
      },
      {
        type: "kader",
        titel: "Bepalende factoren per gemeente",
        inhoud: [
          {
            type: "lijst",
            items: [
              "<strong>Restafval per inwoner.</strong> Gemeenten die er al in slagen om restafval laag te houden, worden verhoudingsgewijs minder hard geraakt dan gemeenten met een hoge hoeveelheid restafval per inwoner.",
              "<strong>Bestaande verwerkingscontracten.</strong> Gemeenten met langlopende contracten waarin de verhoging niet is verdisconteerd, lopen het risico dat de kosten later in één keer worden doorbelast.",
              "<strong>Mate van scheiding aan de bron.</strong> Hoe meer PMD, gft, papier en textiel al gescheiden worden aangeboden, hoe kleiner de restafvalstroom die tegen het nieuwe, hogere tarief wordt verbrand.",
            ],
          },
        ],
      },
      {
        type: "h2",
        tekst: "Kritiek: risico voor circulariteit",
      },
      {
        type: "p",
        tekst: "De maatregel is niet onomstreden. Politieke partijen in de Tweede Kamer hebben kritiek geuit op de manier waarop de lasten van deze belastingverhoging bij de afvalsector en daarmee bij gemeenten en burgers terechtkomen. De zorg is dat een generieke lastenverzwaring niet automatisch tot minder restafval leidt, maar vooral tot hogere woonlasten — tenzij gemeenten hun infrastructuur ook daadwerkelijk aanpassen om restafval te verminderen.",
      },
      {
        type: "h2",
        tekst: "Wat dit betekent voor de inzamelinfrastructuur",
      },
      {
        type: "p",
        tekst: "Voor gemeenten die hun ondergrondse containersysteem beheren of vernieuwen, verschuift het financiële argument voor restafvalreductie van \"wenselijk\" naar \"urgent\". Instrumenten die eerder vooral als duurzaamheidsmaatregel golden, worden nu ook een directe kostenpost-beperking:",
      },
      {
        type: "lijst",
        items: [
          "<a href=\"/nieuws/diftar-betalen-naar-gebruik/\">Diftar</a>, waarbij inwoners op basis van geregistreerd gebruik betalen, stimuleert direct minder restafval aan te bieden en meer te scheiden.",
          "<a href=\"/nieuws/omgekeerd-inzamelen/\">Omgekeerd inzamelen</a> verlaagt de drempel voor het scheiden van grondstoffen en verhoogt de drempel voor restafval.",
          "Vulgraadsensoren en goed gepositioneerde ondergrondse containers voor PMD, papier, glas en textiel maken scheiden voor inwoners laagdrempeliger, wat de restafvalstroom direct verkleint.",
        ],
      },
      {
        type: "p",
        tekst: "Gemeenten die deze instrumenten al hebben ingevoerd, staan er financieel gunstiger voor zodra de nieuwe tarieven vanaf 2027 doorwerken. Gemeenten die dit nog moeten inrichten, doen er goed aan de businesscase voor uitbreiding van hun ondergrondse infrastructuur nu te herzien met de nieuwe verbrandingskosten als uitgangspunt.",
      },
      {
        type: "h2",
        tekst: "Conclusie",
      },
      {
        type: "p",
        tekst: "De aangekondigde verhoging van de afvalstoffenbelasting maakt restafvalreductie tot een van de belangrijkste financiële hefbomen voor gemeenten richting 2028 en verder. Wie nu investeert in een infrastructuur die scheiden vergemakkelijkt en restafval registreert, beperkt de impact van de hogere verbrandingskosten aanzienlijk voordat deze in 2027 en 2030 volledig doorwerken.",
      },
      {
        type: "p",
        tekst: "Lees meer over <a href=\"/diensten/meerjaren-investeringsplan/\">het meerjaren investeringsplan</a> voor uw containerpark of bekijk onze andere <a href=\"/nieuws/\">nieuwsartikelen</a>.",
      },
      {
        type: "streep",
      },
      {
        type: "cta",
        kop: "Grip op restafvalkosten via een toekomstbestendige infrastructuur",
        tekst: "B-Advice helpt gemeenten de businesscase voor hun ondergrondse containersysteem te herzien, met de stijgende verwerkingskosten van restafval als uitgangspunt.",
      },
    ],
  },
  {
    slug: "textielinzameling-ondergrondse-containers-2026",
    samenvatting: "Sinds 2025 is gescheiden textielinzameling EU-breed verplicht. Wat betekent dit voor gemeenten en waar loopt het in de praktijk vast?",
    categorie: "Uitleg",
    datum: "2026-08-12",
    h1: "Textielinzameling in 2026: de verplichting, de knelpunten en de rol van ondergrondse containers",
    lead: "Sinds 2025 moet textiel in de hele EU gescheiden worden ingezameld. Wat betekent dit voor gemeenten en welke plek verdient de textielcontainer in de ondergrondse infrastructuur?",
    meta: {
      titel: "Textielinzameling 2026: verplichting & ondergrondse containers",
      omschrijving: "Gescheiden textielinzameling is sinds 2025 EU-breed verplicht. Wat betekent dit voor gemeenten in 2026 en welke rol spelen ondergrondse textielcontainers?",
    },
    blokken: [
      {
        type: "p",
        tekst: "Sinds 1 januari 2025 geldt in de hele Europese Unie een verplichting tot gescheiden <strong>textielinzameling</strong>. Kleding, schoenen, gordijnen en beddengoed mogen niet langer bij het restafval, ongeacht de kwaliteit of staat waarin het textiel verkeert. Voor gemeenten is dit geen vrijblijvend advies meer, maar een wettelijke verplichting — en dat raakt direct aan de inrichting van de openbare inzamelinfrastructuur, waaronder ondergrondse containersystemen.",
      },
      {
        type: "p",
        tekst: "In dit artikel bespreken we wat de textielverplichting inhoudt, welke knelpunten gemeenten in 2026 tegenkomen en welke rol ondergrondse textielcontainers daarbij spelen.",
      },
      {
        type: "h2",
        tekst: "Wat houdt de verplichting precies in?",
      },
      {
        type: "p",
        tekst: "De Europese Kaderrichtlijn afvalstoffen schrijft voor dat textiel apart wordt ingezameld, net als papier, glas, metaal en kunststof. Onder textiel vallen niet alleen draagbare kleding, maar ook huishoudtextiel zoals lakens, handdoeken en gordijnen. Het maakt daarbij niet uit of het materiaal nog herdraagbaar is: ook versleten of beschadigd textiel moet apart worden aangeboden, zodat het alsnog kan worden gerecycled tot bijvoorbeeld isolatiemateriaal, poetsdoeken of nieuwe vezels.",
      },
      {
        type: "p",
        tekst: "Voor gemeenten betekent dit dat textiel een volwaardige plek moet krijgen naast de bestaande stromen restafval, PMD, papier, glas en gft — met een eigen inzamelvoorziening, communicatie richting inwoners en verwerkingsroute.",
      },
      {
        type: "h2",
        tekst: "Waar loopt het in de praktijk vast?",
      },
      {
        type: "p",
        tekst: "Hoewel de verplichting sinds 2025 van kracht is, blijkt de uitvoering in 2026 op meerdere punten weerbarstig.",
      },
      {
        type: "kader",
        titel: "De belangrijkste knelpunten",
        inhoud: [
          {
            type: "lijst",
            items: [
              "<strong>Dekkingsgraad.</strong> Niet elke wijk heeft een textielcontainer binnen loopafstand, waardoor inwoners toch teruggrijpen naar de restafvalbak.",
              "<strong>Kwaliteitsverschil met kringloop.</strong> Textiel dat via een ondergrondse container wordt ingezameld, is gemiddeld natter en vervuilder dan textiel dat via kringloopwinkels binnenkomt, wat de recyclingwaarde drukt.",
              "<strong>Diefstal en bijplaatsing.</strong> Volle of overvolle textielcontainers trekken bijplaatsingen aan en zijn gevoelig voor het illegaal legen door derden, die het textiel buiten de officiële keten om verkopen.",
              "<strong>Beperkte ruimte in de ondergrond.</strong> In dichtbebouwde wijken is er vaak al weinig ruimte voor restafval, PMD, papier en glas — een extra textielvoorziening vraagt om zorgvuldige planning.",
            ],
          },
        ],
      },
      {
        type: "citaat",
        tekst: "Een textielverplichting op papier is niet hetzelfde als een werkend inzamelsysteem in de straat. Dat vraagt om een doordachte plek in de ondergrondse infrastructuur.",
      },
      {
        type: "h2",
        tekst: "De ondergrondse textielcontainer als oplossing",
      },
      {
        type: "p",
        tekst: "Een ondergrondse textielcontainer biedt op meerdere knelpunten uitkomst. Doordat het textiel ondergronds en afgesloten wordt opgeslagen, blijft het beter beschermd tegen weersinvloeden zoals regen, wat de kwaliteit en dus de recyclingwaarde ten goede komt. Een gesloten, vergrendeld inwerpsysteem vermindert bovendien het risico op diefstal en illegale legingen, omdat alleen de erkende inzamelaar er toegang toe heeft.",
      },
      {
        type: "p",
        tekst: "Net als bij restafval en PMD kunnen textielcontainers worden uitgerust met vulgraadsensoren. Zo weet de inzamelaar precies wanneer een container geleegd moet worden, in plaats van op een vaste route te rijden ongeacht de vulgraad. Dat is met name relevant voor textiel, waarvan de inzamelfrequentie doorgaans lager en onregelmatiger is dan bij restafval.",
      },
      {
        type: "h2",
        tekst: "Textiel inpassen in een bestaand containerpark",
      },
      {
        type: "p",
        tekst: "Voor gemeenten die al werken met ondergrondse inzameling voor restafval, PMD, papier en glas, is de vraag vaak niet óf textiel wordt toegevoegd, maar hóe. Een paar overwegingen die daarbij spelen:",
      },
      {
        type: "lijst",
        items: [
          "Niet elke locatie heeft fysiek ruimte voor een extra ondergrondse bak — soms is een bovengrondse textielzuil of een centrale locatie per buurt een realistischer alternatief.",
          "Een goede locatiekeuze houdt rekening met looproutes, zichtbaarheid en sociale veiligheid, net als bij andere afvalstromen.",
          "Samenwerking met erkende textielinzamelaars en kringloopbedrijven bepaalt mede welk containertype en welke ledigingsfrequentie het beste past.",
        ],
      },
      {
        type: "p",
        tekst: "Deze afwegingen liggen in het verlengde van de bredere discussie rond <a href=\"/nieuws/bronscheiding-nascheiding-pmd-2026/\">bron- en nascheiding van PMD</a>: ook daar geldt dat de capaciteit die een wijk aan afval produceert leidend is voor de inrichting van de ondergrondse infrastructuur, niet andersom.",
      },
      {
        type: "h2",
        tekst: "Conclusie: textiel verdient een vaste plek in de planning",
      },
      {
        type: "p",
        tekst: "De EU-verplichting maakt gescheiden textielinzameling tot een structureel onderdeel van het gemeentelijk afvalbeleid, niet tot een tijdelijke actie. Gemeenten die hun ondergrondse infrastructuur nu al herzien vanwege PPWR, diftar of omgekeerd inzamelen, doen er goed aan textiel in dezelfde exercitie mee te nemen. Zo voorkomen ze dat textiel achteraf als losse toevoeging in een al volgepland containerpark moet worden gepropt.",
      },
      {
        type: "p",
        tekst: "Lees meer over <a href=\"/diensten/afvalinzameling/\">afvalinzameling & management</a> of bekijk onze andere <a href=\"/nieuws/\">nieuwsartikelen</a>.",
      },
      {
        type: "streep",
      },
      {
        type: "cta",
        kop: "Advies over textielinzameling in uw containerpark",
        tekst: "B-Advice adviseert gemeenten over de technische inpassing van nieuwe afvalstromen zoals textiel in bestaande ondergrondse containersystemen.",
      },
    ],
  },
  {
    slug: "bronscheiding-nascheiding-pmd-2026",
    samenvatting: "PMD-nascheiding wint terrein in 2026. De verschillen met bronscheiding, wat de PPWR betekent en welke rol ondergrondse containers spelen.",
    categorie: "Analyse",
    datum: "2026-08-07",
    h1: "Bronscheiding of nascheiding van PMD in 2026: wat betekent het voor ondergrondse afvalinzameling?",
    lead: "Steeds meer gemeenten kiezen voor nascheiding van PMD. Wat verandert er, wat betekent de nieuwe EU-verpakkingsverordening (PPWR) en welke rol speelt ondergrondse infrastructuur?",
    meta: {
      titel: "Nascheiding PMD 2026: bronscheiding vs. nascheiding",
      omschrijving: "PMD-nascheiding wint terrein in 2026. Ontdek de verschillen met bronscheiding, wat de nieuwe EU-verpakkingsregels (PPWR) betekenen en welke rol ondergrondse.",
    },
    blokken: [
      {
        type: "p",
        tekst: "De manier waarop Nederland plastic, metaal en drankkartons (PMD) inzamelt, staat dit jaar volop ter discussie. Terwijl verreweg de meeste gemeenten hun inwoners nog vragen om PMD thuis apart te houden, kiezen steeds meer gemeenten voor <strong>nascheiding</strong>: al het afval gaat samen de container in en de scheiding gebeurt achteraf bij de verwerker. Voor gemeenten, woningcorporaties en projectontwikkelaars die nadenken over hun inzamelinfrastructuur is dit een cruciale keuze — en die keuze raakt direct aan het ontwerp van ondergrondse containersystemen.",
      },
      {
        type: "p",
        tekst: "In dit artikel zetten we de verschillen tussen bronscheiding en nascheiding op een rij, kijken we naar de nieuwste ontwikkelingen in 2026 en leggen we uit welke rol een goed doordachte ondergrondse infrastructuur hierbij speelt.",
      },
      {
        type: "h2",
        tekst: "Wat is het verschil tussen bronscheiding en nascheiding?",
      },
      {
        type: "p",
        tekst: "Het onderscheid is in de kern eenvoudig, maar de gevolgen voor de inzameling zijn groot.",
      },
      {
        type: "p",
        tekst: "Bij <strong>bronscheiding</strong> houden inwoners PMD thuis gescheiden van het restafval. Ze leveren het apart in, bijvoorbeeld in een aparte minicontainer of via een aparte ondergrondse container. Bij <strong>nascheiding</strong> gooien inwoners hun PMD gewoon bij het restafval; de afvalverwerker haalt de plastic verpakkingen, metalen en drankkartons er later machinaal uit.",
      },
      {
        type: "p",
        tekst: "Een belangrijk misverstand: nascheiding geldt uitsluitend voor PMD. Volgens de brancheorganisatie voor afval- en reinigingsmanagement kan nascheiding alleen worden toegepast op plastic verpakkingen, metalen verpakkingen en drankkartons — papier, glas, gft, textiel en klein chemisch afval moeten altijd aan de bron gescheiden blijven. Nascheiding maakt dus geen einde aan afval scheiden; het verandert alleen wie welke stap uitvoert.",
      },
      {
        type: "h2",
        tekst: "De trend van 2026: nascheiding wint terrein",
      },
      {
        type: "p",
        tekst: "Waar bronscheiding jarenlang de norm was, is 2026 een kantelpunt. Aflopende verwerkingscontracten dwingen veel gemeenten en afvalregio's om een fundamentele keuze te maken, en die valt steeds vaker in het voordeel van nascheiding uit.",
      },
      {
        type: "p",
        tekst: "De regio Gooi en Vechtstreek is een sprekend voorbeeld. Vanaf 1 juli 2026 hoeven inwoners daar hun PMD niet meer apart weg te gooien: PMD en restafval worden samen ingezameld en pas bij de afvalverwerker gescheiden. Het besluit viel nadat het bestaande verwerkingscontract afliep — precies het moment waarop de kosten en baten van beide systemen opnieuw tegen elkaar worden afgewogen.",
      },
      {
        type: "p",
        tekst: "Toch blijft het beeld genuanceerd. Volgens onderzoek van Milieu Centraal doet verreweg het grootste deel van de gemeenten nog aan bronscheiding, al komt nascheiding op steeds meer plekken voor. Grote steden als Amsterdam, Rotterdam en Utrecht zijn de afgelopen jaren deels overgestapt, vooral omdat inwoners in hoogbouw weinig ruimte hebben om PMD apart te houden. Ook plattelandsgemeenten kiezen soms voor nascheiding, met name wanneer er een nascheidingsinstallatie in de buurt ligt.",
      },
      {
        type: "h2",
        tekst: "Welke methode is beter?",
      },
      {
        type: "p",
        tekst: "Er is geen eenduidig antwoord — en dat is precies waarom de discussie zo lang aanhoudt. Uit een feitenonderzoek naar bron- en nascheiding bleek dat het gemiddelde ketenrendement van beide methoden in 2023 dicht bij elkaar lag, met slechts een marginaal verschil. Welke aanpak beter uitpakt, hangt sterk af van de lokale situatie.",
      },
      {
        type: "kader",
        titel: "Belangrijkste afwegingen",
        inhoud: [
          {
            type: "lijst",
            items: [
              "<strong>Type bebouwing.</strong> Bronscheiding levert gemiddeld betere resultaten op in laagbouw en landelijke gebieden. Nascheiding is juist passend in dichtbebouwde gebieden met veel hoogbouw.",
              "<strong>Kwaliteit van het materiaal.</strong> Bij goede bronscheiding blijft het PMD schoner, waardoor meer plastic geschikt is voor hoogwaardige recycling.",
              "<strong>Gemak voor de inwoner.</strong> Nascheiding vraagt minder van de inwoner en vermindert het aantal aparte containers dat nodig is.",
              "<strong>Communicatie en gedrag.</strong> Een scheidingswijzer, een goede afval-app, feedback op scheidingsgedrag en de inzet van afvalcoaches wegen zwaar mee.",
            ],
          },
        ],
      },
      {
        type: "citaat",
        tekst: "Bron- en nascheiding zijn beide prima instrumenten om tot afvalscheiding te komen. De juiste keuze is dus geen principekwestie, maar een lokale optimalisatie op basis van bebouwing, locatie en inzamelstrategie.",
      },
      {
        type: "h2",
        tekst: "De rol van Europa: de PPWR verandert het speelveld",
      },
      {
        type: "p",
        tekst: "De keuze tussen bron- en nascheiding staat niet op zichzelf. Op de achtergrond scherpt Europa de eisen aan verpakkingen fors aan met de Packaging and Packaging Waste Regulation (PPWR), formeel Verordening (EU) 2025/40.",
      },
      {
        type: "p",
        tekst: "De eerste concrete verplichtingen gaan in op 12 augustus 2026. Anders dan de oude verpakkingsrichtlijn is de PPWR een verordening: dezelfde regels gelden rechtstreeks in de hele Europese Unie, zonder nationale uitzonderingen. De verordening bevat een tijdlijn met steeds strengere eisen — zo moeten vanaf 2030 alle verpakkingen recyclebaar zijn en gelden er verplichte percentages gerecycled kunststof.",
      },
      {
        type: "p",
        tekst: "Voor gemeenten en afvalverwerkers betekent dit dat de druk op een efficiënte, hoogwaardige inzameling alleen maar toeneemt. Of het PMD nu aan de bron of achteraf wordt gescheiden: het eindresultaat moet aantoonbaar geschikt zijn voor recycling. Een robuuste, goed geplande inzamelinfrastructuur wordt daarmee belangrijker dan ooit.",
      },
      {
        type: "h2",
        tekst: "Wat betekent dit voor ondergrondse inzameling?",
      },
      {
        type: "p",
        tekst: "Hier komt de infrastructuur in beeld. De keuze voor bron- of nascheiding bepaalt namelijk direct hoeveel en welke ondergrondse containers een wijk nodig heeft.",
      },
      {
        type: "p",
        tekst: "Bij bronscheiding zijn meerdere ondergrondse containers per locatie nodig: een aparte container voor restafval én een aparte container voor PMD, vaak aangevuld met voorzieningen voor papier, glas en gft. Dat vraagt meer ruimte in de ondergrond en een zorgvuldige inpassing tussen kabels, leidingen, bomen en parkeerplaatsen.",
      },
      {
        type: "p",
        tekst: "Bij nascheiding verandert de voorkant van het proces: PMD en restafval gaan samen in één stroom. Dat kan het aantal benodigde containers per locatie verlagen. Belangrijk om te benadrukken: de capaciteit die een wijk aan afval produceert blijft in beide gevallen gelijk. De keuze tussen bron- en nascheiding is dan ook geen reden om minder containers te plaatsen — het gaat om het slim verdelen van de stromen.",
      },
      {
        type: "p",
        tekst: "Steeds meer gemeenten combineren de systemen bovendien binnen dezelfde regio: bronscheiding voor laagbouw en nascheiding voor hoogbouw. Dat maakt een flexibele, toekomstbestendige infrastructuur essentieel. Ondergrondse containers die vandaag voor PMD worden ingericht, moeten morgen wellicht een andere stroom aankunnen.",
      },
      {
        type: "p",
        tekst: "Ook technologie speelt een groeiende rol. Ondergrondse containers worden in toenemende mate uitgerust met vulgraadsensoren, zodat inzamelwagens alleen rijden wanneer een container daadwerkelijk vol is. Dat scheelt ritten, brandstof en kosten — ongeacht of een gemeente voor bron- of nascheiding kiest.",
      },
      {
        type: "h2",
        tekst: "De koppeling met omgekeerd inzamelen en diftar",
      },
      {
        type: "p",
        tekst: "De scheidingskeuze staat vaak niet los van andere beleidsinstrumenten. Veel gemeenten combineren ondergrondse restafvalinzameling met <a href=\"/nieuws/omgekeerd-inzamelen/\">omgekeerd inzamelen</a>: de waardevolle grondstoffen (papier, PMD, gft) worden aan huis of dichtbij opgehaald, terwijl inwoners hun restafval zelf naar een ondergrondse container brengen. Deze extra drempel voor restafval stimuleert beter scheiden.",
      },
      {
        type: "p",
        tekst: "Daarnaast werken sommige gemeenten met <a href=\"/nieuws/diftar-betalen-naar-gebruik/\">diftar</a>, waarbij inwoners betalen naar de hoeveelheid restafval die ze aanbieden. Een ondergrondse container met toegangscontrole en registratie is hiervoor een randvoorwaarde. Deze instrumenten versterken elkaar: de juiste infrastructuur maakt slimmer beleid mogelijk, en slim beleid stelt eisen aan de infrastructuur.",
      },
      {
        type: "h2",
        tekst: "Conclusie: kies bewust en denk vooruit",
      },
      {
        type: "p",
        tekst: "De verschuiving richting nascheiding is een van de belangrijkste ontwikkelingen in de Nederlandse afvalwereld van 2026. Toch is er geen universeel juiste keuze: bronscheiding presteert beter in laagbouw, nascheiding biedt uitkomst in hoogbouw, en veel regio's combineren de twee.",
      },
      {
        type: "p",
        tekst: "Wat in alle scenario's telt, is een doordachte ondergrondse infrastructuur die meebeweegt met veranderend beleid en aangescherpte Europese regelgeving. Wie vandaag investeert in een flexibel, sensorgestuurd en goed ingepast containersysteem, staat sterker voor de eisen van morgen.",
      },
      {
        type: "p",
        tekst: "Lees meer over <a href=\"/diensten/afvalinzameling/\">afvalinzameling & management</a> of bekijk onze andere <a href=\"/nieuws/\">nieuwsartikelen</a>.",
      },
      {
        type: "streep",
      },
      {
        type: "cta",
        kop: "Advies over uw scheidingsstrategie en containersysteem",
        tekst: "B-Advice adviseert over de technische voorbereiding en inpassing van ondergrondse containersystemen — afgestemd op uw scheidingsstrategie en de lokale situatie.",
      },
    ],
  },
  {
    slug: "batterijbranden-afvalinzameling",
    samenvatting: "Ruim 7 miljoen vapes per jaar verdwijnen in het restafval, met bijna dagelijks brand in containers en inzamelwagens tot gevolg. Wat gemeenten nu kunnen doen.",
    categorie: "Analyse",
    datum: "2026-07-16",
    h1: "Batterijbranden in de afvalinzameling: van incident naar structureel risico",
    lead: "Vapes en lithium-batterijen in het restafval zorgen bijna dagelijks voor brand in containers, inzamelvoertuigen en verwerkingsinstallaties. Wat betekent dat voor uw gemeente, en wat kunt u er nu al aan doen?",
    meta: {
      titel: "Batterijbranden in afval: risico én aanpak",
      omschrijving: "Vapes en lithium-batterijen in restafval veroorzaken steeds vaker brand in containers en inzamelwagens. Lees wat gemeenten nu kunnen doen.",
    },
    blokken: [
      {
        type: "p",
        tekst: "Batterijbranden in de afvalinzameling zijn allang geen incident meer. Vrijwel dagelijks ontstaat ergens in Nederland brand in een container, een inzamelvoertuig of een sorteerinstallatie. In veruit de meeste gevallen is een verkeerd weggegooide lithium-batterij de oorzaak. Voor gemeenten raakt dit probleem alles tegelijk: de veiligheid van inzamelaars en bewoners, de levensduur van het containerpark én de kosten van de inzameling.",
      },
      {
        type: "h2",
        tekst: "Waarom lithium-batterijen zo gevaarlijk zijn in het afval",
      },
      {
        type: "p",
        tekst: "Lithium-batterijen slaan veel energie op in een klein volume. Zolang ze onbeschadigd zijn, is dat geen probleem. Maar in de afvalketen worden ze samengeperst, doorboord of verhit: in de perswagen, onder het gewicht van ander afval in een verzamelcontainer, of in de shredder van de verwerker. Een beschadigde cel kan dan in een zogeheten thermal runaway schieten: een kettingreactie waarbij de batterij zichzelf verhit en spontaan ontbrandt. Zo'n brand is fel, giftig en lastig te blussen.",
      },
      {
        type: "p",
        tekst: "Het aanbod van die batterijen groeit explosief: e-bikes, gereedschap, speelgoed, oordopjes en vooral wegwerp-vapes. De Taskforce Batterijbranden, een samenwerking van onder meer de NVRD, Stichting OPEN, TLN en de Vereniging Afvalbedrijven, schat dat er wekelijks zo'n 140.000 afgedankte vapes in het Nederlandse restafval belanden. Dat zijn er ruim 7 miljoen per jaar, en elke vape is een potentiële ontstekingsbron.",
      },
      {
        type: "cijfers",
        label: "Het probleem in cijfers",
        items: [
          {
            waarde: "±20.000",
            label: "vapes per dag in het restafval",
          },
          {
            waarde: "±250",
            label: "door de brandweer geregistreerde lithium-batterijbranden in 2024",
          },
          {
            waarde: "3×",
            label: "zoveel branden in de recyclingsector in tien jaar tijd (Europees onderzoek)",
          },
        ],
      },
      {
        type: "h2",
        tekst: "Wat er landelijk gebeurt: de Taskforce Batterijbranden",
      },
      {
        type: "p",
        tekst: "De sector wacht niet af. In de Taskforce Batterijbranden werken inzamelaars, verwerkers, transporteurs en producentenorganisaties samen aan een gecoördineerde aanpak. De taskforce pleit onder meer voor een verplichte inname van afgedankte vapes door winkeliers, ongeacht waar het product gekocht is, en voor stevigere handhaving op illegale import. Die illegale markt is fors: naar schatting circuleren er jaarlijks 20 tot 40 miljoen illegale vapes in Nederland, die buiten elk inzamelsysteem om worden verkocht én weggegooid.",
      },
      {
        type: "p",
        tekst: "Voor gemeenten is de boodschap van de taskforce tweeledig: het probleem wordt landelijk opgepakt, maar de branden ontstaan lokaal: in úw containers, úw voertuigen en úw milieustraat. Wachten op wetgeving is dus geen strategie.",
      },
      {
        type: "citaat",
        tekst: "De branden ontstaan niet in Den Haag, maar in de container om de hoek. Preventie is lokaal werk.",
      },
      {
        type: "h2",
        tekst: "Wat betekent dit voor uw containerpark?",
      },
      {
        type: "p",
        tekst: "Een batterijbrand in een bovengrondse container is meestal snel zichtbaar. Bij ondergrondse containers ligt dat anders: een smeulende brand onder het maaiveld wordt vaak pas opgemerkt als er rook uit de inworpzuil komt. De schade blijft dan zelden beperkt tot de inhoud: ook de binnenbak, het liftsysteem en de elektronica lopen schade op, en in het ergste geval moet de hele container vervangen worden. Eén brand kost daarmee al snel tienduizenden euro's, nog los van de kosten van vervangende inzameling en herstel van de locatie.",
      },
      {
        type: "p",
        tekst: "Daar komt bij dat verzekeraars de afvalsector steeds kritischer beoordelen. Gemeenten en inzamelaars die kunnen aantonen dat ze hun containerpark actief beheren, met inspecties, onderhoudshistorie en incidentregistratie, staan er bij schade en premieonderhandelingen aanzienlijk beter voor.",
      },
      {
        type: "h2",
        tekst: "Wat kan uw gemeente nu al doen?",
      },
      {
        type: "p",
        tekst: "De instroom van batterijen volledig stoppen kan een gemeente niet. De schade beperken wél. De meest effectieve maatregelen zijn verrassend praktisch:",
      },
      {
        type: "kader",
        titel: "Checklist: batterijbrand-preventie voor gemeenten",
        inhoud: [
          {
            type: "lijst",
            items: [
              "Communiceer gericht over vapes en batterijen bij het restafval, juist bij jongeren, via de kanalen die zij gebruiken",
              "Zorg voor voldoende en zichtbare inleverpunten voor batterijen en kleine elektronica, ook in de openbare ruimte",
              "Registreer brand- en rookincidenten per containerlocatie, zodat hotspots zichtbaar worden",
              "Neem brandschade-inspectie op in de reguliere onderhoudscyclus van (ondergrondse) containers",
              "Leg de onderhouds- en incidenthistorie per container vast, essentieel voor verzekering en vervangingsplanning",
              "Maak afspraken met de brandweer over bereikbaarheid en blusprotocollen bij ondergrondse containers",
            ],
          },
        ],
      },
      {
        type: "h2",
        tekst: "Grip begint bij registratie",
      },
      {
        type: "p",
        tekst: "Wie niet weet wáár incidenten plaatsvinden, kan er ook niet op sturen. Gemeenten die hun containerpark digitaal beheren, zien per locatie wat er speelt: meldingen, inspecties, schades en uitgevoerd onderhoud. Zo wordt zichtbaar welke locaties extra communicatie of een hogere inspectiefrequentie nodig hebben. Bij een brand staat bovendien de complete historie van de container direct paraat. Binnen <a href=\"/b-organized/\">B-Organized</a> leggen gemeenten dit per container vast, van melding tot afgeronde taak. In combinatie met professioneel <a href=\"/diensten/beheer-onderhoud/\">beheer en onderhoud</a> verlengt dat niet alleen de levensduur van het park, maar beperkt het ook de gevolgen als het tóch misgaat.",
      },
      {
        type: "p",
        tekst: "Meer lezen over slim containerbeheer? Bekijk ook ons artikel over de <a href=\"/nieuws/qr-code-pilot/\">QR-code pilot voor ondergrondse containers</a>, waarmee meldingen per container nog laagdrempeliger worden.",
      },
      {
        type: "streep",
      },
      {
        type: "cta",
        kop: "Weet wat er speelt in uw containerpark",
        tekst: "Van incidentregistratie tot onderhoudsplanning: B-Advice helpt gemeenten grip te krijgen op risico's in de afvalinzameling.",
      },
    ],
  },
  {
    slug: "pmd-ketenovereenkomst-2026-gemeenten",
    samenvatting: "Afkeur van PMD-vrachten verdwijnt, een voorspelbare vergoeding komt ervoor in de plaats. Wat dit betekent voor bron- en nascheiding en voor ondergrondse containers.",
    categorie: "Analyse",
    datum: "2026-07-01",
    h1: "PMD ketenovereenkomst 2026: wat verandert er voor gemeenten?",
    lead: "Afkeur van PMD-vrachten verdwijnt, een voorspelbare vergoeding komt ervoor in de plaats. Wat de nieuwe landelijke ketenovereenkomst betekent voor de keuze tussen bron- en nascheiding, en voor ondergrondse containers.",
    meta: {
      titel: "PMD ketenovereenkomst 2026: wat verandert er?",
      omschrijving: "Nieuwe PMD-ketenovereenkomst 2026: afkeur verdwijnt, vergoeding wordt voorspelbaar. Wat betekent dit voor gemeenten en ondergrondse containers?",
    },
    blokken: [
      {
        type: "p",
        tekst: "Per 2026 geldt een nieuwe landelijke <strong>PMD-ketenovereenkomst</strong> tussen het Rijk, de VNG en het verpakkende bedrijfsleven. De belangrijkste verandering: visuele inspectie en afkeur van materiaal verdwijnen, en daarvoor in de plaats komt een voorspelbare vergoeding op basis van inspanning in plaats van een streng percentage. Voor gemeenten heeft dit directe gevolgen voor de keuze tussen bron- en nascheiding, en voor de business case van ondergrondse PMD-containers. Hieronder lees je wat er precies verandert en wat dit betekent voor de praktijk.",
      },
      {
        type: "h2",
        tekst: "Waarom de oude PMD-afspraken op de schop moesten",
      },
      {
        type: "p",
        tekst: "Onder de Ketenovereenkomst 2020-2029 kregen gemeenten alleen een vergoeding als het ingezamelde PMD voor minstens <strong>85 procent</strong> uit daadwerkelijke verpakkingen bestond. Zat er te veel vervuiling in, zoals etensresten of textiel, dan volgde afkeur van de hele vracht: een compleet volle vuilniswagen ging dan alsnog richting de verbrandingsoven, met alle kosten van dien voor de gemeente. Gemeenten voerden al langer aan dat dit oneerlijk uitpakte, omdat zij het financiële risico droegen voor een probleem dat grotendeels ontstaat door verwarrende verpakkingen en te weinig landelijke sturing op productontwerp. Stichting Verpact zegde de bestaande overeenkomst zelfs per 1 januari 2025 op, waarna onderhandelingen tussen VNG, NVRD en Verpact volgden die in het nieuwe akkoord resulteerden.",
      },
      {
        type: "citaat",
        tekst: "Niet meer “wordt onze vracht afgekeurd”, maar “welke inzamelmethode past het best bij onze gemeente”.",
      },
      {
        type: "h2",
        tekst: "Wat er per 2026 concreet verandert",
      },
      {
        type: "p",
        tekst: "De belangrijkste wijziging: visuele inspectie en afkeur van materiaal verdwijnen uit het systeem. Daarvoor in de plaats komt een vergoeding die is gebaseerd op de geleverde inspanning, gestuurd via een staffelmodel waarin de mate van vervuiling en de gekozen inzamelmethode het uitgangspunt vormen. Voor gemeenten die worstelden met de complexiteit en onvoorspelbaarheid van de oude afrekening, is dit een aanzienlijke verbetering in planbaarheid.",
      },
      {
        type: "let-op",
        label: "Aandachtspunt: ondergrondse PMD-containers",
        tekst: "Daar staat wel iets tegenover: voor PMD dat via ondergrondse verzamelcontainers wordt ingezameld, geldt binnen de nieuwe afspraken een lagere vergoeding. Landelijke metingen laten zien dat de kwaliteit van PMD in verzamelcontainers structureel het laagst is, vermoedelijk door de anonimiteit die zo'n container met zich meebrengt vergeleken met een PMD-zak of minicontainer aan huis. In combinatie met de hoge investeringskosten van de perscontainers die voor PMD nodig zijn, maakt dit ondergrondse PMD-inzameling in de nieuwe systematiek voor veel gemeenten minder aantrekkelijk.",
      },
      {
        type: "h2",
        tekst: "Bronscheiding of nascheiding: de keuze wordt scherper",
      },
      {
        type: "p",
        tekst: "De nieuwe afspraken laten de twee bekende routes intact, maar verscherpen de afweging ertussen.",
      },
      {
        type: "stappen",
        items: [
          {
            titel: "Bronscheiding",
            tekst: "Inwoners houden hun PMD thuis apart. Levert aantoonbaar schoner materiaal op, met een hoger percentage bruikbaar recyclaat. Werkt bovendien door: inwoners die hun PMD apart houden, zijn ook gemotiveerder om andere stromen zoals papier en glas goed te scheiden. Dat effect is sterker in gemeenten met een diftar-tarief voor restafval, omdat inwoners daar direct financieel voordeel hebben bij zorgvuldig scheiden.",
          },
          {
            titel: "Nascheiding",
            tekst: "PMD gaat bij het restafval en wordt machinaal teruggewonnen bij de verwerker. Voor gemeenten met veel hoogbouw, waar bronscheiding vaak matig van de grond komt door ruimtegebrek, biedt dit een praktische uitkomst. Diverse regionale afvalbedrijven kondigden voor medio 2026 een overstap naar nascheiding aan: PMD hoeft dan niet langer apart te worden aangeboden, terwijl de verwerking zelf ongewijzigd blijft.",
          },
        ],
      },
      {
        type: "streep",
      },
      {
        type: "h2",
        tekst: "Veelgestelde vragen over de nieuwe PMD-afspraken",
      },
      {
        type: "faq",
        items: [
          {
            vraag: "Wanneer gaan de nieuwe PMD-afspraken in?",
            antwoord: "De nieuwe Ketenovereenkomst Verpakkingen gaat in per 2026. Gemeenten en Verpact evalueren maandelijks in het Uitvoerend Overleg en elk kwartaal in het Bestuurlijk Overleg of de doelstellingen worden gehaald.",
          },
          {
            vraag: "Wat betekent dit voor ondergrondse PMD-containers?",
            antwoord: "De vergoeding voor PMD uit ondergrondse verzamelcontainers valt lager uit dan voor bronscheiding aan huis, vanwege structureel lagere kwaliteit. Gemeenten die investeren in nieuwe ondergrondse infrastructuur doen er goed aan de business case hierop opnieuw door te rekenen.",
          },
          {
            vraag: "Blijft afkeur van PMD-vrachten mogelijk?",
            antwoord: "Nee. Visuele inspectie met afkeur van een volledige vracht maakt plaats voor een vergoeding op basis van inspanning en een staffelmodel, zonder de keiharde ja/nee-beoordeling van voorheen.",
          },
          {
            vraag: "Wordt de nieuwe overeenkomst nog aangepast?",
            antwoord: "Ja. Gemeenten hebben via de VNG bedongen dat de nieuwe Ketenovereenkomst in het najaar van 2026 wordt geëvalueerd, met de mogelijkheid om nadelige gevolgen alsnog te wijzigen.",
          },
        ],
      },
      {
        type: "h2",
        tekst: "Wat dit betekent voor de praktijk",
      },
      {
        type: "kader",
        titel: "Aan de slag",
        inhoud: [
          {
            type: "lijst",
            items: [
              "<strong>Herzie de business case voor ondergrondse PMD-containers.</strong> Met een lagere vergoeding en hoge investeringskosten voor perscontainers is het financiële plaatje veranderd ten opzichte van een paar jaar geleden.",
              "<strong>Documenteer de inzamelroute per huishouden zorgvuldig.</strong> De nieuwe afspraken vereisen een aantoonbare, niet-overlappende keuze tussen bron- en nascheidingsroutes in de afvaladministratie.",
              "<strong>Houd rekening met de evaluatie in het najaar van 2026.</strong> Nadelige gevolgen kunnen dan nog worden besproken en aangepast.",
              "<strong>Combineer de PMD-keuze met bredere afvalplannen.</strong> Gemeenten die nadenken over diftar of omgekeerd inzamelen, doen er goed aan de PMD-route in dezelfde afweging mee te nemen, omdat beide systemen elkaar direct beïnvloeden.",
            ],
          },
        ],
      },
      {
        type: "p",
        tekst: "De nieuwe ketenafspraken lossen een langlopend pijnpunt op, maar verschuiven de vraag naar een nieuw niveau: niet meer “wordt onze vracht afgekeurd”, maar “welke inzamelmethode past het best bij onze gemeente, gegeven de nieuwe vergoedingsstructuur”. Voor gemeenten die hun containerpark de komende jaren vernieuwen of uitbreiden, is dit hét moment om die keuze opnieuw tegen het licht te houden.",
      },
      {
        type: "p",
        tekst: "Lees meer over hoe wij gemeenten begeleiden bij <a href=\"/diensten/afvalinzameling/\">afvalinzameling & management</a>, of bekijk waarom <a href=\"/nieuws/kantelpunt-2026/\">2026 een kantelpunt vormt voor ondergrondse inzameling</a>.",
      },
      {
        type: "streep",
      },
      {
        type: "cta",
        kop: "PMD-inzameling opnieuw doorgerekend",
        tekst: "Wij herzien met u de business case voor ondergrondse PMD-containers en adviseren over de inzamelroute die het beste past onder de nieuwe ketenovereenkomst.",
      },
    ],
  },
  {
    slug: "diftar-betalen-naar-gebruik",
    samenvatting: "Wat is diftar, hoe werkt het en waarom is de ondergrondse container het sleutelstuk van een werkend diftar-systeem?",
    categorie: "Uitleg",
    datum: "2026-06-26",
    h1: "Diftar uitgelegd: betalen naar gebruik en de rol van ondergrondse containers",
    lead: "Ruim vier op de tien Nederlanders woont al in een diftar-gemeente. Wat is het precies, hoe werkt het en waarom wordt de ondergrondse container steeds bepalender?",
    meta: {
      titel: "Diftar uitgelegd: zo werkt betalen naar gebruik",
      omschrijving: "Wat is diftar en hoe werkt betalen naar gebruik? Lees over tarieven, resultaten, nadelen en de rol van ondergrondse containers in de afvalinzameling.",
    },
    blokken: [
      {
        type: "p",
        tekst: "Diftar is in Nederland bezig aan een stevige opmars. Steeds meer gemeenten stappen over op een afvalstoffenheffing die afhangt van het eigen gedrag van inwoners. Waar een paar jaar geleden nog ongeveer een derde van de Nederlanders in een diftar-gemeente woonde, is dat inmiddels opgelopen tot <strong>ruim vier op de tien</strong>. In dit artikel leggen we uit wat diftar is, hoe het werkt en waarom de techniek achter de ondergrondse container daarbij steeds belangrijker wordt.",
      },
      {
        type: "h2",
        tekst: "Wat is diftar?",
      },
      {
        type: "p",
        tekst: "Diftar staat voor <strong>gedifferentieerd tarief</strong>. Het is een afvalsysteem waarbij je rekening niet langer voor iedereen gelijk is, maar deels afhangt van hoeveel restafval je zelf aanbiedt. In sommige regio's heet dit ook wel het recycletarief. De gedachte erachter is eenvoudig: <strong>de vervuiler betaalt</strong>. Wie minder restafval overhoudt en beter scheidt, betaalt minder.",
      },
      {
        type: "h2",
        tekst: "Hoe werkt diftar?",
      },
      {
        type: "p",
        tekst: "Bij diftar bestaat de afvalstoffenheffing uit twee delen. Het eerste deel is een <strong>vast bedrag</strong> dat ieder huishouden betaalt voor de basis van het afvalbeheer. Het tweede deel is <strong>variabel</strong> en hangt af van je eigen gedrag. Hoe minder restafval je weggooit, hoe lager dat tweede deel uitvalt. Het principe is vergelijkbaar met water en energie: je betaalt voor wat je daadwerkelijk verbruikt.",
      },
      {
        type: "h2",
        tekst: "Diftar, diftar+ en de verschillende tarieven",
      },
      {
        type: "p",
        tekst: "Gemeenten rekenen het variabele deel op verschillende manieren af. De drie meest voorkomende vormen:",
      },
      {
        type: "stappen",
        items: [
          {
            titel: "Volume-frequentie",
            tekst: "Je betaalt per keer dat de container aan de straat staat of per zak die je in een verzamelcontainer gooit.",
          },
          {
            titel: "Gewicht",
            tekst: "De inzamelwagen weegt de container voor en na het legen, zodat je alleen voor het nettogewicht restafval betaalt.",
          },
          {
            titel: "Per inworp of klepbeweging",
            tekst: "Bij een ondergrondse container betaal je elke keer dat je de klep opent. Deze variant heet vaak <strong>diftar+</strong> en wint duidelijk terrein, vooral in gemeenten met veel hoogbouw.",
          },
        ],
      },
      {
        type: "h2",
        tekst: "Wat levert diftar op?",
      },
      {
        type: "p",
        tekst: "De resultaten van diftar zijn opvallend consistent. Waar het systeem wordt ingevoerd, daalt de hoeveelheid fijn huishoudelijk restafval vrijwel direct en fors. In gemeenten die net zijn overgestapt, halveert die hoeveelheid soms al binnen één kwartaal. Tegelijk stijgt de gescheiden inzameling van gft en van plastic, blik en drinkpakken.",
      },
      {
        type: "cijfers",
        label: "Diftar in cijfers",
        titel: "Effect van gedifferentieerd tarief",
        sub: "Diftar-gemeenten vergeleken met gemeenten zonder financiële prikkel",
        bron: "Bron: NVRD Benchmark Huishoudelijk Afval, 2026",
        items: [
          {
            waarde: "4 op 10",
            label: "Nederlanders wonen al in een diftar-gemeente",
          },
          {
            waarde: "~50%",
            label: "minder restafval ten opzichte van gemeenten zonder diftar",
          },
          {
            waarde: "↓",
            label: "Lagere afvalbeheerkosten door minder te verbranden restafval",
          },
        ],
      },
      {
        type: "p",
        tekst: "Voor inwoners die goed scheiden valt de rekening uiteindelijk lager uit. En doordat verbranden door de oplopende verbrandingsbelasting steeds duurder wordt, leidt minder restafval ook tot lagere totale afvalbeheerkosten voor de gemeente.",
      },
      {
        type: "h2",
        tekst: "Wat zijn de nadelen van diftar?",
      },
      {
        type: "let-op",
        label: "Aandachtspunt",
        tekst: "Vrijwel overal waar diftar wordt ingevoerd, neemt in de eerste periode de overlast toe: zakken naast de container, dumpingen in het buitengebied en volle bakken. Een deel van de inwoners zoekt naar manieren om de variabele kosten te ontwijken. Dat tast zowel het straatbeeld als het draagvlak aan.",
      },
      {
        type: "p",
        tekst: "Daarom kiezen veel gemeenten voor flankerende maatregelen: compensatie voor inwoners die om medische redenen onvermijdbaar meer afval hebben, gratis keukenbakjes om etensresten beter te scheiden en een aparte regeling voor vrijwilligers die zwerfafval opruimen. Zo blijft de eerlijke gedachte achter het systeem ook overeind voor wie er buiten zijn schuld nadeel van zou ondervinden.",
      },
      {
        type: "h2",
        tekst: "Diftar en ondergrondse containers: het sleutelstuk",
      },
      {
        type: "p",
        tekst: "Een diftar-systeem staat of valt met <strong>betrouwbare registratie</strong>. Zonder dat de inzameling precies weet wie wat aanbiedt, valt er niets eerlijk af te rekenen. Bij minicontainers gebeurt dat via een chip die het adres uitleest. Bij ondergrondse en verzamelcontainers werkt het met toegangscontrole via een afvalpas en registratie van iedere klepbeweging.",
      },
      {
        type: "citaat",
        tekst: "In een diftar-gemeente is een ondergrondse container niet langer alleen een opslagplek, maar een meetpunt.",
      },
      {
        type: "p",
        tekst: "Toegangscontrole, vulgraadmeting en een sluitend registratiesysteem bepalen of inwoners correct worden afgerekend en of de gemeente grip houdt op overlast. Naarmate diftar verder oprukt, wordt de kwaliteit van die ondergrondse infrastructuur dus steeds bepalender voor het succes van het hele systeem.",
      },
      {
        type: "kader",
        titel: "Wat een diftar-ready container vereist",
        inhoud: [
          {
            type: "lijst",
            items: [
              "Toegangscontrole via afvalpas of app",
              "Registratie van elke klepbeweging per adres",
              "Vulgraadsensor voor efficiënte leegroutes",
              "Koppeling met het gemeentelijke registratiesysteem",
              "Betrouwbare stroomvoorziening en onderhoud op afstand",
            ],
          },
        ],
      },
      {
        type: "h2",
        tekst: "De toekomst van diftar",
      },
      {
        type: "p",
        tekst: "Alles wijst erop dat het aandeel diftar-gemeenten de komende jaren blijft groeien. De combinatie van milieudruk, stijgende verbrandingskosten en strengere recyclingdoelen maakt betalen naar gebruik voor steeds meer gemeenten een logische keuze. De vraag is daarmee niet langer <em>of</em> een gemeente overstapt, maar <em>wanneer</em> en op welke manier. Wie die overstap goed wil laten verlopen, doet er verstandig aan de ondergrondse inzameling vanaf het begin op orde te hebben.",
      },
      {
        type: "p",
        tekst: "Lees ook: <a href=\"/diensten/afvalinzameling/\">afvalinzameling & management</a>, <a href=\"/nieuws/omgekeerd-inzamelen/\">omgekeerd inzamelen</a> en <a href=\"/nieuws/afvalstoffenbelasting-verhoging-2028-gemeenten/\">de afvalstoffenbelasting vanaf 2028</a>.",
      },
      {
        type: "streep",
      },
      {
        type: "h2",
        tekst: "Veelgestelde vragen over diftar",
      },
      {
        type: "faq",
        items: [
          {
            vraag: "Wat betekent diftar?",
            antwoord: "Diftar is de afkorting van gedifferentieerd tarief. Je afvalstoffenheffing hangt deels af van hoeveel restafval je aanbiedt.",
          },
          {
            vraag: "Is diftar duurder?",
            antwoord: "Voor wie goed scheidt is diftar meestal juist voordeliger. Gemeenten met diftar hebben gemiddeld lagere afvalbeheerkosten doordat er minder restafval verbrand hoeft te worden.",
          },
          {
            vraag: "Wat is het verschil tussen diftar en diftar+?",
            antwoord: "Diftar is de overkoepelende term. Diftar+ verwijst vaak naar een variant waarbij je bij een verzamelcontainer per klepbeweging betaalt, of waarbij naast frequentie ook het gewicht meetelt.",
          },
          {
            vraag: "Hoe wordt restafval bij een ondergrondse container geregistreerd?",
            antwoord: "Via toegangscontrole met een afvalpas. De container leest bij het openen van de klep het adres uit, zodat de aanbieding correct wordt geteld en verrekend in de afvalstoffenheffing.",
          },
        ],
      },
      {
        type: "cta",
        kop: "Klaar voor diftar? Begin bij de infrastructuur.",
        tekst: "Wij adviseren gemeenten over de juiste containeropstelling, toegangssystemen en registratie voor een werkend diftar-systeem.",
      },
    ],
  },
  {
    slug: "kantelpunt-2026",
    samenvatting: "Gemeenten kiezen massaal voor inzameling op afstand en diftar. Wat drijft die verschuiving, en wat vraagt het van de infrastructuur?",
    categorie: "Analyse",
    datum: "2026-06-23",
    h1: "Waarom 2026 een kantelpunt is voor ondergrondse afvalinzameling",
    lead: "Nederland kiest massaal voor inzameling op afstand. Ondergrondse containers staan centraal, maar achter de schermen wordt het hele containerpark opnieuw doordacht.",
    meta: {
      titel: "2026: kantelpunt voor ondergrondse inzameling",
      omschrijving: "Waarom 2026 het jaar is waarop gemeenten massaal overstappen op ondergrondse inzameling en diftar. Analyse van B-Advice.",
    },
    blokken: [
      {
        type: "p",
        tekst: "De manier waarop Nederland zijn huishoudelijk afval inzamelt, schuift dit jaar duidelijk een richting op. Gemeenten kiezen massaal voor inzameling op afstand, waarbij inwoners hun afval naar een vaste verzamelplek in de buurt brengen in plaats van het aan de stoeprand aan te bieden. Ondergrondse containers vormen daarbij het kloppend hart van het systeem. Toch is het geen kwestie van overal simpelweg meer containers bijplaatsen. Achter de schermen wordt het hele containerpark opnieuw doordacht.",
      },
      {
        type: "h2",
        tekst: "Het einde van de oranje container",
      },
      {
        type: "p",
        tekst: "Een deel van die verschuiving komt voort uit nieuwe landelijke afspraken over verpakkingsafval. Sinds begin dit jaar gelden er andere regels voor de inzameling van plastic, blik en drankkartons. De inzameling van dit zogenoemde PMD via verzamelcontainers in de openbare ruimte wordt afgebouwd, vooral op plekken waar de kwaliteit van het ingezamelde materiaal tegenvalt. Te veel vervuiling zorgde er namelijk voor dat hele vrachten niet goed te recyclen waren. Voor gemeenten betekent dit dat de bekende <strong>oranje containers de komende periode verdwijnen</strong> of een andere functie krijgen.",
      },
      {
        type: "p",
        tekst: "Tegelijkertijd groeit het aantal ondergrondse containers voor restafval, papier en glas juist hard. In binnensteden en dichtbebouwde wijken vervangen ze de oude bovengrondse exemplaren, die meer ruimte innemen en het straatbeeld rommeliger maken. De ondergrondse variant valt nauwelijks op, biedt meer capaciteit en past beter bij een aantrekkelijke openbare ruimte. Het is dan ook logisch dat steeds meer gemeenten deze stap zetten.",
      },
      {
        type: "h2",
        tekst: "Diftar als versneller",
      },
      {
        type: "p",
        tekst: "De drijvende kracht achter veel van deze keuzes is de invoering van een variabel tarief, in de praktijk vaak <strong>diftar</strong> genoemd. Het principe is eenvoudig: wie minder restafval aanbiedt, betaalt minder. Inwoners worden zo gestimuleerd om hun afval beter te scheiden. De resultaten daarvan zijn inmiddels goed zichtbaar in cijfers. Gemeenten die hiermee werken houden gemiddeld fors minder restafval over en zijn voordeliger uit op hun totale afvalbeheer. Een ondergrondse restafvalcontainer met een toegangssysteem en een sensor die de vulgraad meet, sluit naadloos aan op die werkwijze.",
      },
      {
        type: "cijfers",
        label: "Diftar in cijfers",
        titel: "Effect van tariefdifferentiatie",
        sub: "Gemeenten mét diftar vergeleken met gemeenten zonder",
        bron: "Bron: NVRD Benchmark Huishoudelijk Afval, 2026",
        items: [
          {
            waarde: "41%",
            label: "minder restafval",
          },
          {
            waarde: "15%",
            label: "meer recycling",
          },
          {
            waarde: "15%",
            label: "lagere afvalbeheerkosten",
          },
        ],
      },
      {
        type: "h2",
        tekst: "De uitvoering: meer dan een gat graven",
      },
      {
        type: "p",
        tekst: "Voor de uitvoering is dit echter geen kleine opgave. Elke locatie moet apart beoordeeld worden, betonputten moeten worden geplaatst en bestaande voorzieningen omgebouwd of weggehaald. De ondergrond speelt daarbij een hoofdrol. Kabels, leidingen en in oude stadskernen soms zelfs archeologische resten bepalen mee of een plek geschikt is. Wie hier vooraf niet goed naar kijkt, loopt tijdens de uitvoering tegen vertraging en extra kosten aan.",
      },
      {
        type: "citaat",
        tekst: "Een doordachte infrastructuur betaalt zich terug in een afvalsysteem dat schoner, efficiënter en klaar voor de toekomst is.",
      },
      {
        type: "kader",
        titel: "Voorbereiding die het verschil maakt",
        inhoud: [
          {
            type: "lijst",
            items: [
              "Onderbouwd locatieplan per containerlocatie",
              "Inzicht in ondergrondse obstakels via proefsleuven en KLIC-melding",
              "Realistische planning inclusief vergunningstraject",
              "Afstemming met netbeheerders en gemeente",
              "Bewonersparticipatie vroeg in het proces",
            ],
          },
        ],
      },
      {
        type: "p",
        tekst: "Juist daarom is een gedegen voorbereiding doorslaggevend. Een onderbouwd locatieplan, inzicht in wat zich onder de grond bevindt en een realistische planning maken het verschil tussen een soepel project en een hoop gedoe. Voor gemeenten die hun inzameling de komende jaren willen vernieuwen, is dit het moment om die basis op orde te brengen.",
      },
      {
        type: "p",
        tekst: "Lees ook: <a href=\"/diensten/locatieonderzoek/\">locatieonderzoek en werkvoorbereiding</a>, <a href=\"/diensten/projectleiding/\">projectleiding en projectbegeleiding</a> en <a href=\"/nieuws/bronscheiding-nascheiding-pmd-2026/\">bronscheiding of nascheiding van PMD</a>.",
      },
      {
        type: "streep",
      },
      {
        type: "cta",
        kop: "Klaar voor het kantelpunt",
        tekst: "Van locatieonderzoek tot begeleiding bij plaatsing: wij zorgen dat uw gemeente goed voorbereid de omschakeling maakt.",
      },
    ],
  },
  {
    slug: "qr-code-pilot",
    samenvatting: "B-Advice en B-Organized lanceren een QR-code pilot die onderhoud en reparaties aan ondergrondse containers slimmer, sneller en inzichtelijker maakt. Bekijk de video en lees hoe het werkt.",
    categorie: "Innovatie",
    datum: "2026-06-23",
    h1: "Efficiënter containerbeheer: de QR-code pilot via B-Organized",
    lead: "Definitief afscheid van Excel-lijsten. B-Advice start met slimme QR-codes op ondergrondse containers, gekoppeld aan het B-Organized platform.",
    meta: {
      titel: "QR-codes op containers: slim containerbeheer",
      omschrijving: "B-Advice en B-Organized lanceren een QR-code pilot voor ondergrondse containers. Sneller onderhoud, minder fouten, meer overzicht via de app.",
    },
    blokken: [
      {
        type: "p",
        tekst: "Bij B-Advice zitten we nooit stil als het gaat om procesverbetering en innovatie. Achter de schermen hebben we hard gewerkt aan een gloednieuwe oplossing om ons containerbeheer naar een hoger niveau te tillen. Met trots presenteren we de allereerste fase van ons nieuwste project: de introductie van <strong>slimme QR-codes op ondergrondse containers</strong>, gekoppeld aan ons centrale platform B-Organized.",
      },
      {
        type: "p",
        tekst: "We staan aan het begin van deze digitale transformatie en zijn inmiddels officieel gestart met de uitrol op de eerste pilotlocaties. Het doel? Definitief afscheid nemen van onoverzichtelijke Excel-lijsten en overstappen op een volledig realtime, digitaal overzicht.",
      },
      {
        type: "p",
        tekst: "Benieuwd hoe deze nieuwe werkwijze er in de praktijk uitziet? Bekijk onze korte introductievideo:",
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/K96sWdnlCEc",
        titel: "b-organized: Slim containerbeheer met QR-codes",
      },
      {
        type: "streep",
      },
      {
        type: "h2",
        tekst: "Waarom deze vernieuwing? Het einde van de Excel-frustratie",
      },
      {
        type: "p",
        tekst: "Tot voor kort was het bijhouden van containerdata een flinke administratieve klus. Monteurs en logistiek medewerkers moesten op locatie handmatig zoeken, scrollen en filteren in grote Excel-bestanden om de juiste status of onderhoudshistorie van een ondergrondse container te vinden. Dat kostte veel tijd en verhoogde de kans op fouten.",
      },
      {
        type: "p",
        tekst: "Hoewel het project nog in de startblokken staat, zijn de voordelen op de eerste geselecteerde locaties nu al duidelijk merkbaar:",
      },
      {
        type: "lijst",
        items: [
          "<strong>Directe tijdwinst</strong>: Geen eindeloos gescroll meer in bestanden, maar direct de juiste containergegevens bij de hand.",
          "<strong>Hogere nauwkeurigheid</strong>: Fouten door handmatige invoer in een verkeerde Excel-regel behoren tot het verleden.",
          "<strong>Fijner werken</strong>: Monteurs kunnen zich focussen op hun vakwerk in plaats van op ingewikkelde administratie.",
        ],
      },
      {
        type: "h2",
        tekst: "Hoe werkt het in de praktijk met B-Organized?",
      },
      {
        type: "p",
        tekst: "Het systeem is even simpel als doeltreffend. Het proces op de eerste locaties bestaat uit drie eenvoudige stappen:",
      },
      {
        type: "stappen",
        items: [
          {
            titel: "Scannen",
            tekst: "De monteur opent het serviceluik van de ondergrondse container. Aan de binnenkant bevindt zich een unieke QR-code, die simpelweg wordt gescand met een tablet of smartphone.",
          },
          {
            titel: "Inzien via B-Organized",
            tekst: "De monteur wordt direct doorgeleid naar het B-Organized platform. Hier is in één oogopslag de complete historie, actuele status en alle eerdere opmerkingen of storingen van die specifieke container zichtbaar.",
          },
          {
            titel: "Bijwerken",
            tekst: "Is er onderhoud gepleegd of een controle uitgevoerd? De monteur voert dit direct in op de tablet. B-Organized verwerkt dit realtime, zodat het hele team meteen over de juiste informatie beschikt.",
          },
        ],
      },
      {
        type: "citaat",
        tekst: "\"Hoewel we het systeem de komende tijd op de eerste locaties nog volop aan het finetunen en testen zijn, zien we nu al dat de combinatie van QR-codes en B-Organized zorgt voor meer werkplezier én een veel strakkere grip op het logistieke proces.\"",
      },
      {
        type: "p",
        tekst: "Lees ook: <a href=\"/diensten/beheer-onderhoud/\">beheer, onderhoud & refurbish</a>, <a href=\"/b-organized/\">het B-Organized-platform</a> en <a href=\"/nieuws/batterijbranden-afvalinzameling/\">batterijbranden in de afvalinzameling</a>.",
      },
      {
        type: "streep",
      },
      {
        type: "h2",
        tekst: "Wil jij jouw processen ook 'B-Organized' hebben?",
      },
      {
        type: "p",
        tekst: "Nu de eerste locaties succesvol zijn opgestart, kijken we alweer vooruit naar de toekomst. Loop jij binnen jouw organisatie of gemeente ook aan tegen rondslingerende data, zoekgeraakte inspectierapporten of inefficiënt containerbeheer?",
      },
      {
        type: "p",
        tekst: "Omdat we dit project vanaf de grond hebben opgebouwd, kunnen we flexibel meedenken. Ons platform B-Organized is schaalbaar en kan in een later stadium ook voor de specifieke processen van andere partijen worden ingericht.",
      },
      {
        type: "cta",
        label: "Interesse? Plan een demo",
        kop: "Laat ons jouw logistieke proces slimmer maken",
        tekst: "Neem vandaag nog contact met ons op voor een vrijblijvende demonstratie. We laten je graag zien wat onze plannen zijn en hoe B-Organized voor jou kan werken.",
      },
    ],
  },
  {
    slug: "omgekeerd-inzamelen",
    samenvatting: "Steeds meer gemeenten draaien hun afvalinzameling letterlijk om. Wat betekent dit in de praktijk en waar gaat het mis?",
    categorie: "Artikel",
    datum: "2026-06-10",
    h1: "Omgekeerd inzamelen: wat verandert er voor gemeenten?",
    lead: "Steeds meer gemeenten draaien hun afvalinzameling letterlijk om. Restafval aan de deur verdwijnt, maar wat komt er voor terug?",
    meta: {
      titel: "Omgekeerd inzamelen voor gemeenten",
      omschrijving: "Omgekeerd inzamelen wint terrein: restafval niet meer aan huis maar naar een ondergrondse container. Wat verandert er voor gemeenten?",
    },
    blokken: [
      {
        type: "p",
        tekst: "Steeds meer gemeenten in Nederland draaien hun afvalinzameling letterlijk om. Bij <strong>omgekeerd inzamelen</strong> wordt restafval niet meer aan huis opgehaald. Bewoners brengen het zelf naar een ondergrondse container in de buurt. Waardevolle stromen zoals gft, papier en plastic worden juist wél aan huis opgehaald.",
      },
      {
        type: "citaat",
        tekst: "Als je restafval wegbrengen even moeite kost, ga je vanzelf kritischer kijken wat er écht bij het restafval hoort.",
      },
      {
        type: "p",
        tekst: "In de praktijk zien gemeenten die dit systeem invoeren een flinke daling in de hoeveelheid restafval per inwoner, en dat scheelt direct in de verwerkingskosten.",
      },
      {
        type: "cijfers",
        items: [
          {
            waarde: "100kg",
            label: "Landelijke doelstelling restafval per inwoner per jaar in 2030",
          },
          {
            waarde: "60%",
            label: "Minimale recyclingdoelstelling die het Rijk stelt voor 2030",
          },
          {
            waarde: "↓",
            label: "Flinke daling restafval zichtbaar in gemeenten met omgekeerd inzamelen",
          },
        ],
      },
      {
        type: "h2",
        tekst: "Waarom nu?",
      },
      {
        type: "p",
        tekst: "De druk vanuit het Rijk neemt toe. De landelijke doelstelling is maximaal 100 kilogram restafval per inwoner per jaar in 2030, met minimaal 60% recycling. Veel gemeenten zitten daar nu nog ver boven.",
      },
      {
        type: "p",
        tekst: "Daar komt bij dat restafval verbranden duurder wordt. Afvalenergiecentrales worden geconfronteerd met een oplopende CO₂-heffing, die zij doorberekenen aan gemeenten. Hoe minder restafval een gemeente produceert, hoe lager de verwerkingskosten.",
      },
      {
        type: "kader",
        titel: "Waarom gemeenten overstappen",
        inhoud: [
          {
            type: "lijst",
            items: [
              "Rijksoverheid stelt harde doelstellingen voor 2030",
              "Oplopende CO₂-heffing maakt verbranding duurder",
              "Minder restafval = direct lagere verwerkingskosten",
              "Diftar (betalen per aanbieding) versterkt het effect",
              "Combinatie met omgekeerd inzamelen is meest effectief",
            ],
          },
        ],
      },
      {
        type: "h2",
        tekst: "Wat vraagt het in de praktijk?",
      },
      {
        type: "p",
        tekst: "Een ondergrondse container plaatsen is geen kwestie van een gat graven en klaar. Elk project vraagt om zorgvuldige voorbereiding.",
      },
      {
        type: "p",
        tekst: "Denk aan het <strong>locatieonderzoek</strong>: waar liggen kabels en leidingen, is er ruimte voor een betonput van circa drie meter diep en is de plek goed bereikbaar voor inzamelvoertuigen? Daarnaast zijn gemeenten verplicht om locaties formeel aan te wijzen via een <strong>aanwijsbesluit</strong>, inclusief een inspraakperiode voor bewoners.",
      },
      {
        type: "p",
        tekst: "<strong>Communicatie is minstens zo belangrijk.</strong> Bewoners die gewend zijn aan service aan de deur, ervaren de overgang aanvankelijk als een verslechtering. Goede voorlichting over de reden en de voordelen maakt een groot verschil voor het draagvlak.",
      },
      {
        type: "kader",
        titel: "Succesfactoren",
        inhoud: [
          {
            type: "lijst",
            items: [
              "Grondig locatieonderzoek inclusief kabels & leidingen",
              "Formeel aanwijsbesluit met inspraakperiode",
              "Proactieve communicatie richting bewoners",
              "Gefaseerde aanpak: wijk voor wijk",
              "Nazorg na oplevering",
            ],
          },
        ],
      },
      {
        type: "h2",
        tekst: "Waar gaat het mis?",
      },
      {
        type: "let-op",
        label: "Meest voorkomende knelpunten",
        tekst: "Onverwachte obstakels in de ondergrond, bezwaren van omwonenden die leiden tot vertraging in de besluitvorming, en een te korte communicatiefase waardoor draagvlak ontbreekt. Een stevige werkvoorbereiding, inclusief proefsleuven en afstemming met netbeheerders, voorkomt de meeste verrassingen.",
      },
      {
        type: "p",
        tekst: "Lees ook: <a href=\"/diensten/plaatsing/\">plaatsen van inzamelmiddelen</a>, <a href=\"/nieuws/diftar-betalen-naar-gebruik/\">diftar en betalen naar gebruik</a> en <a href=\"/nieuws/afval-naast-ondergrondse-containers/\">afval naast ondergrondse containers</a>.",
      },
      {
        type: "streep",
      },
      {
        type: "cta",
        kop: "Solide voorbereiding van begin tot eind",
        tekst: "Van locatiebeoordeling tot begeleiding van het plaatsingsbesluit: wij zorgen dat de onderkant van het project solide staat.",
      },
    ],
  },
];
