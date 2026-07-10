import { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

type SectionBackground = "light" | "sand" | "white" | "image";

interface SectionProps {
  children: ReactNode;
  background?: SectionBackground;
  className?: string;
  /** Postavlja se na false za sekcije koje same upravljaju svojim Containerom (rijetko). */
  withContainer?: boolean;
  id?: string;
}

const backgroundClasses: Record<SectionBackground, string> = {
  light: "bg-background", // #FAF9F6 — zadano
  sand: "bg-neutral", // #EDE7DD — topla varijanta za izmjenu ritma
  white: "bg-white",
  // "image" ne postavlja pozadinsku boju — sekcija postaje pozicijski
  // kontekst (relative + overflow-hidden) za buduću pozadinsku sliku/video
  // koju će child komponenta ubaciti kao absolute inset-0 sloj.
  image: "relative overflow-hidden",
};

/**
 * Svaka buduća sekcija (O apartmanu, Galerija, Lokacija...) treba imati
 * identičan vertikalni ritam i izbor pozadine iz fiksnog seta — nikad
 * proizvoljnu boju ili proizvoljan padding.
 */
export function Section({
  children,
  background = "light",
  className = "",
  withContainer = true,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-32 ${backgroundClasses[background]} ${className}`}
    >
      {withContainer ? <Container>{children}</Container> : children}
    </section>
  );
}
