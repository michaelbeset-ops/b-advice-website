// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://b-advice.info",
  // Mappen als /diensten/projectleiding/ in plaats van .html-bestanden, zodat
  // de bestaande URL's van de site ongewijzigd blijven.
  build: { format: "directory" },
  // Vue is geinstalleerd maar niet geregistreerd. Er is nog geen onderdeel dat
  // echt interactie nodig heeft, en een geregistreerde integratie zonder
  // islands laat Astro 68 KB runtime meesturen die geen enkele pagina laadt.
  // Zodra er wel een island komt:
  //   import vue from "@astrojs/vue";  ->  integrations: [sitemap(), vue()]
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
