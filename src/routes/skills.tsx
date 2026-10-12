import { createFileRoute } from "@tanstack/react-router";
import { SkillsPage } from "@/components/portfolio/pages";
import { pageHead } from "@/content/portfolio";
export const Route = createFileRoute("/skills")({
  component: SkillsPage,
  head: () =>
    pageHead(
      "Skills & Technology",
      "Application engineering, backend systems, practical AI and product engineering capabilities.",
      "/skills",
    ),
});
