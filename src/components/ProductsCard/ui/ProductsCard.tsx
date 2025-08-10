import { RouteNames } from '@config/RoutNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import phone from './../../../assets/images/productsApp/border.png';

import styles from './ProductsCard.module.scss';

interface ProductsCardProps {
  title: string;
  text: string;
  src: string;
}

export const ProductsCard: FC<ProductsCardProps> = ({ title, text, src }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
          <div className={styles.text}>{text}</div>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.imgWrap} src={phone} alt="phone" />
          <div className={styles.imgContainer2}>
            <img className={styles.img} src={src} alt="product" />
          </div>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <Link to={`/${i18n.language}/${RouteNames.PRODUCT}?name=${title}`} className={styles.btn}>
          {t('home.products.button')}
        </Link>
      </div>
    </div>
  );
};
