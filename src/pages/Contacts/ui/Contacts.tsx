import { BreadCrumbs } from '@components/index';
import { useScreenType } from '@lib/screenType';
import { useTranslation } from 'react-i18next';

import styles from './Contacts.module.scss';
import { getLinks } from '../model/linksData';

const Contacts = () => {
  const screenType = useScreenType();
  const { t } = useTranslation();
  const links = getLinks(t);
  return (
    <main className={styles.container}>
      {screenType !== 'mobileS' && <BreadCrumbs links={links} />}
      {/* <Contacts/>
      <FilialsMap/> */}
    </main>
  );
};

export default Contacts;
