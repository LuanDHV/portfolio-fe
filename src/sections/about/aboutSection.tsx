export default function AboutSection() {
  return (
    <section className="relative min-h-screen border-t border-white/10 bg-black/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex rounded-full border border-neutral-700 bg-neutral-950/70 px-5 py-2 text-xs tracking-[0.35em] text-neutral-400 uppercase shadow-sm">
            About
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Building modern web experiences from UI to API.
          </h2>
          <p className="text-lg leading-8 text-neutral-300">
            I build scalable Next.js applications with TypeScript and Tailwind
            CSS, combining clean frontend interfaces, backend API integrations,
            and strong performance practices for enterprise-ready websites.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-neutral-950/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <h3 className="text-xl font-semibold text-white">Frontend focus</h3>
            <p className="mt-4 text-neutral-300">
              Responsive component systems, accessible interactions, and
              polished motion that feels purposeful across devices.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-neutral-950/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <h3 className="text-xl font-semibold text-white">Backend & APIs</h3>
            <p className="mt-4 text-neutral-300">
              API-first architecture, server-side rendering, CMS integrations,
              and production deployment workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
