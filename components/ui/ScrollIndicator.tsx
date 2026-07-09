"use client";

import { motion } from "framer-motion";
import { fadeIn, heroTiming } from "@/lib/animations";

/**
 * Vrlo suzdržan indikator scrolla — tanka linija koja se lagano
 * produžuje i skraćuje. Bez skokova, bez ikonica sa strelicama koje
 * djeluju "turistički".
 */
export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      variants={fadeIn(heroTiming.scrollIndicator)}
      initial="hidden"
      animate="visible"
    >
      <span className="text-white/80 text-[11px] tracking-[0.25em] uppercase font-body">
        Scroll
      </span>
      <motion.div
        className="w-px h-10 bg-white/50 origin-top"
        animate={{ scaleY: [1, 0.4, 1] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
