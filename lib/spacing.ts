/**
 * Spacing sustav — 8px grid.
 *
 * Tailwind-ova zadana skala je već bazirana na 4px (1 unit = 0.25rem = 4px),
 * pa parni Tailwind brojevi odgovaraju našem 8px gridu:
 *
 *   Tailwind unit → px  → koristi se za
 *   2             → 8   → xs   (mikro-razmaci, ikone/tekst)
 *   4             → 16  → sm   (razmak unutar komponente)
 *   6             → 24  → md   (razmak između srodnih elemenata)
 *   8             → 32  → lg   (razmak između blokova)
 *   12            → 48  → xl   (odvajanje podsekcija)
 *   16            → 64  → 2xl  (vertikalni ritam sekcije, mobile)
 *   20            → 80  → 3xl  (vertikalni ritam sekcije, desktop)
 *   24            → 96  → 4xl  (velike pauze između sekcija)
 *   32            → 128 → 5xl  (rijetko, hero-scale razmaci)
 *
 * Pravilo: nikad se ne koriste "random" vrijednosti (npr. p-5, p-7, mt-[13px]).
 * Ako neka komponenta treba razmak koji nije na ovoj listi, prvo se pitamo
 * je li stvarno potreban ili se uklapa u postojeći korak.
 */
export const SPACING = {
  xs: "2", // 8px
  sm: "4", // 16px
  md: "6", // 24px
  lg: "8", // 32px
  xl: "12", // 48px
  "2xl": "16", // 64px
  "3xl": "20", // 80px
  "4xl": "24", // 96px
  "5xl": "32", // 128px
} as const;
