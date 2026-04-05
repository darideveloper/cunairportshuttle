# Design: Spanish Home Page Rebranding

This document outlines the strategy for updating the Spanish translation keys in `src/messages/es.json` to match the new branding provided in the reference HTML.

## Strategy
We will perform surgical updates to specific keys within `src/messages/es.json`. No changes to the `Astro` or `React` component code are required.

### Key Mappings and Changes

#### 1. Hero Section (`pages.home`)
- **Key**: `bannerTitle`
  - Current: "Transporte Cancún Aeropuerto"
  - New: "Transporte Privado en el aeropuerto de Cancún"
- *Note: `bannerAlt` and `bannerImageTitle` are ignored per user instructions.*

#### 2. Safe Trip Section (`global.sections.safeTrip`)
- **Key**: `title`
  - Current: "Viaja seguro y reserva con Cancun Airport Shuttle by Go Transfers"
  - New: "Viaje seguro y reserva con Cancun Airport Shuttle"
- **Key**: `text`
  - New: "¿Estás listo para empezar a disfrutar de tus vacaciones en Cancún? ¿No te olvidas de algo? ¡Claro que sí! Todavía no has reservado tu servicio de transporte privado en Cancún y la Riviera Maya.\n\nPero aún está a tiempo de hacerlo. Aún estás a tiempo de reservar tu servicio de transporte privado, transporte de lujo o transporte para grupos, para que no tengas que preocuparte por nada más que esperar el día de tu vuelo y ser recibido de manera cordial, amable y cálida por nuestro equipo de choferes de Cancún Airport Shuttle.\n\nTenemos más de 15 años de experiencia operando servicios de transporte, y estamos comprometidos a proporcionar un transporte seguro y confiable a cada uno de nuestros clientes.\n\nNuestros choferes están siempre en capacitación para brindar un servicio de primera, no esperes más y reserva. Reserve ahora con Cun Airport Shuttle y Go Transfers."

#### 3. Banner CTA (`pages.home.bannerCta`)
- **Key**: `title`
  - Current: "Transportación Aeropuerto Cancun"
  - New: "Traslado Aeropuerto Cancún"
- **Key**: `text`
  - New: "Ofrecemos servicios de transporte desde y hacia su hotel, condominio o casa en cualquier destino dentro de Cancún o la Riviera Maya, si usted necesita un traslado de ida o de ida y vuelta.\n\nA pesar de nuestro nombre, Cancun Airport Shuttle, ofrecemos mucho más que traslados desde el Aeropuerto de Cancún."

#### 4. Pricing Cards (`pages.home.pricing.cards`)
Update descriptions to match HTML phrasing:
- **Luxury**: "Lleve su experiencia de traslado a otro nivel desde y hacia el aeropuerto de Cancún a su hotel en Cancún o la Riviera Maya con nuestro servicio de traslado de lujo. Un servicio para 1 a 5 pasajeros en una Suburban o unidad similar."
- **Private**: "Nuestro servicio de traslado y transportación privada es uno de los más solicitados y económicos en Cancún y la Riviera Maya. Un servicio con capacidad de 1 a 8 personas en una unidad amplia, climatizada, segura y limpia."
- **Group**: "¿Viaja con un grupo de más de 8 pasajeros? Entonces no pague más y reserve con nosotros nuestro servicio de traslado para grupos, un servicio con capacidad para transportar hasta 16 pasajeros y viajar todos cómodamente y seguros en nuestras unidades."

#### 5. Destinations (`pages.home.destinations`)
- **Key**: `title`
  - New: "Transporte desde el aeropuerto de Cancún a los principales destinos de la Riviera Maya"
- **Key**: `text`
  - New: "La Riviera Maya es una extensión costera que abarca más de 250 km de longitud y entre ellos se encuentra la popular ciudad de Cancún, pero no sólo esta ciudad: También podemos encontrar la ciudad de Playa del Carmen, Isla Mujeres, Cozumel, Tulum, y varias más."
- **Cards (`cards`)**:
  - **Tulum Title**: "Transporte del Aeropuerto de Cancún a Tulum"
  - **Tulum Description**: "Tulum es una de las ciudades que forman parte de la Riviera Maya y se encuentra a casi 2 horas en coche de Cancún. Una ciudad que destaca por sus playas, sitios arqueológicos e increíbles hoteles en la selva."
  - **Playa Title**: "Transportación del Aeropuerto de Cancún a Playa del Carmen"
  - **Playa Description**: "Nuestro servicio de traslado y taxi puede llevarte a cualquier hotel, casa vacacional o Airbnb en Playa del Carmen, considerada el corazón de la Riviera Maya. ¡La diversión estará a la vuelta de la esquina!"
  - **Cancun Title**: "Transportación del Aeropuerto de Cancún a la Zona Hotelera de Cancún"
  - **Cancun Description**: "La zona hotelera de Cancún es el destino más popular de la ciudad y sus hoteles de 4 y 5 estrellas te darán la mejor vista del Mar Caribe y la mejor experiencia vacacional que puedas imaginar."

