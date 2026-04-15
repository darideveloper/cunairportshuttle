## 1. Research & Baseline
- [x] 1.1 Verify all missing keys by running `npm run build` or the validation script <!-- id: verify-missing -->

## 2. Content Updates
- [x] 2.1 Add missing `imageAlt` and `imageTitle` for `tulum` in `en.json` and `es.json` <!-- id: update-tulum -->
- [x] 2.2 Add missing `imageAlt` and `imageTitle` for `playa` in `en.json` and `es.json` <!-- id: update-playa -->
- [x] 2.3 Add missing `imageAlt` and `imageTitle` for `cancun` in `en.json` and `es.json` <!-- id: update-cancun -->

## 3. Validation Tooling
- [x] 3.1 Enhance `scripts/validate-i18n.ts` to include a key-check against a baseline of mandatory keys <!-- id: enhance-validator -->
- [x] 3.2 Ensure `scripts/validate-i18n.ts` fails correctly when a required key is missing in any language <!-- id: fail-correctly -->

## 4. Project Setup
- [x] 4.1 Update `package.json` to include validation in the `dev` script or as a pre-dev check if appropriate <!-- id: update-package-json -->
- [x] 4.2 Update `openspec/project.md` to include Translation Integrity in the Testing Strategy section <!-- id: update-project-md -->

## 5. Verification
- [x] 5.1 Run `npm run validate-i18n` and ensure it passes <!-- id: verify-i18n -->
- [x] 5.2 Run `npm run build` and ensure no `[i18n] Missing translation key` warnings appear in the logs <!-- id: verify-build-logs -->
