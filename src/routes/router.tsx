import { AppLayout } from '@layouts/index';
import { Home } from '@pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<AppLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);
