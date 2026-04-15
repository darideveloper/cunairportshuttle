# Change: Update Destination Translations and Validation Setup

## Why
The English translation file (`en.json`) is missing critical image metadata (`imageAlt`, `imageTitle`) for destination cards on the home page, causing runtime warnings and poor SEO/accessibility. Additionally, there is no automated check to ensure that all keys used in the codebase are present in the translation files, which leads to similar regressions.

## What Changes
- **Translation Updates**: Add missing `imageAlt` and `imageTitle` keys for `tulum`, `playa`, and `cancun` destination cards in both `en.json` and `es.json`.
- **Validation Enhancement**: Update `scripts/validate-i18n.ts` to include a check for key presence (not just sync) and potentially a basic scan for used keys.
- **Project Setup**: Integrate translation validation into the project's standard development and CI workflows.
- **OpenSpec Standards**: Update `translation-system` spec to include a requirement for automated validation.

## Impact
- Affected specs: `specs/translations/spec.md`, `specs/translation-system/spec.md`
- Affected code: `src/messages/en.json`, `src/messages/es.json`, `scripts/validate-i18n.ts`, `package.json`
