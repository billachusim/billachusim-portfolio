import { createFileRoute } from "@tanstack/react-router";
import { CVPage } from "@/components/portfolio/pages";
import { pageHead } from "@/content/portfolio";
export const Route = createFileRoute("/cv")({
  component: CVPage,
  head: () =>
    pageHead(
      "CV & Résumé",
      "Bill Nnamdi Achusim’s professional summary, experience, selected projects, skills and fellowship.",
      "/cv",
    ),
});
