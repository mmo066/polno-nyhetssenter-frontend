import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hendelser/$hendelseId')({
  component: HendelseComponent,
})

function HendelseComponent() {
  const { hendelseId } = Route.useParams()
  return <div>Hendelse: {hendelseId}</div>
}