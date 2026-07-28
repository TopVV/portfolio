import Image from "next/image";
import { StrengthGrid } from "./strength-grid";
import { FocusSection } from "./focus-section";
import { RotatingHeadline } from "./rotating-headline";
import { MagneticLink } from "./magnetic-link";
import { SectionRail } from "./section-rail";
import { SpeedInsights } from "@vercel/speed-insights/next"

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>
);

const projects = [
  {
    index: "01",
    title: "OrbitOps",
    type: "SaaS Operations Dashboard",
    description:
      "A production-style B2B SaaS interface for managing customers, recurring revenue, account health and operational workflows.",
    highlights: [
      "Responsive operations dashboard",
      "Searchable, filterable customer workflows",
      "Typed forms, validation and reliable UI states",
      "Reusable architecture with end-to-end coverage",
    ],
    stack: ["Next.js", "React", "TypeScript", "Material UI", "TanStack Query", "React Hook Form", "Zod", "MUI X Charts", "Storybook", "Playwright"],
    variant: "orbit",
    primaryImage: "/projects/orbitops/operations-dashboard.png",
    primaryAlt:
      "OrbitOps operations dashboard with navigation, KPI cards, revenue trend and account health data",
    liveUrl: "https://orbitops-pied.vercel.app/",
    sourceUrl: "https://github.com/TopVV/orbitops",
  },
  {
    index: "02",
    title: "VerityFlow",
    type: "AI Review Workbench",
    description:
      "An AI-assisted review workspace combining structured analysis, evidence signals and human-in-the-loop decision workflows.",
    highlights: [
      "Structured AI outputs validated with Zod",
      "Source-grounded evidence and explainability",
      "Approve, edit, reject and re-run workflows",
      "Keyboard-first review navigation and Cypress coverage",
    ],
    stack: ["Next.js", "React", "TypeScript", "Mantine", "TanStack Query", "Zod", "OpenAI integration", "Cypress"],
    variant: "verity",
    primaryImage: "/projects/verity-flow/review-workspace.png",
    primaryAlt:
      "VerityFlow three-pane review workspace for structured AI analysis and evidence review",
    secondaryImage: "/projects/verity-flow/evidence-detail.png",
    secondaryAlt: "VerityFlow evidence detail showing why a result was produced",
    liveUrl: "https://verity-flow-phi.vercel.app/queue",
    sourceUrl: "https://github.com/TopVV/verity-flow",
  },
  {
    index: "03",
    title: "Provia",
    type: "Service Marketplace & Booking Platform",
    description:
      "A responsive professional-services marketplace for discovering providers, checking availability and completing an end-to-end booking flow.",
    highlights: [
      "Marketplace search, discovery and category filtering",
      "Date-aware availability and provider profiles",
      "Multi-step booking, rescheduling and cancellation",
      "Accessible mobile-first interactions with Cypress coverage",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "React Aria", "TanStack Query", "React Hook Form", "Zod", "date-fns", "Cypress"],
    variant: "provia",
    primaryImage: "/projects/provia/discovery-home.png",
    primaryAlt:
      "Provia service marketplace discovery page for finding professional service providers",
    liveUrl: "https://provia-murex.vercel.app/",
    sourceUrl: "https://github.com/TopVV/provia",
  },
];

