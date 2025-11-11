import { StopBusName } from './index'
import { AddRoot } from '@/routes/__root'


export const BusNumberRoute = AddRoot(':busNumber', StopBusName);


// export const StopRoute = createRoute({
//   getParentRoute: () => Route,
//   path: ':stopName', // 動的セグメントはコロン表記
//   component: () => <StopBusName />,
// })