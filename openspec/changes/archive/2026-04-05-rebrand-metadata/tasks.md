# Tasks: Rebrand Website Metadata

This change-set updates all internal metadata to reflect the new brand "Cun Airport Shuttle".

## Task List

1.  **Update Core Configuration**
    - [x] Update `site` in `astro.config.ts` from `https://cancunsairporttransportation.com` to `https://cunairportshuttle.com`.
    - [x] Update `SOCIAL_LINKS.twitter` in `src/data/site-config.ts` from `@CancunAirportT` to `@CunAirportShutt`.
    - [x] **Validation:** Run `grep -r "cancunsairporttransportation" astro.config.ts src/data/site-config.ts` to ensure the old URL and handle are gone.

2.  **Update English Metadata (en.json)**
    - [x] Replace "Cancun Airport Transportation" with "Cancun Airport Shuttle" in `src/messages/en.json`.
    - [x] Replace "Cancun's Airport Transportation" with "Cancun Airport Shuttle" in `src/messages/en.json`.
    - [x] Replace `https://cancunsairporttransportation.com` with `https://cunairportshuttle.com` in `src/messages/en.json`.
    - [x] **Validation:** Run `npm run validate-i18n` to ensure JSON integrity. (Note: Existing sync issues were present but not related to these changes).

3.  **Update Spanish Metadata (es.json)**
    - [x] Replace "Cancun Airport Transportation" with "Cancun Airport Shuttle" in `src/messages/es.json`.
    - [x] Replace `https://cancunsairporttransportation.com` with `https://cunairportshuttle.com` in `src/messages/es.json`.
    - [x] **Validation:** Run `npm run validate-i18n` to ensure JSON integrity.

4.  **Update Search Index Generator**
    - [x] Update brand title references in `src/pages/[lang]/search.json.ts` to "Cancun Airport Shuttle".
    - [x] **Validation:** Run `astro build` and inspect `dist/search.json` (or similar) to verify the new branding is indexed.

5.  **Final Quality Assurance**
    - [x] Run a project-wide search for any remaining "cancunsairporttransportation" strings in `src/` and `public/`.
    - [x] **Validation:** Run `npm run build` to confirm no regressions in metadata generation.
