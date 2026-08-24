# Mandatory Book and Repository Discovery

## 1. Repository inspection

- Repository root: `/Users/kareem/Documents/ChatGPT/Science Pupil's Book Standard Five`
- Git: `main`, tracking `origin/main`; clean before guide creation; latest commit `4fd07a7 Add sign language videos to all pages`.
- Existing pages: 89 HTML files total: 88 physical book pages plus the reader entry/navigation arrangement (`index.html`, then `pg002_sec001.html` through `pg088_sec001.html`).
- Shared CSS: `content/tailwind_output.css`, `assets/fonts.css`, Font Awesome vendor CSS, and `assets/tailwind_css.css`.
- Shared scripts: `assets/base.bundle.local.js`, `assets/base.bundle.min.js`, `assets/activities.bundle.local.js`, `assets/auto-fit.js`, `assets/offline-preloader.js`, and `assets/scorm.js`.
- Fonts: local Atkinson Hyperlegible regular/bold, Merriweather variable/italic, two additional bundled WOFF2 files, and Font Awesome webfonts.
- Images: 86 files in `images/`, plus `cover.png`; representative images load in the local preview.
- Navigation: fixed ADT reader controls injected into `#nav-container`; accessibility/interface UI is injected by the shared runtime; sign-language videos are enabled in the current conversion.
- Preview: `python3 -m http.server 4174 --bind 127.0.0.1`; verified at `http://127.0.0.1:4174/`.
- Deployment: static GitHub repository with `.nojekyll`; no replacement build system is required.
- Prior guide: `AGENTS.md` documents the ADT bundle conventions and protected compiled/vendor files. No equivalent seven workflow files existed.

## 2. Conversion-state decision

Decision: `existing conversion needing improvement`

Evidence: every physical page has a corresponding HTML page; content, images, localisation IDs, audio/video mappings, reader controls, fonts, and navigation already exist. Physical page 7 loads with the complete chapter text and correct high-level ordering, but a direct PDF/browser comparison shows a narrower/compressed page, different component shapes and colours, substantially different spacing/wrapping, and reader overlays in the viewing area.

Required action: preserve the ADT bundle and improve existing page files in place. Do not scaffold a new site or regenerate all pages.

## 3. PDF pattern study

The source is an 88-page, 557.906 × 767.669 pt Adobe InDesign PDF. Representative physical pages inspected visually: 1, 2, 3, 4, 5, 6, 7, 12, 20, 30, 40, 50, 60, 70, 80, and 88.

| Pattern | PDF pages inspected | Common traits | Exceptions |
|---|---|---|---|
| Page shell | 4, 7, 12, 20, 30, 40, 50, 60, 70, 80, 88 | white fixed page, soft green feathered side bands, narrow inner green rules | cover/title material differs |
| Typography | 7, 12, 20, 30, 40, 50, 60, 70, 80, 88 | dark sans-serif body, blue bold subheads, italic emphasis, mostly justified prose | cover/title and code-block artwork |
| Chapter opener | 7 | centred green rounded tab, centred green chapter topic, pale-green introduction panel | first numbered page of each chapter needs individual verification |
| Activity panel | 7, 30, 40, 70, 80 | magenta header, pale-pink body, rounded outer corners | continuation panels may omit a repeated header |
| Experiment/project | 60, 80 | green header with pale-green/white body and clear labels | project uses a darker green treatment |
| Tables | 20 | thin cyan borders, pale-blue header, compact cells | widths and fills are page-specific |
| Images/diagrams | 20, 30, 40, 60, 80 | source art retained; labelled figures use leader lines; bold `Figure N:` plus italic caption | Scratch blocks and inseparable labels remain image content |
| Glossary | 50, 88 | bold term column with definition column; no decorative card | large intentional blank remainder may occur |
| Page number/footer | 4, 7, 12, 20, 30, 40, 50, 60, 70, 80, 88 | thin green horizontal rule fading at ends; centred green hexagonal badge | front matter uses Roman numerals; cover differs |

## 4. Existing implementation baseline

The PDF is being audited; this baseline only identifies what can be reused or must be corrected in the implementation target. The repository is not a visual authority.

| HTML page | PDF page | What already matches | What needs improvement |
|---|---:|---|---|
| `pg007_sec001.html` | physical 7 / printed 1 | exact major text, content order, chapter/activity hierarchy, think artwork, page number | canvas scale, content width, wrapping, vertical spacing, top tab geometry, introduction and think-panel colours/shapes, footer placement; reader/sign overlay obscures comparison |
| `pg020_sec001.html` | physical 20 / printed 14 | page and table/figure content exist | full top-to-bottom visual audit pending |
| `pg040_sec001.html` | physical 40 / printed 34 | reproductive-system figure content exists | full top-to-bottom visual audit pending |
| `pg060_sec001.html` | physical 60 / printed 54 | experiment and figures exist | full top-to-bottom visual audit pending |
| `pg080_sec001.html` | physical 80 / printed 74 | code/activity/project content exists | full top-to-bottom visual audit pending |
| `pg088_sec001.html` | physical 88 / printed 82 | final glossary content exists | full top-to-bottom visual audit pending |

Canonical candidates are not yet approved. Physical page 7 is a useful semantic/component reference but fails visual fidelity.

## 5. Implementation strategy

- Preserve all current page files, stable `data-id` values, manifests, localisation/audio/video mappings, reader controls, local fonts, images, and deployment files.
- Add fidelity CSS/page-specific corrections only after confirming repeated patterns on multiple pages.
- Begin with physical page 1 (`index.html`) because the workflow is sequential; complete each physical page before proceeding.
- Do not edit compiled runtime/vendor files listed as protected in `AGENTS.md`; page markup or a dedicated fidelity override is preferred.
- Re-extract assets only when comparison proves an existing asset is corrupt, incomplete, or wrongly cropped.
- Follow the Hisabati reference only for viewer-shell behaviour: centred fixed-ratio white page, light-grey surrounding canvas, restrained shadow, clipped overflow, responsive whole-page scaling, and reader controls aligned beneath the book. Derive every internal science-page detail from the science PDF.

## Discovery completion gate

- [x] Conversion state classified with evidence
- [x] Existing architecture documented
- [x] Representative PDF patterns studied
- [x] Existing page baseline inspected in the in-app browser
- [x] `PROJECT_CONFIG.md` and `BOOK_GUIDE.md` initialized
- [x] In-place implementation strategy recorded

Discovery is complete. Canonical components will be promoted only after their first fully verified page.
