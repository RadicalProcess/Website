# CLAUDE.md

## Language

All site copy uses American English: "license" (never "licence"), "color", "center", "meters",
"traveling", and month-first dates ("November 18", "September 12, 2026"). This applies to visible
text, alt text, `aria-label`s, titles and code comments alike.

## Translations

The site is in English (at the root) and Japanese (under `/ja/`). Each page is one template in
`src/pages/[...locale]/` that is built once per language; all of its copy lives in
`src/translations/<page>.ts`, with the English and Japanese text in the same file. Change wording there,
and layout in the template. Values that are the same in both languages (prices, dates, URLs) belong
in the template, not in the translations. Japanese copy is written to read as natural Japanese, not
as a literal translation of the English.
