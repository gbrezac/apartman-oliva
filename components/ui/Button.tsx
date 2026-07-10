"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons/Icon";

type Variant = "primary" | "secondary" | "outline" | "text";
type Tone = "dark" | "light";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  /** dark = koristi se na tamnoj/foto pozadini (npr. Hero); light = na bijeloj/sand sekciji. */
  tone?: Tone;
  children: ReactNode;
}

/**
 * VARIJANTE:
 *
 * primary / secondary — POSTOJEĆE, iz Heroa. Namjerno nedirane otkad su
 * napravljene (pixel-identične) kako se Hero ne bi vizualno pomaknuo.
 *   primary:   puna accent boja — glavna akcija
 *   secondary: outline na tamnoj pozadini — sekundarna akcija na Herou
 *
 * outline / text — NOVE, iz Sprint 02 Button System specifikacije.
 * Koriste se u svim budućim sekcijama (ne u Herou):
 *   outline: transparentna pozadina, tanki rub, na hover ispuna tirkiznom
 *            bojom — ovo Sprint 02 brief zove "Primary Button"
 *   text:    samo tekst + strelica koja se pomakne na hover — Sprint 02
 *            brief ga zove "Secondary Button"
 *
 * tone prop čini outline/text svjesnima pozadine na kojoj sjede (tamna
 * fotografija vs. svijetla/sand sekcija) bez potrebe za posebnim
 * komponentama za svaki slučaj.
 */
export function Button({
  variant = "primary",
  tone = "dark",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 text-sm tracking-wide font-body transition-colors duration-300 ease-elegant focus-visible:outline-2";

  const shapeByVariant: Record<Variant, string> = {
    primary: "px-8 py-3.5 rounded-full",
    secondary: "px-8 py-3.5 rounded-full",
    outline: "px-8 py-3.5 rounded-full border",
    text: "px-1 py-1",
  };

  const colorByVariant: Record<Variant, string> = {
    // --- postojeće, netaknuto ---
    primary: "bg-accent text-white hover:bg-accent/90",
    secondary: "border border-white/70 text-white hover:bg-white/10 backdrop-blur-[2px]",

    // --- novo, tone-svjesno ---
    outline:
      tone === "dark"
        ? "border-white/70 text-white hover:border-accent hover:bg-accent hover:text-white"
        : "border-ink/25 text-ink hover:border-accent hover:bg-accent hover:text-white",
    text:
      tone === "dark"
        ? "text-white hover:text-accent"
        : "text-ink hover:text-accent",
  };

  const isTextVariant = variant === "text";

  return (
    <button
      className={`group ${base} ${shapeByVariant[variant]} ${colorByVariant[variant]} ${className}`}
      {...props}
    >
      {children}
      {isTextVariant && (
        <ArrowRightIcon
          size={14}
          className="transition-transform duration-300 ease-elegant group-hover:translate-x-1"
        />
      )}
    </button>
  );
}
