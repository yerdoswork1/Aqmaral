import { LangSwitcher } from '@components/LangSwutcher';
import { useScreenType } from '@lib/screenType';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Logo from './../../../assets/Vector.png';

import styles from './Header.module.scss';

export const Header = () => {
  const screenType = useScreenType();
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={Logo} className={styles.logo} />
        <div className={styles.content}>
          {screenType !== 'mobileS' && (
            <Link to="" className={styles.link}>
              {t('header.contacts')}
            </Link>
          )}
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
};