#### 6. Why Choose Us (`global.sections.whyChooseUs`)
- **Key**: `title`
  - New: "¿Por qué usar Cancun Airport Shuttle?"
- **Key**: `text`
  - New: "¿Por qué reservar con Cancun Airport Shuttle? Hay muchas empresas de traslados en la ciudad de Cancún y es justo preguntarse por qué elegirnos a nosotros.\n\nNosotros \"Cancun Airport Shuttle\" sabemos que lo último que quieres es esperar más de lo necesario en el aeropuerto de Cancún para llegar a tu hotel y empezar a disfrutar de tus vacaciones, sabemos que llegas cansado de un vuelo de 2 horas o más y lo último que quieres es lidiar con filas para abordar un taxi o esperar casi una hora para abordar un transporte público y ser interrumpido por el ruido y movimientos de otros pasajeros.\n\nAdemás, sabemos que no quiere gastar más de lo necesario y por eso nuestro servicio de traslados es para usted: Tenemos precios más bajos que la competencia, un servicio de primera y nuestra misión siempre será que disfrutes al máximo de tus vacaciones. Por eso y mucho más tiene que elegirnos."

#### 7. Rates Table (`global.ratesTable`)
- **Key**: `title`
  - New: "Precios de Traslados en los principales de Riviera Maya"
- **Key**: `description`
  - New: "Shuttle Service Prices by Destinations"

#### 8. Reliable Service (`global.sections.reliableService`)
- **Key**: `title`
  - New: "Cancun Airport Shuttle, la empresa favorita en Cancún"
- **Key**: `description`
  - New: "Disfrute de un servicio de transporte confiable, preparado para llevarlo a su destino deseado dentro de Cancún y la Riviera Maya. Ya sea un hotel, resort, aeropuerto, parque temático o sitio arqueológico, si está en el mapa, considere que nuestro equipo de confianza se encargará de ello.\n\nNuestros vehículos están equipados para garantizar su comodidad, mientras que nuestros conductores cualificados cuentan con experiencia y una mentalidad orientada al servicio.\n\nComo empresa de transporte autorizada, disponemos de todos los permisos necesarios para operar sin problemas dentro de las instalaciones del aeropuerto."

#### 9. FAQs (`pages.home.faq`)
- **Key**: `title`
  - New: "Transporte Cancún Aeropuerto - Faqs"
- **Items (`items`)**:
  - Update all questions and answers to match HTML reference (e.g., changing "vans privadas" to "camionetas privadas", mentioning "Crafters").

#### 10. Transportation Services (`pages.home.transportationServices`)
- **Key**: `title`
  - New: "Servicios de Traslado del Aeropuerto de Cancún"
- **Items (`items`)**:
  - **airportToHotel Text**: "¿Visita el Caribe y necesita transporte a su hotel o de regreso al aeropuerto? Este servicio es perfecto para usted."
  - **hotelToHotel Text**: "¿Necesita cambiar de hotel durante su estancia en Cancún? Lo tenemos cubierto con nuestro servicio de transporte de hotel a hotel."
  - **hotelToRestaurant Text**: "Cuando está de vacaciones, lo último de lo que quiere preocuparse es de conducir, especialmente si planea disfrutar de unas copas. Deje que le llevemos al restaurante y de vuelta al hotel de forma segura."
  - **hotelToPark Text**: "¿Planea visitar Xcaret, Xel-Ha, Xoximilco, o el Museo Maya de Cancún? Cancun Airport Shuttle puede llevarte a cualquiera de estos increíbles parques."

#### 11. Locations (`global.locations`)
- **Key**: `title`
  - New: "Information about Cancun Airport Transportation Location"

#### 12. Stats (`global.sections.bannerStats`)
- **Key**: `stats.transportation.imageAlt` and `imageTitle`
  - Current: "19,517"
  - New: "21,517"

## Architecture
- **Single Source of Truth**: `es.json` remains the source for all Spanish strings.
- **Key Preservation**: All existing keys are preserved.
