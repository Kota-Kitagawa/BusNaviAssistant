import { Outlet, createRootRoute,createRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import { Header } from '@/components/layout/Header'
import { Chat } from '@/components/layout/Chat'
import type React from 'react'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
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
})



export function AddRoot(rootName:string,Component:React.ComponentType){
  const newRoute = createRoute({
    getParentRoute: () => Route,
    path: `$${rootName}`, 
    component: () => <Component />,
  });
  return newRoute;
}