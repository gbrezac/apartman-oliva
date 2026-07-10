"use client";

import { useVideoOnceThenFreeze } from "@/hooks/useVideoOnceThenFreeze";

/**
 * Izvorni video je snimljen portretno (vertikalno) — cijeli kadar
 * (prozor + ruka koja ga otvara) mora ostati vidljiv, pa se NE smije
 * rezati preko object-cover na širokim ekranima.
 *
 * Rješenje: video ide na object-contain (prikazuje se cijeli, netaknut
 * kadar), a prostor koji ostane prazan sa strane (na širokim ekranima)
 * popunjen je zamućenom, uvećanom verzijom istog kadra — isti princip
 * koji npr. Apple Music koristi za album art u širem prozoru. Time
 * nema praznih traka niti izrezanog sadržaja.
 */
export function HeroVideo() {
  const { videoRef, hasEnded } = useVideoOnceThenFreeze();

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      {/* Pozadinski sloj: zamućena, uvećana statična slika istog kadra —
          čisto dekorativna, ne smije odvlačiti pažnju od glavnog videa. */}
      <div
        className="absolute inset-0 scale-110 bg-ink bg-cover bg-center blur-2xl brightness-90"
        style={{ backgroundImage: "url(/video/hero-poster.jpg)" }}
        aria-hidden="true"
      />

      {/* Glavni video: cijeli kadar vidljiv, bez rezanja */}
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

      {/* Suptilan gradient overlay: osigurava čitljivost teksta preko videa
          i istovremeno ublažuje percepciju niže rezolucije izvornog snimka. */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/10 to-ink/50" />
    </div>
  );
}
