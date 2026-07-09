# Apartman Oliva — Hero faza

## Pokretanje

```bash
npm install
npm run dev
```

Otvori `http://localhost:3000`.

## Što je uključeno u ovoj fazi

- Navigacija (skrivena do prvog scrolla, sticky, transparent → bijela)
- Hero sekcija: video (4s, bez loopa, zamrzava se na zadnjem kadru), naslov, podnaslov, dva CTA gumba, scroll indikator
- Sve animacije prema definiranom timingu iz brief-a (0.8s + 4×0.4s kaskadno)

## Napomene / pretpostavke koje treba potvrditi

1. **Video je izvorno portretno snimljen** (vertikalni mobitel-snimak). Uvećan je i prikazan preko `object-fit: cover` na punom viewportu — to znači da se na širokim desktop ekranima vidi uglavnom centralni, vertikalni isječak kadra, ne cijela širina originalne scene. Ovo je uobičajena tehnika za vertikalne snimke u wide hero sekcijama, ali vrijedi pogledati uživo i potvrditi da odgovara viziji.
2. **Logo** — brief spominje "Logo fade in" animaciju, ali nije priložen grafički logo. Za sada je to tekstualna wordmark ("Apartman Oliva") u gornjem dijelu Hero-a. Kad postoji pravi logo (SVG/PNG), lako se zamjenjuje u `HeroContent.tsx`.
3. **CTA gumbi** — "Provjeri dostupnost" trenutno nema definiranu destinaciju (dogovoreno da se rješava kasnije). Kad odlučite, dodaje se `href` ili `onClick` u `Hero.tsx`.
4. **Navigacijski linkovi** ("Apartman", "Lokacija", "Kontakt") su vizualni placeholderi jer te sekcije još ne postoje na stranici.

## Struktura

Vidi objašnjenje arhitekture u razgovoru — sažeto: `components/hero` (video + tekst logika odvojeni), `components/navigation` (scroll-state izdvojen u hook), `components/ui` (reusable Button/ScrollIndicator), `hooks/useVideoOnceThenFreeze` (video-once-freeze logika, reusable), `lib/animations.ts` (svi timing tokeni na jednom mjestu).

## Performanse

- Video je obrezan na 4s i kodiran u H.264 (mp4, ~1.2MB) + VP9 (webm, ~0.55MB) — browser bira manji/kompatibilniji format.
- Fontovi se učitavaju preko `next/font/google` (self-hosted, bez layout shifta).
- Izvan Hero sekcije trenutno nema ničega za lazy-load — to postaje relevantno kad se dodaju sljedeće sekcije.
