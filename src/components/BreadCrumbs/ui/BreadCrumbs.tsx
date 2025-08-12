import { BreadcrumbsLink } from '@app-types/breadCrambs';
import { ChevronIcon } from '@components/icons';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import styles from './BreadCrumbs.module.scss';

interface BreadCrumbsProps {
  links: BreadcrumbsLink[];
  className?: string;
}

export const BreadCrumbs = ({ links, className = '' }: BreadCrumbsProps) => {
  const { i18n } = useTranslation();
  const location = useLocation();

  return (
    <div className={clsx(styles.breadcrumbs, className)}>
      <nav className={styles.nav}>
        {links.map((link, index) => {
          const isActive = location.pathname === `/${i18n.language}/${link.path}` || index === 1; // temp
          return (
            <ul key={index} className={styles.list}>
              {isActive ? (
                <li className={clsx(styles.item, isActive && styles.active)}>{link.label}</li>
              ) : (
                <li className={clsx(styles.item, isActive && styles.active)}>
                  <Link to={`/${i18n.language}/${link.path}`} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              )}
              {index < links.length - 1 && (
                <span>
                  <ChevronIcon />
                </span>
              )}
            </ul>
          );
        })}
      </nav>
    </div>
  );
};
