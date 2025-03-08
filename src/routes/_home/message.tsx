import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/message')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/message"!</div>
}
