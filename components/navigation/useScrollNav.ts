"use client";

import { useEffect, useState } from "react";

/**
 * Prati scroll poziciju za dvije odluke navigacije:
 * 1. isVisible — navigacija se uopće ne prikazuje dok korisnik ne krene scrollati
 * 2. isSolid — nakon praga (SOLID_THRESHOLD) prelazi iz transparentne u bijelu
 *
 * Izdvojeno u hook jer scroll-logika nije specifična samo za Navbar —
 * po istom principu bi se mogla iskoristiti i za druge scroll-driven
 * elemente u budućim sekcijama.
 */
const REVEAL_THRESHOLD = 8; // px — čim korisnik krene scrollati, navigacija se pojavljuje
const SOLID_THRESHOLD = 480; // px — otprilike nakon prve trećine Hero visine

export function useScrollNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > REVEAL_THRESHOLD);
      setIsSolid(scrollY > SOLID_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isVisible, isSolid };
}
