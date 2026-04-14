export default function GlobeSection() {
  return (
    <section id="globe" className="relative min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-neutral-700 bg-neutral-950/70 px-5 py-2 text-xs tracking-[0.35em] text-neutral-400 uppercase shadow-sm">
              Globe
            </span>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Global impact with a grounded system.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-neutral-300">
              I craft web applications that work beautifully across regions,
              with strong performance, accessibility, and deployment readiness.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-neutral-950/80 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
            <div className="aspect-4/3 rounded-3xl border border-dashed border-white/10 bg-linear-to-br from-slate-900 via-neutral-950 to-black" />
            <p className="mt-8 text-neutral-300">
              This placeholder can represent global reach, deployments, or an
              interactive globe visualization as part of your portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
