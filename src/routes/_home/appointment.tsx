import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/appointment')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/appointment"!</div>
}
