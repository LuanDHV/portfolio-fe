"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ExperienceDetail =
  | {
      type: "section";
      title: string;
    }
  | {
      type: "item";
      content: string;
    };

type Experience = {
  id: string;
  title: string;
  company: string;
  logo?: string;
  location: string;
  date: string;
  details: ExperienceDetail[];
};

const experiences: Experience[] = [
  {
    id: "a-connection",
    title: "Fullstack Developer",
    logo: "/logos/aconnection-logo.webp",
    company: "A-connection Group",
    location: "Ho Chi Minh, Vietnam",
    date: "Apr 2026 - Present",
    details: [
      {
        type: "item",
        content:
          "Rebuilt a 10+ year legacy PHP website as the sole developer into a modern commercial property marketplace, architecting a multi-app system with Next.js SSR, NestJS API, Refine CMS, and a shared contracts package.",
      },
      {
        type: "item",
        content:
          "Achieved near-perfect Google Lighthouse scores (99 Performance, 100 SEO) by migrating to Next.js SSR and integrating Cloudinary CDN, eliminating image load latencies.",
      },
      {
        type: "item",
        content:
          "Drove an 88% boost in web traffic within the first 30 days of deployment, increasing monthly pageviews from 5,000+ to 10,000+ through optimized server-side rendering, Zustand, and TanStack Query state management.",
      },
      {
        type: "item",
        content:
          "Engineered a new production database from scratch, capturing 1,300+ property listings, 200+ tenant requests, and active user registrations within 1 month post-launch while enforcing validation with Zod.",
      },
      {
        type: "item",
        content:
          "Implemented core marketplace workflows for listing moderation, tenant-landlord matching, live search, Excel exports, and an operations dashboard integrating GA4/GTM analytics with internal DB tracking.",
      },
      {
        type: "item",
        content:
          "Deployed Dockerized services across dev, staging, and production on a self-managed VPS using GitHub Actions, GHCR, and Coolify, with daily automated DB backups and health checks.",
      },
    ],
  },
  {
    id: "enjoysport",
    title: "Fullstack Developer",
    company: "EnjoySport",
    logo: "/logos/enjoysport-logo.svg",
    location: "Ho Chi Minh, Vietnam",
    date: "Jun 2025 - Feb 2026",
    details: [
      {
        type: "item",
        content:
          "Developed and maintained high-traffic Next.js SSR products for sports content, live events, and internal operations, leveraging Redux Toolkit and RTK Query for global state and data synchronization.",
      },
      {
        type: "item",
        content:
          "Built SEO-optimized pages and map-based visualizations for nationwide events and race timelines.",
      },
      {
        type: "item",
        content:
          "Improved livestream admin systems by enhancing UI/UX, integrating real-time data services, and implementing GA4 tracking.",
      },
      {
        type: "item",
        content:
          "Developed a high-concurrency Zalo Mini App for the Amazfit photobooth at Techcombank HCMC International Marathon 2025 (23,000+ participants), ensuring instant, zero-downtime photo access during peak finishes.",
      },
      {
        type: "item",
        content:
          "Independently built a fullstack athlete ranking platform handling 500,000+ records and 15,000+ athlete profiles with NestJS, custom data crawling and normalization pipelines, Redis caching, and admin tools.",
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
            One year of production fullstack work across marketplace and sports platforms.
          </h2>
          <p className="text-lg leading-8 text-neutral-300">
            My experience spans SEO-focused Next.js systems, analytics
            pipelines, scalable backend services, and cloud deployment
            workflows for live production teams.
          </p>
        </div>

        <div className="relative mt-20">
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
                        <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:justify-between">
                          <div className="flex min-w-0 items-center gap-4">
                            <div className="relative h-14 w-14 overflow-hidden rounded-lg border border-white/10 bg-black/20 p-3">
                              {experience.logo ? (
                                <Image
                                  src={experience.logo}
                                  alt={`${experience.company} logo`}
                                  fill
                                  sizes="56px"
                                  className="object-contain"
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
                            <div className="min-w-0 flex-1">
                              <p className="text-[11px] text-neutral-400 uppercase sm:text-xs">
                                {experience.title}
                              </p>
                              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                                {experience.company}
                              </h3>
                              <p className="text-[13px] text-neutral-400 sm:text-sm">
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
