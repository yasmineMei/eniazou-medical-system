import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/personnel')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/personnel"!</div>
}
