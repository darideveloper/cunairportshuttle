# Change: Consolidate Tracking Logic into GTM

## Why
The current tracking implementation is fragmented across two systems: a manual `gtag.js` script for Google Ads (`AW-18013613191`) and a Google Tag Manager (GTM) container (`GTM-WKXM5PMV`). This redundancy increases JS execution time, maintenance overhead, and data inconsistency risk.

## What Changes
- **Remove Manual `gtag.js`**: Delete the hardcoded Google Ads script from `src/layouts/Layout.astro`.
- **Standardize on `dataLayer`**: Refactor `src/components/pages/store/ThankYou.astro` to push conversion events to the `dataLayer`.
- **Implement Navigation Tracking**: Add a global listener for `astro:page-load` in `GoogleTagManager.astro` to push `page_view` events.
- **Add GTM Safeguards**: Update the `GoogleTagManager` component to skip rendering if the GTM ID is missing.

## Impact
- **Affected specs**: `gtm-integration`, `ga-integration`
- **Affected code**: `src/layouts/Layout.astro`, `src/components/integrations/GoogleTagManager.astro`, `src/components/pages/store/ThankYou.astro`
