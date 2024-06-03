import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/distrikter/')({
  component: () => <div>Hello /distrikter/distrikter!</div>
})