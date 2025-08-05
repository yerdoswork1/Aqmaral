import type { TScreenType } from '@app-types/index';

export const getCurrentScreen = (windowWidth: number): TScreenType => {
  if (windowWidth > 1400) return 'desktop';
  if (windowWidth <= 1400 && windowWidth > 1200) return 'laptop';
  if (windowWidth <= 1200 && windowWidth > 768) return 'tablet';
  return 'mobile';
};
