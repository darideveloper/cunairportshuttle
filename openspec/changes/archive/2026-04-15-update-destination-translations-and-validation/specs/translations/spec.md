## ADDED Requirements
### Requirement: Home Page Destination Cards Metadata
The home page destination cards MUST include `imageAlt` and `imageTitle` metadata to improve SEO and accessibility.

#### Scenario: Metadata for Destination Cards
- **GIVEN** the home page destination cards section
- **WHEN** the section is rendered
- **THEN** the cards for "Tulum", "Playa del Carmen", and "Cancun" MUST have localized `imageAlt` and `imageTitle` attributes from `pages.home.destinations.cards.[id].imageAlt/imageTitle`.
