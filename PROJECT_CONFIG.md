# Project Configuration

## Conversion state

- Classification: `existing conversion needing improvement`
- Evidence: 88 physical PDF pages; `index.html` plus `pg002_sec001.html` through `pg088_sec001.html`; shared ADT runtime, manifests, local fonts, 86 book images, navigation and sign-language assets; working local preview.
- Existing implementation to preserve: root page HTML files, `images/`, `assets/`, `content/`, `videos/`, `cover.png`, `imsmanifest.xml`, `.nojekyll`, ADT navigation/accessibility runtime and all localisation/media mappings.
- Missing implementation: no pages are missing; fidelity audit and page-specific repairs remain.
- Canonical existing pages: candidates must be confirmed page by page; physical page 7 preserves the correct content hierarchy but is not yet fidelity-approved.
- Known broken ranges: all 88 pages remain unaudited; physical page 7 has confirmed scale, spacing, component-shape, and colour mismatches.

## Book

- Book title: Science Pupil's Book Standard Five
- Original PDF: `/Users/kareem/Documents/SCIENCE STD 5 SB/SCIENCE STD 5 PB.pdf`
- Repository root: `/Users/kareem/Documents/ChatGPT/Science Pupil's Book Standard Five`
- Output/page directory: repository root
- Images directory: `images/`

## Page mapping

- Physical PDF and HTML page numbers match.
- Front matter: physical pages 1-6; `index.html` represents physical page 1 and `pg002_sec001.html` through `pg006_sec001.html` represent physical pages 2-6.
- Numbered-content offset: `physical page = printed page + 6`.
- First numbered content page: printed 1 / physical 7 / `pg007_sec001.html`.
- Last numbered content page: printed 82 / physical 88 / `pg088_sec001.html`.
- HTML naming pattern: physical page 1 is `index.html`; pages 2-88 are `pgNNN_sec001.html`.

## Local preview

- Start command: `python3 -m http.server 4174 --bind 127.0.0.1`
- Preview base URL: `http://127.0.0.1:4174/`
- Cache-busting pattern: `?audit=physical-PAGE-rREVISION`
- Viewer-shell reference: `http://reelma.me/hisabati-kitabu-cha-mwanafunzi-darasa-la-3/index.html` (canvas/scaling/workspace/control placement only)

## Shared implementation files

- Compiled stylesheet: `content/tailwind_output.css`
- Font stylesheet: `assets/fonts.css`
- Local fonts: `assets/fonts/`
- Reader runtime: `assets/base.bundle.local.js` (preserve); `assets/base.bundle.min.js` also exists.
- Activity/runtime additions: `assets/activities.bundle.local.js`, `assets/auto-fit.js`, `assets/offline-preloader.js`, `assets/scorm.js`.
- Book configuration and reading order: `assets/config.json`, `content/pages.json`, `content/toc.json`.

## Validation commands

```bash
git diff --check
node --check assets/auto-fit.js
node --check assets/offline-preloader.js
node --check assets/scorm.js
```

## Deployment

- Remote: `https://github.com/KaReeeeeeeeEM/science-pupils-book-standard-five.git`
- Branch: `main`
- Hosting target: GitHub Pages-compatible static bundle (`.nojekyll` present)
- Deploy only when explicitly requested: yes