const strengths = [
  {
    n: "01",
    title: "Frontend architecture",
    text: "Scalable application structure, clear boundaries and pragmatic technical decisions that hold up as products grow.",
  },
  {
    n: "02",
    title: "Complex product UI",
    text: "Dashboards, data-heavy workflows, tables, filters, forms and the edge states that make software feel dependable.",
  },
  {
    n: "03",
    title: "Production quality",
    text: "Performance, accessibility, testing and maintainability treated as part of the product—not a final polish step.",
  },
  {
    n: "04",
    title: "Product collaboration",
    text: "Close work with design and product to turn ambiguous requirements into focused, shippable experiences.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Vadym — home">
          <span className="brand-mark">V/</span>
          <span className="brand-text">ENGINEER</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#expertise">Expertise</a>
          <a href="#about">About</a>
        </nav>
        <MagneticLink className="header-cta" href="#contact">
          Let’s talk <Arrow />
        </MagneticLink>
      </header>

      <SectionRail />

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-glow" aria-hidden="true" />
          <div className="eyebrow">
            <span className="status-dot" />
            Available for select freelance projects
          </div>
          <RotatingHeadline />
          <div className="hero-bottom">
            <p>
              Senior Front-End &amp; Product Engineer building SaaS products,
              complex React applications and AI-enabled interfaces.
            </p>
            <div className="hero-actions">
              <MagneticLink className="button button-primary" href="#work">
                Explore my work <Arrow />
              </MagneticLink>
              <MagneticLink className="button button-ghost" href="#contact">
                Start a conversation
              </MagneticLink>
            </div>
          </div>
          <div className="hero-meta" aria-label="Core technologies">
            <span>Based in Europe · Working globally</span>
            <span>React / Next.js / TypeScript</span>
          </div>
        </section>

        <section className="build-strip" aria-label="What I build">
          <p>What I build</p>
          <div>
            <span>SaaS products</span>
            <i>◆</i>
            <span>Complex web applications</span>
            <i>◆</i>
            <span>AI-enabled interfaces</span>
          </div>
        </section>

        <FocusSection className="section projects" id="work">
          <div className="section-heading">
            <div>
              <span className="section-index">01 / Selected work</span>
              <h2>Products, not just pages.</h2>
            </div>
            <p>
              A selection of public product builds. Professional client work is
              described at a high level where NDA restrictions apply.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className={`project project--${project.variant}`} key={project.title}>
                <div className="project-copy">
                  <div className="project-title">
                    <div>
                      <span className="project-number">{project.index}</span>
                      <p>{project.type}</p>
                      <h3>{project.title}</h3>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-media" data-project-media>
                  <figure>
                    <Image
                      alt={project.primaryAlt}
                      fill
                      loading="lazy"
                      src={project.primaryImage}
                      sizes="(max-width: 960px) 100vw, 60vw"
                    />
                  </figure>
                  {project.secondaryImage ? (
                    <figure className="project-media-secondary">
                      <Image
                        alt={project.secondaryAlt ?? ""}
                        fill
                        loading="lazy"
                        src={project.secondaryImage}
                        sizes="(max-width: 640px) 38vw, 28vw"
                      />
                    </figure>
                  ) : null}
                </div>
                <div className="project-details">
                  <div>
                    <h4>Engineering highlights</h4>
                    <ul className="project-highlights">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Stack</h4>
                    <ul className="project-stack" aria-label={`${project.title} technologies`}>
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  </div>
                  <div className="project-actions">
                    <a href={project.liveUrl} rel="noreferrer" target="_blank">
                      Live demo <Arrow diagonal />
                    </a>
                    <a href={project.sourceUrl} rel="noreferrer" target="_blank">
                      GitHub <Arrow diagonal />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </FocusSection>

        <FocusSection className="section expertise" id="expertise">
          <div className="section-heading">
            <div>
              <span className="section-index">02 / Engineering strengths</span>
              <h2>Built with intent.<br />Engineered for reality.</h2>
            </div>
            <p>
              I work where product thinking meets production engineering—from
              early technical direction to the details that make a release
              trustworthy.
            </p>
          </div>
          <StrengthGrid strengths={strengths} />
        </FocusSection>

        <FocusSection className="section experience" id="experience">
          <div className="experience-intro">
            <span className="section-index">03 / Experience</span>
            <h2>Senior engineering for products with real complexity.</h2>
          </div>
          <div className="experience-body">
            <p>
              I build and evolve production web applications across the full
              frontend lifecycle: architecture, interface systems, API
              integration, performance, testing and delivery.
            </p>
            <p>
              My professional work includes client products and internal
              systems covered by NDA. I respect those constraints—no invented
              outcomes, private screenshots or confidential implementation
              details.
            </p>
            <div className="tech-line">
              {["React", "TypeScript", "Next.js", "Remix", "JavaScript"].map(
                (tech) => (
                  <span key={tech}>{tech}</span>
                ),
              )}
            </div>
          </div>
        </FocusSection>

        <FocusSection className="section about" id="about">
          <div>
            <span className="section-index">04 / About</span>
            <h2>
              Frontend depth.
              <br />
              Product perspective.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m a Senior Front-End Engineer growing into broader product
              engineering—comfortable owning complex interfaces, shaping
              technical direction and working across the product surface.
            </p>
            <p>
              The focus now: using AI as a product capability, not a buzzword.
              I’m exploring streamed experiences, structured outputs and
              human-in-the-loop workflows that make intelligent software useful
              and accountable.
            </p>
            <div className="currently">
              <span className="status-dot" />
              <div>
                <small>Currently exploring</small>
                <strong>AI-enabled product engineering</strong>
              </div>
            </div>
          </div>
        </FocusSection>

        <FocusSection className="contact" id="contact">
          <span className="section-index">Have a product to build?</span>
          <h2>Let’s make it<br />work beautifully.</h2>
          <p>
            Open to selected freelance projects, direct contracts and senior
            product engineering opportunities.
          </p>
          <MagneticLink
            className="contact-button"
            href="mailto:v.topcheev@gmail.com"
          >
            Start a conversation <Arrow diagonal />
          </MagneticLink>
          <p className="contact-note">
            v.topcheev@gmail.com · Based in Europe · Available globally
          </p>
        </FocusSection>
      </main>

      <footer>
        <div className="brand">
          <span className="brand-mark">V/</span>
          <span className="brand-text">ENGINEER</span>
        </div>
        <p>Senior Front-End / Product Engineer</p>
        <div className="socials" aria-label="Social profiles">
          <a href="mailto:v.topcheev@gmail.com">Email</a>
          <a href="https://github.com/TopVV" rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/topvv/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://www.upwork.com/freelancers/~0101e19e91fdcb3443?mp_source=share"
            rel="noreferrer"
            target="_blank"
          >
            Upwork
          </a>
          <a href="https://t.me/top_v_v" rel="noreferrer" target="_blank">
            Telegram
          </a>
          <a href="/Vadym_Topchieiev_Senior_Front_End_Engineer.pdf" download>
            CV
          </a>
        </div>
        <span>© {new Date().getFullYear()}</span>
      </footer>
      <SpeedInsights/>
    </>
  );
}
