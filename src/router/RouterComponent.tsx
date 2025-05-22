import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AppRoute } from './types';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import NotFound from '@/pages/NotFound';
import Unauthorized from '@/pages/Unauthorized';

const buildRoutesRecursive = (routes: AppRoute[]): React.ReactNode[] => {
  const { isAuthenticated } = useAuth();

  return routes.map(({ path, element, children, index, requiresAuth }, i) => {
    const routeElement = requiresAuth && !isAuthenticated
      ? <Navigate to="/unauthorized" replace />
      : element;

    return (
      <Route key={path || `layout-route-${i}`} path={path} element={routeElement} index={index}>
        {children && buildRoutesRecursive(children)}
      </Route>
    );
  });
};

export const AppRouter: React.FC<{ routes: AppRoute[] }> = ({ routes }) => {
  return (
    <Routes>
      {buildRoutesRecursive(routes)}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};