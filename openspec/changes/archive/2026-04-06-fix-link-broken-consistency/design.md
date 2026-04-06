# Design: Fix Broken and Inconsistent Links

## Routing Consistency
The primary source of truth for all routes is `src/lib/i18n/routes.ts`. However, translation files (`en.json`, `es.json`) frequently duplicate these slugs in their `href` properties.

### Standardizing Internal Links
- **Enforcement**: Translation `href` values MUST match the corresponding entry in `routes.ts`.
- **Placeholder Replacement**: Elements using `href: "#"` for booking actions will be updated based on page context. 

### Scroll vs. Navigate Strategy
- **Smooth Scroll (Same Page)**: For pages that contain the `BookingForm` component (Home, Service pages like Taxi/Luxury/Private/Group, and Destinations), CTA buttons will use `href: "#booking-form"`.
- **Direct Navigation (New Page)**: For pages without a booking form (Blog Listing, Blog Detail, Legal pages), CTA buttons in the header or footer (where applicable) should lead to the dedicated reservation path:
  - English: `/my-reservation`
  - Spanish: `/es/mi-reservacion`

## External Link Management
External links defined in `src/data/site-config.ts` are currently generic.
- **TripAdvisor**: Update `SOCIAL_LINKS.tripadvisor` with the specific Cancun Airport Shuttle listing: `https://www.tripadvisor.com/Attraction_Review-g150807-d10103757-Reviews-Cancun_Airport_Transportation-Cancun_Yucatan_Peninsula.html`

## Blog Link Integrity
Blog posts are fetched from an external API and use dynamic slugs. 
- **Recommendation**: Although out of scope for a static fix, we should ensure the `BlogDetail` and `[slug].astro` components handle 404s gracefully if a post is not found.

## i18n Path Patterns
Ensure Spanish routes always start with `/es/` and English routes do not have a `/en/` prefix, aligning with current Astro configuration.
