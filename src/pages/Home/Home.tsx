import { Banner, InfoCard, ProductsCard, YearTimeline, KeyStages } from '@components/index';
import { useTranslation } from 'react-i18next';

import aveelon from './../../assets/images/productsApp/aveelon.png';
import offiwebsite from './../../assets/images/productsApp/offiwebsite.png';
import ozimki from './../../assets/images/productsApp/ozimki.png';
import sunaUp from './../../assets/images/productsApp/sana-up.png';

import styles from './Home.module.scss';

const Home = () => {
  const { t } = useTranslation();
  const INFO = [
    { value: '13+', text: t('home.infoCards.experience') },
    { value: '3', text: t('home.infoCards.countries') },
    { value: '100+', text: t('home.infoCards.employees') },
    { value: '200+', text: t('home.infoCards.projects') }
  ];
  const PRODUCTS = [
    { title: 'SanaUp', text: t('home.products.SanaUp.description'), src: sunaUp },
    { title: 'Offiwebsite', text: t('home.products.Offiwebsite.description'), src: offiwebsite },
    { title: 'Aveelon', text: t('home.products.Aveelon.description'), src: aveelon },
    { title: 'Ozimki', text: t('home.products.Ozimki.description'), src: ozimki }
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
      <section className={styles.products}>
        <h3 className={styles.productsTitle}>{t('home.products.title')}</h3>
        <div className={styles.productsCards}>
          {PRODUCTS.map((product, index) => (
            <ProductsCard key={index} title={product.title} text={product.text} src={product.src} />
          ))}
        </div>
      </section>
      <section>
        <KeyStages />
        <YearTimeline />
      </section>
    </main>
  );
};

export default Home;
