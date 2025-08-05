import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import kk from './locales/kk/translation.json';
import ru from './locales/ru/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['ru', 'kk', 'en'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      kk: { translation: kk }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
