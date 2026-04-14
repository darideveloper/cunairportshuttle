# Proposal: Add Google Tag Manager Integration

## Why
The Cancun Airport Shuttle project requires advanced tracking and tag management capabilities provided by Google Tag Manager (GTM). Currently, only a manual `gtag.js` for Google Ads is implemented in the global layout.

## What Changes
Integrate Google Tag Manager with ID `GTM-WKXM5PMV` following Astro best practices:
1. Create a dedicated `GoogleTagManager.astro` component to encapsulate the GTM script.
2. Inject the main GTM script into the `<head>` of `Layout.astro`.
3. Inject the `noscript` fallback into the `<body>` of `Layout.astro` for non-JS environments.
4. Utilize environment variables for the GTM ID to ensure flexibility across environments.
5. Maintain the existing `gtag.js` script unless specifically requested to be migrated into GTM.

## Scope
- `src/components/integrations/GoogleTagManager.astro`: New component for the GTM snippet.
- `src/layouts/Layout.astro`: Modification to include the GTM component in `<head>` and `<body>`.
- `.env`: Addition of `PUBLIC_GTM_ID`.
- `openspec/specs/gtm-integration/spec.md`: New specification for GTM integration.

## Alternatives Considered
- **Direct injection in Layout.astro**: Rejected to maintain clean separation of concerns and reusability.
- **Using an Astro middleware**: Overkill for a simple script injection and might interfere with client-side navigation if not handled carefully.
- **Using a third-party GTM library**: Standard script injection is more lightweight and gives full control over placement and execution (e.g., using `is:inline`).
