import './App.css';
import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import appRoutes from './routes/AppRoutes';
import GlobalSpinner from './components/shared/Spinners/GlobalSpinner/GlobalSpinner';

const App = () => {
  const content = useRoutes(appRoutes);
  return <Suspense fallback={<GlobalSpinner isOpen />}>{content}</Suspense>;
};

export default App;
