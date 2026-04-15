import { useEffect, useRef } from "react";
import gsap from "gsap";

const heroDescription =
  "Experienced in building Next.js (SSR) applications for sports platforms and live events. Focused on performance, SEO, and user experience, with hands-on experience in backend services and data pipelines. Seeking a Frontend or Fullstack Developer position to build scalable and user-focused applications.";

export default function HeroDetails() {
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!descriptionRef.current || !titleRef.current) return;

    descriptionRef.current.textContent = "";
    const typeObj = { index: 0 };

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    );

    gsap.to(typeObj, {
      index: heroDescription.length,
      duration: 3.5,
      ease: "none",
      onUpdate: () => {
        if (!descriptionRef.current) return;
        const current = Math.floor(typeObj.index);
        descriptionRef.current.textContent = heroDescription.slice(0, current);
      },
      onComplete: () => {
        if (descriptionRef.current) {
          descriptionRef.current.textContent = heroDescription;
        }
      },
    });
  }, []);

  return (
    <div className="flex flex-col justify-center gap-8">
      <span className="self-start rounded-full border border-neutral-700 bg-neutral-950/70 px-5 py-2 text-xs text-neutral-400 uppercase shadow-sm">
        Welcome to my universe
      </span>

      <div className="space-y-6">
        <h1
          ref={titleRef}
          className="max-w-[18ch] text-5xl leading-[0.95] font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Hello, I&apos;m Doan Huynh Vu Luan
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-neutral-300">
          <span ref={descriptionRef} />
          <span
            aria-hidden="true"
            className="ml-1 inline-block h-6 w-[2px] bg-white align-middle"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </p>
      </div>

      <div className="grid max-w-md gap-4 sm:grid-cols-[1.2fr_0.8fr]">
        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Let&apos;s Collaborate
        </button>
        <a
          href="/resume/LuanDHV-Resume.pdf"
          download
          className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-neutral-950/80 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:bg-neutral-900"
        >
          Get Resume
        </a>
      </div>
    </div>
  );
}
