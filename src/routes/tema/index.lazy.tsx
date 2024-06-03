import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/tema/')({
  component: () => <div>Hello /tema/!</div>
})