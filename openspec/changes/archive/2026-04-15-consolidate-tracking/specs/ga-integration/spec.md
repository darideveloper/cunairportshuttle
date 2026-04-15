## REMOVED Requirements
### Requirement: GA Global Initialization
**Reason**: Consolidating all tracking logic into Google Tag Manager (GTM).
**Migration**: Manual `gtag.js` for `AW-18013613191` is removed from code; equivalent tracking should be configured in GTM container.

## MODIFIED Requirements
### Requirement: Conversion Event Tracking
The application MUST fire a conversion event when a user reaches the "Thank You" or "Gracias" page after a successful booking using the GTM `dataLayer`.

#### Scenario: Successful Conversion Firing
- **Given** a user arrives at the `/thank-you` or `/es/gracias` page.
- **And** the `code` parameter is present in the URL.
- **And** the `useSearchFormStore` contains valid booking data matching the `code`.
- **Then** a `conversion` event MUST be pushed to the `window.dataLayer` with:
  - `conversion_id`: `AW-18013613191`
  - `conversion_label`: `6zn0CPCz6occEIfZx41D`
  - `value`: The price from `selectedVehicle.price` (or `1.0` if unavailable).
  - `currency`: The currency from `currency` (or `MXN` if unavailable).
  - `transaction_id`: The `reservationId` from the store (or the `code` from the URL).

#### Scenario: Navigation Compatibility
- **Given** the user navigates to the Thank You page via a client-side transition.
- **Then** the conversion event MUST still fire correctly and push to the `dataLayer`.
