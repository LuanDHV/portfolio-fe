const projects = [
  {
    name: "Orbit Dashboard",
    role: "Realtime analytics",
    date: "2024 — Present",
    github: "#",
    demo: "#",
    summary:
      "A performance-first dashboard with live visualizations, multi-region metrics, and clean operational flows.",
    tags: ["Next.js", "Prisma", "Supabase"],
  },
  {
    name: "Nova Commerce",
    role: "Commerce platform",
    date: "2023 — 2024",
    github: "#",
    demo: "#",
    summary:
      "A fast headless storefront built for conversion, mobile-first checkout, and server-side search optimization.",
    tags: ["React", "Stripe", "Headless CMS"],
  },
  {
    name: "Photon Portfolio",
    role: "Brand experience",
    date: "2022 — 2023",
    github: "#",
    demo: "#",
    summary:
      "A polished creator portfolio with motion-led storytelling, accessibility, and SEO-ready landing sections.",
    tags: ["Tailwind", "SEO", "Design"],
  },
  {
    name: "Luna CRM",
    role: "Workflow system",
    date: "2021 — 2022",
    github: "#",
    demo: "#",
    summary:
      "A lightweight CRM with real-time collaboration, API integrations, and clean customer management interfaces.",
    tags: ["Node.js", "API", "Dashboard"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex rounded-full border border-neutral-700 bg-neutral-950/70 px-5 py-2 text-xs text-neutral-400 uppercase shadow-sm">
            Projects
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Selected work in a timeline layout.
          </h2>
          <p className="text-lg leading-8 text-neutral-300">
            Mock projects shown like a connected timeline, with alternating
            cards left and right to echo the right-side nav style.
          </p>
        </div>

        <div className="relative mt-20 px-4 sm:px-0">
          <div className="absolute top-0 left-1/2 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />

          <div className="space-y-10">
            {projects.map((project, index) => {
              const alignRight = index % 2 === 1;
              return (
                <div
                  key={project.name}
                  className={`relative md:grid md:grid-cols-2 md:items-center ${
                    alignRight ? "md:grid-flow-dense" : ""
                  }`}
                >
                  <span
                    className={`absolute top-1/2 hidden h-px -translate-y-1/2 bg-white/10 md:block ${
                      alignRight ? "left-1/2 w-28" : "right-1/2 w-28"
                    }`}
                  />
                  <span className="absolute top-1/2 left-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/15 ring-2 ring-white/10 md:block" />
                  <span
                    className={`absolute top-1/2 hidden -translate-y-1/2 items-center gap-2 md:z-20 md:flex ${
                      alignRight ? "right-1/2 mr-8" : "left-1/2 ml-8"
                    }`}
                  >
                    {alignRight ? (
                      <>
                        <span className="rounded-full border border-white/10 bg-neutral-950/95 px-3 py-1 text-xs text-neutral-300 uppercase">
                          {project.date}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="rounded-full border border-white/10 bg-neutral-950/95 px-3 py-1 text-xs text-neutral-300 uppercase">
                          {project.date}
                        </span>
                      </>
                    )}
                  </span>

                  <div
                    className={`md:col-span-1 ${
                      alignRight ? "md:col-start-2 md:pl-10" : "md:pr-10"
                    }`}
                  >
                    <div
                      className={`relative rounded-lg border border-white/10 bg-neutral-950/90 p-6 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.8)] backdrop-blur-sm ${
                        alignRight ? "md:ml-auto" : "md:mr-auto"
                      } max-w-xl`}
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-white/10 via-transparent to-transparent" />
                      <h3 className="mt-5 text-3xl font-semibold text-white">
                        {project.name}
                      </h3>

                      <p className="mt-6 leading-7 text-neutral-300">
                        {project.summary}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-400 uppercase">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-2"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white uppercase transition hover:bg-white/10"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 19c-4.3 1.4-4.3-2-6-2" />
                            <path d="M14 20v-2.2c0-1.1.4-1.8.8-2.2c-2.6-.3-5.2-1.3-5.2-5.7c0-1.3.5-2.4 1.2-3.2c-.1-.3-.5-1.6.1-3.3c0 0 1-.3 3.3 1.2c1-.3 2-.5 3-.5c1 0 2 .2 3 .5c2.3-1.5 3.3-1.2 3.3-1.2c.6 1.7.2 3 .1 3.3c.8.8 1.2 1.9 1.2 3.2c0 4.4-2.6 5.4-5.2 5.7c.4.4.8 1.1.8 2.2V20" />
                          </svg>
                          Source
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white uppercase transition hover:bg-white/10"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                          Live
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
