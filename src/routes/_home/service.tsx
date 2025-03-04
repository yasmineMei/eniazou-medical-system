import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/service')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/service"!</div>
}
