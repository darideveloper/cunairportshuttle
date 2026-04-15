# Design: Translation Integrity and Automated Validation

## Context
The project uses a JSON-based translation system (`src/messages/`). The `t()` function in `src/lib/i18n/utils.ts` handles translation lookups and logs warnings in development mode when a key is missing. However, these warnings do not block the build or CI pipeline, which has led to missing translations in production.

## Goals
- Ensure that all translation keys being used in critical components (like the Destinations section) are present in all supported languages.
- Provide a clear, automated failure mechanism to prevent regressions.
- Keep the validation process fast and easy to maintain.

## Decisions

### Decision: Enhanced Validation Script
Update `scripts/validate-i18n.ts` to include:
1. **Sync Check**: Current behavior (ensures `en` and `es` have the same keys).
2. **Key Check**: Check that all keys defined in a "Required Keys" list (initially `pages.home.destinations.cards`) are present in both files.

### Decision: CI/CD Integration
Ensure that `npm run validate-i18n` is a mandatory step in:
1. `npm run build` (already present, but now more robust).
2. The deployment pipeline.

### Decision: Future Key Discovery
While a full codebase scan for `t()` calls is complex due to dynamic keys (e.g., `t(\`pages.${page}.title\`)`), we will implement a simple regex-based scan for static keys as an optional future enhancement to catch low-hanging fruit.

## Risks / Trade-offs
- **Maintenance Burden**: If a new "mandatory" section is added, it must be added to the validation script if we use an explicit list.
- **Dynamic Keys**: We cannot easily validate dynamic keys without runtime analysis. We will rely on manual verification and comprehensive translation files to mitigate this.

## Open Questions
- Should we fail the `dev` server build on missing translations? (Decision: No, stay as warning in dev to avoid friction, but fail in production builds).
