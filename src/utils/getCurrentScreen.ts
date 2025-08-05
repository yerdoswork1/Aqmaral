import type { TScreenType } from '@app-types/index';

export const getCurrentScreen = (windowWidth: number): TScreenType => {
  if (windowWidth > 1440) return 'desktop';
  if (windowWidth <= 1440 && windowWidth > 768) return 'laptop';
  if (windowWidth <= 768 && windowWidth > 375) return 'mobile';
  return 'mobileS';
};
