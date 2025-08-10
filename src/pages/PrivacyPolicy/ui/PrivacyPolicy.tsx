import { Points } from '@components/index';
import { useTranslation } from 'react-i18next';
import { getPointsTitle, pointKeys, getPolicyPoints } from '../model';

import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();
  const pointsTitle = getPointsTitle(t);
  const policyPoints = getPolicyPoints(t);
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{t('privacyPolicy.head')}</h1>
      <div className={styles.start}>
        <p className={styles.date}>14.12.2019</p>
        <p className={styles.intro}>{t('privacyPolicy.intro')}</p>
      </div>
      <div className={styles.policyWrapper}>
        {pointKeys.map((key, index) => (
          <Points key={key} items={policyPoints[key]} title={pointsTitle[index]} />
        ))}
      </div>
      <p className={styles.end}>{t('privacyPolicy.update')}</p>
    </main>
  );
};

export default PrivacyPolicyPage;
