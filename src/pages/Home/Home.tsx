import { Banner, InfoCard } from '@components/index';
import { useTranslation } from 'react-i18next';

import styles from './Home.module.scss';

export const Home = () => {
  const { t } = useTranslation();
  const INFO = [
    { value: '13+', text: t('home.infoCards.experience') },
    { value: '3', text: t('home.infoCards.countries') },
    { value: '100+', text: t('home.infoCards.employees') },
    { value: '200+', text: t('home.infoCards.projects') }
  ];
  return (
    <main className={styles.container}>
      <section className={styles.banner}>
        <Banner />
      </section>
      <section className={styles.infoCards}>
        {INFO.map((card, index) => (
          <InfoCard key={index} value={card.value} text={card.text} />
        ))}
      </section>
    </main>
  );
};
