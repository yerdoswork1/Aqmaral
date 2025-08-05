import { useTranslation } from 'react-i18next';

import styles from './Home.module.scss';

export const Home = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('title')}</h2>
      <div className={styles.content}>Content</div>
    </div>
  );
};
