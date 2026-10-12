import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, experience, verifiedMetrics, profile } from "@/content/portfolio";
import { ProjectCard, SectionHeading, ContactCTA, icons } from "./shared";
import workspace from "@/assets/editorial-workspace.jpg";
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
export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <img
          className="hero-image"
          src={profile.portrait || workspace}
          alt={
            profile.portrait
              ? "Bill Nnamdi Achusim"
              : "Editorial workspace with a laptop, sculptural object and olive branches"
          }
          width={1920}
          height={1024}
          fetchPriority="high"
        />
        <div className="container hero-content">
          <div className="eyebrow hero-eyebrow">
            <span className="status-dot" /> FOUNDER · ENGINEER · AI PRODUCT BUILDER
          </div>
          <h1>
            Bill Nnamdi
            <br />
            <em>Achusim.</em>
          </h1>
          <p className="hero-lead">
            Building software, AI systems, and products
            <br className="desktop-break" /> that solve real problems.
          </p>
          <p className="hero-description">
            I’m the founder of Tech Faculty NG and a hands-on engineer building software products,
            intelligent systems, and practical experiences.
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
          <div className="hero-bottom">
            <span>INDEPENDENT THINKING. PRACTICAL BUILDING.</span>
            <a href="#selected-work" aria-label="Scroll to selected work">
              <ArrowDown size={20} />
            </a>
          </div>
        </div>
      </section>
      <div className="discipline-strip">
        <div className="container">
          <span>SOFTWARE ENGINEERING</span>
          <span className="strip-plus">+</span>
          <span>ARTIFICIAL INTELLIGENCE</span>
          <span className="strip-plus">+</span>
          <span>PRODUCT BUILDING</span>
          <span className="strip-plus">+</span>
          <span>TECHNOLOGY EDUCATION</span>
        </div>
      </div>
      {verifiedMetrics.length > 0 && (
        <div className="container metrics">
          {verifiedMetrics.map((m) => (
            <div key={m.label}>
              <strong>{m.value}</strong>
              <p>{m.label}</p>
            </div>
          ))}
        </div>
      )}
      <section id="selected-work" className="container section">
        <SectionHeading
          number="01 / SELECTED WORK"
          title="Ideas, made real."
          to="/projects"
          label="View all projects"
        />
        <p className="section-subtitle">
          A selection of products, platforms, and ventures I’m building.
        </p>
        <div className="project-grid home-projects">
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <ProjectCard key={p.id} project={p} />
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
      <section className="container section founder-preview">
        <div>
          <span className="eyebrow">03 / BEYOND THE CODE</span>
          <h2>
            A builder of products.
            <br />
            <em>And possibilities.</em>
          </h2>
        </div>
        <div>
          <p>
            I founded Tech Faculty NG in 2022 at Digital Village, Nnewi. Today, I lead the
            development of its learning platforms and Talent Pool, connecting graduates with paid
            tech roles.
          </p>
          <p className="muted-copy">
            My work connects hands-on software engineering with mentoring, practical technology
            education, and community. Today, that journey extends into AI-first learning and
            agent-based training.
          </p>
          <Link to="/founder" className="text-link">
            The founder story <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="container section experience-preview">
        <SectionHeading
          number="04 / THE JOURNEY"
          title="Built on experience."
          to="/experience"
          label="Full experience"
        />
        {experience
          .filter((e) => e.organization !== "Mercor")
          .slice(0, 3)
          .map((e) => (
            <div className="experience-mini" key={e.organization}>
              <span className="muted-copy">{e.dates}</span>
              <h3>{e.organization}</h3>
              <span>{e.role}</span>
              <ArrowUpRight size={19} />
            </div>
          ))}
      </section>
      <ContactCTA />
    </>
  );
}
