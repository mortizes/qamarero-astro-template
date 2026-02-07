/**
 * LanguageSelector React Component
 *
 * For use in React islands (e.g., mobile menu).
 * Uses centralized i18n utils - single source of truth.
 */

import React from "react";
import { DEFAULT_LANG, LANGUAGES, languageConfig, type Lang } from "@/i18n/config";
import { routes, type PageKey } from "@/i18n/routes";
import { cn } from "@/lib/utils";

interface LanguageSelectorProps {
  pageKey?: PageKey;
  lang?: Lang;
  className?: string;
}

/**
 * Gets localized URL for a page (mirrors utils.ts logic)
 * Note: Can't import from utils.ts in React due to server-only code
 */
function getLocalizedUrl(pageKey: PageKey, lang: Lang): string {
  const pageRoutes = routes[pageKey];
  const slug = pageRoutes?.[lang];
  const prefix = lang === DEFAULT_LANG ? "" : `/${lang}`;

  if (slug !== undefined) {
    if (slug === "") {
      return prefix ? `${prefix}/` : "/";
    }
    return `${prefix}/${slug}/`;
  }

  return prefix ? `${prefix}/` : "/";
}

function pageExistsIn(pageKey: PageKey, lang: Lang): boolean {
  return routes[pageKey]?.[lang] !== undefined;
}

export function LanguageSelector({
  pageKey = "home",
  lang: currentLang = DEFAULT_LANG,
  className,
}: LanguageSelectorProps) {
  const languageOptions = LANGUAGES.map((lang) => ({
    lang,
    label: languageConfig[lang].label,
    flag: languageConfig[lang].flag,
    targetUrl: getLocalizedUrl(pageKey, lang),
    exists: pageExistsIn(pageKey, lang),
  }));

  const currentUrl = getLocalizedUrl(pageKey, currentLang);

  return (
    <div className={cn("language-selector relative", className)}>
      <select
        defaultValue={currentUrl}
        onChange={(e) => {
          const selectedOption = e.target.options[e.target.selectedIndex];
          const lang = selectedOption?.dataset.lang;

          // Save preference
          if (lang) {
            try {
              localStorage.setItem("preferred-language", lang);
            } catch {
              // localStorage not available
            }
          }

          window.location.href = e.target.value;
        }}
        className="appearance-none bg-transparent border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1.5 pr-7 text-sm cursor-pointer hover:border-gray-400 dark:hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        aria-label="Select language"
      >
        {languageOptions.map(({ lang, label, flag, targetUrl, exists }) => (
          <option key={lang} value={targetUrl} data-lang={lang}>
            {flag} {label} {!exists && "(home)"}
          </option>
        ))}
      </select>

      <svg
        className="absolute right-1.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-500 dark:text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}

export default LanguageSelector;
