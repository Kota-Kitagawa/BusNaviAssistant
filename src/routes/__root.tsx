import type React from 'react';

import { Outlet, createRootRoute, createRoute } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';

import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Header />
        <Outlet />
      </main>
    </div>

      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
});



export function AddRoot(rootName: string, Component: React.ComponentType) {
  const newRoute = createRoute({
    getParentRoute: () => Route,
    path: `$${rootName}`,
    component: () => <Component />,
  });
  return newRoute;
}