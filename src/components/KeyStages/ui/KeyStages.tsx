import { useTranslation } from 'react-i18next';

import styles from './KeyStages.module.scss';

export const KeyStages = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{t('home.stages.title')}</h3>
      <p className={styles.text}>{t('home.stages.text')}</p>
    </div>
  );
};
