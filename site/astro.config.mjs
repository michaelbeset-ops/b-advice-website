// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";

export default defineConfig({
  site: "https://b-advice.info",
  // Mappen als /diensten/projectleiding/ in plaats van .html-bestanden, zodat
  // de bestaande URL's van de site ongewijzigd blijven.
  build: { format: "directory" },
  // Vue draait alleen op de pagina's met een island. Dat is nu het
  // contactformulier: verzendstatus, foutafhandeling en een bevestiging in
  // beeld. Pagina's zonder island laden geen enkel scriptbestand.
  integrations: [sitemap(), vue()],
  vite: { plugins: [tailwindcss()] },
});
