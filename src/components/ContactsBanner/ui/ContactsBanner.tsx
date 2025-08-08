import { MailIcon } from '@components/icons';
import { useTranslation } from 'react-i18next';

import banner from './../../../assets/images/banners/contactsPageBanner.png';

import styles from './ContactsBanner.module.scss';

interface ContactsBannerProps {
  email: string;
}

export const ContactsBanner = ({ email }: ContactsBannerProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={banner} alt="contacts" />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.title}>{t('contacts.emailBlock')}</div>
        <div className={styles.email}>
          <MailIcon className={styles.icon} />
          <a className={styles.text} href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};
