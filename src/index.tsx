import { ScreenProvider } from '@lib/screenType';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import App from './App.tsx';
import '@config/i18next/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScreenProvider>
      <App />
    </ScreenProvider>
  </StrictMode>
);
