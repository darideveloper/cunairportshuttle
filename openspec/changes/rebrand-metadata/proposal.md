# Proposal: Rebrand Website Metadata

This proposal outlines the necessary changes to update the website's internal metadata from the old brand **"Cancun's Airport Transportation"** (and its variations) to the new brand **"Cun Airport Shuttle"**.

## Problem
The website has been rebranded, but internal metadata—including HTML meta tags, Open Graph properties, Twitter cards, and JSON-LD schemas—still contains references to the old brand name and its associated URLs and social handles. This inconsistency affects SEO and brand integrity.

## Scope
The changes are strictly limited to internal metadata (data not directly visible as primary page content), specifically:
- `astro.config.ts`: Update the `site` URL.
- `src/data/site-config.ts`: Update social handles and business names used in schemas.
- `src/messages/en.json` & `src/messages/es.json`: Update `title`, `description`, and `keywords` fields across all pages.
- `src/pages/[lang]/search.json.ts`: Update brand names in the search index metadata.

## Out of Scope
- Updates to visible UI text (buttons, headings, body text) unless they are part of a metadata-driven component (like a meta description generated from a translation key).
- Logo or asset changes.

## Relationships
- Follows the rebranding initiated in previous phases but focuses exclusively on the metadata layer.
