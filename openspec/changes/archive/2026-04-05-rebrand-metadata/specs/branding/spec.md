# Capability: Rebrand Metadata (Branding)

Updates internal branding and social handle metadata to reflect the new brand "Cun Airport Shuttle".

## ADDED Requirements

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
