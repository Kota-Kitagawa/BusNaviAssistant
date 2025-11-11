import { StopRoute } from '@/routes/$stopName/root'
import { Header } from '@/components/layout/Header'

export function StopBusName() {
    const { stopName } = StopRoute.useParams()
    return (
        <>
            <Header />
            <h1>Bus Stop: {stopName}</h1>
        </>
    )
}