import { RouteNames } from '@config/RoutNames';
import { useScreenType } from '@lib/screenType';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

const NotFound = () => {
  const screenType = useScreenType();
  const { t, i18n } = useTranslation();
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>404</h1>
        <h2>{t('404.title')}</h2>
        <p>{t('404.description')}</p>
        {screenType !== 'mobileS' && (
          <Link to={`/${i18n.language}/${RouteNames.MAIN}`} className={styles.link}>
            {t('404.btn')}
          </Link>
        )}
      </div>
      {screenType === 'mobileS' && (
        <Link to={`/${i18n.language}/${RouteNames.MAIN}`} className={styles.link}>
          {t('404.btn')}
        </Link>
      )}
    </main>
  );
};

export default NotFound;
