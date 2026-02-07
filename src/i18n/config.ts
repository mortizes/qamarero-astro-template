/**
 * i18n Configuration
 * Central configuration for multi-language support
 */

// Supported languages (order matters for UI)
export const LANGUAGES = ['es', 'fr', 'en', 'it'] as const;
export type Lang = (typeof LANGUAGES)[number];

// Default language (Spanish)
export const DEFAULT_LANG: Lang = 'es';

// Base URL for absolute URLs (hreflang, sitemap)
// Uses environment variable or falls back to production URL
// In Astro, import.meta.env.SITE comes from astro.config.mjs "site" property
export const BASE_URL = import.meta.env.SITE || 'https://qamarero.com';

// Metadata per language
export const languageConfig: Record<
  Lang,
  {
    label: string;
    flag: string;
    hreflang: string;
    dateLocale: string;
  }
> = {
  es: { label: 'Español', flag: '🇪🇸', hreflang: 'es', dateLocale: 'es-ES' },
  fr: { label: 'Français', flag: '🇫🇷', hreflang: 'fr', dateLocale: 'fr-FR' },
  en: { label: 'English', flag: '🇬🇧', hreflang: 'en', dateLocale: 'en-GB' },
  it: { label: 'Italiano', flag: '🇮🇹', hreflang: 'it', dateLocale: 'it-IT' },
};

/**
 * Type guard to validate if a string is a valid Lang
 */
export function isValidLang(lang: string): lang is Lang {
  return LANGUAGES.includes(lang as Lang);
}
