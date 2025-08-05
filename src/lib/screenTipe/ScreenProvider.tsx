import { ScreenContext } from '@lib/screenTipe';
import { getCurrentScreen } from '@utils/index';
import { useEffect, useMemo, useState } from 'react';

export const ScreenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const value = useMemo(() => getCurrentScreen(windowWidth), [windowWidth]);

  return <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>;
};
