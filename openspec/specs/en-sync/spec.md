# en-sync Specification

## Purpose
TBD - created by archiving change fix-i18n-sync-missing-keys. Update Purpose after archive.
## Requirements
### Requirement: Ensure Playa FAQ description is present
The English translation file MUST contain the FAQ description for the Playa page.

#### Scenario: Missing key in en.json
- **Given** `es.json` contains `pages.playa.faq.description`
- **When** the validation script runs
- **Then** the build MUST fail if the key is missing in `en.json`.
- **Action** Add `"description": "We help you clear your doubts about our transportation services"` to `pages.playa.faq` in `en.json`.

