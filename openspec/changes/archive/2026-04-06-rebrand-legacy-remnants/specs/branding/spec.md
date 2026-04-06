# branding Specification

Update remaining legacy "Cancun Airport Transportation" branding in translation and legal metadata to "Cancun Airport Shuttle", while maintaining the legal brand "Caribbean Transfers".

## ADDED Requirements

### Requirement: Update Outdated Brand References
The translation and legal metadata SHALL use the current commercial brand "Cancun Airport Shuttle" instead of the legacy name "Cancun Airport Transportation".

#### Scenario: Update Spanish Locations Title
- **Given** the Spanish translation file `src/messages/es.json`
- **When** the `locations.title` is accessed
- **Then** it MUST be "Information about Cancun Airport Shuttle Location"

#### Scenario: Update Spanish Destinations Titles
- **Given** the Spanish translation file `src/messages/es.json`
- **When** `destinations.title` or `destinations.destinations.title` is accessed
- **Then** it MUST be "Cancun Airport Shuttle - Tarifas para destinos populares"

#### Scenario: Update Legal Metadata
- **Given** the Spanish legal file `src/content/legal/es/terms-and-conditions.mdx`
- **When** the `description` field is read
- **Then** it MUST reference "Cancun Airport Shuttle" instead of the legacy brand name.

### Requirement: Legal Brand Preservation
The legal brand name **"Caribbean Transfers"** MUST be preserved in all legal contexts within the `src/content/legal/` directory.

#### Scenario: Verify Legal Document Integrity
- **Given** the Terms and Conditions files (`en/terms-and-conditions.mdx` and `es/terms-and-conditions.mdx`)
- **When** "Caribbean Transfers" is present in the document body
- **Then** it MUST NOT be modified or replaced.
