## MODIFIED Requirements
### Requirement: GTM Initialization
The application MUST initialize Google Tag Manager (GTM) in the global layout to ensure it's active on all pages. The component MUST skip rendering if `PUBLIC_GTM_ID` is missing.

#### Scenario: Head Script Injection
- **Given** any page in the application is visited.
- **And** the environment variable `PUBLIC_GTM_ID` is set.
- **Then** the GTM `<script>` with the configured `PUBLIC_GTM_ID` MUST be present in the `<head>`.
- **And** the script MUST initialize the `dataLayer` and inject `gtm.js`.

#### Scenario: Body Noscript Injection
- **Given** any page in the application is visited.
- **And** the environment variable `PUBLIC_GTM_ID` is set.
- **Then** the GTM `<noscript>` iframe with the configured `PUBLIC_GTM_ID` MUST be present immediately after the opening `<body>` tag.

#### Scenario: Missing GTM ID
- **Given** the environment variable `PUBLIC_GTM_ID` is NOT set.
- **Then** the GTM scripts MUST NOT render.

### Requirement: Compatibility with Client Navigation
The GTM implementation MUST NOT break when using Astro's `ClientRouter` for client-side navigation.

#### Scenario: Script Persistence
- **Given** a user navigates between pages using client-side transitions.
- **Then** the GTM script MUST persist and continue tracking page views correctly.
- **And** a `page_view` event MUST be pushed to the `dataLayer` on every `astro:page-load` with the current `page_path` and `page_title`.
