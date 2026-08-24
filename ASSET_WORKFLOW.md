# Illustration and Diagram Asset Workflow

Use images only for genuine source artwork or diagrams whose labels and leader lines are inseparable. Ordinary text, tables, panels, lists, captions, and reusable geometry remain HTML/CSS.

## Extraction

1. Render the exact physical PDF page at 150-300 DPI.
2. Crop by measured coordinates from the high-resolution render.
3. Include every integral label, connector, arrowhead, and small detail.
4. Exclude nearby prose, proof watermark, crop/registration marks, and unrelated borders.
5. Save a lossless master before cleaning.

```bash
pdftoppm -f PAGE -l PAGE -png -r 200 "/Users/kareem/Documents/SCIENCE STD 5 SB/SCIENCE STD 5 PB.pdf" tmp/pdfs/page
```

## Cleaning and verification

- Remove only the true paper/background colour; preserve anti-aliased coloured edges and thin leader lines.
- Do not threshold coloured artwork into black silhouettes or use colour-altering CSS filters.
- Compare against the exact PDF crop and against the real HTML section background.
- Confirm the asset is complete, not predominantly black, has no stray proof/crop marks, and contains no label duplicated in HTML.
- Match rendered width, height, aspect ratio, and alignment to the PDF.

## Naming and records

Continue the repository's existing `images/pgNNN_...` naming convention. Document every replacement in `PROGRESS.md` with physical page, source crop, and reason.
