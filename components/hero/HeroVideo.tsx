"use client";

import { useVideoOnceThenFreeze } from "@/hooks/useVideoOnceThenFreeze";

export function HeroVideo() {
  const { videoRef, hasEnded } = useVideoOnceThenFreeze();

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      <div
        className="absolute inset-0 scale-110 bg-ink bg-cover bg-center blur-2xl brightness-90"
        style={{ backgroundImage: "url(/video/hero-poster.jpg)" }}
        aria-hidden="true"
      />

      <video
        ref={videoRef}
        className="relative h-full w-full object-contain"
        muted
        playsInline
        preload="auto"
        poster="/video/hero-poster.jpg"
        aria-hidden="true"
        data-ended={hasEnded}
      >
        <source src="/video/hero-4s.webm" type="video/webm" />
        <source src="/video/hero-4s.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/10 to-ink/50" />
    </div>
  );
}