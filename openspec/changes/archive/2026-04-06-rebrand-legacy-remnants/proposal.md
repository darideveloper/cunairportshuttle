# Proposal: Rebrand Legacy Remnants

Update remaining instances of the old branding ("Cancun Airport Transportation") in translation files and legal content to align with "Cancun Airport Shuttle", while preserving the legal brand "Caribbean Transfers".

## Problem
While a major rebranding effort has been completed, several legacy strings from the old brand ("Cancun Airport Transportation") persist in the Spanish translation file and legal MDX documents. However, the legal brand "Caribbean Transfers" must be preserved in all legal contexts.

## Solution
Perform a surgical update of the identified legacy strings:
1.  Update "Cancun Airport Transportation" to "Cancun Airport Shuttle" in `src/messages/es.json`.
2.  Update "Cancun Airport Transportation" to "Cancun Airport Shuttle" in `src/content/legal/es/terms-and-conditions.mdx`.
3.  Ensure "Caribbean Transfers" is correctly maintained in all legal documents while standardizing other brand-related text.

## Scope
-   `src/messages/es.json`
-   `src/content/legal/es/terms-and-conditions.mdx`

## Out of Scope
-   Changes to "Caribbean Transfers" in legal documents (preserved as the legal entity).
-   Changes to `src/data/site-config.ts` (as requested).
-   System-wide replacement of "Cancun Airport Shuttle" with "Cun Airport Shuttle".
