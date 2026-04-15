import type { PointerEvent } from "react";
import { useRef } from "react";
import gsap from "gsap";

export default function CodePortal() {
  const portalRef = useRef<HTMLDivElement | null>(null);

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

    const x = (px - 0.5) * 10;
    const y = (py - 0.5) * 10;
    const rotateY = (px - 0.5) * 10;
    const rotateX = (py - 0.5) * -10;

    if (portalRef.current) {
      gsap.to(portalRef.current, {
        x,
        y,
        rotateX,
        rotateY,
        ease: "power2.out",
        duration: 0.25,
      });
    }
  };

  const handlePointerLeave = () => {
    if (portalRef.current) {
      gsap.to(portalRef.current, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        ease: "power2.out",
        duration: 0.4,
      });
    }
  };

  return (
    <div className="relative min-w-0" style={{ perspective: 1200 }}>
      <div
        ref={portalRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="overflow-hidden rounded-lg border border-white/10 bg-neutral-950/95 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.65)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-neutral-900/95 px-5 py-3 text-xs text-neutral-400 uppercase">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-neutral-500" />
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-neutral-500/80" />
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-neutral-500/60" />
          </div>
          <span className="font-medium text-neutral-200">Portfolio.ts</span>
        </div>

        <div className="px-6 py-7">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-neutral-950/95 p-6">
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
      </div>
    </div>
  );
}
