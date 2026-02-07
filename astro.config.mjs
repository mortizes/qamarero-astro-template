// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // TODO: Change to https://qamarero.com when deploying to production
  site: "https://astro-template-kappa.vercel.app",

  // Native i18n configuration (Astro 4+)
  // Following astro-i18n-starter best practices
  // Note: We handle routing manually with dedicated page files per language
  // This config is primarily for sitemap and metadata
  i18n: {
    defaultLocale: "es",
    locales: ["es", "fr", "en", "it"],
    routing: {
      prefixDefaultLocale: false, // ES at root (/), others with prefix (/fr/, /en/, /it/)
      redirectToDefaultLocale: false,
    },
  },

  // Using custom sitemap at /sitemap.xml with proper hreflang support
  integrations: [mdx(), react()],
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },
});
