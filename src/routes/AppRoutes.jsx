import React, { lazy } from 'react';

import ROUTES from '../constants/routes';

const Home = lazy(() => import('../views/Home/Home'));
const Pannel = lazy(() => import('../views/Pannel/Pannel'));
const SQLServerDashboard = lazy(() => import('../views/SQLServerDashboard/SQLServerDashboard'));
const SQLServerDashboardTwo = lazy(() =>
  import('../views/SQLServerDashboard/components/SQLServerDashboardTwo')
);
const DB2Dashboard = lazy(() => import('../views/DB2Dashboard/DB2Dashboard'));
const IISDashboard = lazy(() => import('../views/IISDashboard/IISDashboard'));
const IISDashboardTwo = lazy(() => import('../views/IISDashboard/components/DashBoardTwo'));

const appRoutes = [
  {
    path: ROUTES.HOME,
    element: <Home />
  },

  {
    path: ROUTES.PANNEL,
    element: <Pannel />,
    children: [
      {
        element: <SQLServerDashboard />,
        path: ROUTES.SQLServerDashboard
      },
      {
        element: <DB2Dashboard />,
        path: ROUTES.DB2Dashboard
      },
      {
        element: <IISDashboard />,
        path: ROUTES.MS_IIS_DASHBOARD
      },
      {
        element: <IISDashboardTwo />,
        path: ROUTES.MS_IIS_DASHBOARD_2
      },
      {
        element: <SQLServerDashboardTwo />,
        path: ROUTES.SQLServerDashboard_TWO
      }
    ]
  }
];

export default appRoutes;
