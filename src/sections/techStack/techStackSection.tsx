export default function TechStackSection() {
  return (
    <section id="tech" className="relative min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex rounded-full border border-neutral-700 bg-neutral-950/70 px-5 py-2 text-xs tracking-[0.35em] text-neutral-400 uppercase shadow-sm">
            Tech Stack
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Technologies I use to build fast web products.
          </h2>
          <p className="text-lg leading-8 text-neutral-300">
            From UI components to server-side services, these are the tools and
            frameworks I rely on for modern, maintainable web applications.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-neutral-950/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <h3 className="text-xl font-semibold text-white">Frontend</h3>
            <ul className="mt-5 space-y-3 text-neutral-300">
              {["TypeScript", "React", "Next.js", "Tailwind CSS"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/60" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </article>
          <article className="rounded-3xl border border-white/10 bg-neutral-950/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <h3 className="text-xl font-semibold text-white">Backend</h3>
            <ul className="mt-5 space-y-3 text-neutral-300">
              {["Node.js", "NestJS", "API Design", "Microservices"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/60" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </article>
          <article className="rounded-3xl border border-white/10 bg-neutral-950/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <h3 className="text-xl font-semibold text-white">Infra</h3>
            <ul className="mt-5 space-y-3 text-neutral-300">
              {["Git", "Docker", "Vercel", "CI/CD"].map((item) => (
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
