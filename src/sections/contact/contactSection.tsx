export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr]">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-neutral-700 bg-neutral-950/70 px-5 py-2 text-xs tracking-[0.35em] text-neutral-400 uppercase shadow-sm">
              Contact
            </span>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Let&apos;s bring your next idea to life.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-neutral-300">
              I help brands and startups ship elegant, high-performance web
              experiences. Reach out for collaborations, consulting, or product
              strategy.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-neutral-950/80 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
            <p className="text-sm tracking-[0.35em] text-neutral-400 uppercase">
              Ready to talk?
            </p>
            <h3 className="mt-6 text-2xl font-semibold text-white">Email</h3>
            <p className="mt-3 text-neutral-300">hello@luandhv.dev</p>
            <div className="mt-8 flex flex-col gap-4">
              <a
                href="mailto:hello@luandhv.dev"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Send a message
              </a>
              <a
                href="#"
                className="rounded-2xl border border-white/10 bg-neutral-950/80 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:bg-neutral-900"
              >
                Download resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
