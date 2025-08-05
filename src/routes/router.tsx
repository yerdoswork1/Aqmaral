import { Spinner } from '@components/Spinner';
import { AppLayout } from '@layouts/index';
import { Home } from '@pages/Home';
import { Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import { Navigate } from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        index
        element={<Navigate to={`/${localStorage.getItem('i18nextLng') || 'ru'}`} replace />}
      />
      <Route
        path="/:lang"
        element={
          <Suspense fallback={<Spinner />}>
            <AppLayout />
          </Suspense>
        }
      >
        <Route index element={<Home />} />
      </Route>
    </>
  )
);
