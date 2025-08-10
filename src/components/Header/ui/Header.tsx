import { LangSwitcher } from '@components/LangSwutcher';
import { RouteNames } from '@config/RoutNames';
import { useScreenType } from '@lib/screenType';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Logo from './../../../assets/logo.png';

import styles from './Header.module.scss';

export const Header = () => {
  const screenType = useScreenType();
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={RouteNames.MAIN}>
          <img src={Logo} className={styles.logo} />
        </Link>
        <div className={styles.content}>
          {screenType !== 'mobileS' && (
            <Link to={RouteNames.CONTACTS} className={styles.link}>
              {t('header.contacts')}
            </Link>
          )}
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
};
