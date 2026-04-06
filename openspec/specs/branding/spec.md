# branding Specification

## Purpose
TBD - created by archiving change add-green-branding-and-button-variants. Update Purpose after archive.
## Requirements
### Requirement: Global Green Color Token
The design system MUST include a green brand color token defined as `#2e8e1f`. This color SHALL be used for affirmative actions and branding elements where green is specified.

#### Scenario: Defining green in theme
- **WHEN** the CSS theme is initialized
- **THEN** a variable `--color-green` MUST be available with value `#2e8e1f`
- **AND** it MUST be integrated into the Tailwind v4 theme configuration

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

