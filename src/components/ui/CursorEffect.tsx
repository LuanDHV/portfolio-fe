"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorEffect() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const waveRef = useRef<HTMLDivElement | null>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const wave = waveRef.current;
    const trails = trailRefs.current;
    if (!dot || !ring || !wave || trails.length !== 7) return;

    const previousCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;

      gsap.to(dot, {
        x: clientX,
        y: clientY,
        duration: 0.08,
        ease: "power3.out",
      });

      gsap.to(ring, {
        x: clientX,
        y: clientY,
        duration: 0.18,
        ease: "power3.out",
      });

      gsap.to(trails[0], {
        x: clientX,
        y: clientY,
        duration: 0.14,
        ease: "power3.out",
        opacity: 0.8,
      });
      gsap.to(trails[1], {
        x: clientX,
        y: clientY,
        duration: 0.18,
        ease: "power3.out",
        opacity: 0.7,
      });
      gsap.to(trails[2], {
        x: clientX,
        y: clientY,
        duration: 0.22,
        ease: "power3.out",
        opacity: 0.6,
      });
      gsap.to(trails[3], {
        x: clientX,
        y: clientY,
        duration: 0.28,
        ease: "power3.out",
        opacity: 0.5,
      });
      gsap.to(trails[4], {
        x: clientX,
        y: clientY,
        duration: 0.34,
        ease: "power3.out",
        opacity: 0.4,
      });
      gsap.to(trails[5], {
        x: clientX,
        y: clientY,
        duration: 0.42,
        ease: "power3.out",
        opacity: 0.28,
      });
      gsap.to(trails[6], {
        x: clientX,
        y: clientY,
        duration: 0.52,
        ease: "power3.out",
        opacity: 0.18,
      });

      gsap.killTweensOf(wave);
      gsap.set(wave, {
        x: clientX,
        y: clientY,
        scale: 0.35,
        opacity: 0.24,
      });
      gsap.to(wave, {
        scale: 2.1,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handlePointerOver = (event: Event) => {
      const target = event.target as HTMLElement;
      if (
        target.closest(
          "button, a, input, textarea, select, label, .cursor-hover",
        )
      ) {
        gsap.to(dot, {
          scale: 1.05,
          backgroundColor: "rgba(255,255,255,0.95)",
          duration: 0.16,
          ease: "power3.out",
        });
        gsap.to(ring, {
          scale: 1.02,
          opacity: 0.22,
          duration: 0.16,
          ease: "power3.out",
        });
      }
    };

    const handlePointerOut = (event: Event) => {
      const target = event.target as HTMLElement;
      if (
        target.closest(
          "button, a, input, textarea, select, label, .cursor-hover",
        )
      ) {
        gsap.to(dot, {
          scale: 1,
          backgroundColor: "rgba(255,255,255,0.18)",
          duration: 0.22,
          ease: "power3.out",
        });
        gsap.to(ring, {
          scale: 1,
          opacity: 0.09,
          duration: 0.22,
          ease: "power3.out",
        });
      }
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      document.body.style.cursor = previousCursor;
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div
        ref={waveRef}
        className="absolute top-0 left-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
      />
      <div
        ref={(el) => {
          if (el) trailRefs.current[6] = el as HTMLDivElement;
        }}
        className="absolute top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-85"
      />
      <div
        ref={(el) => {
          if (el) trailRefs.current[5] = el as HTMLDivElement;
        }}
        className="absolute top-0 left-0 h-1.75 w-1.75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-80"
      />
      <div
        ref={(el) => {
          if (el) trailRefs.current[4] = el as HTMLDivElement;
        }}
        className="absolute top-0 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-80"
      />
      <div
        ref={(el) => {
          if (el) trailRefs.current[3] = el as HTMLDivElement;
        }}
        className="absolute top-0 left-0 h-2.25 w-2.25 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-70"
      />
      <div
        ref={(el) => {
          if (el) trailRefs.current[2] = el as HTMLDivElement;
        }}
        className="absolute top-0 left-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-60"
      />
      <div
        ref={(el) => {
          if (el) trailRefs.current[1] = el as HTMLDivElement;
        }}
        className="absolute top-0 left-0 h-2.75 w-2.75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-50"
      />
      <div
        ref={(el) => {
          if (el) trailRefs.current[0] = el as HTMLDivElement;
        }}
        className="absolute top-0 left-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-40"
      />
      <div
        ref={ringRef}
        className="absolute top-0 left-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-transparent opacity-18"
      />
      <div
        ref={dotRef}
        className="absolute top-0 left-0 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.3)]"
      />
    </div>
  );
}
