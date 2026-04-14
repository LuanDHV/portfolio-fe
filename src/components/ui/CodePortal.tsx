import type { PointerEvent } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function CodePortal() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateY = useTransform(x, [-50, 50], [10, -10]);
  const rotateX = useTransform(y, [-50, 50], [-10, 10]);
  const translateX = useTransform(x, [-50, 50], [8, -8]);
  const translateY = useTransform(y, [-50, 50], [8, -8]);

  const lines = [
    { number: "01", code: "const developer = {" },
    { number: "02", code: "  role: 'Fullstack Developer'," },
    {
      number: "03",
      code: "  frontend: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],",
    },
    { number: "04", code: "  backend: ['Node.js', 'NestJS']," },
    { number: "05", code: "  database: ['MySQL', 'PostgreSQL', 'MongoDB']," },
    { number: "06", code: "  tools: ['Git', 'Docker', 'Figma', 'Jira']," },
    { number: "07", code: "};" },
  ];

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    x.set((px - 0.5) * 100);
    y.set((py - 0.5) * 100);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative min-w-0" style={{ perspective: 1200 }}>
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 90, damping: 24 }}
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        className="overflow-hidden rounded-4xl border border-white/10 bg-neutral-950/95 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.65)]"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-neutral-900/95 px-5 py-3 text-xs tracking-[0.28em] text-neutral-400 uppercase">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-neutral-500" />
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-neutral-500/80" />
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-neutral-500/60" />
          </div>
          <span className="font-medium text-neutral-200">Portfolio.ts</span>
        </div>

        <div className="px-6 py-7">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/95 p-6">
            <div className="grid w-full gap-2 font-mono text-sm leading-7 text-neutral-100">
              {lines.map((line) => (
                <div key={line.number} className="flex min-w-0 gap-4">
                  <span className="min-w-8 text-right text-neutral-500">
                    {line.number}
                  </span>
                  <span className="wrap-break-word whitespace-pre-wrap text-neutral-200">
                    {line.code}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
