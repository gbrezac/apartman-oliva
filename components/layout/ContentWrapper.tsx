import { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * Uža širina od Containera (720px) — za tekstualni sadržaj (paragrafe,
 * dugi copy) gdje pun 1280px red teksta postaje preširok za ugodno čitanje.
 * Koristi se UNUTAR Containera, ne umjesto njega.
 */
export function ContentWrapper({ children, className = "" }: ContentWrapperProps) {
  return (
    <div className={`mx-auto w-full max-w-[720px] ${className}`}>{children}</div>
  );
}
