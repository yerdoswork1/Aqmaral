import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enPrivacyPolicy from './locales/en/privacyPolicy.json';
import en from './locales/en/translation.json';
import kkPrivacyPolicy from './locales/kk/privacyPolicy.json';
import kk from './locales/kk/translation.json';
import ruPrivacyPolicy from './locales/ru/privacyPolicy.json';
import ru from './locales/ru/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru', 'kk'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    resources: {
      en: { translation: { ...en, ...enPrivacyPolicy } },
      ru: { translation: { ...ru, ...ruPrivacyPolicy } },
      kk: { translation: { ...kk, ...kkPrivacyPolicy } }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
