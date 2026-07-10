import { ElementType, ReactNode } from "react";

type Tone = "dark" | "light";

interface BaseProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  tone?: Tone;
}

const toneText: Record<Tone, string> = {
  dark: "text-ink",
  light: "text-white",
};

const toneMuted: Record<Tone, string> = {
  dark: "text-ink/70",
  light: "text-white/85",
};

/**
 * Malo, razmaknuto, uppercase obilježje iznad naslova (npr. "OSOR · OTOK LOŠINJ").
 * Isti stil koji Hero već koristi za wordmark/podnaslov — ovdje postaje
 * formalna, ponovno iskoristiva komponenta za sve buduće sekcije.
 */
export function Eyebrow({
  children,
  className = "",
  as: Tag = "p",
  tone = "dark",
}: BaseProps) {
  return (
    <Tag
      className={`text-xs tracking-[0.3em] uppercase font-body ${toneMuted[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Najveći naslov — rezerviran za Hero i najviše jednu po stranici. */
export function DisplayHeading({
  children,
  className = "",
  as: Tag = "h1",
  tone = "dark",
}: BaseProps) {
  return (
    <Tag
      className={`font-display text-5xl leading-tight sm:text-6xl md:text-7xl ${toneText[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Naslov sekcije (npr. "O apartmanu", "Galerija"). */
export function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
  tone = "dark",
}: BaseProps) {
  return (
    <Tag
      className={`font-display text-3xl leading-snug sm:text-4xl md:text-5xl ${toneText[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Manji podnaslov ispod SectionHeading, ili samostalan naglasak. */
export function Subheading({
  children,
  className = "",
  as: Tag = "h3",
  tone = "dark",
}: BaseProps) {
  return (
    <Tag
      className={`font-body text-lg tracking-wide md:text-xl ${toneMuted[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Standardni tekst pasusa. */
export function Paragraph({
  children,
  className = "",
  as: Tag = "p",
  tone = "dark",
}: BaseProps) {
  return (
    <Tag className={`font-body text-base leading-relaxed ${toneMuted[tone]} ${className}`}>
      {children}
    </Tag>
  );
}

/** Najsitniji tekst — oznake, meta-info, sitni print. */
export function Caption({
  children,
  className = "",
  as: Tag = "span",
  tone = "dark",
}: BaseProps) {
  return (
    <Tag
      className={`font-body text-xs uppercase tracking-wide ${toneMuted[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}
