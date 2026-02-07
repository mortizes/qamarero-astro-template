/**
 * i18n Routes
 * Maps page keys to localized slugs per language
 *
 * RULES:
 * - Only add a language if the page EXISTS in that language
 * - Empty string ('') means root for that language
 * - Missing language = page doesn't exist in that language
 */

import type { Lang } from './config';

// Type for partial routes (page may not exist in all languages)
type RouteMap = Partial<Record<Lang, string>>;

/**
 * Page equivalents map
 * Key: internal page identifier
 * Value: object with slug per language
 *
 * Example: 'pricing' -> { es: 'precios', fr: 'tarifs', en: 'pricing' }
 */
export const routes = {
  // Main pages
  home: {
    es: '',
    fr: '',
    en: '',
    it: '',
  },
  features: {
    es: 'funcionalidades',
    fr: 'fonctionnalites',
    en: 'features',
    it: 'funzionalita',
  },
  pricing: {
    es: 'precios',
    fr: 'tarifs',
    en: 'pricing',
    it: 'prezzi',
  },
  integrations: {
    es: 'integraciones',
    fr: 'integrations',
    en: 'integrations',
    it: 'integrazioni',
  },
  contact: {
    es: 'contacto',
    fr: 'contact',
    en: 'contact',
    it: 'contatto',
  },

  // Company pages
  about: {
    es: 'nosotros',
    fr: 'a-propos',
    en: 'about',
    it: 'chi-siamo',
  },
  careers: {
    es: 'empleo',
    fr: 'carrieres',
    en: 'careers',
    it: 'lavora-con-noi',
  },

  // Blog
  blog: {
    es: 'blog',
    fr: 'blog',
    en: 'blog',
    it: 'blog',
  },

  // Legal pages
  privacy: {
    es: 'privacidad',
    fr: 'confidentialite',
    en: 'privacy',
    it: 'privacy',
  },
  terms: {
    es: 'terminos',
    fr: 'conditions',
    en: 'terms',
    it: 'termini',
  },
  'cookie-policy': {
    es: 'politica-cookies',
    fr: 'politique-cookies',
    en: 'cookie-policy',
    it: 'politica-cookie',
  },

  // Auth pages
  login: {
    es: 'iniciar-sesion',
    fr: 'connexion',
    en: 'login',
    it: 'accesso',
  },
  signup: {
    es: 'registro',
    fr: 'inscription',
    en: 'signup',
    it: 'registrazione',
  },

  // Country-specific pages (examples from doc)
  'case-studies': {
    es: 'casos-exito', // Only Spain
  },
  'loi-egalim': {
    fr: 'loi-egalim', // Only France (local law)
  },
} as const satisfies Record<string, RouteMap>;

export type PageKey = keyof typeof routes;

/**
 * Validates that a string is a valid PageKey
 */
export function isValidPageKey(key: string): key is PageKey {
  return key in routes;
}

/**
 * Gets all page keys
 */
export function getAllPageKeys(): PageKey[] {
  return Object.keys(routes) as PageKey[];
}
