import { Spinner, Header, Footer } from '@components/index';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './AppLayout.module.scss';

const AppLayout = () => {
  return (
    <>
      <div className={styles.layout}>
        <Header />
        <main className={styles.outlet}>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
