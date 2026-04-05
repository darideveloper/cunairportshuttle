# Design: Metadata Rebranding Strategy

## Context
The project uses a mix of static configuration files and i18n JSON files to drive its metadata. Some metadata is hardcoded in `astro.config.ts`, while most SEO-related strings are translated in `src/messages/`.

## Architecture
- **Global Config:** `astro.config.ts` and `src/data/site-config.ts` act as the source of truth for base URLs and social handles.
- **I18n Metadata:** Each page has its own `title`, `description`, and `keywords` in the `en.json` and `es.json` files.
- **SEO Component:** `src/components/utils/base/BaseSEO.astro` consumes these strings to generate HTML tags.

## Strategy
1.  **Update Core Config:** Update the `site` URL and Twitter handle to reflect the new brand.
2.  **Bulk Metadata Update:** Systematically update all `title`, `description`, and `keywords` in the translation files. 
    - Replace "Cancun Airport Transportation" with "Cancun Airport Shuttle" (to match `SITE_TITLE`).
    - Replace old brand URLs with the new `https://cunairportshuttle.com`.
3.  **Search Index Update:** Ensure the `search.json.ts` generator uses the new brand name for indexed pages.

## Trade-offs
- **Direct Replacement:** Using simple string replacement is faster but requires careful verification to avoid breaking non-branding text.
- **URL consistency:** The new brand URL must be consistent across all metadata types to maintain SEO authority.
