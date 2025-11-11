import { StopRoute } from '@/routes/$stopName/root'

export function StopBusName() {
    const { stopName } = StopRoute.useParams()
    return (
        <>
            <h1>Bus Stop: {stopName}</h1>
        </>
    )
}