# surefiremarketing.co.nz

Full written content for **surefiremarketing.co.nz**. 38 pages · **64,059 words** · exported 1 September 2026.

## What is in here

| Folder | Contents |
|---|---|
| `pages/` | Every page as Markdown with front matter (URL, title, meta description, H1, author, word count). Portable into any CMS. |
| repo root | The built static site exactly as GitHub Pages serves it — clean URLs, schema, `sitemap.xml`, `robots.txt`, favicons, logos. |
| `research/` | SERP gap analysis: competitor heading outlines from the NZ and AU SERPs, uncontested opportunities, keyword variations. |
| `data/` | `operators.json` — the single source of truth for all 16 operators: affiliate links, bonuses, licences, logos, ratings. |

## Pages by size

| Words | URL | File |
|---:|---|---|
| 5,605 | `/` | `pages/home.md` |
| 2,952 | `/online-betting/` | `pages/online-betting.md` |
| 2,847 | `/online-pokies/` | `pages/online-pokies.md` |
| 2,547 | `/fast-payout-casinos/` | `pages/fast-payout-casinos.md` |
| 2,366 | `/online-casinos/bonuses/` | `pages/online-casinos--bonuses.md` |
| 2,198 | `/best-crypto-casinos/` | `pages/best-crypto-casinos.md` |
| 2,170 | `/best-sports-betting-sites/` | `pages/best-sports-betting-sites.md` |
| 2,076 | `/live-casinos/` | `pages/live-casinos.md` |
| 2,041 | `/no-deposit-casinos/` | `pages/no-deposit-casinos.md` |
| 1,950 | `/high-payout-casinos/` | `pages/high-payout-casinos.md` |
| 1,947 | `/payment-methods/` | `pages/payment-methods.md` |
| 1,892 | `/casino-reviews/` | `pages/casino-reviews.md` |
| 1,843 | `/nz-online-casino-law/` | `pages/nz-online-casino-law.md` |
| 1,758 | `/gambling-winnings-tax-nz/` | `pages/gambling-winnings-tax-nz.md` |
| 1,678 | `/casino-reviews/madcasino/` | `pages/casino-reviews--madcasino.md` |
| 1,607 | `/casino-reviews/kingdom/` | `pages/casino-reviews--kingdom.md` |
| 1,545 | `/casino-reviews/smash/` | `pages/casino-reviews--smash.md` |
| 1,520 | `/casino-reviews/rooster-bet/` | `pages/casino-reviews--rooster-bet.md` |
| 1,514 | `/casino-reviews/rivo/` | `pages/casino-reviews--rivo.md` |
| 1,489 | `/casino-reviews/lucky-vibe/` | `pages/casino-reviews--lucky-vibe.md` |
| 1,488 | `/casino-reviews/lucky7even/` | `pages/casino-reviews--lucky7even.md` |
| 1,485 | `/casino-reviews/spino/` | `pages/casino-reviews--spino.md` |
| 1,477 | `/casino-reviews/spinjo/` | `pages/casino-reviews--spinjo.md` |
| 1,472 | `/casino-reviews/bet-and-play/` | `pages/casino-reviews--bet-and-play.md` |
| 1,472 | `/casino-reviews/fortune-play/` | `pages/casino-reviews--fortune-play.md` |
| 1,445 | `/casino-reviews/ivibet/` | `pages/casino-reviews--ivibet.md` |
| 1,443 | `/casino-reviews/roby/` | `pages/casino-reviews--roby.md` |
| 1,425 | `/casino-reviews/lucky-circus/` | `pages/casino-reviews--lucky-circus.md` |
| 1,364 | `/casino-reviews/slotsgem/` | `pages/casino-reviews--slotsgem.md` |
| 1,337 | `/casino-reviews/hellspin/` | `pages/casino-reviews--hellspin.md` |
| 1,202 | `/responsible-gambling/` | `pages/responsible-gambling.md` |
| 1,072 | `/how-we-review/` | `pages/how-we-review.md` |
| 853 | `/terms/` | `pages/terms.md` |
| 830 | `/privacy/` | `pages/privacy.md` |
| 710 | `/about/` | `pages/about.md` |
| 520 | `/authors/` | `pages/authors.md` |
| 483 | `/cookie-policy/` | `pages/cookie-policy.md` |
| 436 | `/contact/` | `pages/contact.md` |

## Rebuilding

The site is generated, not hand-edited — the generators (`_build/gen_reviews.py`, `_build/gen_hub.py`, `_build/build.py`) live in the `casinokiwi.co.nz` working directory and are not part of this repo. To change an operator's affiliate link, bonus or logo, edit `data/operators.json` there and rebuild; it propagates to every page. Then copy the built output back over this repo's root.

Note: every URL, canonical, `og:url`, sitemap entry, JSON-LD reference and contact address in this repo has been rewritten from `casinokiwi.co.nz` to `surefiremarketing.co.nz`. A rebuild from the original generators will emit the old domain again unless they are pointed at this one first.

## Before you publish

Section 10 of the Online Casino Gambling Act prohibits advertising unlicensed online casino gambling to New Zealanders, and from 1 December 2026 unlicensed provision carries penalties up to NZ$5m. Every operator in `operators.json` is licensed offshore (Curaçao, Anjouan, Tobique), not by the DIA. Get a New Zealand gambling lawyer to review this before pointing a live domain at it.
