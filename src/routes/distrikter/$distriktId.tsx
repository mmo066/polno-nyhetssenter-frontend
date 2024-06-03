import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/distrikter/$distriktId')({
  
  component: DistrictComponent,
})

function DistrictComponent() {
    const { distriktId } = Route.useParams()
    return <div>Distrikt: {distriktId}</div>
} 