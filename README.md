# REWBI

_\~&ensp;Real Estate &amp; Wealth Building Institute&ensp;\~_

The source for [rewbihub.com](https://rewbihub.com), a static site built with [Hugo](https://gohugo.io/).

## Licensing

Site code is licensed under the [MIT&nbsp;License](/LICENSE-MIT). Site content is licensed under the [Creative&nbsp;Commons Attribution&#8209;ShareAlike&nbsp;4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/). Brand assets, logos, and photographs are © Real Estate &amp; Wealth Building Institute and are not covered by these licenses. See [LICENSE.md](/LICENSE.md) for details.

## Hosting

The site is served as static files by [nginx](https://nginx.org/), behind [Cloudflare](https://www.cloudflare.com/).

## Local Working Environment

1. Install [Git](https://git-scm.com/downloads) and [Hugo](https://gohugo.io/getting-started/installing/).
   - Most users should use the [self&#8209;contained Hugo executable for their platform](https://github.com/gohugoio/hugo/releases). Linux package managers often provide old versions of Hugo.
1. Clone this repository: `git clone https://github.com/rewbihub/rewbihub.com`.
1. Run `hugo serve` to start the local development server at (by default) `http://localhost:1313`.
   - Alternatively run `hugo` to build the site into the `public/` directory.
