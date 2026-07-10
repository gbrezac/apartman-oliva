"use client";

import { useEffect, useState } from "react";

/**
 * Sprint 02 spec: navigacija je nevidljiva na učitavanju, pojavljuje se
 * TEK nakon ~80px scrolla — i to odmah u svom finalnom stanju (bijela,
 * blur, sjena), bez međukoraka kroz transparentnost.
 */
const REVEAL_THRESHOLD = 80;

export function useScrollNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > REVEAL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isVisible };
}
