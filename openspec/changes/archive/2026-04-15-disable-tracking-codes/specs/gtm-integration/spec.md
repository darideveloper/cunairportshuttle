# gtm-integration Spec Delta

## MODIFIED Requirements

### Requirement: GTM Initialization
The application MUST initialize Google Tag Manager (GTM) in the global layout to ensure it's active on all pages. The component MUST skip rendering if `PUBLIC_GTM_ID` is missing.

#### Scenario: Disabled GTM Initialization
- **Given** the initialization code in `GoogleTagManager.astro` is commented out.
- **Then** the GTM `<script>` tags MUST NOT be executed.
- **And** the `gtm.js` MUST NOT be loaded.

### Requirement: Compatibility with Client Navigation
The GTM implementation MUST NOT break when using Astro's `ClientRouter` for client-side navigation.

#### Scenario: Disabled Page View Tracking
- **Given** the `page_view` tracking logic in `GoogleTagManager.astro` is commented out.
- **When** a user navigates between pages using client-side transitions.
- **Then** no `page_view` events MUST be pushed to the `dataLayer` via the `astro:page-load` listener.
