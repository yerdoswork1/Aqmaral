import { TFunction } from 'i18next';

export const pointKeys = ['one', 'two', 'three', 'four', 'five', 'seven', 'eight', 'nine'] as const;

export type PointKey = (typeof pointKeys)[number];
export type PolicyPoints = Record<PointKey, string[]>;

const getPoints = <K extends string>(
  keys: readonly K[],
  t: TFunction,
  prefix: string,
  startIndex = 1
): Record<K, string[]> => {
  return keys.reduce(
    (acc, key, index) => {
      acc[key] = t(`${prefix}.${index + startIndex}`, {
        returnObjects: true
      }) as string[];
      return acc;
    },
    {} as Record<K, string[]>
  );
};

export const getPolicyPoints = (t: TFunction): PolicyPoints =>
  getPoints(pointKeys, t, 'privacyPolicy.points');
