# Patryk Kulpa — Portfolio

Jednostronicowe portfolio (React + TypeScript + Vite, CSS Modules). Monochromatyczny,
edytorialny styl z dużą typografią i sporą ilością ruchu: własny kursor, pasek postępu,
marquee, animacje przy scrollu, pełnoekranowe menu i żywy zegar Bydgoszczy.

## Wymagania

- Node.js 18+ (zalecane 20+)

## Uruchomienie

```bash
npm install      # instalacja zależności
npm run dev      # serwer deweloperski (http://localhost:5173)
npm run build    # produkcyjny build do dist/
npm run preview  # podgląd builda produkcyjnego
```

## Struktura

```
portfolio/
├─ index.html              # punkt wejścia + fonty Google (Bricolage Grotesque, Space Mono)
├─ vite.config.ts
├─ tsconfig.json
└─ src/
   ├─ main.tsx             # bootstrap Reacta
   ├─ App.tsx              # kompozycja sekcji + globalne hooki
   ├─ index.css            # reset, zmienne motywu, @keyframes, klasa .reveal
   ├─ data/
   │  └─ content.ts        # CAŁA treść: projekty, doświadczenie, stack, kontakt
   ├─ hooks/
   │  ├─ useCustomCursor.ts   # podążający kursor (wyłączany na dotyku)
   │  ├─ useScrollProgress.ts # pasek postępu scrolla
   │  ├─ useReveal.ts         # IntersectionObserver dla .reveal
   │  └─ useClock.ts          # zegar Europe/Warsaw
   └─ components/
      ├─ Cursor / ProgressBar
      ├─ Nav / Menu          # nawigacja + pełnoekranowe menu burger
      ├─ Hero / Marquee
      ├─ Projects            # lista z podglądem przy hover
      ├─ Experience          # timeline CV + STACK / INFRA / CERTYFIKATY
      └─ Contact             # kontakt + czarny pasek z nazwiskiem
```

## Edycja treści

Większość zmian (projekty, doświadczenie, umiejętności, dane kontaktowe) robisz w
**`src/data/content.ts`** — komponenty mapują się po tych tablicach.

## Motyw

Kolory sterowane są zmiennymi CSS w `:root` (`src/index.css`):
`--bg`, `--fg`, `--muted`, `--line`, `--accent`. Zmień `--accent`, by przefarbować akcenty
w całej stronie. Stopka ma własny, ciemny motyw (`.band`).

## Dostępność / ruch

Przy `prefers-reduced-motion: reduce` animacje i scroll-reveal są wyłączane automatycznie
(patrz `src/index.css`).
