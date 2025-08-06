import { FC } from 'react';
import styles from './InfoCard.module.scss';

interface InfoCardProps {
  value: string;
  text: string;
}

export const InfoCard: FC<InfoCardProps> = ({ value, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.value}>{value}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
