import { ArrowIcon } from '@components/icons';
import { useScreenType } from '@lib/screenType';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import styles from './ProductsContent.module.scss';

interface ProductsContentProps {
  title: string;
  text: string;
  link: string;
  src: string;
}

export const ProductsContent: FC<ProductsContentProps> = ({ title, text, link, src }) => {
  const { t } = useTranslation();
  const screenType = useScreenType();
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.imgWrap}>
        {screenType === 'mobileS' && (
          <button className={styles.backBtn} onClick={() => navigate(-1)}>
            <ArrowIcon className={styles.iconBackBtn} />
          </button>
        )}
        <div className={styles.imgContainer}>
          <img className={styles.img} src={src} alt="product" />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
          <div className={styles.text}>{text}</div>
        </div>
        <div className={styles.btnContainer}>
          <Link to={link} className={styles.btn}>
            {t('product.link')}
          </Link>
        </div>
      </div>
    </div>
  );
};
