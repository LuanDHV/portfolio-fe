"use client";

import { useEffect, useMemo, useState } from "react";

export default function BackgroundMusic() {
  const YOUTUBE_ID = "9LwgHhqTAOM";
  const [isPlaying, setIsPlaying] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.localStorage.getItem("bgMusicOn") !== "0";
  });

  const src = useMemo(() => {
    const params = new URLSearchParams({
      autoplay: isPlaying ? "1" : "0",
      mute: "0",
      loop: "1",
      playlist: YOUTUBE_ID,
      controls: "0",
      modestbranding: "1",
      rel: "0",
      iv_load_policy: "3",
    });

    return `https://www.youtube.com/embed/${YOUTUBE_ID}?${params.toString()}`;
  }, [isPlaying]);

  useEffect(() => {
    const handleToggle = (event: Event) => {
      const detail = (event as CustomEvent<{ isPlaying: boolean }>).detail;
      if (detail?.isPlaying !== undefined) {
        setIsPlaying(detail.isPlaying);
      }
    };

    window.addEventListener(
      "backgroundMusicToggle",
      handleToggle as EventListener,
    );
    return () => {
      window.removeEventListener(
        "backgroundMusicToggle",
        handleToggle as EventListener,
      );
    };
  }, []);

  useEffect(() => {
    window.localStorage.setItem("bgMusicOn", isPlaying ? "1" : "0");
  }, [isPlaying]);

  return (
    <iframe
      title="Background music"
      src={src}
      className="pointer-events-none h-0 w-0 opacity-0"
      allow="autoplay; encrypted-media"
    />
  );
}
