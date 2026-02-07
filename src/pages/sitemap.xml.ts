/**
 * Custom Sitemap with i18n hreflang support
 *
 * Generates sitemap with proper hreflang alternates for localized URLs.
 * Uses our routes.ts to map equivalent pages across languages.
 *
 * Following Google's hreflang guidelines:
 * - Bidirectional links (each page links to all its alternates)
 * - x-default for language-neutral fallback
 * - Fully qualified absolute URLs
 */

import type { APIRoute } from 'astro';
import { routes, type PageKey } from '@/i18n/routes';
import { LANGUAGES, DEFAULT_LANG, BASE_URL, type Lang } from '@/i18n/config';
import { getAbsoluteUrl, pageExistsIn } from '@/i18n/utils';

// Get all static pages from routes
function getAllStaticPages(): Array<{
  pageKey: PageKey;
  languages: Lang[];
}> {
  return Object.entries(routes).map(([key, langRoutes]) => ({
    pageKey: key as PageKey,
    languages: LANGUAGES.filter((lang) => langRoutes[lang] !== undefined),
  }));
}

// Generate XML for a single URL entry with hreflang alternates
function generateUrlEntry(pageKey: PageKey, lang: Lang, allLangs: Lang[]): string {
  const loc = getAbsoluteUrl(pageKey, lang);
  const lastmod = new Date().toISOString().split('T')[0];

  // Generate xhtml:link alternates for all languages where page exists
  const alternates = allLangs
    .filter((l) => pageExistsIn(pageKey, l))
    .map((l) => {
      const href = getAbsoluteUrl(pageKey, l);
      return `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}" />`;
    })
    .join('\n');

  // Add x-default pointing to default language
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${getAbsoluteUrl(pageKey, DEFAULT_LANG)}" />`;

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}
${xDefault}
  </url>`;
}

export const GET: APIRoute = async () => {
  const pages = getAllStaticPages();

  // Generate URL entries for each page in each language
  const urlEntries: string[] = [];

  for (const { pageKey, languages } of pages) {
    for (const lang of languages) {
      urlEntries.push(generateUrlEntry(pageKey, lang, languages));
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
