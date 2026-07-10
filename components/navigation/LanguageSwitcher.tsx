"use client";

import { useState, useRef, useEffect } from "react";
import { GlobeIcon, ChevronDownIcon } from "@/components/icons/Icon";
import { LANGUAGES, Language } from "@/lib/navigation";

interface LanguageSwitcherProps {
  /** dark = tekst bijeli (Navbar prije scrolla); light = tekst taman (Navbar nakon scrolla, ili mobile overlay). */
  tone?: "dark" | "light";
  /** compact = samo kod ("HR"), koristi se u uskoj desktop navigaciji */
  variant?: "compact" | "expanded";
}

/**
 * VAŽNA NAPOMENA (arhitektura, ne implementacija prijevoda):
 * Ovo trenutno samo mijenja koji je jezik VIZUALNO označen kao aktivan.
 * Stvarni prijevod sadržaja stranice nije uključen u ovaj sprint jer
 * sadržaj još nije multijezičan — kad se to doda (npr. next-intl ili
 * ručni rječnik po sekciji), ovaj isti UI se spaja na taj sustav bez
 * potrebe za redizajnom.
 */
export function LanguageSwitcher({
  tone = "dark",
  variant = "compact",
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Language>(LANGUAGES[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const textColor = tone === "dark" ? "text-white/90" : "text-ink/80";

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Odaberi jezik"
        className={`flex items-center gap-1.5 text-sm tracking-wide transition-colors duration-300 ${textColor} hover:text-accent`}
      >
        <GlobeIcon size={16} />
        {variant === "expanded" ? selected.label : selected.code}
        <ChevronDownIcon
          size={14}
          className={`transition-transform duration-300 ease-elegant ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0 mt-3 min-w-[140px] overflow-hidden rounded-lg border border-ink/10 bg-white py-1 shadow-lg"
        >
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                role="option"
                aria-selected={lang.code === selected.code}
                onClick={() => {
                  setSelected(lang);
                  setIsOpen(false);
                }}
                className={`block w-full px-4 py-2 text-left text-sm transition-colors duration-200 hover:bg-neutral ${
                  lang.code === selected.code ? "text-accent" : "text-ink/80"
                }`}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
