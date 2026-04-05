# Tasks: Update Privacy Policy Content

## 1. Preparation & Setup
- [x] 1.1 Read current Privacy Policy content and metadata in `src/content/legal/en/privacy-policy.mdx`, `src/content/legal/es/privacy-policy.mdx`, `src/messages/en.json`, and `src/messages/es.json`.
- [x] 1.2 Identify specific lines for replacement in all affected files.

## 2. Implementation
- [x] 2.1 **Fix SEO Metadata Resolution in LegalLayout**
    - File: `src/layouts/LegalLayout.astro`
    - Update `BaseSEO` component call to include `currentPage={pageKey}`.
    - *Validation*: Verify `LegalLayout.astro` changes via manual inspection or build.
- [x] 2.2 **Update English Privacy Content**
    - File: `src/content/legal/en/privacy-policy.mdx`
    - Update frontmatter `title` and `description`.
    - Replace body content with the April 2026 update (Sections 1-7).
    - Ensure `##` (H2) is used for section headers and NO `#` (H1) is in the body.
- [x] 2.3 **Update Spanish Privacy Content**
    - File: `src/content/legal/es/privacy-policy.mdx`
    - Update frontmatter `title` and `description`.
    - Replace body content with the Abril 2026 update (Secciones 1-7).
    - Ensure `##` (H2) is used for section headers and NO `#` (H1) is in the body.
- [x] 2.4 **Synchronize JSON Translations (EN)**
    - File: `src/messages/en.json`
    - Update `pages.privacy.title`, `pages.privacy.description`, and `pages.privacy.keywords`.
- [x] 2.5 **Synchronize JSON Translations (ES)**
    - File: `src/messages/es.json`
    - Update `pages.privacy.title`, `pages.privacy.description`, and `pages.privacy.keywords`.

## 3. Validation
- [x] 3.1 Run `npm run check` or `astro check` (if available) to verify MDX and Astro syntax.
- [x] 3.2 Run `openspec validate update-privacy-policy-content --strict`.
- [x] 3.3 Verify that `BaseSEO` correctly receives `currentPage` in `LegalLayout.astro`.
- [x] 3.4 Visually confirm (if local preview is possible) that H1 is not duplicated and headings are hierarchical.
