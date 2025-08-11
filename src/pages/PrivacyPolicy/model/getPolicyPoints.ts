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
  'nine'
] as const;

export type PointKey = (typeof pointKeys)[number];
export type PolicyPoints = Record<PointKey, string[]>;

export const getPolicyPoints = (t: TFunction): PolicyPoints =>
  getPoints(pointKeys, t, 'privacyPolicy.points');
