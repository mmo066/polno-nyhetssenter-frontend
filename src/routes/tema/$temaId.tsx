import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tema/$temaId')({
  component: EnkeltTemaComponent,
})

function EnkeltTemaComponent() {
  const { temaId } = Route.useParams()
  return <div>Tema: {temaId}</div>
}