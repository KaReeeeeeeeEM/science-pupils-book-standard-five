# Conversion Progress

## Current state

- Conversion classification: existing conversion needing improvement
- Discovery completed: yes
- Existing structure being reused: 88 page HTML files, ADT runtime/navigation, manifests, localisation/audio/video mappings, local fonts, images, accessibility controls, and GitHub Pages static setup
- Current page: physical 88 / printed page 82 / `pg088_sec001.html`
- Current preview URL: `http://127.0.0.1:4174/pg088_sec001.html`
- Next action: user review of the completed 88-page fidelity pass
- Audit authority: original science PDF; repository is implementation destination only
- Viewer-shell reference: Hisabati site for canvas/scaling/workspace/control placement only

## Page status

| Printed/front matter | Physical page | HTML file | Status | Changes and verification notes |
|---|---:|---|---|---|
| cover | 1 | `index.html` | verified | Clean, uncropped cover asset; no watermark; cover is the shared-shell exception. |
| title/copyright/front matter | 2-6 | `pg002_sec001.html`-`pg006_sec001.html` | verified | Front matter and contents use measured typography, spacing, colours and roman footers. |
| 1-82 | 7-88 | `pg007_sec001.html`-`pg088_sec001.html` | verified | Compared against PDF renders; shared components and dense-page exceptions applied. Full browser regression reports zero canvas overflow. |

## Newly confirmed guide rules

- Numbered mapping is `physical = printed + 6`.
- Standard numbered pages use green feathered side bands and a centred green hexagonal footer badge.
- Activity panels use magenta/pale pink; experiment panels use green/pale green.
- Reusable shell implemented in `assets/book-layout.js` and `assets/book-fidelity.css`; it is loaded through existing shared assets so all 88 pages inherit it.
- Browser verification passed across physical pages 1-88: one shared shell/footer on inner pages, correct numbering, 665.2 × 944.88 canvas, Arial/Helvetica book typography, and zero page-canvas overflow.
- Legacy page-local gradient/footer copies are suppressed by the shared component rather than manually restyled page by page.

## Known risks and unresolved items

- The working copy is stored in an iCloud-managed folder and many checked-out files and the Git pack are marked `dataless`; reads may block while macOS downloads them. Do not treat a read timeout as file absence or corruption.
- The reader's fixed navigation and sign-language overlay can cover the page in screenshots; verification must distinguish interface chrome from book content.
- Future corrections requested during user review should preserve the shared canvas, live measure, base font, gradients, footer, and stable ADT IDs.

## Handoff prompt

> Continue from the first non-verified row. Read all seven guides, render the exact physical PDF page, compare its existing HTML top to bottom in the in-app browser, preserve the ADT architecture and stable IDs, and do not advance until the page passes `PAGE_AUDIT.md`.
