# REWBI Brand Style Guide

> **Real Estate & Wealth Building Institute** — practical real estate education designed to help everyday people build long-term wealth.
>
> This file is the plain-text version of the brand guidelines at <https://rewbihub.com/brand/>. Paste it into a chat with an LLM and ask it to design for, write for, or reference the REWBI brand.

---

## 01 — Introduction

**Brand overview.** Real Estate & Wealth Building Institute empowers investors through education, mentorship, and community-driven opportunities designed to create long-term financial growth and generational wealth.

**Vision.** To build a trusted real estate community where education, opportunity, and strategic partnerships empower individuals to create long-term wealth and financial freedom.

**Mission.** To provide investors with practical knowledge, mentorship, and industry connections that support confident decision-making and sustainable generational growth.

**Core values.** Community, education, trust, and long-term growth are the foundation of the institute. Every interaction, partnership, and learning experience is designed to support confident investing and generational wealth building.

**Tone of voice.** The brand communicates with clarity, confidence, and professionalism while staying approachable and community-focused. Messaging should feel educational, trustworthy, and grounded.

## 02 — Logo system

REWBI uses two lockups built from a custom skyline mark plus a wordmark:

- **Core logo — horizontal lockup.** The default. Reach for it first.
- **Alternative logo — vertical lockup.** For centered compositions and narrow spaces (avatars, signage, columns).

The logo is artwork, not type. Never recreate the wordmark in another font.

### Variations for each background

Pick the version with the most contrast against the surface rather than recoloring the core logo. Every variation ships in both horizontal and vertical.

| Background       | Use this version          |
|------------------|---------------------------|
| White            | Core full-color lockup    |
| Dark             | All-white lockup          |
| Burgundy         | On-burgundy lockup        |
| Gold             | On-gold lockup            |
| Busy light photo | Inverse lockup            |
| One ink          | One-color black lockup    |

## 03 — Logo usage

The proportions are built into the artwork. Scale the lockup as one piece and don't rebuild it.

- **A — icon height.** The base unit. A : C (icon height to wordmark height) is always **2.2 : 1**.
- **B — spacing.** The fixed gap between the icon and the wordmark: **25px** at the reference size (A = 154px, C = 70px). It scales with the logo; don't change it.
- **C — wordmark height.** The wordmark is optically aligned to the icon. Always scale both together, and never alter the size relationship or spacing.

Clear space:

- Keep at least one A square (the icon height) of empty space on every side of the lockup.
- The same rule protects the mark when it appears on its own.
- Nothing enters the clear zone: no text, images, or other logos.

Minimum size:

- On screen, keep the horizontal lockup at least **25px tall**.
- In print, keep it at least **0.5in (13mm)** wide.
- Below those thresholds, use the mark on its own instead of shrinking the lockup.

### Do

- Give the logo clear space on every side (use the **A** unit above).
- Use the variation that fits the background. Switch versions instead of recoloring.
- Scale it up when it looks cramped.
- Keep gold as a gradient wherever the medium can render one.

### Don't

- Rotate, stretch, condense, or rebuild the lockup.
- Outline it, blur it, or add a drop shadow.
- Recolor the mark or flatten gold to an off-brand tone.
- Retype the name in another typeface, or wrap text around the lockup.
- Place it on a busy or low-contrast background.

## 04 — Digital identity

The favicon and the app icon both use the skyline mark on its own, which stays legible down to 16px. Use the mark, not the full lockup, anywhere the space is square.

- **Favicon.** `icons/icon.svg` (full color) with `favicon.ico` bundling 16, 24, 32, 48, and 64px.
- **App icon.** `icon-on-burgundy.svg` for light contexts, `icon-all-white.svg` for dark mode.
- **Square PNGs.** 16, 32, 48, 64, 128, 256, 512, 1024, and 2048px.

## 05 — Color palette

Two groups. Signature colors carry the brand; supportive colors give it room to breathe. Every color ships with four tints from the brand sheets. The fourteen tones used in code live in `brand-colors/palette.scss` with HEX, HSL, and RGB.

### Signature

| Name | Hex | Role |
|---|---|---|
| Dark Wine | #610D2E | Primary brand color |
| Warm Sand | #F4C688 | Top of the logo gradient |
| Antique Bronze | #986822 | Base of the gradient, accents |
| Black | #000000 | One-ink artwork |

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
| Wine Tint | #DFCFD5 | Tags, quiet fills |
| Sand Tint | #FBE8CF | Accent tint |

### The gold gradient

Gold is a vertical gradient between two signature colors, not a flat tone: Warm Sand #F4C688 at the top falling to Antique Bronze #986822 at the base. Hold the gradient wherever the process allows. Flatten to a single stop only where a gradient cannot render, such as one-color print, small foil, or embroidery. Never substitute an off-brand gold. Published CMYK builds are in section 07.

