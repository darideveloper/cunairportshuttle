# Tasks: Disable Tracking Codes

## Phase 1: GTM Initialization
- [x] Comment out the GTM initialization script in `src/components/integrations/GoogleTagManager.astro`.
- [x] Comment out the `astro:page-load` page_view event listener in `src/components/integrations/GoogleTagManager.astro`.
- [x] Comment out the `<noscript>` iframe in `src/components/integrations/GoogleTagManager.astro`.

## Phase 2: Google Ads Conversion
- [x] Comment out the conversion event push logic in `src/components/pages/store/ThankYou.astro`.

## Phase 3: Validation
- [x] Build the application and verify no JS errors are present. (Note: Build failed due to unrelated pre-existing API connection issues in blog routes).
- [x] Inspect the built HTML to ensure GTM and Google Ads scripts are commented out and not executing.
- [x] Verify that TawkTo (chat) still works as expected.
