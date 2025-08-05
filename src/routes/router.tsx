import { Home } from '@pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';

export const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<Home />} />)
);
