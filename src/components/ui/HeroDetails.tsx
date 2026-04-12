export default function HeroDetails() {
  return (
    <div className="flex flex-col justify-center gap-8">
      <span className="self-start rounded-full border border-neutral-700 bg-neutral-950/70 px-5 py-2 text-xs tracking-[0.35em] text-neutral-400 uppercase shadow-sm">
        Welcome to my universe
      </span>

      <div className="space-y-6">
        <h1 className="max-w-[18ch] text-5xl leading-[0.95] font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Hello, I&apos;m Doan Huynh Vu Luan
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-neutral-300">
          Web developer building fast, SEO-friendly Next.js experiences with a
          focus on high-traffic and clean, modern UX.
        </p>
      </div>

      <div className="grid max-w-md gap-4 sm:grid-cols-[1.2fr_0.8fr]">
        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Let&apos;s Collaborate
        </button>
        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/80 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:bg-neutral-900"
        >
          Get Resume
        </button>
      </div>
    </div>
  );
}
