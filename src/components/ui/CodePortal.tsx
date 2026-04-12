export default function CodePortal() {
  const lines = [
    { number: "01", code: "const developer = {" },
    { number: "02", code: "  role: 'Web Developer'," },
    {
      number: "03",
      code: "  frontend: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],",
    },
    { number: "04", code: "  backend: ['Node.js', 'NestJS']," },
    { number: "05", code: "  database: ['MySQL', 'PostgreSQL', 'MongoDB']," },
    { number: "06", code: "  tools: ['Git', 'Docker', 'Figma', 'Jira']," },
    { number: "07", code: "};" },
  ];

  return (
    <div className="overflow-hidden rounded-4xl border border-white/10 bg-neutral-950/95 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.65)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-neutral-900/95 px-5 py-3 text-xs tracking-[0.28em] text-neutral-400 uppercase">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-neutral-500" />
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-neutral-500/80" />
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-neutral-500/60" />
        </div>
        <span className="font-medium text-neutral-200">Portfolio.ts</span>
      </div>

      <div className="px-6 py-7">
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-neutral-950/95 p-6">
          <div className="grid gap-2 font-mono text-sm leading-7 text-neutral-100">
            {lines.map((line) => (
              <div key={line.number} className="flex gap-4">
                <span className="min-w-8 text-right text-neutral-500">
                  {line.number}
                </span>
                <span className="whitespace-pre text-neutral-200">
                  {line.code}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
