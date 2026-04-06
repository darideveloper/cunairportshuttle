# privacy-policy Specification

## Purpose
TBD - created by archiving change add-privacy-policy. Update Purpose after archive.
## Requirements
### Requirement: Display Privacy Policy
The system MUST display the Privacy Policy content in the requested language.

#### Scenario: User views English Privacy Policy
Given a user is on the English version of the site
When they navigate to the Privacy Policy page
Then they see the "Privacy Policy" content in English
And the page uses the standard Legal Layout

#### Scenario: User views Spanish Privacy Policy
Given a user is on the Spanish version of the site
When they navigate to the Privacy Policy page
Then they see the "Aviso de Privacidad" content in Spanish
And the page uses the standard Legal Layout

### Requirement: Updated Legal Sections
The Privacy Policy MUST include the 2026 updated sections regarding third-party payment processing and ARCO rights.

#### Scenario: English Payment Security Details
Given the user views the English Privacy Policy
Then it MUST explicitly mention "Openpay" (with 3D Secure) and "PayPal"
And it MUST state that CVV codes are not stored on Cun Airport Shuttle servers.

#### Scenario: Spanish ARCO Rights Details
Given the user views the Spanish Privacy Policy
Then it MUST include a section for "Ejercicio de Derechos ARCO"
And it MUST provide the email address `bookings@gotransfers.us` for requests.

### Requirement: Updated Publication Date
The Privacy Policy MUST display the latest update date.

#### Scenario: Last Updated Visibility
Given the English or Spanish Privacy Policy content
Then the text "April 2026" or "Abril 2026" MUST be clearly visible at the top of the article.

