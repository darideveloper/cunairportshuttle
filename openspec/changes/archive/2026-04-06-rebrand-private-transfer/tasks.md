# Tasks: Rebrand Private Transfer Page

This list outlines the work items required to fully rebrand the Private Transfer page in English and Spanish.

## 1. Content Updates (JSON)

### 1.1 Update `src/messages/en.json` <!-- id: en-rebrand -->
- [x] Update `pages.private.title` and `description` to match rebranding text.
- [x] Add `items` array to `pages.private.includes` with the new 7-item list.
- [x] Update `pages.private.privateDetails`:
    - Update main description.
    - Update `table.title` to "Private Transportation Rates - Cancun Airport".
    - Update `table.headers` and `table.rows` with new prices ($29.99 / $59.99) and "Up to 8 pax".
- [x] Update `pages.private.testimonials`:
    - Update title to "Private Transfers in Cancun - What Our Guests Say".
    - Update description to "Our clients' feedback is the cornerstone of our service."
    - Update all 3 items to include the `**04/2026 - Name**` suffix in the text field.
- [x] Update `pages.private.faq` (Full replacement of all 4 questions/answers).
- [x] Update `pages.private.pricing`:
    - Update title to "Additional Transportation Alternatives in Cancun".
    - Update Luxury, Private (Taxi), and Group cards with new titles and bulleted descriptions.

### 1.2 Update `src/messages/es.json` <!-- id: es-rebrand -->
- [x] Update `pages.private.title` and `description` (Traslados Privados Aeropuerto Cancún | Cun Airport Shuttle).
- [x] Add `items` array to `pages.private.includes`.
    - Update title to "Todo lo que incluyen nuestros Traslados Privados en Cancún:".
- [x] Update `pages.private.privateDetails`:
    - Update main description.
    - Update `table.title` to "Tarifas de Transporte Privado Aeropuerto de Cancún".
    - Update `table.headers` (Origen/Destino/Sencillo/Redondo) and `table.rows` (Hasta 8 pax).
- [x] Update `pages.private.testimonials`:
    - Update title to "Traslados Privados en Cancún - Reseñas de nuestros usuarios".
    - Update description to "La retroalimentación de quienes confían en nosotros es nuestra mayor prioridad."
    - Update all 3 items with `**04/2026 - Nombre**` suffix.
- [x] Update `pages.private.faq` (Full replacement).
- [x] Update `pages.private.pricing`:
    - Update title to "Otras alternativas de traslado en Cancún".
    - [x] **Correct Luxury title to "Transportación de Lujo"**.
    - [x] Correct Taxi title to "Servicio de Taxi (Económico)".
    - [x] Update all descriptions with bullet points.

## 2. Component Refinement

### 2.1 Update `src/components/organisms/Includes.astro` <!-- id: component-update -->
- [x] Update logic to fetch page-specific `items` if they exist in `pages[contentKey].includes.items`, falling back to global items.

## 3. Verification & Validation

### 3.1 Visual Audit <!-- id: visual-audit -->
- [x] Verify all prices ($29.99, $59.99, $84.00) are correctly displayed in both languages.
- [x] Confirm "04/2026" appears in all testimonials.
- [x] Confirm table headers in Spanish match "Sencillo/Redondo" instead of "Ida/Redondo".
- [x] Ensure "Luxury Transportation" card title in Spanish is "Transportación de Lujo".

### 3.2 Regression Testing <!-- id: regression -->
- [x] Ensure other pages using the `Includes.astro` component still show the global items correctly.
