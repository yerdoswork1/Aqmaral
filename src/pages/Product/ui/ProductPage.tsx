import { ProductNames } from '@app-types/productNames';
import { BreadCrumbs, ProductsContent } from '@components/index';
import { useScreenType } from '@lib/screenType';
import { getContentData, getLinks } from '@pages/Product';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const screenType = useScreenType();
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') ?? ProductNames.SANA_UP;
  const { t } = useTranslation();
  const links = getLinks(t, name);
  const data = getContentData(name);
  return (
    <main className={styles.container}>
      {screenType !== 'mobileS' && <BreadCrumbs links={links} />}
      <ProductsContent title={name} text={t(data.description)} link={data.link} src={data.src} />
    </main>
  );
};

export default ProductPage;
