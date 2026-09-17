// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import { artikelen } from "./src/data/nieuws";

export default defineConfig({
  site: "https://b-advice.info",
  // Mappen als /diensten/projectleiding/ in plaats van .html-bestanden, zodat
  // de bestaande URL's van de site ongewijzigd blijven.
  build: { format: "directory" },

  // De kortlinks die op de QR-stickers van de containers in Houten staan.
  // Ze verwijzen door naar de taak in B-Organized. Deze URL's staan fysiek op
  // containers in de openbare ruimte, dus ze moeten blijven werken; bij een
  // statische build maakt Astro er een doorstuurpagina van.
  redirects: {
    "/rmn-7028/": "https://b-organized.info/board/houten/tasks/6650-rest-container-rmn-7028",
    "/rmn-7029/": "https://b-organized.info/board/houten/tasks/6651-rest-container-rmn-7029",
    "/rmn-7033/": "https://b-organized.info/board/houten/tasks/6342-rest-container-bammens-rmn-7033",
    "/rmn-7034/": "https://b-organized.info/board/houten/tasks/6343-rest-container-bammens-rmn-7034",
    "/rmn-7035/": "https://b-organized.info/board/houten/tasks/6344-rest-container-bammens-rmn-7035",
    "/rmn-7036/": "https://b-organized.info/board/houten/tasks/6345-rest-container-bammens-rmn-7036",
    "/rmn-7037/": "https://b-organized.info/board/houten/tasks/6346-rest-container-bammens-rmn-7037",
    "/rmn-7038/": "https://b-organized.info/board/houten/tasks/6347-rest-container-bammens-rmn-7038",
    "/rmn-7039/": "https://b-organized.info/board/houten/tasks/6348-rest-container-bammens-rmn-7039",
    "/rmn-7040/": "https://b-organized.info/board/houten/tasks/6349-rest-container-bammens-rmn-7040",
    "/rmn-7041/": "https://b-organized.info/board/houten/tasks/6350-rest-container-bammens-rmn-7041",
    "/rmn-7042/": "https://b-organized.info/board/houten/tasks/6351-rest-container-bammens-rmn-7042",
    "/rmn-7043/": "https://b-organized.info/board/houten/tasks/6352-rest-container-bammens-rmn-7043",
    "/rmn-7045/": "https://b-organized.info/board/houten/tasks/6353-rest-container-bammens-rmn-7045",
    "/rmn-7046/": "https://b-organized.info/board/houten/tasks/6354-rest-container-bammens-rmn-7046",
    "/rmn-7047/": "https://b-organized.info/board/houten/tasks/6355-rest-container-bammens-rmn-7047",
    "/rmn-7048/": "https://b-organized.info/board/houten/tasks/6356-rest-container-bammens-rmn-7048",
    "/rmn-7049/": "https://b-organized.info/board/houten/tasks/6357-rest-container-bammens-rmn-7049",
    "/rmn-7050/": "https://b-organized.info/board/houten/tasks/6358-rest-container-bammens-rmn-7050",
    "/rmn-7051/": "https://b-organized.info/board/houten/tasks/6359-rest-container-bammens-rmn-7051",
    "/rmn-7052/": "https://b-organized.info/board/houten/tasks/6360-rest-container-bammens-rmn-7052",
  },
  // Vue draait alleen op de pagina's met een island. Dat is nu het
  // contactformulier: verzendstatus, foutafhandeling en een bevestiging in
  // beeld. Pagina's zonder island laden geen enkel scriptbestand.
  integrations: [
    sitemap({
      // Een artikel krijgt zijn publicatiedatum mee, de overige pagina's de
      // datum van de build. Zonder lastmod weet een zoekmachine niet of het
      // zin heeft om opnieuw te komen kijken.
      serialize(item) {
        const slug = item.url.match(/\/nieuws\/([^/]+)\//)?.[1];
        const artikel = artikelen.find((a) => a.slug === slug);
        item.lastmod = artikel ? `${artikel.datum}T00:00:00+00:00` : new Date().toISOString();
        return item;
      },
    }),
    vue(),
  ],
  vite: { plugins: [tailwindcss()] },
});
