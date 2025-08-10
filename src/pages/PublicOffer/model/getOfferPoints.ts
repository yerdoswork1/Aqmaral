import { getPoints } from '@utils/getPoints';
import { TFunction } from 'i18next';

export const pointKeys = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten'
] as const;

export type PointKey = (typeof pointKeys)[number];
export type OfferPoints = Record<PointKey, string[]>;

export const getOfferPoints = (t: TFunction): OfferPoints =>
  getPoints(pointKeys, t, 'publicOffer.points');
