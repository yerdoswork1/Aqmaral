// import { useTranslation } from 'react-i18next';

import { Banner } from '@components/index';

import styles from './Home.module.scss';

export const Home = () => {
  // const { t } = useTranslation();
  return (
    <main className={styles.container}>
      <section className={styles.banner}>
        <Banner />
      </section>
    </main>
  );
};
