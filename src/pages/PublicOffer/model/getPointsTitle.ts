import { TFunction } from 'i18next';

import { pointKeys } from './getOfferPoints';

export const getPointsTitle = (t: TFunction): string[] =>
  pointKeys.map((_, index) => t(`publicOffer.points.title-${index + 1}`));
