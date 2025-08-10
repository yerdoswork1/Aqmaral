import i18n from '@config/i18next/i18n';
import { useLayoutEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const SUPPORTED_LANGS = ['en', 'ru', 'kk'];

export const useLangSync = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    let currentLang = lang;

    if (!currentLang || !SUPPORTED_LANGS.includes(currentLang)) {
      currentLang = localStorage.getItem('i18nextLng') || 'en';
      navigate(`/${currentLang}${location.pathname}`, { replace: true });
      return;
    }

    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
      localStorage.setItem('i18nextLng', currentLang);
    }
  }, [lang, location.pathname, navigate]);
};
