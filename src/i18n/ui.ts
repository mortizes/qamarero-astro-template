/**
 * UI Translations System
 * Dynamically loads all locale JSON files
 *
 * Based on astro-i18n-starter pattern
 */

import { LANGUAGES, DEFAULT_LANG, type Lang } from "./config";

/**
 * Dynamically import all locale JSON files
 * Loads files from /src/locales/[lang]/[namespace].json
 */
const localeModules = import.meta.glob("/src/locales/**/*.json", {
  eager: true,
});

/**
 * UI translations object with nested structure: lang.namespace.key
 * Built from locale files automatically
 * Example: ui.es.common.nav.home -> "Inicio"
 */
export const ui = Object.entries(localeModules).reduce(
  (acc, [path, module]) => {
    const pathParts = path.split("/");
    const lang = pathParts[3] as Lang; // Extract language from path
    const namespace = pathParts[4].replace(".json", ""); // Extract filename as namespace
    const translations = (module as Record<string, unknown>).default || module;

    if (!acc[lang]) {
      acc[lang] = {};
    }

    // Create nested structure: lang.namespace.key
    acc[lang][namespace] = translations as Record<string, unknown>;
    return acc;
  },
  {} as Record<Lang, Record<string, Record<string, unknown>>>
);

/**
 * Type for translation keys
 * Supports both formats:
 * - "namespace:key" → t("pages:home.title")
 * - Direct keys → t("nav.home") (assumes "common" namespace)
 */
export type TranslationKey = string;

/**
 * Get nested value from object using dot notation
 * Example: getNestedValue({ a: { b: 'c' } }, 'a.b') -> 'c'
 */
function getNestedValue(obj: unknown, path: string): unknown {
  return path.split(".").reduce((current: unknown, key) => {
    if (current && typeof current === "object" && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

/**
 * Replace {{key}} placeholders with provided values
 */
function interpolateParams(
  text: string,
  params: Record<string, string | number>
): string {
  return Object.entries(params).reduce(
    (result, [key, value]) =>
      result.replace(new RegExp(`{{${key}}}`, "g"), String(value)),
    text
  );
}

/**
 * Get raw translation value (for arrays, objects, etc.)
 */
function getRawTranslation(
  lang: Lang,
  namespace: string,
  translationKey: string
): unknown {
  return (
    getNestedValue(ui[lang]?.[namespace], translationKey) ||
    getNestedValue(ui[DEFAULT_LANG]?.[namespace], translationKey)
  );
}

/**
 * Returns translation function for specific language
 * Supports namespace:key format (e.g., "pages:home.title")
 * Falls back to DEFAULT_LANG if translation not found
 *
 * For arrays/objects, returns them directly
 * For strings, applies optional parameter interpolation
 */
export function useTranslations(lang: Lang) {
  return function t(
    key: TranslationKey,
    params?: Record<string, string | number>
  ): any {
    let namespace: string;
    let translationKey: string;

    // If no colon, assume "common" namespace
    if (!key.includes(":")) {
      namespace = "common";
      translationKey = key;
    } else {
      [namespace, translationKey] = key.split(":");
      if (!namespace || !translationKey) {
        return key;
      }
    }

    // Get translation with fallback to default language
    const translation = getRawTranslation(lang, namespace, translationKey);

    // Return undefined/null as the key for debugging
    if (translation === undefined || translation === null) {
      return key;
    }

    // Return arrays and objects directly
    if (Array.isArray(translation) || typeof translation === "object") {
      return translation;
    }

    // Apply parameter interpolation for strings
    if (params && typeof translation === "string") {
      return interpolateParams(translation, params);
    }

    return typeof translation === "string" ? translation : key;
  };
}
