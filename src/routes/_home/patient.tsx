import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/patient')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/patient"!</div>
}
