# seo Specification

## Purpose
TBD - created by archiving change fix-opengraph-metadata. Update Purpose after archive.
## Requirements
### Requirement: Global Open Graph Image Configuration
The system SHALL use a high-quality default Open Graph image.

#### Scenario: Global Open Graph Image
Given the application is configured
When the SEO metadata is generated
Then it should use `public/og-image.jpg` as the default Open Graph image
And fall back to the logo only if `ogImage` is not defined.

### Requirement: Optimized Home Page Metadata
The system SHALL provide optimized titles and descriptions for the home page in all supported languages.

#### Scenario: Optimized Home Page Metadata
Given I am on the home page
When the page metadata is rendered
Then the title should be under 60 characters
And the description should be under 160 characters
And this should apply to both English and Spanish versions.

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

