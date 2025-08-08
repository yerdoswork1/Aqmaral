import { useTranslation } from 'react-i18next';

import map from './../../../assets/images/map.png';

import styles from './Filials.module.scss';

export const FilialsMap = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{t('contacts.filialsTitle')}</h3>
      <div className={styles.mapContainer}>
        <img className={styles.map} src={map} alt="map" />
      </div>
    </div>
  );
};
