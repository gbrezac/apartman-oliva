"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

/**
 * Primary: puna accent boja (#3EB8C7) — za glavnu akciju (rezervacija).
 * Secondary: outline na svijetloj pozadini videa — za sekundarnu akciju
 * (istraživanje), kako ne bi konkurirala primarnom CTA na Herou.
 *
 * NAPOMENA: "Provjeri dostupnost" je za sada vizualni placeholder bez
 * definirane destinacije — dogovoreno je da se to definira u sljedećoj fazi.
 */
export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 text-sm tracking-wide font-body rounded-full transition-colors duration-300 ease-elegant focus-visible:outline-2";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent/90",
    secondary:
      "border border-white/70 text-white hover:bg-white/10 backdrop-blur-[2px]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
