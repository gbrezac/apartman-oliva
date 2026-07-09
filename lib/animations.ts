import { Variants } from "framer-motion";

/**
 * Animacijski tokeni za Hero sekvencu.
 *
 * Brief definira strogi redoslijed i trajanja:
 *   video krece odmah -> 0.8s -> logo (0.4s) -> title (0.4s)
 *   -> subtitle (0.4s) -> buttons (0.4s) -> scroll indicator
 *
 * Sve zivi ovdje, na jednom mjestu, kako bi promjena jednog broja
 * (npr. pomak s 0.8s na 1.0s) ne zahtijevala diranje komponenti.
 */

const EASE_ELEGANT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const STEP = 0.4; // trajanje svake pojedine animacije
const INITIAL_DELAY = 0.8; // odgoda prije prvog elementa (logo)

export const heroTiming = {
  logo: INITIAL_DELAY,
  title: INITIAL_DELAY + STEP,
  subtitle: INITIAL_DELAY + STEP * 2,
  buttons: INITIAL_DELAY + STEP * 3,
  scrollIndicator: INITIAL_DELAY + STEP * 4,
  duration: STEP,
};

// Suptilan fade + vrlo blagi pomak prema gore. Bez bouncea, bez scale-a.
export function fadeInUp(delay: number): Variants {
  return {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: heroTiming.duration, delay, ease: EASE_ELEGANT },
    },
  };
}

export const fadeIn = (delay: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: heroTiming.duration, delay, ease: EASE_ELEGANT },
  },
});

// Navbar prijelaz transparent -> bijelo (scroll-driven, ne stagger)
export const navTransition = {
  duration: 0.3,
  ease: EASE_ELEGANT,
};
