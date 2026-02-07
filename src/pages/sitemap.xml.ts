/**
 * Custom Sitemap with i18n hreflang support
 *
 * Features:
 * - Proper hreflang alternates for all localized URLs
 * - Blog posts from Content Collections included
 * - Smart x-default: points to default language if exists, otherwise first available
 * - Bidirectional links following Google guidelines
 *
 * @see https://developers.google.com/search/docs/specialty/international/localized-versions
 */

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { routes, type PageKey } from '@/i18n/routes';
import { LANGUAGES, DEFAULT_LANG, BASE_URL, type Lang } from '@/i18n/config';
import { getAbsoluteUrl, pageExistsIn } from '@/i18n/utils';

// ============================================================================
// STATIC PAGES (from routes.ts)
// ============================================================================

interface PageInfo {
  pageKey: PageKey;
  languages: Lang[];
}

function getAllStaticPages(): PageInfo[] {
  return Object.entries(routes).map(([key, langRoutes]) => ({
    pageKey: key as PageKey,
    languages: LANGUAGES.filter((lang) => langRoutes[lang] !== undefined),
  }));
}

/**
 * Generate URL entry for a static page
 * Includes hreflang alternates and smart x-default
 */
function generateStaticUrlEntry(pageKey: PageKey, lang: Lang, allLangs: Lang[]): string {
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

  // Smart x-default: use default language if available, otherwise first available language
  const xDefaultLang = pageExistsIn(pageKey, DEFAULT_LANG) ? DEFAULT_LANG : allLangs[0];
  const xDefaultUrl = getAbsoluteUrl(pageKey, xDefaultLang);
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultUrl}" />`;

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}
${xDefault}
  </url>`;
}

// ============================================================================
// BLOG POSTS (from Content Collections)
// ============================================================================

interface BlogPost {
  slug: string;
  date?: Date;
}

async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    slug: post.slug,
    date: post.data.date,
  }));
}

/**
 * Generate URL entry for a blog post
 * Blog posts are single-language (ES), no hreflang needed
 */
function generateBlogUrlEntry(post: BlogPost): string {
  const loc = `${BASE_URL}/blog/${post.slug}/`;
  const lastmod = post.date
    ? post.date.toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
}

// ============================================================================
// MAIN EXPORT
// ============================================================================

export const GET: APIRoute = async () => {
  // Get all static pages
  const staticPages = getAllStaticPages();
  const staticEntries: string[] = [];

  for (const { pageKey, languages } of staticPages) {
    for (const lang of languages) {
      staticEntries.push(generateStaticUrlEntry(pageKey, lang, languages));
    }
  }

  // Get all blog posts
  const blogPosts = await getAllBlogPosts();
  const blogEntries = blogPosts.map(generateBlogUrlEntry);

  // Combine all entries
  const allEntries = [...staticEntries, ...blogEntries];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allEntries.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
