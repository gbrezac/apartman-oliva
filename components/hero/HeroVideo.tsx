"use client";

import { useVideoOnceThenFreeze } from "@/hooks/useVideoOnceThenFreeze";

/**
 * Izvorni video je snimljen portretno (vertikalno). Umjesto da ga
 * rastežemo u landscape (što ga izobličuje), zadržavamo izvorni omjer
 * i koristimo object-cover preko punog viewporta — isti princip kao
 * kod editorijalnih/fashion hero sekcija koje rade s vertikalnim
 * snimkama na širokim ekranima.
 *
 * object-position: center malo pomaknut prema gore (35%) kako bi
 * horizont/krajolik ostao u kadru umjesto da ga izreže na pola.
 */
export function HeroVideo() {
  const { videoRef, hasEnded } = useVideoOnceThenFreeze();

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      <video
        ref={videoRef}
        className="h-full w-full object-cover object-[center_35%]"
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

      {/* Suptilan gradient overlay: osigurava čitljivost teksta preko videa
          i istovremeno ublažuje percepciju niže rezolucije izvornog snimka. */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/10 to-ink/50" />
    </div>
  );
}
