# REWBI Brand Guidelines

> **Real Estate & Wealth Building Institute** — practical real estate education designed to help everyday people build long-term wealth.
>
> This file is the plain-text version of the brand guidelines at <https://rewbihub.com/brand/>. Paste it into a chat with an LLM and ask it to design for, write for, or reference the REWBI brand.

---

## 01 — The Logo

REWBI uses two lockups built from a custom skyline mark plus a wordmark:

- **Horizontal lockup** — the default. Reach for it first.
- **Vertical lockup** — tight or centered layouts only (avatars, signage, columns).

The logo is artwork, not type. Never recreate the wordmark in another font.

## 02 — Construction & sizing

These proportions are baked into the artwork. Don't rebuild it.

- **A — icon height.** The base unit. A : C (icon height to wordmark height) is always **2.2 : 1**.
- **B — spacing.** The fixed gap between the icon and the wordmark — **25px** at the reference size (A = 154px, C = 70px). It scales with the logo; don't change it.
- **C — wordmark height.** The wordmark is optically aligned to the icon. Always scale both together — never alter the size relationship or spacing.

Clear space:

- Keep at least one A square (the icon height) of empty space on every side of the lockup.
- The same rule protects the mark when it appears on its own.
- Nothing enters the clear zone — no text, images, or other logos.

Minimum size:

- On screen, keep the horizontal lockup at least **25px tall**.
- In print, keep it at least **0.5in (13mm)** wide.
- Below those thresholds, use the mark on its own instead of shrinking the lockup.

## 03 — Backgrounds

Always pick the cut with the most contrast for its surface. Don't recolor the default to fit.

| Surface         | Use this cut                            |
|-----------------|-----------------------------------------|
| White           | Default full-color lockup               |
| Dark            | All-white lockup                        |
| Burgundy        | On-burgundy lockup                      |
| Gold            | On-gold lockup                          |
| Busy light photo| Inverse lockup                          |
| Single ink      | 1-color black lockup                    |

## 04 — Color

Two groups. Signature colors carry the brand; supportive colors give it room to breathe. Every color ships with four tints from the brand sheets. The fourteen tones used in code live in `brand-colors/palette.scss` with HEX, HSL, and RGB.

### Signature

| Name | Hex | Role |
|---|---|---|
| Dark Wine | #610D2E | Primary brand |
| Warm Sand | #F4C688 | Top stop of the logo gradient |
| Antique Bronze | #986822 | Base stop of the gradient, accents |
| Black | #000000 | Single-ink artwork |

### Supportive

| Name | Hex | Role |
|---|---|---|
| Deep Espresso | #3A2B2B | Primary text |
| Muted Sage | #8A9484 | Soft accent |
| Soft Ivory | #F5F3EF | Page background |
| Stone Gray | #D8D1C7 | Borders, dividers |
| Gray | #666666 | Secondary text |
| Silver | #999999 | Metadata, disabled |
| White | #FFFFFF | Surfaces, knockout |

### Tints in code

| Name | Hex | Role |
|---|---|---|
| Wine Mid | #813D58 | Hover on wine surfaces |
| Wine Tint | #DFCFD5 | Wine tint, tags |
| Sand Tint | #FBE8CF | Accent tint |

### The gold gradient

Gold is a vertical gradient between two signature colors, not a flat tone: Warm Sand #F4C688 at the top falling to Antique Bronze #986822 at the base. Hold the gradient wherever the process allows. Flatten to a single stop only where a gradient cannot render, such as single-color print, small foil, or embroidery. Never substitute an off-brand gold. Published CMYK builds are in section 06.

## 05 — Typography

Two typefaces, both self-hosted as woff2.

- **Cormorant Garamond** — display and headlines. Ships Medium, Medium Italic, SemiBold, Bold.
- **Inter** — body, subheads, and interface copy. Ships Regular, Italic, Medium, SemiBold, Bold.

Set headlines in Cormorant Garamond to echo the engraved wordmark. Keep running text and interface copy in Inter. Reserve all-caps for short display lines. The logotype is engraved Trajan-style artwork, so never re-typeset the name.

## 06 — Print (process CMYK)

Vector PDFs for press and designer handoff. Color is written directly as `DeviceCMYK` — no RGB objects, no ICC profiles — and ink builds come from the REWBI Signature Colors sheet, not a generic conversion.

Each file is 3 pages: horizontal lockup, vertical lockup, mark only. Pages are cropped tight to the artwork with the required clear space built in as padding.

| File | Use on |
|---|---|
| `logo.pdf` | White and light backgrounds |
| `logo-all-white.pdf` | Dark, burgundy, gold, or photographic backgrounds (knockout) |
| `logo-all-black.pdf` | Single-color print, engraving, stamping |
| `logo-inverse.pdf` | Busy light backgrounds; keeps a dark wordmark |
| `logo-on-burgundy.pdf` | Backgrounds at or near #610D2E |
| `logo-on-gold.pdf` | Backgrounds in the gold range |

