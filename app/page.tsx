const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>
);

const projects = [
  {
    index: "01",
    title: "OrbitOps",
    type: "B2B SaaS operations dashboard",
    description:
      "A dense operational workspace that turns complex workflows, data and system states into a clear interface teams can act on.",
    role: "Product engineering · Frontend architecture",
    stack: ["Next.js", "React", "TypeScript", "Complex UI"],
    variant: "orbit",
    problem:
      "Operations teams need one reliable place to monitor work, filter large datasets and move tasks forward without losing context.",
  },
  {
    index: "02",
    title: "AI Review Workbench",
    type: "AI-enabled review application",
    description:
      "A human-in-the-loop workspace for reviewing streamed AI output, validating structured results and keeping people in control.",
    role: "Product UX · AI integration",
    stack: ["Next.js", "Streaming", "Structured output", "AI APIs"],
    variant: "ai",
    problem:
      "AI output becomes useful product work only when people can inspect, correct and approve it with confidence.",
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
        <a className="header-cta" href="#contact">
          Let’s talk <Arrow />
        </a>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-glow" aria-hidden="true" />
          <div className="eyebrow">
            <span className="status-dot" />
            Available for select freelance projects
          </div>
          <h1>
            Engineering <span>digital products</span>
            <br /> built to perform.
          </h1>
          <div className="hero-bottom">
            <p>
              Senior Front-End &amp; Product Engineer building SaaS products,
              complex React applications and AI-enabled interfaces.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <Arrow />
              </a>
              <a className="button button-ghost" href="#contact">
                Start a conversation
              </a>
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

        <section className="section projects" id="work">
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
              <article className="project" key={project.title}>
                <div className={`project-visual ${project.variant}`}>
                  <div className="mock-browser">
                    <div className="mock-top">
                      <span />
                      <span />
                      <span />
                      <b>{project.title}</b>
                    </div>
                    {project.variant === "orbit" ? (
                      <div className="orbit-ui">
                        <aside>
                          <strong>ORBIT</strong>
                          <i />
                          <i />
                          <i />
                          <i />
                        </aside>
                        <div className="dashboard">
                          <small>OPERATIONS / OVERVIEW</small>
                          <h3>Command center</h3>
                          <div className="kpis">
                            <span />
                            <span />
                            <span />
                          </div>
                          <div className="chart">
                            <b />
                          </div>
                          <div className="rows">
                            <i />
                            <i />
                            <i />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="ai-ui">
                        <aside>
                          <strong>REVIEW</strong>
                          <i />
                          <i />
                          <i />
                        </aside>
                        <div className="review">
                          <small>AI REVIEW / SESSION 024</small>
                          <h3>Validate structured output</h3>
                          <div className="review-grid">
                            <div>
                              <i />
                              <i />
                              <i />
                              <i />
                            </div>
                            <div>
                              <span />
                              <span />
                              <button type="button" tabIndex={-1}>
                                Approve
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="project-number">{project.index}</span>
                </div>
                <div className="project-copy">
                  <div className="project-title">
                    <div>
                      <p>{project.type}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <a href="#contact" aria-label={`Ask about ${project.title}`}>
                      <Arrow diagonal />
                    </a>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <dl>
                    <div>
                      <dt>Problem</dt>
                      <dd>{project.problem}</dd>
                    </div>
                    <div>
                      <dt>My role</dt>
                      <dd>{project.role}</dd>
                    </div>
                  </dl>
                  <ul aria-label={`${project.title} technologies`}>
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section expertise" id="expertise">
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
          <div className="strength-grid">
            {strengths.map((item) => (
              <article key={item.title}>
                <span>{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience">
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
        </section>

        <section className="section about" id="about">
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
        </section>

        <section className="contact" id="contact">
          <span className="section-index">Have a product to build?</span>
          <h2>Let’s make it<br />work beautifully.</h2>
          <p>
            Open to selected freelance projects, direct contracts and senior
            product engineering opportunities.
          </p>
          <a className="contact-button" href="mailto:v.topcheev@gmail.com">
            Start a conversation <Arrow diagonal />
          </a>
          <p className="contact-note">
            v.topcheev@gmail.com · Based in Europe · Available globally
          </p>
        </section>
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
        </div>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
