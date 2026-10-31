# SpillCave

## Om SpillCave

SpillCave er en nettside for spillinteresserte som ønsker å oppdage nye spill og finne informasjon om dem. Prosjektet er utviklet som en skoleoppgave med Next.js, TypeScript og CSS Modules.

Spillinformasjon er hentet fra RAWG API.

## Funksjonalitet

- Forside med 12 utvalgte spill
- Søke etter spill.
- Filtrere spill etter sjanger.
- Sortere spill etter rating, utgivelsesdato og navn.
- Bla mellom resultatsider med paginering.
- Se informasjon om hvert spill.
- Legge til og fjerne spill fra favoritter.

## Teknologier

- Next.js
- React
- TypeScript
- CSS Modules
- Zustand
- RAWG API

## Installasjon og kjøring

1. Klon prosjektet:

```bash
git clone https://github.com/Adrianbp123/nextjs-project.git
```

2. Gå inn i prosjektmappen:

```bash
cd nextjs-project
```

3. Installer avhengighetene:

```bash
npm install
```

4. Opprett en fil som heter .env.local i prosjektets rotmappe, og legg inn API-nøkkelen:

```env
RAWG_API_KEY=din_api_nøkkel
```

5. Start utviklingsserveren:

```bash
npm run dev
```

6. Åpne `http://localhost:3000` i nettleseren.

## API og konfigurasjon

SpillCave bruker RAWG API for å hente informasjon om spill. I prosjektet brukes det til å hente navn, bilder, rating, sjanger og beskrivelse.

API-kallene gjøres på serversiden i `lib/rawg.ts.` API-nøkkelen lagres i .env.local og leses gjennom miljøvariabelen RAWG_API_KEY.

## Kjente begrensninger

- søkeresultatene er avhengige av RAWG API og kan noen ganger vise lite relevante spill.
- For å begrense slike resultater filtreres spill uten Metacritic-score bort når sortering er aktivert. Dette kan gi bedre resultater, men enkelte spill kan fortsatt mangle.
- Favoritter lagres kun lokalt i nettleseren.
- Enkelte spill kan mangle bilde eller informasjon fra RAWG API.
