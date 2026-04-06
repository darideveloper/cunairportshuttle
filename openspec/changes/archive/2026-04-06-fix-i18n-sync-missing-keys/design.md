## Design: i18n Sync Fix

This change addresses a critical build failure caused by missing keys in translation files and establishes a long-term consistency requirement. The implementation involves:

1.  **Extracting source content**: Identifies values for missing keys in their respective files.
2.  **Generating translations**: Creates Spanish translations for keys missing in `es.json` while maintaining project branding.
3.  **Applying changes**: Updates `src/messages/en.json` and `src/messages/es.json`.
4.  **Enforcing Parity**: Formalizes that any future addition to one translation file must have an equivalent key in all other supported languages.
5.  **Verification**: Using project tooling (`validate-i18n`) to confirm a successful fix and ensure the build script remains a "gatekeeper" for synchronization.

## Code Changes Required

### Update `src/messages/es.json`
Add the following keys:
- `global.menubar.myReservation`: "Mi reservación"
- `global.sections.reliableService.imageAlt`: "Más de 10 años de experiencia"
- `pages.playa.safeTrip.imageAlt`: "Cancun Airport Shuttle por Go Transfers"
- `pages.playa.reliableService.imageAlt`: "Cancun Airport Shuttle por Go Transfers"
- `pages.playa.faq.items.placesToVisit.question`: "¿Qué lugares puedo visitar en Playa del Carmen con un shuttle de Cancún a Playa del Carmen?"
- `pages.playa.faq.items.placesToVisit.answer`: "Un shuttle puede llevarte a varias atracciones en y alrededor de Playa del Carmen, incluyendo la vibrante Quinta Avenida para compras y cenas, eco-parques como Xcaret y Xel-Há, y cenotes cercanos para nadar y hacer snorkel. También puedes visitar sitios históricos como las ruinas de Tulum, que están a una hora de distancia."
- `pages.tulum.destinations.cards.playa.imageAlt`: "Transportación de Cancún al Aeropuerto de Tulum"
- `pages.tulum.destinations.cards.playa.imageTitle`: "Transportación de Cancún al Aeropuerto de Tulum"
- `pages.tulum.destinations.cards.cancun.imageAlt`: "website.home.destination"
- `pages.tulum.destinations.cards.cancun.imageTitle`: "website.home.destination"
- `pages.destinations.testimonials.items.item2.name`: "Miguel R." (Wait, item2 in `en.json` is Lisa K.) -> Update name: "Lisa K."
- `pages.destinations.testimonials.items.item2.text`: "¡Reservamos el transporte a Playa del Carmen y no pudimos estar más contentos! El conductor nos dio excelentes consejos sobre restaurantes y playas locales. El precio fue justo y el servicio excepcional. Definitivamente los usaremos de nuevo en nuestra próxima visita."
- `pages.destinations.testimonials.items.item2.imageAlt`: "Comentarios de nuestra cliente Lisa K."
- `pages.destinations.testimonials.items.item2.imageTitle`: "Comentarios de nuestra cliente Lisa K."
- `pages.destinations.testimonials.items.item2.stars`: "5"

### Update `src/messages/en.json`
Add the following key:
- `pages.playa.faq.description`: "We help you clear your doubts about our transportation services"
