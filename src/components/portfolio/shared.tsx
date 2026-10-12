import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight, Menu, X, Code2, Cpu, Layers, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, type Project } from "@/content/portfolio";
export const icons = [Code2, Cpu, Layers, MoveUpRight];
const nav = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Experience", to: "/experience" },
  { name: "Insights", to: "/insights" },
] as const;
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Bill Nnamdi Achusim home">
          bill achusim<span className="brand-dot">.</span>
        </Link>
        <nav aria-label="Primary navigation" className="desktop-nav">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={
                pathname.replace(/\/$/, "") === n.to.replace(/\/$/, "")
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {n.name}
            </Link>
          ))}
        </nav>
        <Button asChild variant="outline" className="header-contact">
          <Link to="/contact">
            Let’s talk <ArrowUpRight />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="mobile-nav">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>
              {n.name}
            </Link>
          ))}
          <Link to="/skills">Skills & technology</Link>
          <Link to="/founder">Founder & impact</Link>
          <Link to="/cv">CV / Résumé</Link>
          <Link to="/contact">
            Get in touch <ArrowUpRight size={18} />
          </Link>
        </nav>
      )}
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Link to="/" className="brand">
            bill achusim<span className="brand-dot">.</span>
          </Link>
          <p>Thoughtful engineering. Meaningful products.</p>
          <div className="footer-links">
            <Link to="/skills">Skills</Link>
            <Link to="/founder">Founder & impact</Link>
            <Link to="/cv">CV</Link>
            <Link to="/contact">Contact</Link>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={profile.twitter} target="_blank" rel="noopener noreferrer">
              X
            </a>
            <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={profile.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Bill Nnamdi Achusim · Nnewi, Anambra, Nigeria</span>
          <span>Built with intention.</span>
        </div>
      </div>
    </footer>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro container">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
export function SectionHeading({
  number,
  title,
  to,
  label,
}: {
  number: string;
  title: string;
  to?: "/projects" | "/about" | "/experience" | "/insights" | "/founder";
  label?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{number}</span>
        <h2>{title}</h2>
      </div>
      {to && (
        <Link to={to} className="text-link">
          {label} <ArrowUpRight size={17} />
        </Link>
      )}
    </div>
  );
}
/** An image from an external CDN that removes itself if it fails to load. */
export function RemoteImage({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false);
  if (failed || !props.src) return null;
  return (
    <img
      {...props}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}
export function PhoneFrame({
  src,
  alt,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`phone-frame ${className}`}>
      <RemoteImage
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        width={300}
        height={650}
      />
    </div>
  );
}
export function AppIcon({ project, size = 56 }: { project: Project; size?: number }) {
  if (!project.icon) return null;
  return (
    <RemoteImage
      className="app-icon"
      src={project.icon}
      alt={`${project.name} app icon`}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      loading="lazy"
    />
  );
}
export function StoreButtons({ project }: { project: Project }) {
  if (!project.liveUrl && !project.appStoreUrl) return null;
  return (
    <div className="store-buttons">
      {project.appStoreUrl && (
        <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer">
          <span>Download on the</span>App Store
        </a>
      )}
      {project.liveUrl?.includes("play.google.com") && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          <span>Get it on</span>Google Play
        </a>
      )}
    </div>
  );
}
export function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  if (project.gallery.length > 0)
    return (
      <div
        className={`project-visual app-visual tint-${project.slug} ${large ? "large-visual" : ""}`}
      >
        <div className="app-visual-head">
          <AppIcon project={project} size={44} />
          {project.tagline && <span>{project.tagline}</span>}
        </div>
        <div className="app-visual-phones">
          {project.gallery.slice(0, 3).map((src, i) => (
            <PhoneFrame
              key={src}
              src={src}
              alt={`${project.name} screenshot ${i + 1}`}
              className={`phone-${i}`}
            />
          ))}
        </div>
      </div>
    );
  if (project.thumbnail)
    return (
      <div className="project-visual">
        <img
          src={project.thumbnail}
          alt={`${project.name} project preview`}
          loading="lazy"
          width={900}
          height={620}
        />
      </div>
    );
  return (
    <div
      className={`project-visual visual-${project.slug} ${large ? "large-visual" : ""}`}
      role="img"
      aria-label={`${project.name} wordmark`}
    >
      <span className="visual-index">{project.categories[0] || "Independent product"}</span>
      <div className="visual-wordmark">
        {project.name === "Tech Faculty NG" ? (
          <>
            tech faculty<span className="visual-symbol">↗</span>
            <br />
            <small>NIGERIA</small>
          </>
        ) : project.name === "Campulse" ? (
          <>
            campulse<span className="visual-symbol">↗</span>
          </>
        ) : (
          project.name
        )}
      </div>
      <span className="visual-caption">{project.summary ? "" : "DETAILS TO FOLLOW"}</span>
    </div>
  );
}
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link to="/projects/$slug" params={{ slug: project.slug }} className="project-image-link">
        <ProjectVisual project={project} />
      </Link>
      <div className="project-card-title">
        <Link to="/projects/$slug" params={{ slug: project.slug }}>
          <h3>{project.name}</h3>
        </Link>
        <ArrowUpRight size={21} />
      </div>
      {project.summary && <p>{project.summary}</p>}
      <div className="project-tags">
        {project.categories.slice(0, 2).map((c) => (
          <span key={c}>{c}</span>
        ))}
        {project.technologies.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </article>
  );
}
export function ContactCTA() {
  return (
    <section className="contact-band">
      <div className="container">
        <span className="eyebrow">GOOD WORK STARTS WITH A CONVERSATION</span>
        <div className="contact-band-row">
          <h2>
            Have something
            <br />
            <em>in mind?</em>
          </h2>
          <div>
            <p>
              Engineering opportunities, ambitious products,
              <br className="desktop-break" /> and ideas worth building. Let’s talk.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Get in touch <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
export function PortraitSlot() {
  return profile.portrait ? (
    <img
      className="portrait-slot"
      src={profile.portrait}
      alt="Bill Nnamdi Achusim"
      loading="lazy"
      width={600}
      height={750}
    />
  ) : (
    <div className="portrait-slot portrait-placeholder">
      <span className="eyebrow">THE PERSON BEHIND THE WORK</span>
      <span className="portrait-initials">
        BA<span>.</span>
      </span>
      <span className="visual-caption">PORTRAIT TO FOLLOW</span>
    </div>
  );
}
export function ArrowLabel() {
  return <ArrowRight size={18} />;
}
