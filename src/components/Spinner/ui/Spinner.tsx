import type { SpinnerProps } from '@components/Spinner';

import styles from './Spinner.module.scss';

export const Spinner = ({ color, thikness = 4 }: SpinnerProps) => {
  return (
    <div className={styles.spinner}>
      <svg className={styles.spinnerSvg} viewBox="22 22 44 44">
        <circle
          className={styles.spinnerCircle}
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          strokeWidth={thikness}
          stroke={color || 'currentColor'}
        />
      </svg>
    </div>
  );
};
