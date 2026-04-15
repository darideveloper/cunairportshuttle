# ga-integration Spec Delta

## MODIFIED Requirements

### Requirement: Conversion Event Tracking
The application MUST fire a conversion event when a user reaches the "Thank You" or "Gracias" page after a successful booking using the GTM `dataLayer`.

#### Scenario: Disabled Conversion Tracking
- **Given** the conversion tracking code in `ThankYou.astro` is commented out.
- **When** a user arrives at the `/thank-you` page with a valid booking.
- **Then** the `conversion` event MUST NOT be pushed to the `window.dataLayer`.
- **And** no tracking error should appear in the console.
