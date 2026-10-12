import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/portfolio/pages";
import { pageHead } from "@/content/portfolio";
export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () =>
    pageHead(
      "About",
      "My journey through software engineering, product building, AI and technology education.",
      "/about",
    ),
});
