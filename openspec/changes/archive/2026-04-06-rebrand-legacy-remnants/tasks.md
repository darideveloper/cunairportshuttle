## 1. Rebrand Translation Files
- [x] 1.1 Update `locations.title` in `src/messages/es.json` (Line 277)
- [x] 1.2 Update `destinations.title` in `src/messages/es.json` (Line 1682)
- [x] 1.3 Update `destinations.destinations.title` in `src/messages/es.json` (Line 1686)
- [x] 1.4 Run `grep -i "Cancun Airport Transportation" src/messages/es.json` to confirm its absence

## 2. Rebrand Legal Content
- [x] 2.1 Update `description` field in `src/content/legal/es/terms-and-conditions.mdx` (Line 3)
- [x] 2.2 Verify "Caribbean Transfers" remains intact in `src/content/legal/es/terms-and-conditions.mdx` (Lines 49, 58, 59, 104, 110)

## 3. Final Verification
- [x] 3.1 Run project-wide search for "Cancun Airport Transportation" (excluding `site-config.ts` and `openspec/`)
- [x] 3.2 Confirm zero matches for "Cancun Airport Transportation" in active code and content
- [x] 3.3 Confirm "Caribbean Transfers" is still present in `src/content/legal/` as the legal entity
