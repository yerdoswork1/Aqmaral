import { lazy } from 'react';

export const HomePage = lazy(() => import('./Home/Home'));
export const InfoPage = lazy(() => import('./Info/ui/Info'));
export const ContactsPage = lazy(() => import('./Contacts/ui/Contacts'));
export const ProductPage = lazy(() => import('./Product/ui/ProductPage'));
export const PrivacyPolicyPage = lazy(() => import('./PrivacyPolicy/ui/PrivacyPolicy'));
export const PublicOfferPage = lazy(() => import('./PublicOffer/ui/PublicOffer'));
export const NotFoundPage = lazy(() => import('./NotFound/ui/NotFound'));
