"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeInUp, heroTiming } from "@/lib/animations";
import { HeroContentData } from "@/types";

export function HeroContent({ data }: { data: HeroContentData }) {
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
      {/* Logo — samo tekstualna wordmark za sada, brief ne definira grafički logo */}
      <motion.div
        variants={fadeInUp(heroTiming.logo)}
        initial="hidden"
        animate="visible"
        className="mb-6 text-xs tracking-[0.35em] uppercase text-white/80"
      >
        Apartman Oliva
      </motion.div>

      <motion.h1
        variants={fadeInUp(heroTiming.title)}
        initial="hidden"
        animate="visible"
        className="font-display text-5xl leading-tight sm:text-6xl md:text-7xl"
      >
        {data.title}
      </motion.h1>

      <motion.p
        variants={fadeInUp(heroTiming.subtitle)}
        initial="hidden"
        animate="visible"
        className="mt-5 font-body text-base tracking-[0.2em] uppercase text-white/85 sm:text-lg"
      >
        {data.subtitle}
      </motion.p>

      <motion.div
        variants={fadeInUp(heroTiming.buttons)}
        initial="hidden"
        animate="visible"
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >
        <Button variant="primary">{data.primaryCta}</Button>
        <Button variant="secondary">{data.secondaryCta}</Button>
      </motion.div>
    </div>
  );
}
