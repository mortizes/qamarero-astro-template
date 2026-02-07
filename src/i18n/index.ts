/**
 * i18n Module
 * Multi-language support for Qamarero Astro Template
 *
 * @example
 * import { DEFAULT_LANG, getLocalizedUrl, t } from '../i18n';
 */

// Config
export {
  LANGUAGES,
  DEFAULT_LANG,
  BASE_URL,
  languageConfig,
  isValidLang,
  type Lang,
} from './config';

// Routes
export { routes, isValidPageKey, getAllPageKeys, type PageKey } from './routes';

// Utils
export {
  getLocalizedUrl,
  pageExistsIn,
  getLangFromUrl,
  getPageKeyFromUrl,
  getAbsoluteUrl,
  getAlternateUrls,
  switchLanguageUrl,
  getCanonicalUrl,
  useTranslatedPath,
  formatDate,
} from './utils';

// Translations (JSON-based system)
export { ui, useTranslations, type TranslationKey } from './ui';
