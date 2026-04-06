# Capability: link-consistency

## ADDED Requirements

### Requirement: i18n Route Standardization
Internal links in translation files (`src/messages/*.json`) and global configuration (`src/data/site-config.ts`) MUST consistently use the canonical slugs defined in `src/lib/i18n/routes.ts`.

#### Scenario: Update Spanish Slugs to Match Canonical Routes
Given the canonical routes defined in `src/lib/i18n/routes.ts`
When the `src/messages/es.json` file is checked
Then every `href` property representing an internal destination MUST match its Spanish slug in `routes.ts`.
- **Playa del Carmen**: `/es/transportacion-cancun-a-playa-del-carmen`
- **Tulum**: `/es/transporte-de-cancun-a-tulum`
- **Akumal**: `/es/transporte-cancun-akumal`
- **Merida**: `/es/traslado-de-cancun-a-merida`
- **Taxi**: `/es/taxi-aeropuerto-cancun`
- **Reservation**: `/es/mi-reservacion`

### Requirement: Optimized Call-to-Action Behavior
"Book now" and "Search" buttons MUST intelligently choose between smooth scrolling (same page) or full navigation (different page) based on the current view.

#### Scenario: Smooth Scroll When Form is Present
Given a page that includes the `BookingForm` component (Home, Taxi, Luxury, Private, Group, Destinations)
When a "Book now" or "Search" button is clicked
Then the `href` MUST point to `#booking-form` to allow smooth scrolling.

#### Scenario: Full Navigation When Form is Absent
Given a page that lacks the `BookingForm` component (Blog, Terms, Privacy)
When a call-to-action button is intended for booking
Then the `href` MUST point to the actual reservation route (e.g., `/my-reservation` or `/es/mi-reservacion`).

### Requirement: External Listing Accuracy
External links for reviews and social media MUST point to the specific business listing rather than a generic homepage.

#### Scenario: TripAdvisor Business Listing
Given the global social and review links in `src/data/site-config.ts`
When the TripAdvisor link is accessed
Then it MUST point specifically to the "Cancun Airport Transportation" listing: `https://www.tripadvisor.com/Attraction_Review-g150807-d10103757-Reviews-Cancun_Airport_Transportation-Cancun_Yucatan_Peninsula.html`

### Requirement: Locale Path Compliance
Internal links MUST adhere to the project's language prefixing conventions.

#### Scenario: English/Spanish Path Differentiation
Given a link within the Spanish locale
Then the route MUST include the `/es/` prefix (except for the root home redirect).
Given a link within the English locale
Then the route MUST NOT include the `/en/` prefix.
