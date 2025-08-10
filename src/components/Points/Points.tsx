import styles from './Points.module.scss';

interface PointsListProps {
  items: string[];
  title?: string;
}

export const Points = ({ items, title }: PointsListProps) => {
  return (
    <section className={styles.wrapper}>
      {title && <h4 className={styles.title}>{title}</h4>}
      <ul>
        {items.map((item, index) => (
          <li key={index} className={`${styles.li}`}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};
