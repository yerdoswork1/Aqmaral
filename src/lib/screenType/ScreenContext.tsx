import type { TScreenType } from '@app-types/index';
import { createContext } from 'react';

export const ScreenContext = createContext<TScreenType | null>(null);
