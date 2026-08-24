# Page Audit Checklist

Complete this checklist for every physical page. Visual inspection of both the exact PDF page and rendered HTML is mandatory.

## Identification

- [ ] Printed/front-matter number, physical PDF page, and HTML filename are correctly mapped.
- [ ] Exact PDF page is rendered at readable resolution.
- [ ] Correct HTML page is open in the in-app browser with a fresh cache token.

## Top-to-bottom comparison

- [ ] Canvas, green side treatment, inner rules, and top spacing match.
- [ ] Titles/headings match in wording, size, weight, colour, alignment, and wrapping.
- [ ] Every paragraph matches exact wording, punctuation, emphasis, indentation, justification, wrapping, and line height.
- [ ] Every activity/experiment/project/introduction/think panel matches type, dimensions, fill, border, corners, label, padding, and spacing.
- [ ] Numbered items and wrapped continuations align correctly.
- [ ] Tables match rows, columns, widths, fills, borders, weights, and alignment.
- [ ] Notation and code text are complete and correctly aligned.
- [ ] Genuine images use the correct crop, scale, colour, transparency, labels, and placement.
- [ ] Figure numbers/captions match bold/italic styling and position.
- [ ] Final content ends at the source position without artificial stretching or compression.
- [ ] Footer rule, badge, numeral, and bottom clearance match.

## Technical verification

- [ ] No horizontal or vertical page-canvas overflow.
- [ ] No unintended inputs, textareas, submit controls, or duplicate labels.
- [ ] No missing image/font/media requests or console errors caused by page changes.
- [ ] Computed font family, size, line height, dimensions, and key colours are recorded where needed.
- [ ] Reader controls and sign-language overlay do not alter the book page layout.
- [ ] Shared changes are regression-checked on earlier representative pages.

## Completion record

Add a `verified` row to `PROGRESS.md` only after every applicable item passes. Otherwise mark the page `needs review` and describe the exact uncertainty.

## Pages 1–20 audit — 2026-08-23

Superseded by the completed full-book regression below; the historical rows are retained as a record of the issues found before remediation.

## Full-book completion — 2026-08-24

- Physical pages 1–88 were compared with the original PDF page renders and corrected in place.
- Inner pages use one reusable canvas, gradient treatment and footer; the cover remains the intentional exception.
- The final automated browser regression reports zero horizontal or vertical canvas overflow on all 88 pages.
- Dense image, activity, revision and glossary pages use reusable template constraints plus narrowly scoped source-page exceptions.
- The cover uses a clean re-extracted asset and no page contains a watermark.
- The missing optional glossary payload was restored as valid empty JSON, eliminating the repeated runtime 404.

All rows below were compared against direct 96-DPI renders of the original PDF TrimBox. `Overflow` is the rendered section scroll height minus the fixed 945 px canvas; it identifies content that is currently clipped and therefore cannot pass.

| Physical page | Printed page | Status | Overflow | Primary finding/action |
|---:|---:|---|---:|---|
| 1 | cover | needs final visual pass | 0 | Cover title, certificate crop and PDF watermark corrected; recheck exact title weight/position. |
| 2 | ii | needs final visual pass | 0 | Copyright blocks repositioned to measured PDF coordinates; shared footer aligned. |
| 3 | iii | needs final visual pass | 0 | Contents measure changed to 514 px and row typography/indentation corrected. |
| 4 | iv | needs final visual pass | 0 | Contents continuation measure and top position corrected; chapter-label split colour remains to check. |
| 5 | v | needs final visual pass | 0 | Header/content measure, credit columns, signature scale and duplicate footer corrected. |
| 6 | vi | needs final visual pass | 0 | Introduction header and QR code reduced to source scale; publisher placement corrected. |
| 7 | 1 | needs remediation | 47 px | Chapter tab and Think component corrected, but page content still exceeds the source canvas. |
| 8 | 2 | needs remediation | 117 px | Exercise and activity panels are too tall. |
| 9 | 3 | needs remediation | 93 px | Digestive diagram/text stack requires vertical compaction and source crop check. |
| 10 | 4 | needs remediation | 42 px | Body spacing remains too tall. |
| 11 | 5 | needs remediation | 208 px | Activity 3 and Exercise 2 panels require major compaction. |
| 12 | 6 | needs remediation | 122 px | Disorder paragraphs and heading gaps are too tall. |
| 13 | 7 | needs remediation | 22 px | Shared-canvas width bug fixed; small remaining vertical overrun. |
| 14 | 8 | needs remediation | 211 px | Activity 5 and revision panel require source-sized padding/line heights. |
| 15 | 9 | needs remediation | 425 px | Revision continuation is substantially too tall and clipped. |
| 16 | 10 | needs final visual pass | 0 | Canvas-width bug and glossary columns fixed; row spacing compacted to source pattern. |
| 17 | 11 | needs remediation | 65 px | Chapter opener/intro/Think system corrected; remaining lower-content overrun. |
| 18 | 12 | needs remediation | 72 px | Plant figure and seed-germination text need vertical compaction. |
| 19 | 13 | needs remediation | 33 px | Experiment panel has a small vertical overrun. |
| 20 | 14 | needs remediation | 50 px | Table spacing/title size corrected; diagram block still ends too low. |
