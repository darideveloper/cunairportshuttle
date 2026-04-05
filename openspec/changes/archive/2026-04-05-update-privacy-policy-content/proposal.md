# Proposal: Update Privacy Policy Content

## Summary
Update the privacy policy content for both English and Spanish to reflect current service details (April 2026), including third-party payment processing (Openpay with 3D Secure, PayPal) and legal compliance with Mexico's Federal Law of Protection of Personal Data (ARCO rights). This update also includes an SEO fix to ensure keywords are correctly pulled from the translation files.

## Motivation
The current privacy policy is outdated and lacks specific information about payment security and ARCO rights procedures. Additionally, the current implementation of `LegalLayout` does not pass the `pageKey` to `BaseSEO`, resulting in missing keywords for legal pages.

## Strategy
1.  **MDX Updates**: Update `src/content/legal/en/privacy-policy.mdx` and `src/content/legal/es/privacy-policy.mdx`. Move the H1 title to frontmatter to avoid duplication with the `LegalLayout` header.
2.  **Metadata Synchronization**: Update frontmatter in MDX and corresponding JSON translation files (`src/messages/en.json`, `src/messages/es.json`) for consistent SEO.
3.  **SEO Implementation Fix**: Modify `src/layouts/LegalLayout.astro` to pass the `pageKey` as `currentPage` to the `BaseSEO` component, enabling automatic keyword resolution from i18n files.
4.  **Heading Consistency**: Use `##` (H2) for major legal sections as per the `privacy-page` specification.

## Scope
- Content updates for `/privacy` (English).
- Content updates for `/es/privacidad` (Spanish).
- SEO metadata updates and implementation fix for keywords.
