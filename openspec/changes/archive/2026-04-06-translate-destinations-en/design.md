# Design: Missing English translations in the destinations page

The design decision is to provide accurate translations in the `src/messages/en.json` file.
Since the logic is already in place to read these keys, the only missing part is the content.

## Implementation details
- File: `src/messages/en.json`
- Translation path: `pages.destinations.destinations.cards`
- Keys to be updated:
    - `tulum.description`
    - `playa.description`
    - `cancun.description`
