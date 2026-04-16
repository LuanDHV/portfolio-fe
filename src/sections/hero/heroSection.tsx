"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import CodePortal from "@/src/components/ui/CodePortal";
import HeroDetails from "@/src/components/ui/HeroDetails";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const portalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const heroEl = heroRef.current;
    const portalEl = portalRef.current;
    if (!heroEl || !portalEl) return;

    gsap.fromTo(
      heroEl,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.15, ease: "power3.out" },
    );

    gsap.fromTo(
      portalEl,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out" },
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative flex h-auto overflow-hidden py-10 lg:min-h-screen lg:items-center lg:py-0"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div ref={heroRef}>
            <HeroDetails />
          </div>

          <div ref={portalRef}>
            <CodePortal />
          </div>
        </div>
      </div>
    </section>
  );
}
