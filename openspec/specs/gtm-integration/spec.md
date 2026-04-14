# gtm-integration Specification

## Purpose
TBD - created by archiving change add-gtm-integration. Update Purpose after archive.
## Requirements
### Requirement: GTM Initialization
The application MUST initialize Google Tag Manager (GTM) in the global layout to ensure it's active on all pages.

#### Scenario: Head Script Injection
- **Given** any page in the application is visited.
- **Then** the GTM `<script>` with the configured `PUBLIC_GTM_ID` MUST be present in the `<head>`.
- **And** the script MUST initialize the `dataLayer` and inject `gtm.js`.

#### Scenario: Body Noscript Injection
- **Given** any page in the application is visited.
- **Then** the GTM `<noscript>` iframe with the configured `PUBLIC_GTM_ID` MUST be present immediately after the opening `<body>` tag.

### Requirement: Environment Configuration
The GTM ID MUST be configurable via environment variables.

#### Scenario: Configuration Retrieval
- **Given** the environment variable `PUBLIC_GTM_ID` is set to `GTM-WKXM5PMV`.
- **When** the application is built or run.
- **Then** the GTM snippets MUST use `GTM-WKXM5PMV`.

### Requirement: Compatibility with Client Navigation
The GTM implementation MUST NOT break when using Astro's `ClientRouter` for client-side navigation.

#### Scenario: Script Persistence
- **Given** a user navigates between pages using client-side transitions.
- **Then** the GTM script MUST persist and continue tracking page views correctly.

