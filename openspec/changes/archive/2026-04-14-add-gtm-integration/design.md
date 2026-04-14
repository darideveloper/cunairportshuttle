# Design: Google Tag Manager Integration

## Architecture
The GTM integration will follow a component-based approach within the Astro framework, leveraging the existing `integrations` folder pattern.

### Components
1. **GoogleTagManager.astro**: This component will handle both the standard GTM `<script>` and the `<noscript>` fallback. It will expose two slots or named fragments to allow precise placement in `Layout.astro`.
   - **Head Snippet**: Injected into the `<head>` tag. Uses `is:inline` to ensure it executes as early as possible.
   - **Body Snippet**: Injected into the `<body>` tag, immediately after the opening tag.

### Data Flow
- **Configuration**: The GTM ID (`GTM-WKXM5PMV`) will be sourced from `import.meta.env.PUBLIC_GTM_ID`.
- **Initialization**: GTM initializes a `dataLayer` array and injects the `gtm.js` script.

### Performance & Best Practices
- **`is:inline`**: Essential for GTM to correctly initialize its `dataLayer` and hook into early browser events before Astro's client-side scripts might modify the DOM.
- **Client-Side Navigation**: Since the project uses `<ClientRouter />` (Astro's View Transitions), the GTM script must handle navigation events. Standard GTM scripts often work fine with modern SPAs, but we should ensure the script is not duplicated during transitions. The default `is:inline` script in the `<head>` will persist across transitions in Astro.

## Security
- No sensitive data will be pushed to the `dataLayer` in this initial setup.
- The GTM ID is public and safe to expose in the `.env` file with the `PUBLIC_` prefix.

## Trade-offs
- **Multiple Trackers**: Maintaining both `gtag.js` and GTM might lead to slightly higher JS execution time. However, this ensures continuity for existing Google Ads conversions while enabling new GTM-managed tags.
