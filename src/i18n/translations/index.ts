/**
 * Translations Index
 * Exports translation helpers and aggregates all language files
 */

import type { Lang } from '../config';
import { common as esCommon, type CommonTranslations } from './es/common';
import { common as frCommon } from './fr/common';
import { common as enCommon } from './en/common';
import { common as itCommon } from './it/common';

// Aggregate all translations
const translations: Record<Lang, { common: CommonTranslations }> = {
  es: { common: esCommon },
  fr: { common: frCommon },
  en: { common: enCommon },
  it: { common: itCommon },
};

type Namespace = 'common';

/**
 * Creates a translation function for a specific language
 *
 * @example
 * const t = useTranslations('fr');
 * t('common', 'nav.features') // 'Fonctionnalites'
 */
export function useTranslations(lang: Lang) {
  return function t(namespace: Namespace, key: string): string {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[lang][namespace];

    for (const k of keys) {
      value = value?.[k];
    }

    // Return key in brackets if translation not found (helps debugging)
    return value ?? `[${namespace}:${key}]`;
  };
}

/**
 * Direct translation helper for templates
 *
 * @example
 * t('fr', 'common', 'nav.features') // 'Fonctionnalites'
 */
export function t(lang: Lang, namespace: Namespace, key: string): string {
  return useTranslations(lang)(namespace, key);
}

/**
 * Gets all translations for a namespace in a specific language
 * Useful for passing entire sections to components
 *
 * @example
 * getTranslations('fr', 'common').nav // { features: 'Fonctionnalites', ... }
 */
export function getTranslations<N extends Namespace>(
  lang: Lang,
  namespace: N
): (typeof translations)[Lang][N] {
  return translations[lang][namespace];
}

// Re-export types
export type { CommonTranslations };
