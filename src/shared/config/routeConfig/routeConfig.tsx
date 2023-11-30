import { MainPage } from 'pages/MainPage';

export enum AppRoutes {
  MAIN = 'main',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
};

export const routeConfig = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
};