Ink builds:

| Name | Hex | CMYK in file |
|---|---|---|
| Dark Wine | #610D2E | 40 / 98 / 60 / 50 |
| Warm Sand | #F4C688 | 3 / 23 / 52 / 0 |
| Antique Bronze | #986822 | 33 / 56 / 100 / 18 |
| Black | #000000 | 0 / 0 / 0 / 100 |
| White | #FFFFFF | 0 / 0 / 0 / 0 |

Notes for the press:

- Vector paths only — type outlined, no raster images, metadata stripped. No embedded output intent (not PDF/X); add one at the press if the job requires it.
- Black is **100% K only** and white is **zero ink**, so single-ink and knockout jobs are already correct. The signature sheet's rich black (75/68/67/90) is for large solid fields, not logo linework — ask if you need that version.
- Gold is a **gradient**, Warm Sand falling to Antique Bronze. Hold the gradient wherever the process allows; flat stops only where a gradient can't render.
- Minimum print width: 0.5in for the horizontal lockup. Below that, use the mark alone.
- Foil, letterpress, deboss, engraving: start from the all-black or all-white file.
- Three colors used only by the **inverse** treatment sit outside the signature sheet and were converted arithmetically — #C69755 (0/24/58/22), #9A3454 (0/66/45/40), and #FAF6EF (0/2/4/2). Soft-proof them if you run that treatment.

## 07 — Assets

Nothing is mirrored on the site. Every file is pulled live from the public brand repo on `main`:

- Repo home: <https://github.com/rewbihub/brand>
- Horizontal lockup: <https://github.com/rewbihub/brand/raw/main/logos/logo-horizontal.svg>
- Vertical lockup: <https://github.com/rewbihub/brand/raw/main/logos/logo-vertical.svg>
- Mark only: <https://github.com/rewbihub/brand/raw/main/icons/icon.svg>
- All-white (for dark): <https://github.com/rewbihub/brand/raw/main/logos/all-white/logo-horizontal-all-white.svg>
- On burgundy: <https://github.com/rewbihub/brand/raw/main/logos/on-burgundy/logo-horizontal-on-burgundy.svg>
- 1-color black: <https://github.com/rewbihub/brand/raw/main/logos/all-black/logo-horizontal-all-black.svg>

The mark ships as square PNGs at 16, 32, 48, 64, 128, 256, 512, 1024, and 2048px; `favicon.ico` bundles 16, 24, 32, 48, and 64. The vector master is `icons/icon.svg`, with one file per treatment (`icon-all-black`, `icon-all-white`, `icon-inverse`, `icon-on-burgundy`, `icon-on-gold`). Every logo treatment ships both the horizontal and the vertical lockup. - Icon treatments: `icons/icon-inverse.svg`, `icon-all-white.svg`, `icon-all-black.svg`, `icon-on-burgundy.svg`, `icon-on-gold.svg`
- Square marks: <https://github.com/rewbihub/brand/raw/main/icons/256x256.png> (also 16, 32, 48, 64, 128, 512, 1024, 2048)
- `favicon.ico`: <https://github.com/rewbihub/brand/raw/main/icons/favicon.ico>
- Print CMYK PDFs: <https://github.com/rewbihub/brand/raw/main/print/logo.pdf> (also `logo-all-white`, `logo-all-black`, `logo-inverse`, `logo-on-burgundy`, `logo-on-gold`)

Editable source artwork lives in `src/` in the same repo.

## 08 — Usage

### Do

- Give the logo clear space on every side (use the **A** unit from §02).
- Pick the treatment that fits the background — switch cuts, don't recolor.
- Scale it up when it looks cramped.
- Keep gold as a gradient wherever the medium can render one.

### Don't

- Recolor the mark or flatten gold to an off-brand tone.
- Stretch, condense, rotate, or rebuild the lockup.
- Retype the name in another typeface.
- Place it on a busy or low-contrast background.

## 09 — Naming

Write the name the same way everywhere.

- **Full name:** Real Estate & Wealth Building Institute
- **Short form:** REWBI
- **Always:** Use the ampersand `&`. Never spell out "and."
- **Legal entity:** Real Estate and Wealth Building Institute LLC.

"Real Estate & Wealth Building Institute" and the REWBI skyline mark are trademarks of the Real Estate and Wealth Building Institute LLC. Don't use them to imply endorsement or partnership without written permission.

---

**Voice notes for writing copy:**

- Plain, practical, grounded. No hype, no jargon, no "unlock your potential."
- The audience is regular working people — first-time investors, professionals adding real estate to their portfolio, families building generational wealth.
- Lead with what something does, then why it matters.

Sources:

- Live guidelines: <https://rewbihub.com/brand/>
- Brand repository: <https://github.com/rewbihub/brand>
