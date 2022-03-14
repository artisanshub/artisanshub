import './App.css';
import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import appRoutes from './routes/AppRoutes';

const App = () => {
  const content = useRoutes(appRoutes);
  return <Suspense fallback="...">{content}</Suspense>;
};

export default App;
