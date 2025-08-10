import { Points } from '@components/index';
import { useTranslation } from 'react-i18next';
import { getPointsTitle, pointKeys, getOfferPoints } from '../model';

import styles from './PublicOffer.module.scss';

const PublicOfferPage = () => {
  const { t } = useTranslation();
  const pointsTitle = getPointsTitle(t);
  const offerPoints = getOfferPoints(t);
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{t('publicOffer.head')}</h1>
      <div className={styles.policyWrapper}>
        {pointKeys.map((key, index) => (
          <Points key={key} items={offerPoints[key]} title={pointsTitle[index]} />
        ))}
      </div>
    </main>
  );
};

export default PublicOfferPage;
