import type { TScreenType } from '@app-types/index';
import { ScreenContext } from '@lib/screenType';
import { useContext } from 'react';

export const useScreenType = (): TScreenType => {
  const context = useContext(ScreenContext);
  if (!context) {
    throw new Error('useScreen must be used within a ScreenProvider');
  }
  return context;
};
