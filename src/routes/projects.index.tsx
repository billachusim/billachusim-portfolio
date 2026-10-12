import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/portfolio/pages";
import { pageHead } from "@/content/portfolio";
export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
  head: () =>
    pageHead(
      "Projects",
      "Explore Bill’s products, platforms, ventures and experiments. Search and filter the project collection.",
      "/projects",
    ),
});
