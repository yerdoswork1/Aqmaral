import styles from './Paragraphs.module.scss';

interface ParagraphsProps {
  paragraphs: string[];
  title?: string;
  paragraphGap?: '30' | '20'; // Gap между параграфами и тайтлом в пикселях
}

// Компонент для отображения массива стрнгов || массив стрингов с ссылками ["Пример [текст](ссылка)"]

export const Paragraphs = (props: ParagraphsProps) => {
  const { paragraphs, title, paragraphGap } = props;

  return (
    <section className={`${styles.wrapper} ${paragraphGap === '20' && styles.gap_20}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {paragraphs.map((p, index) => (
        <p key={index} className={styles.p}>
          {p}
        </p>
      ))}
    </section>
  );
};
