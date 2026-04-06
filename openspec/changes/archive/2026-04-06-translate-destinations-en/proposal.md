---
id: translate-destinations-en
title: Translate Missing Destination Card Descriptions
description: Add missing English translations for the destination cards in the main destinations page within the English translation file.
status: implemented
author: Gemini CLI
---

# Proposal: Translate Missing Destination Card Descriptions

## Problem Statement
The English version of the main destinations page is missing descriptions for the destination cards (Tulum, Playa del Carmen, and Cancun Hotel Zone). These descriptions are already present in the Spanish translation file but are represented as empty strings in the English version.

## Proposed Solution
Translate the existing Spanish descriptions for the destination cards in `src/messages/es.json` into English and update `src/messages/en.json` at the path `pages.destinations.destinations.cards`.

Specifically:
- Translate the Tulum description.
- Translate the Playa del Carmen description.
- Translate the Cancun Hotel Zone description.

## Goals
- Provide a consistent experience for English-speaking users.
- Ensure all cards on the destinations page have their respective descriptions.

## Non-Goals
- Modifying the UI components.
- Updating other translation keys not related to the destination cards in this specific section.
- Translating any other page's destination cards (unless they are found to be missing as well).

## Verification Plan
1.  **Manual Check:** Compare `src/messages/en.json` with the proposed translations.
2.  **UI Check:** Verify the destinations page in the English version of the site once the changes are applied.
3.  **JSON Validation:** Ensure the modified `en.json` remains a valid JSON file.
