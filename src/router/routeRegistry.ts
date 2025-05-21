import { AppRoute } from './types';
import { coreRoutes } from '@/modules/core/core.routes';


export const appRoutes: AppRoute[] = [
  ...coreRoutes,
];