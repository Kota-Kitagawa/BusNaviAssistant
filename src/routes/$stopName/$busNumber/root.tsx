import { StopBusName } from '@/routes/$stopName/$busNumber'
import { AddRoot } from '@/routes/__root'


export const BusNumberRoute = AddRoot(':busNumber', StopBusName);
