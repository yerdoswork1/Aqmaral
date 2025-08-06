import { useTranslation } from 'react-i18next';

import bannerImg from './../../../assets/images/BannerImg.png';

import styles from './Banner.module.scss';

export const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.title}>
          <span className={styles.brand}>Aqmaral</span>
          {` - ${t('home.banner.title')}`}
        </div>
        <div className={styles.description}>{t('home.banner.description')}</div>
      </div>
      <div className={styles.imgContainer}>
        <img src={bannerImg} className={styles.img} alt="banner" />
      </div>
    </div>
  );
};
