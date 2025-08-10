import { TFunction } from 'i18next';

export const getPoints = <K extends string>(
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
