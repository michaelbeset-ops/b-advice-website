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
  integrations: [
    sitemap(),
    // Vue draait alleen waar echt interactie nodig is; de rest is platte HTML.
    vue(),
  ],
  vite: { plugins: [tailwindcss()] },
});
