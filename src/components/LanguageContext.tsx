/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'pl' | 'en';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <T extends Record<string, any>>(obj: T, fieldPrefix: string) => any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Try to read preference from localStorage or default to 'pl' (since client is in Poland and names are Polish)
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('ewe_pysiewicz_lang');
    if (saved === 'en' || saved === 'pl') return saved;
    return 'pl'; // Polish default since experience credentials like Philipiak Milano, WP2 are based in PL
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('ewe_pysiewicz_lang', lang);
  };

  /**
   * Helper translator to fetch the correct field based on the active language.
   * e.g. t(HERO_CONTENT, 'headline') will resolve to HERO_CONTENT['headlinePl'] or HERO_CONTENT['headlineEn']
   */
  const t = <T extends Record<string, any>>(obj: T, fieldPrefix: string): any => {
    if (!obj) return '';
    const suffix = language === 'pl' ? 'Pl' : 'En';
    const key = `${fieldPrefix}${suffix}`;
    if (key in obj) {
      return obj[key];
    }
    // Fallback if the field matches exactly without suffix
    if (fieldPrefix in obj) {
      return obj[fieldPrefix];
    }
    return '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
