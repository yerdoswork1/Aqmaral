import { Spinner, Header, Footer } from '@components/index';
import { useLangSync } from '@lib/index';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './AppLayout.module.scss';

const AppLayout = () => {
  useLangSync();
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.outlet}>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
