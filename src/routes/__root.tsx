import { Outlet, createRootRoute, createRoute } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';

import { Header } from '@/components/layout/Header';
import { Chat } from '@/components/layout/Chat';
import type React from 'react';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='md:hidden'>
        <Header inSidebar={true} />
      </div>

      <main className="md:pt-0 md:ml-80 min-h-[calc(100vh-4rem)]">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
      <Chat />

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