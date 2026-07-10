import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Vodoravno centriranje + max-width od 1280px, s velikim horizontalnim
 * paddingom koji raste na većim ekranima. Koristi se unutar svake Section
 * komponente — sadržaj nikad ne dodiruje rubove ekrana.
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-6 md:px-12 ${className}`}>
      {children}
    </div>
  );
}
