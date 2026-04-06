---
id: fix-link-broken-consistency
title: Fix Broken and Inconsistent Links
description: Audit and fix broken internal/external links, standardize i18n routes, and optimize call-to-action behaviors (scroll vs. navigate).
---

# Proposal: Fix Broken and Inconsistent Links

## Why
A comprehensive audit revealed several issues with the project's linking structure:
1. **i18n Route Inconsistency**: Spanish translation files (`es.json`) contain inconsistent slugs for the same destinations compared to the primary `routes.ts` definition.
2. **Broken Call-to-Actions**: Multiple "Book now" and "Search" buttons use `#` which leads nowhere, failing to either scroll to the form or navigate to the reservation process.
3. **Hardcoded Language Paths**: Some links in the Spanish translation point to English routes or have incorrect prefixes.
4. **Generic External Links**: The TripAdvisor link in `site-config.ts` is a generic homepage instead of the specific business listing.

## What Changes
Standardize all links across translation files and configuration, ensuring that call-to-action buttons behave correctly based on the page context (scrolling when a form is present, navigating otherwise).

### Key Changes
- **Standardize i18n Slugs**: Update `es.json` to use the canonical Spanish slugs defined in `src/lib/i18n/routes.ts`.
- **Optimize CTA Behavior**: 
    - On pages with a booking form (Home, Services, Destinations), update "Book now" links to `#booking-form` to enable smooth scrolling.
    - On pages without a booking form (Blog, Legal), ensure CTA links point to the actual reservation page.
- **Fix Hardcoded Paths**: Ensure all internal links in translation files follow the expected localized pattern.
- **Update External Config**: Provide the specific TripAdvisor listing URL in `src/data/site-config.ts`.
- **Validation**: Perform a final link check to ensure all routes are reachable and localized correctly.

## Architectural Reasoning
By centralizing the source of truth for routes and standardizing CTA behavior, we improve UX and conversion rates. Using anchor links for pages with forms keeps users engaged on the same page, while navigating to a dedicated reservation page ensures the booking flow is always accessible from content-heavy pages.