## 06 — Typography

Two typefaces, both self-hosted as woff2.

- **Cormorant Garamond** is the primary typeface, for headlines, titles, quotations, and editorial display. Ships Medium, Medium Italic, SemiBold, Bold.
- **Inter** is the secondary typeface, for subheads, body copy, presentations, and interface text. Ships Regular, Italic, Medium, SemiBold, Bold.

### Hierarchy

| Role | Typeface | Minimum size |
|---|---|---|
| Headline 1 | Cormorant Garamond SemiBold | 36 / 43 pt |
| Headline 2 | Inter SemiBold | 30 / 36 pt |
| Subhead | Inter Medium | 12 / 14 pt |
| Body | Inter Regular | 8 / 12 pt |

### Fallbacks

| Brand font | First fallback | Second fallback |
|---|---|---|
| Cormorant Garamond | Playfair Display | Times New Roman |
| Inter | Roboto | Arial |

Use a fallback only when the brand font is unavailable on the device or unsupported by the software. Reserve all-caps for short display lines. The logotype is engraved artwork, so never re-typeset the name.

## 07 — Print (process CMYK)

Vector PDFs for press and designer handoff. Color is written directly as `DeviceCMYK`, with no RGB objects and no ICC profiles, and ink builds come from the REWBI signature color sheet rather than a generic conversion.

Each file is 3 pages: horizontal lockup, vertical lockup, mark only. Pages are cropped tight to the artwork with the required clear space built in as padding.

| File | Use on |
|---|---|
| `logo.pdf` | White and light backgrounds |
| `logo-all-white.pdf` | Dark, burgundy, gold, or photographic backgrounds (knockout) |
| `logo-all-black.pdf` | One-color print, engraving, stamping |
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

- Vector paths only: type outlined, no raster images, metadata stripped. No embedded output intent (not PDF/X); add one at the press if the job requires it.
- Black is **100% K only** and white is **zero ink**, so one-ink and knockout jobs are already correct. The signature sheet's rich black (75/68/67/90) is for large solid fields, not logo linework. Ask if you need that version.
- Gold is a **gradient**, Warm Sand falling to Antique Bronze. Hold the gradient wherever the process allows; flat stops only where a gradient can't render.
- Minimum print width: 0.5in for the horizontal lockup. Below that, use the mark alone.
- Foil, letterpress, deboss, and engraving start from the all-black or all-white file.
- Three colors used only by the **inverse** file sit outside the signature sheet and were converted arithmetically: #C69755 (0/24/58/22), #9A3454 (0/66/45/40), and #FAF6EF (0/2/4/2). Soft-proof them if you use that file.

## 08 — Downloads

Nothing is mirrored on the site. Every file is pulled live from the public brand repo on `main`:

- Repo home: <https://github.com/rewbihub/brand>
- Horizontal lockup: <https://github.com/rewbihub/brand/raw/main/logos/logo-horizontal.svg>
- Vertical lockup: <https://github.com/rewbihub/brand/raw/main/logos/logo-vertical.svg>
- Mark only: <https://github.com/rewbihub/brand/raw/main/icons/icon.svg>
- All-white (for dark): <https://github.com/rewbihub/brand/raw/main/logos/all-white/logo-horizontal-all-white.svg>
- On burgundy: <https://github.com/rewbihub/brand/raw/main/logos/on-burgundy/logo-horizontal-on-burgundy.svg>
- One-color black: <https://github.com/rewbihub/brand/raw/main/logos/all-black/logo-horizontal-all-black.svg>
- Icon variations: `icons/icon-inverse.svg`, `icon-all-white.svg`, `icon-all-black.svg`, `icon-on-burgundy.svg`, `icon-on-gold.svg`
- Square marks: <https://github.com/rewbihub/brand/raw/main/icons/256x256.png> (also 16, 32, 48, 64, 128, 512, 1024, 2048)
- `favicon.ico`: <https://github.com/rewbihub/brand/raw/main/icons/favicon.ico>
- Print CMYK PDFs: <https://github.com/rewbihub/brand/raw/main/print/logo.pdf> (also `logo-all-white`, `logo-all-black`, `logo-inverse`, `logo-on-burgundy`, `logo-on-gold`)

The vector master is `icons/icon.svg`. Editable source artwork lives in `src/` in the same repo.

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
- The audience is regular working people: first-time investors, professionals adding real estate to their portfolio, families building generational wealth.
- Lead with what something does, then why it matters.

Sources:

- Live guidelines: <https://rewbihub.com/brand/>
- Brand repository: <https://github.com/rewbihub/brand>
