"use client";

import { motion } from "framer-motion";
import { useScrollNav } from "@/components/navigation/useScrollNav";
import { navTransition } from "@/lib/animations";

/**
 * Navigacija se ne prikazuje na učitavanju stranice (opacity 0 + pointer-events
 * none dok se ne scrolla), zatim postaje sticky i transparentna, pa nakon
 * SOLID_THRESHOLD-a prelazi u bijelu pozadinu s tamnim tekstom.
 *
 * Linkovi su za sada placeholderi — stranica trenutno ima samo Hero sekciju
 * (dogovoreno), pa nema stvarnih #anchor meta na koje bi upućivali.
 */
export function Navbar() {
  const { isVisible, isSolid } = useScrollNav();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -8,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={navTransition}
    >
      <motion.div
        className="flex items-center justify-between px-6 py-5 md:px-12"
        animate={{
          backgroundColor: isSolid ? "#FAF9F6" : "rgba(255,255,255,0)",
          boxShadow: isSolid ? "0 1px 0 rgba(43,43,43,0.06)" : "none",
        }}
        transition={navTransition}
      >
        <span
          className={`font-display text-lg tracking-wide transition-colors duration-300 ${
            isSolid ? "text-ink" : "text-white"
          }`}
        >
          Apartman Oliva
        </span>

        <nav
          className={`hidden gap-10 font-body text-sm tracking-wide sm:flex transition-colors duration-300 ${
            isSolid ? "text-ink/80" : "text-white/90"
          }`}
        >
          <span>Apartman</span>
          <span>Lokacija</span>
          <span>Kontakt</span>
        </nav>
      </motion.div>
    </motion.header>
  );
}
