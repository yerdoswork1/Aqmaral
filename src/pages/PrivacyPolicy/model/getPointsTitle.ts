import { TFunction } from 'i18next';

import { pointKeys } from './getPolicyPoints';

export const getPointsTitle = (t: TFunction): string[] =>
  pointKeys.map((_, index) => t(`privacyPolicy.points.title-${index + 1}`));
