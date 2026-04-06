# Design: Rebrand Private Transfer Page

## 1. Context & Rationale

The rebranding of the Private Airport Transfer page is part of a broader brand transition to "Cun Airport Shuttle." The new text aims for a more concise and professional tone, while also updating pricing and specific service attributes.

## 2. Translation Architecture

The text content is stored in `src/messages/en.json` and `src/messages/es.json`. The rebranding involves updating keys under:
- `pages.private`
- `global.booking` (if needed for form-wide consistency)

### 2.1 Specific Text Mapping and Code Snippets

#### 2.1.1 Meta SEO
**New EN:**
```json
"title": "Cancun Airport Private Transfers | Cun Airport Shuttle",
"description": "Book your private transfer with Cun Airport Shuttle. 24/7 service to Cancun, Playa del Carmen, and Tulum. Professional drivers, no waiting. Book your ride now!"
```
**New ES:**
```json
"title": "Traslados Privados Aeropuerto Cancún | Cun Airport Shuttle",
"description": "Reserva tu traslado privado con Cun Airport Shuttle. Servicio 24/7 a Cancún, Playa del Carmen y Tulum. Choferes profesionales y sin esperas. ¡Reserva ahora!"
```

#### 2.1.2 Pricing Section Card Title Fix (Spanish)
The Spanish translation for the Luxury card in the Pricing Section currently says "Transporte privado," which is incorrect.
**New ES:**
```json
"cards": {
  "luxury": {
    "title": "Transportación de Lujo",
    "description": "Eleve el estándar de su viaje con un servicio premium entre el Aeropuerto de Cancún y su complejo turístico. Ideal para grupos de 1 a 5 personas en vehículos tipo Suburban o similares, garantizando distinción y máximo confort.\n\n* Servicio 100% Privado\n* Incluye impuestos y seguro\n* Operativo las 24 horas"
  },
  "private": {
    "title": "Servicio de Taxi (Económico)",
    "description": "Desplácese de forma ágil en unidades totalmente equipadas para un máximo de 3 pasajeros. Rapidez y privacidad garantizada sin esperas.\n\n* Servicio 100% Privado\n* Incluye impuestos y seguro\n* Operativo las 24 horas"
  },
  "group": {
    "title": "Transporte para Grupos",
    "description": "¿Viaja con más de 8 acompañantes? Optimice su presupuesto con nuestro servicio grupal. Disponemos de camionetas amplias con capacidad de hasta 16 personas para que todos viajen juntos y seguros.\n\n* Servicio 100% Privado\n* Incluye impuestos y seguro\n* Operativo las 24 horas"
  }
}
```

## 3. Handling the "Includes" Section Omission
The current `Includes.astro` component uses a global `global.sections.includes.items` list. The new rebranding text requires a specific 7-item list for the private page.

**Proposed Solution:**
Update the `Includes.astro` component to check for a page-specific `items` key first. If it doesn't exist, it will fallback to the global one.

```astro
// Proposed Change to Includes.astro (mental model)
const pageSpecificItems = t(`pages.${contentKey}.includes.items`)
const items = Array.isArray(pageSpecificItems) ? pageSpecificItems : t('global.sections.includes.items')
```

This will allow us to define the specific list in `src/messages/[lang].json` like this:
```json
"includes": {
  "title": "Everything Included in Our Private Transfers:",
  "items": [
    "Expertly Trained Personnel",
    "Real-Time Flight Tracking",
    "Comprehensive Traveler’s Insurance",
    "Personalized Airport Greeting",
    "Complimentary Schedule Adjustments (See terms)",
    "Rigorously Maintained Fleet",
    "24/7 Customer Assistance"
  ]
}
```

## 4. Testimonials and Dates
The rebranding text includes future dates (04/2026). These will be formatted at the end of each review.

**Example JSON snippet for Testimonials:**
```json
"item1": {
  "name": "Robert D.",
  "text": "I booked the private shuttle to Tulum and was thoroughly impressed by the driver’s punctuality and professional demeanor.\n\n**04/2026 - Robert D.**"
}
```

## 5. Pricing Table Update
The `PrivateDetails.astro` component renders a pricing table. The new prices are **$29.99 USD One Way / $59.99 USD Round Trip**. These will be updated in the `privateDetails.table.rows` in both EN and ES files.
- **Capacity label:** Use "Hasta 8 pax" instead of "Hasta 8 pasajeros" to match the doc.
