"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Video se reproducira TOČNO jednom, bez loopa, bez crnog ekrana na kraju.
 *
 * Zašto ovo treba posebnu logiku umjesto samo <video autoPlay>:
 * - Neki browseri (uglavnom mobilni Safari) znaju "trznuti" natrag na prvi
 *   frame ili kratko pokazati prazan kadar oko trenutka kad video završi.
 * - Eksplicitno pauziramo tik prije stvarnog kraja (duration - EPSILON) čime
 *   jamčimo da zadnji prikazani frame ostaje net, bez ikakve tranzicije.
 * - Ako nešto (npr. buduća promjena koda) pokuša ponovno pokrenuti video
 *   nakon što je već odigran, hook to eksplicitno sprječava (hasPlayedOnce).
 */
export function useVideoOnceThenFreeze() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasEnded, setHasEnded] = useState(false);
  const hasPlayedOnce = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const EPSILON = 0.04; // ~1 frame na 30fps, sprječava mikro-loop/flash

    const handleTimeUpdate = () => {
      if (!video.duration || hasPlayedOnce.current) return;
      if (video.currentTime >= video.duration - EPSILON) {
        video.pause();
        hasPlayedOnce.current = true;
        setHasEnded(true);
      }
    };

    const handleEnded = () => {
      // Sigurnosna mreža: ako timeupdate ne stigne prije "ended" eventa,
      // svejedno eksplicitno zaustavljamo i osiguravamo da se ne loopa.
      video.pause();
      hasPlayedOnce.current = true;
      setHasEnded(true);
    };

    // Autoplay preko promisea — potrebno na iOS Safariju gdje autoPlay
    // atribut sam po sebi ponekad ne pokrene reprodukciju bez korisničke geste.
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blokiran (rijetko, uz muted+playsInline) — ostaje na posteru.
      });
    }

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return { videoRef, hasEnded };
}
