# Tasks: Consolidate Tracking Logic

- [x] **GTM Component Safeguards**: Add early return in `src/components/integrations/GoogleTagManager.astro` if `PUBLIC_GTM_ID` is missing.
- [x] **GTM Navigation Listener**: Implement the `astro:page-load` global listener in `src/components/integrations/GoogleTagManager.astro` (or a separate script) to push `page_view` events.
- [x] **Remove Redundant `gtag.js`**: Delete the hardcoded Google Analytics/Ads script and related `gtag` function from `src/layouts/Layout.astro`.
- [x] **Refactor Conversion Tracking**: Update `src/components/pages/store/ThankYou.astro` to use `window.dataLayer.push({ event: 'conversion', ... })` instead of direct `window.gtag` calls.
- [x] **Validation**:
    - Verify `GTM-WKXM5PMV` script is still correctly injected in the `<head>`.
    - Verify `noscript` iframe is in the `<body>`.
    - Verify the manual `AW-18013613191` script is gone.
    - Check the `dataLayer` in the console after navigation to ensure `page_view` events are being recorded.
    - Confirm conversion events are correctly pushed to the `dataLayer` on reaching the Thank You page.
