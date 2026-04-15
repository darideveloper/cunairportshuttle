# Proposal: Disable GTM and Google Ads Tracking Codes

## Goal
Disable the Google Tag Manager (GTM) and Google Ads (GA) conversion tracking by commenting out their initialization and execution logic in the codebase.

## Scope
- **GTM Initialization**: Comment out the script and noscript tags in `src/components/integrations/GoogleTagManager.astro`.
- **GA Conversion**: Comment out the conversion tracking logic in `src/components/pages/store/ThankYou.astro`.

## Design Summary
The tracking codes will be preserved in the codebase but commented out to prevent execution. This approach is taken to fulfill the specific request of "commenting" rather than a full removal or environment-based toggle.

## Requirements
- The GTM script in the `<head>` must be commented out.
- The GTM noscript iframe in the `<body>` must be commented out.
- The Google Ads conversion event push in `ThankYou.astro` must be commented out.
- Other integrations (e.g., TawkTo) must remain active.
