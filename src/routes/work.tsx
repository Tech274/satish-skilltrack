import { createFileRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({ component: WorkLayout });

function WorkLayout() {
  return <Outlet />;
}
