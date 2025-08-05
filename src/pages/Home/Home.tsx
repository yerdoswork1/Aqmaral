import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Home</h2>
      <div className={styles.content}>Content</div>
    </div>
  );
};
