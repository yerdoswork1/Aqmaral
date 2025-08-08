import { BreadcrumbsLink } from '@app-types/breadCrambs';
import { RouteNames } from '@config/RoutNames';

export const getLinks = (t: (key: string) => string): BreadcrumbsLink[] => [
  { label: t('home.link'), path: RouteNames.MAIN },
  { label: t('contacts.link'), path: RouteNames.CONTACTS }
];
