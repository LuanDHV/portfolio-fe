"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  {
    id: "hero",
    label: "Hero",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 11.5L12 5l8 6.5" />
        <path d="M5.5 10v8.5h5V14h2v4.5h5V10" />
      </svg>
    ),
  },

  {
    id: "experience",
    label: "Experience",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="3.5" />
        <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 7h18v13H3V7Z" />
        <path d="M3 7l3-3h4l3 3" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: (
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function RightSidebarNav() {
  const [activeId, setActiveId] = useState("hero");
  const [musicOn, setMusicOn] = useState(true);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateActive = () => {
      const center = window.innerHeight / 2;
      const visibleSections = sections
        .map((section) => {
          const element = document.getElementById(section.id);
          if (!element) return null;
          const rect = element.getBoundingClientRect();
          return {
            id: section.id,
            distance: Math.abs(rect.top + rect.height / 2 - center),
          };
        })
        .filter(Boolean) as { id: string; distance: number }[];

      if (visibleSections.length > 0) {
        const nearest = visibleSections.reduce(
          (closest, current) =>
            current.distance < closest.distance ? current : closest,
          visibleSections[0],
        );
        setActiveId(nearest.id);
      }
    };

    const handleScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(() => {
        updateActive();
        frameRef.current = null;
      });
    };

    updateActive();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleMusicToggle = () => {
    const next = !musicOn;
    setMusicOn(next);
    window.dispatchEvent(
      new CustomEvent("backgroundMusicToggle", {
        detail: { isPlaying: next },
      }),
    );
  };

  return (
    <>
      <div className="fixed top-1/2 right-5 z-50 hidden -translate-y-1/2 lg:flex">
        <div className="relative flex items-center justify-center">
          <span className="absolute top-0 -left-6 h-6 w-6 rounded-full bg-white/10 blur-xl" />
          <span className="absolute bottom-0 -left-6 h-6 w-6 rounded-full bg-white/10 blur-xl" />
          <div className="relative flex flex-col items-center gap-10 px-3 py-4">
            {sections.map((section, index) => {
              const isActive = activeId === section.id;

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleClick(section.id)}
                  className="group relative flex cursor-pointer items-center justify-center"
                  aria-label={`Go to ${section.label}`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200 ${
                      isActive
                        ? "border border-white/20 bg-white/20 text-white shadow-[0_0_0_10px_rgba(255,255,255,0.08)]"
                        : "border border-white/10 bg-white/5 opacity-70 hover:scale-110 hover:bg-white/10 hover:opacity-100"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-semibold ${isActive ? "text-white" : "text-transparent"}`}
                    >
                      {section.icon}
                    </span>
                  </span>
                  {index < sections.length - 1 ? (
                    <span className="absolute top-full left-1/2 h-10 w-px -translate-x-1/2 bg-white/15" />
                  ) : null}
                  <span className="absolute right-full mr-3 hidden min-w-max rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs text-white opacity-0 shadow-xl transition duration-200 group-hover:block group-hover:opacity-100">
                    {section.label}
                  </span>
                </button>
              );
            })}
            <button
              type="button"
              onClick={handleMusicToggle}
              className={`group relative flex cursor-pointer items-center justify-center ${
                musicOn
                  ? "border border-white/20 bg-white/20 text-white shadow-[0_0_0_10px_rgba(255,255,255,0.08)]"
                  : "border border-white/10 bg-white/5 opacity-70 hover:scale-110 hover:bg-white/10 hover:opacity-100"
              } h-6 w-6 rounded-full transition-all duration-200`}
              aria-label={
                musicOn ? "Pause background music" : "Play background music"
              }
            >
              <span className="relative text-[10px] font-semibold text-white">
                {musicOn ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
        <div className="flex w-full items-center justify-between rounded-t-lg border-t border-white/10 bg-neutral-950/95 px-4 py-3 shadow-[0_-20px_80px_rgba(255,255,255,0.08)] backdrop-blur-xl">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => handleClick(section.id)}
                className={`relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 transition-all duration-200 ${
                  isActive
                    ? "bg-white/10 text-white shadow-[0_10px_30px_rgba(255,255,255,0.12)]"
                    : "bg-white/5 text-white/70 hover:scale-110 hover:bg-white/10"
                }`}
                aria-label={section.label}
              >
                {isActive ? (
                  <span className="absolute inset-0 rounded-full bg-white/10" />
                ) : null}
                <span className="relative text-[10px] font-semibold text-white uppercase">
                  {section.icon}
                </span>
              </button>
            );
          })}
          <button
            type="button"
            onClick={handleMusicToggle}
            className={`relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 transition-all duration-200 ${
              musicOn
                ? "bg-white/10 text-white shadow-[0_10px_30px_rgba(255,255,255,0.12)]"
                : "bg-white/5 text-white/70 hover:scale-110 hover:bg-white/10"
            }`}
            aria-label={
              musicOn ? "Pause background music" : "Play background music"
            }
          >
            {musicOn ? (
              <span className="absolute inset-0 rounded-full bg-white/10" />
            ) : null}
            <span className="relative text-[10px] font-semibold text-white uppercase">
              {musicOn ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
