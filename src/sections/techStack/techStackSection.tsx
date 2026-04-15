export default function TechStackSection() {
  return (
    <section id="tech" className="relative h-auto py-12 lg:min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex rounded-full border border-neutral-700 bg-neutral-950/70 px-5 py-2 text-xs text-neutral-400 uppercase shadow-sm">
            Skills
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Core technologies and workflows I use every day.
          </h2>
          <p className="text-lg leading-8 text-neutral-300">
            A concise view of the key stacks I rely on for fast, scalable, and
            SEO-friendly web applications.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article className="rounded-[32px] border border-white/10 bg-neutral-950/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <h3 className="text-xl font-semibold text-white">Frontend</h3>
            <ul className="mt-6 space-y-3 text-neutral-300">
              {["TypeScript", "React", "Next.js (SSR/SSG)", "Tailwind CSS"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/60" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </article>

          <article className="rounded-[32px] border border-white/10 bg-neutral-950/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <h3 className="text-xl font-semibold text-white">State & Data</h3>
            <ul className="mt-6 space-y-3 text-neutral-300">
              {[
                "Redux Toolkit",
                "RTK Query",
                "RESTful APIs",
                "Data fetching patterns",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[32px] border border-white/10 bg-neutral-950/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <h3 className="text-xl font-semibold text-white">Backend</h3>
            <ul className="mt-6 space-y-3 text-neutral-300">
              {["Node.js", "NestJS", "API design", "Server-side logic"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/60" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </article>

          <article className="rounded-[32px] border border-white/10 bg-neutral-950/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <h3 className="text-xl font-semibold text-white">Database</h3>
            <ul className="mt-6 space-y-3 text-neutral-300">
              {["MySQL", "PostgreSQL", "MongoDB"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[32px] border border-white/10 bg-neutral-950/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <h3 className="text-xl font-semibold text-white">
              Tools & Workflow
            </h3>
            <ul className="mt-6 space-y-3 text-neutral-300">
              {[
                "Git",
                "GitLab CI/CD",
                "Docker",
                "Figma",
                "Jira",
                "Postman",
                "Agile/Scrum",
                "ArgoCD",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
