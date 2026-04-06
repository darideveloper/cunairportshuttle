# Design: Rebrand Legacy Remnants

This design covers the final cleanup of legacy brand names that were missed in previous rebranding efforts.

## Decision: Brand Consistency
Although the brand is moving toward "Cun Airport Shuttle" (per the domain), the current dominant branding throughout the project is **"Cancun Airport Shuttle"**. To maintain consistency, we will replace the legacy **"Cancun Airport Transportation"** with **"Cancun Airport Shuttle"**.

### Rationale: Legal Branding
-   **"Caribbean Transfers"** is the legal entity name and should be preserved in all legal contexts (e.g., within the body of Terms and Conditions) as per requirement.
-   The commercial brand is **"Cancun Airport Shuttle"**, which will be used to replace the outdated commercial brand **"Cancun Airport Transportation"**.

## Implementation Details

### Translation Updates (`src/messages/es.json`)
-   Update titles in `locations` and `destinations` sections from "Cancun Airport Transportation" to "Cancun Airport Shuttle".

### Legal Content Updates (`src/content/legal/`)
-   Update `terms-and-conditions.mdx` description to use the current brand name instead of the legacy one.
-   Ensure no other instances of the old brand name are present in legal metadata or headers.
