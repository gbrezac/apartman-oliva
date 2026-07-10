import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

/**
 * Najviši layout shell. Drži min-h-screen i osnovnu pozadinu, tako da
 * svaka stranica (trenutno samo Home, uskoro i eventualno druge) ima
 * konzistentan okvir bez ponavljanja istih klasa na svakoj page.tsx.
 */
export function PageWrapper({ children }: PageWrapperProps) {
  return <div className="flex min-h-screen flex-col bg-background">{children}</div>;
}
