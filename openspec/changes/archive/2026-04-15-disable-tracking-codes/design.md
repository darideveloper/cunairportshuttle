# Design: Disabling Tracking Codes via Comments

## Background
The user requested to "comment" the Google Tag Manager and Google Ads tracking codes. Currently, these are active in `GoogleTagManager.astro` and `ThankYou.astro`.

## Approach
Instead of removing the files or the environment variable configuration, we will wrap the execution logic in comments.

### 1. GTM Integration
In `src/components/integrations/GoogleTagManager.astro`, we will comment out:
- The `(function(w,d,s,l,i){...})` block in the `<script>` tag.
- The `astro:page-load` event listener for page views.
- The `<noscript>` iframe.

### 2. Google Ads Conversion
In `src/components/pages/store/ThankYou.astro`, we will comment out:
- The logic within the `astro:page-load` event listener that pushes the `conversion` event to the `dataLayer`.

## Trade-offs & Risks
- **Maintenance**: Commented-out code can become stale. However, this is the requested approach to allow for easy restoration.
- **Payload**: The commented-out scripts may still be included in the final JS bundle if not handled by the build process, but they will not execute.
