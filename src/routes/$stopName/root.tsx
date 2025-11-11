import { StopBusName } from './index'
import { AddRoot } from '@/routes/__root'

export const StopRoute = AddRoot(':stopName', StopBusName);