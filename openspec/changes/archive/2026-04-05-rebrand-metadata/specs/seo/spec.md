# Capability: Rebrand Metadata (SEO)

Updates page metadata strings and search index to reflect the new brand "Cun Airport Shuttle".

## ADDED Requirements

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
