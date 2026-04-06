# Specification Delta: Private Transfer Rebranding (Translations)

This spec delta defines the required updates for the Private Transfer page translations.

## ADDED Requirements

### Requirement: SEO Branding Accuracy
The Private Transfer page MUST reflect the new "Cun Airport Shuttle" brand in its meta title and description for both English and Spanish.

#### Scenario: EN Meta Tags Update
- **GIVEN** the `/private-airport-transfer-cancun` route
- **WHEN** the page is rendered
- **THEN** the meta title SHALL be "Cancun Airport Private Transfers | Cun Airport Shuttle"
- **AND** the meta description SHALL be "Book your private transfer with Cun Airport Shuttle. 24/7 service to Cancun, Playa del Carmen, and Tulum. Professional drivers, no waiting. Book your ride now!"

#### Scenario: ES Meta Tags Update
- **GIVEN** the `/es/transporte-privado-cancun` route
- **WHEN** the page is rendered
- **THEN** the meta title SHALL be "Traslados Privados Aeropuerto Cancún | Cun Airport Shuttle"
- **AND** the meta description SHALL be "Reserva tu traslado privado con Cun Airport Shuttle. Servicio 24/7 a Cancún, Playa del Carmen y Tulum. Choferes profesionales y sin esperas. ¡Reserva ahora!"

### Requirement: Specific Service Includes
The Private Transfer page SHALL display a unique list of 7 service benefits in its "Includes" section, overriding the global default.

#### Scenario: Private Page Specific Includes
- **GIVEN** the private transfer page
- **WHEN** the `Includes` organism is rendered
- **THEN** it SHALL display the specific 7 items defined in the rebranding doc (Personnel, Flight Tracking, Insurance, etc.).

### Requirement: Pricing and Unit Accuracy
The Pricing Table and Alternative Service cards SHALL display the updated rates and units defined in the rebranding strategy.

#### Scenario: Pricing Table Rates
- **GIVEN** the private transfer page pricing table
- **WHEN rendered
- **THEN** the One Way (Sencillo) rate SHALL be "$29.99 USD"
- **AND** the Round Trip (Redondo) rate SHALL be "$59.99 USD"
- **AND** the Capacity label SHALL be "Up to 8 pax" (EN) or "Hasta 8 pax" (ES).

#### Scenario: Alternative Card Details
- **GIVEN** the alternative service cards (Luxury, Taxi, Group)
- **WHEN rendered in Spanish
- **THEN** the Luxury card SHALL be titled "Transportación de Lujo"
- **AND** its starting price SHALL be "$84.00 USD"
- **AND** the Taxi card SHALL be titled "Servicio de Taxi (Económico)"
- **AND** its starting price SHALL be "$29.99 USD".

### Requirement: Testimonial Formatting
The Testimonials SHALL include a future date and customer name as a suffix to the review text.

#### Scenario: Testimonial Date Suffix
- **GIVEN** a testimonial on the private transfer page
- **WHEN rendered
- **THEN** the text SHALL include a line at the bottom with the format `**04/2026 - [Name]**`.
