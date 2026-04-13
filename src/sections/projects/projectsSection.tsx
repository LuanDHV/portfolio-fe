const projects = [
  {
    name: "Orbit Dashboard",
    summary:
      "Realtime analytics dashboard built with Next.js, Prisma and Supabase.",
  },
  {
    name: "Nova Commerce",
    summary:
      "Performance-first storefront with headless commerce and fast checkout.",
  },
  {
    name: "Photon Portfolio",
    summary: "Design-forward landing page with motion, accessibility, and SEO.",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex rounded-full border border-neutral-700 bg-neutral-950/70 px-5 py-2 text-xs tracking-[0.35em] text-neutral-400 uppercase shadow-sm">
            Projects
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Selected work for ambitious teams.
          </h2>
          <p className="text-lg leading-8 text-neutral-300">
            A few examples of systems and interfaces created for growth-minded
            brands, each built to perform under traffic and scale over time.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-3xl border border-white/10 bg-neutral-950/80 p-6 transition hover:-translate-y-1 hover:bg-neutral-900"
            >
              <h3 className="text-xl font-semibold text-white">
                {project.name}
              </h3>
              <p className="mt-4 text-neutral-300">{project.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
