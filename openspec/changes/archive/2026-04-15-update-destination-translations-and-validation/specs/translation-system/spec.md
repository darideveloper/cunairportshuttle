## ADDED Requirements
### Requirement: Automated Translation Validation
The translation system MUST include an automated check to ensure that `en.json` and `es.json` remain in sync and that all mandatory keys are present.

#### Scenario: Pre-deployment Validation
- **GIVEN** a modified translation file or codebase
- **WHEN** the validation script `npm run validate-i18n` is executed
- **THEN** it MUST fail with a non-zero exit code if:
    - Any key present in `en.json` is missing from `es.json`
    - Any key present in `es.json` is missing from `en.json`
    - Any critical key required by the core application logic is missing from any language file.
