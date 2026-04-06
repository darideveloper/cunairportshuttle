# Specification: Home Page Spanish Rebranding

This specification defines the updated requirements for the Spanish language content on the home page.

## ADDED Requirements

### Requirement: [HOME-ES-01] Hero Banner Text
The hero banner on the Spanish home page MUST display the updated H1.

#### Scenario: User visits the Spanish home page
- **Given** the user is on the `/es` route
- **Then** the main title (H1) MUST be "Transporte Privado en el aeropuerto de Cancún"
- **And** the banner image metadata (Alt/Title) MUST NOT be changed from their current state.

### Requirement: [HOME-ES-02] Safe Trip Branding
The "Viaje Seguro" section MUST use the updated branding and experience data.

#### Scenario: User views the Safe Trip section
- **Given** the user is viewing the Safe Trip banner
- **Then** the title MUST be "Viaje seguro y reserva con Cancun Airport Shuttle"
- **And** the description text MUST state "más de 15 años de experiencia" and include the signature "Cun Airport Shuttle y Go Transfers".

### Requirement: [HOME-ES-03] Banner CTA Phrasing
The call-to-action banner (BannerCta) MUST use the updated marketing copy.

#### Scenario: User scrolls to the Banner CTA
- **Given** the user is viewing the Banner CTA section
- **Then** the heading MUST be "Traslado Aeropuerto Cancún"
- **And** the body text MUST contain "Ofrecemos servicios de transporte desde y hacia su hotel..." and "A pesar de nuestro nombre, Cancun Airport Shuttle, ofrecemos mucho más...".

### Requirement: [HOME-ES-04] Pricing Card Descriptions
The descriptions for the pricing cards (Luxury, Private, Group) MUST match the provided rebranding text.

#### Scenario: User views the Pricing Section
- **Given** the user is looking at the service pricing cards
- **Then** the "Transportación de Lujo" card description MUST match the provided HTML reference.
- **And** the "Transportación Privada" card description MUST match the provided HTML reference.
- **And** the "Transportación para grupos" card description MUST match the provided HTML reference.

### Requirement: [HOME-ES-05] Featured Destinations Copy
The section describing the Riviera Maya destinations MUST use the updated copy including the destination cards.

#### Scenario: User views Featured Destinations
- **Given** the user is in the "Destinos" section
- **Then** the title MUST be "Transporte desde el aeropuerto de Cancún a los principales destinos de la Riviera Maya"
- **And** the section description MUST match the HTML reference.
- **And** the cards for Tulum, Playa del Carmen, and Cancun Zone MUST have updated titles and descriptions.

### Requirement: [HOME-ES-06] Section Titles and Body Updates
Various sections headings and body texts MUST be updated for brand consistency.

#### Scenario: User browses the home page
- **Given** the user is navigating the home page
- **Then** the "Why Choose Us" heading MUST be "¿Por qué usar Cancun Airport Shuttle?" and its body text MUST match the HTML reference.
- **And** the "Reliable Service" heading MUST be "Cancun Airport Shuttle, la empresa favorita en Cancún" and its description MUST match the HTML reference.
- **And** the FAQ section title MUST be "Transporte Cancún Aeropuerto - Faqs" and all FAQ items MUST be updated to match the HTML reference.
- **And** the Transportation Services title MUST be "Servicios de Traslado del Aeropuerto de Cancún" and all service items descriptions MUST be updated.
- **And** the Locations title MUST be "Information about Cancun Airport Transportation Location".

### Requirement: [HOME-ES-07] Rates Table Title and Description
The Rates Table MUST display the updated title and caption.

#### Scenario: User views the Rates Table
- **Given** the user scrolls to the Rates Table
- **Then** the title MUST be "Precios de Traslados en los principales de Riviera Maya"
- **And** the description (caption) MUST be "Shuttle Service Prices by Destinations".

### Requirement: [HOME-ES-08] Stats Update
The company statistics MUST be updated with the latest figures.

#### Scenario: User views the Banner Stats section
- **Given** the user scrolls to the stats section
- **Then** the "Transportes Operados" figure MUST be "21,517".
