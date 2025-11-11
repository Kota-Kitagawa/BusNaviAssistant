import { BusNumberRoute } from '@/routes/$stopName/$busNumber/root'

export function StopBusName() {
    const { busNumber } = BusNumberRoute.useParams() 
    return (
        <>
            <h1>Bus Number: {busNumber}</h1>
        </>
    )
}