# Tasks: Fix Broken and Inconsistent Links

## Link Audit and Inconsistency Cleanup

- [x] Update `src/messages/es.json` with canonical Spanish slugs from `src/lib/i18n/routes.ts`.
  - [x] Standardize "Playa del Carmen" link to `/es/transportacion-cancun-a-playa-del-carmen`.
  - [x] Standardize "Tulum" link to `/es/transporte-de-cancun-a-tulum`.
  - [x] Standardize "Akumal" link to `/es/transporte-cancun-akumal`.
  - [x] Standardize "Merida" link to `/es/traslado-de-cancun-a-merida`.
  - [x] Standardize "Taxi" link to `/es/taxi-aeropuerto-cancun`.
  - [x] Standardize "Destinos" link to `/es/destinos`.
  - [x] Standardize "Transporte Privado" link to `/es/transporte-privado-cancun`.
  - [x] Standardize "Transporte de Lujo" link to `/es/transporte-de-lujo-cancun`.
  - [x] Standardize "Transporte para Grupos" link to `/es/transporte-para-grupos-cancun`.
- [x] Optimize CTA link behaviors in `src/messages/en.json` and `src/messages/es.json`.
  - [x] Update same-page "Book now" links (Home, Services, Destinations) from `#` to `#booking-form`.
  - [x] Ensure cross-page CTA links (e.g., from Blog to Reservation) use the full path.
- [x] Update `src/data/site-config.ts` with correct external URLs.
  - [x] Update `SOCIAL_LINKS.tripadvisor` with the specific business listing URL: `https://www.tripadvisor.com/Attraction_Review-g150807-d10103757-Reviews-Cancun_Airport_Transportation-Cancun_Yucatan_Peninsula.html`.
  - [x] Validate `Caribbean Transfers` links match expected sub-brand configuration.

## Validation and Final Check

- [x] Execute a manual audit of all internal routes using the Astro dev server or by checking generated paths.
- [x] Verify that the language switcher correctly translates current paths (EN <-> ES).
- [x] Final visual check of the footer and destinations cards to ensure links lead to the intended pages/sections.
