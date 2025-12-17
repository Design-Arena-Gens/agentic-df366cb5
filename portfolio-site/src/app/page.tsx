export default function Home() {
  const impactMetrics = [
    { label: "Production deployments", value: "42" },
    { label: "Design system adoption", value: "4 teams" },
    { label: "Core web vitals", value: "0.9 PWA score" },
  ];

  const experience = [
    {
      company: "Orbit Labs",
      title: "Frontend Engineer",
      period: "2023 — Present",
      summary:
        "Led the re-architecture of the customer dashboard in React Server Components, cutting bundle sizes by 38% and unlocking near-instant navigation.",
      highlights: [
        "Created shared analytics widgets consumable by both React and Angular surfaces using web components.",
        "Developed accessibility testing pipeline with Playwright + axe, shrinking manual QA cycles by half.",
      ],
    },
    {
      company: "Brightside AI",
      title: "Frontend Developer",
      period: "2021 — 2023",
      summary:
        "Owned the Angular-powered onboarding flow for enterprise customers, rolling out a modular architecture that scaled to 30+ feature flags.",
      highlights: [
        "Shipped wizard builder that reduced integration time from 3 weeks to 4 days.",
        "Introduced Nx workspace to share models, typings, and linting rules across React + Angular repos.",
      ],
    },
  ];

  const projects = [
    {
      name: "Pulse Design System",
      description:
        "End-to-end component system consumed by React marketing properties and Angular internal tooling. Includes theming API, motion recipes, and Storybook playgrounds.",
      stack: ["React", "Angular Elements", "Storybook", "Tailwind"],
    },
    {
      name: "Signal Analytics Console",
      description:
        "Next.js + Edge runtime dashboard streaming live metrics with SWR and WebSockets. Angular micro-frontend renders complex modelling tools in parallel.",
      stack: ["Next.js", "RxJS", "WebSockets", "Turborepo"],
    },
    {
      name: "Accessibility Automation Suite",
      description:
        "CLI and CI utilities wrapping Playwright + Lighthouse to gate regressions. Shared configs power React and Angular apps with zero-config.",
      stack: ["Playwright", "Lighthouse", "GitHub Actions"],
    },
  ];

  const toolbelt = [
    "TypeScript",
    "Next.js",
    "Angular 17",
    "RxJS",
    "React Query / SWR",
    "Tailwind CSS",
    "NgRx",
    "Storybook",
    "Jest + Testing Library",
    "Playwright",
    "Node.js",
    "Vite",
  ];

  const waysOfWorking = [
    {
      title: "Design systems first",
      detail:
        "Document-first approach that keeps Figma tokens, Storybook stories, and coded primitives in sync across frameworks.",
    },
    {
      title: "Performance as a feature",
      detail:
        "Instrument metrics with Web Vitals + custom telemetry, then fix regressions before launch windows close.",
    },
    {
      title: "Framework interoperability",
      detail:
        "Leverage module federation and Angular Elements to bridge React marketing surfaces with Angular operations tools.",
    },
  ];

  return (
    <div className="px-6 pb-24 pt-16 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-20">
        <header className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-end">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
              Frontend Developer · 3 Years Shipping
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-50 md:text-5xl">
              Building cohesive product experiences across React and Angular.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              I help product teams move faster without sacrificing craft. My work
              spans adaptable design systems, streaming dashboards, and enterprise
              workflows—all grounded in performance, accessibility, and collaboration.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              {["Available for contract", "Remote-first", "UTC-5"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-slate-700/70 bg-slate-900/70 px-4 py-2 backdrop-blur"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-[0_20px_80px_-40px_rgba(56,189,248,0.35)] backdrop-blur">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-slate-800/60 bg-slate-900/80 px-5 py-4"
              >
                <p className="text-3xl font-semibold text-slate-50">{metric.value}</p>
                <p className="text-sm uppercase tracking-wide text-slate-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </header>

        <section className="grid gap-10 rounded-3xl border border-slate-800/80 bg-slate-900/60 p-10 backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-semibold text-slate-50">Experience</h2>
            <p className="text-sm text-slate-400">
              Partnering closely with design, product, and platform teams to ship faster.
            </p>
          </div>
          <div className="grid gap-8">
            {experience.map((role) => (
              <article
                key={role.company}
                className="grid gap-6 rounded-3xl border border-slate-800/60 bg-slate-950/40 p-7 md:grid-cols-[1fr_2fr]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    {role.period}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-50">
                    {role.title}
                  </h3>
                  <p className="text-sm text-slate-400">{role.company}</p>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-200">{role.summary}</p>
                  <ul className="grid gap-3 text-sm text-slate-300">
                    {role.highlights.map((item) => (
                      <li
                        key={item}
                        className="rounded-2xl border border-slate-800/60 bg-slate-900/60 px-4 py-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-slate-800/80 bg-slate-900/60 p-10 backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-semibold text-slate-50">
              Featured Projects
            </h2>
            <p className="text-sm text-slate-400">
              Systems thinking applied to customer-facing experiences and internal tooling.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex flex-col gap-4 rounded-3xl border border-slate-800/60 bg-gradient-to-br from-slate-900/70 to-slate-950/70 p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-50">
                    {project.name}
                  </h3>
                  <span className="rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-sky-200">
                    Case
                  </span>
                </div>
                <p className="text-sm text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-800/60 bg-slate-900/80 px-3 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-slate-800/80 bg-slate-900/60 p-10 backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-semibold text-slate-50">Toolbelt</h2>
            <p className="text-sm text-slate-400">
              Pragmatic mix of React, Angular, and the surrounding ecosystem.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-200">
            {toolbelt.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-800/60 bg-slate-950/50 px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="grid gap-4 rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 md:grid-cols-3">
            {waysOfWorking.map((value) => (
              <article key={value.title} className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-50">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-300">{value.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/70 to-slate-950/80 p-10 backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-semibold text-slate-50">
              React & Angular In Action
            </h2>
            <p className="text-sm text-slate-400">
              Embedded Angular app demonstrates shared component strategies inside the React shell.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-4">
            <iframe
              src="/angular/index.html"
              title="Angular case study"
              loading="lazy"
              className="h-[520px] w-full rounded-2xl border border-slate-800 bg-slate-950"
            />
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-10 backdrop-blur">
          <div className="grid gap-6 md:grid-cols-[2fr,1fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-50">
                Let&apos;s build your next release.
              </h2>
              <p className="text-sm text-emerald-100">
                I can help you refactor a legacy Angular module, accelerate a React migration, or
                lead a holistic front-of-the-front-end initiative. Tell me about your product goals.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <a
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 font-medium text-emerald-950 transition hover:bg-emerald-300"
                href="mailto:avery.chen+portfolio@hey.com"
              >
                Email Avery
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-emerald-400/60 px-6 py-3 font-medium text-emerald-100 transition hover:border-emerald-200 hover:text-emerald-50"
                href="https://cal.com"
                target="_blank"
                rel="noreferrer"
              >
                Book a 25 min pairing session
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
