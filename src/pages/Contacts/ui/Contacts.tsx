import { BreadCrumbs, ContactsBanner, FilialsMap } from '@components/index';
import { useScreenType } from '@lib/screenType';
import { useTranslation } from 'react-i18next';
import styles from './Contacts.module.scss';
import { getLinks } from '../model/linksData';

const EMAIL = 'info@ozimki.com';

const Contacts = () => {
  const screenType = useScreenType();
  const { t } = useTranslation();
  const links = getLinks(t);
  return (
    <main className={styles.container}>
      {screenType !== 'mobileS' && <BreadCrumbs links={links} />}
      <ContactsBanner email={EMAIL} />
      <FilialsMap />
    </main>
  );
};

export default Contacts;
