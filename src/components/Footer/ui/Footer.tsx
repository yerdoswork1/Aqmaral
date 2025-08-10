import { HouseIcon, PhoneIcon, CircleWaveIcon } from '@components/icons';
import { RouteNames } from '@config/RoutNames';
import { useScreenType } from '@lib/screenType';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

export const Footer = () => {
  const screenType = useScreenType();
  const { t, i18n } = useTranslation();

  return (
    <footer className={styles.footer}>
      {screenType !== 'mobileS' && (
        <div className={styles.container}>
          <div className={styles.line}></div>
          <div className={styles.infoContainer}>
            <div className={styles.info}>
              © 2018-2025, Aqmaral. <span>{t('footer.rightsReserved')}</span>
            </div>
            <div className={styles.links}>
              <Link to={`/${i18n.language}/${RouteNames.PUBLIC_OFFER}`} className={styles.link}>
                {t('footer.publicOffer')}
              </Link>
              <Link to={`/${i18n.language}/${RouteNames.PRIVACY_POLICY}`} className={styles.link}>
                {t('footer.privacyPolicy')}
              </Link>
            </div>
          </div>
        </div>
      )}
      {screenType === 'mobileS' && (
        <div className={styles.mobileContainer}>
          <Link to={`/${i18n.language}/${RouteNames.MAIN}`} className={styles.mobileLink}>
            <HouseIcon className={styles.mobileIcon} />
            <div className={styles.mobileLinkTitle}>{t('mobileFooter.main')}</div>
          </Link>
          <Link to={`/${i18n.language}/${RouteNames.INFO}`} className={styles.mobileLink}>
            <CircleWaveIcon className={styles.mobileIcon} />
            <div className={styles.mobileLinkTitle}>{t('mobileFooter.info')}</div>
          </Link>
          <Link to={`/${i18n.language}/${RouteNames.CONTACTS}`} className={styles.mobileLink}>
            <PhoneIcon className={styles.mobileIcon} />
            <div className={styles.mobileLinkTitle}>{t('mobileFooter.contacts')}</div>
          </Link>
        </div>
      )}
    </footer>
  );
};

export default Footer;
