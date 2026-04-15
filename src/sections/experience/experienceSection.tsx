"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experiences = [
  {
    id: "enjoysport",
    title: "Frontend Developer (Fullstack Contribution)",
    company: "EnjoySport",
    logo: "/logos/enjoysport-logo.svg",
    location: "Ho Chi Minh, Viet Nam",
    date: "Jun 2025 - Feb 2026",
    details: [
      {
        type: "section",
        title: "Core Product Development",
      },
      {
        type: "item",
        content:
          "Developed and maintained multiple high-traffic Next.js (SSR) products, focusing on performance, SEO, and user experience.",
      },
      {
        type: "item",
        content:
          "Owned frontend development for a sports content platform, creating SEO-optimized pages and map-based visualizations to help users explore nationwide events and race timelines.",
      },
      {
        type: "item",
        content:
          "Improved internal admin systems for livestream operations by enhancing UI/UX and integrating real-time data services.",
      },
      {
        type: "item",
        content:
          "Implemented GA4 tracking across key platforms to improve analytics and user behavior insights.",
      },
      {
        type: "section",
        title: "SFOLIO — Athlete Ranking Platform",
      },
      {
        type: "item",
        content:
          "Independently designed and developed a fullstack athlete ranking platform with crawling, normalization, and ranking calculation pipelines for competition data.",
      },
      {
        type: "item",
        content:
          "Built backend services using NestJS and admin tools for managing events, athletes, and results.",
      },
      {
        type: "item",
        content:
          "Optimized performance with caching strategies, reducing database load and improving response time for a production system handling 500,000+ records and 15,000+ athlete profiles.",
      },
      {
        type: "section",
        title: "Additional Contributions",
      },
      {
        type: "item",
        content:
          "Supported live operations for large-scale sports events with a focus on livestream system execution.",
      },
      {
        type: "item",
        content:
          "Developed a Zalo Mini App for an Amazfit photobooth at the Techcombank HCMC International Marathon 2025, enabling participants to capture and instantly access photos on-site.",
      },
      {
        type: "item",
        content:
          "Contributed frontend development to partner platforms across the Vietnam sports ecosystem.",
      },
    ],
  },
];

export default function ExperienceSection() {
  const [openExperience, setOpenExperience] = useState<string | null>(null);
  const detailsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
  }, [openExperience]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    cards.forEach((card, index) => {
      const alignRight = index % 2 === 1;
      gsap.set(card, { x: alignRight ? 140 : -140, autoAlpha: 0 });
      gsap.to(card, {
        x: 0,
        autoAlpha: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 60%",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (!openExperience) return;

    const index = experiences.findIndex((item) => item.id === openExperience);
    const detailsEl = detailsRefs.current[index];
    if (!detailsEl) return;

    gsap.fromTo(
      detailsEl,
      { height: 0, opacity: 0, y: -10 },
      {
        height: "auto",
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power3.out",
        clearProps: "all",
      },
    );
  }, [openExperience]);

  const toggleExperience = (id: string) => {
    setOpenExperience((current) => (current === id ? null : id));
  };

  return (
    <section id="experience" className="relative h-auto py-12 lg:min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex rounded-lg border border-neutral-700 bg-neutral-950/70 px-5 py-2 text-xs text-neutral-400 uppercase shadow-sm">
            Work Experience
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Professional experience in fullstack and user-focused systems.
          </h2>
          <p className="text-lg leading-8 text-neutral-300">
            I work on scalable frontend and backend systems with a focus on
            performance, maintainability, and practical delivery. The work
            includes production-oriented applications, admin tools, and live
            operations support.
          </p>
        </div>

        <div className="relative mt-20 px-4 sm:px-0">
          <div className="absolute top-0 left-1/2 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />

          <div className="space-y-10">
            {experiences.map((experience, index) => {
              const alignRight = index % 2 === 1;
              const isOpen = openExperience === experience.id;

              return (
                <div
                  key={experience.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className={`relative md:grid md:grid-cols-2 md:items-center ${
                    alignRight ? "md:grid-flow-dense" : ""
                  }`}
                >
                  <span
                    className={`absolute top-1/2 hidden h-px -translate-y-1/2 bg-white/10 md:block ${
                      alignRight ? "left-1/2 w-28" : "right-1/2 w-28"
                    }`}
                  />
                  <span className="absolute top-1/2 left-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white/15 ring-2 ring-white/10 md:block" />

                  <div
                    className={`md:col-span-1 ${
                      alignRight ? "md:col-start-2 md:pl-10" : "md:pr-10"
                    }`}
                  >
                    <div
                      className={`relative rounded-lg border border-white/10 bg-neutral-950/90 p-6 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.8)] backdrop-blur-sm transition-all duration-200 ${
                        alignRight ? "md:ml-auto" : "md:mr-auto"
                      } max-w-xl ${isOpen ? "ring-1 ring-white/10" : ""}`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleExperience(experience.id)}
                        className="w-full cursor-pointer text-left"
                        aria-expanded={isOpen}
                      >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-white/10 bg-black/20 p-3">
                              {experience.logo ? (
                                <Image
                                  src={experience.logo}
                                  alt={`${experience.company} logo`}
                                  width={48}
                                  height={48}
                                  className="h-full w-full object-contain"
                                />
                              ) : (
                                <span className="text-sm font-semibold text-white">
                                  {experience.company
                                    .split(" ")
                                    .slice(0, 2)
                                    .map((part) => part[0])
                                    .join("")}
                                </span>
                              )}
                            </div>
                            <div>
                              <p className="text-xs text-neutral-400 uppercase">
                                {experience.title}
                              </p>
                              <h3 className="text-2xl font-semibold text-white">
                                {experience.company}
                              </h3>
                              <p className="text-sm text-neutral-400">
                                {experience.location}
                                {experience.date ? ` • ${experience.date}` : ""}
                              </p>
                            </div>
                          </div>

                          <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
                            <svg
                              viewBox="0 0 24 24"
                              className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </span>
                        </div>
                      </button>

                      {isOpen ? (
                        <div
                          ref={(el) => {
                            detailsRefs.current[index] = el;
                          }}
                          className="mt-6 space-y-3 overflow-hidden text-neutral-300"
                        >
                          {experience.details.map((detail, detailIndex) => (
                            <div key={`${experience.id}-${detailIndex}`}>
                              {detail.type === "section" ? (
                                <p className="text-sm font-semibold text-white">
                                  {detail.title}
                                </p>
                              ) : (
                                <p className="leading-7">• {detail.content}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
