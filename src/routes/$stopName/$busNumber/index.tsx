import { BusNumberRoute } from '@/routes/$stopName/$busNumber/root'
import { Header } from '@/components/layout/Header'

export function StopBusName() {
    const { busNumber } = BusNumberRoute.useParams() 
    return (
        <>
        <Header />
        <h1>Bus Number: {busNumber}</h1>
        </>
    )
}