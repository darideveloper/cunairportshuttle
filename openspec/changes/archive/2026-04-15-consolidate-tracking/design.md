# Design Document: Consolidate Tracking Logic

## Overview
This document outlines the architectural changes for consolidating tracking logic into Google Tag Manager (GTM).

## Core Concepts

### 1. `dataLayer` Standardization
The `dataLayer` is the single source of truth for events. Components will push objects to `window.dataLayer` following GTM best practices.

**Event Schema for Conversions (Thank You Page):**
```javascript
window.dataLayer.push({
  event: 'conversion',
  conversion_id: 'AW-18013613191',
  conversion_label: '6zn0CPCz6occEIfZx41D',
  value: conversionValue,
  currency: conversionCurrency,
  transaction_id: transactionId,
});
```

### 2. Client-Side Navigation Support
Since the project uses Astro's `ClientRouter`, we must manually push a `page_view` event to GTM on every navigation, as GTM's default triggers only fire on full page loads.

**Navigation Listener:**
```javascript
document.addEventListener('astro:page-load', () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'page_view',
    page_path: window.location.pathname,
    page_title: document.title,
  });
});
```

### 3. Component Safeguards
The `GoogleTagManager` component will be updated to:
- **Conditional Rendering**: If `PUBLIC_GTM_ID` is not set, it will not render any script or noscript tags.
- **Improved Type Safety**: Ensure GTM ID is passed correctly into the client-side script via `define:vars`.

## Impacts & Risks
- **GTM Configuration**: The existing `AW-18013613191` script will be removed. The site owner MUST ensure that a corresponding tag is created in the GTM dashboard to fire the Google Ads conversion based on the `conversion` event pushed to the `dataLayer`.
- **Double Counting**: Removing the manual `gtag.js` while keeping GTM avoids double counting, but ensure GTM container is not *also* hardcoding a `gtag.js` library if it's already included via GTM tags.
