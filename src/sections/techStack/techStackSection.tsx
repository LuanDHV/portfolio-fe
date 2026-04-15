"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ReactIcon = () => (
  <svg
    viewBox="0 0 48 48"
    width="20"
    height="20"
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" stroke="#61DAFB" strokeWidth="3">
      <ellipse cx="24" cy="24" rx="15" ry="8" />
      <ellipse cx="24" cy="24" rx="15" ry="8" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="15" ry="8" transform="rotate(120 24 24)" />
    </g>
    <circle cx="24" cy="24" r="5" fill="#61DAFB" />
  </svg>
);

const NextIcon = () => (
  <svg
    viewBox="0 0 48 48"
    width="20"
    height="20"
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 10h28v28H10z" fill="#000" opacity="0.04" />
    <path d="M14 14h20v20H14z" fill="#fff" stroke="#000" strokeWidth="2" />
    <path d="M22 18l8 6-8 6V18z" fill="#000" />
  </svg>
);

const TailwindIcon = () => (
  <svg
    viewBox="0 0 48 48"
    width="20"
    height="20"
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="tw-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="#38b2ac" offset="0%" />
        <stop stopColor="#0ea5e9" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M6 36c6-4 12-1 18-1s12-4 18-10v12H6V36Z"
      fill="url(#tw-gradient)"
    />
    <path
      d="M6 22c6-4 12-1 18-1s12-4 18-10v12H6V22Z"
      fill="url(#tw-gradient)"
      opacity="0.9"
    />
  </svg>
);

const NestIcon = () => (
  <svg
    viewBox="0 0 48 48"
    width="20"
    height="20"
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 6l14 8v20L24 42 10 34V14l14-8z" fill="#e0234e" />
    <path
      d="M24 10.8L14 17v14l10 5.6 10-5.6V17l-10-6.2z"
      fill="#fff"
      opacity="0.32"
    />
  </svg>
);

const TsIcon = () => (
  <svg
    viewBox="0 0 48 48"
    width="20"
    height="20"
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="6" y="6" width="36" height="36" rx="8" fill="#3178c6" />
    <path d="M16 16h16v4H20v4h10v4H20v8H16V16Z" fill="#fff" />
  </svg>
);

const DockerIcon = () => (
  <svg
    viewBox="0 0 48 48"
    width="20"
    height="20"
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="6" y="24" width="36" height="14" rx="3" fill="#2496ed" />
    <path d="M8 24h32v-6H8v6Z" fill="#fff" opacity="0.2" />
    <path d="M18 10h4v6h-4zM24 10h4v6h-4zM30 10h4v6h-4z" fill="#fff" />
  </svg>
);

const NodeIcon = () => (
  <svg
    viewBox="0 0 48 48"
    width="20"
    height="20"
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 14l12-7 12 7v14l-12 7-12-7V14Z" fill="#339933" />
    <path d="M12 23.4l12 7 12-7" stroke="#fff" strokeWidth="2" fill="none" />
  </svg>
);

const rowOne = [
  { label: "React", icon: <ReactIcon /> },
  { label: "Next.js", icon: <NextIcon /> },
  { label: "Tailwind", icon: <TailwindIcon /> },
  { label: "TypeScript", icon: <TsIcon /> },
];

const rowTwo = [
  { label: "NestJS", icon: <NestIcon /> },
  { label: "Node.js", icon: <NodeIcon /> },
  { label: "Docker", icon: <DockerIcon /> },
  { label: "CI / CD", icon: <ReactIcon /> },
];

export default function TechStackSection() {
  const rows = useRef<HTMLDivElement[]>([]);

  const setRowRef = (node: HTMLDivElement | null) => {
    if (node && !rows.current.includes(node)) {
      rows.current.push(node);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    rows.current.forEach((row, index) => {
      const xDirection = index % 2 === 0 ? -80 : 80;
      gsap.fromTo(
        row.children,
        { x: xDirection, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="tech" className="relative h-auto py-12 lg:min-h-screen">
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%)]" />
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

        <div className="mt-14 space-y-6">
          <div
            ref={setRowRef}
            className="techstack-reveal flex flex-wrap justify-center gap-4 overflow-hidden"
          >
            {rowOne.map((item) => (
              <div
                key={item.label}
                className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-white/20 hover:bg-white/10"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900/80 text-xs font-semibold text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div
            ref={setRowRef}
            className="techstack-reveal flex flex-wrap justify-center gap-4 overflow-hidden"
          >
            {rowTwo.map((item) => (
              <div
                key={item.label}
                className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-white/20 hover:bg-white/10"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900/80 text-xs font-semibold text-fuchsia-300 shadow-[0_0_20px_rgba(192,132,252,0.2)]">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
