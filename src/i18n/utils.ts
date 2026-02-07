/**
 * i18n Utilities - Single Source of Truth
 *
 * All URL generation and language detection functions in one place.
 * Used by: LanguagePicker, HreflangTags, Navbar, pages
 *
 * Architecture:
 * - ES at root (/), other languages with prefix (/fr/, /en/, /it/)
 * - Routes defined in routes.ts for localized slugs
 * - This file provides helpers for URL generation and language detection
 */

import {
  DEFAULT_LANG,
  BASE_URL,
  isValidLang,
  LANGUAGES,
  languageConfig,
  type Lang,
} from './config';
import { routes, type PageKey } from './routes';

// ============================================================================
// URL Generation
// ============================================================================

/**
 * Gets the URL prefix for a language
 * ES at root (no prefix), others with prefix (/fr/, /en/, /it/)
 */
export function getLangPrefix(lang: Lang): string {
  return lang === DEFAULT_LANG ? '' : `/${lang}`;
}

/**
 * Gets the localized URL for a page in a specific language
 *
 * @example
 * getLocalizedUrl('pricing', 'es') // '/precios/'
 * getLocalizedUrl('pricing', 'fr') // '/fr/tarifs/'
 * getLocalizedUrl('home', 'es')    // '/'
 * getLocalizedUrl('home', 'fr')    // '/fr/'
 */
export function getLocalizedUrl(pageKey: PageKey, lang: Lang): string {
  const pageRoutes = routes[pageKey];
  const slug = pageRoutes?.[lang];
  const prefix = getLangPrefix(lang);

  if (slug !== undefined) {
    // Home: / or /fr/
    if (slug === '') {
      return prefix ? `${prefix}/` : '/';
    }
    // Pages: /precios/ or /fr/tarifs/
    return `${prefix}/${slug}/`;
  }

  // Fallback: home of the language
  return prefix ? `${prefix}/` : '/';
}

/**
 * Checks if a page exists in a specific language
 */
export function pageExistsIn(pageKey: PageKey, lang: Lang): boolean {
  return routes[pageKey]?.[lang] !== undefined;
}

/**
 * Generates absolute URL for hreflang/sitemap/canonical
 */
export function getAbsoluteUrl(pageKey: PageKey, lang: Lang): string {
  return `${BASE_URL}${getLocalizedUrl(pageKey, lang)}`;
}

/**
 * Gets all alternate URLs for a page (for hreflang tags)
 * Only includes languages where the page exists
 */
export function getAlternateUrls(pageKey: PageKey): Array<{ lang: Lang; url: string }> {
  return LANGUAGES
    .filter((lang) => pageExistsIn(pageKey, lang))
    .map((lang) => ({
      lang,
      url: getAbsoluteUrl(pageKey, lang),
    }));
}

// ============================================================================
// Language Detection
// ============================================================================

/**
 * Gets the language from a URL pathname
 *
 * @example
 * getLangFromUrl(new URL('https://site.com/fr/tarifs')) // 'fr'
 * getLangFromUrl(new URL('https://site.com/precios'))   // 'es' (default)
 */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment && isValidLang(segment)) {
    return segment;
  }
  return DEFAULT_LANG;
}

/**
 * Gets the pageKey from a URL by searching in the routes map
 */
export function getPageKeyFromUrl(url: URL): PageKey | null {
  const lang = getLangFromUrl(url);
  const pathname = url.pathname;

  // Remove language prefix if present
  let pathWithoutLang = pathname;
  if (lang !== DEFAULT_LANG) {
    pathWithoutLang = pathname.replace(`/${lang}`, '') || '/';
  }

  // Extract slug (remove leading/trailing slashes)
  const slug = pathWithoutLang === '/' ? '' : pathWithoutLang.replace(/^\/|\/$/g, '');

  // Search in routes
  for (const [key, langRoutes] of Object.entries(routes)) {
    if (langRoutes[lang as Lang] === slug) {
      return key as PageKey;
    }
  }

  return null;
}

// ============================================================================
// Language Switching
// ============================================================================

