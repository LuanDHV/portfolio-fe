"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    name: "ParaVibe",
    role: "Personalized music recommendation website",
    date: "Nov 2025 - Feb 2026",
    github: "https://github.com/LuanDHV/graduation-project",
    demo: "https://youtu.be/i4YZZiMbL00?si=weIWWeVhxhu1u-dn",
    image: "/imgs/paravibe.jpg",
    summary:
      "Fullstack music streaming platform with AI-based recommendations using audio and metadata embeddings (MERT, SBERT).",
    tags: ["Next.js", "NestJS", "FastAPI", "Python", "MySQL", "Docker"],
  },
  {
    name: "Riot Games Clone",
    role: "Fullstack web application",
    date: "Oct 2024 - May 2025",
    github: "https://github.com/LuanDHV/Riot-Games",
    demo: "https://youtu.be/7Vibs2z5HA4?si=TZHHwsGhI9F3Xt9_",
    image: "/imgs/riot.jpg",
    summary:
      "Replica of Riot Games platform with multi-game pages, responsive UI, and immersive product flows.",
    tags: [
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    name: "E-Learning Prep Clone",
    role: "Language learning platform",
    date: "Jun 2024 - Sep 2024",
    github: "https://github.com/LuanDHV/Prep-Clone-NextTS",
    demo: "https://youtu.be/q51vVldTYeE?si=GMiNXqsoRk_QAIpA",
    image: "/imgs/prep.jpg",
    summary:
      "Personalized learning flows and content management features for a web-based language learning experience.",
    tags: [
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    name: "E-Commerce Website",
    role: "Fullstack storefront",
    date: "Dec 2023 - Apr 2024",
    github: "https://github.com/LuanDHV/MERN-Stack-Project-Ecommerce",
    demo: "https://youtu.be/BX1nILdTlLg?si=LqjMDEPs9_mazskJ",
    image: "/imgs/ecommerce.jpg",
    summary:
      "Fullstack eCommerce solution with product management, order handling, and admin dashboard workflows.",
    tags: [
      "Tailwind CSS",
      "React.js",
      "Node.js",
      "Express.js",
      "Redux Toolkit",
      "MongoDB",
    ],
  },
];

export default function ProjectsSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    cards.forEach((card) => {
      const alignRight = card.dataset.alignRight === "true";
      gsap.set(card, { x: alignRight ? 140 : -140, autoAlpha: 0 });
      gsap.to(card, {
        x: 0,
        autoAlpha: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 40%",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" className="relative h-auto py-12 lg:min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex rounded-lg border border-neutral-700 bg-neutral-950/70 px-5 py-2 text-xs text-neutral-400 uppercase shadow-sm">
            Projects
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Personal projects and technical prototypes.
          </h2>
          <p className="text-lg leading-8 text-neutral-300">
            A collection of self-driven work built to showcase product thinking,
            engineering skills, and experimentation with modern web stacks.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute top-0 left-1/2 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />
          <div className="space-y-10">
            {projects.map((project, index) => {
              const alignRight = index % 2 === 1;
              return (
                <div
                  key={project.name}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  data-align-right={alignRight}
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
                  <span
                    className={`absolute top-1/2 hidden -translate-y-1/2 items-center gap-2 md:z-20 md:flex ${
                      alignRight ? "right-1/2 mr-8" : "left-1/2 ml-8"
                    }`}
                  >
                    {alignRight ? (
                      <>
                        <span className="rounded-lg border border-white/10 bg-neutral-950/95 px-3 py-1 text-xs text-neutral-300 uppercase">
                          {project.date}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="rounded-lg border border-white/10 bg-neutral-950/95 px-3 py-1 text-xs text-neutral-300 uppercase">
                          {project.date}
                        </span>
                      </>
                    )}
                  </span>

                  <div
                    className={`md:col-span-1 ${
                      alignRight ? "md:col-start-2 md:pl-10" : "md:pr-10"
                    }`}
                  >
                    <div
                      className={`relative rounded-lg border border-white/10 bg-neutral-950/90 p-6 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.8)] backdrop-blur-sm ${
                        alignRight ? "md:ml-auto" : "md:mr-auto"
                      } max-w-xl`}
                    >
                      {project.image ? (
                        <div className="relative mb-6 h-48 overflow-hidden rounded-lg bg-black/20">
                          <Image
                            src={project.image}
                            alt={`${project.name} screenshot`}
                            fill
                            sizes="(min-width: 1024px) 520px, 100vw"
                            loading={
                              project.name === "E-Learning Prep Clone"
                                ? "eager"
                                : "lazy"
                            }
                            className="object-cover"
                          />
                        </div>
                      ) : null}
                      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-white/10 via-transparent to-transparent" />
                      <h3 className="mt-5 text-3xl font-semibold text-white">
                        {project.name}
                      </h3>

                      <p className="mt-6 leading-7 text-neutral-300">
                        {project.summary}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-400 uppercase">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.github && project.github !== "#" ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white uppercase transition hover:bg-white/10"
                          >
                            <svg
                              width="16px"
                              height="16px"
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              fill="none"
                              stroke="#ffffff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            >
                              <path d="m5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0 1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3" />
                              <path d="m5.25 13.75c-1.5.5-3-.5-3.5-1" />
                            </svg>
                            Github
                          </a>
                        ) : null}
                        {project.demo && project.demo !== "#" ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white uppercase transition hover:bg-white/10"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5l7 7-7 7" />
                            </svg>
                            Demo
                          </a>
                        ) : null}
                      </div>
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
