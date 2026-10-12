import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/portfolio/pages";
import { pageHead } from "@/content/portfolio";
export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
  head: () =>
    pageHead(
      "Experience",
      "Professional engineering roles, project engagements, a completed fellowship and founder experience.",
      "/experience",
    ),
});
