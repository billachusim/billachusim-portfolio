import { createFileRoute } from "@tanstack/react-router";
import { InsightsPage } from "@/components/portfolio/pages";
import { pageHead } from "@/content/portfolio";
export const Route = createFileRoute("/insights/")({
  component: InsightsPage,
  head: () =>
    pageHead(
      "Writing & Insights",
      "Notes on engineering, AI, independent product building and technology education.",
      "/insights",
    ),
});