/**
 * Switches language while preserving page context
 * If page doesn't exist in target language, returns home
 *
 * @example
 * // On /fr/tarifs, switch to ES -> /precios/
 * // On /fr/loi-egalim (FR only), switch to ES -> /
 */
export function switchLanguageUrl(currentUrl: URL, targetLang: Lang): string {
  const pageKey = getPageKeyFromUrl(currentUrl);

  if (pageKey && pageExistsIn(pageKey, targetLang)) {
    return getLocalizedUrl(pageKey, targetLang);
  }

  // Fallback to home
  const prefix = getLangPrefix(targetLang);
  return prefix ? `${prefix}/` : '/';
}

/**
 * Gets the canonical URL for the current page
 */
export function getCanonicalUrl(pageKey: PageKey, lang: Lang): string {
  return getAbsoluteUrl(pageKey, lang);
}

// ============================================================================
// Path Translation (for navigation links)
// ============================================================================

/**
 * Returns a function that translates internal paths to localized URLs
 * Useful for CTAs and navigation that use semantic paths
 *
 * @example
 * const translatePath = useTranslatedPath('fr');
 * translatePath('/pricing')  // '/fr/tarifs/'
 * translatePath('/features') // '/fr/fonctionnalites/'
 */
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string): string {
    const prefix = getLangPrefix(lang);

    // Root path
    if (path === '/' || path === '') {
      return prefix ? `${prefix}/` : '/';
    }

    // Clean the path
    const cleanPath = path.replace(/^\/|\/$/g, '');
    const segments = cleanPath.split('/');

    // Find matching page key
    for (const [key, langRoutes] of Object.entries(routes)) {
      // Check if any language has this slug or if key matches
      const hasSlug = Object.values(langRoutes).some((slug) => slug === segments[0]);
      const keyMatches = key === segments[0];

      if (hasSlug || keyMatches) {
        const translatedSlug = langRoutes[lang as Lang];
        if (translatedSlug !== undefined) {
          if (translatedSlug === '') {
            return prefix ? `${prefix}/` : '/';
          }
          // Handle subpaths (e.g., /blog/post-slug)
          if (segments.length > 1) {
            const subPath = segments.slice(1).join('/');
            return `${prefix}/${translatedSlug}/${subPath}/`;
          }
          return `${prefix}/${translatedSlug}/`;
        }
      }
    }

    // Fallback: add prefix to path as-is
    return `${prefix}/${cleanPath}/`;
  };
}

// ============================================================================
// Date Formatting
// ============================================================================

/**
 * Formats a date according to the language's locale
 */
export function formatDate(
  date: Date,
  lang: Lang,
  options?: Intl.DateTimeFormatOptions
): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const localeMap: Record<Lang, string> = {
    es: 'es-ES',
    fr: 'fr-FR',
    en: 'en-GB',
    it: 'it-IT',
  };

  return new Intl.DateTimeFormat(localeMap[lang], options || defaultOptions).format(date);
}

// ============================================================================
// Language Preference (Client-side)
// ============================================================================

/**
 * Saves language preference to localStorage
 */
export function saveLanguagePreference(lang: Lang): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('preferred-language', lang);
    } catch {
      // localStorage not available
    }
  }
}

/**
 * Gets saved language preference
 */
export function getLanguagePreference(): Lang | null {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('preferred-language');
      if (stored && isValidLang(stored)) {
        return stored;
      }
    } catch {
      // localStorage not available
    }
  }
  return null;
}

// ============================================================================
// Pre-computed Language Options (for LanguagePicker)
// ============================================================================

/**
 * Generates language options for the picker
 * Used by both Astro and React components
 */
export function getLanguageOptions(pageKey: PageKey, currentLang: Lang) {
  return LANGUAGES.map((lang) => ({
    lang,
    label: languageConfig[lang].label,
    flag: languageConfig[lang].flag,
    targetUrl: getLocalizedUrl(pageKey, lang),
    exists: pageExistsIn(pageKey, lang),
    isCurrent: lang === currentLang,
  }));
}

// Re-export for convenience
export { languageConfig };
