import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/hendelser/')({
  component: () => <div>Hello /hendelser/!</div>
})