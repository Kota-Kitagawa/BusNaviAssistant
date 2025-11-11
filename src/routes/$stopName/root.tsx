import { StopBusName } from '@/routes/$stopName'
import { AddRoot } from '@/routes/__root'

export const StopRoute = AddRoot(':stopName', StopBusName);