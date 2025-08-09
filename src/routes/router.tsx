import { Spinner } from '@components/Spinner';
import { RouteNames } from '@config/RoutNames';
import { AppLayout } from '@layouts/index';
import { HomePage, ContactsPage, ProductPage, InfoPage, NotFoundPage } from '@pages/index';
import { Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import { Navigate } from 'react-router-dom';

const SUPPORTED_LANGS = ['ru', 'en', 'kk'];

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        index
        element={<Navigate to={`/${localStorage.getItem('i18nextLng') || 'en'}`} replace />}
      />
      {SUPPORTED_LANGS.map((lang) => (
        <Route
          key={lang}
          path={`/${lang}`}
          element={
            <Suspense fallback={<Spinner />}>
              <AppLayout />
            </Suspense>
          }
        >
          <Route index path={RouteNames.MAIN} element={<HomePage />} />
          <Route path={RouteNames.CONTACTS} element={<ContactsPage />} />
          <Route path={RouteNames.PRODUCT} element={<ProductPage />} />
          <Route path={RouteNames.INFO} element={<InfoPage />} />
        </Route>
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);
