import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppRoute } from './types';

const buildRoutesRecursive = (routes: AppRoute[]): React.ReactNode[] => {
  return routes.map(({ path, element, children, index }, i) => (
    <Route key={path || `layout-route-${i}`} path={path} element={element} index={index}>
      {children && buildRoutesRecursive(children)}
    </Route>
  ));
};

export const AppRouter: React.FC<{ routes: AppRoute[] }> = ({ routes }) => {
  return (
    <Routes>
      {buildRoutesRecursive(routes)}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};