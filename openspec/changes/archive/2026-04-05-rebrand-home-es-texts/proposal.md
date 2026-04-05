---
change-id: rebrand-home-es-texts
title: Actualizar textos de la página de inicio en español
status: proposal
author: Gemini CLI
---

# Proposal: Rebrand Home Page Spanish Texts

Update the visible texts on the Spanish home page (`/es`) to align with the new branding provided in the reference HTML. This update focuses on the hero section, safe trip section, banner CTA, pricing section, destinations, why choose us, rates table, and FAQs, specifically within the `es.json` translation file.

## Problem
The current Spanish texts on the home page do not match the updated branding and marketing language provided in the latest reference HTML. Discrepancies include company experience (10 vs 15 years), specific service descriptions, and section headings.

## Solution
Surgically update the `src/messages/es.json` file to replace old text strings with the new branding values. This will be done while preserving existing translation keys and without affecting other languages or pages.

## Scope
- **Translation File**: `src/messages/es.json`
- **Sections**:
  - `pages.home`: Hero, Banner CTA texts, Destinations, Pricing card descriptions, Transportation services, FAQs.
  - `global.sections`: Safe Trip, Why Choose Us, Reliable Service, Banner Stats headings.
  - `global.ratesTable`: Title and description only.
  - `global.locations`: Title and transportation times title.

### Out of Scope
- Updates to English (`en.json`) or any other language.
- Updates to the Booking Form (`global.booking`).
- Updates to the Testimonials section (`pages.home.testimonials`).
- Updates to the Rates Table prices (numeric data).
- Changes to the React or Astro component logic/structure.

## Impact
- **Consistency**: Ensures the Spanish home page reflects the latest brand voice.
- **Trust**: Corrects outdated information (e.g., years of experience).
- **SEO**: Updates meta titles and descriptions to match the new H1 and primary keywords.
