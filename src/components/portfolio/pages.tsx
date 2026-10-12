import { useState, type FormEvent } from "react";
import { Link, notFound } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  Search,
  Download,
  FileText,
  Send,
  CheckCircle2,
  Plus,
  Minus,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  projects,
  categories,
  filterProjects,
  experience,
  skillGroups,
  profile,
  articles,
  verifiedMetrics,
  communityInitiatives,
  milestones,
  photos,
  type Project,
} from "@/content/portfolio";
import {
  PageIntro,
  ContactCTA,
  PortraitSlot,
  ProjectCard,
  ProjectVisual,
  PhoneFrame,
  StoreButtons,
} from "./shared";
export function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT / THE PERSON BEHIND THE WORK"
        title="An engineer by craft. A builder by instinct."
        description="I’m Bill Nnamdi Achusim. I work at the intersection of software engineering, product building, artificial intelligence, and technology education."
      />
      <section className="container biography-layout">
        <PortraitSlot />
        <div className="prose">
          <h2>I build things that matter to people.</h2>
          <p>
            My work spans web and mobile applications, backend infrastructure, APIs, and intelligent
            software. I combine hands-on engineering with product thinking, taking ideas from
            concept through implementation and iteration.
          </p>
          <p>
            I’m not interested in technology for its own sake. I’m interested in what it makes
            possible: a useful product, a more reliable system, a better experience, or a new
            opportunity for someone learning to build.
          </p>
          <h3>Where it started</h3>
          <p>
            In 2012 I started Social Faculty, a youth guidance community. Young people wrote to us
            every day about relationships, school, work and family, and in 2015–16 alone we held
            real-time conversations with more than 3,000 new people on WhatsApp. That demand became
            my first product, Dear Claire, which launched in 2017 and is still live today alongside
            three newer apps.
          </p>
          <h3>My engineering foundation</h3>
          <p>
            I hold a master’s degree in Systems Engineering from the University of Lagos. That
            foundation informs how I think about architecture, connected systems, and the complete
            lifecycle of a product.
          </p>
          <h3>From software to intelligent systems</h3>
          <p>
            My work has evolved into AI engineering, LLM applications and agentic workflows. I
            approach AI as another engineering capability: something to integrate thoughtfully,
            evaluate carefully and use where it improves the product.
          </p>
          <h3>Building a venture, growing people</h3>
          <p>
            I founded Tech Faculty NG in 2022 at Digital Village, Nnewi, Anambra State, so that
            young people in the South-East could learn job-ready tech skills without moving to
            Lagos. As Founder & Lead Technical Developer, I build its learning platforms and the
            Talent Pool that matches graduates to paid tech roles. It is licensed by FMSTI through
            NBTI and has trained more than 6,000 students. Through training, mentoring, campus
            development and community initiatives, I work to help people move from learning concepts
            to building things.
          </p>
          <p>
            My approach to leadership stays close to the work. I value practical guidance, shared
            learning and the confidence that comes from solving real problems.
          </p>
          <Link to="/founder" className="text-link">
            Explore my founder journey <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="principles-band">
        <div className="container section">
          <span className="eyebrow">MY ENGINEERING PHILOSOPHY</span>
          <h2>
            How I think about
            <br />
            <em>building software.</em>
          </h2>
          <div className="principle-grid">
            {[
              [
                "Start with people",
                "I start with the problem and the people the product is meant to serve.",
              ],
              [
                "Choose deliberately",
                "I choose architecture based on actual requirements, not trends.",
              ],
              [
                "Build for the long term",
                "I prioritize maintainability, reliability and security.",
              ],
              [
                "Keep engineering judgment",
                "I use AI as a capability, not a substitute for understanding and judgment.",
              ],
              ["Learn from evidence", "I test, measure, learn and iterate."],
              [
                "Own the lifecycle",
                "I consider deployment, maintenance and the complete product lifecycle.",
              ],
            ].map(([title, text], i) => (
              <div key={title}>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container section prose wide-prose">
        <h2>What I’m focused on now</h2>
        <p>
          I’m exploring practical AI systems, product engineering and the future of AI-first
          learning. I continue to build software, develop ventures and deepen my understanding of
          how emerging technologies can become useful, dependable products.
        </p>
        <Link to="/experience" className="text-link">
          My professional experience <ArrowUpRight size={18} />
        </Link>
      </section>
      <ContactCTA />
    </>
  );
}
export function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All projects");
  const [status, setStatus] = useState("All statuses");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const results = filterProjects(query, category, status);
  return (
    <>
      <PageIntro
        eyebrow="PROJECTS / THE WORK"
        title="From an idea to something useful."
        description="My evolving collection of products, platforms, ventures, and experiments. Different problems. The same hands-on approach."
      />
      <section className="container directory-section">
        <div className="directory-toolbar">
          <div className="category-tabs" aria-label="Project categories">
            {[
              "All projects",
              "AI & Intelligent Applications",
              "Web Applications",
              "Mobile Applications",
              "Entrepreneurship & Education",
            ].map((c) => (
              <Button
                key={c}
                variant="ghost"
                className={category === c ? "category-button selected" : "category-button"}
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
              >
                {c === "AI & Intelligent Applications"
                  ? "AI & intelligent systems"
                  : c === "Entrepreneurship & Education"
                    ? "Ventures & education"
                    : c}
              </Button>
            ))}
          </div>
          <Button
            variant="ghost"
            className="filter-toggle"
            onClick={() => setFiltersOpen(!filtersOpen)}
            aria-expanded={filtersOpen}
          >
            {filtersOpen ? <Minus /> : <Plus />} All filters
          </Button>
        </div>
        <div className="search-row">
          <label className="search-input">
            <Search size={19} />
            <input
              type="search"
              aria-label="Search projects"
              placeholder="Search projects, ideas, technologies…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <span className="result-count" aria-live="polite">
            {results.length} project{results.length !== 1 ? "s" : ""}
          </span>
        </div>
        {filtersOpen && (
          <div className="expanded-filters">
            <label>
              Category
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>All projects</option>
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <label>
              Status
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                {[
                  "All statuses",
                  "Live",
                  "In Development",
                  "Concept",
                  "Archived",
                  "Status to be confirmed",
                ].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <Button
              variant="ghost"
              onClick={() => {
                setQuery("");
                setCategory("All projects");
                setStatus("All statuses");
              }}
            >
              Reset filters
            </Button>
          </div>
        )}
        <div className="project-grid">
          {results.map((p) => (
            <ProjectCard project={p} key={p.id} />
          ))}
        </div>
        {results.length === 0 && (
          <div className="empty-state">
            <Search size={32} strokeWidth={1} />
            <h2>No matching projects.</h2>
            <p>Try another search or a different category.</p>
            <Button
              variant="outline"
              onClick={() => {
                setQuery("");
                setCategory("All projects");
                setStatus("All statuses");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </section>
      <ContactCTA />
    </>
  );
}
export function ProjectDetail({ slug }: { slug: string }) {
  const p = projects.find((p) => p.slug === slug && p.published);
  if (!p) throw notFound();
  const index = projects.indexOf(p);
  const next = projects[(index + 1) % projects.length];
  const related = projects
    .filter((q) => q.id !== p.id && q.categories.some((c) => p.categories.includes(c)))
    .slice(0, 2);
  return (
    <>
      <div className="container detail-breadcrumb">
        <Link to="/projects">Projects</Link>
        <span>/</span>
        <span>{p.name}</span>
      </div>
      <PageIntro
        eyebrow={p.categories[0] || "INDEPENDENT PRODUCT"}
        title={p.name}
        description={p.summary}
      />
      <section className="container">
        {p.appStoreUrl && (
          <div className="detail-title-row">
            <StoreButtons project={p} />
          </div>
        )}
        <ProjectVisual project={p} large />
        <div className="project-facts">
          {p.categories.length > 0 && (
            <div>
              <span className="eyebrow">CATEGORY</span>
              <p>{p.categories.join(" · ")}</p>
            </div>
          )}
          {p.role && (
            <div>
              <span className="eyebrow">MY ROLE</span>
              <p>{p.role}</p>
            </div>
          )}
          {p.status !== "Status to be confirmed" && (
            <div>
              <span className="eyebrow">STATUS</span>
              <p>{p.status}</p>
            </div>
          )}
          {p.technologies.length > 0 && (
            <div>
              <span className="eyebrow">TECHNOLOGY</span>
              <p>{p.technologies.join(" · ")}</p>
            </div>
          )}
        </div>
        <div className="prose case-study">
          {p.highlights && (
            <section>
              <h2>{p.tagline || "Highlights"}</h2>
              <ul className="check-list highlight-list">
                {p.highlights.map((h) => (
                  <li key={h}>
                    <Check size={15} /> {h}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {p.sections.map((s) => (
            <section key={s.title}>
              <h2>{s.title}</h2>
              <p>{s.content}</p>
            </section>
          ))}
          {p.sections.length === 0 && !p.highlights && (
            <div className="case-note">
              <span className="eyebrow">PROJECT NOTES</span>
              <p>
                {p.summary
                  ? "The full story of this project will be shared as its details are documented."
                  : "Further project information has not been published yet."}
              </p>
            </div>
          )}
          {p.metrics.map((m) => (
            <div key={m.label}>
              <h3>
                {m.value} {m.label}
              </h3>
              <p>
                {m.definition} · {m.reportingDate}
              </p>
            </div>
          ))}
          {p.gallery.length > 0 && (
            <div className="screenshot-strip">
              {p.gallery.map((image, i) => (
                <PhoneFrame key={image} src={image} alt={`${p.name} screenshot ${i + 1}`} />
              ))}
            </div>
          )}
          <div className="external-links">
            {[
              [p.liveUrl, p.liveUrl?.includes("play.google.com") ? "Google Play" : "Visit project"],
              [p.repositoryUrl, "View repository"],
              [p.appStoreUrl, "App Store"],
            ].map(
              ([url, label]) =>
                url && (
                  <Button asChild variant="outline" key={url}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {label} <ArrowUpRight />
                    </a>
                  </Button>
                ),
            )}
          </div>
        </div>
        {related.length > 0 && (
          <section className="section">
            <h2>Related work</h2>
            <div className="project-grid related-grid">
              {related.map((q) => (
                <ProjectCard project={q} key={q.id} />
              ))}
            </div>
          </section>
        )}
        {next && (
          <Link className="next-project" to="/projects/$slug" params={{ slug: next.slug }}>
            <span>
              <span className="eyebrow">NEXT PROJECT</span>
              <h2>{next.name}</h2>
            </span>
            <ArrowRight size={32} />
          </Link>
        )}
      </section>
      <ContactCTA />
    </>
  );
}
export function ExperiencePage() {
  return (
    <>
      <PageIntro
        eyebrow="EXPERIENCE / THE JOURNEY"
        title="Hands-on work. An evolving perspective."
        description="My professional roles, project engagements, fellowship, and work building a technology education venture."
      />
      <section className="container timeline">
        {experience.map((e) => (
          <article key={e.organization} className="timeline-entry">
            <div className="timeline-date">
              <span className="timeline-dot" />
              {e.dates}
            </div>
            <div>
              <span className="eyebrow">{e.type}</span>
              <h2>{e.organization}</h2>
              <h3>{e.role}</h3>
              <p>{e.description}</p>
            </div>
          </article>
        ))}
      </section>
      <div className="container section">
        <Link to="/cv" className="text-link">
          View my résumé <ArrowUpRight size={18} />
        </Link>
      </div>
      <ContactCTA />
    </>
  );
}
export function SkillsPage() {
  return (
    <>
      <PageIntro
        eyebrow="SKILLS / MY TOOLKIT"
        title="The right tools. A considered approach."
        description="My work spans application engineering, backend systems, AI, and the complete product lifecycle. Technology serves the problem—not the other way around."
      />
      <section className="container skills-grid">
        {skillGroups.map((g, i) => (
          <div key={g.title} className="skill-group">
            <span className="eyebrow">0{i + 1}</span>
            <h2>{g.title}</h2>
            <ul>
              {g.items.map((s) => (
                <li key={s}>
                  {s}
                  <ArrowUpRight size={15} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="container section prose wide-prose">
        <h2>Beyond a technology list</h2>
        <p>
          I care about how a system works as a whole: the decisions behind it, the experience it
          enables, and how it behaves after launch. My approach combines technical understanding
          with testing, iteration and product ownership.
        </p>
        <Link to="/projects" className="text-link">
          See the work <ArrowUpRight size={18} />
        </Link>
      </section>
      <ContactCTA />
    </>
  );
}
export function FounderPage() {
  return (
    <>
      <PageIntro
        eyebrow="FOUNDER & IMPACT / BEYOND SOFTWARE"
        title="Build technology. Grow possibility."
        description="Tech Faculty NG is where my work as an engineer meets my commitment to education, mentorship, and community."
      />
      <section className="container">
        <div className="founder-stats">
          {verifiedMetrics.slice(0, 2).map((m) => (
            <div key={m.label}>
              <strong>{m.value}</strong>
              <p>{m.label}</p>
            </div>
          ))}
          <div>
            <strong>2022</strong>
            <p>Founded at the Digital Village, Nnewi</p>
          </div>
          <div>
            <strong>4.9★</strong>
            <p>From 90 Google reviews (Oct 2026)</p>
          </div>
        </div>
        <a
          href="https://techfaculty.ng/outcomes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          How Tech Faculty counts these numbers <ArrowUpRight size={15} />
        </a>
        {photos.some((ph) => ph.src) && (
          <div className="photo-grid">
            {photos
              .filter((ph) => ph.src)
              .map((ph) => (
                <figure key={ph.src}>
                  <img src={ph.src} alt={ph.alt} loading="lazy" width={800} height={600} />
                  <figcaption>{ph.caption}</figcaption>
                </figure>
              ))}
          </div>
        )}
        <div className="founder-story prose">
          <span className="eyebrow">MY FOUNDER STORY</span>
          <h2>A place to learn by building.</h2>
          <p>
            I founded Tech Faculty NG in 2022 at Digital Village, Nnewi, Anambra State. The venture
            is licensed by FMSTI through NBTI. As Founder & Lead Technical Developer, I lead the
            technical architecture of our learning platforms and Talent Pool, matching graduates to
            paid tech roles. I wanted learning to be grounded in the work: developing useful skills,
            working on real problems and growing the confidence to build.
          </p>
          <h3>From individual learning to community</h3>
          <p>
            The venture’s story includes campus development, practical training and community
            engagement. Mentoring and professional development are central to how I think about its
            purpose—not just teaching tools, but helping people find their direction in technology.
          </p>
          <h3>Industry-oriented, hands-on education</h3>
          <p>
            I bring my experience building products and backend systems into the learning
            environment. My aim is to connect foundational understanding with the realities of
            development, collaboration, iteration and maintenance.
          </p>
          <h3>The next chapter: AI-first learning</h3>
          <p>
            As AI changes how software is built, my educational focus is evolving toward AI-first
            and agent-based training. I want learners to understand these capabilities while
            retaining the engineering judgment that makes technology useful and dependable.
          </p>
          <h3>Community and fellowship</h3>
          {communityInitiatives.map((c) => (
            <p key={c.name}>
              <strong>{c.name}.</strong> {c.summary}{" "}
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-link">
                Learn more <ArrowUpRight size={14} />
              </a>
            </p>
          ))}
          <h3>Before Tech Faculty</h3>
          <p>
            My founder journey began in 2012 with Social Faculty, a youth guidance community that
            became the studio behind Dear Claire, Alter Ego, Eavesdrop and AI Clopedia.
          </p>
          <Link to="/projects/$slug" params={{ slug: "tech-faculty-ng" }} className="text-link">
            Tech Faculty NG project notes <ArrowUpRight size={18} />
          </Link>
        </div>
        <ol className="milestones section">
          {milestones.map((m) => (
            <li key={m.title}>
              <span className="milestone-year">{m.year}</span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <ContactCTA />
    </>
  );
}
export function InsightsPage() {
  return (
    <>
      <PageIntro
        eyebrow="INSIGHTS / NOTES FROM THE WORK"
        title="Thinking out loud. Building with intention."
        description="My writing on technology education, practical AI, product development, and the paths into a career in technology."
      />
      <section className="container insights-section">
        <div className="insights-list">
          {articles
            .filter((a) => a.published)
            .sort((a, b) => b.publicationDate.localeCompare(a.publicationDate))
            .map((a) => (
              <article key={a.slug} className="insight-entry">
                <div>
                  <span className="eyebrow">{a.tags.join(" / ")}</span>
                  <time dateTime={a.publicationDate}>
                    {new Date(a.publicationDate + "T12:00:00Z").toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                  </time>
                </div>
                <div>
                  <Link to="/insights/$slug" params={{ slug: a.slug }}>
                    <h2>{a.title}</h2>
                  </Link>
                  <p>{a.summary}</p>
                  <Link className="text-link" to="/insights/$slug" params={{ slug: a.slug }}>
                    Read article <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
        </div>
        <a href={profile.authorUrl} target="_blank" rel="noopener noreferrer" className="text-link">
          My author page at Tech Faculty NG <ArrowUpRight size={17} />
        </a>
      </section>
      <ContactCTA />
    </>
  );
}
export function ArticlePage({ slug }: { slug: string }) {
  const a = articles.find((a) => a.slug === slug && a.published);
  if (!a) throw notFound();
  return (
    <>
      <PageIntro eyebrow={a.tags.join(" / ")} title={a.title} description={a.summary} />
      <article className="container prose article-body">
        <time dateTime={a.publicationDate}>{a.publicationDate}</time>
        {a.coverImage && <img src={a.coverImage} alt={a.title} width={900} height={600} />}
        {a.content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {a.sourceUrl && (
          <div className="original-article">
            <span className="eyebrow">PUBLISHED AT TECH FACULTY NG</span>
            <p>
              This article was originally published on Tech Faculty NG. Read the complete guide at
              its original home.
            </p>
            <Button asChild>
              <a href={a.sourceUrl} target="_blank" rel="noopener noreferrer">
                Read the original article <ArrowUpRight />
              </a>
            </Button>
          </div>
        )}
      </article>
    </>
  );
}
export function CVPage() {
  return (
    <>
      <PageIntro
        eyebrow="CV / PROFESSIONAL PROFILE"
        title="Bill Nnamdi Achusim"
        description={profile.positioning}
      />
      <section className="container cv-layout">
        <aside className="cv-sidebar">
          <span className="eyebrow">AT A GLANCE</span>
          <p>
            Software engineering
            <br />
            AI systems
            <br />
            Product development
            <br />
            Technical leadership
          </p>
          {profile.cvUrl ? (
            <Button asChild>
              <a href={profile.cvUrl} download>
                Download CV <Download />
              </a>
            </Button>
          ) : (
            <div className="cv-unavailable">
              <Download size={20} />
              <p>
                Downloadable CV
                <br />
                not yet provided.
              </p>
            </div>
          )}
          <Link to="/contact" className="text-link">
            Get in touch <ArrowUpRight size={17} />
          </Link>
        </aside>
        <div className="prose cv-content">
          <h2>Professional summary</h2>
          <p>
            Senior software and AI engineer with 12+ years of building and shipping production
            software: backend platforms, AI agents and LLM applications, and consumer mobile apps. I
            created four apps live on Google Play and the App Store, founded Tech Faculty NG, which
            has trained 6,000+ students, and most recently evaluated frontier AI models and coding
            agents on real-world engineering work.
          </p>
          <h2>Experience</h2>
          {experience.map((e) => (
            <div className="cv-entry" key={e.organization}>
              <h3>{e.organization}</h3>
              <span>{e.role}</span>
              <p className="muted-copy">
                {e.dates} · {e.type}
              </p>
            </div>
          ))}
          <h2>Selected projects</h2>
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <div className="cv-entry" key={p.id}>
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="text-link">
                  {p.name}
                  <ArrowUpRight size={16} />
                </Link>
                <p>{p.summary}</p>
              </div>
            ))}
          <h2>Technical skills</h2>
          {skillGroups.map((g) => (
            <div key={g.title}>
              <h3>{g.title}</h3>
              <p>{g.items.join(" · ")}</p>
            </div>
          ))}
          <h2>Education & fellowships</h2>
          <p>Master’s degree in Systems Engineering · University of Lagos</p>
          <p>
            Software Engineering Fellowship · Stanford University
            <br />
            June–July 2026 · Completed
          </p>
          {profile.email && (
            <>
              <h2>Contact</h2>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </>
          )}
        </div>
      </section>
    </>
  );
}
export type ContactValues = {
  name: string;
  email: string;
  organization: string;
  type: string;
  message: string;
};
export function validateInquiry(v: ContactValues) {
  const errors: Partial<Record<keyof ContactValues, string>> = {};
  if (v.name.trim().length < 2) errors.name = "Please enter your name (at least 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!v.type) errors.type = "Please choose an inquiry type.";
  if (v.message.trim().length < 20)
    errors.message = "Please include at least 20 characters in your message.";
  return errors;
}
export function ContactPage() {
  const [values, setValues] = useState<ContactValues>({
    name: "",
    email: "",
    organization: "",
    type: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({});
  const [feedback, setFeedback] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const change = (key: keyof ContactValues, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setFeedback("");
  };
  async function submit(e: FormEvent) {
    e.preventDefault();
    const next = validateInquiry(values);
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(`contact-${Object.keys(next)[0]}`)?.focus();
      return;
    }
    if (!profile.contactEndpoint) {
      setFeedback("Message delivery is not connected yet. Your inquiry has not been sent.");
      return;
    }
    setSending(true);
    try {
      const r = await fetch(profile.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!r.ok) throw new Error("Delivery failed");
      setSuccess(true);
    } catch {
      setFeedback("Your message could not be delivered. Please try again later.");
    } finally {
      setSending(false);
    }
  }
  const field = (key: "name" | "email" | "organization", label: string, placeholder: string) => (
    <label className="form-field">
      {label}
      <input
        id={`contact-${key}`}
        type={key === "email" ? "email" : "text"}
        autoComplete={key === "organization" ? "organization" : key}
        value={values[key]}
        placeholder={placeholder}
        onChange={(e) => change(key, e.target.value)}
        aria-invalid={Boolean(errors[key])}
        aria-describedby={errors[key] ? `${key}-error` : undefined}
      />
      {errors[key] && (
        <span id={`${key}-error`} className="field-error">
          {errors[key]}
        </span>
      )}
    </label>
  );
  return (
    <>
      <PageIntro
        eyebrow="CONTACT / LET’S TALK"
        title="Let’s build something worthwhile."
        description="Have an engineering opportunity, a product idea, or a collaboration in mind? I’d like to hear about it."
      />
      <section className="container contact-layout">
        <aside>
          <h2>
            A good conversation
            <br />
            is a good beginning.
          </h2>
          <p>I welcome conversations about:</p>
          <ul className="contact-topics">
            {[
              "Software engineering opportunities",
              "AI engineering & collaboration",
              "Product development & consulting",
              "Startup partnerships",
              "Speaking, mentoring & education",
            ].map((t) => (
              <li key={t}>
                <ArrowUpRight size={16} />
                {t}
              </li>
            ))}
          </ul>
          {(profile.email || profile.linkedin || profile.github || profile.twitter) && (
            <div className="social-links">
              {profile.email && (
                <a href={`mailto:${profile.email}`}>
                  {profile.email}
                  <ArrowUpRight size={16} />
                </a>
              )}
              {profile.linkedin && (
                <a href={profile.linkedin}>
                  LinkedIn
                  <ArrowUpRight size={16} />
                </a>
              )}
              {profile.twitter && (
                <a href={profile.twitter} target="_blank" rel="noopener noreferrer">
                  X (Twitter)
                  <ArrowUpRight size={16} />
                </a>
              )}
              {profile.instagram && (
                <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                  <ArrowUpRight size={16} />
                </a>
              )}
              {profile.github && (
                <a href={profile.github}>
                  GitHub
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          )}
          <p className="contact-notice">
            {profile.contactEndpoint
              ? "Your details are used only to respond to your inquiry."
              : "Message delivery is not connected yet. The form can check your inquiry, but cannot send it."}
          </p>
        </aside>
        {success ? (
          <div className="success-state" role="status">
            <CheckCircle2 size={38} />
            <h2>Thank you for reaching out.</h2>
            <p>Your inquiry was submitted successfully.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSuccess(false);
                setValues({ name: "", email: "", organization: "", type: "", message: "" });
              }}
            >
              Write another message
            </Button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="contact-form">
            <div className="form-grid">
              {field("name", "Your name", "Bill, meet…")}
              {field("email", "Email address", "you@company.com")}
            </div>
            {field("organization", "Organization (optional)", "Your company or organization")}
            <label className="form-field">
              What’s on your mind?
              <select
                id="contact-type"
                value={values.type}
                onChange={(e) => change("type", e.target.value)}
                aria-invalid={Boolean(errors.type)}
                aria-describedby={errors.type ? "type-error" : undefined}
              >
                <option value="">Select an inquiry type</option>
                {[
                  "Engineering opportunity",
                  "AI & technical collaboration",
                  "Product development & consulting",
                  "Startup partnership",
                  "Speaking & mentoring",
                  "Other",
                ].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              {errors.type && (
                <span className="field-error" id="type-error">
                  {errors.type}
                </span>
              )}
            </label>
            <label className="form-field">
              Your message
              <textarea
                id="contact-message"
                rows={6}
                value={values.message}
                placeholder="Tell me about the opportunity, the problem, or the idea…"
                onChange={(e) => change("message", e.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <span className="field-error" id="message-error">
                  {errors.message}
                </span>
              )}
            </label>
            {feedback && (
              <p className="delivery-feedback" role="alert">
                {feedback}
              </p>
            )}
            <Button type="submit" size="lg" disabled={sending}>
              {sending ? "Sending…" : profile.contactEndpoint ? "Send inquiry" : "Check inquiry"}
              <Send />
            </Button>
          </form>
        )}
      </section>
    </>
  );
}
