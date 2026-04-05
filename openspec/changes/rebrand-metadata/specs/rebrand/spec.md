# Capability: Rebrand Metadata

Updates internal metadata (Astro config, social handles, and i18n SEO strings) to reflect the new brand "Cun Airport Shuttle".

## MODIFIED Requirements

### Requirement: Update Core Website and Social Metadata
The site URL and social media handles MUST be updated to the new branding to ensure correct Open Graph and Twitter card generation.

#### Scenario: Update Astro Site URL
- **Given** the `astro.config.ts` file contains the old brand URL `https://cancunsairporttransportation.com`.
- **When** the rebranding is applied.
- **Then** the `site` property SHALL be updated to `https://cunairportshuttle.com`.

#### Scenario: Update Twitter Handle
- **Given** `src/data/site-config.ts` contains the old Twitter handle `@CancunAirportT`.
- **When** the rebranding is applied.
- **Then** the `twitter` handle SHALL be updated to `@CunAirportShutt` (or a valid new handle).

### Requirement: Update I18n SEO Metadata
All page-level metadata (titles, descriptions, keywords) in the translation files MUST be updated to the new brand.

#### Scenario: Update English Metadata
- **Given** `src/messages/en.json` contains "Cancun Airport Transportation" or "Cancun's Airport Transportation" in `title`, `description`, or `keywords`.
- **When** the rebranding is applied.
- **Then** these instances SHALL be replaced with "Cancun Airport Shuttle" and any associated URLs SHALL be updated to `https://cunairportshuttle.com`.

#### Scenario: Update Spanish Metadata
- **Given** `src/messages/es.json` contains "Cancun Airport Transportation" in `title`, `description`, or `keywords`.
- **When** the rebranding is applied.
- **Then** these instances SHALL be replaced with "Cancun Airport Shuttle" (or its Spanish equivalent if appropriate) and any associated URLs SHALL be updated to `https://cunairportshuttle.com`.

### Requirement: Update Search Index Metadata
The generated search index MUST reflect the new brand names.

#### Scenario: Update Search Index Generator
- **Given** `src/pages/[lang]/search.json.ts` generates page titles with the old brand name.
- **When** the rebranding is applied.
- **Then** the generator SHALL use the new brand name "Cancun Airport Shuttle".
