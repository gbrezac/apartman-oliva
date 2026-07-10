"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollNav } from "@/components/navigation/useScrollNav";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { MenuIcon } from "@/components/icons/Icon";
import { NAV_LINKS } from "@/lib/navigation";

const EASE_ELEGANT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Skriva se dok korisnik ne scrolla ~80px, zatim se pojavljuje VEĆ u
 * finalnom stanju: bijela pozadina, suptilna sjena, blur, visina ~80px,
 * sticky. Nema međukoraka kroz transparentnost (za razliku od Hero MVP
 * verzije prije ovog sprinta).
 */
export function Navbar() {
  const { isVisible } = useScrollNav();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 border-b border-ink/5 bg-background/90 shadow-[0_1px_0_rgba(43,43,43,0.06)] backdrop-blur-md"
        initial={{ opacity: 0, y: -12 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -12,
          pointerEvents: isVisible ? "auto" : "none",
        }}
        transition={{ duration: 0.5, ease: EASE_ELEGANT }}
      >
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 md:px-12">
          <span className="font-display text-lg tracking-wide text-ink">
            Apartman Oliva
          </span>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 font-body text-sm tracking-wide text-ink/80 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-300 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <LanguageSwitcher tone="light" />
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Otvori izbornik"
            className="text-ink transition-colors duration-300 hover:text-accent lg:hidden"
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </motion.header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
