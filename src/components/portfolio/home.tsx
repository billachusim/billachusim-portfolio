import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  projects,
  liveApps,
  verifiedMetrics,
  profile,
  milestones,
  communityInitiatives,
  press,
  photos,
  articles,
} from "@/content/portfolio";
import {
  ProjectCard,
  SectionHeading,
  ContactCTA,
  PhoneFrame,
  AppIcon,
  StoreButtons,
  icons,
} from "./shared";

const expertise = [
  [
    "Software engineering & architecture",
    "Reliable systems, considered architecture, and software built to last.",
  ],
  [
    "AI engineering & intelligent systems",
    "LLM applications, AI integrations, agents, and practical automation.",
  ],
  [
    "Web, mobile & backend products",
    "Connected product experiences, from the interface to the infrastructure.",
  ],
  [
    "Product building & technical leadership",
    "Turning ideas into products, building ventures, and helping people grow.",
  ],
];

function HeroVisual() {
  if (profile.portrait)
    return (
      <div className="hero-visual hero-visual-portrait">
        <img
          src={profile.portrait}
          alt="Bill Nnamdi Achusim"
          width={640}
          height={800}
          fetchPriority="high"
        />
      </div>
    );
  const shots = liveApps
    .map((p) => p.gallery[0])
    .filter((src): src is string => Boolean(src))
    .slice(0, 3);
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-glow" />
      {shots.map((src, i) => (
        <PhoneFrame key={src} src={src} alt="" className={`hero-phone hero-phone-${i}`} eager />
      ))}
    </div>
  );
}

export function HomePage() {
  const otherFeatured = projects.filter((p) => p.featured && !liveApps.includes(p));
  const latest = [...articles]
    .filter((a) => a.published)
    .sort((a, b) => b.publicationDate.localeCompare(a.publicationDate))
    .slice(0, 3);
  const suppliedPhotos = photos.filter((p) => p.src);
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow hero-eyebrow">
              <span className="status-dot" /> FOUNDER · SENIOR SOFTWARE ENGINEER · AI PRODUCT
              BUILDER
            </div>
            <h1>
              Bill Nnamdi
              <br />
              <em>Achusim.</em>
            </h1>
            <p className="hero-lead">
              I build software, AI products and the people who build them.
            </p>
            <p className="hero-description">
              Founder of Tech Faculty NG, a licensed tech school in Nnewi that has trained 6,000+
              students, and creator of four consumer apps live on Google Play and the App Store.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg">
                <Link to="/projects">
                  Explore my work <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to="/contact">
                  Let’s talk <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="proof-band" aria-label="Impact in numbers">
        <div className="container proof-grid">
          {verifiedMetrics.map((m) => (
            <a key={m.label} href={m.sourceUrl} target="_blank" rel="noopener noreferrer">
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="selected-work" className="container section">
        <SectionHeading
          number="01 / SHIPPED PRODUCTS"
          title="Apps people use every day."
          to="/projects"
          label="All projects"
        />
        <p className="section-subtitle">
          Four consumer apps I built and publish through Social Faculty, live on both app stores.
        </p>
        <div className="app-showcase">
          {liveApps.map((p, i) => (
            <article key={p.id} className={`app-row tint-${p.slug} ${i % 2 ? "reverse" : ""}`}>
              <div className="app-row-copy">
                <div className="app-row-title">
                  <AppIcon project={p} />
                  <div>
                    <h3>{p.name.split(":")[0]}</h3>
                    {p.tagline && <p>{p.tagline}</p>}
                  </div>
                </div>
                <p className="app-row-summary">{p.summary}</p>
                {p.highlights && (
                  <ul className="check-list">
                    {p.highlights.map((h) => (
                      <li key={h}>
                        <Check size={15} /> {h}
                      </li>
                    ))}
                  </ul>
                )}
                {p.metrics.map((m) => (
                  <p key={m.label} className="app-row-metric">
                    <strong>{m.value}</strong> {m.definition}
                  </p>
                ))}
                <div className="app-row-actions">
                  <StoreButtons project={p} />
                  <Link to="/projects/$slug" params={{ slug: p.slug }} className="text-link">
                    Case study <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="app-row-phones">
                {p.gallery.slice(0, 3).map((src, j) => (
                  <PhoneFrame
                    key={src}
                    src={src}
                    alt={`${p.name} screenshot ${j + 1}`}
                    className={`row-phone-${j}`}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise-section">
        <div className="container section">
          <SectionHeading number="02 / WHAT I DO" title="Engineering with a product mindset." />
          <div className="expertise-grid">
            {expertise.map(([title, text], i) => {
              const Icon = icons[i];
              return (
                <div className="expertise-item" key={title}>
                  {Icon && <Icon size={25} strokeWidth={1.3} />}
                  <span className="item-number">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              );
            })}
          </div>
          <Link to="/skills" className="text-link">
            Explore my skills & technology <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="container section">
        <SectionHeading
          number="03 / BUILDING BEYOND CODE"
          title="Train. Certify. Employ."
          to="/founder"
          label="The founder story"
        />
        <div className="impact-layout">
          <div className="impact-lead">
            <p>
              I founded Tech Faculty NG in 2022 so that young people in South-East Nigeria could
              learn job-ready tech skills without moving to Lagos, and get paid work at the end of
              it. I still write the code: the learning platforms and the Talent Pool that matches
              graduates to paid roles.
            </p>
            <p className="muted-copy">
              Licensed by the Federal Ministry of Science, Technology and Innovation through NBTI,
              and headquartered at the Technology Incubation Centre in Nnewi.
            </p>
          </div>
          <div className="initiative-list">
            {communityInitiatives.map((c) => (
              <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer">
                <h3>
                  {c.name} <ArrowUpRight size={17} />
                </h3>
                <p>{c.summary}</p>
              </a>
            ))}
          </div>
        </div>
        {suppliedPhotos.length > 0 && (
          <div className="photo-grid">
            {suppliedPhotos.map((ph) => (
              <figure key={ph.src}>
                <img src={ph.src} alt={ph.alt} loading="lazy" width={800} height={600} />
                <figcaption>{ph.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      {otherFeatured.length > 0 && (
        <section className="container section section-tight">
          <SectionHeading number="04 / MORE WORK" title="Platforms and ventures." />
          <div className="project-grid home-projects">
            {otherFeatured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      )}

      <section className="journey-section">
        <div className="container section">
          <SectionHeading
            number="05 / THE JOURNEY"
            title="Fourteen years of building."
            to="/experience"
            label="Full experience"
          />
          <ol className="milestones">
            {milestones.map((m) => (
              <li key={m.title}>
                <span className="milestone-year">{m.year}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container section">
        <div className="two-col-lists">
          <div>
            <span className="eyebrow">06 / FEATURES & TALKS</span>
            <h2>In conversation.</h2>
            <ul className="press-list">
              {press.map((item) => (
                <li key={item.url}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <span className="press-kind">
                      {item.kind} · {item.outlet}
                    </span>
                    <span className="press-title">
                      {item.title} <ArrowUpRight size={15} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">07 / WRITING</span>
            <h2>Notes from the work.</h2>
            <ul className="press-list">
              {latest.map((a) => (
                <li key={a.slug}>
                  <Link to="/insights/$slug" params={{ slug: a.slug }}>
                    <span className="press-kind">{a.tags.join(" / ")}</span>
                    <span className="press-title">
                      {a.title} <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/insights" className="text-link">
              All articles <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
