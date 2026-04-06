# Design: Privacy Policy Content Structure

## Overview
The Privacy Policy is rendered using the `LegalPage` component within a `LegalLayout`.

## Metadata and Hierarchy
- **Title (H1)**: Defined in MDX frontmatter (`title`) and JSON messages (`pages.privacy.title`). The `LegalLayout` renders this in the blue header.
- **Subtitle/Description**: Defined in MDX frontmatter (`description`) and JSON messages (`pages.privacy.description`). The `LegalLayout` renders this below the title.
- **Keywords**: Defined in JSON messages (`pages.privacy.keywords`). Requires a fix in `LegalLayout.astro` to pass `currentPage` to `BaseSEO`.

## Content Mapping

### English
- **Title**: Privacy Policy | Cun Airport Shuttle
- **Description**: Updated privacy notice regarding data collection, payment security via Openpay and PayPal, and ARCO rights compliance.
- **Body Structure**:
    - **Last Updated: April 2026** (Intro text)
    - `## 1. What Information Do We Collect?`
    - `## 2. How Do We Process Your Payments?`
    - `## 3. Use of the Requested Information`
    - `## 4. Data Transfer (National and International)`
    - `## 5. Cookies and Third-Party Tools`
    - `## 6. Exercise of ARCO Rights (Access, Rectification, Cancellation, Opposition)`
    - `## 7. Changes to This Privacy Notice`
    - `### Contact & Support` (Footer info)

### Spanish
- **Title**: Política de Privacidad | Cun Airport Shuttle
- **Description**: Aviso de privacidad actualizado sobre recopilación de datos, seguridad de pagos mediante Openpay y PayPal, y cumplimiento de derechos ARCO.
- **Body Structure**:
    - **Última actualización: Abril 2026** (Intro text)
    - `## 1. ¿Qué información recolectamos?`
    - `## 2. ¿Cómo procesamos sus pagos?`
    - `## 3. ¿Para qué utilizamos su información?`
    - `## 4. Transferencia de Datos (Nacional e Internacional)`
    - `## 5. Cookies y Herramientas de Terceros`
    - `## 6. Ejercicio de Derechos ARCO (Acceso, Rectificación, Cancelación, Opposition)`
    - `## 7. Cambios a este Aviso de Privacidad`
    - `### Contacto y Soporte` (Footer info)

## Implementation Details
- **Avoid Double H1s**: The MDX content must NOT include a `#` header, as the title is already rendered as an H1 by the layout.
- **SEO Fix**: Update `src/layouts/LegalLayout.astro` to ensure `BaseSEO` receives the `currentPage` prop.
