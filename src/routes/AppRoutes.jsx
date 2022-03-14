import React, { lazy } from 'react';

import ROUTES from '../constants/routes';

const Home = lazy(() => import('../views/Home/Home'));
const Pannel = lazy(() => import('../views/Pannel/Pannel'));
const DatabaseInfo = lazy(() => import('../views/DatabaseInfo/DatabaseInfo'));

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
        element: <DatabaseInfo />,
        path: ROUTES.DATABASEINFO
      }
    ]
  }
];

export default appRoutes;
