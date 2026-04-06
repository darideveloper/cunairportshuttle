# Capability: i18n Consistency & Build Validation

## ADDED Requirements

### Requirement: Mandatory Key Parity
All translation files (`src/messages/en.json`, `src/messages/es.json`) MUST maintain 100% key parity at all times.

#### Scenario: Adding a new key to one file
- **Given** a new translation key is added to `en.json`
- **When** the developer runs the validation script or build
- **Then** the build MUST fail until the same key (even if empty or in English as a placeholder) is added to `es.json`.

### Requirement: Automated Validation in Build
The `npm run build` command MUST always include the i18n validation step to prevent out-of-sync files from reaching production.

#### Scenario: Running the build process
- **When** the developer runs `npm run build`
- **Then** `npm run validate-i18n` must be executed first.
- **And** if validation fails, the build process must terminate immediately with exit code 1.
