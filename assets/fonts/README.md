# Fonts

Place the following **woff2** files in this directory. They are fingerprinted
through Hugo Pipes by `assets/css/typography.css` (which is rendered via
`resources.ExecuteAsTemplate` in `baseof.html`).

Filenames are case-sensitive and must match exactly:

```
assets/fonts/
├── CormorantGaramond-Medium.woff2
├── CormorantGaramond-MediumItalic.woff2
├── CormorantGaramond-SemiBold.woff2
├── Montserrat-Regular.woff2
├── Montserrat-Italic.woff2
├── Montserrat-Medium.woff2
└── Montserrat-SemiBold.woff2
```

## Where to get them

Both families are OFL/SIL licensed. Source the **woff2** builds:

- **Cormorant Garamond** — google/fonts repo: `ofl/cormorantgaramond/`
  Map the static TTFs to woff2 via `woff2_compress` or fetch pre-built
  woff2 from `fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500`
  (download, do NOT link the CDN URL — site is CSP `font-src 'self'`).

- **Montserrat** — google/fonts repo: `ofl/montserrat/`
  Same approach: pull weights 400 / 400-italic / 500 / 600 / 700.

## Subsetting (optional, recommended)

Each woff2 above will be ~25–60 KB unsubset. If you want to drop them to
8–20 KB each, subset to Latin only with `pyftsubset`:

```
pyftsubset Montserrat-Regular.ttf \
  --output-file=Montserrat-Regular.woff2 \
  --flavor=woff2 \
  --layout-features='*' \
  --unicodes='U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'
```

## License

Both families ship under the SIL Open Font License 1.1. Include their
`LICENSE.txt` files anywhere in the deploy (a `static/fonts/LICENSE.txt`
copy is fine). The OFL allows bundling and self-hosting; it does not
allow renaming the typefaces.

## After dropping the files in

Run `hugo` once. The build will fail loudly with `resource not found`
if any of the eight files is missing or misnamed — that's by design.
