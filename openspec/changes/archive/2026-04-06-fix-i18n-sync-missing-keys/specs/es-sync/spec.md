# Capability: Sync Spanish Translation Keys

## ADDED Requirements

### Requirement: Ensure menubar has reservation link
The Spanish translation file MUST contain the `myReservation` key in the menubar.

#### Scenario: Missing myReservation in es.json
- **Action** Add `"myReservation": "Mi reservación"` to `global.menubar` in `es.json`.

### Requirement: Ensure reliable service section has imageAlt
The Spanish translation file MUST contain the `imageAlt` for the reliable service section.

#### Scenario: Missing imageAlt in global.sections.reliableService
- **Action** Add `"imageAlt": "Más de 10 años de experiencia"` to `global.sections.reliableService` in `es.json`.

### Requirement: Ensure Playa page has missing image attributes and FAQ items
The Spanish translation file MUST contain image alt texts and missing FAQ items for the Playa page.

#### Scenario: Missing safeTrip.imageAlt, reliableService.imageAlt, and FAQ items
- **Action** Add `"imageAlt": "Cancun Airport Shuttle por Go Transfers"` to `pages.playa.safeTrip`.
- **Action** Add `"imageAlt": "Cancun Airport Shuttle por Go Transfers"` to `pages.playa.reliableService`.
- **Action** Add `"placesToVisit"` item to `pages.playa.faq.items`.

### Requirement: Ensure Tulum page has missing destination cards attributes
The Spanish translation file MUST contain missing image attributes for destination cards on the Tulum page.

#### Scenario: Missing imageAlt and imageTitle in pages.tulum.destinations.cards
- **Action** Add `imageAlt` and `imageTitle` to `playa` and `cancun` cards in `pages.tulum.destinations.cards`.

### Requirement: Ensure Destinations page has complete testimonials
The Spanish translation file MUST contain all testimonial items present in the English version.

#### Scenario: Missing item2 in pages.destinations.testimonials.items
- **Action** Add `item2` to `pages.destinations.testimonials.items` with translated content.
