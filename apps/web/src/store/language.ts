'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TRANSLATIONS, type Language, type Translations } from '@/lib/translations';

interface LocationState {
  city: string;
  pincode: string;
  state: string;
}

interface LanguageStore {
  language: Language;
  t: Translations;
  location: LocationState;
  setLanguage: (lang: Language) => void;
  setLocation: (loc: Partial<LocationState>) => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: 'en',
      t: TRANSLATIONS.en,
      location: {
        city: 'Vadodara',
        pincode: '390001',
        state: 'Gujarat',
      },
      setLanguage: (lang) =>
        set({
          language: lang,
          t: TRANSLATIONS[lang] || TRANSLATIONS.en,
        }),
      setLocation: (loc) =>
        set((state) => ({
          location: { ...state.location, ...loc },
        })),
    }),
    {
      name: 'nexmart-lang-location',
    },
  ),
);

export default useLanguageStore;
