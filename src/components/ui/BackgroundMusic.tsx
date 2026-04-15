"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function BackgroundMusic() {
  const YOUTUBE_ID = "9LwgHhqTAOM";
  const [isPlaying, setIsPlaying] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const src = useMemo(() => {
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "0",
      loop: "1",
      playlist: YOUTUBE_ID,
      controls: "0",
      modestbranding: "1",
      rel: "0",
      iv_load_policy: "3",
      enablejsapi: "1",
    });

    return `https://www.youtube.com/embed/${YOUTUBE_ID}?${params.toString()}`;
  }, []);

  const postPlayerCommand = useCallback(
    (func: string, args: unknown[] = []) => {
      if (!playerReady || !iframeRef.current?.contentWindow) return;

      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func,
          args,
        }),
        "*",
      );
    },
    [playerReady],
  );

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
    if (!playerReady) return;
    postPlayerCommand(isPlaying ? "playVideo" : "pauseVideo");
  }, [isPlaying, playerReady, postPlayerCommand]);

  return (
    <iframe
      ref={iframeRef}
      title="Background music"
      src={src}
      className="pointer-events-none h-0 w-0 opacity-0"
      allow="autoplay; encrypted-media"
      onLoad={() => setPlayerReady(true)}
    />
  );
}
