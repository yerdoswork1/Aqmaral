import { useScreenType } from '@lib/screenType';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import en from './../../../assets/flags/en.png';
import kk from './../../../assets/flags/kk.png';
import ru from './../../../assets/flags/ru.png';

import styles from './LangSwitcher.module.scss';

const getLanguages = (type: string) => {
  if (type === 'mobileS')
    return [
      { code: 'en', label: 'Eng', flag: en },
      { code: 'ru', label: 'Рус', flag: ru },
      { code: 'kk', label: 'Қаз', flag: kk }
    ];

  return [
    { code: 'en', label: 'English', flag: en },
    { code: 'ru', label: 'Русский', flag: ru },
    { code: 'kk', label: 'Қазақша', flag: kk }
  ];
};

export const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const screenType = useScreenType();
  const languages = getLanguages(screenType);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = params.lang || i18n.language;
  const currentLanguage = languages.find((l) => l.code === currentLang) || languages[0];

  const changeLanguage = (newLang: string) => {
    const newPath = location.pathname.replace(/^\/(ru|kk|en)/, `/${newLang}`);
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
    navigate(newPath + location.search);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper} ref={dropdownRef}>
      <button className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        <img src={currentLanguage.flag} className={styles.flag} alt={currentLanguage.code} />
        <span className={styles.label}>{currentLanguage.label}</span>
      </button>

      {isOpen && (
        <ul className={styles.dropdown}>
          {languages.map(({ code, label, flag }) => (
            <li
              key={code}
              className={clsx(styles.option, { [styles.active]: code === currentLang })}
              onClick={() => changeLanguage(code)}
            >
              <img src={flag} className={styles.flag} alt={code} />
              <span className={styles.label}>{label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
