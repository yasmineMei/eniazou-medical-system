import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/report')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/report"!</div>
}
