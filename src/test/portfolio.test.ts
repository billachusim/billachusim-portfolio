import { describe, it, expect } from "vitest";
import {
  projects,
  filterProjects,
  experience,
  articles,
  profile,
  verifiedMetrics,
  photos,
} from "@/content/portfolio";
import { validateInquiry } from "@/components/portfolio/pages";
describe("Evidence-based portfolio content", () => {
  it("does not assert unknown projects are live", () => {
    expect(projects.filter((p) => p.status === "Live").map((p) => p.slug)).toEqual([
      "dear-claire",
      "ai-clopedia",
      "alter-ego",
      "eavesdrop",
    ]);
  });
  it("keeps confirmed Alter Ego separate from Dear Claire", () => {
    expect(projects.filter((p) => p.slug === "alter-ego")).toHaveLength(1);
    expect(projects.find((p) => p.slug === "dear-claire")?.name).toBe(
      "Dear Claire: Secret Diary Chat",
    );
  });
  it("contains all 19 confirmed distinct supplied projects", () => {
    expect(projects).toHaveLength(19);
    expect(projects.some((p) => p.name === "ExamsAI.ng")).toBe(true);
  });
  it("preserves verified profiles", () => {
    expect(profile.linkedin).toBe("https://www.linkedin.com/in/billachusim");
    expect(profile.twitter).toBe("https://x.com/billachusim");
  });
  it("preserves founder year and degree", () => {
    expect(profile.founderYear).toBe("2022");
    expect(profile.university).toBe("University of Lagos");
    expect(profile.degree).toBe("Master’s degree in Systems Engineering");
  });
  it("publishes only sourced headline metrics", () => {
    expect(
      verifiedMetrics.find((m) => m.label === "Dear Claire rating on Google Play")?.value,
    ).toBe("4.5★");
    expect(verifiedMetrics.every((m) => m.sourceUrl.startsWith("https://"))).toBe(true);
    // The 1M+ downloads figure conflicts with the Google Play listing (10K+) and awaits confirmation.
    expect(verifiedMetrics.some((m) => m.value === "1M+")).toBe(false);
  });
  it("gives every live app official store links and screenshots", () => {
    for (const p of projects.filter((p) => p.status === "Live")) {
      expect(p.appStoreUrl).toMatch(/^https:\/\/apps\.apple\.com\//);
      expect(p.liveUrl).toMatch(/^https:\/\/play\.google\.com\//);
      expect(p.gallery.length).toBeGreaterThan(0);
    }
  });
  it("never renders unsupplied photographs", () => {
    expect(photos.filter((p) => p.src)).toHaveLength(0);
  });
  it("preserves completed fellowship dates", () => {
    expect(experience.find((e) => e.organization === "Stanford University")?.dates).toBe(
      "June — July 2026",
    );
  });
  it("includes only verified publications from the author page with exact dates", () => {
    expect(articles).toHaveLength(10);
    expect(articles.every((a) => a.sourceUrl?.startsWith("https://techfaculty.ng/blog/"))).toBe(
      true,
    );
    expect(articles.filter((a) => a.publicationDate === "2026-10-08")).toHaveLength(5);
    expect(articles.filter((a) => a.publicationDate === "2026-08-14")).toHaveLength(2);
    expect(
      articles.find(
        (a) => a.title === "AI Automation for Nigerian Businesses: A Practical 2026 Playbook",
      )?.sourceUrl,
    ).toBe("https://techfaculty.ng/blog/ai-automation-for-nigerian-businesses-2026");
  });
});
describe("Project filters", () => {
  it("searches real names case insensitively", () => {
    expect(filterProjects(" CLAIRE ", "All projects", "All statuses").map((p) => p.name)).toEqual([
      "Dear Claire: Secret Diary Chat",
    ]);
  });
  it("searches descriptions and categories", () => {
    expect(
      filterProjects("preservation", "All projects", "All statuses").map((p) => p.name),
    ).toEqual(["Reengage African Voices"]);
    expect(
      filterProjects("Mobile Applications", "All projects", "All statuses").map((p) => p.name),
    ).toEqual([
      "Dear Claire: Secret Diary Chat",
      "Alter Ego: Private Self Map",
      "Eavesdrop: Live Stories",
      "Dialer App",
    ]);
  });
  it("combines category and status with search", () => {
    expect(filterProjects("claire", "Web Applications", "All statuses")).toHaveLength(0);
    expect(filterProjects("", "All projects", "Live")).toHaveLength(4);
  });
});
describe("Inquiry validation", () => {
  it("rejects invalid input", () => {
    expect(
      Object.keys(
        validateInquiry({ name: "", email: "invalid", organization: "", type: "", message: "" }),
      ),
    ).toEqual(["name", "email", "type", "message"]);
  });
  it("accepts a complete inquiry without requiring organization", () => {
    expect(
      validateInquiry({
        name: "Alex",
        email: "alex@example.com",
        organization: "",
        type: "Engineering opportunity",
        message: "I would like to discuss an engineering opportunity.",
      }),
    ).toEqual({});
  });
});
