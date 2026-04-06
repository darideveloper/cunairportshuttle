---
change-id: fix-i18n-sync-missing-keys
title: Fix i18n synchronization missing keys
description: Synchronize en.json and es.json translation files by adding missing keys identified during the build process.
status: implemented
---

# Proposal: Fix i18n synchronization missing keys

## Why
The build process failed because the i18n validation script detected that `en.json` and `es.json` were out of sync. Maintaining parity between translation files is critical for ensuring a consistent user experience across different languages and preventing build failures in the CI/CD pipeline.

## What Changes
- Synchronized `src/messages/en.json` and `src/messages/es.json` by adding missing keys.
- Cleaned up duplicated and incomplete keys in `src/messages/es.json`.
- Formalized i18n consistency as a permanent requirement in the project specifications.
- Verified synchronization using `npm run validate-i18n`.

## Proposed Solution
- Update `src/messages/es.json` with translations for keys present only in `en.json`.
- Update `src/messages/en.json` with content for keys present only in `es.json`.
- **Formalize i18n consistency**: Establish a global requirement that all translation files must maintain 100% key parity, enforced by the existing validation tooling.
- Verify synchronization using the `npm run validate-i18n` command.

## Key Changes
- **es.json**: Add missing keys for menubar, reliable service, and specific destination page elements (Playa, Tulum, Destinations).
- **en.json**: Add missing FAQ description for the Playa page.
- **Global Specs**: Add a new requirement to ensure future changes maintain this consistency.
