export interface NavLink {
  label: string;
  href: string;
}

// Placeholderi (#) jer odgovarajuće sekcije još ne postoje na stranici.
// Kad se sekcija doda, samo se href ažurira ovdje na jednom mjestu.
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Apartman", href: "#apartman" },
  { label: "Galerija", href: "#galerija" },
  { label: "Doživite Osor", href: "#osor" },
  { label: "Lošinj", href: "#losinj" },
  { label: "Rezervacije", href: "#rezervacije" },
  { label: "Kontakt", href: "#kontakt" },
];

export interface Language {
  code: "HR" | "EN" | "DE" | "IT";
  label: string;
}

export const LANGUAGES: Language[] = [
  { code: "HR", label: "Hrvatski" },
  { code: "EN", label: "English" },
  { code: "DE", label: "Deutsch" },
  { code: "IT", label: "Italiano" },
];
