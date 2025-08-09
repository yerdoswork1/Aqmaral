import { ArrowIcon } from '@components/icons';
import { RouteNames } from '@config/RoutNames';
import { useScreenType } from '@lib/screenType';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './Info.module.scss';

const Info = () => {
  const screenType = useScreenType();
  const { t, i18n } = useTranslation();
  return (
    <>
      {screenType === 'mobileS' && (
        <main className={styles.container}>
          <h2 className={styles.title}>{t('info.title')}</h2>
          <Link to={`/${i18n.language}/${RouteNames.PUBLIC_OFFER}`} className={styles.link}>
            {t('footer.publicOffer')} <ArrowIcon className={styles.arrow} />
          </Link>
          <Link to={`/${i18n.language}/${RouteNames.PRIVACY_POLICY}`} className={styles.link}>
            {t('footer.privacyPolicy')} <ArrowIcon className={styles.arrow} />
          </Link>
          <div className={styles.line}></div>
          <div className={styles.info}>
            © 2018-2025, Aqmaral. <span>{t('footer.rightsReserved')}</span>
          </div>
        </main>
      )}
    </>
  );
};

export default Info;
